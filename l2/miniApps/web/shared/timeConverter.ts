/// <mls fileReference="_102022_/l2/miniApps/web/shared/timeConverter.ts" enhancement="_blank" />

export type TimeUnit = 'hours' | 'minutes' | 'seconds';

const SECONDS_PER: Record<TimeUnit, number> = { hours: 3600, minutes: 60, seconds: 1 };

/**
 * Reads a duration as seconds. Accepts `h:mm:ss`, `mm:ss` or a plain number in `unit`
 * (`1.5` or `1,5`). Empty or invalid text gives null; negative values are refused.
 */
export function parseToSeconds(text: string, unit: TimeUnit): number | null {
  const t = text.trim();
  if (t === '') return null;
  const clock = /^(\d+):(\d{1,2})(?::(\d{1,2}))?$/.exec(t);
  if (clock) {
    const [a, b, c] = clock.slice(1).map((p) => (p === undefined ? undefined : Number(p)));
    if (c === undefined) return b! < 60 ? a! * 60 + b! : null; // mm:ss
    return b! < 60 && c < 60 ? a! * 3600 + b! * 60 + c : null; // h:mm:ss
  }
  if (!/^\d*[.,]?\d+$/.test(t)) return null;
  return Math.round(Number(t.replace(',', '.')) * SECONDS_PER[unit]);
}

export function secondsTo(seconds: number, unit: TimeUnit): number {
  return seconds / SECONDS_PER[unit];
}

/** `h:mm:ss`, hours not capped at 24. */
export function formatClock(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
