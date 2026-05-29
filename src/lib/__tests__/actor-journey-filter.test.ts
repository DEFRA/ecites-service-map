import { describe, it, expect } from 'vitest';
import {
  collectActorTypes,
  countHiddenActorTypes,
  displayActorLaneCards,
  filterL1BoardLayout,
  subStepIdsForActorFilter,
} from '../actor-journey-filter';
import { buildL1BoardLayout } from '../board-columns';
import type { Card, Stage, Step, SubStep } from '../types';

function makeLayout() {
  const bpId = 'bp';
  const stages: Stage[] = [
    { id: 'st1', blueprintId: bpId, title: 'Aware', outcome: '', order: 0 },
  ];
  const steps: Step[] = [
    { id: 'step1', blueprintId: bpId, stageId: 'st1', title: 'Communication', order: 0 },
  ];
  const subSteps: SubStep[] = [
    { id: 'sub1', blueprintId: bpId, stageId: 'st1', stepId: 'step1', title: 'Comms to applicants', order: 0 },
    { id: 'sub2', blueprintId: bpId, stageId: 'st1', stepId: 'step1', title: 'Comms to border force officers', order: 1 },
  ];
  return buildL1BoardLayout(stages, steps, subSteps);
}

describe('actor journey filter', () => {
  const cards: Card[] = [
    {
      id: 'c1',
      blueprintId: 'bp',
      stageId: 'st1',
      stepId: 'step1',
      subStepId: 'sub1',
      laneKey: 'actor',
      title: 'Applicant',
      body: '',
      order: 0,
      tags: [],
      sourceFile: '',
      sourceSheet: '',
      sourceRow: null,
      sourceRef: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 'c2',
      blueprintId: 'bp',
      stageId: 'st1',
      stepId: 'step1',
      subStepId: 'sub2',
      laneKey: 'actor',
      title: 'Border force officer',
      body: '',
      order: 0,
      tags: [],
      sourceFile: '',
      sourceSheet: '',
      sourceRow: null,
      sourceRef: '',
      createdAt: '',
      updatedAt: '',
    },
  ];

  it('dedupes duplicate actor titles in one column', () => {
    const duplicates: Card[] = Array.from({ length: 5 }, (_, i) => ({
      ...cards[0],
      id: `dup-${i}`,
      order: i,
    }));
    expect(displayActorLaneCards(duplicates, null)).toHaveLength(1);
    expect(displayActorLaneCards(duplicates, null)[0]?.title).toBe('Applicant');
  });

  it('filters actor cards to the selected journey', () => {
    expect(displayActorLaneCards(cards, 'Applicant')).toHaveLength(1);
    expect(displayActorLaneCards(cards, 'Applicant')[0]?.title).toBe('Applicant');
  });

  it('counts hidden actor types in a cell when filtered', () => {
    const column: Card[] = [
      cards[0],
      { ...cards[0], id: 'c3', title: 'Trade industry representative' },
    ];
    expect(countHiddenActorTypes(column, 'Applicant')).toBe(1);
    expect(countHiddenActorTypes(column, null)).toBe(0);
  });

  it('collects actor types in column order', () => {
    const layout = makeLayout();
    expect(collectActorTypes(cards, layout)).toEqual(['Applicant', 'Border force officer']);
  });

  it('returns sub-step ids for the selected actor', () => {
    expect(subStepIdsForActorFilter(cards, 'Applicant')).toEqual(new Set(['sub1']));
  });

  it('filters the board layout to matching columns only', () => {
    const layout = makeLayout();
    const filtered = filterL1BoardLayout(layout, new Set(['sub2']));
    expect(filtered.leafColumns).toHaveLength(1);
    expect(filtered.leafColumns[0]?.subStepId).toBe('sub2');
    expect(filtered.stages[0]?.span).toBe(1);
    expect(filtered.stages[0]?.steps[0]?.subSteps[0]?.title).toBe('Comms to border force officers');
  });
});
