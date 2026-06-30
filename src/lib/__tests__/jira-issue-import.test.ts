import { describe, expect, it } from 'vitest';
import {
  collectLabelsFromRow,
  issueTypeImportTarget,
  parseJiraIssueCsv,
  validateJiraIssueHeaders,
} from '../jira-issue-import';

const EXAMPLE_CSV = `Issue Type,Issue key,Issue id,Summary,Description,Labels,Labels,Updated,Status
User Need,CTS-746,1654059,I NEED visibility of the activities of related agents and agencies,"AS A Border Force officer

I NEED visibility of the activities of related agents and agencies

SO THAT I can manage delays and resolve issues more efficiently.",AS_A_borderForceOfficer,,18/06/2026 14:04,To Do`;

describe('validateJiraIssueHeaders', () => {
  it('accepts a standard Jira export header row', () => {
    expect(
      validateJiraIssueHeaders([
        'Issue Type',
        'Issue key',
        'Summary',
        'Description',
        'Labels',
        'Status',
      ]),
    ).toEqual([]);
  });

  it('reports missing required columns', () => {
    const errors = validateJiraIssueHeaders(['Issue key', 'Summary']);
    expect(errors.some((error) => /issue type/i.test(error))).toBe(true);
    expect(errors.some((error) => /status/i.test(error))).toBe(true);
  });
});

describe('parseJiraIssueCsv', () => {
  it('imports the CITES Jira example row into other issue metadata', () => {
    const result = parseJiraIssueCsv(EXAMPLE_CSV);
    expect(result.errors).toEqual([]);
    expect(result.imported).toBe(1);
    expect(result.painPointRecords).toEqual({});
    expect(result.userStoryRecords).toEqual({});
    expect(result.jiraIssueRecords['CTS-746']).toMatchObject({
      issueKey: 'CTS-746',
      summary: 'I NEED visibility of the activities of related agents and agencies',
      status: 'To Do',
      issueType: 'User Need',
      labels: 'AS_A_borderForceOfficer',
    });
    expect(result.jiraIssueRecords['CTS-746'].description).toContain('AS A Border Force officer');
  });

  it('rejects files without required Jira columns', () => {
    const result = parseJiraIssueCsv('Issue key,Summary\nCTS-1,Example');
    expect(result.imported).toBe(0);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

describe('collectLabelsFromRow', () => {
  it('merges duplicate Labels columns', () => {
    const labels = collectLabelsFromRow({
      Labels: 'alpha',
      Labels_1: 'beta',
    });
    expect(labels).toEqual(['alpha', 'beta']);
  });
});

describe('issueTypeImportTarget', () => {
  it('routes pain points and stories', () => {
    expect(issueTypeImportTarget('Pain point')).toBe('pain_point');
    expect(issueTypeImportTarget('User Story')).toBe('user_story');
    expect(issueTypeImportTarget('User Need')).toBe('other');
  });
});
