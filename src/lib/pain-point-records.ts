import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import type { Card, PainPointRecord } from './types';
import { INLINE_TRACEABILITY_CODE } from './import/normalize';

export type { PainPointRecord };

export interface PainPointImportResult {
  records: Record<string, PainPointRecord>;
  imported: number;
  skipped: number;
  errors: string[];
}

/** Workflow order (hardest → easiest fix) for status pill colours. */
export const PAIN_POINT_STATUS_ORDER = [
  'cannot be fixed',
  'needs much x-gov help to fix',
  'needs some x-gov help to fix',
  'apha can fix or mitigate',
  'ecites introduces',
  'ecites can mitigate',
  'ecites can fix',
] as const;

const PAIN_POINT_STATUS_PILL: Record<string, string> = {
  'cannot be fixed': 'bg-neutral-200 text-neutral-800 border-neutral-300',
  'needs much x-gov help to fix': 'bg-red-100 text-red-900 border-red-200',
  'needs some x-gov help to fix': 'bg-orange-100 text-orange-900 border-orange-200',
  'apha can fix or mitigate': 'bg-amber-100 text-amber-900 border-amber-200',
  'ecites introduces': 'bg-lime-100 text-lime-900 border-lime-200',
  'ecites can mitigate': 'bg-emerald-100 text-emerald-900 border-emerald-200',
  'ecites can fix': 'bg-green-100 text-green-900 border-green-200',
};

export function normalizePainPointStatus(status: string): string {
  return status.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function painPointStatusPillClass(status: string): string {
  const key = normalizePainPointStatus(status);
  return PAIN_POINT_STATUS_PILL[key] ?? 'bg-neutral-100 text-neutral-700 border-neutral-200';
}

const ISSUE_KEY_PATTERN = new RegExp(`^(${INLINE_TRACEABILITY_CODE.source})$`);

/** JIRA / blueprint issue key on a pain point card (e.g. CTS-95). */
export function extractPainPointIssueKey(
  card: Pick<Card, 'title' | 'traceabilityCode' | 'laneKey'>,
): string | null {
  if (card.laneKey !== 'pain_point') return null;

  const title = card.title.trim();
  const leading = title.match(new RegExp(`^(${INLINE_TRACEABILITY_CODE.source})(?:\\s|$)`));
  if (leading) return leading[1];

  if (ISSUE_KEY_PATTERN.test(title)) return title;

  const embedded = title.match(new RegExp(`\\b(${INLINE_TRACEABILITY_CODE.source})\\b`));
  if (embedded) return embedded[1];

  const code = card.traceabilityCode?.trim();
  if (code && ISSUE_KEY_PATTERN.test(code) && !code.startsWith('PP-')) {
    return code;
  }

  return null;
}

/** One-line pain point label: "CTS-95 Summary text". */
export function formatPainPointHeading(
  issueKey: string | null,
  summary?: string,
  fallback = '',
): string {
  const trimmedSummary = summary?.trim();
  if (issueKey && trimmedSummary) return `${issueKey} ${trimmedSummary}`;
  if (issueKey) return issueKey;
  if (trimmedSummary) return trimmedSummary;
  return fallback;
}

export type JiraWikiSegment = { text: string; bold?: boolean };

/** Split a line into plain and bold segments from Jira *bold* or **bold** markup. */
export function parseJiraWikiBoldSegments(line: string): JiraWikiSegment[] {
  const segments: JiraWikiSegment[] = [];
  const regex = /\*{1,2}([^*\n]+?)\*{1,2}/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: line.slice(lastIndex, match.index) });
    }
    segments.push({ text: match[1], bold: true });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    segments.push({ text: line.slice(lastIndex) });
  }

  return segments.length > 0 ? segments : [{ text: line }];
}

/** Light cleanup of Jira wiki markup for readable panel text. */
export function formatJiraWikiDescription(raw: string): string {
  return raw
    .replace(/\r\n/g, '\n')
    .replace(/^h[1-6]\.\s*/gm, '')
    .replace(/^\*\s+/gm, '• ')
    .replace(/^----+\s*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function normalizeHeader(header: string): string {
  return header.trim().toLowerCase().replace(/\s+/g, ' ');
}

function cellValue(row: Record<string, string>, ...headers: string[]): string {
  const wanted = new Set(headers.map(normalizeHeader));
  for (const [key, value] of Object.entries(row)) {
    if (wanted.has(normalizeHeader(key))) {
      return String(value ?? '').trim();
    }
  }
  return '';
}

function rowToRecord(row: Record<string, string>): PainPointRecord | null {
  const issueKey = cellValue(row, 'Issue key', 'Key');
  if (!issueKey) return null;

  return {
    issueKey,
    summary: cellValue(row, 'Summary'),
    status: cellValue(row, 'Status'),
    description: cellValue(row, 'Description'),
    issueType: cellValue(row, 'Issue Type', 'Issue type') || undefined,
    parentKey: cellValue(row, 'Parent key') || undefined,
    parentSummary: cellValue(row, 'Parent summary') || undefined,
  };
}

function rowsToRecords(rows: Record<string, string>[]): PainPointImportResult {
  const records: Record<string, PainPointRecord> = {};
  const errors: string[] = [];
  let imported = 0;
  let skipped = 0;

  rows.forEach((row, index) => {
    const record = rowToRecord(row);
    if (!record) {
      skipped += 1;
      return;
    }
    if (records[record.issueKey] && records[record.issueKey].summary !== record.summary) {
      errors.push(`Row ${index + 2}: duplicate issue key "${record.issueKey}" with a different summary.`);
    }
    records[record.issueKey] = record;
    imported += 1;
  });

  return { records, imported, skipped, errors };
}

export function parsePainPointCsv(text: string): PainPointImportResult {
  const result = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
  });

  const errors = result.errors.map((error) => error.message);
  const parsed = rowsToRecords(result.data);
  return {
    ...parsed,
    errors: [...errors, ...parsed.errors],
  };
}

export function parsePainPointWorkbook(buffer: ArrayBuffer, fileName: string): PainPointImportResult {
  const workbook = XLSX.read(buffer, { type: 'array', cellDates: false });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    return { records: {}, imported: 0, skipped: 0, errors: [`No sheets found in ${fileName}.`] };
  }

  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<Record<string, string>>(sheet, {
    defval: '',
    raw: false,
  });

  return rowsToRecords(rows);
}

export async function parsePainPointFile(file: File): Promise<PainPointImportResult> {
  const lower = file.name.toLowerCase();
  if (lower.endsWith('.csv')) {
    return parsePainPointCsv(await file.text());
  }
  if (lower.endsWith('.xlsx') || lower.endsWith('.xls')) {
    return parsePainPointWorkbook(await file.arrayBuffer(), file.name);
  }
  return {
    records: {},
    imported: 0,
    skipped: 0,
    errors: ['Use a CSV or Excel file exported from Jira.'],
  };
}

export function mergePainPointRecords(
  existing: Record<string, PainPointRecord> | undefined,
  incoming: Record<string, PainPointRecord>,
): Record<string, PainPointRecord> {
  return { ...(existing ?? {}), ...incoming };
}
