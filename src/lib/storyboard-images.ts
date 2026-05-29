import type { Stage, Step, SubStep, StoryboardImage } from './types';

export type StoryboardLevel = 'stage' | 'step' | 'subStep';

export type StoryboardAttachTarget =
  | { stageId: string }
  | { stepId: string }
  | { subStepId: string };

export interface StoryboardImageIndex {
  byStage: Map<string, StoryboardImage[]>;
  byStep: Map<string, StoryboardImage[]>;
  bySubStep: Map<string, StoryboardImage[]>;
}

export function getStoryboardLevel(
  stepHeadersVisible: boolean,
  subStepHeadersVisible: boolean,
  useThreeLayerLayout: boolean,
): StoryboardLevel {
  if (!useThreeLayerLayout) return 'step';
  // Sub-step headers take precedence — storyboard attaches only to sub-step columns.
  if (subStepHeadersVisible) return 'subStep';
  if (stepHeadersVisible) return 'step';
  return 'stage';
}

/** Images stored at the given level only (no roll-up from child columns). */
export function storyboardImagesAtLevel(
  index: StoryboardImageIndex,
  level: StoryboardLevel,
  targetId: string,
): StoryboardImage[] {
  return storyboardImagesForTarget(index, level, targetId);
}

export function getStoryboardImageLevel(image: StoryboardImage): StoryboardLevel {
  if (image.subStepId) return 'subStep';
  if (image.stageId && !image.stepId) return 'stage';
  return 'step';
}

function pushToMap(map: Map<string, StoryboardImage[]>, key: string, image: StoryboardImage) {
  const list = map.get(key) ?? [];
  list.push(image);
  map.set(key, list);
}

export function indexStoryboardImages(images: StoryboardImage[]): StoryboardImageIndex {
  const byStage = new Map<string, StoryboardImage[]>();
  const byStep = new Map<string, StoryboardImage[]>();
  const bySubStep = new Map<string, StoryboardImage[]>();

  for (const image of images) {
    const level = getStoryboardImageLevel(image);
    if (level === 'stage' && image.stageId) {
      pushToMap(byStage, image.stageId, image);
    } else if (level === 'subStep' && image.subStepId) {
      pushToMap(bySubStep, image.subStepId, image);
    } else if (image.stepId) {
      pushToMap(byStep, image.stepId, image);
    }
  }

  for (const map of [byStage, byStep, bySubStep]) {
    for (const list of map.values()) {
      list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }
  }

  return { byStage, byStep, bySubStep };
}

export function storyboardTargetId(target: StoryboardAttachTarget): string {
  if ('stageId' in target) return target.stageId;
  if ('subStepId' in target) return target.subStepId;
  return target.stepId;
}

export function storyboardImagesForTarget(
  index: StoryboardImageIndex,
  level: StoryboardLevel,
  targetId: string,
): StoryboardImage[] {
  if (level === 'stage') return index.byStage.get(targetId) ?? [];
  if (level === 'subStep') return index.bySubStep.get(targetId) ?? [];
  return index.byStep.get(targetId) ?? [];
}

export function shouldRemoveStoryboardImage(
  image: StoryboardImage,
  removed: { stageIds?: Set<string>; stepIds?: Set<string>; subStepIds?: Set<string> },
): boolean {
  if (image.stageId && removed.stageIds?.has(image.stageId)) return true;
  if (image.subStepId && removed.subStepIds?.has(image.subStepId)) return true;
  if (image.stepId && removed.stepIds?.has(image.stepId)) return true;
  return false;
}

interface StructureSnapshot {
  stages: Stage[];
  steps: Step[];
  subSteps?: SubStep[];
}

export function storyboardColumnKey(
  stageTitle: string,
  stepTitle: string,
  subStepTitle = '',
): string {
  return `${stageTitle}::${stepTitle}::${subStepTitle}`;
}

function columnKey(stageTitle: string, stepTitle: string, subStepTitle = ''): string {
  return storyboardColumnKey(stageTitle, stepTitle, subStepTitle);
}

function isStoryboardAttached(image: StoryboardImage, snapshot: StructureSnapshot): boolean {
  const subIds = new Set((snapshot.subSteps ?? []).map((s) => s.id));
  const stepIds = new Set(snapshot.steps.map((s) => s.id));
  const stageIds = new Set(snapshot.stages.map((s) => s.id));
  if (image.subStepId) return subIds.has(image.subStepId);
  if (image.stepId && !image.stageId) return stepIds.has(image.stepId);
  if (image.stageId && !image.stepId) return stageIds.has(image.stageId);
  return false;
}

function relinkByColumnKey(
  images: StoryboardImage[],
  next: StructureSnapshot,
  blueprintId: string,
): StoryboardImage[] {
  const subStepByKey = new Map<string, SubStep>();
  for (const ss of next.subSteps ?? []) {
    const stage = next.stages.find((s) => s.id === ss.stageId);
    const step = next.steps.find((s) => s.id === ss.stepId);
    subStepByKey.set(columnKey(stage?.title ?? '', step?.title ?? '', ss.title), ss);
  }

  const stepByKey = new Map<string, Step>();
  for (const step of next.steps) {
    const stage = next.stages.find((s) => s.id === step.stageId);
    stepByKey.set(columnKey(stage?.title ?? '', step.title), step);
  }

  const stageByTitle = new Map(next.stages.map((s) => [s.title, s]));

  return images.map((image) => {
    if (!image.columnKey) return image;
    const parts = image.columnKey.split('::');
    const stageTitle = parts[0] ?? '';
    const stepTitle = parts[1] ?? '';
    const subStepTitle = parts[2] ?? '';

    if (subStepTitle) {
      const ss = subStepByKey.get(columnKey(stageTitle, stepTitle, subStepTitle));
      if (!ss) return image;
      return { ...image, blueprintId, subStepId: ss.id, stepId: undefined, stageId: undefined };
    }
    if (stepTitle) {
      const step = stepByKey.get(columnKey(stageTitle, stepTitle));
      if (!step) return image;
      return { ...image, blueprintId, stepId: step.id, stageId: undefined, subStepId: undefined };
    }
    const stage = stageByTitle.get(stageTitle);
    if (!stage) return image;
    return { ...image, blueprintId, stageId: stage.id, stepId: undefined, subStepId: undefined };
  });
}

/**
 * Re-attach storyboard images whose IDs no longer exist after a structure reload.
 * Uses columnKey when present, otherwise remaps from a previous structure snapshot.
 */
export function relinkOrphanedStoryboardImages(
  state: { blueprint: { id: string }; stages: Stage[]; steps: Step[]; subSteps?: SubStep[]; storyboardImages?: StoryboardImage[] },
  previousStructure?: StructureSnapshot,
): StoryboardImage[] {
  const images = state.storyboardImages ?? [];
  if (images.length === 0) return images;

  const snapshot: StructureSnapshot = {
    stages: state.stages,
    steps: state.steps,
    subSteps: state.subSteps,
  };

  const withKeys = relinkByColumnKey(images, snapshot, state.blueprint.id);
  const attached = withKeys.filter((img) => isStoryboardAttached(img, snapshot));
  const orphaned = withKeys.filter((img) => !isStoryboardAttached(img, snapshot));

  if (orphaned.length === 0) return withKeys;
  if (!previousStructure) return attached;

  const remapped = remapStoryboardImages(
    orphaned,
    previousStructure,
    snapshot,
    state.blueprint.id,
  );

  const byId = new Map<string, StoryboardImage>();
  for (const img of [...attached, ...remapped]) {
    byId.set(img.id, img);
  }
  return Array.from(byId.values());
}

function findSubStepInNewStructure(
  oldSubStep: SubStep,
  oldSteps: Map<string, Step>,
  oldStages: Map<string, Stage>,
  subStepByKey: Map<string, SubStep>,
  newSnapshot: StructureSnapshot,
): SubStep | undefined {
  const oldStep = oldSteps.get(oldSubStep.stepId);
  const oldStage = oldStages.get(oldSubStep.stageId);
  const exact = subStepByKey.get(
    columnKey(oldStage?.title ?? '', oldStep?.title ?? '', oldSubStep.title),
  );
  if (exact) return exact;

  const sameStepTitle = (newSnapshot.subSteps ?? []).filter((ss) => {
    if (ss.title !== oldSubStep.title) return false;
    const step = newSnapshot.steps.find((s) => s.id === ss.stepId);
    return step?.title === oldStep?.title;
  });
  if (sameStepTitle.length === 1) return sameStepTitle[0];

  const byTitle = (newSnapshot.subSteps ?? []).filter((ss) => ss.title === oldSubStep.title);
  if (byTitle.length === 1) return byTitle[0];

  return undefined;
}

/**
 * Re-attach storyboard images after a structure import replaces stage/step/sub-step IDs.
 * Matches columns by stage + step + sub-step titles (with simpler fallbacks when unique).
 */
export function remapStoryboardImages(
  images: StoryboardImage[],
  previous: StructureSnapshot,
  next: StructureSnapshot,
  blueprintId: string,
): StoryboardImage[] {
  if (images.length === 0) return [];

  const oldStages = new Map(previous.stages.map((s) => [s.id, s]));
  const oldSteps = new Map(previous.steps.map((s) => [s.id, s]));
  const oldSubSteps = new Map((previous.subSteps ?? []).map((ss) => [ss.id, ss]));

  const subStepByKey = new Map<string, SubStep>();
  for (const ss of next.subSteps ?? []) {
    const stage = next.stages.find((s) => s.id === ss.stageId);
    const step = next.steps.find((s) => s.id === ss.stepId);
    subStepByKey.set(columnKey(stage?.title ?? '', step?.title ?? '', ss.title), ss);
  }

  const stepByKey = new Map<string, Step>();
  for (const step of next.steps) {
    const stage = next.stages.find((s) => s.id === step.stageId);
    stepByKey.set(columnKey(stage?.title ?? '', step.title), step);
  }

  const stageByTitle = new Map(next.stages.map((s) => [s.title, s]));

  const remapped: StoryboardImage[] = [];

  for (const image of images) {
    const level = getStoryboardImageLevel(image);

    if (level === 'subStep' && image.subStepId) {
      const oldSs = oldSubSteps.get(image.subStepId);
      if (!oldSs) continue;
      const newSs = findSubStepInNewStructure(oldSs, oldSteps, oldStages, subStepByKey, next);
      if (!newSs) continue;
      remapped.push({
        ...image,
        blueprintId,
        stageId: undefined,
        stepId: undefined,
        subStepId: newSs.id,
        columnKey: columnKey(
          next.stages.find((s) => s.id === newSs.stageId)?.title ?? '',
          next.steps.find((s) => s.id === newSs.stepId)?.title ?? '',
          newSs.title,
        ),
      });
      continue;
    }

    if (level === 'step' && image.stepId) {
      const oldStep = oldSteps.get(image.stepId);
      if (!oldStep) continue;
      const oldStage = oldStages.get(oldStep.stageId);
      const newStep = stepByKey.get(columnKey(oldStage?.title ?? '', oldStep.title));
      if (!newStep) continue;
      remapped.push({
        ...image,
        blueprintId,
        stageId: undefined,
        stepId: newStep.id,
        subStepId: undefined,
        columnKey: columnKey(
          next.stages.find((s) => s.id === newStep.stageId)?.title ?? '',
          newStep.title,
        ),
      });
      continue;
    }

    if (level === 'stage' && image.stageId) {
      const oldStage = oldStages.get(image.stageId);
      if (!oldStage) continue;
      const newStage = stageByTitle.get(oldStage.title);
      if (!newStage) continue;
      remapped.push({
        ...image,
        blueprintId,
        stageId: newStage.id,
        stepId: undefined,
        subStepId: undefined,
        columnKey: columnKey(newStage.title, ''),
      });
    }
  }

  return remapped;
}
