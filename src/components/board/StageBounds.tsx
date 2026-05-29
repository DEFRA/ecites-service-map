'use client';

import { cn } from '@/lib/utils';
import { BOARD_STEP_WIDTH } from '@/lib/board-layout';

const STEP_WIDTH = BOARD_STEP_WIDTH;

/** Standard 1px vertical rule between stage column groups. */
export const STAGE_BOUNDARY_CLASS = 'border-r border-neutral-200';

/** Right edge for a stage column group (spans one or more step columns). */
export function StageBounds({
  colCount,
  className,
  style,
  children,
  gridSpan = false,
}: {
  colCount: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  /** When true, parent is a CSS grid row — span leaf columns instead of fixed width. */
  gridSpan?: boolean;
}) {
  return (
    <div
      className={cn('box-border flex shrink-0 overflow-hidden', STAGE_BOUNDARY_CLASS, className)}
      style={{
        ...(gridSpan
          ? { gridColumn: `span ${colCount}`, width: '100%', minWidth: 0 }
          : { width: STEP_WIDTH * colCount }),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Faded divider between step columns within the same stage. */
export function stepDividerClass(stepIdx: number, stageStepCount: number) {
  return stepIdx < stageStepCount - 1 ? 'border-r border-neutral-100' : '';
}

/** Faded divider on leaf sub-step columns — between sub-steps and between steps. */
export function leafColumnBorderR(
  subStepIdx: number,
  subStepCount: number,
  stepIdx: number,
  stepCount: number,
) {
  if (subStepIdx < subStepCount - 1) return 'border-r border-neutral-100';
  if (stepIdx < stepCount - 1) return 'border-r border-neutral-100';
  return '';
}

export function stageColCount(stageStepCount: number) {
  return Math.max(stageStepCount, 1);
}
