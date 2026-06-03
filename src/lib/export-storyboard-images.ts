import { zipSync } from 'fflate';
import { blueprintTitleLabel } from './blueprint-title';
import type { BlueprintState, StoryboardImage } from './types';

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'service-blueprint';
}

function mimeToExt(mime: string): string {
  if (mime.includes('jpeg') || mime.includes('jpg')) return 'jpg';
  if (mime.includes('webp')) return 'webp';
  if (mime.includes('gif')) return 'gif';
  return 'png';
}

function dataUrlToBytes(dataUrl: string): { bytes: Uint8Array; ext: string } | null {
  const match = /^data:([^;,]+)?(;base64)?,([\s\S]*)$/.exec(dataUrl);
  if (!match) return null;

  const mime = match[1] || 'image/png';
  const payload = match[3];
  if (!payload) return null;

  if (match[2]) {
    const binary = atob(payload);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return { bytes, ext: mimeToExt(mime) };
  }

  return {
    bytes: new TextEncoder().encode(decodeURIComponent(payload)),
    ext: mimeToExt(mime),
  };
}

function imageFilename(img: StoryboardImage, index: number, ext: string): string {
  const key =
    img.columnKey?.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 60) ||
    img.id.slice(0, 8);
  return `${String(index + 1).padStart(2, '0')}-${key}.${ext}`;
}

function collectAllStoryboardImages(state: BlueprintState): StoryboardImage[] {
  const all: StoryboardImage[] = [];
  const walk = (doc: BlueprintState) => {
    for (const img of doc.storyboardImages ?? []) {
      if (img.dataUrl?.length) all.push(img);
    }
    for (const child of doc.childBlueprints ?? []) walk(child);
  };
  walk(state);
  return all;
}

export function storyboardImagesExportFilename(state: BlueprintState): string {
  return `${slug(blueprintTitleLabel(state.blueprint.serviceName))}_storyboard-images.zip`;
}

export function blueprintBackupExportFilename(state: BlueprintState): string {
  return `${slug(blueprintTitleLabel(state.blueprint.serviceName))}_backup.json`;
}

export function exportStoryboardImagesZip(state: BlueprintState): Uint8Array | null {
  const images = collectAllStoryboardImages(state);
  if (images.length === 0) return null;

  const files: Record<string, Uint8Array> = {};
  const manifest: Array<{
    id: string;
    filename: string;
    columnKey?: string;
    stageId?: string;
    stepId?: string;
    subStepId?: string;
  }> = [];

  for (let i = 0; i < images.length; i += 1) {
    const img = images[i];
    const parsed = dataUrlToBytes(img.dataUrl);
    if (!parsed) continue;

    const filename = imageFilename(img, i, parsed.ext);
    files[`images/${filename}`] = parsed.bytes;
    manifest.push({
      id: img.id,
      filename,
      columnKey: img.columnKey,
      stageId: img.stageId,
      stepId: img.stepId,
      subStepId: img.subStepId,
    });
  }

  if (manifest.length === 0) return null;

  files['manifest.json'] = new TextEncoder().encode(
    JSON.stringify(
      {
        version: 1,
        exportedAt: new Date().toISOString(),
        serviceName: blueprintTitleLabel(state.blueprint.serviceName),
        images: manifest,
      },
      null,
      2,
    ),
  );

  return zipSync(files);
}

export function exportBlueprintBackupJson(state: BlueprintState): string {
  return JSON.stringify(state, null, 2);
}
