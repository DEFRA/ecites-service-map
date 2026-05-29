import type { Stage, Step, SubStep } from './types';

export interface LeafColumn {
  stageId: string;
  stepId: string;
  subStepId: string;
}

export interface StepColumnGroup {
  stepId: string;
  subSteps: SubStep[];
  /** Width in leaf columns; 1 when the step has no sub-steps (blank sub-step band). */
  span: number;
}

export interface StageColumnGroup {
  stageId: string;
  steps: StepColumnGroup[];
  /** Width in leaf columns; 1 when the stage has no steps. */
  span: number;
}

export interface L1BoardLayout {
  stages: StageColumnGroup[];
  leafColumns: LeafColumn[];
}

function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export function buildL1BoardLayout(
  stages: Stage[],
  steps: Step[],
  subSteps: SubStep[],
): L1BoardLayout {
  const stepsByStage = new Map<string, Step[]>();
  for (const step of steps) {
    const list = stepsByStage.get(step.stageId) ?? [];
    list.push(step);
    stepsByStage.set(step.stageId, list);
  }

  const subStepsByStep = new Map<string, SubStep[]>();
  for (const subStep of subSteps) {
    const list = subStepsByStep.get(subStep.stepId) ?? [];
    list.push(subStep);
    subStepsByStep.set(subStep.stepId, list);
  }

  const leafColumns: LeafColumn[] = [];
  const stageGroups: StageColumnGroup[] = sortByOrder(stages).map((stage) => {
    const stageSteps = sortByOrder(stepsByStage.get(stage.id) ?? []);
    if (stageSteps.length === 0) {
      return { stageId: stage.id, steps: [], span: 1 };
    }

    const stepGroups: StepColumnGroup[] = stageSteps.map((step) => {
      const stepSubSteps = sortByOrder(subStepsByStep.get(step.id) ?? []);
      if (stepSubSteps.length === 0) {
        return { stepId: step.id, subSteps: [], span: 1 };
      }

      for (const subStep of stepSubSteps) {
        leafColumns.push({
          stageId: stage.id,
          stepId: step.id,
          subStepId: subStep.id,
        });
      }

      return { stepId: step.id, subSteps: stepSubSteps, span: stepSubSteps.length };
    });

    const span = stepGroups.reduce((sum, group) => sum + group.span, 0);
    return { stageId: stage.id, steps: stepGroups, span: Math.max(span, 1) };
  });

  return { stages: stageGroups, leafColumns };
}

export function getLeafColumnKey(subStepId: string, laneKey: string): string {
  return `${subStepId}::${laneKey}`;
}

export function getStepColumnKey(stepId: string, laneKey: string): string {
  return `${stepId}::${laneKey}`;
}

export function sortStepsForStage(steps: Step[], stageId: string): Step[] {
  return sortByOrder(steps.filter((step) => step.stageId === stageId));
}

/** First sub-step (or step) in a stage — used when adding cards in stage-only column view. */
export function getDefaultLeafTarget(
  stageId: string,
  steps: Step[],
  subSteps: SubStep[],
): { stepId?: string; subStepId?: string } {
  for (const step of sortStepsForStage(steps, stageId)) {
    const stepSubSteps = sortByOrder(subSteps.filter((ss) => ss.stepId === step.id));
    if (stepSubSteps.length > 0) {
      return { stepId: step.id, subStepId: stepSubSteps[0].id };
    }
  }
  const firstStep = sortStepsForStage(steps, stageId)[0];
  if (firstStep) return { stepId: firstStep.id };
  return {};
}

export function getFirstStepInStage(steps: Step[], stageId: string): Step | undefined {
  return sortStepsForStage(steps, stageId)[0];
}

/** Column count for a stage when showing one column per step (not sub-step). */
export function getStageStepColumnCount(stageGroup: StageColumnGroup): number {
  return Math.max(stageGroup.steps.length, 1);
}

/** First sub-step in a step — used when adding cards in step-only column view. */
export function getDefaultSubStepForStep(stepId: string, subSteps: SubStep[]): string | undefined {
  return sortByOrder(subSteps.filter((ss) => ss.stepId === stepId))[0]?.id;
}
