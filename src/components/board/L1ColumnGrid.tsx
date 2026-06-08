'use client';

import { type ReactNode } from 'react';
import { ImagePlus } from 'lucide-react';
import { type Card, type LaneKey, type Stage, type Step, type SubStep, type StoryboardImage } from '@/lib/types';
import { type L1BoardLayout, type StageColumnGroup, getDefaultLeafTarget, getDefaultSubStepForStep, getStageStepColumnCount } from '@/lib/board-columns';
import { type StoryboardLevel } from '@/lib/storyboard-images';
import { BOARD_STEP_WIDTH, boardColumnGridStyle } from '@/lib/board-layout';
import { cn } from '@/lib/utils';
import { CellArea } from './CellArea';
import { StepHeader } from './StepHeader';
import { SubStepHeader } from './SubStepHeader';
import { StoryboardCell, StoryboardCompactCell } from './StoryboardCell';
import { StageBounds, stepDividerClass as innerStepBorderR, leafColumnBorderR } from './StageBounds';
import { BoardAddColumnSpacer } from './BoardAddColumnSpacer';

const STEP_WIDTH = BOARD_STEP_WIDTH;
const COLLAPSED_LANE_H = 56;
const STORYBOARD_ROW_H = 180;
const STORYBOARD_COMPACT_ROW_H = 88;

function innerSubStepBorderR(
  subStepIdx: number,
  subStepCount: number,
  stepIdx: number,
  stepCount: number,
) {
  return leafColumnBorderR(subStepIdx, subStepCount, stepIdx, stepCount);
}

interface L1StepHeaderRowProps {
  layout: L1BoardLayout;
  steps: Step[];
  /** One column per step (sub-steps hidden) instead of one column per sub-step. */
  oneColumnPerStep?: boolean;
  rowHeight?: number;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

export function L1StepHeaderRow({
  layout,
  steps,
  oneColumnPerStep = false,
  rowHeight,
  leafColumnCount,
  includeAddColumn = true,
}: L1StepHeaderRowProps) {
  const stepById = new Map(steps.map((step) => [step.id, step]));
  const headerHeight = rowHeight ?? 44;

  return (
    <div
      className="h-full border-b border-neutral-200 bg-white"
      style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}
    >
      {layout.stages.map((stageGroup) => (
        <StageBounds
          key={stageGroup.stageId}
          colCount={oneColumnPerStep ? getStageStepColumnCount(stageGroup) : stageGroup.span}
          gridSpan
          className="h-full bg-white"
        >
          {stageGroup.steps.length === 0 ? (
            <div className="h-full w-full" />
          ) : (
            stageGroup.steps.map((stepGroup, stepIdx) => {
              const step = stepById.get(stepGroup.stepId);
              if (!step) return null;
              const stepWidth = oneColumnPerStep ? STEP_WIDTH : STEP_WIDTH * stepGroup.span;
              return (
                <div
                  key={stepGroup.stepId}
                  className={cn('flex h-full shrink-0 items-stretch overflow-hidden bg-white', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                  style={{ width: stepWidth, height: headerHeight }}
                >
                  <StepHeader
                    step={step}
                    stepWidth={stepWidth}
                    canMoveLeft={stepIdx > 0}
                    canMoveRight={stepIdx < stageGroup.steps.length - 1}
                  />
                </div>
              );
            })
          )}
        </StageBounds>
      ))}
      {includeAddColumn && <BoardAddColumnSpacer />}
    </div>
  );
}

interface L1SubStepHeaderRowProps {
  layout: L1BoardLayout;
  rowHeight?: number;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

export function L1SubStepHeaderRow({
  layout,
  rowHeight,
  leafColumnCount,
  includeAddColumn = true,
}: L1SubStepHeaderRowProps) {
  const headerHeight = rowHeight ?? 44;

  return (
    <div
      className="h-full border-b border-neutral-200 bg-white"
      style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}
    >
      {layout.stages.map((stageGroup) => (
        <StageBounds key={stageGroup.stageId} colCount={stageGroup.span} gridSpan className="h-full bg-white">
          {stageGroup.steps.length === 0 ? (
            <div className="h-full w-full" />
          ) : (
            stageGroup.steps.map((stepGroup, stepIdx) => {
              if (stepGroup.subSteps.length === 0) {
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('h-full shrink-0 overflow-hidden bg-white', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH * stepGroup.span, height: headerHeight }}
                  />
                );
              }

              return stepGroup.subSteps.map((subStep, subStepIdx) => (
                <div
                  key={subStep.id}
                  className={cn(
                    'flex h-full shrink-0 items-stretch overflow-hidden bg-white',
                    innerSubStepBorderR(subStepIdx, stepGroup.subSteps.length, stepIdx, stageGroup.steps.length),
                  )}
                  style={{ width: STEP_WIDTH, height: headerHeight }}
                >
                  <SubStepHeader
                    subStep={subStep}
                    stepWidth={STEP_WIDTH}
                    canMoveLeft={subStepIdx > 0}
                    canMoveRight={subStepIdx < stepGroup.subSteps.length - 1}
                  />
                </div>
              ));
            })
          )}
        </StageBounds>
      ))}
      {includeAddColumn && <BoardAddColumnSpacer />}
    </div>
  );
}

interface L1SubSubStepRowProps {
  layout: L1BoardLayout;
  rowHeight?: number;
  leafColumnCount: number;
  includeAddColumn?: boolean;
  getCardsForSubStepCell: (subStepId: string, laneKey: LaneKey) => Card[];
}

export function L1SubSubStepRow({
  layout,
  rowHeight,
  leafColumnCount,
  includeAddColumn = true,
  getCardsForSubStepCell,
}: L1SubSubStepRowProps) {
  const headerHeight = rowHeight ?? 44;

  return (
    <div
      className="h-full border-b border-neutral-200 bg-white"
      style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}
    >
      {layout.stages.map((stageGroup) => (
        <StageBounds key={stageGroup.stageId} colCount={stageGroup.span} gridSpan className="h-full bg-white">
          {stageGroup.steps.length === 0 ? (
            <div className="h-full w-full bg-white" />
          ) : (
            stageGroup.steps.map((stepGroup, stepIdx) => {
              if (stepGroup.subSteps.length === 0) {
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('h-full shrink-0 bg-white', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH * stepGroup.span, height: headerHeight }}
                  />
                );
              }

              return stepGroup.subSteps.map((subStep, subStepIdx) => {
                const cards = getCardsForSubStepCell(subStep.id, 'sub_sub_step');
                const label = cards
                  .map((card) => card.title.trim())
                  .filter(Boolean)
                  .join(' · ');

                return (
                  <div
                    key={subStep.id}
                    className={cn(
                      'flex h-full shrink-0 items-stretch overflow-hidden bg-white',
                      innerSubStepBorderR(subStepIdx, stepGroup.subSteps.length, stepIdx, stageGroup.steps.length),
                    )}
                    style={{ width: STEP_WIDTH, height: headerHeight }}
                  >
                    <div
                      className="flex h-full min-h-0 min-w-0 max-w-full w-full items-start overflow-hidden bg-white px-1.5 py-1"
                      style={{ width: STEP_WIDTH }}
                    >
                      {label ? (
                        <p className="min-w-0 flex-1 break-words text-left text-[11px] font-medium italic leading-snug text-neutral-700">
                          {label}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              });
            })
          )}
        </StageBounds>
      ))}
      {includeAddColumn && <BoardAddColumnSpacer />}
    </div>
  );
}

interface L1LaneRowProps {
  layout: L1BoardLayout;
  laneKey: LaneKey;
  collapsed: boolean;
  getCardsForSubStepCell: (subStepId: string, laneKey: LaneKey) => Card[];
  getHiddenActorCountForSubStepCell?: (subStepId: string, laneKey: LaneKey) => number;
  /** One column per step (sub-steps hidden) instead of one column per sub-step. */
  oneColumnPerStep?: boolean;
  subSteps?: SubStep[];
  getCardsForStepCell?: (stepId: string, laneKey: LaneKey) => Card[];
  getHiddenActorCountForStepCell?: (stepId: string, laneKey: LaneKey) => number;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

function L1LaneRowGrid({
  leafColumnCount,
  includeAddColumn = true,
  children,
}: {
  leafColumnCount: number;
  includeAddColumn?: boolean;
  children: ReactNode;
}) {
  return (
    <div style={boardColumnGridStyle(leafColumnCount, includeAddColumn)}>
      {children}
      {includeAddColumn && <BoardAddColumnSpacer />}
    </div>
  );
}

export function L1LaneRow({
  layout,
  laneKey,
  collapsed,
  getCardsForSubStepCell,
  getHiddenActorCountForSubStepCell,
  oneColumnPerStep = false,
  subSteps = [],
  getCardsForStepCell,
  getHiddenActorCountForStepCell,
  leafColumnCount,
  includeAddColumn = true,
}: L1LaneRowProps) {
  if (oneColumnPerStep && getCardsForStepCell) {
    if (collapsed) {
      return (
        <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
          {layout.stages.map((stageGroup) => (
            <StageBounds
              key={stageGroup.stageId}
              colCount={getStageStepColumnCount(stageGroup)}
              gridSpan
              style={{ height: COLLAPSED_LANE_H }}
            >
              {stageGroup.steps.length === 0 ? (
                <div className="w-full" />
              ) : (
                stageGroup.steps.map((stepGroup, stepIdx) => {
                  const hiddenCards = getCardsForStepCell(stepGroup.stepId, laneKey).length;
                  return (
                    <div
                      key={stepGroup.stepId}
                      className={cn('flex shrink-0 items-center px-4', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                      style={{ width: STEP_WIDTH, height: COLLAPSED_LANE_H }}
                    >
                      {hiddenCards > 0 ? (
                        <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-500">
                          {hiddenCards} hidden
                        </span>
                      ) : (
                        <span className="text-[11px] text-neutral-300">&nbsp;</span>
                      )}
                    </div>
                  );
                })
              )}
            </StageBounds>
          ))}
        </L1LaneRowGrid>
      );
    }

    return (
      <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
        {layout.stages.map((stageGroup) => (
          <StageBounds key={stageGroup.stageId} colCount={getStageStepColumnCount(stageGroup)} gridSpan className="min-h-[88px]">
            {stageGroup.steps.length === 0 ? (
              <div className="w-full min-h-[88px] p-1" />
            ) : (
              stageGroup.steps.map((stepGroup, stepIdx) => {
                const defaultSubStepId = getDefaultSubStepForStep(stepGroup.stepId, subSteps);
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('flex shrink-0 flex-col p-1', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH, minHeight: 88 }}
                  >
                    <CellArea
                      stepId={stepGroup.stepId}
                      subStepId={defaultSubStepId}
                      laneKey={laneKey}
                      cards={getCardsForStepCell(stepGroup.stepId, laneKey)}
                      hiddenActorCount={getHiddenActorCountForStepCell?.(stepGroup.stepId, laneKey) ?? 0}
                    />
                  </div>
                );
              })
            )}
          </StageBounds>
        ))}
      </L1LaneRowGrid>
    );
  }

  if (collapsed) {
    return (
      <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
        {layout.stages.map((stageGroup) => (
          <StageBounds
            key={stageGroup.stageId}
            colCount={stageGroup.span}
            gridSpan
            style={{ height: COLLAPSED_LANE_H }}
          >
            {stageGroup.steps.length === 0 ? (
              <div className="w-full" />
            ) : (
              stageGroup.steps.map((stepGroup, stepIdx) => {
                if (stepGroup.subSteps.length === 0) {
                  return (
                    <div
                      key={stepGroup.stepId}
                      className={cn('shrink-0', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                      style={{ width: STEP_WIDTH * stepGroup.span, height: COLLAPSED_LANE_H }}
                    />
                  );
                }

                return stepGroup.subSteps.map((subStep, subStepIdx) => {
                  const hiddenCards = getCardsForSubStepCell(subStep.id, laneKey).length;
                  return (
                    <div
                      key={subStep.id}
                      className={cn(
                        'flex shrink-0 items-center px-4',
                        innerSubStepBorderR(subStepIdx, stepGroup.subSteps.length, stepIdx, stageGroup.steps.length),
                      )}
                      style={{ width: STEP_WIDTH, height: COLLAPSED_LANE_H }}
                    >
                      {hiddenCards > 0 ? (
                        <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-500">
                          {hiddenCards} hidden
                        </span>
                      ) : (
                        <span className="text-[11px] text-neutral-300">&nbsp;</span>
                      )}
                    </div>
                  );
                });
              })
            )}
          </StageBounds>
        ))}
      </L1LaneRowGrid>
    );
  }

  return (
    <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
      {layout.stages.map((stageGroup) => (
        <StageBounds key={stageGroup.stageId} colCount={stageGroup.span} gridSpan className="min-h-[88px]">
          {stageGroup.steps.length === 0 ? (
            <div className="w-full min-h-[88px] p-1" />
          ) : (
            stageGroup.steps.map((stepGroup, stepIdx) => {
              if (stepGroup.subSteps.length === 0) {
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('shrink-0 p-1', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH * stepGroup.span, minHeight: 88 }}
                  />
                );
              }

              return stepGroup.subSteps.map((subStep, subStepIdx) => (
                <div
                  key={subStep.id}
                  className={cn(
                    'flex shrink-0 flex-col p-1',
                    innerSubStepBorderR(subStepIdx, stepGroup.subSteps.length, stepIdx, stageGroup.steps.length),
                  )}
                  style={{ width: STEP_WIDTH, minHeight: 88 }}
                >
                  <CellArea
                    subStepId={subStep.id}
                    laneKey={laneKey}
                    cards={getCardsForSubStepCell(subStep.id, laneKey)}
                    hiddenActorCount={getHiddenActorCountForSubStepCell?.(subStep.id, laneKey) ?? 0}
                  />
                </div>
              ));
            })
          )}
        </StageBounds>
      ))}
    </L1LaneRowGrid>
  );
}

interface L1StoryboardRowProps {
  layout: L1BoardLayout;
  level: StoryboardLevel;
  collapsed?: boolean;
  stages: Stage[];
  steps: Step[];
  subSteps: SubStep[];
  storyboardImagesByStep: Map<string, StoryboardImage[]>;
  storyboardImagesBySubStep: Map<string, StoryboardImage[]>;
  onUploadStageId: (stageId: string) => void;
  onAddImageAtStep: (stepId: string, dataUrl: string) => void;
  onAddImageAtSubStep: (subStepId: string, dataUrl: string) => void;
  onUpdateImage: (id: string, dataUrl: string) => void;
  onRemoveImage: (id: string) => void;
  /** One column per step (sub-steps hidden) instead of spanning sub-step columns. */
  oneColumnPerStep?: boolean;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

export function L1StoryboardRow({
  layout,
  level,
  collapsed = false,
  stages,
  steps,
  subSteps,
  storyboardImagesByStep,
  storyboardImagesBySubStep,
  onUploadStageId,
  onAddImageAtStep,
  onAddImageAtSubStep,
  onUpdateImage,
  onRemoveImage,
  oneColumnPerStep = false,
  leafColumnCount,
  includeAddColumn = true,
}: L1StoryboardRowProps) {
  const stepById = new Map(steps.map((s) => [s.id, s]));
  const subStepById = new Map(subSteps.map((s) => [s.id, s]));

  if (collapsed) {
    return (
      <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
        {layout.stages.map((stageGroup) => (
          <StageBounds
            key={stageGroup.stageId}
            colCount={level === 'subStep' ? stageGroup.span : getStageStepColumnCount(stageGroup)}
            gridSpan
            className="bg-white"
            style={{ minHeight: STORYBOARD_COMPACT_ROW_H }}
          >
            {stageGroup.steps.length === 0 ? (
              <div className="w-full" style={{ minHeight: STORYBOARD_COMPACT_ROW_H }} />
            ) : level === 'subStep' ? (
              stageGroup.steps.flatMap((stepGroup, stepIdx) => {
                if (stepGroup.subSteps.length === 0) {
                  const step = stepById.get(stepGroup.stepId);
                  return (
                    <div
                      key={stepGroup.stepId}
                      className={cn('shrink-0', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                      style={{ width: STEP_WIDTH, minHeight: STORYBOARD_COMPACT_ROW_H }}
                    >
                      <StoryboardCompactCell
                        images={storyboardImagesByStep.get(stepGroup.stepId) ?? []}
                        description={step?.description}
                      />
                    </div>
                  );
                }

                return stepGroup.subSteps.map((subStepRef, subStepIdx) => {
                  const subStep = subStepById.get(subStepRef.id);
                  return (
                    <div
                      key={subStepRef.id}
                      className={cn(
                        'shrink-0',
                        innerSubStepBorderR(subStepIdx, stepGroup.subSteps.length, stepIdx, stageGroup.steps.length),
                      )}
                      style={{ width: STEP_WIDTH, minHeight: STORYBOARD_COMPACT_ROW_H }}
                    >
                      <StoryboardCompactCell
                        images={storyboardImagesBySubStep.get(subStepRef.id) ?? []}
                        description={subStep?.description}
                      />
                    </div>
                  );
                });
              })
            ) : (
              stageGroup.steps.map((stepGroup, stepIdx) => {
                const step = stepById.get(stepGroup.stepId);
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('shrink-0', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{
                      width: oneColumnPerStep ? STEP_WIDTH : STEP_WIDTH * stepGroup.span,
                      minHeight: STORYBOARD_COMPACT_ROW_H,
                    }}
                  >
                    <StoryboardCompactCell
                      images={storyboardImagesByStep.get(stepGroup.stepId) ?? []}
                      description={step?.description}
                    />
                  </div>
                );
              })
            )}
          </StageBounds>
        ))}
      </L1LaneRowGrid>
    );
  }

  return (
    <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
      {layout.stages.map((stageGroup) => (
        <StageBounds
          key={stageGroup.stageId}
          colCount={level === 'subStep' ? stageGroup.span : getStageStepColumnCount(stageGroup)}
          gridSpan
          className="min-h-[180px]"
        >
          {stageGroup.steps.length === 0 ? (
            <div className="flex w-full items-start p-2" style={{ minHeight: STORYBOARD_ROW_H }}>
              <button
                type="button"
                onClick={() => onUploadStageId(stageGroup.stageId)}
                className="flex min-h-24 w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-200 bg-white/60 p-2 text-center transition-colors hover:border-neutral-300 hover:bg-white"
              >
                <ImagePlus className="h-5 w-5 text-neutral-400" />
                <span className="text-[11px] font-medium text-neutral-600">Add image / screen</span>
              </button>
            </div>
          ) : level === 'subStep' ? (
            stageGroup.steps.flatMap((stepGroup, stepIdx) => {
              if (stepGroup.subSteps.length === 0) {
                return (
                  <div
                    key={stepGroup.stepId}
                    className={cn('shrink-0', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                    style={{ width: STEP_WIDTH, minHeight: STORYBOARD_ROW_H }}
                  />
                );
              }

              return stepGroup.subSteps.map((subStep, subStepIdx) => (
                <div
                  key={subStep.id}
                  className={cn(
                    'shrink-0',
                    innerSubStepBorderR(subStepIdx, stepGroup.subSteps.length, stepIdx, stageGroup.steps.length),
                  )}
                  style={{ width: STEP_WIDTH, minHeight: STORYBOARD_ROW_H }}
                >
                  <StoryboardCell
                    microPageOnly={false}
                    allowMultipleImages={false}
                    images={storyboardImagesBySubStep.get(subStep.id) ?? []}
                    onAddImage={(dataUrl) => onAddImageAtSubStep(subStep.id, dataUrl)}
                    onUpdateImage={onUpdateImage}
                    onRemoveImage={onRemoveImage}
                  />
                </div>
              ));
            })
          ) : (
            stageGroup.steps.map((stepGroup, stepIdx) => (
              <div
                key={stepGroup.stepId}
                className={cn('shrink-0', innerStepBorderR(stepIdx, stageGroup.steps.length))}
                style={{
                  width: oneColumnPerStep ? STEP_WIDTH : STEP_WIDTH * stepGroup.span,
                  minHeight: STORYBOARD_ROW_H,
                }}
              >
                <StoryboardCell
                  stepId={stepGroup.stepId}
                  microPageOnly={false}
                  allowMultipleImages={false}
                  images={storyboardImagesByStep.get(stepGroup.stepId) ?? []}
                  onAddImage={(dataUrl) => onAddImageAtStep(stepGroup.stepId, dataUrl)}
                  onUpdateImage={onUpdateImage}
                  onRemoveImage={onRemoveImage}
                />
              </div>
            ))
          )}
        </StageBounds>
      ))}
    </L1LaneRowGrid>
  );
}

interface L1StageOnlyStoryboardRowProps {
  stages: Stage[];
  collapsed?: boolean;
  getStoryboardImagesForStage: (stageId: string) => StoryboardImage[];
  onAddImageAtStage: (stageId: string, dataUrl: string) => void;
  onUpdateImage: (id: string, dataUrl: string) => void;
  onRemoveImage: (id: string) => void;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

export function L1StageOnlyStoryboardRow({
  stages,
  collapsed = false,
  getStoryboardImagesForStage,
  onAddImageAtStage,
  onUpdateImage,
  onRemoveImage,
  leafColumnCount,
  includeAddColumn = true,
}: L1StageOnlyStoryboardRowProps) {
  if (collapsed) {
    return (
      <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
        {stages.map((stage) => (
          <StageBounds
            key={stage.id}
            colCount={1}
            gridSpan
            className="bg-white"
            style={{ minHeight: STORYBOARD_COMPACT_ROW_H }}
          >
            <div className="shrink-0" style={{ width: STEP_WIDTH, minHeight: STORYBOARD_COMPACT_ROW_H }}>
              <StoryboardCompactCell
                images={getStoryboardImagesForStage(stage.id)}
                description={stage.description}
              />
            </div>
          </StageBounds>
        ))}
      </L1LaneRowGrid>
    );
  }

  return (
    <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
      {stages.map((stage) => (
        <StageBounds key={stage.id} colCount={1} gridSpan className="min-h-[180px]">
          <div className="shrink-0" style={{ width: STEP_WIDTH, minHeight: STORYBOARD_ROW_H }}>
            <StoryboardCell
              microPageOnly={false}
              allowMultipleImages={false}
              images={getStoryboardImagesForStage(stage.id)}
              onAddImage={(dataUrl) => onAddImageAtStage(stage.id, dataUrl)}
              onUpdateImage={onUpdateImage}
              onRemoveImage={onRemoveImage}
            />
          </div>
        </StageBounds>
      ))}
    </L1LaneRowGrid>
  );
}

interface L1StageOnlyLaneRowProps {
  stages: Stage[];
  steps: Step[];
  subSteps: SubStep[];
  laneKey: LaneKey;
  collapsed: boolean;
  getCardsForStageCell: (stageId: string, laneKey: LaneKey) => Card[];
  getHiddenActorCountForStageCell?: (stageId: string, laneKey: LaneKey) => number;
  leafColumnCount: number;
  includeAddColumn?: boolean;
}

export function L1StageOnlyLaneRow({
  stages,
  steps,
  subSteps,
  laneKey,
  collapsed,
  getCardsForStageCell,
  getHiddenActorCountForStageCell,
  leafColumnCount,
  includeAddColumn = true,
}: L1StageOnlyLaneRowProps) {
  return (
    <L1LaneRowGrid leafColumnCount={leafColumnCount} includeAddColumn={includeAddColumn}>
      {stages.map((stage) => {
        const stageCards = getCardsForStageCell(stage.id, laneKey);
        const target = getDefaultLeafTarget(stage.id, steps, subSteps);

        if (collapsed) {
          return (
            <StageBounds
              key={stage.id}
              colCount={1}
              gridSpan
              className="bg-white"
              style={{ height: COLLAPSED_LANE_H }}
            >
              <div
                className="flex shrink-0 items-center px-4"
                style={{ width: STEP_WIDTH, height: COLLAPSED_LANE_H }}
              >
                {stageCards.length > 0 ? (
                  <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-500">
                    {stageCards.length} hidden
                  </span>
                ) : (
                  <span className="text-[11px] text-neutral-300"> </span>
                )}
              </div>
            </StageBounds>
          );
        }

        return (
          <StageBounds key={stage.id} colCount={1} gridSpan className="min-h-[88px] bg-white">
            <div className="flex shrink-0 flex-col p-1" style={{ width: STEP_WIDTH, minHeight: 88 }}>
              <CellArea
                stepId={target.stepId}
                subStepId={target.subStepId}
                laneKey={laneKey}
                cards={stageCards}
                hiddenActorCount={getHiddenActorCountForStageCell?.(stage.id, laneKey) ?? 0}
              />
            </div>
          </StageBounds>
        );
      })}
    </L1LaneRowGrid>
  );
}
