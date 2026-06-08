'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { type Step } from '@/lib/types';
import { useBlueprintStore } from '@/store/blueprint-store';
import { cn } from '@/lib/utils';

interface StepHeaderProps {
  step: Step;
  stepWidth: number;
  canMoveLeft: boolean;
  canMoveRight: boolean;
}

const actionBtnClass =
  'rounded p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';

export function StepHeader({ step, stepWidth, canMoveLeft, canMoveRight }: StepHeaderProps) {
  const updateStep = useBlueprintStore((s) => s.updateStep);
  const addStep = useBlueprintStore((s) => s.addStep);
  const deleteStep = useBlueprintStore((s) => s.deleteStep);
  const reorderStep = useBlueprintStore((s) => s.reorderStep);
  const readOnly = useBlueprintStore((s) => s.readOnly);

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(step.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  useEffect(() => {
    setTitle(step.title);
  }, [step.title]);

  const save = () => {
    const trimmed = title.trim();
    if (trimmed) {
      updateStep(step.id, { title: trimmed });
    } else {
      setTitle(step.title);
    }
    setEditing(false);
  };

  return (
    <div
      className="group relative flex h-full min-w-0 max-w-full w-full items-center overflow-hidden bg-white px-2 py-1"
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
              setTitle(step.title);
              setEditing(false);
            }
          }}
          onBlur={save}
          aria-label="Step title"
          className="w-full rounded border border-neutral-300 bg-white px-2 py-1 text-left text-[13px] font-semibold text-neutral-800 outline-none focus:border-blue-400"
        />
      ) : (
        <>
          <p className="min-w-0 flex-1 break-words pr-1 text-left text-[13px] font-semibold leading-snug text-neutral-800">
            {step.title}
          </p>
          {!readOnly && (
            <div
              className={cn(
                'absolute right-1 top-1 z-10 flex shrink-0 items-center gap-0.5 rounded-md border border-neutral-200 bg-white/95 px-0.5 py-0.5 shadow-sm',
                'opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100',
              )}
              role="toolbar"
              aria-label={`Actions for step ${step.title}`}
            >
              {canMoveLeft && (
                <button
                  type="button"
                  onClick={() => reorderStep(step.id, step.order - 1)}
                  className={actionBtnClass}
                  aria-label="Move step left"
                >
                  <ChevronLeft aria-hidden="true" className="h-3 w-3" />
                </button>
              )}
              {canMoveRight && (
                <button
                  type="button"
                  onClick={() => reorderStep(step.id, step.order + 1)}
                  className={actionBtnClass}
                  aria-label="Move step right"
                >
                  <ChevronRight aria-hidden="true" className="h-3 w-3" />
                </button>
              )}
              <button type="button" onClick={() => setEditing(true)} className={actionBtnClass} aria-label="Edit step title">
                <Pencil aria-hidden="true" className="h-3 w-3" />
              </button>
              <button
                type="button"
                onClick={() => addStep(step.stageId, 'New step')}
                className={actionBtnClass}
                aria-label="Add step to this stage"
              >
                <Plus aria-hidden="true" className="h-3 w-3" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Delete step "${step.title}" and all its cards?`)) {
                    deleteStep(step.id);
                  }
                }}
                className="rounded p-0.5 text-neutral-400 hover:bg-red-50 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                aria-label="Delete step"
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
