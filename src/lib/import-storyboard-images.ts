import { unzipSync } from 'fflate';
import {
  getStoryboardImageLevel,
  relinkOrphanedStoryboardImages,
  storyboardColumnKey,
  type StoryboardAttachTarget,
} from './storyboard-images';
import type { BlueprintState, StoryboardImage } from './types';

export type StoryboardManifestEntry = {
  id: string;
  filename: string;
  columnKey?: string;
  stageId?: string;
  stepId?: string;
  subStepId?: string;
};

export type StoryboardImportItem = StoryboardManifestEntry & {
  dataUrl: string;
};

export type StoryboardImportResult = {
  applied: number;
  unmatched: string[];
};

type StoryboardManifest = {
  version?: number;
  images: StoryboardManifestEntry[];
};

function extToMime(ext: string): string {
  if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
  if (ext === 'webp') return 'image/webp';
  if (ext === 'gif') return 'image/gif';
  return 'image/png';
}

function bytesToDataUrl(bytes: Uint8Array, filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() ?? 'png';
  const mime = extToMime(ext);
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return `data:${mime};base64,${btoa(binary)}`;
}

function cloneDocument(doc: BlueprintState): BlueprintState {
  try {
    return structuredClone(doc);
  } catch {
    return JSON.parse(JSON.stringify(doc)) as BlueprintState;
  }
}

function resolveTargetFromColumnKey(
  doc: BlueprintState,
  columnKey: string,
): StoryboardAttachTarget | null {
  const parts = columnKey.split('::');
  const stageTitle = parts[0] ?? '';
  const stepTitle = parts[1] ?? '';
  const subStepTitle = parts[2] ?? '';

  if (subStepTitle) {
    const subStep = (doc.subSteps ?? []).find((ss) => {
      const stage = doc.stages.find((s) => s.id === ss.stageId);
      const step = doc.steps.find((s) => s.id === ss.stepId);
      return stage?.title === stageTitle && step?.title === stepTitle && ss.title === subStepTitle;
    });
    return subStep ? { subStepId: subStep.id } : null;
  }

  if (stepTitle) {
    const step = doc.steps.find((st) => {
      const stage = doc.stages.find((s) => s.id === st.stageId);
      return stage?.title === stageTitle && st.title === stepTitle;
    });
    return step ? { stepId: step.id } : null;
  }

  const stage = doc.stages.find((s) => s.title === stageTitle);
  return stage ? { stageId: stage.id } : null;
}

function createStoryboardImage(
  doc: BlueprintState,
  target: StoryboardAttachTarget,
  dataUrl: string,
  columnKey: string,
  id?: string,
  ts?: string,
): StoryboardImage {
  const stamp = ts ?? new Date().toISOString();
  const imageId = id && id.length > 0 ? id : crypto.randomUUID();

  if ('stageId' in target) {
    return {
      id: imageId,
      blueprintId: doc.blueprint.id,
      stageId: target.stageId,
      columnKey,
      dataUrl,
      createdAt: stamp,
      updatedAt: stamp,
    };
  }

  if ('subStepId' in target) {
    return {
      id: imageId,
      blueprintId: doc.blueprint.id,
      subStepId: target.subStepId,
      columnKey,
      dataUrl,
      createdAt: stamp,
      updatedAt: stamp,
    };
  }

  return {
    id: imageId,
    blueprintId: doc.blueprint.id,
    stepId: target.stepId,
    columnKey,
    dataUrl,
    createdAt: stamp,
    updatedAt: stamp,
  };
}

function columnKeyForTarget(doc: BlueprintState, target: StoryboardAttachTarget): string {
  if ('stageId' in target) {
    const stage = doc.stages.find((s) => s.id === target.stageId);
    return storyboardColumnKey(stage?.title ?? '', '');
  }
  if ('subStepId' in target) {
    const subStep = (doc.subSteps ?? []).find((ss) => ss.id === target.subStepId);
    const step = doc.steps.find((s) => s.id === subStep?.stepId);
    const stage = doc.stages.find((s) => s.id === subStep?.stageId);
    return storyboardColumnKey(stage?.title ?? '', step?.title ?? '', subStep?.title ?? '');
  }
  const step = doc.steps.find((s) => s.id === target.stepId);
  const stage = doc.stages.find((s) => s.id === step?.stageId);
  return storyboardColumnKey(stage?.title ?? '', step?.title ?? '');
}

function tryApplyAtLevel(
  doc: BlueprintState,
  item: StoryboardImportItem,
  ts: string,
): { doc: BlueprintState; applied: boolean } {
  let images = [...(doc.storyboardImages ?? [])];

  const existing = images.find(
    (img) =>
      (item.id && img.id === item.id) ||
      (item.columnKey && img.columnKey === item.columnKey),
  );

  if (existing) {
    images = images.map((img) =>
      img.id === existing.id ? { ...img, dataUrl: item.dataUrl, updatedAt: ts } : img,
    );
    const relinked = relinkOrphanedStoryboardImages({ ...doc, storyboardImages: images });
    return { doc: { ...doc, storyboardImages: relinked }, applied: true };
  }

  if (!item.columnKey) {
    return { doc, applied: false };
  }

  const target = resolveTargetFromColumnKey(doc, item.columnKey);
  if (!target) {
    return { doc, applied: false };
  }

  const columnKey = item.columnKey || columnKeyForTarget(doc, target);
  images.push(createStoryboardImage(doc, target, item.dataUrl, columnKey, item.id, ts));
  const relinked = relinkOrphanedStoryboardImages({ ...doc, storyboardImages: images });
  return { doc: { ...doc, storyboardImages: relinked }, applied: true };
}

function findAndApply(
  doc: BlueprintState,
  item: StoryboardImportItem,
  ts: string,
): { doc: BlueprintState; applied: boolean } {
  const atLevel = tryApplyAtLevel(doc, item, ts);
  if (atLevel.applied) return atLevel;

  const children = doc.childBlueprints ?? [];
  if (children.length === 0) return { doc, applied: false };

  for (let i = 0; i < children.length; i += 1) {
    const childResult = findAndApply(children[i], item, ts);
    if (childResult.applied) {
      const nextChildren = [...children];
      nextChildren[i] = childResult.doc;
      return { doc: { ...doc, childBlueprints: nextChildren }, applied: true };
    }
  }

  return { doc, applied: false };
}

export function mergeStoryboardImagesIntoRoot(
  root: BlueprintState,
  imports: StoryboardImportItem[],
): { document: BlueprintState; result: StoryboardImportResult } {
  let doc = cloneDocument(root);
  const unmatched: string[] = [];
  let applied = 0;
  const ts = new Date().toISOString();

  for (const item of imports) {
    const next = findAndApply(doc, item, ts);
    if (next.applied) {
      doc = next.doc;
      applied += 1;
    } else {
      unmatched.push(item.columnKey || item.filename || item.id);
    }
  }

  return {
    document: doc,
    result: { applied, unmatched },
  };
}

function readManifest(files: Record<string, Uint8Array>): StoryboardManifest {
  const manifestBytes = files['manifest.json'];
  if (!manifestBytes) {
    throw new Error('This zip does not contain a manifest.json file.');
  }

  let manifest: StoryboardManifest;
  try {
    manifest = JSON.parse(new TextDecoder().decode(manifestBytes)) as StoryboardManifest;
  } catch {
    throw new Error('Could not read manifest.json in this zip.');
  }

  if (!Array.isArray(manifest.images) || manifest.images.length === 0) {
    throw new Error('This zip does not contain any storyboard images.');
  }

  return manifest;
}

export async function parseStoryboardImagesZip(file: File): Promise<StoryboardImportItem[]> {
  const buf = new Uint8Array(await file.arrayBuffer());
  let files: Record<string, Uint8Array>;
  try {
    files = unzipSync(buf);
  } catch {
    throw new Error('Could not open this zip file.');
  }

  const manifest = readManifest(files);
  const items: StoryboardImportItem[] = [];

  for (const entry of manifest.images) {
    const path = `images/${entry.filename}`;
    const bytes = files[path];
    if (!bytes || bytes.length === 0) continue;
    items.push({
      ...entry,
      dataUrl: bytesToDataUrl(bytes, entry.filename),
    });
  }

  if (items.length === 0) {
    throw new Error('No image files were found in this zip.');
  }

  return items;
}

export function isBlueprintBackupJson(value: unknown): value is BlueprintState {
  if (typeof value !== 'object' || value === null) return false;
  const o = value as Record<string, unknown>;
  return o.blueprint != null && Array.isArray(o.stages) && Array.isArray(o.storyboardImages);
}

export function parseBlueprintBackupJson(text: string): BlueprintState {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('Could not read this JSON file.');
  }
  if (!isBlueprintBackupJson(parsed)) {
    throw new Error('This file does not look like a service blueprint backup.');
  }
  return parsed;
}

/** Useful in tests to confirm imported images attach at the expected level. */
export function storyboardImageLevelLabel(image: StoryboardImage): string {
  return getStoryboardImageLevel(image);
}
