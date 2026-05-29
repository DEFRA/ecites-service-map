'use client';

import type { UserJourney } from '@/lib/types';
import { type L1BoardLayout } from '@/lib/board-columns';
import { BOARD_STEP_WIDTH, boardColumnGridStyle } from '@/lib/board-layout';
import { userJourneyColumnContent } from '@/lib/user-journey';
import { StageBounds, stepDividerClass as innerStepBorderR, leafColumnBorderR } from './StageBounds';
import { JourneyStoryCell } from './JourneyStoryCell';
import { BoardAddColumnSpacer } from './BoardAddColumnSpacer';
import { cn } from '@/lib/utils';

const STEP_WIDTH = BOARD_STEP_WIDTH;

function innerSubStepBorderR(
  subStepIdx: number,
  subStepCount: number,
  stepIdx: number,
  stepCount: number,
) {
  return leafColumnBorderR(subStepIdx, subStepCount, stepIdx, stepCount);
}

interface L1UserJourneyRowProps {
  journey: UserJourney;
  layout: L1BoardLayout;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

export function L1UserJourneyRow({
  journey,
  layout,
  leafColumnCount,
  includeAddColumn = true,
}: L1UserJourneyRowProps) {
  return (
    <div style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}>
      {layout.stages.map((stageGroup) => (
        <StageBounds
          key={stageGroup.stageId}
          colCount={stageGroup.span}
          gridSpan
          className="min-h-[52px] border-b border-neutral-200 bg-white"
        >
          {stageGroup.steps.length === 0 ? (
            <div className="w-full min-h-[52px] p-1" />
          ) : (
            stageGroup.steps.map((stepGroup, stepIdx) => {
              if (stepGroup.subSteps.length === 0) {
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('shrink-0 p-1', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH * stepGroup.span, minHeight: 52 }}
                  />
                );
              }

              return stepGroup.subSteps.map((subStepRef, subStepIdx) => (
                <div
                  key={subStepRef.id}
                  className={cn(
                    'flex shrink-0 flex-col',
                    innerSubStepBorderR(
                      subStepIdx,
                      stepGroup.subSteps.length,
                      stepIdx,
                      stageGroup.steps.length,
                    ),
                  )}
                  style={{ width: STEP_WIDTH, minHeight: 52 }}
                >
                  <JourneyStoryCell content={userJourneyColumnContent(journey, subStepRef.id)} />
                </div>
              ));
            })
          )}
        </StageBounds>
      ))}
      {includeAddColumn && <BoardAddColumnSpacer className="border-b" />}
    </div>
  );
}
