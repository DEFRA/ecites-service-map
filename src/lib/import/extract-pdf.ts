/**
 * extract-pdf.ts
 *
 * Extracts tabular content from PDFs (e.g. Confluence-exported service maps)
 * into ExtractedRow[] for the AI mapping pipeline.
 *
 * For Confluence-style tables the column headers encode the blueprint schema
 * directly ("Step" → stage, "Sub step" → step, "Pain point" → pain_point lane,
 * etc.), so we classify each column up-front and emit one ExtractedRow per
 * item per lane column — fully pre-filled with stage, step, lane_key and
 * card_title — so the mapping service can commit with high confidence and no
 * manual lane assignment is needed.
 */

import type { LaneKey } from '../types';
import type { ExtractedRow, ExtractionResult } from './extract';

// ---------------------------------------------------------------------------
// Column classification
// ---------------------------------------------------------------------------

/** Headers that represent the top-level stage. */
const STAGE_HEADERS = new Set(['step', 'stage', 'phase', 'process step']);

/** Headers that represent the step (sub-stage). */
const STEP_HEADERS = new Set([
  'sub step', 'sub-step', 'substep',
  'sub stage', 'sub-stage', 'substage',
]);

/** Headers that represent the sub-step (treated as step if no step col present). */
const SUB_STEP_HEADERS = new Set([
  'sub sub step', 'sub-sub-step', 'sub sub stage', 'sub-sub step',
  'sub sub stage', 'sub substep',
]);

/** Column header → lane key, covering common Confluence column names. */
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
// Internal geometry types
// ---------------------------------------------------------------------------

interface RawItem {
  str: string;
  x: number;
  /** top-down screen y (0 = top of page) */
  y: number;
  width: number;
  page: number;
}

// ---------------------------------------------------------------------------
// PDF.js text extraction
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
        y: vp.height - item.transform[5], // flip to top-down
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
// Table grid construction
// ---------------------------------------------------------------------------

/**
 * Builds a 2D grid of cells from raw PDF text items.
 *
 * Each cell is an ordered list of (y, text) pairs so callers can split on
 * large y-gaps to separate multiple items within one cell.
 */
function buildGrid(
  items: RawItem[],
  colCentroids: number[],
  rowCentroids: number[],
): Array<Array<Array<{ y: number; str: string }>>> {
  // grid[row][col] = list of {y, str} fragments
  const grid: Array<Array<Array<{ y: number; str: string }>>> = Array.from(
    { length: rowCentroids.length },
    () => Array.from({ length: colCentroids.length }, () => []),
  );

  for (const item of items) {
    const col = nearest(item.x, colCentroids);
    const row = nearest(item.y, rowCentroids);
    grid[row][col].push({ y: item.y, str: item.str });
  }

  // Sort fragments within each cell by y so text reads top-to-bottom
  for (const row of grid) {
    for (const cell of row) {
      cell.sort((a, b) => a.y - b.y);
    }
  }

  return grid;
}

/**
 * Given a cell's fragments, split into individual items by detecting
 * large y-gaps (> 1.5× median line height within the cell).
 */
function splitCellIntoItems(
  fragments: Array<{ y: number; str: string }>,
  lineHeight: number,
): string[] {
  if (!fragments.length) return [];

  const threshold = lineHeight * 1.4;
  const groups: string[][] = [[fragments[0].str]];

  for (let i = 1; i < fragments.length; i++) {
    const gap = fragments[i].y - fragments[i - 1].y;
    if (gap > threshold) {
      groups.push([fragments[i].str]);
    } else {
      groups[groups.length - 1].push(fragments[i].str);
    }
  }

  return groups
    .map((g) => g.join(' ').trim())
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function extractFromPdf(
  buffer: ArrayBuffer,
  fileName: string,
): Promise<ExtractionResult> {
  // -- 1. Pull text items from all pages
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

  // -- 2. Cluster into columns and rows
  const sortedX = [...rawItems.map((i) => i.x)].sort((a, b) => a - b);
  const colCentroids = centroidClusters(sortedX, 18);

  const sortedY = [...rawItems.map((i) => i.y)].sort((a, b) => a - b);
  const rowCentroids = centroidClusters(sortedY, 5);

  if (colCentroids.length < 2) {
    return {
      rows: [],
      headers: [],
      errors: ['Could not detect table columns in PDF. Ensure the file has a multi-column table.'],
      warnings: [],
    };
  }

  // -- 3. Build grid
  const grid = buildGrid(rawItems, colCentroids, rowCentroids);

  // -- 4. Find the header row — first row with ≥2 non-empty cells
  let headerRowIdx = -1;
  for (let r = 0; r < grid.length; r++) {
    const nonEmpty = grid[r].filter((c) => c.length > 0).length;
    if (nonEmpty >= 2) { headerRowIdx = r; break; }
  }

  if (headerRowIdx === -1) {
    return {
      rows: [],
      headers: [],
      errors: ['Could not find a header row in the PDF.'],
      warnings: [],
    };
  }

  // -- 5. Read header strings and classify each column
  const headers: string[] = grid[headerRowIdx].map((frags) =>
    frags.map((f) => f.str).join(' ').trim(),
  );

  const colRoles: ColRole[] = headers.map(classifyHeader);

  // Determine column indices for structural fields
  const stageColIdx = colRoles.findIndex((r) => r.type === 'stage');
  const stepColIdx = colRoles.findIndex((r) => r.type === 'step');
  // Use sub_step as step if no step column present
  const subStepColIdx = colRoles.findIndex((r) => r.type === 'sub_step');
  const effectiveStepColIdx = stepColIdx !== -1 ? stepColIdx : subStepColIdx;

  const laneColIndices: Array<{ col: number; laneKey: LaneKey }> = [];
  colRoles.forEach((role, idx) => {
    if (role.type === 'lane') laneColIndices.push({ col: idx, laneKey: role.laneKey });
  });

  // Fall back to header-based extraction if no known columns found
  const hasKnownStructure = stageColIdx !== -1 || effectiveStepColIdx !== -1 || laneColIndices.length > 0;

  // -- 6. Estimate typical line height for intra-cell item splitting
  const yGaps: number[] = [];
  for (let i = 1; i < rowCentroids.length; i++) {
    yGaps.push(rowCentroids[i] - rowCentroids[i - 1]);
  }
  yGaps.sort((a, b) => a - b);
  const lineHeight = yGaps[Math.floor(yGaps.length * 0.25)] ?? 12; // lower quartile = typical line height

  // -- 7. Emit ExtractedRows
  const extractedRows: ExtractedRow[] = [];
  let sourceRowNumber = 2;

  // Track running stage/step across rows (Confluence tables repeat the step
  // across sub-rows for cells that span vertically)
  let currentStage = '';
  let currentStep = '';

  for (let r = headerRowIdx + 1; r < grid.length; r++) {
    const rowCells = grid[r];

    // Update stage/step context from this row if present
    const stageText = stageColIdx !== -1
      ? rowCells[stageColIdx].map((f) => f.str).join(' ').trim()
      : '';
    const stepText = effectiveStepColIdx !== -1
      ? rowCells[effectiveStepColIdx].map((f) => f.str).join(' ').trim()
      : '';

    if (stageText) currentStage = stageText;
    if (stepText) currentStep = stepText;

    if (!currentStage && !currentStep) continue; // skip pre-table content

    if (hasKnownStructure) {
      // Emit one ExtractedRow per item per lane column
      for (const { col, laneKey } of laneColIndices) {
        const cellFrags = rowCells[col];
        if (!cellFrags.length) continue;

        const items = splitCellIntoItems(cellFrags, lineHeight);
        for (const item of items) {
          if (!item) continue;
          const cells: Record<string, string> = {
            stage: currentStage,
            step: currentStep,
            lane_key: laneKey,
            card_title: item,
            record_type: 'card_row',
          };
          extractedRows.push({
            sourceType: 'pdf_extracted',
            sourceFileName: fileName,
            sourceSheetOrPage: 'PDF',
            sourceRowNumber: sourceRowNumber++,
            extractedHeaders: ['stage', 'step', 'lane_key', 'card_title'],
            extractedCells: cells,
            rawText: `${currentStage}\t${currentStep}\t${laneKey}\t${item}`,
          });
        }
      }
    } else {
      // No recognised column structure — fall back to one row per table row
      const nonEmpty = rowCells.filter((c) => c.length > 0);
      if (!nonEmpty.length) continue;

      const cells: Record<string, string> = {};
      const rawParts: string[] = [];
      for (let c = 0; c < headers.length; c++) {
        const h = headers[c];
        if (!h) continue;
        const val = rowCells[c].map((f) => f.str).join(' ').trim();
        cells[h] = val;
        if (val) rawParts.push(val);
      }

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
      'Column headers did not match expected blueprint names (Step, Sub step, Actor, Pain point, etc.). ' +
      'Rows have been extracted as-is — you may need to manually assign lanes.',
    );
  }

  return {
    rows: extractedRows,
    headers: headers.filter(Boolean),
    errors: [],
    warnings: extractedRows.length === 0
      ? ['PDF parsed but no data rows were extracted.']
      : warnings,
  };
}
