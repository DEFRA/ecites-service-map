'use client';

import { Fragment, useMemo } from 'react';
import { useBlueprintStore } from '@/store/blueprint-store';
import {
  buildHierarchyRows,
  filterHierarchyRowsToSubSteps,
  hierarchyRowBackground,
} from '@/lib/blueprint-hierarchy';
import {
  buildUserStoriesBySubStep,
  findSubStepIdsForIssueKey,
  findSubStepIdsForStatusFilter,
  findSubStepIdsWithoutUserStories,
  userStoryStatusDotClass,
} from '@/lib/user-story-records';
import { stripTraceabilityForDisplay } from '@/lib/traceability/display';
import { cn } from '@/lib/utils';

interface UserStoriesHierarchyTableProps {
  selectedStatuses?: Set<string> | null;
  focusedIssueKey?: string | null;
  noUserStorySubStepsOnly?: boolean;
}

const ROW_PADDING = 'px-3 py-2';

export function UserStoriesHierarchyTable({
  selectedStatuses = null,
  focusedIssueKey = null,
  noUserStorySubStepsOnly = false,
}: UserStoriesHierarchyTableProps) {
  const stages = useBlueprintStore((s) => s.stages);
  const steps = useBlueprintStore((s) => s.steps);
  const subSteps = useBlueprintStore((s) => s.subSteps ?? []);
  const cards = useBlueprintStore((s) => s.cards);
  const userStoryRecords = useBlueprintStore((s) => s.userStoryRecords ?? {});

  const allRows = useMemo(
    () => buildHierarchyRows(stages, steps, subSteps),
    [stages, steps, subSteps],
  );

  const userStoriesBySubStep = useMemo(
    () => buildUserStoriesBySubStep(cards, userStoryRecords, selectedStatuses),
    [cards, userStoryRecords, selectedStatuses],
  );

  const visibleSubStepIds = useMemo(() => {
    if (focusedIssueKey) {
      return new Set(findSubStepIdsForIssueKey(cards, focusedIssueKey));
    }
    if (noUserStorySubStepsOnly) {
      return new Set(findSubStepIdsWithoutUserStories(cards, subSteps));
    }
    if (selectedStatuses !== null) {
      return new Set(findSubStepIdsForStatusFilter(cards, userStoryRecords, selectedStatuses));
    }
    return null;
  }, [
    cards,
    focusedIssueKey,
    noUserStorySubStepsOnly,
    selectedStatuses,
    subSteps,
    userStoryRecords,
  ]);

  const collapseMessage = useMemo(() => {
    if (focusedIssueKey) {
      return `Showing sub-steps for ${focusedIssueKey}. Click the user story again to show all.`;
    }
    if (noUserStorySubStepsOnly) {
      return 'Showing sub-steps with no user story on the board.';
    }
    if (selectedStatuses !== null) {
      if (selectedStatuses.size === 1) {
        return `Showing sub-steps for ${[...selectedStatuses][0]}. Select all statuses to show all.`;
      }
      return `Showing sub-steps for ${selectedStatuses.size} selected statuses. Select all statuses to show all.`;
    }
    return null;
  }, [focusedIssueKey, noUserStorySubStepsOnly, selectedStatuses]);

  const rows = useMemo(() => {
    if (!visibleSubStepIds) return allRows;
    return filterHierarchyRowsToSubSteps(allRows, visibleSubStepIds, steps, subSteps);
  }, [allRows, visibleSubStepIds, steps, subSteps]);

  const stageCount = stages.length;
  const isCollapsed = visibleSubStepIds != null;
  const lastRowIndex = rows.length - 1;

  if (allRows.length === 0) {
    return (
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <p className="px-4 py-6 text-center text-sm text-neutral-600">
          No stages on this blueprint yet.
        </p>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <p className="px-4 py-6 text-center text-sm text-neutral-600">
          {focusedIssueKey
            ? `${focusedIssueKey} is not placed on any sub-step on the board.`
            : noUserStorySubStepsOnly
              ? 'No sub-steps without user stories.'
              : 'No sub-steps match the selected statuses.'}
        </p>
      </div>
    );
  }

  return (
    <div>
      {isCollapsed && collapseMessage && (
        <p className="mb-2 text-xs font-medium text-neutral-600">{collapseMessage}</p>
      )}
      <div className="grid grid-cols-2 gap-x-4">
        {rows.map((row, index) => {
          const subStepIssueKeys =
            row.level === 'subStep' ? (userStoriesBySubStep.get(row.id) ?? []) : [];
          const issueKeys =
            focusedIssueKey && subStepIssueKeys.includes(focusedIssueKey)
              ? [focusedIssueKey]
              : focusedIssueKey
                ? []
                : subStepIssueKeys;
          const backgroundColor = hierarchyRowBackground(row.stageIndex, row.level, stageCount);
          const isFirst = index === 0;
          const isLast = index === lastRowIndex;

          return (
            <Fragment key={row.id}>
              <div
                className={cn(
                  ROW_PADDING,
                  'leading-snug text-neutral-900',
                  'border-l border-r border-neutral-200',
                  isFirst && 'rounded-tl-xl rounded-tr-xl border-t',
                  isLast && 'rounded-bl-xl rounded-br-xl border-b',
                  !isFirst && 'border-t border-neutral-200/60',
                  row.level === 'stage' && 'text-sm font-semibold',
                  row.level === 'step' && 'pl-5 text-sm font-medium',
                  row.level === 'subStep' && 'pl-9 text-xs font-normal text-neutral-800',
                )}
                style={{ backgroundColor }}
              >
                {stripTraceabilityForDisplay(row.title)}
              </div>
              <div
                className={cn(
                  ROW_PADDING,
                  'flex flex-wrap content-start items-start gap-x-3 gap-y-1 bg-[#fafafa]',
                  !isFirst && 'border-t border-transparent',
                )}
              >
                {issueKeys.map((issueKey) => {
                  const status = userStoryRecords[issueKey]?.status?.trim() ?? null;
                  const isFocused = focusedIssueKey === issueKey;

                  return (
                    <span
                      key={issueKey}
                      className={cn(
                        'inline-flex items-center gap-1.5',
                        isFocused && 'rounded-md bg-white px-1 py-0.5 ring-1 ring-neutral-300',
                      )}
                    >
                      <span
                        className={cn(
                          'size-2 shrink-0 rounded-full',
                          userStoryStatusDotClass(status),
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-xs font-bold text-neutral-900">{issueKey}</span>
                    </span>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
