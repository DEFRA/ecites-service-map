import { describe, it, expect } from 'vitest';
import { v4 as uuid } from 'uuid';
import { buildEcitesLifecycleEntities } from '../ecites-lifecycle-data';
import { buildExportColumns, buildSpreadsheetRows } from '../export-spreadsheet';
import { DEFAULT_LANES } from '../lane-definitions';
import type { BlueprintState, Card } from '../types';

function makeEcitesState(overrides: Partial<BlueprintState> = {}): BlueprintState {
  const blueprintId = uuid();
  const { stages, steps, subSteps } = buildEcitesLifecycleEntities(blueprintId);

  return {
    blueprint: {
      id: blueprintId,
      serviceName: 'eCITES blueprint',
      description: '',
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
    },
    stages,
    steps,
    subSteps,
    lanes: DEFAULT_LANES.map((lane) => ({ ...lane, visible: lane.key === 'actor' || lane.key === 'pain_point' })),
    childBlueprints: [],
    cards: [],
    storyboardImages: [],
    storyboardVisible: true,
    storyboardCollapsed: false,
    stepHeadersVisible: true,
    subStepHeadersVisible: true,
    cardLinks: [],
    evidence: [],
    opportunities: [],
    solutions: [],
    assumptions: [],
    strategicGoals: [],
    outcomes: [],
    systemOutcomes: [],
    behaviourOutcomes: [],
    serviceOutcomes: [],
    stepLinks: [],
    requirements: [],
    apiContracts: [],
    uiScaffolds: [],
    traceabilityCounters: {},
    ...overrides,
  };
}

describe('buildExportColumns', () => {
  it('creates one column per sub-step when steps and sub-steps are visible', () => {
    const state = makeEcitesState();
    const columns = buildExportColumns(state);

    expect(columns.length).toBe(18);
    expect(columns[0].stage.title).toBe('Aware');
    expect(columns[0].step?.title).toBe('Communication');
    expect(columns[0].subStep?.title).toBe('Comms to applicants');
    expect(columns[1].subStep?.title).toBe('Comms to customs agents & trade related organisations');
  });

  it('always creates one column per sub-step even when headers are hidden on the board', () => {
    const state = makeEcitesState({ stepHeadersVisible: false, subStepHeadersVisible: false });
    const columns = buildExportColumns(state);

    expect(columns.length).toBe(18);
    expect(columns[0].subStep?.title).toBe('Comms to applicants');
  });

  it('always creates one column per sub-step when sub-step headers are hidden on the board', () => {
    const state = makeEcitesState({ subStepHeadersVisible: false });
    const columns = buildExportColumns(state);

    expect(columns.length).toBe(18);
    expect(columns[1].subStep?.title).toBe('Comms to customs agents & trade related organisations');
  });
});

describe('buildSpreadsheetRows', () => {
  it('writes hierarchy labels in column A and stage/step/sub-step headers across columns', () => {
    const state = makeEcitesState();
    const rows = buildSpreadsheetRows(state);

    expect(rows.length).toBe(3 + DEFAULT_LANES.length);
    expect(rows[0][0]).toBe('STAGES');
    expect(rows[1][0]).toBe('STEPS');
    expect(rows[2][0]).toBe('SUB-STEPS');

    expect(rows[0][1]).toBe('Aware');
    expect(rows[1][1]).toBe('Communication');
    expect(rows[2][1]).toBe('Comms to applicants');
    expect(rows[2][2]).toBe('Comms to customs agents & trade related organisations');
    expect(rows[0][2]).toBe('Aware');
    expect(rows[1][2]).toBe('Communication');
  });

  it('includes hidden lanes in export', () => {
    const state = makeEcitesState();
    const rows = buildSpreadsheetRows(state);
    const laneLabels = rows.slice(3).map((row) => row[0]);

    expect(laneLabels).toContain('User need');
    expect(laneLabels.length).toBe(DEFAULT_LANES.length);
  });

  it('writes card content in matching columns', () => {
    const state = makeEcitesState();
    const commsApplicants = state.subSteps!.find((ss) => ss.title === 'Comms to applicants')!;
    const card: Card = {
      id: uuid(),
      blueprintId: state.blueprint.id,
      stageId: commsApplicants.stageId,
      stepId: commsApplicants.stepId,
      subStepId: commsApplicants.id,
      laneKey: 'actor',
      title: 'Applicant',
      body: '',
      order: 0,
      tags: [],
      sourceFile: '',
      sourceSheet: '',
      sourceRow: null,
      sourceRef: '',
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
    };

    const rows = buildSpreadsheetRows({ ...state, cards: [card] });
    const actorRow = rows.find((row) => row[0] === 'Actors');

    expect(actorRow).toBeDefined();
    expect(actorRow![1]).toBe('Applicant');
  });
});
