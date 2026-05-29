/** @deprecated Import from `@/lib/journey-lane-filter` instead. */
import type { Card } from './types';
import type { L1BoardLayout } from './board-columns';
import {
  collectJourneyLaneTypes,
  countHiddenJourneyLaneTypes,
  displayJourneyLaneCards,
  subStepIdsForLaneFilter,
  dedupeLaneCardsInColumn,
  filterL1BoardLayout,
  JOURNEY_FILTER_LANE_KEYS,
} from './journey-lane-filter';

export {
  JOURNEY_FILTER_LANE_KEYS,
  displayJourneyLaneCards as displayActorLaneCards,
  countHiddenJourneyLaneTypes as countHiddenActorTypes,
  dedupeLaneCardsInColumn as dedupeActorCardsInColumn,
  filterL1BoardLayout,
};

/** @deprecated Use collectJourneyLaneTypes(cards, layout, 'actor') */
export function collectActorTypes(cards: Card[], layout: L1BoardLayout | null): string[] {
  return collectJourneyLaneTypes(cards, layout, 'actor');
}

/** @deprecated Use subStepIdsForLaneFilter(cards, 'actor', filter) */
export function subStepIdsForActorFilter(cards: Card[], filter: string): Set<string> {
  return subStepIdsForLaneFilter(cards, 'actor', filter);
}
