/**
 * CITES / horizontal service blueprint matrix import.
 *
 * Spreadsheet layout:
 *   - Column A: row labels (STAGES, STEPS, SUB-STEPS, Sub-sub-steps, Actors, lanes…)
 *   - Columns B…N: one leaf column per sub-step
 *   - Repeated values in STAGES / STEPS rows mean merged cells (one stage or step spans those columns)
 */

import Papa from 'papaparse';
import { v4 as uuid } from 'uuid';
import type {
  BlueprintState,
  Card,
  ImportResult,
  ImportValidationError,
  LaneKey,
  Stage,
  Step,
  SubStep,
  UserJourney,
} from '../types';
import { DEFAULT_LANES, mergeLaneDefinitions } from '../lane-definitions';
import { validateLaneKey } from './validate';
import { CITES_BLUEPRINT_CSV } from './cites-blueprint-csv';
import { relinkOrphanedStoryboardImages, remapStoryboardImages } from '../storyboard-images';
import { parseInlineId, parseCodedLaneItem, splitLaneCellItems } from './normalize';
import { isJourneyInclusionMark } from '../user-journey';

function capitalizeSentenceStart(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  const firstLetterIndex = trimmed.search(/[A-Za-z]/);
  if (firstLetterIndex === -1) return trimmed;
  return `${trimmed.slice(0, firstLetterIndex)}${trimmed[firstLetterIndex].toUpperCase()}${trimmed.slice(firstLetterIndex + 1)}`;
}
import { detectSourceType, generateSourceRef, generateTraceabilityCode } from '../traceability/service';
import { getLanePrefix } from '../traceability/registry';

const STRUCTURAL_LABELS = new Set([
  'stages',
  'steps',
  'sub_steps',
  'sub_sub_steps',
  'service_name',
  'stage_outcome',
  'next_step',
  'phase',
  'description',
  'stage_description',
  'steps_description',
  'sub_steps_description',
  'journeys',
  'story_title',
  'narrative',
  'detail',
]);

const LANE_ALIASES: Record<string, LaneKey> = {
  user_action: 'user_action_event',
  actors: 'actor',
  user_needs: 'user_need',
  frontstage_touchpoints: 'frontstage_touchpoint',
  business_rule_refs: 'business_rule',
  business_rules: 'business_rule',
  data_in: 'data_input',
  data_out: 'data_output',
  backstage_actors: 'backstage_actor',
  desired_behaviour_change: 'behaviour_change',
  desired_behaviour: 'behaviour_change',
  what_good_looks_like: 'behaviour_change',
  target_behaviour: 'behaviour_change',
  activities: 'activity',
  user_activity: 'activity',
  user_activities: 'activity',
  user_task: 'activity',
  user_tasks: 'activity',
  tasks: 'activity',
  pain_points: 'pain_point',
  user_stories: 'user_story',
  user_story: 'user_story',
  systems: 'system',
};

function normalizeMatrixLabel(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
}

function emptyImportState(bpId: string, ts: string, serviceName: string): BlueprintState {
  return {
    blueprint: {
      id: bpId,
      serviceName: serviceName || 'Enter title',
      description: '',
      createdAt: ts,
      updatedAt: ts,
    },
    stages: [],
    steps: [],
    subSteps: [],
    lanes: DEFAULT_LANES.map((l) => ({ ...l })),
    childBlueprints: [],
    rootDocument: null,
    activeBlueprintId: bpId,
    rootBlueprintId: bpId,
    cards: [],
    storyboardImages: [],
    storyboardVisible: true,
    storyboardCollapsed: false,
    descriptionRowVisible: true,
    descriptionRowCollapsed: false,
    subSubStepRowVisible: true,
    subSubStepRowCollapsed: false,
    stepHeadersVisible: true,
    subStepHeadersVisible: true,
    actorJourneyFilter: null,
    systemJourneyFilter: null,
    userNeedJourneyFilter: null,
    painPointJourneyFilter: null,
    userStoryJourneyFilter: null,
    userJourneys: [],
    activeUserJourneyId: null,
    descriptionVisibleInUserJourney: false,
    cardLinks: [],
    evidence: [],
    opportunities: [],
    solutions: [],
    assumptions: [],
    strategicGoals: [],
    outcomes: [],
    systemOutcomes: [],
    behaviourOutcomes: [],
    serviceOutcomes: [],
    stepLinks: [],
    requirements: [],
    apiContracts: [],
    uiScaffolds: [],
    traceabilityCounters: {},
  };
}

/** Carry blank cells forward (Excel-style merged cells). */
export function fillMergedRow(values: string[]): string[] {
  const filled: string[] = [];
  let last = '';
  for (const v of values) {
    const t = v.trim();
    if (t) last = t;
    filled.push(last);
  }
  return filled;
}

function findMatrixRow(rows: string[][], ...labels: string[]): string[] | undefined {
  const wanted = new Set(labels.map(normalizeMatrixLabel));
  return rows.find((row) => wanted.has(normalizeMatrixLabel(String(row[0] ?? ''))));
}

function resolveLaneKey(label: string): LaneKey | null {
  const key = LANE_ALIASES[label] ?? label;
  if (validateLaneKey(key, 0) === null) return key as LaneKey;
  return null;
}

/** Blueprint title from the first worksheet tab name, else the file name. */
export function deriveServiceName(sourceFile: string, sourceSheet?: string): string {
  const sheet = sourceSheet?.trim();
  if (sheet) return sheet;

  const base = sourceFile.replace(/\.[^.]+$/, '').trim();
  if (/cites/i.test(base)) return 'CITES';
  return base || 'Enter title';
}

function parseUserJourneysFromMatrix(
  rawRows: string[][],
  colCount: number,
  colToSubStep: Map<number, SubStep>,
  sliceCols: (row: string[]) => string[],
): { journeys: UserJourney[]; skipRowIndices: Set<number> } {
  const skipRowIndices = new Set<number>();
  const journeysIdx = rawRows.findIndex(
    (row) => normalizeMatrixLabel(String(row[0] ?? '')) === 'journeys',
  );
  if (journeysIdx === -1) return { journeys: [], skipRowIndices };

  skipRowIndices.add(journeysIdx);
  const journeys: UserJourney[] = [];
  let i = journeysIdx + 1;

  while (i < rawRows.length) {
    const nameRow = rawRows[i];
    const nameLabel = String(nameRow?.[0] ?? '').trim();
    if (!nameLabel) {
      i++;
      continue;
    }

    const nameNorm = normalizeMatrixLabel(nameLabel);
    if (STRUCTURAL_LABELS.has(nameNorm)) break;

    const storyRow = rawRows[i + 1];
    const narrativeRow = rawRows[i + 2];
    const detailRow = rawRows[i + 3];
    if (!storyRow || !narrativeRow || !detailRow) break;

    const storyNorm = normalizeMatrixLabel(String(storyRow[0] ?? ''));
    const narrativeNorm = normalizeMatrixLabel(String(narrativeRow[0] ?? ''));
    const detailNorm = normalizeMatrixLabel(String(detailRow[0] ?? ''));
    if (storyNorm !== 'story_title' || narrativeNorm !== 'narrative' || detailNorm !== 'detail') {
      break;
    }

    skipRowIndices.add(i);
    skipRowIndices.add(i + 1);
    skipRowIndices.add(i + 2);
    skipRowIndices.add(i + 3);

    const inclusion = sliceCols(nameRow);
    const storyCells = sliceCols(storyRow);
    const narrativeCells = sliceCols(narrativeRow);
    const detailCells = sliceCols(detailRow);

    const subStepIds: string[] = [];
    const columns: UserJourney['columns'] = {};

    for (let colIdx = 0; colIdx < colCount; colIdx++) {
      if (!isJourneyInclusionMark(inclusion[colIdx] ?? '')) continue;
      const subStep = colToSubStep.get(colIdx);
      if (!subStep) continue;
      if (!subStepIds.includes(subStep.id)) subStepIds.push(subStep.id);
      columns[subStep.id] = {
        storyTitle: storyCells[colIdx] ?? '',
        narrative: narrativeCells[colIdx] ?? '',
        detail: detailCells[colIdx] ?? '',
      };
    }

    if (subStepIds.length > 0) {
      journeys.push({
        id: uuid(),
        name: nameLabel,
        subStepIds,
        columns,
      });
    }

    i += 4;
  }

  return { journeys, skipRowIndices };
}

export function parseCitesBlueprintRaw(text: string): string[][] {
  const result = Papa.parse<string[]>(text, {
    header: false,
    skipEmptyLines: false,
  });
  return (result.data as string[][]).map((row) =>
    row.map((cell) => (cell !== undefined && cell !== null ? String(cell) : '')),
  );
}

export function detectCitesBlueprintMatrix(rows: string[][]): boolean {
  const labels = rows
    .map((row) => normalizeMatrixLabel(String(row[0] ?? '')))
    .filter(Boolean);
  const hasStages = labels.includes('stages');
  const hasSteps = labels.includes('steps');
  const hasSubSteps = labels.includes('sub_steps');
  if (!hasStages || !hasSteps || !hasSubSteps) return false;
  const maxCols = Math.max(0, ...rows.map((r) => r.length - 1));
  return maxCols >= 2;
}

export function normalizeCitesBlueprintMatrix(
  rawRows: string[][],
  sourceFile: string,
  sourceSheet: string,
): ImportResult {
  const errors: ImportValidationError[] = [];
  const warnings: ImportValidationError[] = [];

  const bpId = uuid();
  const ts = new Date().toISOString();
  const srcType = detectSourceType(sourceFile);
  let srcCounters: Record<string, number> = {};
  let traceCounters: Record<string, number> = {};

  const stagesRow = findMatrixRow(rawRows, 'stages');
  const stepsRow = findMatrixRow(rawRows, 'steps');
  const subStepsRow = findMatrixRow(rawRows, 'sub_steps');
  const subSubStepsRow = findMatrixRow(rawRows, 'sub_sub_steps');
  const actorsRow = findMatrixRow(rawRows, 'actors');

  if (!stagesRow || !stepsRow || !subStepsRow) {
    errors.push({
      row: 0,
      field: 'format',
      message: 'CITES matrix requires STAGES, STEPS and SUB-STEPS rows in column A',
    });
    return { state: emptyImportState(bpId, ts, deriveServiceName(sourceFile, sourceSheet)), errors, warnings };
  }

  const colCount = Math.max(
    stagesRow.length - 1,
    stepsRow.length - 1,
    subStepsRow.length - 1,
  );
  if (colCount < 1) {
    errors.push({ row: 0, field: 'columns', message: 'No data columns found after row labels' });
    return { state: emptyImportState(bpId, ts, deriveServiceName(sourceFile, sourceSheet)), errors, warnings };
  }

  const sliceCols = (row: string[]) => row.slice(1, 1 + colCount).map((c) => String(c ?? '').trim());
  const filledStages = fillMergedRow(sliceCols(stagesRow));
  const filledSteps = fillMergedRow(sliceCols(stepsRow));
  const subStepTitles = sliceCols(subStepsRow);
  const subSubTitles = subSubStepsRow ? sliceCols(subSubStepsRow) : Array(colCount).fill('');
  const actorTitles = actorsRow ? sliceCols(actorsRow) : Array(colCount).fill('');

  const stageMap = new Map<string, Stage>();
  const stepMap = new Map<string, Step>();
  const subSteps: SubStep[] = [];
  const colToSubStep = new Map<number, SubStep>();
  const cards: Card[] = [];

  let lastLeafColumnKey = '';
  let activeSubStep: SubStep | null = null;

  for (let colIdx = 0; colIdx < colCount; colIdx++) {
    const stageName = filledStages[colIdx] || `Stage ${colIdx + 1}`;
    const stepName = filledSteps[colIdx] || stageName;
    const subStepTitle = subStepTitles[colIdx]?.trim() || stepName;
    const leafColumnKey = `${stageName}::${stepName}::${subStepTitle}`;

    let stage = stageMap.get(stageName);
    if (!stage) {
      const { code: stCode, updatedCounters: tc } = generateTraceabilityCode('ST', traceCounters);
      traceCounters = tc;
      stage = {
        id: uuid(),
        blueprintId: bpId,
        title: stageName,
        outcome: '',
        order: stageMap.size,
        traceabilityCode: stCode,
      };
      stageMap.set(stageName, stage);
    }

    const stepKey = `${stageName}::${stepName}`;
    let step = stepMap.get(stepKey);
    if (!step) {
      const stepsInStage = Array.from(stepMap.values()).filter((s) => s.stageId === stage!.id);
      const { code: ssCode, updatedCounters: tc } = generateTraceabilityCode('SS', traceCounters);
      traceCounters = tc;
      step = {
        id: uuid(),
        blueprintId: bpId,
        stageId: stage.id,
        title: stepName,
        order: stepsInStage.length,
        traceabilityCode: ssCode,
      };
      stepMap.set(stepKey, step);
    }

    // Adjacent spreadsheet columns with the same sub-step title share one board column;
    // multiple sub-sub-steps (and other lane items) stack in that column.
    if (leafColumnKey !== lastLeafColumnKey || !activeSubStep) {
      const subStepsInStep = subSteps.filter((ss) => ss.stepId === step!.id);
      const { code: sbsCode, updatedCounters: tc2 } = generateTraceabilityCode('SBS', traceCounters);
      traceCounters = tc2;
      activeSubStep = {
        id: uuid(),
        blueprintId: bpId,
        stageId: stage.id,
        stepId: step.id,
        title: subStepTitle,
        order: subStepsInStep.length,
        traceabilityCode: sbsCode,
      };
      subSteps.push(activeSubStep);
      lastLeafColumnKey = leafColumnKey;
    }

    const subStep = activeSubStep;
    colToSubStep.set(colIdx, subStep);

    const pushCard = (laneKey: LaneKey, title: string, sourceRow: number) => {
      const trimmed = title.trim();
      if (!trimmed) return;
      const { ref, updatedCounters: sc } = generateSourceRef(srcType, srcCounters);
      srcCounters = sc;
      const { code, updatedCounters: tc } = generateTraceabilityCode(getLanePrefix(laneKey), traceCounters);
      traceCounters = tc;
      const order = cards.filter((c) => c.subStepId === subStep.id && c.laneKey === laneKey).length;
      cards.push({
        id: uuid(),
        blueprintId: bpId,
        stageId: stage!.id,
        stepId: step!.id,
        subStepId: subStep.id,
        laneKey,
        title: capitalizeSentenceStart(trimmed),
        body: '',
        order,
        tags: [],
        sourceFile,
        sourceSheet,
        sourceRow,
        sourceRef: ref,
        traceabilityCode: code,
        createdAt: ts,
        updatedAt: ts,
      });
    };

    pushCard('sub_sub_step', subSubTitles[colIdx] ?? '', 4);
    pushCard('actor', actorTitles[colIdx] ?? '', 5);
  }

  const stageDescRow = findMatrixRow(
    rawRows,
    'stage description',
    'stage_description',
  );
  const stepsDescRow = findMatrixRow(
    rawRows,
    'steps description',
    'steps_description',
  );
  const subStepsDescRow = findMatrixRow(
    rawRows,
    'sub steps description',
    'sub_steps description',
    'sub_steps_description',
  );

  if (stageDescRow) {
    const filled = fillMergedRow(sliceCols(stageDescRow));
    for (let colIdx = 0; colIdx < colCount; colIdx++) {
      const stage = stageMap.get(filledStages[colIdx]);
      const text = filled[colIdx]?.trim();
      if (stage && text) stage.description = text;
    }
  }

  if (stepsDescRow) {
    const filled = fillMergedRow(sliceCols(stepsDescRow));
    for (let colIdx = 0; colIdx < colCount; colIdx++) {
      const stepKey = `${filledStages[colIdx]}::${filledSteps[colIdx]}`;
      const step = stepMap.get(stepKey);
      const text = filled[colIdx]?.trim();
      if (step && text) step.description = text;
    }
  }

  if (subStepsDescRow) {
    const cells = sliceCols(subStepsDescRow);
    for (let colIdx = 0; colIdx < colCount; colIdx++) {
      const subStep = colToSubStep.get(colIdx);
      const text = cells[colIdx]?.trim();
      if (subStep && text && !subStep.description) subStep.description = text;
    }
  }

  const { journeys: userJourneys, skipRowIndices: journeySkipRows } = parseUserJourneysFromMatrix(
    rawRows,
    colCount,
    colToSubStep,
    sliceCols,
  );

  for (let rowIdx = 0; rowIdx < rawRows.length; rowIdx++) {
    if (journeySkipRows.has(rowIdx)) continue;
    const row = rawRows[rowIdx];
    const label = normalizeMatrixLabel(String(row[0] ?? ''));
    if (!label || STRUCTURAL_LABELS.has(label)) continue;

    const laneKey = resolveLaneKey(label);
    if (!laneKey) {
      warnings.push({
        row: rowIdx + 1,
        field: 'lane',
        message: `Unknown row label "${row[0]}" — skipped`,
      });
      continue;
    }
    if (laneKey === 'actor' || laneKey === 'sub_sub_step') continue;

    const cells = sliceCols(row);
    for (let colIdx = 0; colIdx < colCount; colIdx++) {
      const subStep = colToSubStep.get(colIdx);
      if (!subStep) continue;
      const cellValue = cells[colIdx] ?? '';
      const items = splitLaneCellItems(cellValue);
      for (const item of items) {
        const stage = stageMap.get(filledStages[colIdx])!;
        const stepKey = `${filledStages[colIdx]}::${filledSteps[colIdx]}`;
        const step = stepMap.get(stepKey)!;
        const parsed = parseCodedLaneItem(item);
        const title = capitalizeSentenceStart(parsed.text || item);
        const inlineCode = parsed.traceabilityCode;
        const { ref, updatedCounters: sc } = generateSourceRef(srcType, srcCounters);
        srcCounters = sc;
        let cardTraceCode = inlineCode;
        if (!cardTraceCode) {
          const { code, updatedCounters: tc } = generateTraceabilityCode(getLanePrefix(laneKey), traceCounters);
          traceCounters = tc;
          cardTraceCode = code;
        }
        const order = cards.filter((c) => c.subStepId === subStep.id && c.laneKey === laneKey).length;
        cards.push({
          id: uuid(),
          blueprintId: bpId,
          stageId: stage.id,
          stepId: step.id,
          subStepId: subStep.id,
          laneKey,
          title,
          body: '',
          order,
          tags: [],
          sourceFile,
          sourceSheet,
          sourceRow: rowIdx + 1,
          sourceRef: ref,
          traceabilityCode: cardTraceCode,
          createdAt: ts,
          updatedAt: ts,
        });
      }
    }
  }

  const stages = Array.from(stageMap.values()).sort((a, b) => a.order - b.order);
  const steps = Array.from(stepMap.values());

  const semanticKeys = new Set(Object.keys(traceCounters).filter((k) => !k.startsWith('SRC_')));
  const finalTraceCounters: Record<string, number> = {};
  for (const k of semanticKeys) finalTraceCounters[k] = traceCounters[k];

  const finalSrcCounters: Record<string, number> = {};
  for (const [k, v] of Object.entries(srcCounters)) {
    if (k.startsWith('SRC_')) finalSrcCounters[k] = v;
  }

  const state = emptyImportState(bpId, ts, deriveServiceName(sourceFile, sourceSheet));
  state.stages = stages;
  state.steps = steps;
  state.subSteps = subSteps;
  state.cards = cards;
  state.userJourneys = userJourneys;
  state.traceabilityCounters = finalTraceCounters;

  return {
    state,
    errors,
    warnings,
    srcRefCounters: finalSrcCounters,
    traceabilityCounters: finalTraceCounters,
  };
}

/**
 * Replaces stages, steps, sub-steps and lane cards from the CITES CSV while keeping
 * the current blueprint identity, storyboard images, and Jira pain point details.
 */
export function applyCitesBlueprintImport(
  current: BlueprintState,
  csvText: string,
  sourceFile = 'cites-service-blueprint.csv',
  sourceSheet?: string,
): BlueprintState {
  const raw = parseCitesBlueprintRaw(csvText);
  const { state: imported, errors } = normalizeCitesBlueprintMatrix(
    raw,
    sourceFile,
    sourceSheet ?? 'Sheet1',
  );
  if (errors.length > 0) {
    throw new Error(errors.map((e) => e.message).join('; '));
  }

  const previousStructure = {
    stages: current.stages,
    steps: current.steps,
    subSteps: current.subSteps,
  };
  const nextStructure = {
    stages: imported.stages,
    steps: imported.steps,
    subSteps: imported.subSteps,
  };
  const remapped = remapStoryboardImages(
    current.storyboardImages ?? [],
    previousStructure,
    nextStructure,
    current.blueprint.id,
  );
  const storyboardImages = relinkOrphanedStoryboardImages(
    { ...imported, storyboardImages: remapped, blueprint: current.blueprint },
    previousStructure,
  );

  return {
    ...imported,
    blueprint: {
      ...imported.blueprint,
      id: current.blueprint.id,
      serviceName:
        imported.blueprint.serviceName?.trim() ||
        current.blueprint.serviceName?.trim() ||
        'Enter title',
      description: current.blueprint.description,
      publishedShareId: current.blueprint.publishedShareId,
      createdAt: current.blueprint.createdAt,
    },
    activeBlueprintId: current.activeBlueprintId ?? current.blueprint.id,
    rootBlueprintId: current.rootBlueprintId ?? current.blueprint.id,
    rootDocument: current.rootDocument ?? null,
    childBlueprints: current.childBlueprints ?? [],
    storyboardImages,
    painPointRecords: { ...(current.painPointRecords ?? {}) },
    userStoryRecords: { ...(current.userStoryRecords ?? {}) },
    jiraIssueRecords: { ...(current.jiraIssueRecords ?? {}) },
    lanes: mergeLaneDefinitions(current.lanes ?? [], imported.lanes, imported.cards),
    traceabilityCounters: {
      ...(current.traceabilityCounters ?? {}),
      ...(imported.traceabilityCounters ?? {}),
    },
  };
}

/** True when adjacent sub-step headers were imported as separate columns (pre-merge import). */
export function needsCitesColumnMergeRepair(state: BlueprintState): boolean {
  const name = state.blueprint?.serviceName ?? '';
  if (!/ecites|cites/i.test(name)) return false;

  for (const step of state.steps) {
    const subs = (state.subSteps ?? [])
      .filter((ss) => ss.stepId === step.id)
      .sort((a, b) => a.order - b.order);
    for (let i = 1; i < subs.length; i++) {
      if (subs[i].title === subs[i - 1].title) return true;
    }
  }

  return false;
}

/** True when the board still has the old partial eCITES stub instead of the full CSV. */
export function needsCitesCsvRefresh(state: BlueprintState): boolean {
  const name = state.blueprint?.serviceName ?? '';
  if (!/ecites|cites/i.test(name)) return false;

  const subSteps = state.subSteps ?? [];
  if (subSteps.some((ss) => ss.title === 'Other related guidance')) return true;

  const prepare = state.stages.find((s) => s.title === 'Prepare');
  const hasSystemAccess =
    prepare &&
    state.steps.some((s) => s.stageId === prepare.id && s.title === 'System access');

  if (!hasSystemAccess) return true;
  if (subSteps.length < 100) return true;

  const hasFalconExport = (state.userJourneys ?? []).some(
    (journey) => journey.name.toLowerCase() === 'falcon export',
  );
  if (!hasFalconExport) return true;

  return false;
}

/** Reload structure and lane cards from the bundled CITES spreadsheet; keeps storyboard images. */
export function repairStaleCitesBlueprint(state: BlueprintState): BlueprintState {
  if (!needsCitesCsvRefresh(state) && !needsCitesColumnMergeRepair(state)) return state;
  return applyCitesBlueprintImport(state, CITES_BLUEPRINT_CSV, 'cites-service-blueprint.csv');
}

export function loadBundledCitesBlueprint(current: BlueprintState): BlueprintState {
  return applyCitesBlueprintImport(current, CITES_BLUEPRINT_CSV, 'cites-service-blueprint.csv');
}
