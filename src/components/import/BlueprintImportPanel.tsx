'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { useBlueprintStore } from '@/store/blueprint-store';
import {
  parseBlueprintBackupJson,
  parseStoryboardImagesZip,
} from '@/lib/import-storyboard-images';
import { parseJiraIssueFile } from '@/lib/jira-issue-import';
import { cn } from '@/lib/utils';

interface BlueprintImportPanelProps {
  onImportSpreadsheet?: () => void;
  /** Called after a successful import when a parent dialog should close. */
  onImportComplete?: () => void;
  className?: string;
  readOnly?: boolean;
}

const importOptionClassName =
  'flex min-h-24 flex-col items-start justify-between rounded-lg border border-neutral-200 bg-white p-4 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50';

export function BlueprintImportPanel({
  onImportSpreadsheet,
  onImportComplete,
  className,
  readOnly = false,
}: BlueprintImportPanelProps) {
  const loadBlueprint = useBlueprintStore((s) => s.loadBlueprint);
  const importStoryboardImages = useBlueprintStore((s) => s.importStoryboardImages);
  const importJiraIssueMetadata = useBlueprintStore((s) => s.importJiraIssueMetadata);

  const [notice, setNotice] = useState('');
  const storyboardImportRef = useRef<HTMLInputElement>(null);
  const backupImportRef = useRef<HTMLInputElement>(null);
  const jiraIssueImportRef = useRef<HTMLInputElement>(null);

  const finishImport = () => {
    setNotice('');
    onImportComplete?.();
  };

  const handleStoryboardImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setNotice('');
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    try {
      const items = await parseStoryboardImagesZip(file);
      const result = importStoryboardImages(items);
      if (result.applied === 0) {
        setNotice('No storyboard images could be matched to this blueprint.');
        return;
      }
      const unmatchedNote =
        result.unmatched.length > 0
          ? ` ${result.unmatched.length} image${result.unmatched.length === 1 ? '' : 's'} could not be matched.`
          : '';
      setNotice(`Imported ${result.applied} storyboard image${result.applied === 1 ? '' : 's'}.${unmatchedNote}`);
      if (result.unmatched.length === 0) {
        finishImport();
      }
    } catch (err) {
      setNotice(err instanceof Error ? err.message : 'Could not import storyboard images.');
    }
  };

  const handleBackupImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setNotice('');
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    try {
      const text = await file.text();
      const backup = parseBlueprintBackupJson(text);
      loadBlueprint(backup);
      setNotice('Blueprint backup imported.');
      finishImport();
    } catch (err) {
      setNotice(err instanceof Error ? err.message : 'Could not import blueprint backup.');
    }
  };

  const handleJiraIssueImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setNotice('');
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    try {
      const result = await parseJiraIssueFile(file);
      if (result.errors.length > 0) {
        setNotice(result.errors[0] ?? 'Could not import Jira issue metadata.');
        return;
      }
      if (result.imported === 0) {
        setNotice('No issue rows found in this file.');
        return;
      }
      importJiraIssueMetadata(result);
      const parts: string[] = [];
      const painCount = Object.keys(result.painPointRecords).length;
      const needCount = Object.keys(result.userNeedRecords).length;
      const storyCount = Object.keys(result.userStoryRecords).length;
      const otherCount = Object.keys(result.jiraIssueRecords).length;
      if (painCount > 0) {
        parts.push(`${painCount} pain point${painCount === 1 ? '' : 's'}`);
      }
      if (needCount > 0) {
        parts.push(`${needCount} user need${needCount === 1 ? '' : 's'}`);
      }
      if (storyCount > 0) {
        parts.push(`${storyCount} user stor${storyCount === 1 ? 'y' : 'ies'}`);
      }
      if (otherCount > 0) {
        parts.push(`${otherCount} other issue${otherCount === 1 ? '' : 's'}`);
      }
      setNotice(`Imported ${parts.join(', ')}.`);
      finishImport();
    } catch (err) {
      setNotice(err instanceof Error ? err.message : 'Could not import Jira issue metadata.');
    }
  };

  const handleImportSpreadsheet = () => {
    setNotice('');
    onImportComplete?.();
    onImportSpreadsheet?.();
  };

  if (readOnly) {
    return (
      <p className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
        Import is not available on read-only shared links. Open the main app to import files.
      </p>
    );
  }

  return (
    <div className={cn('grid gap-2', className)}>
      {notice ? (
        <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          {notice}
        </p>
      ) : null}
      <input
        ref={storyboardImportRef}
        type="file"
        accept=".zip,application/zip"
        className="hidden"
        onChange={handleStoryboardImportFile}
      />
      <input
        ref={backupImportRef}
        type="file"
        accept=".json,application/json"
        className="hidden"
        onChange={handleBackupImportFile}
      />
      <input
        ref={jiraIssueImportRef}
        type="file"
        accept=".csv,.xlsx,.xls,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
        className="hidden"
        onChange={handleJiraIssueImportFile}
      />
      <button
        type="button"
        onClick={() => storyboardImportRef.current?.click()}
        className={importOptionClassName}
      >
        <span className="text-sm font-semibold text-neutral-900">Storyboard images (zip)</span>
        <span className="text-xs leading-5 text-neutral-500">
          Reattach pictures exported from another browser or machine.
        </span>
      </button>
      <button
        type="button"
        onClick={handleImportSpreadsheet}
        disabled={!onImportSpreadsheet}
        className={importOptionClassName}
      >
        <span className="text-sm font-semibold text-neutral-900">Master service details</span>
        <span className="text-xs leading-5 text-neutral-500">
          Import stages, steps, lanes and card content from Excel or CSV.
        </span>
      </button>
      <button
        type="button"
        onClick={() => jiraIssueImportRef.current?.click()}
        className={importOptionClassName}
      >
        <span className="text-sm font-semibold text-neutral-900">Jira issue metadata</span>
        <span className="text-xs leading-5 text-neutral-500">
          Import summary, status and description from a Jira CSV or Excel export.
        </span>
      </button>
      <button
        type="button"
        onClick={() => backupImportRef.current?.click()}
        className={importOptionClassName}
      >
        <span className="text-sm font-semibold text-neutral-900">Full backup (JSON)</span>
        <span className="text-xs leading-5 text-neutral-500">
          Load a complete blueprint backup, including storyboard images.
        </span>
      </button>
    </div>
  );
}
