'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plus } from 'lucide-react';
import { type Card, type LaneKey } from '@/lib/types';
import { useBlueprintStore } from '@/store/blueprint-store';
import { BlueprintCard } from './BlueprintCard';
import { cn } from '@/lib/utils';
import { CardTagEditor, getReusableTagSuggestions } from './CardTagEditor';

import { isJourneyFilterLane, type JourneyFilterLaneKey } from '@/lib/journey-lane-filter';
import { LANE_COLOR_TOKENS } from './LaneLabel';

const HIDDEN_BADGE_NOUN: Partial<Record<JourneyFilterLaneKey, string>> = {
  actor: 'actor',
  system: 'system',
  user_need: 'user need',
  pain_point: 'pain point',
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
  const addCard = useBlueprintStore((s) => s.addCard);
  const addCardToSubStep = useBlueprintStore((s) => s.addCardToSubStep);
  const allCards = useBlueprintStore((s) => s.cards);
  const readOnly = useBlueprintStore((s) => s.readOnly);
  const [adding, setAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTags, setNewTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const availableTags = useMemo(
    () => getReusableTagSuggestions(allCards),
    [allCards],
  );

  const droppableId = subStepId ? `${subStepId}::${laneKey}` : `${stepId}::${laneKey}`;
  const { setNodeRef, isOver } = useDroppable({
    id: droppableId,
    data: { type: 'cell', stepId, subStepId, laneKey },
  });

  useEffect(() => {
    if (adding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [adding]);

  const handleSave = () => {
    const trimmed = newTitle.trim();
    if (trimmed) {
      if (subStepId) {
        addCardToSubStep(subStepId, laneKey, trimmed, '', newTags);
      } else if (stepId) {
        addCard(stepId, laneKey, trimmed, '', newTags);
      }
    }
    setNewTitle('');
    setNewTags([]);
    setAdding(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      setNewTitle('');
      setNewTags([]);
      setAdding(false);
    }
  };

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

      {adding && !readOnly ? (
        <div className={cn('mt-1.5 rounded-lg border border-blue-200 bg-white p-2 shadow-sm', cards.length === 0 && 'mt-0')}>
          <textarea
            ref={inputRef}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            aria-label="New card title"
            className="w-full resize-none rounded border-0 bg-transparent p-0 text-[13px] font-medium leading-snug text-neutral-800 outline-none placeholder:text-neutral-400"
            placeholder="Card title…"
            rows={2}
          />
          <CardTagEditor
            value={newTags}
            suggestions={availableTags}
            onChange={setNewTags}
            placeholder="Add or reuse tags"
            className="mt-2"
          />
          <div className="mt-1.5 flex items-center gap-1.5">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleSave}
              className="rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Add
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                setNewTitle('');
                setNewTags([]);
                setAdding(false);
              }}
              className="rounded-md px-2 py-1 text-[11px] font-medium text-neutral-500 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : !readOnly ? (
        <button
          onClick={() => setAdding(true)}
          className={cn(
            'flex w-full items-center gap-1 rounded-lg border border-dashed px-2 py-1.5 text-[12px] text-neutral-400 transition-[opacity,color,border-color] hover:border-neutral-300 hover:text-neutral-500 focus:opacity-100 focus:outline-none focus-visible:border-blue-300 focus-visible:text-blue-500 focus-visible:opacity-100',
            cards.length === 0
              ? 'border-neutral-200 opacity-70 hover:opacity-100'
              : 'border-transparent opacity-0 group-hover:opacity-100',
            'mt-auto',
            isOver && 'opacity-100',
          )}
          aria-label={`Add card to ${laneKey}`}
        >
          <Plus aria-hidden="true" className="h-3 w-3" />
          <span>Add card</span>
        </button>
      ) : null}
    </div>
  );
}
