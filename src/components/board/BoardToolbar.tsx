'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Upload,
  Download,
  Eye,
  EyeOff,
  ChevronDown,
  Film,
  List,
  ListTree,
  SquareStack,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import { useBlueprintStore } from '@/store/blueprint-store';
import { cn } from '@/lib/utils';
import { getLaneTitle, L1_HIDDEN_LANE_KEYS, L2_LANE_KEYS, L2_LANE_TITLE_OVERRIDES, L3_LANE_KEYS, L3_LANE_TITLE_OVERRIDES } from '@/lib/lane-definitions';
import { exportBlueprintSpreadsheet, spreadsheetExportFilename } from '@/lib/export-spreadsheet';
import {
  blueprintBackupExportFilename,
  exportBlueprintBackupJson,
  exportStoryboardImagesZip,
  storyboardImagesExportFilename,
} from '@/lib/export-storyboard-images';
import { blueprintTitleLabel } from '@/lib/blueprint-title';
import { activeUserJourney, userJourneyHeading } from '@/lib/user-journey';
import type { Card, Opportunity } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BlueprintImportPanel } from '@/components/import/BlueprintImportPanel';

const SHOW_EXAMPLE_TREE_MENU_ITEM = false;
/** Blank Goal → Outcome → Opportunity tree (“New opportunity tree” in UI). Hidden from menu; store action remains available. */
const SHOW_NEW_OPPORTUNITY_TREE_MENU_ITEM = false;

function countContextualUserOpportunities(opportunities: Opportunity[], cards: Card[]) {
  const currentCardIds = new Set(cards.map((card) => card.id));
  return opportunities.filter((opportunity) => {
    if (opportunity.origin === 'user' || opportunity.origin === 'generated') return true;
    return opportunity.sourceCardIds.some((id) => currentCardIds.has(id));
  }).length;
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tagName = target.tagName.toLowerCase();
  return (
    tagName === 'input' ||
    tagName === 'textarea' ||
    tagName === 'select' ||
    target.isContentEditable
  );
}

export function BoardToolbar({
  onImportSpreadsheet,
  appView = 'board',
  onAppViewChange,
}: {
  onImportSpreadsheet?: () => void;
  appView?: 'board' | 'pain_points' | 'user_stories';
  onAppViewChange?: (view: 'board' | 'pain_points' | 'user_stories') => void;
} = {}) {
  const blueprint = useBlueprintStore((s) => s.blueprint);
  const rootDocument = useBlueprintStore((s) => s.rootDocument);
  const stages = useBlueprintStore((s) => s.stages);
  const steps = useBlueprintStore((s) => s.steps);
  const lanes = useBlueprintStore((s) => s.lanes);
  const cards = useBlueprintStore((s) => s.cards);
  const childBlueprints = useBlueprintStore((s) => s.childBlueprints);
  const activeBlueprintId = useBlueprintStore((s) => s.activeBlueprintId);
  const rootBlueprintId = useBlueprintStore((s) => s.rootBlueprintId);
  const storyboardImages = useBlueprintStore((s) => s.storyboardImages);
  const storyboardVisible = useBlueprintStore((s) => s.storyboardVisible);
  const descriptionRowVisible = useBlueprintStore((s) => s.descriptionRowVisible ?? true);
  const toggleDescriptionRowVisible = useBlueprintStore((s) => s.toggleDescriptionRowVisible);
  const subSubStepRowVisible = useBlueprintStore((s) => s.subSubStepRowVisible ?? true);
  const toggleSubSubStepRowVisible = useBlueprintStore((s) => s.toggleSubSubStepRowVisible);
  const stepHeadersVisible = useBlueprintStore((s) => s.stepHeadersVisible ?? true);
  const subStepHeadersVisible = useBlueprintStore((s) => s.subStepHeadersVisible ?? true);
  const cardLinks = useBlueprintStore((s) => s.cardLinks);
  const evidence = useBlueprintStore((s) => s.evidence);
  const traceabilityCounters = useBlueprintStore((s) => s.traceabilityCounters);
  const setServiceName = useBlueprintStore((s) => s.setServiceName);
  const toggleLane = useBlueprintStore((s) => s.toggleLane);
  const toggleStoryboardVisible = useBlueprintStore((s) => s.toggleStoryboardVisible);
  const toggleStepHeadersVisible = useBlueprintStore((s) => s.toggleStepHeadersVisible);
  const toggleSubStepHeadersVisible = useBlueprintStore((s) => s.toggleSubStepHeadersVisible);
  const userJourneys = useBlueprintStore((s) => s.userJourneys ?? []);
  const activeUserJourneyId = useBlueprintStore((s) => s.activeUserJourneyId ?? null);
  const descriptionVisibleInUserJourney = useBlueprintStore(
    (s) => s.descriptionVisibleInUserJourney ?? false,
  );
  const setActiveUserJourneyId = useBlueprintStore((s) => s.setActiveUserJourneyId);
  const toggleDescriptionVisibleInUserJourney = useBlueprintStore(
    (s) => s.toggleDescriptionVisibleInUserJourney,
  );
  const undo = useBlueprintStore((s) => s.undo);
  const redo = useBlueprintStore((s) => s.redo);
  const canUndo = useBlueprintStore((s) => s.canUndo);
  const canRedo = useBlueprintStore((s) => s.canRedo);
  const opportunities = useBlueprintStore((s) => s.opportunities);
  const solutions = useBlueprintStore((s) => s.solutions);
  const assumptions = useBlueprintStore((s) => s.assumptions);
  const strategicGoals = useBlueprintStore((s) => s.strategicGoals);
  const outcomes = useBlueprintStore((s) => s.outcomes);
  const stepLinks = useBlueprintStore((s) => s.stepLinks);
  const requirements = useBlueprintStore((s) => s.requirements);
  const apiContracts = useBlueprintStore((s) => s.apiContracts);
  const uiScaffolds = useBlueprintStore((s) => s.uiScaffolds);
  const newBlueprint = useBlueprintStore((s) => s.newBlueprint);
  const painPointRecords = useBlueprintStore((s) => s.painPointRecords);
  const jiraIssueRecords = useBlueprintStore((s) => s.jiraIssueRecords);
  const readOnly = useBlueprintStore((s) => s.readOnly);

  const isChildView = Boolean(rootDocument && activeBlueprintId !== rootBlueprintId);
  const activeJourney = activeUserJourney(userJourneys, activeUserJourneyId);
  const boardHeading =
    appView === 'pain_points'
      ? 'Pain points'
      : appView === 'user_stories'
        ? 'User stories'
        : activeJourney
          ? userJourneyHeading(activeJourney)
          : blueprintTitleLabel(blueprint.serviceName);
  const headingIsReadOnly =
    readOnly || Boolean(activeJourney) || appView === 'pain_points' || appView === 'user_stories';
  const isL2Mode = false;
  const isL3Mode = false;
  const useThreeLayerLayout = !isL2Mode && !isL3Mode;

  // Show only the lanes relevant to the current view level.
  const dropdownLanes = isL3Mode
    ? L3_LANE_KEYS.map((key) => lanes.find((l) => l.key === key)).filter(Boolean) as typeof lanes
    : isL2Mode
      ? L2_LANE_KEYS
          .map((key) => lanes.find((l) => l.key === key))
          .filter(Boolean) as typeof lanes
      : lanes.filter((lane) => !L1_HIDDEN_LANE_KEYS.has(lane.key as never));

  const [editingName, setEditingName] = useState(false);
  const [name, setName] = useState(() => blueprintTitleLabel(blueprint.serviceName));
  const [showLanes, setShowLanes] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showStartFreshDialog, setShowStartFreshDialog] = useState(false);
  const [transferDialog, setTransferDialog] = useState<'import' | 'export' | null>(null);
  const [transferNotice, setTransferNotice] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const lanesTriggerRef = useRef<HTMLButtonElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  const contextualOpportunityCount = countContextualUserOpportunities(opportunities, cards);

  const saveName = () => {
    const trimmed = name.trim();
    if (trimmed) {
      setServiceName(trimmed);
    } else {
      setName(blueprintTitleLabel(blueprint.serviceName));
    }
    setEditingName(false);
  };

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const closeTransferDialog = () => {
    setTransferDialog(null);
    setTransferNotice('');
  };

  const handleStartFresh = () => {
    newBlueprint();
    setName(blueprintTitleLabel('Untitled Blueprint'));
    setEditingName(false);
    onAppViewChange?.('board');
    setShowStartFreshDialog(false);
    setShowMenu(false);
  };

  const hasBlueprintContent =
    stages.length > 0 ||
    cards.length > 0 ||
    (storyboardImages?.length ?? 0) > 0 ||
    Object.keys(painPointRecords ?? {}).length > 0 ||
    Object.keys(jiraIssueRecords ?? {}).length > 0;

  const handleExportSpreadsheet = () => {
    setTransferNotice('');
    const state = useBlueprintStore.getState();
    const buffer = exportBlueprintSpreadsheet(state);
    downloadBlob(
      new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
      spreadsheetExportFilename(state),
    );
    closeTransferDialog();
  };

  const handleExportStoryboardImages = () => {
    setTransferNotice('');
    const state = useBlueprintStore.getState().getPersistableDocument();
    const zip = exportStoryboardImagesZip(state);
    if (!zip) {
      setTransferNotice('No storyboard images to download on this blueprint.');
      return;
    }
    downloadBlob(
      new Blob([new Uint8Array(zip)], { type: 'application/zip' }),
      storyboardImagesExportFilename(state),
    );
    closeTransferDialog();
  };

  const handleExportBackup = () => {
    setTransferNotice('');
    const state = useBlueprintStore.getState().getPersistableDocument();
    downloadBlob(
      new Blob([exportBlueprintBackupJson(state)], { type: 'application/json;charset=utf-8' }),
      blueprintBackupExportFilename(state),
    );
    closeTransferDialog();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');
      const hasModifier = isMac ? event.metaKey : event.ctrlKey;
      if (!hasModifier || event.altKey) return;
      if (isEditableTarget(event.target)) return;

      if (event.key.toLowerCase() === 'z' && event.shiftKey) {
        if (!canRedo) return;
        event.preventDefault();
        redo();
        return;
      }

      if (event.key.toLowerCase() === 'z') {
        if (!canUndo) return;
        event.preventDefault();
        undo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canRedo, canUndo, redo, undo]);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-neutral-200 bg-white px-5 py-3">
        {/* Blueprint name */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  onAppViewChange?.('board');
                  setActiveUserJourneyId(null);
                }}
                className={cn(
                  'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
                  appView === 'board' && !activeUserJourneyId
                    ? 'bg-[#E6F3EB] text-[#008938]'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200',
                )}
              >
                Blueprint
              </button>
              {userJourneys.map((journey) => (
                <button
                  key={journey.id}
                  type="button"
                  onClick={() => {
                    onAppViewChange?.('board');
                    setActiveUserJourneyId(journey.id);
                  }}
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
                    appView === 'board' && activeUserJourneyId === journey.id
                      ? 'bg-[#E6F3EB] text-[#008938]'
                      : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200',
                  )}
                >
                  {journey.name}
                </button>
              ))}
              <button
                type="button"
                onClick={() => onAppViewChange?.('pain_points')}
                className={cn(
                  'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400',
                  appView === 'pain_points'
                    ? 'bg-rose-100 text-rose-800'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200',
                )}
              >
                Pain points
              </button>
              <button
                type="button"
                onClick={() => onAppViewChange?.('user_stories')}
                className={cn(
                  'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                  appView === 'user_stories'
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200',
                )}
              >
                User stories
              </button>
            </div>
            <h1 className="m-0 min-w-0 w-full text-xl font-bold leading-tight">
              {headingIsReadOnly ? (
                <span className="block w-full max-w-full break-words px-1 py-0.5 text-xl font-bold text-neutral-900">
                  {boardHeading}
                </span>
              ) : editingName ? (
                <input
                  ref={nameRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') saveName();
                    if (e.key === 'Escape') {
                      setName(blueprintTitleLabel(blueprint.serviceName));
                      setEditingName(false);
                    }
                  }}
                  onBlur={saveName}
                  autoFocus
                  aria-label="Blueprint name"
                  className="w-full min-w-0 rounded border border-neutral-300 px-2 py-1 text-xl font-bold text-neutral-900 outline-none focus:border-blue-400"
                />
              ) : (
                <button
                  onClick={() => {
                    setName(blueprintTitleLabel(blueprint.serviceName));
                    setEditingName(true);
                  }}
                  aria-label={`Blueprint name: ${boardHeading}. Click to edit.`}
                  className="block w-full max-w-full text-left break-words rounded px-1 py-0.5 text-xl font-bold text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {boardHeading}
                </button>
              )}
            </h1>
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="relative">
            <button
              ref={lanesTriggerRef}
              onClick={() => setShowLanes(!showLanes)}
              aria-expanded={showLanes}
              aria-haspopup="menu"
              aria-label="Toggle lanes visibility"
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Eye aria-hidden="true" className="h-3.5 w-3.5" /> Lanes
              <ChevronDown aria-hidden="true" className="h-3 w-3" />
            </button>
            {showLanes && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setShowLanes(false)} />
                <div
                  role="menu"
                  aria-label="Lanes visibility"
                  className="absolute right-0 top-full z-40 mt-1 w-56 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setShowLanes(false);
                      lanesTriggerRef.current?.focus();
                    }
                    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                      e.preventDefault();
                      const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'));
                      const idx = items.indexOf(document.activeElement as HTMLElement);
                      const next = e.key === 'ArrowDown' ? (idx + 1) % items.length : (idx - 1 + items.length) % items.length;
                      items[next]?.focus();
                    }
                  }}
                >
                  <button
                    role="menuitem"
                    onClick={toggleStepHeadersVisible}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {stepHeadersVisible ? (
                      <Eye aria-hidden="true" className="h-3.5 w-3.5 text-neutral-600" />
                    ) : (
                      <EyeOff aria-hidden="true" className="h-3.5 w-3.5 text-neutral-300" />
                    )}
                    <List aria-hidden="true" className="h-3.5 w-3.5 text-neutral-500" />
                    <span className={cn('font-medium', !stepHeadersVisible && 'text-neutral-500')}>
                      Steps
                    </span>
                  </button>
                  <button
                    role="menuitem"
                    onClick={toggleSubStepHeadersVisible}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {subStepHeadersVisible ? (
                      <Eye aria-hidden="true" className="h-3.5 w-3.5 text-neutral-600" />
                    ) : (
                      <EyeOff aria-hidden="true" className="h-3.5 w-3.5 text-neutral-300" />
                    )}
                    <ListTree aria-hidden="true" className="h-3.5 w-3.5 text-neutral-500" />
                    <span className={cn('font-medium', !subStepHeadersVisible && 'text-neutral-500')}>
                      Sub-steps
                    </span>
                  </button>
                  {useThreeLayerLayout && subStepHeadersVisible && (
                    <button
                      role="menuitem"
                      onClick={toggleSubSubStepRowVisible}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      {subSubStepRowVisible ? (
                        <Eye aria-hidden="true" className="h-3.5 w-3.5 text-neutral-600" />
                      ) : (
                        <EyeOff aria-hidden="true" className="h-3.5 w-3.5 text-neutral-300" />
                      )}
                      <SquareStack aria-hidden="true" className="h-3.5 w-3.5 text-neutral-500" />
                      <span className={cn('font-medium', !subSubStepRowVisible && 'text-neutral-500')}>
                        Sub-sub-steps
                      </span>
                    </button>
                  )}
                  <button
                    role="menuitem"
                    onClick={toggleStoryboardVisible}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {storyboardVisible ? (
                      <Eye aria-hidden="true" className="h-3.5 w-3.5 text-neutral-600" />
                    ) : (
                      <EyeOff aria-hidden="true" className="h-3.5 w-3.5 text-neutral-300" />
                    )}
                    <Film aria-hidden="true" className="h-3.5 w-3.5 text-neutral-500" />
                    <span className={cn('font-medium', !storyboardVisible && 'text-neutral-500')}>
                      {isL3Mode ? 'Screens' : 'Storyboard'}
                    </span>
                  </button>
                  {useThreeLayerLayout && (
                    <button
                      role="menuitem"
                      onClick={
                        activeUserJourneyId
                          ? toggleDescriptionVisibleInUserJourney
                          : toggleDescriptionRowVisible
                      }
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      {(activeUserJourneyId
                        ? descriptionVisibleInUserJourney
                        : descriptionRowVisible) ? (
                        <Eye aria-hidden="true" className="h-3.5 w-3.5 text-neutral-600" />
                      ) : (
                        <EyeOff aria-hidden="true" className="h-3.5 w-3.5 text-neutral-300" />
                      )}
                      <BookOpen aria-hidden="true" className="h-3.5 w-3.5 text-neutral-500" />
                      <span
                        className={cn(
                          'font-medium',
                          (activeUserJourneyId
                            ? !descriptionVisibleInUserJourney
                            : !descriptionRowVisible) && 'text-neutral-500',
                        )}
                      >
                        Description
                      </span>
                    </button>
                  )}
                  <div className="my-1 h-px bg-neutral-100" />
                  {dropdownLanes
                    .filter((lane) => lane.key !== 'sub_sub_step')
                    .map((lane) => (
                    <button
                      key={lane.key}
                      role="menuitem"
                      onClick={() => toggleLane(lane.key)}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      {lane.visible ? (
                        <Eye aria-hidden="true" className="h-3.5 w-3.5 text-neutral-600" />
                      ) : (
                        <EyeOff aria-hidden="true" className="h-3.5 w-3.5 text-neutral-300" />
                      )}
                      <span className={cn('font-medium', !lane.visible && 'text-neutral-500')}>
                        {(isL3Mode && L3_LANE_TITLE_OVERRIDES[lane.key]) || (isL2Mode && L2_LANE_TITLE_OVERRIDES[lane.key]) || getLaneTitle(lane.key)}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="relative">
            <button
              ref={menuTriggerRef}
              onClick={() => setShowMenu(!showMenu)}
              aria-expanded={showMenu}
              aria-haspopup="menu"
              aria-label="Import and export"
              className="inline-flex h-[34px] items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
            {showMenu && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setShowMenu(false)} />
                <div
                  role="menu"
                  aria-label="Import and export"
                  className="absolute right-0 top-full z-40 mt-1 w-44 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setShowMenu(false);
                      menuTriggerRef.current?.focus();
                    }
                    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                      e.preventDefault();
                      const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'));
                      const idx = items.indexOf(document.activeElement as HTMLElement);
                      const next = e.key === 'ArrowDown' ? (idx + 1) % items.length : (idx - 1 + items.length) % items.length;
                      items[next]?.focus();
                    }
                  }}
                >
                  {!readOnly && (
                    <button
                      role="menuitem"
                      onClick={() => {
                        setTransferDialog('import');
                        setShowMenu(false);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      <Upload aria-hidden="true" className="h-3.5 w-3.5" /> Import
                    </button>
                  )}
                  <button
                    role="menuitem"
                    onClick={() => {
                      setTransferDialog('export');
                      setShowMenu(false);
                    }}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Download aria-hidden="true" className="h-3.5 w-3.5" /> Export
                  </button>
                  {!readOnly && (
                    <>
                      <div className="my-1 border-t border-neutral-100" role="separator" />
                      <button
                        role="menuitem"
                        disabled={!hasBlueprintContent}
                        onClick={() => {
                          setShowStartFreshDialog(true);
                          setShowMenu(false);
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-red-700 transition-colors hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:bg-transparent"
                      >
                        <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" /> Start fresh
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <Dialog open={transferDialog !== null} onOpenChange={(open) => {
        if (!open) closeTransferDialog();
      }}>
        <DialogContent className="gap-5 p-5 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{transferDialog === 'import' ? 'Import' : 'Export'}</DialogTitle>
            <DialogDescription>
              {transferDialog === 'import'
                ? 'Bring storyboard images, master service details, Jira issue metadata, or a full backup into this blueprint.'
                : 'Download storyboard images, a spreadsheet, or a full backup from this blueprint.'}
            </DialogDescription>
          </DialogHeader>
          {transferDialog === 'import' ? (
            <BlueprintImportPanel
              readOnly={readOnly}
              onImportSpreadsheet={onImportSpreadsheet}
              onImportComplete={closeTransferDialog}
            />
          ) : (
            <>
              {transferNotice ? (
                <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
                  {transferNotice}
                </p>
              ) : null}
            <div className="grid gap-2">
              <button
                type="button"
                onClick={handleExportStoryboardImages}
                className="flex min-h-24 flex-col items-start justify-between rounded-lg border border-neutral-200 bg-white p-4 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span className="text-sm font-semibold text-neutral-900">Storyboard images (zip)</span>
                <span className="text-xs leading-5 text-neutral-500">
                  All storyboard pictures as image files, plus a manifest for reimporting later.
                </span>
              </button>
              <button
                type="button"
                onClick={handleExportSpreadsheet}
                className="flex min-h-24 flex-col items-start justify-between rounded-lg border border-neutral-200 bg-white p-4 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span className="text-sm font-semibold text-neutral-900">Spreadsheet</span>
                <span className="text-xs leading-5 text-neutral-500">
                  Excel file with all stages, steps, sub-steps, lanes and card content.
                </span>
              </button>
              <button
                type="button"
                onClick={handleExportBackup}
                className="flex min-h-24 flex-col items-start justify-between rounded-lg border border-neutral-200 bg-white p-4 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span className="text-sm font-semibold text-neutral-900">Full backup (JSON)</span>
                <span className="text-xs leading-5 text-neutral-500">
                  Complete copy of this blueprint for moving between browsers or machines.
                </span>
              </button>
            </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showStartFreshDialog} onOpenChange={setShowStartFreshDialog}>
        <DialogContent className="gap-5 p-5 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Start fresh?</DialogTitle>
            <DialogDescription>
              This clears all stages, steps, cards, storyboard images and imported Jira metadata from
              this blueprint. Your work is removed from this browser only.
            </DialogDescription>
          </DialogHeader>
          <p className="text-[13px] leading-relaxed text-neutral-600">
            Export a full backup first if you might need this blueprint again later.
          </p>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setShowStartFreshDialog(false)}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleStartFresh}
              className="inline-flex items-center justify-center rounded-lg bg-red-700 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
            >
              Start fresh
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
