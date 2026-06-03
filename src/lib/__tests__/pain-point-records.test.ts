import { describe, it, expect } from 'vitest';
import {
  extractPainPointIssueKey,
  formatJiraWikiDescription,
  formatPainPointHeading,
  normalizePainPointStatus,
  parseJiraWikiBoldSegments,
  painPointStatusPillClass,
  parsePainPointCsv,
} from '../pain-point-records';
import type { Card } from '../types';

function painCard(title: string, traceabilityCode?: string): Card {
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
