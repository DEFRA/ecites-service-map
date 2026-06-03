import { describe, it, expect } from 'vitest';
import {
  collectJourneyLaneTypes,
  collectPainPointStatuses,
  displayJourneyLaneCards,
  subStepIdsForLaneFilter,
  visibleSubStepIdsForJourneyFilters,
} from '../journey-lane-filter';
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
    { id: 'sub2', blueprintId: bpId, stageId: 'st1', stepId: 'step1', title: 'Comms to officers', order: 1 },
  ];
  return { layout: buildL1BoardLayout(stages, steps, subSteps), subSteps };
}

function makeCard(overrides: Partial<Card> & Pick<Card, 'laneKey' | 'title'>): Card {
  return {
    id: 'card',
    blueprintId: 'bp',
    stageId: 'st1',
    stepId: 'step1',
    body: '',
    order: 0,
    tags: [],
    sourceFile: '',
    sourceSheet: '',
    sourceRow: null,
    sourceRef: '',
    createdAt: '',
    updatedAt: '',
    ...overrides,
  };
}

describe('journey lane filter — user need and pain point', () => {
  const { layout } = makeLayout();

  it('collects user need types in column order', () => {
    const cards: Card[] = [
      makeCard({ id: 'un1', laneKey: 'user_need', title: 'Need clarity', subStepId: 'sub1' }),
      makeCard({ id: 'un2', laneKey: 'user_need', title: 'Need support', subStepId: 'sub2' }),
    ];
    expect(collectJourneyLaneTypes(cards, layout, 'user_need')).toEqual(['Need clarity', 'Need support']);
  });

  it('collects pain point types in column order', () => {
    const cards: Card[] = [
      makeCard({ id: 'pp1', laneKey: 'pain_point', title: 'Forms unclear', subStepId: 'sub2' }),
      makeCard({ id: 'pp2', laneKey: 'pain_point', title: 'Guidance fragmented', subStepId: 'sub1' }),
    ];
    expect(collectJourneyLaneTypes(cards, layout, 'pain_point')).toEqual([
      'Guidance fragmented',
      'Forms unclear',
    ]);
  });

  it('collects pain point statuses in workflow order', () => {
    const cards: Card[] = [
      makeCard({ id: 'pp1', laneKey: 'pain_point', title: 'CTS-95', subStepId: 'sub1' }),
      makeCard({ id: 'pp2', laneKey: 'pain_point', title: 'CTS-37', subStepId: 'sub2' }),
      makeCard({ id: 'pp3', laneKey: 'pain_point', title: 'CTS-77', subStepId: 'sub2', order: 1 }),
    ];
    const records = {
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'One',
        status: 'Needs much X-gov help to fix',
        description: '',
      },
      'CTS-37': {
        issueKey: 'CTS-37',
        summary: 'Two',
        status: 'eCITES can fix',
        description: '',
      },
      'CTS-77': {
        issueKey: 'CTS-77',
        summary: 'Three',
        status: 'APHA can fix or mitigate',
        description: '',
      },
    };

    expect(collectPainPointStatuses(cards, records)).toEqual([
      'Needs much X-gov help to fix',
      'APHA can fix or mitigate',
      'eCITES can fix',
    ]);
  });

  it('filters pain point cards by status', () => {
    const cards: Card[] = [
      makeCard({ id: 'pp1', laneKey: 'pain_point', title: 'CTS-95', subStepId: 'sub1' }),
      makeCard({ id: 'pp2', laneKey: 'pain_point', title: 'CTS-37', subStepId: 'sub1', order: 1 }),
    ];
    const records = {
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'One',
        status: 'Needs much X-gov help to fix',
        description: '',
      },
      'CTS-37': {
        issueKey: 'CTS-37',
        summary: 'Two',
        status: 'eCITES can fix',
        description: '',
      },
    };

    expect(
      displayJourneyLaneCards(cards, 'eCITES can fix', {
        laneKey: 'pain_point',
        painPointRecords: records,
      }),
    ).toHaveLength(1);
    expect(
      displayJourneyLaneCards(cards, 'eCITES can fix', {
        laneKey: 'pain_point',
        painPointRecords: records,
      })[0]?.title,
    ).toBe('CTS-37');
  });

  it('maps pain point status filters to sub-step columns', () => {
    const cards: Card[] = [
      makeCard({ id: 'pp1', laneKey: 'pain_point', title: 'CTS-95', subStepId: 'sub1' }),
      makeCard({ id: 'pp2', laneKey: 'pain_point', title: 'CTS-37', subStepId: 'sub2' }),
    ];
    const records = {
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'One',
        status: 'Needs much X-gov help to fix',
        description: '',
      },
      'CTS-37': {
        issueKey: 'CTS-37',
        summary: 'Two',
        status: 'eCITES can fix',
        description: '',
      },
    };

    expect(
      subStepIdsForLaneFilter(cards, 'pain_point', 'eCITES can fix', layout, {
        laneKey: 'pain_point',
        painPointRecords: records,
      }),
    ).toEqual(new Set(['sub2']));
  });

  it('maps step-level user need cards to all sub-step columns in that step', () => {
    const cards: Card[] = [
      makeCard({ id: 'un1', laneKey: 'user_need', title: 'Need clarity' }),
    ];
    expect(subStepIdsForLaneFilter(cards, 'user_need', 'Need clarity', layout)).toEqual(
      new Set(['sub1', 'sub2']),
    );
  });

  it('filters visible columns when user need and pain point filters are active', () => {
    const cards: Card[] = [
      makeCard({ id: 'un1', laneKey: 'user_need', title: 'Need clarity', subStepId: 'sub1' }),
      makeCard({ id: 'pp1', laneKey: 'pain_point', title: 'CTS-95', subStepId: 'sub2' }),
    ];
    const records = {
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'One',
        status: 'Forms unclear',
        description: '',
      },
    };
    const ids = visibleSubStepIdsForJourneyFilters(
      cards,
      { user_need: 'Need clarity', pain_point: 'Forms unclear' },
      layout,
      records,
    );
    expect(ids).toEqual(new Set());
  });

  it('dedupes and filters user need cards for display', () => {
    const cards: Card[] = [
      makeCard({ id: 'un1', laneKey: 'user_need', title: 'Need clarity', subStepId: 'sub1' }),
      makeCard({ id: 'un2', laneKey: 'user_need', title: 'Need support', subStepId: 'sub1', order: 1 }),
    ];
    expect(displayJourneyLaneCards(cards, 'Need clarity')).toHaveLength(1);
    expect(displayJourneyLaneCards(cards, 'Need clarity')[0]?.title).toBe('Need clarity');
  });

  it('keeps pain points with different traceability codes as separate cards', () => {
    const cards: Card[] = [
      makeCard({
        id: 'pp1',
        laneKey: 'pain_point',
        title: 'Guidance is unclear',
        traceabilityCode: 'CTS-100',
        subStepId: 'sub1',
      }),
      makeCard({
        id: 'pp2',
        laneKey: 'pain_point',
        title: 'Guidance is unclear',
        traceabilityCode: 'CTS-101',
        subStepId: 'sub1',
        order: 1,
      }),
    ];
    expect(displayJourneyLaneCards(cards, null)).toHaveLength(2);
  });
});
