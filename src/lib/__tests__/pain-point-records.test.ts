import { describe, it, expect } from 'vitest';
import {
  buildSortedPainPointList,
  buildPainPointsBySubStep,
  collectPainPointRecordStatuses,
  extractPainPointIssueKey,
  findPainPointCardForIssueKey,
  findSubStepIdsForIssueKey,
  findSubStepIdsForStatusFilter,
  findSubStepIdsWithoutPainPoints,
  filterPainPointListByStatuses,
  formatJiraWikiDescription,
  formatPainPointHeading,
  normalizePainPointStatus,
  parseJiraWikiBoldSegments,
  painPointStatusPillClass,
  painPointStatusDotClass,
  parsePainPointCsv,
} from '../pain-point-records';
import type { Card } from '../types';

function painCard(
  title: string,
  traceabilityCode?: string,
  overrides: Partial<Card> = {},
): Card {
  return {
    id: 'c1',
    blueprintId: 'bp',
    stageId: 'st',
    stepId: 'step',
    laneKey: 'pain_point',
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

describe('pain point records', () => {
  it('extracts issue keys from card titles', () => {
    expect(extractPainPointIssueKey(painCard('CTS-95'))).toBe('CTS-95');
    expect(extractPainPointIssueKey(painCard('CTS-77 CTS-95'))).toBe('CTS-77');
    expect(extractPainPointIssueKey(painCard('Guidance unclear', 'PP-001'))).toBeNull();
  });

  it('parses Jira CSV rows into keyed records', () => {
    const csv = `Issue Type,Issue key,Summary,Status,Description
Pain Point,CTS-95,Permit guidance is unclear,Needs much X-gov help to fix,"Problem details here"
Pain Point,CTS-77,Another issue,eCITES can fix,"More details"`;

    const result = parsePainPointCsv(csv);
    expect(result.errors).toHaveLength(0);
    expect(result.imported).toBe(2);
    expect(result.records['CTS-95']?.summary).toBe('Permit guidance is unclear');
    expect(result.records['CTS-95']?.status).toBe('Needs much X-gov help to fix');
    expect(result.records['CTS-77']?.status).toBe('eCITES can fix');
  });

  it('maps status labels to pill colours across the workflow', () => {
    expect(normalizePainPointStatus('Needs much X-gov help to fix')).toBe('needs much x-gov help to fix');
    expect(painPointStatusPillClass('Needs much X-gov help to fix')).toContain('red');
    expect(painPointStatusPillClass('eCITES can fix')).toContain('green');
    expect(painPointStatusDotClass('eCITES can fix')).toContain('green');
    expect(painPointStatusDotClass('Needs much X-gov help to fix')).toContain('red');
    expect(painPointStatusDotClass(null)).toContain('neutral');
  });

  it('formats Jira wiki description text', () => {
    const formatted = formatJiraWikiDescription('h3. Impact\n* First point\n----\nMore text');
    expect(formatted).toContain('Impact');
    expect(formatted).toContain('• First point');
    expect(formatted).toContain('More text');
  });

  it('formats pain point heading on one line', () => {
    expect(formatPainPointHeading('CTS-95', 'Difficult to communicate species')).toBe(
      'CTS-95 Difficult to communicate species',
    );
  });

  it('lists uploaded pain points once, sorted easiest fix first then issue key', () => {
    const records = {
      'CTS-99': {
        issueKey: 'CTS-99',
        summary: 'Easy one',
        status: 'eCITES can fix',
        description: '',
      },
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'Hard one',
        status: 'Needs much X-gov help to fix',
        description: '',
      },
      'CTS-77': {
        issueKey: 'CTS-77',
        summary: 'Medium one',
        status: 'Needs some X-gov help to fix',
        description: '',
      },
    };

    const list = buildSortedPainPointList(records);
    expect(list).toHaveLength(3);
    expect(list.map((entry) => entry.issueKey)).toEqual(['CTS-99', 'CTS-77', 'CTS-95']);
    expect(list[0]?.title).toBe('Easy one');
    expect(list[0]?.status).toBe('eCITES can fix');
  });

  it('collects distinct statuses and filters the list', () => {
    const records = {
      'CTS-99': {
        issueKey: 'CTS-99',
        summary: 'Easy one',
        status: 'eCITES can fix',
        description: '',
      },
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'Hard one',
        status: 'Needs much X-gov help to fix',
        description: '',
      },
    };

    const list = buildSortedPainPointList(records);
    expect(collectPainPointRecordStatuses(records)).toEqual([
      'eCITES can fix',
      'Needs much X-gov help to fix',
    ]);
    expect(filterPainPointListByStatuses(list, null)).toHaveLength(2);
    expect(
      filterPainPointListByStatuses(list, new Set(['eCITES can fix'])).map((entry) => entry.issueKey),
    ).toEqual(['CTS-99']);
  });

  it('maps unique pain point issue keys to sub-steps on the board', () => {
    const cards = [
      painCard('CTS-95', undefined, { id: 'c1', subStepId: 'sub-1' }),
      painCard('CTS-77', undefined, { id: 'c2', subStepId: 'sub-2' }),
      painCard('CTS-95', undefined, { id: 'c3', subStepId: 'sub-2', order: 1 }),
    ];

    const records = {
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'Hard one',
        status: 'Needs much X-gov help to fix',
        description: '',
      },
      'CTS-77': {
        issueKey: 'CTS-77',
        summary: 'Medium one',
        status: 'eCITES can fix',
        description: '',
      },
    };

    const bySubStep = buildPainPointsBySubStep(cards, records);

    expect(bySubStep.get('sub-1')).toEqual(['CTS-95']);
    expect(bySubStep.get('sub-2')).toEqual(['CTS-77', 'CTS-95']);
    expect(
      buildPainPointsBySubStep(cards, records, new Set(['eCITES can fix'])).get('sub-2'),
    ).toEqual(['CTS-77']);
  });

  it('finds the first pain point card for an issue key', () => {
    const cards = [
      painCard('CTS-95', undefined, { id: 'c1', subStepId: 'sub-1' }),
      painCard('CTS-77', undefined, { id: 'c2', subStepId: 'sub-2' }),
    ];

    expect(findPainPointCardForIssueKey(cards, 'CTS-95')?.id).toBe('c1');
    expect(findPainPointCardForIssueKey(cards, 'CTS-99')).toBeUndefined();
  });

  it('finds sub-steps for an issue key and sub-steps without pain points', () => {
    const cards = [
      painCard('CTS-95', undefined, { id: 'c1', subStepId: 'sub-1' }),
      painCard('CTS-77', undefined, { id: 'c2', subStepId: 'sub-2' }),
    ];

    expect(findSubStepIdsForIssueKey(cards, 'CTS-95')).toEqual(['sub-1']);
    expect(findSubStepIdsWithoutPainPoints(cards, [{ id: 'sub-1' }, { id: 'sub-2' }, { id: 'sub-3' }])).toEqual([
      'sub-3',
    ]);
  });

  it('finds sub-steps where filtered-status pain points appear on the board', () => {
    const cards = [
      painCard('CTS-95', undefined, { id: 'c1', subStepId: 'sub-1' }),
      painCard('CTS-77', undefined, { id: 'c2', subStepId: 'sub-2' }),
    ];
    const records = {
      'CTS-95': {
        issueKey: 'CTS-95',
        summary: 'Hard one',
        status: 'Needs much X-gov help to fix',
        description: '',
      },
      'CTS-77': {
        issueKey: 'CTS-77',
        summary: 'Medium one',
        status: 'eCITES can fix',
        description: '',
      },
    };

    expect(findSubStepIdsForStatusFilter(cards, records, new Set(['eCITES can fix']))).toEqual([
      'sub-2',
    ]);
    expect(findSubStepIdsForStatusFilter(cards, records, null)).toEqual([]);
  });

  it('parses Jira bold markup', () => {
    const segments = parseJiraWikiBoldSegments('*Impact*');
    expect(segments).toEqual([{ text: 'Impact', bold: true }]);
    expect(parseJiraWikiBoldSegments('Before *Impact* after')).toEqual([
      { text: 'Before ' },
      { text: 'Impact', bold: true },
      { text: ' after' },
    ]);
  });
});
