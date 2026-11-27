/// <mls fileReference="_102022_/l2/miniApps/web/shared/ui.ts" enhancement="_blank" />
// Pieces every mini app page repeats: token-based classes and number helpers.

export const fieldClass = 'w-full rounded-md border border-[var(--border-default,currentColor)] bg-[var(--input-bg,transparent)] px-3 py-2 text-[var(--text-default,currentColor)] focus:outline-2 focus:outline-[var(--focus-ring,currentColor)]';
export const labelClass = 'mb-1 block text-sm font-medium text-[var(--text-default,currentColor)]';
export const cardClass = 'rounded-lg border border-[var(--border-default,currentColor)] bg-[var(--surface-bg,transparent)] p-6';
export const panelClass = 'rounded-md border border-[var(--border-subtle,currentColor)] bg-[var(--surface-alt-bg,transparent)] p-4';
export const primaryButtonClass = 'rounded-md border border-transparent bg-[var(--button-primary-bg,currentColor)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,canvas)] focus:outline-2 focus:outline-[var(--focus-ring,currentColor)] disabled:opacity-50';
export const secondaryButtonClass = 'rounded-md border border-[var(--button-secondary-border,currentColor)] bg-[var(--button-secondary-bg,transparent)] px-3 py-2 text-sm font-medium text-[var(--button-secondary-text,currentColor)] focus:outline-2 focus:outline-[var(--focus-ring,currentColor)] disabled:opacity-50';

export function fmtAmount(value: number): string {
  return new Intl.NumberFormat(document.documentElement.lang || undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function fmtNumber(value: number, maxDecimals = 4): string {
  return new Intl.NumberFormat(document.documentElement.lang || undefined, {
    maximumFractionDigits: maxDecimals,
  }).format(value);
}

/** Hands the text to the browser as a file download. */
export function downloadText(filename: string, text: string, type = 'text/csv;charset=utf-8'): void {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/** Value of a number input; empty or invalid reads as 0. */
export function numberOf(e: Event): number {
  const value = (e.target as HTMLInputElement).valueAsNumber;
  return Number.isFinite(value) ? value : 0;
}
