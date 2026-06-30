'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { type Card, type LaneKey } from '@/lib/types';
import { BlueprintCard } from './BlueprintCard';
import { cn } from '@/lib/utils';

import { isJourneyFilterLane, type JourneyFilterLaneKey } from '@/lib/journey-lane-filter';
import { LANE_COLOR_TOKENS } from './LaneLabel';

const HIDDEN_BADGE_NOUN: Partial<Record<JourneyFilterLaneKey, string>> = {
  actor: 'actor',
  system: 'system',
  user_need: 'user need',
  pain_point: 'pain point',
  user_story: 'user story',
};

interface CellAreaProps {
  stepId?: string;
  subStepId?: string;
  laneKey: LaneKey;
  cards: Card[];
  /** Distinct journey lane types hidden in this cell when a filter is active. */
  hiddenActorCount?: number;
}

export function CellArea({ stepId, subStepId, laneKey, cards, hiddenActorCount = 0 }: CellAreaProps) {
  const droppableId = subStepId ? `${subStepId}::${laneKey}` : `${stepId}::${laneKey}`;
  const { setNodeRef, isOver } = useDroppable({
    id: droppableId,
    data: { type: 'cell', stepId, subStepId, laneKey },
  });

  const hiddenJourneyBadge =
    isJourneyFilterLane(laneKey) && hiddenActorCount > 0 ? (
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border bg-white px-2.5 py-0.5 text-[11px] font-medium',
          (LANE_COLOR_TOKENS[laneKey] ?? LANE_COLOR_TOKENS.actor).border,
          (LANE_COLOR_TOKENS[laneKey] ?? LANE_COLOR_TOKENS.actor).text,
        )}
        aria-label={`${hiddenActorCount} more ${HIDDEN_BADGE_NOUN[laneKey] ?? 'item'}${hiddenActorCount === 1 ? '' : 's'} hidden in this column`}
      >
        {hiddenActorCount} hidden
      </span>
    ) : null;

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'group flex min-h-[52px] flex-1 flex-col rounded-lg p-1.5 transition-colors',
        isOver && 'bg-blue-50/60 ring-1 ring-blue-200/50',
      )}
    >
      <SortableContext items={cards.map((c) => c.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-1">
          {cards.map((card) => (
            <BlueprintCard key={card.id} card={card} />
          ))}
          {hiddenJourneyBadge}
        </div>
      </SortableContext>
    </div>
  );
}
