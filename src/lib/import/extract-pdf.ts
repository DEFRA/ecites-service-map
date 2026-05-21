/**
 * extract-pdf.ts
 *
 * Extracts tabular content from PDFs (e.g. Confluence-exported service maps)
 * into ExtractedRow[] for the AI mapping pipeline.
 *
 * Key design decisions:
 *  - Column headers in Confluence PDFs often wrap across multiple lines ("Sub\nstep",
 *    "Research\nquestions"). We detect the full header block by collecting all rows
 *    before the first numbered data row ("1.", "2.3", etc.) and merging fragments
 *    column-by-column.
 *  - Once headers are classified (stage / step / lane), each data row emits one
 *    ExtractedRow per non-empty lane cell, pre-filled with stage, step, lane_key,
 *    and card_title so the mapping service has full confidence and no manual
 *    lane assignment is needed.
 */

import type { LaneKey } from '../types';
import type { ExtractedRow, ExtractionResult } from './extract';

// ---------------------------------------------------------------------------
// Column classification
// ---------------------------------------------------------------------------

const STAGE_HEADERS = new Set([
  'step', 'stage', 'phase', 'process step', 'journey step',
]);

const STEP_HEADERS = new Set([
  'sub step', 'sub-step', 'substep',
  'sub stage', 'sub-stage', 'substage',
]);

const SUB_STEP_HEADERS = new Set([
  'sub sub step', 'sub-sub-step', 'subsubstep',
  'sub sub stage', 'sub-sub stage', 'sub sub-step',
]);

const HEADER_TO_LANE: Record<string, LaneKey> = {
  actor: 'actor',
  actors: 'actor',
  'pain point': 'pain_point',
  'pain points': 'pain_point',
  'user need': 'user_need',
  'user needs': 'user_need',
  'user story': 'user_action_event',
  'user stories': 'user_action_event',
  'user action': 'user_action_event',
  'user actions': 'user_action_event',
  'research question': 'description',
  'research questions': 'description',
  'backstage process': 'backstage_process',
  'backstage processes': 'backstage_process',
  'frontstage touchpoint': 'frontstage_touchpoint',
  'frontstage touchpoints': 'frontstage_touchpoint',
  touchpoint: 'frontstage_touchpoint',
  touchpoints: 'frontstage_touchpoint',
  'business rule': 'business_rule',
  'business rules': 'business_rule',
  system: 'system',
  systems: 'system',
  opportunity: 'opportunities',
  opportunities: 'opportunities',
  idea: 'ideas',
  ideas: 'ideas',
  'success measure': 'success_measure',
  'success measures': 'success_measure',
  behaviour: 'behaviour_change',
  'desired behaviour': 'behaviour_change',
  'desired behaviour change': 'behaviour_change',
  motivation: 'motivation',
  ability: 'ability',
  prompt: 'prompts',
  prompts: 'prompts',
};

type ColRole =
  | { type: 'stage' }
  | { type: 'step' }
  | { type: 'sub_step' }
  | { type: 'lane'; laneKey: LaneKey }
  | { type: 'ignore' };

function classifyHeader(raw: string): ColRole {
  const h = raw.toLowerCase().trim().replace(/\s{2,}/g, ' ');
  if (STAGE_HEADERS.has(h)) return { type: 'stage' };
  if (STEP_HEADERS.has(h)) return { type: 'step' };
  if (SUB_STEP_HEADERS.has(h)) return { type: 'sub_step' };
  const laneKey = HEADER_TO_LANE[h];
  if (laneKey) return { type: 'lane', laneKey };
  return { type: 'ignore' };
}

// ---------------------------------------------------------------------------
// Internal types
// ---------------------------------------------------------------------------

interface RawItem {
  str: string;
  x: number;
  y: number; // top-down (0 = top of page)
  width: number;
  page: number;
}

// ---------------------------------------------------------------------------
// PDF.js extraction
// ---------------------------------------------------------------------------

async function extractRawItems(buffer: ArrayBuffer): Promise<RawItem[]> {
  const pdfjsLib = await import('pdfjs-dist');

  if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url,
    ).toString();
  }

  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise;
  const result: RawItem[] = [];

  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    const vp = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();

    for (const item of content.items) {
      if (!('str' in item)) continue;
      const s = item.str.trim();
      if (!s) continue;
      result.push({
        str: s,
        x: item.transform[4],
        y: vp.height - item.transform[5],
        width: item.width ?? 0,
        page: p,
      });
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------

function centroidClusters(sorted: number[], gap: number): number[] {
  if (!sorted.length) return [];
  const groups: number[][] = [[sorted[0]]];
  for (let i = 1; i < sorted.length; i++) {
    const g = groups[groups.length - 1];
    if (sorted[i] - g[g.length - 1] <= gap) g.push(sorted[i]);
    else groups.push([sorted[i]]);
  }
  return groups.map((g) => g.reduce((s, v) => s + v, 0) / g.length);
}

function nearest(value: number, centroids: number[]): number {
  let best = 0;
  let bestD = Math.abs(value - centroids[0]);
  for (let i = 1; i < centroids.length; i++) {
    const d = Math.abs(value - centroids[i]);
    if (d < bestD) { bestD = d; best = i; }
  }
  return best;
}

// ---------------------------------------------------------------------------
// Grid construction
// ---------------------------------------------------------------------------

/** grid[rowIdx][colIdx] = fragments sorted top-to-bottom */
function buildGrid(
  items: RawItem[],
  colCentroids: number[],
  rowCentroids: number[],
): Array<Array<Array<{ y: number; str: string }>>> {
  const grid: Array<Array<Array<{ y: number; str: string }>>> = Array.from(
    { length: rowCentroids.length },
    () => Array.from({ length: colCentroids.length }, () => []),
  );

  for (const item of items) {
    const col = nearest(item.x, colCentroids);
    const row = nearest(item.y, rowCentroids);
    grid[row][col].push({ y: item.y, str: item.str });
  }

  for (const row of grid) {
    for (const cell of row) cell.sort((a, b) => a.y - b.y);
  }

  return grid;
}

// ---------------------------------------------------------------------------
// Header block detection (handles multi-line wrapped headers)
// ---------------------------------------------------------------------------

/**
 * Returns the range [headerStartRow, headerEndRow] (inclusive) of the header
 * block. The block ends just before the first row whose leftmost non-empty
 * cell starts with a digit (e.g. "1.", "2.3") — those are data rows.
 *
 * All rows in the block are merged column-by-column to build the full header
 * strings (handles "Sub\nstep", "Research\nquestions", etc.).
 */
function detectHeaderBlock(
  grid: Array<Array<Array<{ y: number; str: string }>>>,
  colCentroids: number[],
): { headers: string[]; firstDataRow: number } | null {
  // Find first grid row that has ≥ 2 non-empty cells (start of the table)
  let tableStartRow = -1;
  for (let r = 0; r < grid.length; r++) {
    if (grid[r].filter((c) => c.length > 0).length >= 2) {
      tableStartRow = r;
      break;
    }
  }
  if (tableStartRow === -1) return null;

  // Walk forward to find where data rows begin (first numeric-prefixed cell)
  const NUMERIC_ROW = /^\s*\d+[\.\)]/;
  let firstDataRow = grid.length;
  for (let r = tableStartRow; r < grid.length; r++) {
    // Check all cells in this row for a numeric prefix
    const rowText = grid[r].flatMap((c) => c.map((f) => f.str)).join(' ');
    if (NUMERIC_ROW.test(rowText) && r > tableStartRow) {
      firstDataRow = r;
      break;
    }
  }

  // Merge all rows from tableStartRow to firstDataRow-1 into column headers
  const headers: string[] = new Array(colCentroids.length).fill('');
  for (let r = tableStartRow; r < firstDataRow; r++) {
    for (let c = 0; c < colCentroids.length; c++) {
      const text = grid[r][c].map((f) => f.str).join(' ').trim();
      if (text) {
        headers[c] = headers[c] ? `${headers[c]} ${text}` : text;
      }
    }
  }

  return { headers, firstDataRow };
}

// ---------------------------------------------------------------------------
// Intra-cell item splitting
// ---------------------------------------------------------------------------

/**
 * Split a cell's fragments into individual items using y-gaps.
 * Fragments at similar y (within lineHeight) belong to the same item;
 * a larger gap signals a new item within the same cell.
 */
function splitCellIntoItems(
  fragments: Array<{ y: number; str: string }>,
  lineHeight: number,
): string[] {
  if (!fragments.length) return [];

  const threshold = lineHeight * 1.8;
  const groups: string[][] = [[fragments[0].str]];

  for (let i = 1; i < fragments.length; i++) {
    const gap = fragments[i].y - fragments[i - 1].y;
    if (gap > threshold) {
      groups.push([fragments[i].str]);
    } else {
      groups[groups.length - 1].push(fragments[i].str);
    }
  }

  return groups.map((g) => g.join(' ').trim()).filter(Boolean);
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function extractFromPdf(
  buffer: ArrayBuffer,
  fileName: string,
): Promise<ExtractionResult> {
  // 1. Extract raw text items
  let rawItems: RawItem[];
  try {
    rawItems = await extractRawItems(buffer);
  } catch (err) {
    return {
      rows: [],
      headers: [],
      errors: [err instanceof Error ? err.message : 'Failed to parse PDF'],
      warnings: [],
    };
  }

  if (!rawItems.length) {
    return {
      rows: [],
      headers: [],
      errors: ['No text found in PDF. The file may be scanned/image-only.'],
      warnings: [],
    };
  }

  // 2. Cluster into columns and rows
  const sortedX = [...rawItems.map((i) => i.x)].sort((a, b) => a - b);
  const colCentroids = centroidClusters(sortedX, 18);

  const sortedY = [...rawItems.map((i) => i.y)].sort((a, b) => a - b);
  const rowCentroids = centroidClusters(sortedY, 5);

  if (colCentroids.length < 2) {
    return {
      rows: [],
      headers: [],
      errors: ['Could not detect table columns. Ensure the PDF contains a multi-column table.'],
      warnings: [],
    };
  }

  // 3. Build grid
  const grid = buildGrid(rawItems, colCentroids, rowCentroids);

  // 4. Detect header block (handles wrapped multi-line headers)
  const headerResult = detectHeaderBlock(grid, colCentroids);
  if (!headerResult) {
    return {
      rows: [],
      headers: [],
      errors: ['Could not find a header row in the PDF.'],
      warnings: [],
    };
  }

  const { headers, firstDataRow } = headerResult;

  // 5. Classify columns
  const colRoles: ColRole[] = headers.map(classifyHeader);

  const stageColIdx = colRoles.findIndex((r) => r.type === 'stage');
  const stepColIdx = colRoles.findIndex((r) => r.type === 'step');
  const subStepColIdx = colRoles.findIndex((r) => r.type === 'sub_step');
  const effectiveStepColIdx = stepColIdx !== -1 ? stepColIdx : subStepColIdx;

  const laneColIndices: Array<{ col: number; laneKey: LaneKey }> = [];
  colRoles.forEach((role, idx) => {
    if (role.type === 'lane') laneColIndices.push({ col: idx, laneKey: role.laneKey });
  });

  const hasKnownStructure =
    stageColIdx !== -1 || effectiveStepColIdx !== -1 || laneColIndices.length > 0;

  // 6. Estimate typical line height
  const yGaps: number[] = [];
  for (let i = 1; i < rowCentroids.length; i++) {
    yGaps.push(rowCentroids[i] - rowCentroids[i - 1]);
  }
  yGaps.sort((a, b) => a - b);
  const lineHeight = yGaps[Math.floor(yGaps.length * 0.25)] ?? 12;

  // 7. Emit ExtractedRows
  const extractedRows: ExtractedRow[] = [];
  let sourceRowNumber = 2;
  let currentStage = '';
  let currentStep = '';

  for (let r = firstDataRow; r < grid.length; r++) {
    const rowCells = grid[r];

    // Update running stage/step context when cells are non-empty
    if (stageColIdx !== -1) {
      const t = rowCells[stageColIdx].map((f) => f.str).join(' ').trim();
      if (t) currentStage = t;
    }
    if (effectiveStepColIdx !== -1) {
      const t = rowCells[effectiveStepColIdx].map((f) => f.str).join(' ').trim();
      if (t) currentStep = t;
    }

    if (hasKnownStructure) {
      // One ExtractedRow per item per lane column
      for (const { col, laneKey } of laneColIndices) {
        const cellFrags = rowCells[col];
        if (!cellFrags.length) continue;

        const items = splitCellIntoItems(cellFrags, lineHeight);
        for (const item of items) {
          if (!item) continue;
          extractedRows.push({
            sourceType: 'pdf_extracted',
            sourceFileName: fileName,
            sourceSheetOrPage: 'PDF',
            sourceRowNumber: sourceRowNumber++,
            extractedHeaders: ['stage', 'step', 'lane_key', 'card_title'],
            extractedCells: {
              stage: currentStage,
              step: currentStep,
              lane_key: laneKey,
              card_title: item,
              record_type: 'card_row',
            },
            rawText: `${currentStage}\t${currentStep}\t${laneKey}\t${item}`,
          });
        }
      }
    } else {
      // Fallback: one row per table row with raw cell values
      const cells: Record<string, string> = {};
      const rawParts: string[] = [];
      for (let c = 0; c < headers.length; c++) {
        const h = headers[c];
        if (!h) continue;
        const val = rowCells[c].map((f) => f.str).join(' ').trim();
        cells[h] = val;
        if (val) rawParts.push(val);
      }
      if (!rawParts.length) continue;

      extractedRows.push({
        sourceType: 'pdf_extracted',
        sourceFileName: fileName,
        sourceSheetOrPage: 'PDF',
        sourceRowNumber: sourceRowNumber++,
        extractedHeaders: headers.filter(Boolean),
        extractedCells: cells,
        rawText: rawParts.join('\t'),
      });
    }
  }

  const warnings: string[] = [];
  if (!hasKnownStructure) {
    warnings.push(
      'Column headers did not match expected names (Step, Sub step, Actor, Pain point, etc.). ' +
        'Rows extracted as-is — you may need to manually assign lanes in the review step.',
    );
  }

  return {
    rows: extractedRows,
    headers: headers.filter(Boolean),
    errors: [],
    warnings:
      extractedRows.length === 0
        ? ['PDF was parsed but no data rows were extracted. Check that the PDF contains a text-based table with numbered rows (1., 2., etc.).']
        : warnings,
  };
}
