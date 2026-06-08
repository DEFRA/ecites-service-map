'use client';

import { Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { type SubStep } from '@/lib/types';
import { useBlueprintStore } from '@/store/blueprint-store';
import { cn } from '@/lib/utils';

interface SubStepHeaderProps {
  subStep: SubStep;
  stepWidth: number;
  canMoveLeft: boolean;
  canMoveRight: boolean;
}

const actionBtnClass =
  'rounded p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';

export function SubStepHeader({ subStep, stepWidth, canMoveLeft, canMoveRight }: SubStepHeaderProps) {
  const updateSubStep = useBlueprintStore((s) => s.updateSubStep);
  const deleteSubStep = useBlueprintStore((s) => s.deleteSubStep);
  const reorderSubStep = useBlueprintStore((s) => s.reorderSubStep);
  const readOnly = useBlueprintStore((s) => s.readOnly);

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(subStep.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  useEffect(() => {
    setTitle(subStep.title);
  }, [subStep.title]);

  const save = () => {
    const trimmed = title.trim();
    if (trimmed) {
      updateSubStep(subStep.id, { title: trimmed });
    } else {
      setTitle(subStep.title);
    }
    setEditing(false);
  };

  return (
    <div
      className="group relative flex h-full min-h-0 min-w-0 max-w-full w-full items-start overflow-hidden bg-white px-1.5 py-1"
      style={{ width: stepWidth }}
    >
      {editing && !readOnly ? (
        <input
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') save();
            if (e.key === 'Escape') {
              setTitle(subStep.title);
              setEditing(false);
            }
          }}
          onBlur={save}
          aria-label="Sub-step title"
          className="w-full rounded border border-neutral-300 bg-white px-1.5 py-0.5 text-left text-[11px] font-medium text-neutral-800 outline-none focus:border-blue-400"
        />
      ) : (
        <>
          <p className="min-w-0 flex-1 break-words pr-0.5 text-left text-[11px] font-medium leading-snug text-neutral-700">
            {subStep.title}
          </p>
          {!readOnly && (
            <div
              className={cn(
                'absolute right-0.5 top-0.5 z-10 flex shrink-0 items-center gap-0.5 rounded-md border border-neutral-200 bg-white/95 px-0.5 py-0.5 shadow-sm',
                'opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100',
              )}
              role="toolbar"
              aria-label={`Actions for sub-step ${subStep.title}`}
            >
              {canMoveLeft && (
                <button
                  type="button"
                  onClick={() => reorderSubStep(subStep.id, subStep.order - 1)}
                  className={actionBtnClass}
                  aria-label="Move sub-step left"
                >
                  <ChevronLeft aria-hidden="true" className="h-3 w-3" />
                </button>
              )}
              {canMoveRight && (
                <button
                  type="button"
                  onClick={() => reorderSubStep(subStep.id, subStep.order + 1)}
                  className={actionBtnClass}
                  aria-label="Move sub-step right"
                >
                  <ChevronRight aria-hidden="true" className="h-3 w-3" />
                </button>
              )}
              <button type="button" onClick={() => setEditing(true)} className={actionBtnClass} aria-label="Edit sub-step title">
                <Pencil aria-hidden="true" className="h-3 w-3" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Delete sub-step "${subStep.title}" and all its cards?`)) {
                    deleteSubStep(subStep.id);
                  }
                }}
                className="rounded p-0.5 text-neutral-400 hover:bg-red-50 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                aria-label="Delete sub-step"
              >
                <Trash2 aria-hidden="true" className="h-3 w-3" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
