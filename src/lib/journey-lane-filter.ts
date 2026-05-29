import type { Card, LaneKey } from './types';
import type { L1BoardLayout } from './board-columns';

/** Lanes with per-column cards, deduplication, journey filter dropdown, and column filtering. */
export const JOURNEY_FILTER_LANE_KEYS = ['actor', 'system', 'user_need', 'pain_point'] as const;

export type JourneyFilterLaneKey = (typeof JOURNEY_FILTER_LANE_KEYS)[number];

export function isJourneyFilterLane(laneKey: LaneKey): laneKey is JourneyFilterLaneKey {
  return (JOURNEY_FILTER_LANE_KEYS as readonly string[]).includes(laneKey);
}

/** One card per title in a column (keeps lowest order / first in list). */
export function dedupeLaneCardsInColumn(cards: Card[]): Card[] {
  const seen = new Set<string>();
  const deduped: Card[] = [];
  for (const card of cards) {
    const key = card.title.trim().toLowerCase();
    if (!key) {
      deduped.push(card);
      continue;
    }
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(card);
  }
  return deduped;
}

/** Primary card title per sub-step column (first matching card in that column). */
function titleBySubStepId(cards: Card[], laneKey: LaneKey): Map<string, string> {
  const bySubStep = new Map<string, string>();
  for (const card of cards) {
    if (card.laneKey !== laneKey || !card.subStepId) continue;
    const title = card.title.trim();
    if (!title || bySubStep.has(card.subStepId)) continue;
    bySubStep.set(card.subStepId, title);
  }
  return bySubStep;
}

/** Distinct card titles in left-to-right column order (first appearance wins). */
export function collectJourneyLaneTypes(
  cards: Card[],
  layout: L1BoardLayout | null,
  laneKey: LaneKey,
): string[] {
  const titleBySubStep = titleBySubStepId(cards, laneKey);
  const seen = new Set<string>();
  const ordered: string[] = [];

  const subStepOrder =
    layout?.leafColumns.map((col) => col.subStepId) ??
    cards
      .filter((card) => card.laneKey === laneKey && card.subStepId)
      .map((card) => card.subStepId as string);

  for (const subStepId of subStepOrder) {
    const title = titleBySubStep.get(subStepId);
    if (!title || seen.has(title)) continue;
    seen.add(title);
    ordered.push(title);
  }

  return ordered;
}

/** Keep only cards matching the selected journey filter. */
export function filterLaneCardsBySelection(cards: Card[], filter: string | null): Card[] {
  if (!filter) return cards;
  const target = filter.trim();
  return cards.filter((card) => card.title.trim() === target);
}

/** Dedupe and optionally restrict lane cards for display in a cell. */
export function displayJourneyLaneCards(cards: Card[], filter: string | null): Card[] {
  return filterLaneCardsBySelection(dedupeLaneCardsInColumn(cards), filter);
}

/** Distinct card types in the cell hidden by the active journey filter. */
export function countHiddenJourneyLaneTypes(cards: Card[], filter: string | null): number {
  if (!filter) return 0;
  const deduped = dedupeLaneCardsInColumn(cards);
  return deduped.filter((card) => card.title.trim() !== filter.trim()).length;
}

/** Sub-step column IDs that include a card matching the filter title. */
export function subStepIdsForLaneFilter(cards: Card[], laneKey: LaneKey, filter: string): Set<string> {
  const target = filter.trim();
  const ids = new Set<string>();
  for (const card of cards) {
    if (card.laneKey !== laneKey || !card.subStepId) continue;
    if (card.title.trim() === target) ids.add(card.subStepId);
  }
  return ids;
}

/** Intersect multiple sub-step id sets (empty intersection returns empty set). */
export function intersectSubStepIdSets(sets: Set<string>[]): Set<string> {
  if (sets.length === 0) return new Set();
  let result = sets[0];
  for (let i = 1; i < sets.length; i++) {
    const next = new Set<string>();
    for (const id of result) {
      if (sets[i].has(id)) next.add(id);
    }
    result = next;
  }
  return result;
}

/** Build visible sub-step ids from active journey lane filters (null = show all columns). */
export function visibleSubStepIdsForJourneyFilters(
  cards: Card[],
  filters: Partial<Record<JourneyFilterLaneKey, string | null>>,
): Set<string> | null {
  const sets: Set<string>[] = [];
  for (const laneKey of JOURNEY_FILTER_LANE_KEYS) {
    const filter = filters[laneKey];
    if (filter) sets.push(subStepIdsForLaneFilter(cards, laneKey, filter));
  }
  if (sets.length === 0) return null;
  return intersectSubStepIdSets(sets);
}

/** Restrict the L1 column tree to the given sub-step columns; recomputes stage/step spans. */
export function filterL1BoardLayout(
  layout: L1BoardLayout,
  visibleSubStepIds: Set<string>,
): L1BoardLayout {
  const leafColumns = layout.leafColumns.filter((col) => visibleSubStepIds.has(col.subStepId));

  const stages = layout.stages
    .map((stageGroup) => {
      const steps = stageGroup.steps
        .map((stepGroup) => {
          if (stepGroup.subSteps.length === 0) {
            return null;
          }
          const subSteps = stepGroup.subSteps.filter((ss) => visibleSubStepIds.has(ss.id));
          if (subSteps.length === 0) return null;
          return {
            ...stepGroup,
            subSteps,
            span: subSteps.length,
          };
        })
        .filter((step): step is NonNullable<typeof step> => step !== null);

      if (steps.length === 0) return null;

      const span = steps.reduce((sum, step) => sum + step.span, 0);
      return {
        ...stageGroup,
        steps,
        span: Math.max(span, 1),
      };
    })
    .filter((stage): stage is NonNullable<typeof stage> => stage !== null);

  return { stages, leafColumns };
}
