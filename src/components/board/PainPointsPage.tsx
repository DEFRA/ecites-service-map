'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useBlueprintStore } from '@/store/blueprint-store';
import {
  buildSortedPainPointList,
  collectPainPointRecordStatuses,
  filterPainPointListByStatuses,
  findPainPointCardForIssueKey,
  painPointStatusPillClass,
} from '@/lib/pain-point-records';
import { useFocusTrap } from '@/lib/hooks/useFocusTrap';
import { PainPointCardDetail } from '@/components/board/PainPointCardDetail';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PainPointsHierarchyTable } from '@/components/board/PainPointsHierarchyTable';
import { cn } from '@/lib/utils';

function statusFilterLabel(
  selectedStatuses: Set<string> | null,
  availableStatuses: string[],
  noPainPointSubStepsOnly: boolean,
): string {
  if (noPainPointSubStepsOnly) return 'No pain point';
  if (selectedStatuses === null || selectedStatuses.size === availableStatuses.length) {
    return 'All statuses';
  }
  if (selectedStatuses.size === 1) {
    return [...selectedStatuses][0] ?? 'All statuses';
  }
  return `${selectedStatuses.size} statuses`;
}

export function PainPointsPage() {
  const painPointRecords = useBlueprintStore((s) => s.painPointRecords ?? {});
  const cards = useBlueprintStore((s) => s.cards);
  const selectCard = useBlueprintStore((s) => s.selectCard);
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string> | null>(null);
  const [noPainPointSubStepsOnly, setNoPainPointSubStepsOnly] = useState(false);
  const [focusedIssueKey, setFocusedIssueKey] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(panelRef, focusedIssueKey != null);

  const focusedCard = useMemo(
    () => (focusedIssueKey ? findPainPointCardForIssueKey(cards, focusedIssueKey) : undefined),
    [cards, focusedIssueKey],
  );

  const closeDetailPanel = useCallback(() => {
    setFocusedIssueKey(null);
    selectCard(null);
  }, [selectCard]);

  const entries = useMemo(
    () => buildSortedPainPointList(painPointRecords),
    [painPointRecords],
  );

  const availableStatuses = useMemo(
    () => collectPainPointRecordStatuses(painPointRecords),
    [painPointRecords],
  );

  const filteredEntries = useMemo(
    () => filterPainPointListByStatuses(entries, selectedStatuses),
    [entries, selectedStatuses],
  );

  const filterLabel = statusFilterLabel(
    selectedStatuses,
    availableStatuses,
    noPainPointSubStepsOnly,
  );

  function isStatusChecked(status: string): boolean {
    return selectedStatuses === null || selectedStatuses.has(status);
  }

  function clearHierarchyFocus() {
    setFocusedIssueKey(null);
  }

  function selectAllStatuses() {
    setSelectedStatuses(null);
    setNoPainPointSubStepsOnly(false);
    clearHierarchyFocus();
  }

  function toggleNoPainPointFilter(checked: boolean) {
    setNoPainPointSubStepsOnly(checked);
    if (checked) clearHierarchyFocus();
  }

  function toggleStatus(status: string, checked: boolean) {
    setNoPainPointSubStepsOnly(false);
    clearHierarchyFocus();
    setSelectedStatuses((prev) => {
      if (checked) {
        if (prev === null) return null;
        const next = new Set(prev);
        next.add(status);
        return next.size === availableStatuses.length ? null : next;
      }

      if (prev === null) {
        return new Set(availableStatuses.filter((item) => item !== status));
      }

      const next = new Set(prev);
      next.delete(status);
      return next;
    });
  }

  function toggleFocusedIssueKey(issueKey: string) {
    setNoPainPointSubStepsOnly(false);
    setFocusedIssueKey((current) => {
      const next = current === issueKey ? null : issueKey;
      if (next) {
        const card = findPainPointCardForIssueKey(cards, next);
        selectCard(card?.id ?? null);
      } else {
        selectCard(null);
      }
      return next;
    });
  }

  if (entries.length === 0) {
    return (
      <main className="relative flex min-h-0 flex-1 gap-5 overflow-hidden px-5 py-6">
        <div className="w-1/3 min-h-0 max-h-full min-w-[18rem] max-w-md shrink-0 overflow-y-auto">
          <p className="rounded-xl border border-neutral-200 bg-white px-4 py-6 text-center text-sm text-neutral-600 shadow-sm">
            No pain points listed yet. Upload your pain points spreadsheet from the board toolbar to
            see them here.
          </p>
        </div>
        <div className="sticky top-0 w-2/3 min-h-0 max-h-full min-w-[24rem] shrink-0 self-start overflow-y-auto">
          <PainPointsHierarchyTable
            noPainPointSubStepsOnly={noPainPointSubStepsOnly}
            focusedIssueKey={focusedIssueKey}
          />
        </div>
        {focusedIssueKey && (
          <PainPointCardDetail
            issueKey={focusedIssueKey}
            card={focusedCard}
            onClose={closeDetailPanel}
            panelRef={panelRef}
          />
        )}
      </main>
    );
  }

  return (
    <main className="relative flex min-h-0 flex-1 gap-5 overflow-hidden px-5 py-6">
      <div className="w-1/3 min-h-0 max-h-full min-w-[18rem] max-w-md shrink-0 overflow-y-auto">
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 px-3 py-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="inline-flex h-8 w-full items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white px-2.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                aria-label={`Filter by status. Current selection: ${filterLabel}`}
              >
                <span className="truncate">{filterLabel}</span>
                <ChevronDown aria-hidden="true" className="size-3.5 shrink-0 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[var(--anchor-width)]">
                <DropdownMenuItem onClick={selectAllStatuses}>All statuses</DropdownMenuItem>
                <DropdownMenuSeparator />
                {availableStatuses.map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={!noPainPointSubStepsOnly && isStatusChecked(status)}
                    onCheckedChange={(checked) => toggleStatus(status, checked === true)}
                    className="items-start py-1.5 pr-8 pl-1.5"
                  >
                    <span
                      className={cn(
                        'inline-flex max-w-full items-center rounded-md border px-1.5 py-0.5 text-[10px] font-semibold leading-snug',
                        painPointStatusPillClass(status),
                      )}
                    >
                      <span className="truncate">{status}</span>
                    </span>
                  </DropdownMenuCheckboxItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={noPainPointSubStepsOnly}
                  onCheckedChange={(checked) => toggleNoPainPointFilter(checked === true)}
                  className="py-1.5 pr-8 pl-1.5"
                >
                  No pain point
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {filteredEntries.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-neutral-600">
              No pain points match the selected statuses.
            </p>
          ) : (
            <ul>
              {filteredEntries.map((entry, index) => {
                const isFocused = focusedIssueKey === entry.issueKey;

                return (
                  <li key={entry.issueKey} className={index > 0 ? 'border-t border-neutral-200' : undefined}>
                    <button
                      type="button"
                      onClick={() => toggleFocusedIssueKey(entry.issueKey)}
                      className={cn(
                        'grid w-full grid-cols-[4rem_1fr] gap-x-2 gap-y-1.5 px-3 py-2.5 text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-400',
                        isFocused && 'bg-rose-50 hover:bg-rose-50',
                      )}
                      aria-pressed={isFocused}
                      aria-label={`${entry.issueKey}. ${entry.title}. Click to ${isFocused ? 'show all sub-steps' : 'show sub-steps where this pain point appears'}.`}
                    >
                      <span className="font-mono text-xs font-semibold text-neutral-800">
                        {entry.issueKey}
                      </span>
                      <span className="min-w-0 text-sm leading-snug text-neutral-800">
                        {entry.title}
                      </span>
                      <div className="col-span-2">
                        {entry.status ? (
                          <span
                            className={cn(
                              'inline-flex max-w-full items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold leading-snug',
                              painPointStatusPillClass(entry.status),
                            )}
                          >
                            <span className="truncate">{entry.status}</span>
                          </span>
                        ) : (
                          <span className="text-xs text-neutral-400">No status</span>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="sticky top-0 w-2/3 min-h-0 max-h-full min-w-[24rem] shrink-0 self-start overflow-y-auto">
        <PainPointsHierarchyTable
          selectedStatuses={selectedStatuses}
          focusedIssueKey={focusedIssueKey}
          noPainPointSubStepsOnly={noPainPointSubStepsOnly}
        />
      </div>

      {focusedIssueKey && (
        <PainPointCardDetail
          issueKey={focusedIssueKey}
          card={focusedCard}
          onClose={closeDetailPanel}
          panelRef={panelRef}
        />
      )}
    </main>
  );
}
