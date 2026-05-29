'use client';

import { User, ChevronDown, Check } from 'lucide-react';
import { type LaneDefinition } from '@/lib/types';
import { getLaneTitle } from '@/lib/lane-definitions';
import { LANE_COLOR_TOKENS } from '@/components/board/LaneLabel';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const ACTOR_TOKEN = LANE_COLOR_TOKENS.actor ?? {
  bg: 'bg-blue-50',
  text: 'text-blue-700',
  border: 'border-blue-200',
};

interface ActorJourneyFilterLabelProps {
  lane: LaneDefinition;
  collapsed?: boolean;
  actorTypes: string[];
  selectedFilter: string | null;
  onSelectFilter: (filter: string | null) => void;
  className?: string;
}

export function ActorJourneyFilterLabel({
  lane,
  collapsed = false,
  actorTypes,
  selectedFilter,
  onSelectFilter,
  className,
}: ActorJourneyFilterLabelProps) {
  const laneTitle = getLaneTitle(lane.key);
  const menuLabel = selectedFilter ?? 'All actors';

  return (
    <div
      className={cn(
        'flex w-full items-center gap-2 overflow-hidden rounded-xl border transition-colors',
        collapsed ? 'px-3 py-1.5' : 'px-3 py-2',
        ACTOR_TOKEN.bg,
        ACTOR_TOKEN.text,
        ACTOR_TOKEN.border,
        className,
      )}
    >
      <User aria-hidden="true" className="h-3.5 w-3.5 shrink-0 opacity-70" />
      <span className="min-w-0 flex-1 text-[13px] font-semibold leading-tight tracking-tight">
        {laneTitle}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-transparent text-current/90 transition-colors hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={`Filter journey by actor. Current selection: ${menuLabel}`}
        >
          <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 opacity-80" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[12rem]">
          <DropdownMenuItem onClick={() => onSelectFilter(null)}>
            <span className="flex flex-1 items-center justify-between gap-2">
              All actors
              {selectedFilter === null && <Check aria-hidden="true" className="h-3.5 w-3.5" />}
            </span>
          </DropdownMenuItem>
          {actorTypes.map((actor) => (
            <DropdownMenuItem key={actor} onClick={() => onSelectFilter(actor)}>
              <span className="flex flex-1 items-center justify-between gap-2">
                <span className="truncate">{actor}</span>
                {selectedFilter === actor && <Check aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
