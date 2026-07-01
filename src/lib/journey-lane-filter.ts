import type { Card, JiraIssueRecord, LaneKey, PainPointRecord, UserNeedRecord, UserStoryRecord } from './types';
import type { L1BoardLayout } from './board-columns';
import {
  extractPainPointIssueKey,
  normalizePainPointStatus,
  PAIN_POINT_STATUS_ORDER,
  sortPainPointCardsByStatus,
} from './pain-point-records';
import {
  extractUserStoryIssueKey,
  sortUserStoryCardsByStatus,
  userStoryStatusSortIndex,
} from './user-story-records';

/** Lanes with per-column cards, deduplication, journey filter dropdown, and column filtering. */
export const JOURNEY_FILTER_LANE_KEYS = [
  'actor',
  'system',
  'user_need',
  'pain_point',
  'user_story',
] as const;

export type JourneyFilterLaneKey = (typeof JOURNEY_FILTER_LANE_KEYS)[number];

export function isJourneyFilterLane(laneKey: LaneKey): laneKey is JourneyFilterLaneKey {
  return (JOURNEY_FILTER_LANE_KEYS as readonly string[]).includes(laneKey);
}

export interface JourneyFilterRecords {
  painPointRecords?: Record<string, PainPointRecord>;
  userNeedRecords?: Record<string, UserNeedRecord>;
  userStoryRecords?: Record<string, UserStoryRecord>;
  jiraIssueRecords?: Record<string, JiraIssueRecord>;
}

export interface JourneyLaneFilterOptions extends JourneyFilterRecords {
  laneKey?: LaneKey;
}

function painPointStatusForCard(
  card: Card,
  records: Record<string, PainPointRecord>,
): string | null {
  const issueKey = extractPainPointIssueKey(card);
  if (!issueKey) return null;
  const status = records[issueKey]?.status?.trim();
  return status || null;
}

function userStoryStatusForCard(
  card: Card,
  records: Record<string, UserStoryRecord>,
): string | null {
  const issueKey = extractUserStoryIssueKey(card);
  if (!issueKey) return null;
  const status = records[issueKey]?.status?.trim();
  return status || null;
}

function extractGenericIssueKeyFromCard(card: Card): string | null {
  const title = card.title?.trim() ?? '';
  const match = title.match(/\b[A-Z]{1,10}-\d+\b/);
  if (match) return match[0];
  const code = card.traceabilityCode?.trim();
  if (code && /\b[A-Z]{1,10}-\d+\b/.test(code)) return code;
  return null;
}

function resolveJiraLikeRecord(
  issueKey: string,
  records?: JourneyFilterRecords,
): JiraIssueRecord | undefined {
  return (
    records?.painPointRecords?.[issueKey]
    ?? records?.userNeedRecords?.[issueKey]
    ?? records?.userStoryRecords?.[issueKey]
    ?? records?.jiraIssueRecords?.[issueKey]
  );
}

function userNeedStatusForCard(card: Card, records?: JourneyFilterRecords): string | null {
  const issueKey = extractGenericIssueKeyFromCard(card);
  if (!issueKey) return null;
  const status = resolveJiraLikeRecord(issueKey, records)?.status?.trim();
  return status || null;
}

function cardMatchesJourneyFilter(
  card: Card,
  target: string,
  options?: JourneyLaneFilterOptions,
): boolean {
  if (options?.laneKey === 'pain_point' && options.painPointRecords) {
    return painPointStatusForCard(card, options.painPointRecords) === target;
  }
  if (options?.laneKey === 'user_story' && options.userStoryRecords) {
    return userStoryStatusForCard(card, options.userStoryRecords) === target;
  }
  if (options?.laneKey === 'user_need') {
    const status = userNeedStatusForCard(card, options);
    if (status) return status === target;
    // Fallback for boards without Jira metadata imported: filter by the visible text.
    return card.title.trim() === target;
  }
  return card.title.trim() === target;
}

/** Distinct pain point statuses on the board, in workflow order. */
export function collectPainPointStatuses(
  cards: Card[],
  records: Record<string, PainPointRecord>,
): string[] {
  const seen = new Set<string>();
  for (const card of cards) {
    if (card.laneKey !== 'pain_point') continue;
    const status = painPointStatusForCard(card, records);
    if (status) seen.add(status);
  }

  const workflowIndex = (status: string) => {
    const normalized = normalizePainPointStatus(status);
    const index = PAIN_POINT_STATUS_ORDER.indexOf(
      normalized as (typeof PAIN_POINT_STATUS_ORDER)[number],
    );
    return index === -1 ? PAIN_POINT_STATUS_ORDER.length : index;
  };

  return [...seen].sort((a, b) => {
    const byWorkflow = workflowIndex(b) - workflowIndex(a);
    return byWorkflow !== 0 ? byWorkflow : a.localeCompare(b);
  });
}

/** Distinct user story statuses on the board, in workflow order. */
export function collectUserStoryStatuses(
  cards: Card[],
  records: Record<string, UserStoryRecord>,
): string[] {
  const seen = new Set<string>();
  for (const card of cards) {
    if (card.laneKey !== 'user_story') continue;
    const status = userStoryStatusForCard(card, records);
    if (status) seen.add(status);
  }

  return [...seen].sort((a, b) => {
    const byWorkflow = userStoryStatusSortIndex(b) - userStoryStatusSortIndex(a);
    return byWorkflow !== 0 ? byWorkflow : a.localeCompare(b);
  });
}

/** Distinct user need statuses on the board. */
export function collectUserNeedStatuses(
  cards: Card[],
  records?: JourneyFilterRecords,
): string[] {
  const seen = new Set<string>();
  for (const card of cards) {
    if (card.laneKey !== 'user_need') continue;
    const status = userNeedStatusForCard(card, records);
    if (status) seen.add(status);
  }
  return [...seen].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

/** Dedupe key for a card in a column (coded lanes dedupe by code when present). */
function dedupeKeyForCard(card: Card): string {
  if (card.laneKey === 'pain_point' || card.laneKey === 'user_need' || card.laneKey === 'user_story') {
    const code = card.traceabilityCode?.trim();
    if (code) return code.toLowerCase();
  }
  return card.title.trim().toLowerCase();
}

/** One card per dedupe key in a column (keeps lowest order / first in list). */
export function dedupeLaneCardsInColumn(cards: Card[]): Card[] {
  const seen = new Set<string>();
  const deduped: Card[] = [];
  for (const card of cards) {
    const key = dedupeKeyForCard(card);
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

/** Sub-step column ids a card occupies (step-level cards span all columns in that step). */
function subStepIdsForCard(card: Card, layout: L1BoardLayout | null): string[] {
  if (card.subStepId) return [card.subStepId];
  if (!layout) return [];
  return layout.leafColumns
    .filter((col) => col.stepId === card.stepId)
    .map((col) => col.subStepId);
}

/** Primary card title per sub-step column (first matching card in that column). */
function titleBySubStepId(
  cards: Card[],
  laneKey: LaneKey,
  layout: L1BoardLayout | null,
): Map<string, string> {
  const bySubStep = new Map<string, string>();
  for (const card of cards) {
    if (card.laneKey !== laneKey) continue;
    const title = card.title.trim();
    if (!title) continue;
    for (const subStepId of subStepIdsForCard(card, layout)) {
      if (!bySubStep.has(subStepId)) bySubStep.set(subStepId, title);
    }
  }
  return bySubStep;
}

/** Distinct card titles in left-to-right column order (first appearance wins). */
export function collectJourneyLaneTypes(
  cards: Card[],
  layout: L1BoardLayout | null,
  laneKey: LaneKey,
): string[] {
  const titleBySubStep = titleBySubStepId(cards, laneKey, layout);
  const seen = new Set<string>();
  const ordered: string[] = [];

  const subStepOrder =
    layout?.leafColumns.map((col) => col.subStepId) ??
    cards.flatMap((card) =>
      card.laneKey === laneKey ? subStepIdsForCard(card, layout) : [],
    );

  for (const subStepId of subStepOrder) {
    const title = titleBySubStep.get(subStepId);
    if (!title || seen.has(title)) continue;
    seen.add(title);
    ordered.push(title);
  }

  return ordered;
}

/** Keep only cards matching the selected journey filter. */
export function filterLaneCardsBySelection(
  cards: Card[],
  filter: string | null,
  options?: JourneyLaneFilterOptions,
): Card[] {
  if (!filter) return cards;
  const target = filter.trim();
  return cards.filter((card) => cardMatchesJourneyFilter(card, target, options));
}

/** Dedupe and optionally restrict lane cards for display in a cell. */
export function displayJourneyLaneCards(
  cards: Card[],
  filter: string | null,
  options?: JourneyLaneFilterOptions,
): Card[] {
  const filtered = filterLaneCardsBySelection(dedupeLaneCardsInColumn(cards), filter, options);
  if (options?.laneKey === 'pain_point' && options.painPointRecords) {
    return sortPainPointCardsByStatus(filtered, options.painPointRecords);
  }
  if (options?.laneKey === 'user_story' && options.userStoryRecords) {
    return sortUserStoryCardsByStatus(filtered, options.userStoryRecords);
  }
  return filtered;
}

/** Distinct card types in the cell hidden by the active journey filter. */
export function countHiddenJourneyLaneTypes(
  cards: Card[],
  filter: string | null,
  options?: JourneyLaneFilterOptions,
): number {
  if (!filter) return 0;
  const deduped = dedupeLaneCardsInColumn(cards);
  const target = filter.trim();
  return deduped.filter((card) => !cardMatchesJourneyFilter(card, target, options)).length;
}

/** Sub-step column IDs that include a card matching the filter. */
export function subStepIdsForLaneFilter(
  cards: Card[],
  laneKey: LaneKey,
  filter: string,
  layout: L1BoardLayout | null = null,
  options?: JourneyLaneFilterOptions,
): Set<string> {
  const target = filter.trim();
  const ids = new Set<string>();
  const laneOptions: JourneyLaneFilterOptions = {
    laneKey,
    painPointRecords: options?.painPointRecords,
    userNeedRecords: options?.userNeedRecords,
    userStoryRecords: options?.userStoryRecords,
    jiraIssueRecords: options?.jiraIssueRecords,
  };
  for (const card of cards) {
    if (card.laneKey !== laneKey) continue;
    if (!cardMatchesJourneyFilter(card, target, laneOptions)) continue;
    for (const subStepId of subStepIdsForCard(card, layout)) {
      ids.add(subStepId);
    }
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
  layout: L1BoardLayout | null = null,
  records?: JourneyFilterRecords,
): Set<string> | null {
  const sets: Set<string>[] = [];
  for (const laneKey of JOURNEY_FILTER_LANE_KEYS) {
    const filter = filters[laneKey];
    if (filter) {
      sets.push(
        subStepIdsForLaneFilter(cards, laneKey, filter, layout, {
          laneKey,
          painPointRecords: records?.painPointRecords,
          userNeedRecords: records?.userNeedRecords,
          userStoryRecords: records?.userStoryRecords,
          jiraIssueRecords: records?.jiraIssueRecords,
        }),
      );
    }
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
