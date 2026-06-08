import { describe, it, expect } from 'vitest';
import { buildHierarchyRows, filterHierarchyRowsToSubSteps, hierarchyRowBackground } from '../blueprint-hierarchy';
import type { Stage, Step, SubStep } from '../types';

function stage(id: string, order: number): Stage {
  return {
    id,
    blueprintId: 'bp',
    title: `Stage ${order + 1}`,
    outcome: '',
    order,
  };
}

function step(id: string, stageId: string, order: number): Step {
  return {
    id,
    blueprintId: 'bp',
    stageId,
    title: `Step ${order + 1}`,
    order,
  };
}

function subStep(id: string, stageId: string, stepId: string, order: number): SubStep {
  return {
    id,
    blueprintId: 'bp',
    stageId,
    stepId,
    title: `Sub-step ${order + 1}`,
    order,
  };
}

describe('blueprint hierarchy', () => {
  it('lists stages, steps and sub-steps in order', () => {
    const stages = [stage('st-1', 0), stage('st-2', 1)];
    const steps = [step('ss-1', 'st-1', 0), step('ss-2', 'st-1', 1), step('ss-3', 'st-2', 0)];
    const subSteps = [
      subStep('sbs-1', 'st-1', 'ss-1', 0),
      subStep('sbs-2', 'st-1', 'ss-1', 1),
      subStep('sbs-3', 'st-2', 'ss-3', 0),
    ];

    const rows = buildHierarchyRows(stages, steps, subSteps);
    expect(rows.map((row) => row.level)).toEqual([
      'stage',
      'step',
      'subStep',
      'subStep',
      'step',
      'stage',
      'step',
      'subStep',
    ]);
  });

  it('shades each level lighter within the same stage hue', () => {
    const stageBg = hierarchyRowBackground(0, 'stage', 2);
    const stepBg = hierarchyRowBackground(0, 'step', 2);
    const subStepBg = hierarchyRowBackground(0, 'subStep', 2);

    expect(stageBg).not.toBe(stepBg);
    expect(stepBg).not.toBe(subStepBg);
    expect(hierarchyRowBackground(0, 'stage', 2)).not.toBe(hierarchyRowBackground(1, 'stage', 2));
  });

  it('filters rows to paths for selected sub-steps', () => {
    const stages = [stage('st-1', 0), stage('st-2', 1)];
    const steps = [step('ss-1', 'st-1', 0), step('ss-2', 'st-1', 1), step('ss-3', 'st-2', 0)];
    const subSteps = [
      subStep('sbs-1', 'st-1', 'ss-1', 0),
      subStep('sbs-2', 'st-1', 'ss-2', 0),
      subStep('sbs-3', 'st-2', 'ss-3', 0),
    ];

    const rows = buildHierarchyRows(stages, steps, subSteps);
    const filtered = filterHierarchyRowsToSubSteps(rows, new Set(['sbs-1']), steps, subSteps);

    expect(filtered.map((row) => row.level)).toEqual(['stage', 'step', 'subStep']);
    expect(filtered.map((row) => row.id)).toEqual(['st-1', 'ss-1', 'sbs-1']);
  });
});
