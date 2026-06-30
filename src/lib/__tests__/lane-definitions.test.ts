import { describe, it, expect } from 'vitest';
import { DEFAULT_LANES, mergeLaneDefinitions } from '../lane-definitions';
import type { Card } from '../types';

describe('mergeLaneDefinitions', () => {
  it('adds user_story to older blueprints that only saved the original lanes', () => {
    const legacyLanes = DEFAULT_LANES.filter((lane) => lane.key !== 'user_story').map((lane) => ({
      ...lane,
    }));

    const merged = mergeLaneDefinitions(legacyLanes, DEFAULT_LANES, []);
    const userStoryLane = merged.find((lane) => lane.key === 'user_story');

    expect(userStoryLane).toBeDefined();
    expect(userStoryLane?.visible).toBe(true);
    expect(userStoryLane?.title).toBe('User story');
  });

  it('turns visibility on when user story cards exist', () => {
    const legacyLanes = DEFAULT_LANES.map((lane) => ({
      ...lane,
      visible: lane.key === 'user_story' ? false : lane.visible,
    }));

    const cards: Card[] = [
      {
        id: 'us1',
        blueprintId: 'bp',
        stageId: 'st',
        stepId: 'step',
        subStepId: 'sub',
        laneKey: 'user_story',
        title: 'CTS-165',
        body: '',
        order: 0,
        tags: [],
        sourceFile: '',
        sourceSheet: '',
        sourceRow: null,
        sourceRef: '',
        createdAt: '',
        updatedAt: '',
      },
    ];

    const merged = mergeLaneDefinitions(legacyLanes, DEFAULT_LANES, cards);
    expect(merged.find((lane) => lane.key === 'user_story')?.visible).toBe(true);
  });
});
