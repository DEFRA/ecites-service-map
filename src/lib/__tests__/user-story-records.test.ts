import { describe, it, expect } from 'vitest';
import {
  buildUserStoriesBySubStep,
  collectUserStoryRecordStatuses,
  extractUserStoryIssueKey,
  findSubStepIdsForIssueKey,
  findSubStepIdsForStatusFilter,
  findSubStepIdsWithoutUserStories,
  findUserStoryCardForIssueKey,
  formatUserStoryHeading,
  parseUserStoryCsv,
  userStoryStatusPillClass,
  userStoryStatusSortIndex,
} from '../user-story-records';
import type { Card } from '../types';

function storyCard(
  title: string,
  traceabilityCode?: string,
  overrides: Partial<Card> = {},
): Card {
  return {
    id: 'c1',
    blueprintId: 'bp',
    stageId: 'st',
    stepId: 'step',
    laneKey: 'user_story',
    title,
    body: '',
    order: 0,
    tags: [],
    sourceFile: '',
    sourceSheet: '',
    sourceRow: null,
    sourceRef: '',
    createdAt: '',
    updatedAt: '',
    traceabilityCode,
    ...overrides,
  };
}

describe('user story records', () => {
  it('extracts issue keys from card titles', () => {
    expect(extractUserStoryIssueKey(storyCard('CTS-165'))).toBe('CTS-165');
    expect(extractUserStoryIssueKey(storyCard('CTS-103 CTS-165'))).toBe('CTS-103');
    expect(extractUserStoryIssueKey(storyCard('Apply for permit', 'US-001'))).toBeNull();
  });

  it('parses Jira CSV rows into keyed records', () => {
    const csv = `Issue Type,Issue key,Summary,Status,Description
Story,CTS-165,View permit details,Done,"As a user I want to view permits"
Story,CTS-103,Start application,In Progress,"As a user I want to apply"`;

    const result = parseUserStoryCsv(csv);
    expect(result.errors).toHaveLength(0);
    expect(result.imported).toBe(2);
    expect(result.records['CTS-165']?.summary).toBe('View permit details');
    expect(result.records['CTS-165']?.status).toBe('Done');
    expect(result.records['CTS-103']?.status).toBe('In Progress');
  });

  it('formats headings and status pill colours', () => {
    expect(formatUserStoryHeading('CTS-165', 'View permit', 'CTS-165')).toBe(
      'CTS-165 View permit',
    );
    expect(userStoryStatusPillClass('Done')).toContain('green');
    expect(userStoryStatusPillClass('In Progress')).toContain('amber');
    expect(userStoryStatusSortIndex('Done')).toBeGreaterThan(userStoryStatusSortIndex('To Do'));
  });

  it('collects distinct statuses most progressed first', () => {
    const records = {
      'CTS-165': {
        issueKey: 'CTS-165',
        summary: 'Done',
        status: 'Done',
        description: '',
      },
      'CTS-103': {
        issueKey: 'CTS-103',
        summary: 'Active',
        status: 'In Progress',
        description: '',
      },
      'CTS-99': {
        issueKey: 'CTS-99',
        summary: 'Queued',
        status: 'To Do',
        description: '',
      },
    };

    expect(collectUserStoryRecordStatuses(records)).toEqual(['Done', 'In Progress', 'To Do']);
  });

  it('maps user stories to sub-steps on the board', () => {
    const cards = [
      storyCard('CTS-165', undefined, { id: 'c1', subStepId: 'sub-1' }),
      storyCard('CTS-103', undefined, { id: 'c2', subStepId: 'sub-2' }),
      storyCard('CTS-165', undefined, { id: 'c3', subStepId: 'sub-2' }),
    ];
    const records = {
      'CTS-165': {
        issueKey: 'CTS-165',
        summary: 'Done story',
        status: 'Done',
        description: '',
      },
      'CTS-103': {
        issueKey: 'CTS-103',
        summary: 'Active story',
        status: 'In Progress',
        description: '',
      },
    };

    const bySubStep = buildUserStoriesBySubStep(cards, records);

    expect(bySubStep.get('sub-1')).toEqual(['CTS-165']);
    expect(bySubStep.get('sub-2')).toEqual(['CTS-103', 'CTS-165']);
    expect(
      buildUserStoriesBySubStep(cards, records, new Set(['In Progress'])).get('sub-2'),
    ).toEqual(['CTS-103']);
  });

  it('finds sub-steps for an issue key and sub-steps without user stories', () => {
    const cards = [
      storyCard('CTS-165', undefined, { id: 'c1', subStepId: 'sub-1' }),
      storyCard('CTS-103', undefined, { id: 'c2', subStepId: 'sub-2' }),
    ];

    expect(findSubStepIdsForIssueKey(cards, 'CTS-165')).toEqual(['sub-1']);
    expect(findUserStoryCardForIssueKey(cards, 'CTS-165')?.id).toBe('c1');
    expect(findSubStepIdsWithoutUserStories(cards, [{ id: 'sub-1' }, { id: 'sub-2' }, { id: 'sub-3' }])).toEqual([
      'sub-3',
    ]);
  });

  it('finds sub-steps where filtered-status user stories appear on the board', () => {
    const cards = [
      storyCard('CTS-165', undefined, { id: 'c1', subStepId: 'sub-1' }),
      storyCard('CTS-103', undefined, { id: 'c2', subStepId: 'sub-2' }),
    ];
    const records = {
      'CTS-165': {
        issueKey: 'CTS-165',
        summary: 'Done story',
        status: 'Done',
        description: '',
      },
      'CTS-103': {
        issueKey: 'CTS-103',
        summary: 'Active story',
        status: 'In Progress',
        description: '',
      },
    };

    expect(findSubStepIdsForStatusFilter(cards, records, new Set(['In Progress']))).toEqual([
      'sub-2',
    ]);
    expect(findSubStepIdsForStatusFilter(cards, records, null)).toEqual([]);
  });
});
