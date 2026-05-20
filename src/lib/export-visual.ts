import {
  DEFAULT_LANES,
  L1_MACRO_LANE_KEYS,
  L2_LANE_KEYS,
  L2_LANE_TITLE_OVERRIDES,
  L3_LANE_KEYS,
  L3_LANE_TITLE_OVERRIDES,
  getLaneTitle,
} from './lane-definitions';
import { getActiveBlueprintJourneyLevel } from './blueprint-levels';
import type { BlueprintState, Card, LaneDefinition, LaneKey, Stage, Step } from './types';

const LABEL_W = 190;
const COL_W = 220;
const PAD = 32;
const TITLE_H = 64;
const PHASE_H = 30;
const STAGE_H = 62;
const STEP_H = 42;
const STORYBOARD_ROW_H = 170;
const STORYBOARD_IMAGE_H = 132;
const MIN_ROW_H = 92;
const CELL_PAD = 10;
const CARD_GAP = 8;
const CARD_PAD = 9;
const LINE_H = 14;
const BODY_LINE_H = 12;

type RectCommand = {
  type: 'rect';
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
  rx?: number;
};

type TextCommand = {
  type: 'text';
  x: number;
  y: number;
  text: string;
  size: number;
  fill: string;
  weight?: 400 | 500 | 600 | 700;
  uppercase?: boolean;
};

type LineCommand = {
  type: 'line';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke: string;
  strokeWidth?: number;
};

type ImageCommand = {
  type: 'image';
  x: number;
  y: number;
  w: number;
  h: number;
  href: string;
};

type DrawCommand = RectCommand | TextCommand | LineCommand | ImageCommand;

type ExportLayout = {
  width: number;
  height: number;
  commands: DrawCommand[];
};

type Column = {
  stage: Stage;
  step: Step | null;
  index: number;
};

const LANE_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  actor: { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  user_action_event: { bg: '#f5f3ff', border: '#ddd6fe', text: '#6d28d9' },
  user_need: { bg: '#fffbeb', border: '#fde68a', text: '#b45309' },
  pain_point: { bg: '#fff1f2', border: '#fecdd3', text: '#be123c' },
  frontstage_touchpoint: { bg: '#ecfdf5', border: '#a7f3d0', text: '#047857' },
  activity: { bg: '#f8fafc', border: '#cbd5e1', text: '#334155' },
  backstage_process: { bg: '#f8fafc', border: '#cbd5e1', text: '#334155' },
  behaviour_change: { bg: '#fdf4ff', border: '#f5d0fe', text: '#a21caf' },
  success_measure: { bg: '#f7fee7', border: '#d9f99d', text: '#4d7c0f' },
  motivation: { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
  ability: { bg: '#f0f9ff', border: '#bae6fd', text: '#0369a1' },
  prompts: { bg: '#fefce8', border: '#fde68a', text: '#a16207' },
  system: { bg: '#ecfeff', border: '#a5f3fc', text: '#0e7490' },
  business_rule: { bg: '#f6efe3', border: '#e7d8b5', text: '#8a6a2f' },
  data_input: { bg: '#f0fdfa', border: '#99f6e4', text: '#0f766e' },
  data_output: { bg: '#faf5ff', border: '#e9d5ff', text: '#7e22ce' },
  backstage_actor: { bg: '#fafafa', border: '#d4d4d8', text: '#3f3f46' },
  shared_services: { bg: '#fdf2f8', border: '#fbcfe8', text: '#be185d' },
  opportunities: { bg: '#ecfdf5', border: '#a7f3d0', text: '#047857' },
  ideas: { bg: '#fefce8', border: '#fde68a', text: '#a16207' },
  policy_outcome: { bg: '#f5f3ff', border: '#ddd6fe', text: '#6d28d9' },
  user_outcome: { bg: '#fffbeb', border: '#fde68a', text: '#b45309' },
  operational_outcome: { bg: '#f8fafc', border: '#cbd5e1', text: '#334155' },
  insights: { bg: '#f0f9ff', border: '#bae6fd', text: '#0369a1' },
  impact_of_pain_points: { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
  performance_indicators: { bg: '#f0fdfa', border: '#99f6e4', text: '#0f766e' },
  opportunities_lane: { bg: '#ecfdf5', border: '#a7f3d0', text: '#047857' },
};

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'service-blueprint';
}

export function visualExportFilename(state: BlueprintState, ext: 'svg' | 'pdf'): string {
  return `${slug(state.blueprint.serviceName)}_blueprint.${ext}`;
}

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapText(value: string, maxChars: number, maxLines: number): string[] {
  const words = value.replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
  if (words.length === 0) return [];
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length <= maxChars) {
      line = next;
      continue;
    }
    if (line) lines.push(line);
    line = word;
    if (lines.length === maxLines) break;
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines && words.join(' ').length > lines.join(' ').length) {
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/\.*$/, '')}...`;
  }
  return lines;
}

function effectiveVisibleLanes(state: BlueprintState): LaneDefinition[] {
  const activeJourneyLevel = getActiveBlueprintJourneyLevel(state);
  const isChildView = Boolean(state.rootDocument && state.activeBlueprintId !== state.rootBlueprintId);
  const isL2Mode = isChildView && activeJourneyLevel === 'L2';
  const isL3Mode = isChildView && activeJourneyLevel === 'L3';

  if (isL3Mode) {
    return L3_LANE_KEYS
      .map((key) => state.lanes.find((lane) => lane.key === key) ?? DEFAULT_LANES.find((lane) => lane.key === key))
      .filter((lane): lane is LaneDefinition => Boolean(lane))
      .filter((lane) => lane.visible);
  }

  if (isL2Mode) {
    return L2_LANE_KEYS
      .map((key) => state.lanes.find((lane) => lane.key === key))
      .filter((lane): lane is LaneDefinition => Boolean(lane))
      .filter((lane) => lane.visible);
  }

  return [...state.lanes].filter((lane) => lane.visible).sort((a, b) => a.order - b.order);
}

function laneTitle(state: BlueprintState, lane: LaneDefinition): string {
  const activeJourneyLevel = getActiveBlueprintJourneyLevel(state);
  const isChildView = Boolean(state.rootDocument && state.activeBlueprintId !== state.rootBlueprintId);
  if (isChildView && activeJourneyLevel === 'L3') return L3_LANE_TITLE_OVERRIDES[lane.key] ?? getLaneTitle(lane.key);
  if (isChildView && activeJourneyLevel === 'L2') return L2_LANE_TITLE_OVERRIDES[lane.key] ?? getLaneTitle(lane.key);
  return getLaneTitle(lane.key);
}

function buildColumns(stages: Stage[], steps: Step[]): Column[] {
  const columns: Column[] = [];
  const sortedStages = [...stages].sort((a, b) => a.order - b.order);
  for (const stage of sortedStages) {
    const stageSteps = steps
      .filter((step) => step.stageId === stage.id)
      .sort((a, b) => a.order - b.order);
    if (stageSteps.length === 0) {
      columns.push({ stage, step: null, index: columns.length });
    } else {
      for (const step of stageSteps) {
        columns.push({ stage, step, index: columns.length });
      }
    }
  }
  return columns;
}

function getCardsForCell(cards: Card[], column: Column, laneKey: LaneKey): Card[] {
  return cards
    .filter((card) => {
      if (card.laneKey !== laneKey) return false;
      if (column.step) return card.stepId === column.step.id;
      return card.stageId === column.stage.id;
    })
    .sort((a, b) => a.order - b.order);
}

function cardHeight(card: Card): number {
  const maxChars = 28;
  const titleLines = wrapText(card.title, maxChars, 3).length || 1;
  const bodyLines = wrapText(card.body, maxChars, 2).length;
  return CARD_PAD * 2 + titleLines * LINE_H + (bodyLines ? 5 + bodyLines * BODY_LINE_H : 0);
}

function storyboardImagesForColumn(state: BlueprintState, column: Column) {
  if (!column.step) return [];
  return state.storyboardImages
    .filter((image) => image.stepId === column.step?.id)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

function dataUrlToBytes(dataUrl: string): { mediaType: string; bytes: Uint8Array } | null {
  const match = /^data:([^;,]+);base64,(.+)$/i.exec(dataUrl);
  if (!match) return null;
  const binary = atob(match[2]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return { mediaType: match[1].toLowerCase(), bytes };
}

function jpegSize(bytes: Uint8Array): { width: number; height: number } | null {
  let offset = 2;
  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) return null;
    const marker = bytes[offset + 1];
    const length = (bytes[offset + 2] << 8) + bytes[offset + 3];
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: (bytes[offset + 5] << 8) + bytes[offset + 6],
        width: (bytes[offset + 7] << 8) + bytes[offset + 8],
      };
    }
    offset += 2 + length;
  }
  return null;
}

function buildLayout(state: BlueprintState): ExportLayout {
  const columns = buildColumns(state.stages, state.steps);
  const lanes = effectiveVisibleLanes(state);
  const isL1MacroMode = state.lanes.some((lane) => L1_MACRO_LANE_KEYS.has(lane.key));
  const showPhaseRow = isL1MacroMode && state.stages.some((stage) => stage.phase?.trim());
  const showStepRow = columns.some((column) => column.step && column.step.title.trim() !== column.stage.title.trim());
  const boardW = LABEL_W + columns.length * COL_W;
  const commands: DrawCommand[] = [];
  let y = PAD;

  const addRect = (rect: Omit<RectCommand, 'type'>) => commands.push({ type: 'rect', ...rect });
  const addText = (text: Omit<TextCommand, 'type'>) => commands.push({ type: 'text', ...text });
  const addLine = (line: Omit<LineCommand, 'type'>) => commands.push({ type: 'line', ...line });

  addRect({ x: 0, y: 0, w: boardW + PAD * 2, h: 10, fill: '#fafafa' });
  addText({ x: PAD, y: y + 24, text: state.blueprint.serviceName, size: 22, fill: '#171717', weight: 700 });
  if (state.blueprint.description.trim()) {
    addText({ x: PAD, y: y + 46, text: state.blueprint.description, size: 11, fill: '#525252' });
  }
  y += TITLE_H;

  addRect({ x: PAD, y, w: boardW, h: showPhaseRow ? PHASE_H : 0, fill: '#fafafa' });
  if (showPhaseRow) {
    addRect({ x: PAD, y, w: LABEL_W, h: PHASE_H, fill: '#f5f5f5', stroke: '#e5e5e5' });
    addText({ x: PAD + 14, y: y + 19, text: 'Phase', size: 10, fill: '#737373', weight: 700, uppercase: true });
    for (const column of columns) {
      const x = PAD + LABEL_W + column.index * COL_W;
      const phase = column.stage.phase?.trim() || '';
      addRect({ x, y, w: COL_W, h: PHASE_H, fill: phase ? '#52525b' : '#fafafa', stroke: '#e5e5e5' });
      if (phase) addText({ x: x + 12, y: y + 19, text: phase, size: 10, fill: '#ffffff', weight: 700, uppercase: true });
    }
    y += PHASE_H;
  }

  addRect({ x: PAD, y, w: LABEL_W, h: STAGE_H, fill: '#ffffff', stroke: '#e5e5e5' });
  addText({ x: PAD + 14, y: y + 35, text: showStepRow ? 'Stages' : 'Steps', size: 10, fill: '#737373', weight: 700, uppercase: true });

  for (const stage of [...state.stages].sort((a, b) => a.order - b.order)) {
    const stageColumns = columns.filter((column) => column.stage.id === stage.id);
    if (stageColumns.length === 0) continue;
    const x = PAD + LABEL_W + stageColumns[0].index * COL_W;
    const w = stageColumns.length * COL_W;
    addRect({ x, y, w, h: STAGE_H, fill: '#ffffff', stroke: '#d4d4d4' });
    const lines = wrapText(stage.title, Math.max(16, Math.floor(w / 8)), 2);
    lines.forEach((line, idx) => addText({ x: x + 12, y: y + 24 + idx * 15, text: line, size: 12, fill: '#171717', weight: 700 }));
  }
  y += STAGE_H;

  if (showStepRow) {
    addRect({ x: PAD, y, w: LABEL_W, h: STEP_H, fill: '#ffffff', stroke: '#e5e5e5' });
    addText({ x: PAD + 14, y: y + 25, text: 'Steps', size: 10, fill: '#737373', weight: 700, uppercase: true });
    for (const column of columns) {
      const x = PAD + LABEL_W + column.index * COL_W;
      addRect({ x, y, w: COL_W, h: STEP_H, fill: '#ffffff', stroke: '#e5e5e5' });
      const label = column.step?.title ?? column.stage.title;
      addText({ x: x + 10, y: y + 25, text: wrapText(label, 28, 1)[0] ?? '', size: 11, fill: '#404040', weight: 600 });
    }
    y += STEP_H;
  }

  if (state.storyboardImages.length > 0) {
    const maxImages = Math.max(1, ...columns.map((column) => storyboardImagesForColumn(state, column).length));
    const imageH = STORYBOARD_IMAGE_H;
    const rowH = CELL_PAD * 2 + maxImages * imageH + Math.max(0, maxImages - 1) * CARD_GAP;
    addRect({ x: PAD, y, w: LABEL_W, h: rowH, fill: '#f5f5f5', stroke: '#d4d4d4' });
    addText({ x: PAD + 14, y: y + 26, text: 'Storyboard', size: 12, fill: '#525252', weight: 700 });

    for (const column of columns) {
      const x = PAD + LABEL_W + column.index * COL_W;
      addRect({ x, y, w: COL_W, h: rowH, fill: '#ffffff', stroke: '#e5e5e5' });
      let imageY = y + CELL_PAD;
      for (const image of storyboardImagesForColumn(state, column)) {
        addRect({
          x: x + CELL_PAD,
          y: imageY,
          w: COL_W - CELL_PAD * 2,
          h: imageH,
          fill: '#f5f5f5',
          stroke: '#d4d4d4',
          rx: 7,
        });
        commands.push({
          type: 'image',
          x: x + CELL_PAD + 4,
          y: imageY + 4,
          w: COL_W - CELL_PAD * 2 - 8,
          h: imageH - 8,
          href: image.dataUrl,
        });
        imageY += imageH + CARD_GAP;
      }
    }

    y += rowH;
  }

  for (const lane of lanes) {
    const rowHeights = columns.map((column) => {
      const cards = getCardsForCell(state.cards, column, lane.key);
      const cardsH = cards.reduce((sum, card) => sum + cardHeight(card), 0) + Math.max(0, cards.length - 1) * CARD_GAP;
      return Math.max(MIN_ROW_H, CELL_PAD * 2 + cardsH);
    });
    const rowH = Math.max(...rowHeights, MIN_ROW_H);
    const colors = LANE_COLORS[lane.key] ?? { bg: '#f5f5f5', border: '#d4d4d4', text: '#525252' };
    addRect({ x: PAD, y, w: LABEL_W, h: rowH, fill: colors.bg, stroke: colors.border });
    addText({ x: PAD + 14, y: y + 26, text: laneTitle(state, lane), size: 12, fill: colors.text, weight: 700 });

    for (const column of columns) {
      const x = PAD + LABEL_W + column.index * COL_W;
      addRect({ x, y, w: COL_W, h: rowH, fill: '#ffffff', stroke: '#e5e5e5' });
      let cardY = y + CELL_PAD;
      for (const card of getCardsForCell(state.cards, column, lane.key)) {
        const h = cardHeight(card);
        addRect({ x: x + CELL_PAD, y: cardY, w: COL_W - CELL_PAD * 2, h, fill: colors.bg, stroke: colors.border, rx: 7 });
        const titleLines = wrapText(card.title, 28, 3);
        titleLines.forEach((line, idx) => {
          addText({ x: x + CELL_PAD + CARD_PAD, y: cardY + CARD_PAD + 10 + idx * LINE_H, text: line, size: 10, fill: colors.text, weight: 700 });
        });
        const bodyLines = wrapText(card.body, 30, 2);
        bodyLines.forEach((line, idx) => {
          addText({
            x: x + CELL_PAD + CARD_PAD,
            y: cardY + CARD_PAD + 15 + titleLines.length * LINE_H + idx * BODY_LINE_H,
            text: line,
            size: 8.5,
            fill: '#525252',
            weight: 400,
          });
        });
        cardY += h + CARD_GAP;
      }
    }

    y += rowH;
  }

  const height = y + PAD;
  commands.unshift({ type: 'rect', x: 0, y: 0, w: boardW + PAD * 2, h: height, fill: '#fafafa' });
  addLine({ x1: PAD, y1: height - PAD + 1, x2: PAD + boardW, y2: height - PAD + 1, stroke: '#e5e5e5' });
  return { width: boardW + PAD * 2, height, commands };
}

export function exportBlueprintSvg(state: BlueprintState): string {
  const layout = buildLayout(state);
  const body = layout.commands.map((command) => {
    if (command.type === 'rect') {
      const stroke = command.stroke ? ` stroke="${command.stroke}" stroke-width="${command.strokeWidth ?? 1}"` : '';
      const rx = command.rx ? ` rx="${command.rx}"` : '';
      return `<rect x="${command.x}" y="${command.y}" width="${command.w}" height="${command.h}" fill="${command.fill}"${stroke}${rx}/>`;
    }
    if (command.type === 'line') {
      return `<line x1="${command.x1}" y1="${command.y1}" x2="${command.x2}" y2="${command.y2}" stroke="${command.stroke}" stroke-width="${command.strokeWidth ?? 1}"/>`;
    }
    if (command.type === 'image') {
      return `<image x="${command.x}" y="${command.y}" width="${command.w}" height="${command.h}" href="${xmlEscape(command.href)}" preserveAspectRatio="xMidYMid meet"/>`;
    }
    return `<text x="${command.x}" y="${command.y}" fill="${command.fill}" font-family="Roboto, Arial, sans-serif" font-size="${command.size}" font-weight="${command.weight ?? 400}"${command.uppercase ? ' text-transform="uppercase"' : ''}>${xmlEscape(command.uppercase ? command.text.toUpperCase() : command.text)}</text>`;
  }).join('\n');

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="${layout.width}" height="${layout.height}" viewBox="0 0 ${layout.width} ${layout.height}">`,
    body,
    `</svg>`,
  ].join('\n');
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  return [
    parseInt(clean.slice(0, 2), 16) / 255,
    parseInt(clean.slice(2, 4), 16) / 255,
    parseInt(clean.slice(4, 6), 16) / 255,
  ];
}

function pdfText(value: string): string {
  return value.replace(/[^\x20-\x7e]/g, '-').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function pdfNumber(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

type PdfImage = {
  name: string;
  width: number;
  height: number;
  bytes: Uint8Array;
};

function buildPdfStream(layout: ExportLayout): { stream: string; images: PdfImage[] } {
  const lines: string[] = [];
  const images: PdfImage[] = [];
  for (const command of layout.commands) {
    if (command.type === 'rect') {
      const [fr, fg, fb] = hexToRgb(command.fill);
      lines.push(`${fr.toFixed(3)} ${fg.toFixed(3)} ${fb.toFixed(3)} rg`);
      if (command.stroke) {
        const [sr, sg, sb] = hexToRgb(command.stroke);
        lines.push(`${sr.toFixed(3)} ${sg.toFixed(3)} ${sb.toFixed(3)} RG`);
        lines.push(`${command.strokeWidth ?? 1} w`);
      }
      lines.push(`${pdfNumber(command.x)} ${pdfNumber(layout.height - command.y - command.h)} ${pdfNumber(command.w)} ${pdfNumber(command.h)} re ${command.stroke ? 'B' : 'f'}`);
      continue;
    }
    if (command.type === 'line') {
      const [sr, sg, sb] = hexToRgb(command.stroke);
      lines.push(`${sr.toFixed(3)} ${sg.toFixed(3)} ${sb.toFixed(3)} RG`);
      lines.push(`${command.strokeWidth ?? 1} w`);
      lines.push(`${pdfNumber(command.x1)} ${pdfNumber(layout.height - command.y1)} m ${pdfNumber(command.x2)} ${pdfNumber(layout.height - command.y2)} l S`);
      continue;
    }
    if (command.type === 'image') {
      const image = dataUrlToBytes(command.href);
      if (!image || image.mediaType !== 'image/jpeg') continue;
      const size = jpegSize(image.bytes);
      if (!size) continue;
      const name = `Im${images.length + 1}`;
      images.push({ name, width: size.width, height: size.height, bytes: image.bytes });
      lines.push('q');
      lines.push(`${pdfNumber(command.w)} 0 0 ${pdfNumber(command.h)} ${pdfNumber(command.x)} ${pdfNumber(layout.height - command.y - command.h)} cm`);
      lines.push(`/${name} Do`);
      lines.push('Q');
      continue;
    }
    const [r, g, b] = hexToRgb(command.fill);
    const font = command.weight && command.weight >= 700 ? 'F2' : 'F1';
    const text = command.uppercase ? command.text.toUpperCase() : command.text;
    lines.push('BT');
    lines.push(`/${font} ${command.size} Tf`);
    lines.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`);
    lines.push(`${pdfNumber(command.x)} ${pdfNumber(layout.height - command.y)} Td`);
    lines.push(`(${pdfText(text)}) Tj`);
    lines.push('ET');
  }
  return { stream: lines.join('\n'), images };
}

function asciiBytes(value: string): Uint8Array {
  const bytes = new Uint8Array(value.length);
  for (let i = 0; i < value.length; i += 1) {
    bytes[i] = value.charCodeAt(i) & 0xff;
  }
  return bytes;
}

function concatBytes(parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((sum, part) => sum + part.byteLength, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const part of parts) {
    out.set(part, offset);
    offset += part.byteLength;
  }
  return out;
}

export function exportBlueprintPdf(state: BlueprintState): ArrayBuffer {
  const layout = buildLayout(state);
  const { stream, images } = buildPdfStream(layout);
  const xObjectResources = images.length
    ? ` /XObject << ${images.map((image, index) => `/${image.name} ${index + 7} 0 R`).join(' ')} >>`
    : '';
  const objects: Uint8Array[] = [
    asciiBytes('<< /Type /Catalog /Pages 2 0 R >>'),
    asciiBytes('<< /Type /Pages /Kids [3 0 R] /Count 1 >>'),
    asciiBytes(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pdfNumber(layout.width)} ${pdfNumber(layout.height)}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >>${xObjectResources} >> /Contents 6 0 R >>`),
    asciiBytes('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'),
    asciiBytes('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'),
    asciiBytes(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`),
    ...images.map((image) =>
      concatBytes([
        asciiBytes(`<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.bytes.byteLength} >>\nstream\n`),
        image.bytes,
        asciiBytes('\nendstream'),
      ]),
    ),
  ];

  const parts: Uint8Array[] = [asciiBytes('%PDF-1.4\n')];
  const offsets = [0];
  let byteOffset = parts[0].byteLength;
  objects.forEach((object, index) => {
    offsets.push(byteOffset);
    const prefix = asciiBytes(`${index + 1} 0 obj\n`);
    const suffix = asciiBytes('\nendobj\n');
    parts.push(prefix, object, suffix);
    byteOffset += prefix.byteLength + object.byteLength + suffix.byteLength;
  });

  const xrefOffset = byteOffset;
  let xref = `xref\n0 ${objects.length + 1}\n`;
  xref += '0000000000 65535 f \n';
  for (let i = 1; i < offsets.length; i += 1) {
    xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  parts.push(asciiBytes(xref));

  const bytes = concatBytes(parts);
  const out = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(out).set(bytes);
  return out;
}
