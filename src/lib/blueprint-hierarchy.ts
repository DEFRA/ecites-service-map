import type { Stage, Step, SubStep } from './types';

export type HierarchyRowLevel = 'stage' | 'step' | 'subStep';

export interface HierarchyRow {
  id: string;
  level: HierarchyRowLevel;
  title: string;
  stageIndex: number;
}

function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

/** Flat stage → step → sub-step list for read-only hierarchy views. */
export function buildHierarchyRows(
  stages: Stage[],
  steps: Step[],
  subSteps: SubStep[] = [],
): HierarchyRow[] {
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

  const rows: HierarchyRow[] = [];

  sortByOrder(stages).forEach((stage, stageIndex) => {
    rows.push({
      id: stage.id,
      level: 'stage',
      title: stage.title,
      stageIndex,
    });

    const stageSteps = sortByOrder(stepsByStage.get(stage.id) ?? []);
    for (const step of stageSteps) {
      rows.push({
        id: step.id,
        level: 'step',
        title: step.title,
        stageIndex,
      });

      for (const subStep of sortByOrder(subStepsByStep.get(step.id) ?? [])) {
        rows.push({
          id: subStep.id,
          level: 'subStep',
          title: subStep.title,
          stageIndex,
        });
      }
    }
  });

  return rows;
}

/** Keep only rows on paths to the given sub-step columns. */
export function filterHierarchyRowsToSubSteps(
  rows: HierarchyRow[],
  visibleSubStepIds: Set<string>,
  steps: Step[],
  subSteps: SubStep[],
): HierarchyRow[] {
  if (visibleSubStepIds.size === 0) return [];

  const subStepById = new Map(subSteps.map((subStep) => [subStep.id, subStep]));
  const visibleStageIds = new Set<string>();
  const visibleStepIds = new Set<string>();

  for (const subStepId of visibleSubStepIds) {
    const subStep = subStepById.get(subStepId);
    if (!subStep) continue;
    visibleStepIds.add(subStep.stepId);
    visibleStageIds.add(subStep.stageId);
  }

  return rows.filter((row) => {
    if (row.level === 'stage') return visibleStageIds.has(row.id);
    if (row.level === 'step') return visibleStepIds.has(row.id);
    return visibleSubStepIds.has(row.id);
  });
}

export function hierarchyRowBackground(
  stageIndex: number,
  level: HierarchyRowLevel,
  stageCount: number,
): string {
  const hue = Math.round((stageIndex * 360) / Math.max(stageCount, 1));
  const saturation = level === 'stage' ? 48 : level === 'step' ? 32 : 20;
  const lightness = level === 'stage' ? 70 : level === 'step' ? 84 : 93;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}
