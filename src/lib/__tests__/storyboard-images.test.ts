import { describe, it, expect } from 'vitest';
import {
  getStoryboardImageLevel,
  getStoryboardLevel,
  indexStoryboardImages,
  remapStoryboardImages,
  storyboardImagesAtLevel,
  storyboardImagesForTarget,
} from '../storyboard-images';
import type { Stage, Step, SubStep, StoryboardImage } from '../types';

const baseImage = {
  id: '1',
  blueprintId: 'bp',
  dataUrl: 'data:image/png;base64,x',
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
};

describe('storyboard image levels', () => {
  it('derives the active storyboard level from header visibility', () => {
    expect(getStoryboardLevel(false, false, true)).toBe('stage');
    expect(getStoryboardLevel(true, false, true)).toBe('step');
    expect(getStoryboardLevel(true, true, true)).toBe('subStep');
    expect(getStoryboardLevel(false, true, true)).toBe('subStep');
  });

  it('indexes images separately by stage, step and sub-step', () => {
    const images: StoryboardImage[] = [
      { ...baseImage, id: 'stage', stageId: 's1' },
      { ...baseImage, id: 'step', stepId: 'step1' },
      { ...baseImage, id: 'sub', subStepId: 'sub1' },
    ];
    const index = indexStoryboardImages(images);

    expect(getStoryboardImageLevel(images[0]!)).toBe('stage');
    expect(index.byStage.get('s1')).toHaveLength(1);
    expect(index.byStep.get('step1')).toHaveLength(1);
    expect(index.bySubStep.get('sub1')).toHaveLength(1);
  });

  it('returns only images stored at the active level (no roll-up)', () => {
    const index = indexStoryboardImages([
      { ...baseImage, id: 'stage-img', stageId: 's1' },
      { ...baseImage, id: 'step-img', stepId: 'step1' },
      { ...baseImage, id: 'sub-img', subStepId: 'sub1' },
    ]);

    expect(storyboardImagesAtLevel(index, 'stage', 's1').map((img) => img.id)).toEqual(['stage-img']);
    expect(storyboardImagesAtLevel(index, 'step', 'step1').map((img) => img.id)).toEqual(['step-img']);
    expect(storyboardImagesAtLevel(index, 'subStep', 'sub1').map((img) => img.id)).toEqual(['sub-img']);
  });
});

describe('remapStoryboardImages', () => {
  it('reattaches sub-step images when structure IDs change but titles stay the same', () => {
    const previous = {
      stages: [{ id: 'old-stage', blueprintId: 'bp', title: 'Aware', outcome: '', order: 0 }],
      steps: [{
        id: 'old-step',
        blueprintId: 'bp',
        stageId: 'old-stage',
        title: 'Guidance',
        order: 0,
      }],
      subSteps: [{
        id: 'old-sub',
        blueprintId: 'bp',
        stageId: 'old-stage',
        stepId: 'old-step',
        title: 'Guidance for teams adjacent to APHA CITES',
        order: 0,
      }],
    };

    const next = {
      stages: [{ id: 'new-stage', blueprintId: 'bp', title: 'Aware', outcome: '', order: 0 }],
      steps: [{
        id: 'new-step',
        blueprintId: 'bp',
        stageId: 'new-stage',
        title: 'Guidance',
        order: 0,
      }],
      subSteps: [{
        id: 'new-sub',
        blueprintId: 'bp',
        stageId: 'new-stage',
        stepId: 'new-step',
        title: 'Guidance for teams adjacent to APHA CITES',
        order: 0,
      }],
    };

    const images: StoryboardImage[] = [
      { ...baseImage, subStepId: 'old-sub' },
    ];

    const remapped = remapStoryboardImages(images, previous, next, 'bp');
    expect(remapped).toHaveLength(1);
    expect(remapped[0]?.subStepId).toBe('new-sub');
    expect(remapped[0]?.dataUrl).toBe(baseImage.dataUrl);
    expect(remapped[0]?.columnKey).toBe('Aware::Guidance::Guidance for teams adjacent to APHA CITES');
  });
});
