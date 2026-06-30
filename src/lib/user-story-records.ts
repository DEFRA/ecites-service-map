import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import type { Card, UserStoryRecord } from './types';
import { INLINE_TRACEABILITY_CODE } from './import/normalize';

export type { UserStoryRecord };

export interface UserStoryImportResult {
  records: Record<string, UserStoryRecord>;
  imported: number;
  skipped: number;
  errors: string[];
}

/** Workflow order (least → most progressed) for status pill colours. */
export const USER_STORY_STATUS_ORDER = [
  'backlog',
  'open',
  'to do',
  'selected for development',
  'ready for development',
  'in progress',
  'in testing',
  'ready for test',
  'peer review',
  'in review',
  'resolved',
  'closed',
  'done',
] as const;

const USER_STORY_STATUS_PILL: Record<string, string> = {
  backlog: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  open: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  'to do': 'bg-slate-100 text-slate-800 border-slate-200',
  'selected for development': 'bg-blue-50 text-blue-800 border-blue-200',
  'ready for development': 'bg-blue-50 text-blue-800 border-blue-200',
  'in progress': 'bg-amber-100 text-amber-900 border-amber-200',
  'in testing': 'bg-violet-100 text-violet-900 border-violet-200',
  'ready for test': 'bg-violet-100 text-violet-900 border-violet-200',
  'peer review': 'bg-indigo-100 text-indigo-900 border-indigo-200',
  'in review': 'bg-indigo-100 text-indigo-900 border-indigo-200',
  resolved: 'bg-emerald-100 text-emerald-900 border-emerald-200',
  closed: 'bg-emerald-100 text-emerald-900 border-emerald-200',
  done: 'bg-green-100 text-green-900 border-green-200',
};

const USER_STORY_STATUS_DOT: Record<string, string> = {
  backlog: 'bg-neutral-400',
  open: 'bg-neutral-400',
  'to do': 'bg-slate-500',
  'selected for development': 'bg-blue-500',
  'ready for development': 'bg-blue-500',
  'in progress': 'bg-amber-500',
  'in testing': 'bg-violet-500',
  'ready for test': 'bg-violet-500',
  'peer review': 'bg-indigo-500',
  'in review': 'bg-indigo-500',
  resolved: 'bg-emerald-500',
  closed: 'bg-emerald-500',
  done: 'bg-green-500',
};

export function normalizeUserStoryStatus(status: string): string {
  return status.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function userStoryStatusPillClass(status: string): string {
  const key = normalizeUserStoryStatus(status);
  return USER_STORY_STATUS_PILL[key] ?? 'bg-neutral-100 text-neutral-700 border-neutral-200';
}

export function userStoryStatusDotClass(status: string | null | undefined): string {
  if (!status?.trim()) return 'bg-neutral-300';
  const key = normalizeUserStoryStatus(status);
  return USER_STORY_STATUS_DOT[key] ?? 'bg-neutral-300';
}

const ISSUE_KEY_PATTERN = new RegExp(`^(${INLINE_TRACEABILITY_CODE.source})$`);

/** JIRA / blueprint issue key on a user story card (e.g. CTS-165). */
export function extractUserStoryIssueKey(
  card: Pick<Card, 'title' | 'traceabilityCode' | 'laneKey'>,
): string | null {
  if (card.laneKey !== 'user_story') return null;

  const title = card.title.trim();
  const leading = title.match(new RegExp(`^(${INLINE_TRACEABILITY_CODE.source})(?:\\s|$)`));
  if (leading) return leading[1];

  if (ISSUE_KEY_PATTERN.test(title)) return title;

  const embedded = title.match(new RegExp(`\\b(${INLINE_TRACEABILITY_CODE.source})\\b`));
  if (embedded) return embedded[1];

  const code = card.traceabilityCode?.trim();
  if (code && ISSUE_KEY_PATTERN.test(code) && !code.startsWith('US-')) {
    return code;
  }

  return null;
}

/** One-line user story label: "CTS-165 Summary text". */
export function formatUserStoryHeading(
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

export function userStoryStatusSortIndex(status: string | null): number {
  if (!status?.trim()) return USER_STORY_STATUS_ORDER.length + 1;
  const normalized = normalizeUserStoryStatus(status);
  const index = USER_STORY_STATUS_ORDER.indexOf(
    normalized as (typeof USER_STORY_STATUS_ORDER)[number],
  );
  return index === -1 ? USER_STORY_STATUS_ORDER.length : index;
}

/** Sort user story cards most progressed first (Done at the top). */
export function sortUserStoryCardsByStatus(
  cards: Card[],
  records: Record<string, UserStoryRecord>,
): Card[] {
  return [...cards].sort((a, b) => {
    const keyA = extractUserStoryIssueKey(a);
    const keyB = extractUserStoryIssueKey(b);
    const indexA = userStoryStatusSortIndex(keyA ? records[keyA]?.status ?? null : null);
    const indexB = userStoryStatusSortIndex(keyB ? records[keyB]?.status ?? null : null);
    const byStatus = indexB - indexA;
    if (byStatus !== 0) return byStatus;
    return a.order - b.order;
  });
}

/** Distinct statuses from uploaded records, most progressed first (matches list order). */
export function collectUserStoryRecordStatuses(
  records: Record<string, UserStoryRecord>,
): string[] {
  const seen = new Set<string>();
  for (const record of Object.values(records)) {
    const status = record.status?.trim();
    if (status) seen.add(status);
  }

  return [...seen].sort(
    (a, b) => userStoryStatusSortIndex(b) - userStoryStatusSortIndex(a),
  );
}

export interface UserStoryListEntry {
  issueKey: string;
  title: string;
  status: string | null;
}

/** User stories from the spreadsheet upload, sorted most progressed first then issue key. */
export function buildSortedUserStoryList(
  records: Record<string, UserStoryRecord>,
): UserStoryListEntry[] {
  const entries = Object.values(records).map((record) => ({
    issueKey: record.issueKey,
    title: record.summary?.trim() || record.issueKey,
    status: record.status?.trim() || null,
  }));

  return entries.sort((a, b) => {
    const byStatus = userStoryStatusSortIndex(b.status) - userStoryStatusSortIndex(a.status);
    if (byStatus !== 0) return byStatus;
    return a.issueKey.localeCompare(b.issueKey, undefined, { numeric: true, sensitivity: 'base' });
  });
}

export function filterUserStoryListByStatuses(
  entries: UserStoryListEntry[],
  selectedStatuses: Set<string> | null,
): UserStoryListEntry[] {
  if (selectedStatuses === null) return entries;
  return entries.filter((entry) => entry.status != null && selectedStatuses.has(entry.status));
}

export function userStoryIssueKeyMatchesStatusFilter(
  issueKey: string,
  records: Record<string, UserStoryRecord>,
  selectedStatuses: Set<string> | null,
): boolean {
  if (selectedStatuses === null) return true;
  const status = records[issueKey]?.status?.trim();
  return status != null && selectedStatuses.has(status);
}

/** Unique user story issue keys on the board per sub-step column. */
export function buildUserStoriesBySubStep(
  cards: Card[],
  records: Record<string, UserStoryRecord>,
  selectedStatuses: Set<string> | null = null,
): Map<string, string[]> {
  const bySubStep = new Map<string, Set<string>>();

  for (const card of cards) {
    if (card.laneKey !== 'user_story' || !card.subStepId) continue;
    const issueKey = extractUserStoryIssueKey(card);
    if (!issueKey) continue;
    if (!userStoryIssueKeyMatchesStatusFilter(issueKey, records, selectedStatuses)) continue;

    const keys = bySubStep.get(card.subStepId) ?? new Set<string>();
    keys.add(issueKey);
    bySubStep.set(card.subStepId, keys);
  }

  const result = new Map<string, string[]>();
  for (const [subStepId, keys] of bySubStep) {
    result.set(
      subStepId,
      [...keys].sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
      ),
    );
  }
  return result;
}

/** Count user story issue keys from Jira that already have a card on the blueprint. */
export function countUserStoryBoardMatches(
  cards: Card[],
  records: Record<string, UserStoryRecord>,
): number {
  let matched = 0;
  for (const issueKey of Object.keys(records)) {
    if (findUserStoryCardForIssueKey(cards, issueKey)) matched += 1;
  }
  return matched;
}

/** First user story card on the board for a Jira issue key. */
export function findUserStoryCardForIssueKey(cards: Card[], issueKey: string): Card | undefined {
  return cards.find(
    (card) => card.laneKey === 'user_story' && extractUserStoryIssueKey(card) === issueKey,
  );
}

/** Sub-step columns where a user story issue key appears on the board. */
export function findSubStepIdsForIssueKey(cards: Card[], issueKey: string): string[] {
  const subStepIds = new Set<string>();
  for (const card of cards) {
    if (card.laneKey !== 'user_story' || !card.subStepId) continue;
    if (extractUserStoryIssueKey(card) === issueKey) {
      subStepIds.add(card.subStepId);
    }
  }
  return [...subStepIds];
}

/** Sub-step columns with no user story cards on the board. */
export function findSubStepIdsWithoutUserStories(
  cards: Card[],
  subSteps: { id: string }[],
): string[] {
  const withUserStories = new Set<string>();
  for (const card of cards) {
    if (card.laneKey !== 'user_story' || !card.subStepId) continue;
    if (extractUserStoryIssueKey(card)) {
      withUserStories.add(card.subStepId);
    }
  }
  return subSteps.filter((subStep) => !withUserStories.has(subStep.id)).map((subStep) => subStep.id);
}

/** Sub-step columns with user stories matching a status filter. */
export function findSubStepIdsForStatusFilter(
  cards: Card[],
  records: Record<string, UserStoryRecord>,
  selectedStatuses: Set<string> | null,
): string[] {
  if (selectedStatuses === null) return [];
  return [...buildUserStoriesBySubStep(cards, records, selectedStatuses).keys()];
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

function rowToRecord(row: Record<string, string>): UserStoryRecord | null {
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

function rowsToRecords(rows: Record<string, string>[]): UserStoryImportResult {
  const records: Record<string, UserStoryRecord> = {};
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

export function parseUserStoryCsv(text: string): UserStoryImportResult {
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

export function parseUserStoryWorkbook(buffer: ArrayBuffer, fileName: string): UserStoryImportResult {
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

export async function parseUserStoryFile(file: File): Promise<UserStoryImportResult> {
  const lower = file.name.toLowerCase();
  if (lower.endsWith('.csv')) {
    return parseUserStoryCsv(await file.text());
  }
  if (lower.endsWith('.xlsx') || lower.endsWith('.xls')) {
    return parseUserStoryWorkbook(await file.arrayBuffer(), file.name);
  }
  return {
    records: {},
    imported: 0,
    skipped: 0,
    errors: ['Use a CSV or Excel file exported from Jira.'],
  };
}

export function mergeUserStoryRecords(
  existing: Record<string, UserStoryRecord> | undefined,
  incoming: Record<string, UserStoryRecord>,
): Record<string, UserStoryRecord> {
  return { ...(existing ?? {}), ...incoming };
}
