import { describe, expect, it } from 'vitest';
import { zipSync } from 'fflate';
import {
  mergeStoryboardImagesIntoRoot,
  parseStoryboardImagesZip,
} from '../import-storyboard-images';
import type { BlueprintState } from '../types';

function makeState(storyboardImages: BlueprintState['storyboardImages'] = []): BlueprintState {
  const blueprintId = 'bp-1';
  return {
    blueprint: {
      id: blueprintId,
      serviceName: 'Test service',
      description: '',
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
    },
    stages: [
      {
        id: 'stage-1',
        blueprintId,
        title: 'Apply',
        outcome: '',
        order: 0,
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      },
    ],
    steps: [
      {
        id: 'step-1',
        blueprintId,
        stageId: 'stage-1',
        title: 'Start application',
        order: 0,
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      },
    ],
    subSteps: [],
    lanes: [],
    cards: [],
    storyboardImages,
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
    stepLinks: [],
    requirements: [],
    apiContracts: [],
    uiScaffolds: [],
    traceabilityCounters: {},
  };
}

describe('mergeStoryboardImagesIntoRoot', () => {
  it('fills in dataUrl on an existing empty storyboard slot matched by columnKey', () => {
    const state = makeState([
      {
        id: 'img-1',
        blueprintId: 'bp-1',
        stepId: 'step-1',
        columnKey: 'Apply::Start application',
        dataUrl: '',
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      },
    ]);

    const { document, result } = mergeStoryboardImagesIntoRoot(state, [
      {
        id: 'img-1',
        filename: '01-apply-start-application.png',
        columnKey: 'Apply::Start application',
        dataUrl: 'data:image/png;base64,abc',
      },
    ]);

    expect(result.applied).toBe(1);
    expect(result.unmatched).toEqual([]);
    expect(document.storyboardImages[0]?.dataUrl).toBe('data:image/png;base64,abc');
  });

  it('creates a new storyboard image when no slot exists yet', () => {
    const state = makeState([]);

    const { document, result } = mergeStoryboardImagesIntoRoot(state, [
      {
        id: 'img-new',
        filename: '01-apply-start-application.png',
        columnKey: 'Apply::Start application',
        dataUrl: 'data:image/png;base64,xyz',
      },
    ]);

    expect(result.applied).toBe(1);
    expect(document.storyboardImages).toHaveLength(1);
    expect(document.storyboardImages[0]?.stepId).toBe('step-1');
    expect(document.storyboardImages[0]?.dataUrl).toBe('data:image/png;base64,xyz');
  });
});

describe('parseStoryboardImagesZip', () => {
  it('reads manifest entries and image bytes from an export-style zip', async () => {
    const pngBytes = Uint8Array.from([137, 80, 78, 71]);
    const zip = zipSync({
      'manifest.json': new TextEncoder().encode(
        JSON.stringify({
          version: 1,
          images: [
            {
              id: 'img-1',
              filename: '01-apply-start-application.png',
              columnKey: 'Apply::Start application',
            },
          ],
        }),
      ),
      'images/01-apply-start-application.png': pngBytes,
    });

    const file = new File([zip], 'storyboard-images.zip', { type: 'application/zip' });
    const items = await parseStoryboardImagesZip(file);

    expect(items).toHaveLength(1);
    expect(items[0]?.columnKey).toBe('Apply::Start application');
    expect(items[0]?.dataUrl.startsWith('data:image/png;base64,')).toBe(true);
  });
});
