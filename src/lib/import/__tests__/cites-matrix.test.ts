import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import {
  detectCitesBlueprintMatrix,
  fillMergedRow,
  needsCitesCsvRefresh,
  normalizeCitesBlueprintMatrix,
  parseCitesBlueprintRaw,
  repairStaleCitesBlueprint,
} from '../cites-matrix';
import { buildEcitesLifecycleEntities } from '../../ecites-lifecycle-data';

const FIXTURE = path.join(__dirname, 'fixtures', 'cites-service-blueprint.csv');

describe('fillMergedRow', () => {
  it('carries the last non-empty value across blanks', () => {
    expect(fillMergedRow(['Aware', '', '', 'Prepare'])).toEqual(['Aware', 'Aware', 'Aware', 'Prepare']);
  });
});

describe('CITES service blueprint matrix', () => {
  const text = fs.readFileSync(FIXTURE, 'utf8');
  const raw = parseCitesBlueprintRaw(text);

  it('detects the CITES matrix format', () => {
    expect(detectCitesBlueprintMatrix(raw)).toBe(true);
  });

  it('imports stages, merged steps, sub-steps and actors', () => {
    const { state, errors } = normalizeCitesBlueprintMatrix(raw, 'CITES Service blueprint - Sheet1.csv', 'Sheet1');
    expect(errors).toEqual([]);

    expect(state.blueprint.serviceName).toBe('CITES');
    expect(state.stages.map((s) => s.title)).toEqual([
      'Aware',
      'Prepare',
      'Use (Pre-movement)',
      'Use (At GB border)',
      'Use (At 3rd country border)',
      'Leave',
    ]);
    expect(state.steps.length).toBeGreaterThan(30);
    expect(state.subSteps?.length).toBe(120);

    const communication = state.steps.find((s) => s.title === 'Communication');
    expect(communication).toBeDefined();
    const commsSubSteps = (state.subSteps ?? []).filter((ss) => ss.stepId === communication!.id);
    expect(commsSubSteps.length).toBe(4);
    expect(commsSubSteps.map((ss) => ss.title)).toContain('Comms to applicants');

    const actorCards = state.cards.filter((c) => c.laneKey === 'actor');
    expect(actorCards.length).toBeGreaterThan(10);
    expect(actorCards.some((c) => c.title === 'Applicant')).toBe(true);

    const subSubCards = state.cards.filter((c) => c.laneKey === 'sub_sub_step');
    expect(subSubCards.length).toBeGreaterThan(0);
    expect(subSubCards.some((c) => c.title === 'System admin access')).toBe(true);
  });

  it('maps the Aware → Prepare boundary from the CSV (not the legacy lifecycle stub)', () => {
    const { state } = normalizeCitesBlueprintMatrix(raw, 'cites.csv', 'Sheet1');
    const aware = state.stages.find((s) => s.title === 'Aware')!;
    const prepare = state.stages.find((s) => s.title === 'Prepare')!;
    const guidance = state.steps.find((s) => s.stageId === aware.id && s.title === 'Guidance')!;
    const guidanceSubs = (state.subSteps ?? [])
      .filter((ss) => ss.stepId === guidance.id)
      .map((ss) => ss.title);

    expect(guidanceSubs).not.toContain('Other related guidance');
    expect(guidanceSubs[guidanceSubs.length - 1]).toBe('Guidance for teams adjacent to APHA CITES');

    const systemAccess = state.steps.find((s) => s.stageId === prepare.id && s.title === 'System access');
    expect(systemAccess).toBeDefined();
    const firstPrepareSubs = (state.subSteps ?? [])
      .filter((ss) => ss.stepId === systemAccess!.id)
      .map((ss) => ss.title);
    expect(firstPrepareSubs[0]).toBe('System access for APHA');
  });

  it('imports stage, step and sub-step descriptions from matrix rows', () => {
    const matrix = [
      ['STAGES', 'Aware', 'Aware'],
      ['STEPS', 'Communication', 'Communication'],
      ['SUB-STEPS', 'Comms to applicants', 'Comms to border force'],
      ['Stage description', 'Stage text here', ''],
      ['Steps description', 'Step text here', ''],
      ['Sub-steps description', 'Sub A text', 'Sub B text'],
      ['Actors', 'Applicant', 'Border force officer'],
    ];
    const { state, errors } = normalizeCitesBlueprintMatrix(matrix, 'test.csv', 'Sheet1');
    expect(errors).toEqual([]);

    const aware = state.stages.find((s) => s.title === 'Aware');
    expect(aware?.description).toBe('Stage text here');

    const communication = state.steps.find((s) => s.title === 'Communication');
    expect(communication?.description).toBe('Step text here');

    const subs = (state.subSteps ?? []).filter((ss) => ss.stepId === communication!.id);
    expect(subs.map((ss) => ss.description)).toEqual(['Sub A text', 'Sub B text']);
  });

  it('stacks multiple sub-sub-steps in one column when the sub-step repeats', () => {
    const { state } = normalizeCitesBlueprintMatrix(raw, 'cites.csv', 'Sheet1');
    const prepare = state.stages.find((s) => s.title === 'Prepare')!;
    const systemAccess = state.steps.find((s) => s.stageId === prepare.id && s.title === 'System access')!;
    const aphaSubSteps = (state.subSteps ?? []).filter(
      (ss) => ss.stepId === systemAccess.id && ss.title === 'System access for APHA',
    );
    expect(aphaSubSteps).toHaveLength(1);

    const subSubCards = state.cards.filter(
      (c) => c.subStepId === aphaSubSteps[0]!.id && c.laneKey === 'sub_sub_step',
    );
    expect(subSubCards.map((c) => c.title)).toEqual([
      'System admin access',
      'Set up new user access - onboarding',
      'Remove user access - offboarding',
    ]);
  });

  it('imports user journeys from the JOURNEYS section', () => {
    const { state, errors } = normalizeCitesBlueprintMatrix(raw, 'cites.csv', 'Sheet1');
    expect(errors).toEqual([]);

    const falcon = (state.userJourneys ?? []).find((journey) => journey.name === 'Falcon export');
    expect(falcon).toBeDefined();
    expect(falcon!.subStepIds.length).toBeGreaterThan(0);

    const firstSubStepId = falcon!.subStepIds[0]!;
    const firstColumn = falcon!.columns[firstSubStepId];
    expect(firstColumn?.storyTitle).toBeTruthy();
  });

  it('repairs a stale eCITES stub on refresh', () => {
    const bpId = 'bp-stub';
    const stub = buildEcitesLifecycleEntities(bpId);
    const stale = {
      blueprint: {
        id: bpId,
        serviceName: 'eCITES blueprint',
        description: '',
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      },
      stages: stub.stages,
      steps: stub.steps,
      subSteps: stub.subSteps,
      lanes: [],
      childBlueprints: [],
      cards: [],
      storyboardImages: [],
    } as import('@/lib/types').BlueprintState;

    expect(needsCitesCsvRefresh(stale)).toBe(true);
    const repaired = repairStaleCitesBlueprint(stale);
    expect((repaired.subSteps ?? []).length).toBe(120);
    expect(
      repaired.steps.some(
        (s) =>
          s.stageId === repaired.stages.find((st) => st.title === 'Prepare')?.id &&
          s.title === 'System access',
      ),
    ).toBe(true);
    expect(needsCitesCsvRefresh(repaired)).toBe(false);
  });
});
