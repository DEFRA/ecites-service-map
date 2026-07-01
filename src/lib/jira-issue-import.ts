import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import type { JiraIssueRecord, PainPointRecord, UserNeedRecord, UserStoryRecord } from './types';
import { mergePainPointRecords } from './pain-point-records';
import { mergeUserStoryRecords } from './user-story-records';

export type { JiraIssueRecord, UserNeedRecord };

export interface JiraIssueImportResult {
  painPointRecords: Record<string, PainPointRecord>;
  userNeedRecords: Record<string, UserNeedRecord>;
  userStoryRecords: Record<string, UserStoryRecord>;
  jiraIssueRecords: Record<string, JiraIssueRecord>;
  imported: number;
  skipped: number;
  errors: string[];
}

const REQUIRED_HEADERS = ['issue type', 'issue key', 'summary', 'status'] as const;

export function normalizeJiraHeader(header: string): string {
  return header.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function validateJiraIssueHeaders(headers: string[]): string[] {
  const normalized = new Set(headers.map(normalizeJiraHeader));
  const errors: string[] = [];
  for (const required of REQUIRED_HEADERS) {
    if (!normalized.has(required)) {
      errors.push(
        `Missing required column "${required.replace(/\b\w/g, (c) => c.toUpperCase())}".`,
      );
    }
  }
  return errors;
}

function cellValue(row: Record<string, string>, ...headers: string[]): string {
  const wanted = new Set(headers.map(normalizeJiraHeader));
  for (const [key, value] of Object.entries(row)) {
    if (wanted.has(normalizeJiraHeader(key))) {
      return String(value ?? '').trim();
    }
  }
  return '';
}

/** Collect values from every Labels column (Jira exports may repeat the header). */
export function collectLabelsFromRow(row: Record<string, string>): string[] {
  const labels: string[] = [];
  for (const [key, value] of Object.entries(row)) {
    const header = normalizeJiraHeader(key);
    if (header === 'labels' || header.startsWith('labels')) {
      const trimmed = String(value ?? '').trim();
      if (trimmed) labels.push(trimmed);
    }
  }
  return [...new Set(labels)];
}

export type JiraIssueImportLane =
  | 'pain_point'
  | 'user_need'
  | 'user_story'
  | 'activity'
  | 'other';

export function issueTypeImportTarget(issueType: string): JiraIssueImportLane {
  const normalized = issueType.trim().toLowerCase();
  if (normalized.includes('pain')) return 'pain_point';
  if (normalized.includes('user need') || normalized === 'need') return 'user_need';
  if (normalized.includes('story')) return 'user_story';
  if (normalized.includes('task')) return 'activity';
  return 'other';
}

/** True when the header row matches a Jira CSV/Excel export. */
export function detectJiraIssueExport(headers: string[]): boolean {
  if (headers.length === 0) return false;
  return validateJiraIssueHeaders(headers).length === 0;
}

export function headersFromXlsxSheet(sheet: XLSX.WorkSheet): string[] {
  const firstRow = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1, defval: '' })[0];
  if (!Array.isArray(firstRow)) return [];
  return firstRow.map((cell) => String(cell ?? '').trim()).filter(Boolean);
}

function rowToRecord(row: Record<string, string>): JiraIssueRecord | null {
  const issueKey = cellValue(row, 'Issue key', 'Key');
  if (!issueKey) return null;

  const labels = collectLabelsFromRow(row);
  return {
    issueKey,
    summary: cellValue(row, 'Summary'),
    status: cellValue(row, 'Status'),
    description: cellValue(row, 'Description'),
    issueType: cellValue(row, 'Issue Type', 'Issue type') || undefined,
    labels: labels.length > 0 ? labels.join(', ') : undefined,
    parentKey: cellValue(row, 'Parent key') || undefined,
    parentSummary: cellValue(row, 'Parent summary') || undefined,
  };
}

function rowsToImportResult(rows: Record<string, string>[]): JiraIssueImportResult {
  const painPointRecords: Record<string, PainPointRecord> = {};
  const userNeedRecords: Record<string, UserNeedRecord> = {};
  const userStoryRecords: Record<string, UserStoryRecord> = {};
  const jiraIssueRecords: Record<string, JiraIssueRecord> = {};
  const errors: string[] = [];
  let imported = 0;
  let skipped = 0;

  rows.forEach((row, index) => {
    const record = rowToRecord(row);
    if (!record) {
      skipped += 1;
      return;
    }

    const target = issueTypeImportTarget(record.issueType ?? '');
    const bucket =
      target === 'pain_point'
        ? painPointRecords
        : target === 'user_need'
          ? userNeedRecords
          : target === 'user_story'
            ? userStoryRecords
            : jiraIssueRecords;

    if (bucket[record.issueKey] && bucket[record.issueKey].summary !== record.summary) {
      errors.push(`Row ${index + 2}: duplicate issue key "${record.issueKey}" with a different summary.`);
    }

    bucket[record.issueKey] = record;
    imported += 1;
  });

  return { painPointRecords, userNeedRecords, userStoryRecords, jiraIssueRecords, imported, skipped, errors };
}

export function parseJiraIssueCsv(text: string): JiraIssueImportResult {
  const result = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
  });

  const headerErrors = validateJiraIssueHeaders(result.meta.fields ?? []);
  const parseErrors = result.errors.map((error) => error.message);
  if (headerErrors.length > 0) {
    return {
      painPointRecords: {},
      userNeedRecords: {},
      userStoryRecords: {},
      jiraIssueRecords: {},
      imported: 0,
      skipped: 0,
      errors: [...headerErrors, ...parseErrors],
    };
  }

  const parsed = rowsToImportResult(result.data);
  return {
    ...parsed,
    errors: [...parseErrors, ...parsed.errors],
  };
}

export function parseJiraIssueWorkbook(buffer: ArrayBuffer, fileName: string): JiraIssueImportResult {
  const workbook = XLSX.read(buffer, { type: 'array', cellDates: false });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    return {
      painPointRecords: {},
      userNeedRecords: {},
      userStoryRecords: {},
      jiraIssueRecords: {},
      imported: 0,
      skipped: 0,
      errors: [`No sheets found in ${fileName}.`],
    };
  }

  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<Record<string, string>>(sheet, {
    defval: '',
    raw: false,
  });

  const headers = rows.length > 0 ? Object.keys(rows[0]) : [];
  const headerErrors = validateJiraIssueHeaders(headers);
  if (headerErrors.length > 0) {
    return {
      painPointRecords: {},
      userNeedRecords: {},
      userStoryRecords: {},
      jiraIssueRecords: {},
      imported: 0,
      skipped: 0,
      errors: headerErrors,
    };
  }

  return rowsToImportResult(rows);
}

export async function parseJiraIssueFile(file: File): Promise<JiraIssueImportResult> {
  const lower = file.name.toLowerCase();
  if (lower.endsWith('.csv')) {
    return parseJiraIssueCsv(await file.text());
  }
  if (lower.endsWith('.xlsx') || lower.endsWith('.xls')) {
    return parseJiraIssueWorkbook(await file.arrayBuffer(), file.name);
  }
  return {
    painPointRecords: {},
    userNeedRecords: {},
    userStoryRecords: {},
    jiraIssueRecords: {},
    imported: 0,
    skipped: 0,
    errors: ['Use a CSV or Excel file exported from Jira.'],
  };
}

export function resolveJiraIssueRecord(
  issueKey: string,
  stores: {
    painPointRecords?: Record<string, PainPointRecord>;
    userNeedRecords?: Record<string, UserNeedRecord>;
    userStoryRecords?: Record<string, UserStoryRecord>;
    jiraIssueRecords?: Record<string, JiraIssueRecord>;
  },
): JiraIssueRecord | undefined {
  return (
    stores.painPointRecords?.[issueKey]
    ?? stores.userNeedRecords?.[issueKey]
    ?? stores.userStoryRecords?.[issueKey]
    ?? stores.jiraIssueRecords?.[issueKey]
  );
}

export function mergeUserNeedRecords(
  existing: Record<string, UserNeedRecord> | undefined,
  incoming: Record<string, UserNeedRecord>,
): Record<string, UserNeedRecord> {
  return { ...(existing ?? {}), ...incoming };
}

export function mergeJiraIssueRecords(
  existing: Record<string, JiraIssueRecord> | undefined,
  incoming: Record<string, JiraIssueRecord>,
): Record<string, JiraIssueRecord> {
  return { ...(existing ?? {}), ...incoming };
}

export function mergeJiraIssueImportResult(
  current: {
    painPointRecords?: Record<string, PainPointRecord>;
    userNeedRecords?: Record<string, UserNeedRecord>;
    userStoryRecords?: Record<string, UserStoryRecord>;
    jiraIssueRecords?: Record<string, JiraIssueRecord>;
  },
  incoming: Pick<
    JiraIssueImportResult,
    'painPointRecords' | 'userNeedRecords' | 'userStoryRecords' | 'jiraIssueRecords'
  >,
) {
  return {
    painPointRecords: mergePainPointRecords(current.painPointRecords, incoming.painPointRecords),
    userNeedRecords: mergeUserNeedRecords(current.userNeedRecords, incoming.userNeedRecords),
    userStoryRecords: mergeUserStoryRecords(current.userStoryRecords, incoming.userStoryRecords),
    jiraIssueRecords: mergeJiraIssueRecords(current.jiraIssueRecords, incoming.jiraIssueRecords),
  };
}
