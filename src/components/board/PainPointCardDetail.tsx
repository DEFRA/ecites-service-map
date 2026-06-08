'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { type Card } from '@/lib/types';
import { useBlueprintStore } from '@/store/blueprint-store';
import {
  extractPainPointIssueKey,
  formatJiraWikiDescription,
  formatPainPointHeading,
  parseJiraWikiBoldSegments,
  painPointStatusPillClass,
} from '@/lib/pain-point-records';
import { getLaneTitle } from '@/lib/lane-definitions';
import { getCardColorTokens } from './LaneLabel';
import { cn } from '@/lib/utils';

function PainPointBreadcrumb({ card }: { card: Card }) {
  const stages = useBlueprintStore((s) => s.stages);
  const steps = useBlueprintStore((s) => s.steps);
  const subSteps = useBlueprintStore((s) => s.subSteps ?? []);
  const stage = stages.find((s) => s.id === card.stageId);
  const step = steps.find((s) => s.id === card.stepId);
  const subStep = card.subStepId ? subSteps.find((s) => s.id === card.subStepId) : undefined;
  const laneTitle = getLaneTitle(card.laneKey);
  const laneToken = getCardColorTokens(card.laneKey, card.tags);

  return (
    <div className="flex flex-wrap items-center gap-1 text-[11px] text-neutral-500">
      {stage && <span>{stage.title}</span>}
      {step && step.title !== stage?.title && (
        <>
          <span aria-hidden="true">›</span>
          <span>{step.title}</span>
        </>
      )}
      {subStep && (
        <>
          <span aria-hidden="true">›</span>
          <span>{subStep.title}</span>
        </>
      )}
      <span aria-hidden="true">›</span>
      <span
        className={cn(
          'rounded-full px-1.5 py-0.5 font-medium',
          laneToken?.bg ?? 'bg-neutral-100',
          laneToken?.text ?? 'text-neutral-600',
        )}
      >
        {laneTitle}
      </span>
    </div>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
      {children}
    </h3>
  );
}

function JiraWikiLine({ line }: { line: string }) {
  const segments = parseJiraWikiBoldSegments(line);
  return (
    <>
      {segments.map((segment, index) =>
        segment.bold ? (
          <strong key={index} className="font-semibold text-neutral-900">
            {segment.text}
          </strong>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  );
}

function JiraWikiDescription({ text }: { text: string }) {
  const lines = formatJiraWikiDescription(text).split('\n');
  return (
    <div className="mt-2 space-y-2 text-[13px] leading-relaxed text-neutral-700">
      {lines.map((line, index) => (
        <p key={index}>
          <JiraWikiLine line={line} />
        </p>
      ))}
    </div>
  );
}

interface PainPointCardDetailProps {
  card?: Card | null;
  issueKey?: string | null;
  onClose: () => void;
  panelRef: React.RefObject<HTMLDivElement | null>;
}

export function PainPointCardDetail({ card, issueKey, onClose, panelRef }: PainPointCardDetailProps) {
  const painPointRecords = useBlueprintStore((s) => s.painPointRecords ?? {});

  const resolvedIssueKey = issueKey?.trim() || (card ? extractPainPointIssueKey(card) : null);
  const record = resolvedIssueKey ? painPointRecords[resolvedIssueKey] : undefined;
  const heading = formatPainPointHeading(
    resolvedIssueKey,
    record?.summary,
    resolvedIssueKey
      ? 'Import pain point details to see the summary.'
      : card?.title ?? 'Pain point',
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      data-no-pan
      data-no-select
      className="pointer-events-auto absolute inset-y-0 right-0 z-40 flex w-[380px] flex-col border-l border-neutral-200 bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.06)]"
    >
      <div className="relative shrink-0 border-b border-neutral-100 px-5 py-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 z-10 rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="Close panel"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
        {card ? <PainPointBreadcrumb card={card} /> : null}
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="space-y-6">
          <p className="text-[15px] font-semibold leading-snug text-neutral-900">{heading}</p>

          {record?.status && (
            <section>
              <SectionHeading>Status</SectionHeading>
              <div className="mt-2">
                <span
                  className={cn(
                    'inline-flex max-w-full items-center rounded-full border px-3 py-1 text-[12px] font-semibold leading-snug',
                    painPointStatusPillClass(record.status),
                  )}
                >
                  {record.status}
                </span>
              </div>
            </section>
          )}

          {record?.description && (
            <section>
              <SectionHeading>Description</SectionHeading>
              <JiraWikiDescription text={record.description} />
            </section>
          )}

          {!record && resolvedIssueKey && (
            <p className="rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-3 py-2 text-[12px] leading-relaxed text-neutral-600">
              Use Menu → Import → Pain point details to load metadata from your Jira export spreadsheet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
