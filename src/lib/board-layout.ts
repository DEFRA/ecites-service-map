import type { CSSProperties } from 'react';

/** Width of one step column (px). Kept in sync across Board and span rows. */
export const BOARD_STEP_WIDTH = 320;

/** Trailing column for add stage / step actions (px). */
export const BOARD_ADD_COLUMN_WIDTH = 120;

export function boardContentWidth(leafColumnCount: number, includeAddColumn: boolean): number {
  return leafColumnCount * BOARD_STEP_WIDTH + (includeAddColumn ? BOARD_ADD_COLUMN_WIDTH : 0);
}

/** Shared grid template so header and lane rows share exact column boundaries. */
export function boardColumnGridStyle(
  leafColumnCount: number,
  includeAddColumn: boolean,
): CSSProperties {
  const add = includeAddColumn ? ` ${BOARD_ADD_COLUMN_WIDTH}px` : '';
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${leafColumnCount}, ${BOARD_STEP_WIDTH}px)${add}`,
    width: boardContentWidth(leafColumnCount, includeAddColumn),
  };
}
