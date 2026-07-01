'use client';

import { Layers } from 'lucide-react';
import { BlueprintImportPanel } from '@/components/import/BlueprintImportPanel';

interface EmptyStateProps {
  onImportSpreadsheet?: () => void;
}

export function EmptyState({ onImportSpreadsheet }: EmptyStateProps) {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#fafafa] px-4 py-10">
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100">
            <Layers className="h-8 w-8 text-neutral-400" />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-neutral-800">Start a new blueprint</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-500">
              Import your master service spreadsheet, Jira exports, or a full backup to get started.
              You can also use Import in the top-right menu at any time.
            </p>
          </div>
        </div>
        <BlueprintImportPanel onImportSpreadsheet={onImportSpreadsheet} className="w-full" />
      </div>
    </div>
  );
}
