'use client';

import type { UserJourneyColumnContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface JourneyStoryCellProps {
  content: UserJourneyColumnContent | undefined;
  className?: string;
}

export function JourneyStoryCell({ content, className }: JourneyStoryCellProps) {
  const storyTitle = content?.storyTitle?.trim();
  const narrative = content?.narrative?.trim();
  const detail = content?.detail?.trim();

  if (!storyTitle && !narrative && !detail) {
    return <div className={cn('min-h-[52px] flex-1 p-1.5', className)} aria-hidden="true" />;
  }

  return (
    <div className={cn('flex min-h-[52px] flex-1 flex-col gap-2 p-1.5', className)}>
      {storyTitle && (
        <p className="text-[13px] font-semibold leading-snug text-neutral-800">{storyTitle}</p>
      )}
      {narrative && (
        <p className="whitespace-pre-wrap text-[12px] italic leading-snug text-neutral-600">
          {narrative}
        </p>
      )}
      {detail && (
        <p className="whitespace-pre-wrap text-[12px] leading-snug text-neutral-600">{detail}</p>
      )}
    </div>
  );
}
