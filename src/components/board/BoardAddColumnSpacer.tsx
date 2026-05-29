import { BOARD_ADD_COLUMN_WIDTH } from '@/lib/board-layout';

/** Empty trailing column aligned with the “Add stage” header cell. */
export function BoardAddColumnSpacer({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`box-border shrink-0 border-r border-neutral-200 bg-white ${className}`.trim()}
      style={{ width: BOARD_ADD_COLUMN_WIDTH, minWidth: BOARD_ADD_COLUMN_WIDTH }}
    />
  );
}
