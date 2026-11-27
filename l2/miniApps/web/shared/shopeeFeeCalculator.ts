/// <mls fileReference="_102022_/l2/miniApps/web/shared/shopeeFeeCalculator.ts" enhancement="_blank" />
import { toCsv } from '/_102022_/l2/miniApps/web/shared/csv.js';

export const DEFAULT_COMMISSION_PERCENT = 12;
export const DEFAULT_PAYMENT_FEE_PERCENT = 2.5;
export const HISTORY_LIMIT = 200;

export interface SaleInput {
  price: number;
  cost: number;
  freight: number;
  discount: number;
  commissionPercent: number;
  paymentFeePercent: number;
}

export interface FeeResult {
  commission: number;
  paymentFee: number;
  totalFees: number;
  totalCost: number; // cost + freight + fees
  profit: number; // price - discount - cost - freight - fees
  margin: number; // profit / price, in %
}

export interface HistoryEntry extends SaleInput, Pick<FeeResult, 'totalFees' | 'profit' | 'margin'> {
  date: string; // ISO
}

const nonNegative = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);
const cents = (n: number) => Math.round(n * 100) / 100;

/** Marketplace fees are charged on the listed price; the discount only reduces what you receive. */
export function computeFees(input: SaleInput): FeeResult {
  const price = nonNegative(input.price);
  const cost = nonNegative(input.cost);
  const freight = nonNegative(input.freight);
  const discount = nonNegative(input.discount);
  const commission = price * (nonNegative(input.commissionPercent) / 100);
  const paymentFee = price * (nonNegative(input.paymentFeePercent) / 100);
  const totalFees = commission + paymentFee;
  const profit = price - discount - cost - freight - totalFees;
  return {
    commission: cents(commission),
    paymentFee: cents(paymentFee),
    totalFees: cents(totalFees),
    totalCost: cents(cost + freight + totalFees),
    profit: cents(profit),
    margin: price > 0 ? cents((profit / price) * 100) : 0,
  };
}

export function addToHistory(history: HistoryEntry[], input: SaleInput, now: Date): HistoryEntry[] {
  const r = computeFees(input);
  const entry: HistoryEntry = { date: now.toISOString(), ...input, totalFees: r.totalFees, profit: r.profit, margin: r.margin };
  return [entry, ...history].slice(0, HISTORY_LIMIT);
}

/** Keeps only well-formed entries, so a damaged saved history never breaks the page. */
export function readHistory(raw: string | null): HistoryEntry[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data)
      ? data.filter((e) => e && typeof e.date === 'string' && typeof e.price === 'number').slice(0, HISTORY_LIMIT)
      : [];
  } catch {
    return [];
  }
}

const CSV_FIELDS = ['date', 'price', 'cost', 'freight', 'discount', 'commissionPercent', 'paymentFeePercent', 'totalFees', 'profit', 'margin'] as const;

export function historyToCsv(history: HistoryEntry[]): string {
  return toCsv([...CSV_FIELDS], history.map((e) => CSV_FIELDS.map((f) => e[f])));
}
