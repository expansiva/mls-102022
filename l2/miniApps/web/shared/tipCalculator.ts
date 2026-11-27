/// <mls fileReference="_102022_/l2/miniApps/web/shared/tipCalculator.ts" enhancement="_blank" />

export type Rounding = 'none' | 'up' | 'down' | 'nearest';

export const TIP_PRESETS = [10, 15, 20] as const;

export interface TipInput {
  bill: number;
  tipPercent: number;
  people: number;
  rounding: Rounding;
}

export interface TipResult {
  tipTotal: number;
  total: number;
  tipPerPerson: number;
  /** Total per person, after the chosen rounding. */
  perPerson: number;
}

function finite(value: number): number {
  return Number.isFinite(value) ? value : 0;
}

export function roundAmount(value: number, rounding: Rounding): number {
  if (rounding === 'up') return Math.ceil(value);
  if (rounding === 'down') return Math.floor(value);
  if (rounding === 'nearest') return Math.round(value);
  return value;
}

export function computeTip(input: TipInput): TipResult {
  const bill = Math.max(0, finite(input.bill));
  const tipPercent = Math.max(0, finite(input.tipPercent));
  const people = Math.max(1, Math.floor(finite(input.people)));
  const tipTotal = (bill * tipPercent) / 100;
  const total = bill + tipTotal;
  return {
    tipTotal,
    total,
    tipPerPerson: tipTotal / people,
    perPerson: roundAmount(total / people, input.rounding),
  };
}
