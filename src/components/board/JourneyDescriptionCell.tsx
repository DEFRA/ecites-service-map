'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Pencil } from 'lucide-react';
import { useBlueprintStore } from '@/store/blueprint-store';
import { cn } from '@/lib/utils';

interface JourneyDescriptionCellProps {
  description: string | undefined;
  onSave: (value: string) => void;
  className?: string;
  addLabel?: string;
}

export function JourneyDescriptionCell({
  description,
  onSave,
  className,
  addLabel = 'Add description',
}: JourneyDescriptionCellProps) {
  const readOnly = useBlueprintStore((s) => s.readOnly);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(description ?? '');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setDraft(description ?? '');
  }, [description]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      if (description) inputRef.current.select();
    }
  }, [editing, description]);

  const save = () => {
    onSave(draft.trim());
    setEditing(false);
  };

  const trimmed = description?.trim();

  return (
    <div className={cn('group flex min-h-[52px] flex-1 flex-col p-1.5', className)}>
      {editing && !readOnly ? (
        <div className="rounded-lg border border-blue-200 bg-white p-2 shadow-sm ring-1 ring-blue-100">
          <textarea
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) save();
              if (e.key === 'Escape') {
                setDraft(description ?? '');
                setEditing(false);
              }
            }}
            onBlur={save}
            rows={3}
            aria-label="Description"
            className="w-full resize-y rounded border-0 bg-transparent p-0 text-[12px] leading-snug text-neutral-700 outline-none placeholder:text-neutral-400"
            placeholder="Description…"
          />
        </div>
      ) : trimmed ? (
        <div className="flex items-start gap-1">
          <p className="min-w-0 flex-1 whitespace-pre-wrap text-[12px] leading-snug text-neutral-600">
            {trimmed}
          </p>
          {!readOnly && (
            <button
              type="button"
              onClick={() => {
                setDraft(description ?? '');
                setEditing(true);
              }}
              className="shrink-0 rounded p-0.5 text-neutral-300 opacity-0 transition-opacity hover:text-neutral-500 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Edit description"
            >
              <Pencil aria-hidden="true" className="h-3 w-3" />
            </button>
          )}
        </div>
      ) : !readOnly ? (
        <button
          type="button"
          onClick={() => {
            setDraft('');
            setEditing(true);
          }}
          className="flex w-full items-center gap-1 rounded-lg border border-dashed border-neutral-200 px-2 py-1.5 text-[12px] text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-500 focus:outline-none focus-visible:border-blue-300 focus-visible:text-blue-500"
          aria-label={addLabel}
        >
          <Plus aria-hidden="true" className="h-3 w-3 shrink-0" />
          <span>{addLabel}</span>
        </button>
      ) : (
        <span className="text-[12px] text-neutral-300">&nbsp;</span>
      )}
    </div>
  );
}
