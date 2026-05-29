import type { UserJourney } from './types';

export function isJourneyInclusionMark(value: string): boolean {
  const v = value.trim().toLowerCase();
  return v === 'x' || v === '✓' || v === 'yes' || v === 'y';
}

export function activeUserJourney(
  userJourneys: UserJourney[] | undefined,
  activeId: string | null | undefined,
): UserJourney | null {
  if (!activeId || !userJourneys?.length) return null;
  return userJourneys.find((journey) => journey.id === activeId) ?? null;
}

export function userJourneyHeading(journey: UserJourney): string {
  return `${journey.name} journey`;
}

/** Sub-step column ids for the active user journey; null means no journey filter. */
export function visibleSubStepIdsForUserJourney(
  journey: UserJourney | null | undefined,
): Set<string> | null {
  if (!journey?.subStepIds.length) return null;
  return new Set(journey.subStepIds);
}

export function userJourneyColumnContent(
  journey: UserJourney | null | undefined,
  subStepId: string,
) {
  return journey?.columns[subStepId];
}
