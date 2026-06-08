'use client';

import { useState, useCallback, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
  type DragOverEvent,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { ArrowUp, Hand, ImagePlus, Maximize2, Minimize2, Film, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { useBlueprintStore } from '@/store/blueprint-store';
import { type Card, type LaneKey, type StoryboardImage } from '@/lib/types';
import { LaneLabel } from './LaneLabel';
import { CellArea } from './CellArea';
import { StageHeader } from './StageHeader';
import { L1JourneyDescriptionRow } from './L1JourneyDescriptionRow';
import { StepHeader } from './StepHeader';
import { SubStepHeader } from './SubStepHeader';
import { L1LaneRow, L1StageOnlyLaneRow, L1StageOnlyStoryboardRow, L1StepHeaderRow, L1StoryboardRow, L1SubStepHeaderRow, L1SubSubStepRow } from './L1ColumnGrid';
import { BlueprintCard } from './BlueprintCard';
import { StoryboardCell, StoryboardCompactCell } from './StoryboardCell';
import { ImageCropModal } from './ImageCropModal';
import { CardDetailPanel } from './CardDetailPanel';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { DEFAULT_LANES, L2_LANE_KEYS, L2_LANE_TITLE_OVERRIDES, L3_LANE_KEYS, L3_LANE_TITLE_OVERRIDES, L1_MACRO_LANE_KEYS } from '@/lib/lane-definitions';
import { BOARD_STEP_WIDTH, BOARD_ADD_COLUMN_WIDTH, boardContentWidth, boardColumnGridStyle } from '@/lib/board-layout';
import { buildL1BoardLayout } from '@/lib/board-columns';
import {
  collectJourneyLaneTypes,
  collectPainPointStatuses,
  countHiddenJourneyLaneTypes,
  displayJourneyLaneCards,
  filterL1BoardLayout,
  intersectSubStepIdSets,
  isJourneyFilterLane,
  type JourneyFilterLaneKey,
  visibleSubStepIdsForJourneyFilters,
} from '@/lib/journey-lane-filter';
import { JourneyFilterLabel, isJourneyFilterLabelLane } from './JourneyFilterLabel';
import { L1UserJourneyRow } from './L1UserJourneyRow';
import {
  activeUserJourney,
  visibleSubStepIdsForUserJourney,
} from '@/lib/user-journey';
import {
  getStoryboardLevel,
  indexStoryboardImages,
  storyboardImagesForTarget,
  storyboardImagesAtLevel,
  type StoryboardAttachTarget,
  type StoryboardLevel,
} from '@/lib/storyboard-images';
import { StageBounds, stageColCount, stepDividerClass, STAGE_BOUNDARY_CLASS } from './StageBounds';
import { BoardAddColumnSpacer } from './BoardAddColumnSpacer';

const FRONTSTAGE_BOUNDARY_KEY = 'frontstage_touchpoint';
const NON_COLLAPSIBLE_LANE_KEYS = new Set<LaneKey>(['actor', 'system', 'user_need', 'pain_point']);

const STEP_WIDTH = BOARD_STEP_WIDTH;
const ADD_COLUMN_WIDTH = BOARD_ADD_COLUMN_WIDTH;
const MIN_HIERARCHY_ROW_H = 44; // shared min height for stage, step and sub-step header rows
const LOV_H = 28;             // line of visibility divider height
const COLLAPSED_LANE_H = 56;
/** Minimum height; row grows with stacked / tall storyboard images (ResizeObserver syncs left label). */
const STORYBOARD_ROW_H = 180;
const STORYBOARD_COMPACT_ROW_H = 88;
const HORIZONTAL_PAN_STEP = 120;
const VERTICAL_PAN_STEP = 96;

function isBoardInteractiveTarget(target: EventTarget | null) {
  const el =
    target instanceof Element ? target : target instanceof Text ? target.parentElement : null;
  if (!el) return false;
  return Boolean(
    el.closest(
      'button, input, textarea, select, a, [role="button"], [contenteditable="true"], [data-board-card], [data-no-pan]',
    ),
  );
}

/** Alternating monochrome bands: dark grey / white, then light grey / black */
const PHASE_MONO_STYLES = [
  { bg: '#3f3f46', border: '#52525b', text: '#fafafa' },
  { bg: '#7c7c7e', border: '#d4d4d8', text: '#f0f0f0' },
] as const;

function PhaseCell({ phase, width, stageIds, colorIndex, onSave }: {
  phase: string;
  width: number;
  stageIds: string[];
  colorIndex: number;
  onSave: (value: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(phase);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setDraft(phase); }, [phase]);
  useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);

  const commit = () => {
    const trimmed = draft.trim();
    if (trimmed !== phase) onSave(trimmed);
    setEditing(false);
  };

  const palette = phase ? PHASE_MONO_STYLES[colorIndex % PHASE_MONO_STYLES.length] : null;

  const sizeStyle = { width, minWidth: width } as const;

  if (editing) {
    return (
      <div
        className="box-border shrink-0 flex items-center border-b px-3"
        style={{
          ...sizeStyle,
          backgroundColor: palette?.bg ?? '#f5f5f5',
          borderBottomColor: palette?.border ?? '#d4d4d4',
          borderRightWidth: 1,
          borderRightColor: palette?.border ?? '#d4d4d4',
        }}
        data-no-pan
      >
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit();
            if (e.key === 'Escape') { setDraft(phase); setEditing(false); }
          }}
          className={cn(
            'w-full bg-transparent text-center text-xs font-semibold uppercase tracking-wider outline-none',
            colorIndex % 2 === 0 ? 'placeholder:text-neutral-400' : 'placeholder:text-neutral-500',
          )}
          style={{ color: palette?.text ?? '#525252' }}
          placeholder="Phase name"
        />
      </div>
    );
  }

  return (
    <div
      className="box-border flex shrink-0 cursor-pointer items-center justify-center border-b px-3 transition-colors"
      style={{
        ...sizeStyle,
        backgroundColor: palette?.bg ?? '#fafafa',
        borderBottomColor: palette?.border ?? '#e5e5e5',
        borderRightWidth: 1,
        borderRightColor: palette?.border ?? '#e5e5e5',
      }}
      onClick={() => setEditing(true)}
      title={phase || 'Click to set phase'}
    >
      {phase ? (
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: palette?.text }}
        >
          {phase}
        </span>
      ) : (
        <span className="text-[11px] font-medium tracking-wider text-neutral-300">
          + Phase
        </span>
      )}
    </div>
  );
}

export function Board() {
  const stages = useBlueprintStore((s) => s.stages);
  const steps = useBlueprintStore((s) => s.steps);
  const subSteps = useBlueprintStore((s) => s.subSteps ?? []);
  const addStage = useBlueprintStore((s) => s.addStage);
  const readOnly = useBlueprintStore((s) => s.readOnly);
  const updateStage = useBlueprintStore((s) => s.updateStage);
  const lanes = useBlueprintStore((s) => s.lanes);
  const cards = useBlueprintStore((s) => s.cards);
  const rootDocument = useBlueprintStore((s) => s.rootDocument);
  const activeBlueprintId = useBlueprintStore((s) => s.activeBlueprintId);
  const rootBlueprintId = useBlueprintStore((s) => s.rootBlueprintId);
  const moveCard = useBlueprintStore((s) => s.moveCard);
  const reorderCard = useBlueprintStore((s) => s.reorderCard);
  const toggleLaneCollapsed = useBlueprintStore((s) => s.toggleLaneCollapsed);
  const storyboardImages = useBlueprintStore((s) => s.storyboardImages);
  const storyboardVisible = useBlueprintStore((s) => s.storyboardVisible);
  const storyboardCollapsed = useBlueprintStore((s) => s.storyboardCollapsed);
  const descriptionRowVisible = useBlueprintStore((s) => s.descriptionRowVisible ?? true);
  const descriptionRowCollapsed = useBlueprintStore((s) => s.descriptionRowCollapsed ?? false);
  const subSubStepRowVisible = useBlueprintStore((s) => s.subSubStepRowVisible ?? true);
  const stepHeadersVisible = useBlueprintStore((s) => s.stepHeadersVisible ?? true);
  const subStepHeadersVisible = useBlueprintStore((s) => s.subStepHeadersVisible ?? true);
  const actorJourneyFilter = useBlueprintStore((s) => s.actorJourneyFilter ?? null);
  const setActorJourneyFilter = useBlueprintStore((s) => s.setActorJourneyFilter);
  const systemJourneyFilter = useBlueprintStore((s) => s.systemJourneyFilter ?? null);
  const setSystemJourneyFilter = useBlueprintStore((s) => s.setSystemJourneyFilter);
  const userNeedJourneyFilter = useBlueprintStore((s) => s.userNeedJourneyFilter ?? null);
  const setUserNeedJourneyFilter = useBlueprintStore((s) => s.setUserNeedJourneyFilter);
  const painPointJourneyFilter = useBlueprintStore((s) => s.painPointJourneyFilter ?? null);
  const setPainPointJourneyFilter = useBlueprintStore((s) => s.setPainPointJourneyFilter);
  const painPointRecords = useBlueprintStore((s) => s.painPointRecords ?? {});
  const userJourneys = useBlueprintStore((s) => s.userJourneys ?? []);
  const activeUserJourneyId = useBlueprintStore((s) => s.activeUserJourneyId ?? null);
  const descriptionVisibleInUserJourney = useBlueprintStore(
    (s) => s.descriptionVisibleInUserJourney ?? false,
  );
  const addStep = useBlueprintStore((s) => s.addStep);
  const addStoryboardImage = useBlueprintStore((s) => s.addStoryboardImage);
  const updateStoryboardImage = useBlueprintStore((s) => s.updateStoryboardImage);
  const removeStoryboardImage = useBlueprintStore((s) => s.removeStoryboardImage);
  const toggleStoryboardCollapsed = useBlueprintStore((s) => s.toggleStoryboardCollapsed);
  const selectCard = useBlueprintStore((s) => s.selectCard);

  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [panMode, setPanMode] = useState(false);
  const [storyboardUploadStageId, setStoryboardUploadStageId] = useState<string | null>(null);
  const [isPointerPanning, setIsPointerPanning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Heights measured from right panel, mirrored to left panel
  const [stageRowH, setStageRowH] = useState(MIN_HIERARCHY_ROW_H);
  const [stepHeaderRowH, setStepHeaderRowH] = useState(MIN_HIERARCHY_ROW_H);
  const [subStepHeaderRowH, setSubStepHeaderRowH] = useState(MIN_HIERARCHY_ROW_H);

  // Panel refs
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const boardRootRef = useRef<HTMLDivElement>(null);

  // Right-panel row refs for height measurement
  const rightStageRowRef = useRef<HTMLDivElement>(null);
  const rightDescriptionRowRef = useRef<HTMLDivElement>(null);
  const rightStepHeaderRowRef = useRef<HTMLDivElement>(null);
  const rightSubStepHeaderRowRef = useRef<HTMLDivElement>(null);
  const rightStoryboardRowRef = useRef<HTMLDivElement>(null);
  const leftStoryboardLabelRef = useRef<HTMLDivElement>(null);

  const rightLaneRowRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const leftLaneRowRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const pointerPanRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    startLeft: number;
    startTop: number;
  } | null>(null);

  const getRenderedHeight = useCallback((el: Element | null) => {
    if (!el) return 0;
    return Math.round(el.getBoundingClientRect().height);
  }, []);

  // Bidirectional vertical scroll sync (guard against infinite loops)
  const syncingRef = useRef(false);
  const handleRightScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    requestAnimationFrame(() => {
      if (leftPanelRef.current && rightPanelRef.current) {
        leftPanelRef.current.scrollTop = rightPanelRef.current.scrollTop;
      }
      syncingRef.current = false;
    });
  }, []);
  const handleLeftScroll = useCallback(() => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    requestAnimationFrame(() => {
      if (rightPanelRef.current && leftPanelRef.current) {
        rightPanelRef.current.scrollTop = leftPanelRef.current.scrollTop;
      }
      syncingRef.current = false;
    });
  }, []);

  // Measure description row height (mirrors to left "Description" label).
  // Depends on whether any stage has a description — when that flips from
  // false→true (e.g. navigating into L2 Macro) the effect re-runs so the
  // ResizeObserver attaches to the newly-rendered row.

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const sortedStages = useMemo(
    () => [...stages].sort((a, b) => a.order - b.order),
    [stages],
  );

  const stepsPerStage = useMemo(() => {
    const map = new Map<string, typeof steps>();
    for (const stage of sortedStages) {
      map.set(
        stage.id,
        [...steps.filter((s) => s.stageId === stage.id)].sort((a, b) => a.order - b.order),
      );
    }
    return map;
  }, [sortedStages, steps]);

  const isL1MacroMode = useMemo(
    () => lanes.some((l) => L1_MACRO_LANE_KEYS.has(l.key)),
    [lanes],
  );

  const visibleLanes = useMemo(
    () => lanes.filter((l) => l.visible).sort((a, b) => a.order - b.order),
    [lanes],
  );

  const isChildView = Boolean(
    rootDocument && activeBlueprintId !== rootBlueprintId,
  );
  const isL2Mode = false;
  const isL3Mode = false;
  /** Lifecycle boards: strong stage borders and faded step dividers in the header grid. */
  const showStageBounds = !isL2Mode && !isL3Mode;
  /** Stages → steps → sub-steps column tree (eCITES and other lifecycle blueprints). */
  const useThreeLayerLayout = showStageBounds;

  const effectiveVisibleLanes = useMemo(() => {
    // L3 (Micro) uses the canonical L3 lane order while respecting the user's
    // visibility toggles from the Lanes dropdown.
    if (isL3Mode) {
      return L3_LANE_KEYS
        .map((key) => lanes.find((l) => l.key === key) ?? DEFAULT_LANES.find((l) => l.key === key))
        .filter((lane): lane is NonNullable<typeof lane> => Boolean(lane))
        .filter((lane) => lane.visible);
    }
    // L2 (Macro) uses L2_LANE_KEYS (includes user_journey for nested L3 journeys)
    if (isL2Mode) {
      return L2_LANE_KEYS
        .map((key) => lanes.find((l) => l.key === key))
        .filter((lane): lane is NonNullable<typeof lane> => Boolean(lane))
        .filter((lane) => lane.visible);
    }
    return visibleLanes.filter((lane) => lane.key !== 'sub_sub_step');
  }, [isL2Mode, isL3Mode, lanes, visibleLanes]);

  const lineOfVisibilityIndex = useMemo(() => {
    if (isL2Mode || isL3Mode || isL1MacroMode) return -1;
    const idx = effectiveVisibleLanes.findIndex((l) => l.key === FRONTSTAGE_BOUNDARY_KEY);
    return idx >= 0 ? idx : -1;
  }, [effectiveVisibleLanes, isL2Mode, isL3Mode, isL1MacroMode]);


  const l1Layout = useMemo(
    () => (useThreeLayerLayout ? buildL1BoardLayout(sortedStages, steps, subSteps) : null),
    [useThreeLayerLayout, sortedStages, steps, subSteps],
  );

  const showStepHeaders = useMemo(
    () => {
      if (!stepHeadersVisible) return false;
      if (useThreeLayerLayout) return true;
      if (isL2Mode || isL3Mode) return false;

      return sortedStages.some((stage) => {
        const stageSteps = stepsPerStage.get(stage.id) || [];
        if (stageSteps.length === 0) return false;
        if (stageSteps.length !== 1) return true;
        const onlyStep = stageSteps[0];
        return Boolean(onlyStep && onlyStep.title.trim() !== stage.title.trim());
      });
    },
    [isL2Mode, isL3Mode, sortedStages, stepsPerStage, useThreeLayerLayout, stepHeadersVisible],
  );

  const showSubStepHeaders = useMemo(
    () => useThreeLayerLayout && subStepHeadersVisible && Boolean(l1Layout),
    [useThreeLayerLayout, subStepHeadersVisible, l1Layout],
  );

  const showSubSubStepRow = useMemo(
    () => showSubStepHeaders && subSubStepRowVisible,
    [showSubStepHeaders, subSubStepRowVisible],
  );

  /** When storyboard is collapsed, hide stages/steps/sub-sub-steps to save vertical space. */
  const storyboardHierarchyOpen = !storyboardVisible || !storyboardCollapsed;
  const showPhaseHeaderRow = isL1MacroMode && storyboardHierarchyOpen;
  const showStageHeaderRow = storyboardHierarchyOpen;
  const showStepHeadersInPanel = showStepHeaders && storyboardHierarchyOpen;
  const showSubSubStepRowInPanel = showSubSubStepRow && storyboardHierarchyOpen;

  useLayoutEffect(() => {
    const el = rightStageRowRef.current;
    if (!el || !showStageHeaderRow) return;
    const initialHeight = getRenderedHeight(el);
    if (initialHeight > 0) setStageRowH(initialHeight);
    const obs = new ResizeObserver(([entry]) => {
      const h = getRenderedHeight(entry.target);
      if (h > 0) setStageRowH((prev) => (Math.abs(prev - h) <= 1 ? prev : h));
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [getRenderedHeight, showStageHeaderRow]);

  const showJourneyLaneFilters = useThreeLayerLayout;

  const actorTypes = useMemo(
    () => collectJourneyLaneTypes(cards, l1Layout, 'actor'),
    [cards, l1Layout],
  );
  const systemTypes = useMemo(
    () => collectJourneyLaneTypes(cards, l1Layout, 'system'),
    [cards, l1Layout],
  );
  const userNeedTypes = useMemo(
    () => collectJourneyLaneTypes(cards, l1Layout, 'user_need'),
    [cards, l1Layout],
  );
  const painPointTypes = useMemo(
    () => collectPainPointStatuses(cards, painPointRecords),
    [cards, painPointRecords],
  );

  const journeyFilterLaneConfig = useMemo(
    (): Record<
      JourneyFilterLaneKey,
      { types: string[]; filter: string | null; setFilter: (filter: string | null) => void }
    > => ({
      actor: { types: actorTypes, filter: actorJourneyFilter, setFilter: setActorJourneyFilter },
      system: { types: systemTypes, filter: systemJourneyFilter, setFilter: setSystemJourneyFilter },
      user_need: { types: userNeedTypes, filter: userNeedJourneyFilter, setFilter: setUserNeedJourneyFilter },
      pain_point: { types: painPointTypes, filter: painPointJourneyFilter, setFilter: setPainPointJourneyFilter },
    }),
    [
      actorTypes,
      actorJourneyFilter,
      setActorJourneyFilter,
      systemTypes,
      systemJourneyFilter,
      setSystemJourneyFilter,
      userNeedTypes,
      userNeedJourneyFilter,
      setUserNeedJourneyFilter,
      painPointTypes,
      painPointJourneyFilter,
      setPainPointJourneyFilter,
    ],
  );

  const activeJourney = useMemo(
    () => activeUserJourney(userJourneys, activeUserJourneyId),
    [userJourneys, activeUserJourneyId],
  );

  const journeyColumnFilterIds = useMemo(() => {
    const sets: Set<string>[] = [];
    const userJourneyIds = visibleSubStepIdsForUserJourney(activeJourney);
    if (userJourneyIds) sets.push(userJourneyIds);
    const laneFilterIds = visibleSubStepIdsForJourneyFilters(cards, {
      actor: actorJourneyFilter,
      system: systemJourneyFilter,
      user_need: userNeedJourneyFilter,
      pain_point: painPointJourneyFilter,
    }, l1Layout, painPointRecords);
    if (laneFilterIds) sets.push(laneFilterIds);
    if (sets.length === 0) return null;
    return intersectSubStepIdSets(sets);
  }, [
    cards,
    actorJourneyFilter,
    systemJourneyFilter,
    userNeedJourneyFilter,
    painPointJourneyFilter,
    activeJourney,
    l1Layout,
    painPointRecords,
  ]);

  const displayL1Layout = useMemo(() => {
    if (!l1Layout || !journeyColumnFilterIds) return l1Layout;
    return filterL1BoardLayout(l1Layout, journeyColumnFilterIds);
  }, [l1Layout, journeyColumnFilterIds]);

  const boardStages = useMemo(() => {
    if (!showJourneyLaneFilters || !journeyColumnFilterIds || !displayL1Layout) return sortedStages;
    const visibleStageIds = new Set(displayL1Layout.stages.map((group) => group.stageId));
    return sortedStages.filter((stage) => visibleStageIds.has(stage.id));
  }, [sortedStages, displayL1Layout, journeyColumnFilterIds, showJourneyLaneFilters]);

  useEffect(() => {
    if (!showJourneyLaneFilters || actorJourneyFilter === null) return;
    if (!actorTypes.includes(actorJourneyFilter)) {
      setActorJourneyFilter(null);
    }
  }, [showJourneyLaneFilters, actorJourneyFilter, actorTypes, setActorJourneyFilter]);

  useEffect(() => {
    if (!showJourneyLaneFilters || systemJourneyFilter === null) return;
    if (!systemTypes.includes(systemJourneyFilter)) {
      setSystemJourneyFilter(null);
    }
  }, [showJourneyLaneFilters, systemJourneyFilter, systemTypes, setSystemJourneyFilter]);

  useEffect(() => {
    if (!showJourneyLaneFilters || userNeedJourneyFilter === null) return;
    if (!userNeedTypes.includes(userNeedJourneyFilter)) {
      setUserNeedJourneyFilter(null);
    }
  }, [showJourneyLaneFilters, userNeedJourneyFilter, userNeedTypes, setUserNeedJourneyFilter]);

  useEffect(() => {
    if (!showJourneyLaneFilters || painPointJourneyFilter === null) return;
    if (!painPointTypes.includes(painPointJourneyFilter)) {
      setPainPointJourneyFilter(null);
    }
  }, [showJourneyLaneFilters, painPointJourneyFilter, painPointTypes, setPainPointJourneyFilter]);

  const phaseGroups = useMemo(() => {
    if (!isL1MacroMode) return [];
    const layout = displayL1Layout ?? l1Layout;
    if (!layout) return [];
    const stageSpanById = new Map(layout.stages.map((group) => [group.stageId, group.span]));
    const groups: Array<{ phase: string; stageIds: string[]; colSpan: number }> = [];
    for (const stage of boardStages) {
      const phase = stage.phase ?? '';
      const colCount = stageSpanById.get(stage.id) ?? 1;
      const last = groups[groups.length - 1];
      if (last && last.phase === phase) {
        last.stageIds.push(stage.id);
        last.colSpan += colCount;
      } else {
        groups.push({ phase, stageIds: [stage.id], colSpan: colCount });
      }
    }
    return groups;
  }, [boardStages, displayL1Layout, l1Layout, isL1MacroMode]);

  /** One column per stage when both step and sub-step header rows are hidden. */
  const useStageOnlyColumns = useThreeLayerLayout && !stepHeadersVisible && !subStepHeadersVisible;

  /** One column per step when steps are shown but sub-steps are hidden. */
  const useStepOnlyColumns = useThreeLayerLayout && stepHeadersVisible && !subStepHeadersVisible;

  useLayoutEffect(() => {
    const el = rightStepHeaderRowRef.current;
    if (!el || !showStepHeadersInPanel) return;
    const initialHeight = getRenderedHeight(el);
    if (initialHeight > 0) setStepHeaderRowH(initialHeight);
    const obs = new ResizeObserver(([entry]) => {
      const h = getRenderedHeight(entry.target);
      if (h > 0) setStepHeaderRowH((prev) => (Math.abs(prev - h) <= 1 ? prev : h));
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [getRenderedHeight, showStepHeadersInPanel]);

  useLayoutEffect(() => {
    const el = rightSubStepHeaderRowRef.current;
    if (!el || !showSubStepHeaders) return;
    const initialHeight = getRenderedHeight(el);
    if (initialHeight > 0) setSubStepHeaderRowH(initialHeight);
    const obs = new ResizeObserver(([entry]) => {
      const h = getRenderedHeight(entry.target);
      if (h > 0) setSubStepHeaderRowH((prev) => (Math.abs(prev - h) <= 1 ? prev : h));
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [getRenderedHeight, showSubStepHeaders, subSteps, steps]);

  const cardsMap = useMemo(() => {
    const map = new Map<string, Card[]>();
    for (const card of cards) {
      const key = `${card.stepId}::${card.laneKey}`;
      const existing = map.get(key) || [];
      existing.push(card);
      map.set(key, existing);
    }
    for (const [, arr] of map) {
      arr.sort((a, b) => a.order - b.order);
    }
    return map;
  }, [cards]);

  const stepIdsByStage = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const step of steps) {
      const ids = map.get(step.stageId) ?? new Set<string>();
      ids.add(step.id);
      map.set(step.stageId, ids);
    }
    return map;
  }, [steps]);

  const journeyFilterForLane = useCallback(
    (laneKey: LaneKey): string | null => {
      if (!isJourneyFilterLane(laneKey)) return null;
      return journeyFilterLaneConfig[laneKey].filter;
    },
    [journeyFilterLaneConfig],
  );

  const journeyFilterOptionsForLane = useCallback(
    (laneKey: LaneKey) =>
      laneKey === 'pain_point'
        ? { laneKey, painPointRecords }
        : undefined,
    [painPointRecords],
  );

  const displayLaneCellCards = useCallback(
    (cellCards: Card[], laneKey: LaneKey): Card[] => {
      if (!isJourneyFilterLane(laneKey)) return cellCards;
      return displayJourneyLaneCards(
        cellCards,
        journeyFilterForLane(laneKey),
        journeyFilterOptionsForLane(laneKey),
      );
    },
    [journeyFilterForLane, journeyFilterOptionsForLane],
  );

  const hiddenJourneyTypesInCell = useCallback(
    (cellCards: Card[], laneKey: LaneKey): number => {
      if (!isJourneyFilterLane(laneKey)) return 0;
      const filter = journeyFilterForLane(laneKey);
      if (!filter) return 0;
      return countHiddenJourneyLaneTypes(
        cellCards,
        filter,
        journeyFilterOptionsForLane(laneKey),
      );
    },
    [journeyFilterForLane, journeyFilterOptionsForLane],
  );

  const getCardsForCell = useCallback(
    (stepId: string, laneKey: LaneKey): Card[] => {
      const cellCards = cardsMap.get(`${stepId}::${laneKey}`) || [];
      return displayLaneCellCards(cellCards, laneKey);
    },
    [cardsMap, displayLaneCellCards],
  );

  const subStepCardsMap = useMemo(() => {
    const map = new Map<string, Card[]>();
    for (const card of cards) {
      if (!card.subStepId) continue;
      const key = `${card.subStepId}::${card.laneKey}`;
      const existing = map.get(key) || [];
      existing.push(card);
      map.set(key, existing);
    }
    for (const [, arr] of map) {
      arr.sort((a, b) => a.order - b.order);
    }
    return map;
  }, [cards]);

  const subStepById = useMemo(
    () => new Map(subSteps.map((subStep) => [subStep.id, subStep])),
    [subSteps],
  );

  const getCardsForSubStepCell = useCallback(
    (subStepId: string, laneKey: LaneKey): Card[] => {
      const subStepCards = subStepCardsMap.get(`${subStepId}::${laneKey}`) || [];
      const subStep = subStepById.get(subStepId);
      const stepLevelCards = subStep
        ? cards.filter(
            (card) => card.stepId === subStep.stepId && !card.subStepId && card.laneKey === laneKey,
          )
        : [];
      const cellCards = [...subStepCards, ...stepLevelCards].sort((a, b) => a.order - b.order);
      return displayLaneCellCards(cellCards, laneKey);
    },
    [subStepCardsMap, subStepById, cards, displayLaneCellCards],
  );

  const getHiddenActorCountForSubStepCell = useCallback(
    (subStepId: string, laneKey: LaneKey): number => {
      const subStepCards = subStepCardsMap.get(`${subStepId}::${laneKey}`) || [];
      const subStep = subStepById.get(subStepId);
      const stepLevelCards = subStep
        ? cards.filter(
            (card) => card.stepId === subStep.stepId && !card.subStepId && card.laneKey === laneKey,
          )
        : [];
      const cellCards = [...subStepCards, ...stepLevelCards];
      return hiddenJourneyTypesInCell(cellCards, laneKey);
    },
    [subStepCardsMap, subStepById, cards, hiddenJourneyTypesInCell],
  );

  const getHiddenActorCountForCell = useCallback(
    (stepId: string, laneKey: LaneKey): number => {
      const cellCards = cardsMap.get(`${stepId}::${laneKey}`) || [];
      return hiddenJourneyTypesInCell(cellCards, laneKey);
    },
    [cardsMap, hiddenJourneyTypesInCell],
  );

  const getHiddenActorCountForStageCell = useCallback(
    (stageId: string, laneKey: LaneKey): number => {
      const stepIds = stepIdsByStage.get(stageId);
      if (!stepIds || stepIds.size === 0) return 0;
      const cellCards = cards.filter(
        (card) => stepIds.has(card.stepId) && card.laneKey === laneKey,
      );
      return hiddenJourneyTypesInCell(cellCards, laneKey);
    },
    [cards, stepIdsByStage, hiddenJourneyTypesInCell],
  );

  const getCardsForStageCell = useCallback(
    (stageId: string, laneKey: LaneKey): Card[] => {
      const stepIds = stepIdsByStage.get(stageId);
      if (!stepIds || stepIds.size === 0) return [];
      const cellCards = cards
        .filter((card) => stepIds.has(card.stepId) && card.laneKey === laneKey)
        .sort((a, b) => a.order - b.order);
      return displayLaneCellCards(cellCards, laneKey);
    },
    [cards, stepIdsByStage, displayLaneCellCards],
  );

  const storyboardLevel = useMemo(
    () => getStoryboardLevel(stepHeadersVisible, subStepHeadersVisible, useThreeLayerLayout),
    [stepHeadersVisible, subStepHeadersVisible, useThreeLayerLayout],
  );

  const showJourneyDescriptionRow =
    useThreeLayerLayout &&
    !activeJourney &&
    descriptionRowVisible;
  const showUserJourneyDescriptionRow =
    useThreeLayerLayout && Boolean(activeJourney);
  const showHierarchyDescriptionInJourney =
    useThreeLayerLayout &&
    Boolean(activeJourney) &&
    descriptionVisibleInUserJourney;
  const showJourneyContentRow =
    showUserJourneyDescriptionRow || showJourneyDescriptionRow || showHierarchyDescriptionInJourney;

  const showJourneyDescriptionRowForLayout = showJourneyDescriptionRow || showHierarchyDescriptionInJourney;
  const showJourneyContentRowInPanel = showJourneyContentRow && !storyboardCollapsed;

  // Sync storyboard label height: spans storyboard row plus description row on the right.
  useLayoutEffect(() => {
    const leftEl = leftStoryboardLabelRef.current;
    if (!leftEl || !storyboardVisible) return;
    const rightStoryboard = rightStoryboardRowRef.current;
    const rightDescription = rightDescriptionRowRef.current;
    const sync = () => {
      let h = rightStoryboard?.offsetHeight ?? (storyboardCollapsed ? STORYBOARD_COMPACT_ROW_H : STORYBOARD_ROW_H);
      if (showJourneyContentRowInPanel && rightDescription) {
        h += rightDescription.offsetHeight;
      }
      if (h > 0) leftEl.style.height = `${h}px`;
    };
    sync();
    const obs = new ResizeObserver(sync);
    if (rightStoryboard) obs.observe(rightStoryboard);
    if (showJourneyContentRowInPanel && rightDescription) obs.observe(rightDescription);
    return () => obs.disconnect();
  }, [
    storyboardVisible,
    storyboardCollapsed,
    showJourneyContentRowInPanel,
    descriptionRowCollapsed,
    storyboardLevel,
    boardStages,
    subSteps,
  ]);

  const storyboardImageIndex = useMemo(
    () => indexStoryboardImages(storyboardImages),
    [storyboardImages],
  );

  const getStoryboardImagesForStage = useCallback(
    (stageId: string) => storyboardImagesAtLevel(storyboardImageIndex, 'stage', stageId),
    [storyboardImageIndex],
  );

  /** L1/L2: at most one image per cell at the active storyboard level; L3: unlimited. */
  const addStoryboardImageIfAllowed = useCallback(
    (target: StoryboardAttachTarget, dataUrl: string) => {
      const targetLevel: StoryboardLevel = 'stageId' in target
        ? 'stage'
        : 'subStepId' in target
          ? 'subStep'
          : 'step';
      if (targetLevel !== storyboardLevel) return;

      const targetId = 'stageId' in target
        ? target.stageId
        : 'subStepId' in target
          ? target.subStepId
          : target.stepId;
      if (!isL3Mode) {
        const existing = storyboardImagesForTarget(storyboardImageIndex, storyboardLevel, targetId);
        if (existing.length >= 1) return;
      }
      addStoryboardImage(target, dataUrl);
    },
    [isL3Mode, storyboardImageIndex, storyboardLevel, addStoryboardImage],
  );

  const addStoryboardImageAtStage = useCallback(
    (stageId: string, dataUrl: string) => addStoryboardImageIfAllowed({ stageId }, dataUrl),
    [addStoryboardImageIfAllowed],
  );

  const addStoryboardImageAtStep = useCallback(
    (stepId: string, dataUrl: string) => addStoryboardImageIfAllowed({ stepId }, dataUrl),
    [addStoryboardImageIfAllowed],
  );

  const addStoryboardImageAtSubStep = useCallback(
    (subStepId: string, dataUrl: string) => addStoryboardImageIfAllowed({ subStepId }, dataUrl),
    [addStoryboardImageIfAllowed],
  );

  // Sync each lane label height imperatively to match the right panel row.
  // We avoid putting height in JSX style so React never overwrites our DOM changes.
  useLayoutEffect(() => {
    const rightMap = rightLaneRowRefs.current;
    const leftMap = leftLaneRowRefs.current;
    const cleanups: (() => void)[] = [];
    for (const [key, rightEl] of rightMap.entries()) {
      const leftEl = leftMap.get(key);
      if (!leftEl) continue;
      const sync = () => {
        const h = rightEl.offsetHeight;
        if (h > 0) leftEl.style.height = `${h}px`;
      };
      sync();
      const obs = new ResizeObserver(sync);
      obs.observe(rightEl);
      cleanups.push(() => obs.disconnect());
    }
    return () => cleanups.forEach((fn) => fn());
  }, [effectiveVisibleLanes, cards]);


  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === boardRootRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const card = cards.find((c) => c.id === event.active.id);
      if (card) setActiveCard(card);
    },
    [cards],
  );

  const handleDragOver = useCallback((_event: DragOverEvent) => {}, []);

  const focusBoardSurface = useCallback(() => {
    boardRootRef.current?.focus({ preventScroll: true });
  }, []);

  const handleBoardPointerDownCapture = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (isBoardInteractiveTarget(event.target)) return;
    focusBoardSurface();
    // Deselect card when clicking on the blank canvas
    if (!(event.target as HTMLElement).closest('[data-board-card], [data-no-select]')) {
      selectCard(null);
    }
  }, [focusBoardSurface, selectCard]);

  const handleBoardKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isBoardInteractiveTarget(event.target)) return;
    const panel = rightPanelRef.current;
    if (!panel) return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        panel.scrollBy({ left: -HORIZONTAL_PAN_STEP });
        break;
      case 'ArrowRight':
        event.preventDefault();
        panel.scrollBy({ left: HORIZONTAL_PAN_STEP });
        break;
      case 'ArrowUp':
        event.preventDefault();
        panel.scrollBy({ top: -VERTICAL_PAN_STEP });
        break;
      case 'ArrowDown':
        event.preventDefault();
        panel.scrollBy({ top: VERTICAL_PAN_STEP });
        break;
      case 'Home':
        event.preventDefault();
        panel.scrollTo({ left: 0, top: panel.scrollTop });
        break;
      case 'End':
        event.preventDefault();
        panel.scrollTo({ left: panel.scrollWidth, top: panel.scrollTop });
        break;
      case 'PageUp':
        event.preventDefault();
        panel.scrollBy({ top: -(panel.clientHeight * 0.8) });
        break;
      case 'PageDown':
        event.preventDefault();
        panel.scrollBy({ top: panel.clientHeight * 0.8 });
        break;
      default:
        break;
    }
  }, []);

  const handlePanPointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!panMode || isBoardInteractiveTarget(event.target)) return;

    const panel = rightPanelRef.current;
    if (!panel) return;

    pointerPanRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startLeft: panel.scrollLeft,
      startTop: panel.scrollTop,
    };
    setIsPointerPanning(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  }, [panMode]);

  const handlePanPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const drag = pointerPanRef.current;
    const panel = rightPanelRef.current;
    if (!drag || !panel || drag.pointerId !== event.pointerId) return;

    panel.scrollLeft = drag.startLeft - (event.clientX - drag.startX);
    panel.scrollTop = drag.startTop - (event.clientY - drag.startY);
  }, []);

  const stopPanPointer = useCallback((event?: React.PointerEvent<HTMLDivElement>) => {
    if (event && pointerPanRef.current && event.currentTarget.hasPointerCapture(pointerPanRef.current.pointerId)) {
      event.currentTarget.releasePointerCapture(pointerPanRef.current.pointerId);
    }
    pointerPanRef.current = null;
    setIsPointerPanning(false);
  }, []);

  const handleScrollToTop = useCallback(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;
    panel.scrollTo({ top: 0, behavior: 'smooth' });
    focusBoardSurface();
  }, [focusBoardSurface]);

  const toggleFullscreen = useCallback(async () => {
    const container = boardRootRef.current;
    if (!container) return;

    if (document.fullscreenElement === container) {
      await document.exitFullscreen();
      return;
    }

    await container.requestFullscreen();
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      setActiveCard(null);
      const { active, over } = event;
      if (!over) return;
      const activeCardId = active.id as string;
      const card = cards.find((c) => c.id === activeCardId);
      if (!card) return;
      const overData = over.data.current;
      if (overData?.type === 'cell') {
        const toStepId = overData.stepId as string;
        const toLaneKey = overData.laneKey as LaneKey;
        if (card.stepId === toStepId && card.laneKey === toLaneKey) return;
        moveCard(activeCardId, toStepId, toLaneKey, getCardsForCell(toStepId, toLaneKey).length);
      } else if (overData?.type === 'card') {
        const overCard = overData.card as Card;
        if (card.stepId === overCard.stepId && card.laneKey === overCard.laneKey) {
          const cellCards = getCardsForCell(card.stepId, card.laneKey);
          const overIdx = cellCards.findIndex((c) => c.id === overCard.id);
          if (overIdx !== -1) reorderCard(activeCardId, overIdx);
        } else {
          moveCard(activeCardId, overCard.stepId, overCard.laneKey, overCard.order);
        }
      }
    },
    [cards, getCardsForCell, moveCard, reorderCard],
  );

  // Reset scroll when the active blueprint changes.
  useEffect(() => {
    const rightPanel = rightPanelRef.current;
    const leftPanel = leftPanelRef.current;
    rightPanel?.scrollTo({ left: 0, top: 0 });
    if (leftPanel) leftPanel.scrollTop = 0;
    focusBoardSurface();
  }, [activeBlueprintId, focusBoardSurface]);

  if (sortedStages.length === 0) return null;

  if (boardStages.length === 0 && journeyColumnFilterIds && (showJourneyLaneFilters || activeJourney)) {
    return (
      <div className="flex flex-1 items-center justify-center bg-[#fafafa] p-8 text-center">
        <p className="max-w-md text-[14px] leading-relaxed text-neutral-600">
          {activeJourney
            ? `No columns match the ${activeJourney.name} journey with the current filters. Try clearing lane filters, or switch back to Lifecycle.`
            : 'No columns match the active lane filters. Clear filters from the Actors, Systems, User need or Pain points menus, or choose “All…”.'}
        </p>
      </div>
    );
  }

  const activeL1Layout = displayL1Layout ?? l1Layout;

  const stageDisplayColCount = (stageId: string) => {
    if (useStageOnlyColumns) return 1;
    if (useThreeLayerLayout) {
      const stageGroup = activeL1Layout?.stages.find((group) => group.stageId === stageId);
      if (!stageGroup) return 1;
      if (useStepOnlyColumns) return Math.max(stageGroup.steps.length, 1);
      return stageGroup.span;
    }
    return Math.max((stepsPerStage.get(stageId) || []).length, 1);
  };

  const totalStepColumns = useStageOnlyColumns
    ? boardStages.length
    : useThreeLayerLayout && activeL1Layout
      ? useStepOnlyColumns
        ? activeL1Layout.stages.reduce((sum, stage) => sum + Math.max(stage.steps.length, 1), 0)
        : activeL1Layout.stages.reduce((sum, stage) => sum + stage.span, 0)
      : boardStages.reduce((sum, stage) => {
          const stageSteps = stepsPerStage.get(stage.id) || [];
          return sum + Math.max(stageSteps.length, 1);
        }, 0);
  // Content width for the RIGHT panel only (no lane label column)
  const includeAddColumn = !readOnly;
  const contentWidth = boardContentWidth(totalStepColumns, includeAddColumn);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div
        ref={boardRootRef}
        id="board-main"
        tabIndex={0}
        role="region"
        aria-label="Service blueprint board"
        aria-describedby="board-keyboard-help"
        onPointerDownCapture={handleBoardPointerDownCapture}
        onKeyDown={handleBoardKeyDown}
        className="relative z-0 flex h-full min-h-0 w-full min-w-0 flex-1 overflow-hidden bg-[#fafafa] outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]"
      >
        <p id="board-keyboard-help" className="sr-only">
          Use the arrow keys to pan the board when this region is focused. Use Home and End to jump left and right, and Page Up and Page Down to move vertically.
        </p>

        {/* ── LEFT PANEL: frozen label column ──────────────────────────────── */}
        <div
          ref={leftPanelRef}
          onScroll={handleLeftScroll}
          className="flex w-[172px] shrink-0 flex-col overflow-y-scroll overflow-x-hidden border-r border-neutral-200 bg-[#fafafa] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Sticky header labels — heights mirror right panel header rows */}
          <div className="sticky top-0 z-30 bg-[#fafafa]">
            {isL1MacroMode && showPhaseHeaderRow && (
              <div
                className="flex items-center border-b border-neutral-200 bg-neutral-50 px-4"
                style={{ minHeight: 36 }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Phase
                </span>
              </div>
            )}
            {showStageHeaderRow && (
            <div
              className="flex items-center border-b border-neutral-200 px-4"
              style={{ height: stageRowH }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                {(isL2Mode || isL3Mode) ? 'Steps' : 'Stages'}
              </span>
            </div>
            )}

            {showStepHeadersInPanel && (
              <div
                className="flex items-center border-b border-neutral-200 px-4"
                style={{ height: stepHeaderRowH }}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Steps
                </span>
              </div>
            )}

            {showSubStepHeaders && (
              <div
                className="flex items-center border-b border-neutral-200 px-4"
                style={{ height: subStepHeaderRowH }}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Sub-steps
                </span>
              </div>
            )}

            {showSubSubStepRowInPanel && (
              <div
                className="flex items-center border-b border-neutral-200 px-4"
                style={{ height: subStepHeaderRowH }}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Sub-sub-steps
                </span>
              </div>
            )}

            {/* Storyboard label — row height mirrors right panel; toggle stays compact at top. */}
            {storyboardVisible && (
              <div
                ref={leftStoryboardLabelRef}
                className="group/storyboard flex items-start border-b border-neutral-200 px-3 py-3"
              >
                <div
                  className={cn(
                    'flex w-full items-center gap-2 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors',
                    storyboardCollapsed ? 'px-3 py-1.5' : 'px-3 py-2',
                  )}
                >
                  <Film aria-hidden="true" className="h-3.5 w-3.5 shrink-0 opacity-70" />
                  <span className="min-w-0 flex-1 text-[13px] font-semibold leading-tight tracking-tight">
                    {isL3Mode ? 'Screens' : 'Storyboard'}
                  </span>
                  <button
                    type="button"
                    onClick={toggleStoryboardCollapsed}
                    aria-label={`${
                      storyboardCollapsed ? 'Expand' : 'Collapse'
                    } ${isL3Mode ? 'Screens' : 'Storyboard'}`}
                    aria-expanded={!storyboardCollapsed}
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-transparent text-current/80 transition-colors hover:bg-white/60 hover:text-current focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {storyboardCollapsed ? (
                      <ChevronUp aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <ChevronDown aria-hidden="true" className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Lane labels — heights mirror right panel lane rows */}
          {effectiveVisibleLanes.map((lane, laneIdx) => {
            const isAfterVisibility =
              lineOfVisibilityIndex >= 0 && laneIdx === lineOfVisibilityIndex + 1;
            return (
              <div key={lane.key}>
                {isAfterVisibility && (
                  <div
                    className="flex items-center border-b border-t-2 border-t-neutral-400 bg-neutral-100 px-4"
                    style={{ height: LOV_H }}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                      Line of visibility
                    </span>
                  </div>
                )}
                <div
                  ref={(el) => {
                    if (el) leftLaneRowRefs.current.set(lane.key, el);
                    else leftLaneRowRefs.current.delete(lane.key);
                  }}
                  className={cn(
                    'flex border-b border-neutral-200 px-3 overflow-hidden',
                    NON_COLLAPSIBLE_LANE_KEYS.has(lane.key) || !lane.collapsed ? 'items-start py-3' : 'items-center py-2.5',
                  )}
                  style={{ minHeight: NON_COLLAPSIBLE_LANE_KEYS.has(lane.key) || !lane.collapsed ? 88 : COLLAPSED_LANE_H }}
                >
                  {isJourneyFilterLabelLane(lane.key) && showJourneyLaneFilters ? (
                    <JourneyFilterLabel
                      lane={lane}
                      collapsed={lane.collapsed}
                      filterTypes={journeyFilterLaneConfig[lane.key].types}
                      selectedFilter={journeyFilterLaneConfig[lane.key].filter}
                      onSelectFilter={journeyFilterLaneConfig[lane.key].setFilter}
                    />
                  ) : (
                    <LaneLabel
                      lane={lane}
                      collapsed={lane.collapsed}
                      onToggleCollapsed={() => toggleLaneCollapsed(lane.key)}
                      titleOverride={isL3Mode ? L3_LANE_TITLE_OVERRIDES[lane.key] : isL2Mode ? L2_LANE_TITLE_OVERRIDES[lane.key] : undefined}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── RIGHT PANEL: scrollable stage/step/cell content ──────────────── */}
        <div
          ref={rightPanelRef}
          onScroll={handleRightScroll}
          onPointerDown={handlePanPointerDown}
          onPointerMove={handlePanPointerMove}
          onPointerUp={stopPanPointer}
          onPointerCancel={stopPanPointer}
          className={cn(
            'min-w-0 flex-1 overflow-auto bg-[#fafafa]',
            panMode && 'cursor-grab',
            isPointerPanning && 'cursor-grabbing',
          )}
        >
          <div style={{ minWidth: contentWidth, width: contentWidth }}>

            {/* Sticky header content — z-40 so lane rows (e.g. journey cards z-20–30) scroll beneath */}
            <div className="sticky top-0 z-40 bg-white">

              {/* Phase grouping row (L1 Macro only) */}
              {showPhaseHeaderRow && phaseGroups.length > 0 && (() => {
                const distinctPhases = [...new Set(phaseGroups.map(pg => pg.phase).filter(Boolean))];
                const phaseColorMap = new Map(distinctPhases.map((p, i) => [p, i]));
                return (
                  <div style={{ ...boardColumnGridStyle(totalStepColumns, includeAddColumn), minHeight: 36 }}>
                    {phaseGroups.map((pg, idx) => (
                      <div
                        key={`${pg.stageIds[0]}-${idx}`}
                        style={{ gridColumn: `span ${pg.colSpan}` }}
                        className="min-w-0"
                      >
                        <PhaseCell
                          phase={pg.phase}
                          width={pg.colSpan * STEP_WIDTH}
                          stageIds={pg.stageIds}
                          colorIndex={phaseColorMap.get(pg.phase) ?? 0}
                          onSave={(value) => {
                            for (const stageId of pg.stageIds) {
                              updateStage(stageId, { phase: value });
                            }
                          }}
                        />
                      </div>
                    ))}
                    {includeAddColumn && <BoardAddColumnSpacer className="border-b border-neutral-200 bg-neutral-50" />}
                  </div>
                );
              })()}

              {/* Stage row */}
              {showStageHeaderRow && (
              <div
                ref={rightStageRowRef}
                className="group relative z-20"
                style={{ ...boardColumnGridStyle(totalStepColumns, includeAddColumn), height: stageRowH }}
              >
                {boardStages.map((stage) => {
                  const colCount = stageDisplayColCount(stage.id);
                  return (
                    <div
                      key={stage.id}
                      className={cn(STAGE_BOUNDARY_CLASS, 'flex h-full min-w-0 overflow-hidden border-b border-neutral-200 bg-white')}
                      style={{ gridColumn: `span ${colCount}` }}
                    >
                      <StageHeader
                        stage={stage}
                        stepCount={colCount}
                        stepWidth={STEP_WIDTH}
                        fillWidth
                        isChildLevel={isL2Mode || isL3Mode}
                        bounded={false}
                      />
                    </div>
                  );
                })}
                {includeAddColumn && (
                  <div
                    className="group/addstage relative border-b border-r border-neutral-200 bg-white transition-colors hover:bg-neutral-50/80"
                    style={{ width: ADD_COLUMN_WIDTH, minWidth: ADD_COLUMN_WIDTH, height: stageRowH }}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-0 top-full z-30 flex justify-center border-x border-b border-neutral-200 bg-white py-1.5 shadow-sm opacity-0 transition-opacity duration-150 group-hover/addstage:pointer-events-auto group-hover/addstage:opacity-100 group-focus-within/addstage:pointer-events-auto group-focus-within/addstage:opacity-100"
                      role="toolbar"
                      aria-label={(isL2Mode || isL3Mode) ? 'Add step' : 'Add stage'}
                    >
                      <button
                        type="button"
                        onClick={() => addStage((isL2Mode || isL3Mode) ? 'New step' : 'New stage')}
                        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        aria-label={(isL2Mode || isL3Mode) ? 'Add step' : 'Add stage'}
                      >
                        <Plus className="h-3.5 w-3.5" />
                        {(isL2Mode || isL3Mode) ? 'Add step' : 'Add stage'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              )}

              {showStepHeadersInPanel && useThreeLayerLayout && activeL1Layout && (
                <div ref={rightStepHeaderRowRef} style={{ height: stepHeaderRowH }}>
                  <L1StepHeaderRow
                    layout={activeL1Layout}
                    steps={steps}
                    oneColumnPerStep={useStepOnlyColumns}
                    rowHeight={stepHeaderRowH}
                    leafColumnCount={totalStepColumns}
                    includeAddColumn={includeAddColumn}
                  />
                </div>
              )}

              {showStepHeadersInPanel && !useThreeLayerLayout && (
                <div ref={rightStepHeaderRowRef} className="flex overflow-hidden border-b border-neutral-200 bg-white" style={{ height: stepHeaderRowH }}>
                  {sortedStages.map((stage) => {
                    const stageSteps = stepsPerStage.get(stage.id) || [];
                    const colCount = stageColCount(stageSteps.length);

                    const stepCells =
                      stageSteps.length === 0 ? (
                        <div className="shrink-0 bg-white" style={{ width: STEP_WIDTH, height: stepHeaderRowH }} />
                      ) : (
                        stageSteps.map((step, stepIdx) => (
                          <div
                            key={step.id}
                            className={cn('shrink-0 bg-white', stepDividerClass(stepIdx, stageSteps.length))}
                            style={{ width: STEP_WIDTH, height: stepHeaderRowH }}
                          >
                            <StepHeader
                              step={step}
                              stepWidth={STEP_WIDTH}
                              canMoveLeft={stepIdx > 0}
                              canMoveRight={stepIdx < stageSteps.length - 1}
                            />
                          </div>
                        ))
                      );

                    if (showStageBounds) {
                      return (
                        <StageBounds key={stage.id} colCount={colCount} className="bg-white" style={{ height: stepHeaderRowH }}>
                          {stepCells}
                        </StageBounds>
                      );
                    }

                    return (
                      <div key={stage.id} className="flex shrink-0">
                        {stepCells}
                      </div>
                    );
                  })}
                  <div
                    className="shrink-0 border-r border-neutral-200 bg-white"
                    style={{ width: 120, minWidth: 120 }}
                  />
                </div>
              )}

              {showSubStepHeaders && (
                <div ref={rightSubStepHeaderRowRef} style={{ height: subStepHeaderRowH }}>
                  <L1SubStepHeaderRow
                    layout={activeL1Layout!}
                    rowHeight={subStepHeaderRowH}
                    leafColumnCount={totalStepColumns}
                    includeAddColumn={includeAddColumn}
                  />
                </div>
              )}

              {showSubSubStepRowInPanel && activeL1Layout && (
                <div style={{ height: subStepHeaderRowH }}>
                  <L1SubSubStepRow
                    layout={activeL1Layout}
                    rowHeight={subStepHeaderRowH}
                    leafColumnCount={totalStepColumns}
                    includeAddColumn={includeAddColumn}
                    getCardsForSubStepCell={getCardsForSubStepCell}
                  />
                </div>
              )}

              {/* Storyboard row — image thumbnails per step */}
              {storyboardVisible && (
              <div
                ref={rightStoryboardRowRef}
                className={cn(
                  'border-b border-neutral-200',
                  storyboardCollapsed && 'bg-neutral-50/80',
                )}
                style={
                  storyboardCollapsed
                    ? { minHeight: STORYBOARD_COMPACT_ROW_H }
                    : { minHeight: STORYBOARD_ROW_H }
                }
              >
                {useStageOnlyColumns ? (
                  <L1StageOnlyStoryboardRow
                    stages={boardStages}
                    collapsed={storyboardCollapsed}
                    getStoryboardImagesForStage={getStoryboardImagesForStage}
                    onAddImageAtStage={addStoryboardImageAtStage}
                    onUpdateImage={updateStoryboardImage}
                    onRemoveImage={removeStoryboardImage}
                    leafColumnCount={totalStepColumns}
                    includeAddColumn={includeAddColumn}
                  />
                ) : useThreeLayerLayout && activeL1Layout ? (
                  <L1StoryboardRow
                    layout={activeL1Layout}
                    collapsed={storyboardCollapsed}
                    level={storyboardLevel}
                    stages={boardStages}
                    steps={steps}
                    subSteps={subSteps}
                    storyboardImagesByStep={storyboardImageIndex.byStep}
                    storyboardImagesBySubStep={storyboardImageIndex.bySubStep}
                    onUploadStageId={setStoryboardUploadStageId}
                    onAddImageAtStep={addStoryboardImageAtStep}
                    onAddImageAtSubStep={addStoryboardImageAtSubStep}
                    onUpdateImage={updateStoryboardImage}
                    onRemoveImage={removeStoryboardImage}
                    oneColumnPerStep={useStepOnlyColumns}
                    leafColumnCount={totalStepColumns}
                    includeAddColumn={includeAddColumn}
                  />
                ) : storyboardCollapsed
                  ? sortedStages.map((stage) => {
                      const stageSteps = stepsPerStage.get(stage.id) || [];
                      const colCount = stageColCount(stageSteps.length);
                      const stepById = new Map(steps.map((s) => [s.id, s]));

                      const cells =
                        stageSteps.length === 0 ? (
                          <div style={{ width: STEP_WIDTH, minHeight: STORYBOARD_COMPACT_ROW_H }} />
                        ) : (
                          stageSteps.map((step, stepIdx) => (
                            <div
                              key={step.id}
                              className={cn('shrink-0', stepDividerClass(stepIdx, stageSteps.length))}
                              style={{ width: STEP_WIDTH, minHeight: STORYBOARD_COMPACT_ROW_H }}
                            >
                              <StoryboardCompactCell
                                images={storyboardImageIndex.byStep.get(step.id) ?? []}
                                description={stepById.get(step.id)?.description}
                              />
                            </div>
                          ))
                        );

                      if (showStageBounds) {
                        return (
                          <StageBounds
                            key={stage.id}
                            colCount={colCount}
                            className="bg-white"
                            style={{ minHeight: STORYBOARD_COMPACT_ROW_H }}
                          >
                            {cells}
                          </StageBounds>
                        );
                      }

                      return (
                        <div key={stage.id} className="flex shrink-0">
                          {cells}
                        </div>
                      );
                    })
                  : sortedStages.map((stage) => {
                      const stageSteps = stepsPerStage.get(stage.id) || [];
                      const colCount = stageColCount(stageSteps.length);

                      const cells =
                        stageSteps.length === 0 ? (
                          <div
                            className="flex shrink-0 items-start p-2"
                            style={{ width: STEP_WIDTH, minHeight: STORYBOARD_ROW_H }}
                          >
                            <button
                              type="button"
                              onClick={() => setStoryboardUploadStageId(stage.id)}
                              className="flex min-h-24 w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-200 bg-white/60 p-2 text-center transition-colors hover:border-neutral-300 hover:bg-white"
                            >
                              <ImagePlus className="h-5 w-5 text-neutral-400" />
                              <span className="text-[11px] font-medium text-neutral-600">Add image / screen</span>
                            </button>
                          </div>
                        ) : (
                          stageSteps.map((step, stepIdx) => (
                            <div
                              key={step.id}
                              className={cn('shrink-0', stepDividerClass(stepIdx, stageSteps.length))}
                              style={{ width: STEP_WIDTH, minHeight: STORYBOARD_ROW_H }}
                            >
                              <StoryboardCell
                                stepId={step.id}
                                microPageOnly={isL3Mode}
                                allowMultipleImages={isL3Mode}
                                images={storyboardImageIndex.byStep.get(step.id) ?? []}
                                onAddImage={(dataUrl) => addStoryboardImageAtStep(step.id, dataUrl)}
                                onUpdateImage={updateStoryboardImage}
                                onRemoveImage={removeStoryboardImage}
                              />
                            </div>
                          ))
                        );

                      if (showStageBounds) {
                        return (
                          <StageBounds
                            key={stage.id}
                            colCount={colCount}
                            className="bg-white"
                            style={{ minHeight: STORYBOARD_ROW_H }}
                          >
                            {cells}
                          </StageBounds>
                        );
                      }

                      return (
                        <div key={stage.id} className="flex shrink-0">
                          {cells}
                        </div>
                      );
                    })}
              </div>
            )}

              {showJourneyContentRowInPanel && activeL1Layout && (
                <div
                  ref={rightDescriptionRowRef}
                  className={cn('flex flex-col', descriptionRowCollapsed && 'bg-neutral-50/80')}
                  style={descriptionRowCollapsed ? { height: COLLAPSED_LANE_H } : undefined}
                >
                  {!descriptionRowCollapsed && (
                    <>
                      {showUserJourneyDescriptionRow && activeJourney && (
                        <L1UserJourneyRow
                          journey={activeJourney}
                          layout={activeL1Layout}
                          leafColumnCount={totalStepColumns}
                          includeAddColumn={includeAddColumn}
                        />
                      )}
                      {showJourneyDescriptionRowForLayout && (
                        <L1JourneyDescriptionRow
                          level={storyboardLevel}
                          layout={activeL1Layout}
                          stages={boardStages}
                          steps={steps}
                          subSteps={subSteps}
                          oneColumnPerStep={useStepOnlyColumns}
                          stageOnly={useStageOnlyColumns}
                          leafColumnCount={totalStepColumns}
                          includeAddColumn={includeAddColumn && !showUserJourneyDescriptionRow}
                        />
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Lane rows — cells only, no label (label is in left panel). */}
            {effectiveVisibleLanes.map((lane, laneIdx) => {
              const isAfterVisibility =
                lineOfVisibilityIndex >= 0 && laneIdx === lineOfVisibilityIndex + 1;
              return (
                <div key={lane.key}>
                  {isAfterVisibility && (
                    <div
                      className="border-b border-t-2 border-t-neutral-400 bg-neutral-100"
                      style={{ height: LOV_H }}
                    />
                  )}
                  <div
                    ref={(el) => {
                      if (el) rightLaneRowRefs.current.set(lane.key, el);
                      else rightLaneRowRefs.current.delete(lane.key);
                    }}
                    className={cn(
                      'border-b border-neutral-200',
                      lane.collapsed && !NON_COLLAPSIBLE_LANE_KEYS.has(lane.key) && 'bg-neutral-50/80',
                    )}
                  >
                    {useStageOnlyColumns ? (
                      <L1StageOnlyLaneRow
                        stages={boardStages}
                        steps={steps}
                        subSteps={subSteps}
                        laneKey={lane.key}
                        collapsed={NON_COLLAPSIBLE_LANE_KEYS.has(lane.key) ? false : lane.collapsed}
                        getCardsForStageCell={getCardsForStageCell}
                        getHiddenActorCountForStageCell={getHiddenActorCountForStageCell}
                        leafColumnCount={totalStepColumns}
                        includeAddColumn={includeAddColumn}
                      />
                    ) : useThreeLayerLayout && activeL1Layout ? (
                      <L1LaneRow
                        layout={activeL1Layout}
                        laneKey={lane.key}
                        collapsed={NON_COLLAPSIBLE_LANE_KEYS.has(lane.key) ? false : lane.collapsed}
                        getCardsForSubStepCell={getCardsForSubStepCell}
                        getHiddenActorCountForSubStepCell={getHiddenActorCountForSubStepCell}
                        getHiddenActorCountForStepCell={getHiddenActorCountForCell}
                        oneColumnPerStep={useStepOnlyColumns}
                        subSteps={subSteps}
                        getCardsForStepCell={getCardsForCell}
                        leafColumnCount={totalStepColumns}
                        includeAddColumn={includeAddColumn}
                      />
                    ) : lane.collapsed
                      ? sortedStages.map((stage) => {
                          const stageSteps = stepsPerStage.get(stage.id) || [];
                          const colCount = stageColCount(stageSteps.length);

                          const cells =
                            stageSteps.length === 0 ? (
                              <div style={{ width: STEP_WIDTH, height: COLLAPSED_LANE_H }} />
                            ) : (
                              stageSteps.map((step, stepIdx) => {
                                const hiddenCards = getCardsForCell(step.id, lane.key).length;
                                return (
                                  <div
                                    key={step.id}
                                    className={cn(
                                      'flex shrink-0 items-center px-4',
                                      showStageBounds
                                        ? stepDividerClass(stepIdx, stageSteps.length)
                                        : 'border-r border-neutral-200',
                                    )}
                                    style={{ width: STEP_WIDTH, height: COLLAPSED_LANE_H }}
                                  >
                                    {hiddenCards > 0 ? (
                                      <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-500">
                                        {hiddenCards} hidden
                                      </span>
                                    ) : (
                                      <span className="text-[11px] text-neutral-300"> </span>
                                    )}
                                  </div>
                                );
                              })
                            );

                          if (showStageBounds) {
                            return (
                              <StageBounds
                                key={stage.id}
                                colCount={colCount}
                                className="bg-white"
                                style={{ height: COLLAPSED_LANE_H }}
                              >
                                {cells}
                              </StageBounds>
                            );
                          }

                          return (
                            <div key={stage.id} className="flex shrink-0" style={{ width: STEP_WIDTH * colCount }}>
                              {cells}
                            </div>
                          );
                        })
                      : sortedStages.map((stage) => {
                          const stageSteps = stepsPerStage.get(stage.id) || [];
                          const colCount = stageColCount(stageSteps.length);

                          const cells =
                            stageSteps.length === 0 ? (
                              <div
                                className="shrink-0 p-1"
                                style={{ width: STEP_WIDTH, minHeight: 88 }}
                              />
                            ) : (
                              stageSteps.map((step, stepIdx) => (
                                <div
                                  key={step.id}
                                  className={cn(
                                    'flex shrink-0 flex-col p-1',
                                    showStageBounds
                                      ? stepDividerClass(stepIdx, stageSteps.length)
                                      : 'border-r border-neutral-200',
                                  )}
                                  style={{ width: STEP_WIDTH, minHeight: 88 }}
                                >
                                  <CellArea
                                    stepId={step.id}
                                    laneKey={lane.key}
                                    cards={getCardsForCell(step.id, lane.key)}
                                  />
                                </div>
                              ))
                            );

                          if (showStageBounds) {
                            return (
                              <StageBounds key={stage.id} colCount={colCount} className="min-h-[88px] bg-white">
                                {cells}
                              </StageBounds>
                            );
                          }

                          return (
                            <div key={stage.id} className="flex shrink-0" style={{ width: STEP_WIDTH * colCount }}>
                              {cells}
                            </div>
                          );
                        })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CardDetailPanel />

        <div
          data-no-pan
          className="pointer-events-none absolute bottom-4 right-4 z-30"
        >
          <div className="pointer-events-auto flex items-stretch gap-0 rounded-2xl border border-neutral-200/90 bg-white/95 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur">
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    onClick={() => setPanMode((current) => !current)}
                    aria-label={panMode ? 'Disable pan mode' : 'Enable pan mode'}
                    aria-pressed={panMode}
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
                      panMode ? 'bg-blue-50 text-blue-700' : 'hover:bg-neutral-50',
                    )}
                  />
                }
              >
                <Hand aria-hidden="true" className="h-4.5 w-4.5" />
              </TooltipTrigger>
              <TooltipContent className="items-center text-center">{panMode ? 'Disable hand panning' : 'Enable hand panning'}</TooltipContent>
            </Tooltip>
            <div className="my-1 w-px self-stretch bg-neutral-200" />
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    onClick={handleScrollToTop}
                    aria-label="Scroll board to top"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  />
                }
              >
                <ArrowUp aria-hidden="true" className="h-4.5 w-4.5" />
              </TooltipTrigger>
              <TooltipContent className="items-center text-center">Scroll to top</TooltipContent>
            </Tooltip>
            <div className="my-1 w-px self-stretch bg-neutral-200" />
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    onClick={() => {
                      void toggleFullscreen();
                    }}
                    aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  />
                }
              >
                {isFullscreen ? (
                  <Minimize2 aria-hidden="true" className="h-4.5 w-4.5" />
                ) : (
                  <Maximize2 aria-hidden="true" className="h-4.5 w-4.5" />
                )}
              </TooltipTrigger>
              <TooltipContent className="items-center text-center">{isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      <DragOverlay dropAnimation={{ duration: 200, easing: 'ease' }}>
        {activeCard ? <BlueprintCard card={activeCard} isDragOverlay /> : null}
      </DragOverlay>

      <ImageCropModal
        open={storyboardUploadStageId !== null}
        onOpenChange={(open) => { if (!open) setStoryboardUploadStageId(null); }}
        onConfirm={(dataUrl) => {
          if (!storyboardUploadStageId) return;
          addStep(storyboardUploadStageId, 'New step');
          const step = useBlueprintStore.getState().steps.find(
            (s) => s.stageId === storyboardUploadStageId,
          );
          if (step) addStoryboardImage({ stepId: step.id }, dataUrl);
          setStoryboardUploadStageId(null);
        }}
        defaultFormat="page"
        lockFormat="page"
      />
    </DndContext>
  );
}
