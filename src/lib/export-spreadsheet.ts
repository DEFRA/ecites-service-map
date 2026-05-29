import * as XLSX from 'xlsx';
import { buildL1BoardLayout } from './board-columns';
import { blueprintTitleLabel } from './blueprint-title';
import {
  DEFAULT_LANES,
  L2_LANE_KEYS,
  L2_LANE_TITLE_OVERRIDES,
  L3_LANE_KEYS,
  L3_LANE_TITLE_OVERRIDES,
  getLaneTitle,
} from './lane-definitions';
import { getActiveBlueprintJourneyLevel } from './blueprint-levels';
import type { BlueprintState, Card, LaneDefinition, LaneKey, Stage, Step, SubStep } from './types';

export interface ExportColumn {
  stage: Stage;
  step: Step | null;
  subStep: SubStep | null;
}

const HIERARCHY_ROW_LABELS = ['STAGES', 'STEPS', 'SUB-STEPS'] as const;

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'service-blueprint';
}

function sanitiseSheetName(value: string): string {
  return value.replace(/[:\\/?*[\]]/g, ' ').trim().slice(0, 31) || 'Blueprint';
}

export function spreadsheetExportFilename(state: BlueprintState): string {
  return `${slug(blueprintTitleLabel(state.blueprint.serviceName))}_blueprint.xlsx`;
}

function exportLanes(state: BlueprintState): LaneDefinition[] {
  const activeJourneyLevel = getActiveBlueprintJourneyLevel(state);
  const isChildView = Boolean(state.rootDocument && state.activeBlueprintId !== state.rootBlueprintId);
  const isL2Mode = isChildView && activeJourneyLevel === 'L2';
  const isL3Mode = isChildView && activeJourneyLevel === 'L3';

  if (isL3Mode) {
    return L3_LANE_KEYS
      .map((key) => state.lanes.find((lane) => lane.key === key) ?? DEFAULT_LANES.find((lane) => lane.key === key))
      .filter((lane): lane is LaneDefinition => Boolean(lane));
  }

  if (isL2Mode) {
    return L2_LANE_KEYS
      .map((key) => state.lanes.find((lane) => lane.key === key))
      .filter((lane): lane is LaneDefinition => Boolean(lane));
  }

  return [...state.lanes].sort((a, b) => a.order - b.order);
}

function laneTitle(state: BlueprintState, lane: LaneDefinition): string {
  const activeJourneyLevel = getActiveBlueprintJourneyLevel(state);
  const isChildView = Boolean(state.rootDocument && state.activeBlueprintId !== state.rootBlueprintId);
  if (isChildView && activeJourneyLevel === 'L3') return L3_LANE_TITLE_OVERRIDES[lane.key] ?? getLaneTitle(lane.key);
  if (isChildView && activeJourneyLevel === 'L2') return L2_LANE_TITLE_OVERRIDES[lane.key] ?? getLaneTitle(lane.key);
  return getLaneTitle(lane.key);
}

/** Build export columns at full sub-step granularity regardless of board header visibility. */
export function buildExportColumns(state: BlueprintState): ExportColumn[] {
  const stages = [...state.stages].sort((a, b) => a.order - b.order);
  const steps = state.steps;
  const subSteps = state.subSteps ?? [];
  const layout = buildL1BoardLayout(stages, steps, subSteps);

  const stageById = new Map(stages.map((stage) => [stage.id, stage]));
  const stepById = new Map(steps.map((step) => [step.id, step]));
  const columns: ExportColumn[] = [];

  for (const stageGroup of layout.stages) {
    const stage = stageById.get(stageGroup.stageId);
    if (!stage) continue;

    if (stageGroup.steps.length === 0) {
      columns.push({ stage, step: null, subStep: null });
      continue;
    }

    for (const stepGroup of stageGroup.steps) {
      const step = stepById.get(stepGroup.stepId) ?? null;
      if (!step) continue;

      if (stepGroup.subSteps.length === 0) {
        columns.push({ stage, step, subStep: null });
        continue;
      }

      for (const subStep of stepGroup.subSteps) {
        columns.push({ stage, step, subStep });
      }
    }
  }

  return columns;
}

function getCardsForExportColumn(
  cards: Card[],
  column: ExportColumn,
  laneKey: LaneKey,
): Card[] {
  return cards
    .filter((card) => {
      if (card.laneKey !== laneKey) return false;
      if (column.subStep) return card.subStepId === column.subStep.id;
      if (column.step) return card.stepId === column.step.id;
      return card.stageId === column.stage.id;
    })
    .sort((a, b) => a.order - b.order);
}

function formatCellCards(cards: Card[]): string {
  if (cards.length === 0) return '';
  return cards
    .map((card) => {
      const title = card.title.trim();
      const body = card.body?.trim();
      return body ? `${title}\n${body}` : title;
    })
    .join('\n');
}

/** Build a 2D array for XLSX export: column A = row labels, B+ = board columns. */
export function buildSpreadsheetRows(state: BlueprintState): string[][] {
  const columns = buildExportColumns(state);
  const lanes = exportLanes(state);
  const rows: string[][] = [];

  for (let rowIndex = 0; rowIndex < HIERARCHY_ROW_LABELS.length; rowIndex++) {
    const label = HIERARCHY_ROW_LABELS[rowIndex];
    const row: string[] = [label];
    for (const column of columns) {
      if (rowIndex === 0) row.push(column.stage.title);
      else if (rowIndex === 1) row.push(column.step?.title ?? '');
      else row.push(column.subStep?.title ?? '');
    }
    rows.push(row);
  }

  for (const lane of lanes) {
    const row = [laneTitle(state, lane)];
    for (const column of columns) {
      row.push(formatCellCards(getCardsForExportColumn(state.cards, column, lane.key)));
    }
    rows.push(row);
  }

  return rows;
}

export function exportBlueprintSpreadsheet(state: BlueprintState): ArrayBuffer {
  const rows = buildSpreadsheetRows(state);
  const worksheet = XLSX.utils.aoa_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  const sheetTitle = sanitiseSheetName(blueprintTitleLabel(state.blueprint.serviceName));
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetTitle);
  return XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
}
