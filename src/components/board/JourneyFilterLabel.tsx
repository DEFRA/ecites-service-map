'use client';

import { User, Database, Heart, AlertTriangle, ChevronDown, Check } from 'lucide-react';
import { type LaneDefinition, type LaneKey } from '@/lib/types';
import { getLaneTitle } from '@/lib/lane-definitions';
import { type JourneyFilterLaneKey, isJourneyFilterLane } from '@/lib/journey-lane-filter';
import { LANE_COLOR_TOKENS } from '@/components/board/LaneLabel';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<JourneyFilterLaneKey, React.ElementType> = {
  actor: User,
  system: Database,
  user_need: Heart,
  pain_point: AlertTriangle,
};

const ALL_LABEL: Record<JourneyFilterLaneKey, string> = {
  actor: 'All actors',
  system: 'All systems',
  user_need: 'All user needs',
  pain_point: 'All statuses',
};

const FOCUS_RING: Record<JourneyFilterLaneKey, string> = {
  actor: 'focus-visible:ring-blue-400',
  system: 'focus-visible:ring-cyan-400',
  user_need: 'focus-visible:ring-amber-400',
  pain_point: 'focus-visible:ring-rose-400',
};

interface JourneyFilterLabelProps {
  lane: LaneDefinition;
  collapsed?: boolean;
  filterTypes: string[];
  selectedFilter: string | null;
  onSelectFilter: (filter: string | null) => void;
  className?: string;
}

export function JourneyFilterLabel({
  lane,
  collapsed = false,
  filterTypes,
  selectedFilter,
  onSelectFilter,
  className,
}: JourneyFilterLabelProps) {
  const laneKey = lane.key as JourneyFilterLaneKey;
  const laneTitle = getLaneTitle(lane.key);
  const token = LANE_COLOR_TOKENS[lane.key] ?? LANE_COLOR_TOKENS.actor;
  const Icon = ICON_MAP[laneKey] ?? User;
  const menuLabel = selectedFilter ?? ALL_LABEL[laneKey];

  return (
    <div
      className={cn(
        'flex w-full items-center gap-2 overflow-hidden rounded-xl border transition-colors',
        collapsed ? 'px-3 py-1.5' : 'px-3 py-2',
        token.bg,
        token.text,
        token.border,
        className,
      )}
    >
      <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 opacity-70" />
      <span className="min-w-0 flex-1 text-[13px] font-semibold leading-tight tracking-tight">
        {laneTitle}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-transparent text-current/90 transition-colors hover:bg-white/60 focus:outline-none focus-visible:ring-2',
            FOCUS_RING[laneKey],
          )}
          aria-label={`Filter journey by ${laneTitle.toLowerCase()}. Current selection: ${menuLabel}`}
        >
          <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 opacity-80" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[12rem]">
          <DropdownMenuItem onClick={() => onSelectFilter(null)}>
            <span className="flex flex-1 items-center justify-between gap-2">
              {ALL_LABEL[laneKey]}
              {selectedFilter === null && <Check aria-hidden="true" className="h-3.5 w-3.5" />}
            </span>
          </DropdownMenuItem>
          {filterTypes.map((item) => (
            <DropdownMenuItem key={item} onClick={() => onSelectFilter(item)}>
              <span className="flex flex-1 items-center justify-between gap-2">
                <span className="truncate">{item}</span>
                {selectedFilter === item && <Check aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function isJourneyFilterLabelLane(laneKey: LaneKey): laneKey is JourneyFilterLaneKey {
  return isJourneyFilterLane(laneKey);
}
