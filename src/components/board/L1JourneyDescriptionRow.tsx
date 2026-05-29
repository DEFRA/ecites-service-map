'use client';

import { type Stage, type Step, type SubStep } from '@/lib/types';
import {
  type L1BoardLayout,
  getStageStepColumnCount,
} from '@/lib/board-columns';
import { type StoryboardLevel } from '@/lib/storyboard-images';
import { BOARD_STEP_WIDTH, boardColumnGridStyle } from '@/lib/board-layout';
import { useBlueprintStore } from '@/store/blueprint-store';
import { StageBounds, stepDividerClass as innerStepBorderR, leafColumnBorderR } from './StageBounds';
import { JourneyDescriptionCell } from './JourneyDescriptionCell';
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

interface L1JourneyDescriptionRowProps {
  level: StoryboardLevel;
  layout: L1BoardLayout;
  stages: Stage[];
  steps: Step[];
  subSteps: SubStep[];
  /** One column per step (sub-steps hidden). */
  oneColumnPerStep?: boolean;
  /** One column per stage (steps and sub-steps hidden). */
  stageOnly?: boolean;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

export function L1JourneyDescriptionRow({
  level,
  layout,
  stages,
  steps,
  subSteps,
  oneColumnPerStep = false,
  stageOnly = false,
  leafColumnCount,
  includeAddColumn = true,
}: L1JourneyDescriptionRowProps) {
  const updateStage = useBlueprintStore((s) => s.updateStage);
  const updateStep = useBlueprintStore((s) => s.updateStep);
  const updateSubStep = useBlueprintStore((s) => s.updateSubStep);

  const stageById = new Map(stages.map((s) => [s.id, s]));
  const stepById = new Map(steps.map((s) => [s.id, s]));
  const subStepById = new Map(subSteps.map((s) => [s.id, s]));

  if (stageOnly || level === 'stage') {
    return (
      <div style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}>
        {layout.stages.map((stageGroup) => {
          const stage = stageById.get(stageGroup.stageId);
          if (!stage) return null;
          return (
            <StageBounds key={stage.id} colCount={1} gridSpan className="min-h-[52px] border-b border-neutral-200 bg-white">
              <div className="flex shrink-0 flex-col" style={{ width: STEP_WIDTH, minHeight: 52 }}>
                <JourneyDescriptionCell
                  description={stage.description}
                  onSave={(value) => updateStage(stage.id, { description: value })}
                />
              </div>
            </StageBounds>
          );
        })}
        {includeAddColumn && <BoardAddColumnSpacer className="border-b" />}
      </div>
    );
  }

  if (oneColumnPerStep || level === 'step') {
    return (
      <div style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}>
        {layout.stages.map((stageGroup) => (
          <StageBounds
            key={stageGroup.stageId}
            colCount={getStageStepColumnCount(stageGroup)}
            gridSpan
            className="min-h-[52px] border-b border-neutral-200 bg-white"
          >
            {stageGroup.steps.length === 0 ? (
              <div className="w-full min-h-[52px] p-1" />
            ) : (
              stageGroup.steps.map((stepGroup, stepIdx) => {
                const step = stepById.get(stepGroup.stepId);
                if (!step) return null;
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('flex shrink-0 flex-col', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH, minHeight: 52 }}
                  >
                    <JourneyDescriptionCell
                      description={step.description}
                      onSave={(value) => updateStep(step.id, { description: value })}
                    />
                  </div>
                );
              })
            )}
          </StageBounds>
        ))}
        {includeAddColumn && <BoardAddColumnSpacer className="border-b" />}
      </div>
    );
  }

  return (
    <div style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}>
      {layout.stages.map((stageGroup) => (
        <StageBounds key={stageGroup.stageId} colCount={stageGroup.span} gridSpan className="min-h-[52px] border-b border-neutral-200 bg-white">
          {stageGroup.steps.length === 0 ? (
            <div className="w-full min-h-[52px] p-1" />
          ) : (
            stageGroup.steps.map((stepGroup, stepIdx) => {
              if (stepGroup.subSteps.length === 0) {
                const step = stepById.get(stepGroup.stepId);
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('shrink-0 p-1', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH * stepGroup.span, minHeight: 52 }}
                  >
                    {step && (
                      <JourneyDescriptionCell
                        description={step.description}
                        onSave={(value) => updateStep(step.id, { description: value })}
                      />
                    )}
                  </div>
                );
              }

              return stepGroup.subSteps.map((subStepRef, subStepIdx) => {
                const subStep = subStepById.get(subStepRef.id);
                if (!subStep) return null;
                return (
                  <div
                    key={subStepRef.id}
                    className={cn(
                      'flex shrink-0 flex-col',
                      innerSubStepBorderR(subStepIdx, stepGroup.subSteps.length, stepIdx, stageGroup.steps.length),
                    )}
                    style={{ width: STEP_WIDTH, minHeight: 52 }}
                  >
                    <JourneyDescriptionCell
                      description={subStep.description}
                      onSave={(value) => updateSubStep(subStep.id, { description: value })}
                    />
                  </div>
                );
              });
            })
          )}
        </StageBounds>
      ))}
      {includeAddColumn && <BoardAddColumnSpacer className="border-b" />}
    </div>
  );
}
