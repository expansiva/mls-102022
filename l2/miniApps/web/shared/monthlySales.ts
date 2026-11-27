/// <mls fileReference="_102022_/l2/miniApps/web/shared/monthlySales.ts" enhancement="_blank" />
import { parseCsv, toCsv } from '/_102022_/l2/miniApps/web/shared/csv.js';

export interface SaleRow {
  date: string; // YYYY-MM-DD
  order: string;
  customer: string;
  product: string;
  quantity: number;
  amount: number;
  status: string;
}

export type RowProblem = 'badDate' | 'badAmount';

export interface ParsedSales {
  rows: SaleRow[];
  missingColumns: Array<'date' | 'amount'>;
  problems: Array<{ row: number; problem: RowProblem }>; // row = 1-based data row
}

export interface SalesSummary {
  total: number;
  orders: number;
  averageTicket: number;
}

export interface SalesFilter {
  month: string; // 'YYYY-MM' or '' for all
  status: string; // '' for all
  query: string;
}

export const SALES_COLUMNS = ['date', 'order', 'customer', 'product', 'quantity', 'amount', 'status'] as const;
type Column = (typeof SALES_COLUMNS)[number];

const ALIASES: Record<string, Column> = {
  date: 'date',
  order: 'order', 'order id': 'order', order_id: 'order', orderid: 'order',
  customer: 'customer', client: 'customer',
  product: 'product', item: 'product',
  quantity: 'quantity', qty: 'quantity',
  amount: 'amount', value: 'amount', total: 'amount',
  status: 'status',
};

export const SAMPLE_CSV = [
  'date,order,customer,product,quantity,amount,status',
  '2026-11-03,ORD-1001,Acme Ltd,Product A,2,150.00,Completed',
  '2026-11-05,ORD-1002,Beta Inc,Product B,1,320.50,Completed',
  '2026-11-12,ORD-1003,Acme Ltd,Product C,3,89.90,Pending',
  '2026-11-20,ORD-1004,Gamma Co,Product A,1,75.00,Cancelled',
  '2026-10-28,ORD-0998,Beta Inc,Product B,2,641.00,Completed',
].join('\n');

/** `1234.56`, `1,234.56`, `1.234,56` or `1234,56`; currency signs and spaces are ignored. */
export function parseAmount(text: string): number | null {
  const t = text.replace(/[^\d.,-]/g, '');
  if (!/\d/.test(t)) return null;
  const lastDot = t.lastIndexOf('.');
  const lastComma = t.lastIndexOf(',');
  const decimalSep = lastComma > lastDot ? ',' : '.';
  const thousandsSep = decimalSep === ',' ? '.' : ',';
  const normalized = t.split(thousandsSep).join('').replace(decimalSep, '.');
  if (!/^-?\d*\.?\d+$/.test(normalized)) return null;
  return Number(normalized);
}

export function parseSalesCsv(text: string): ParsedSales {
  const [header, ...data] = parseCsv(text);
  if (!header) return { rows: [], missingColumns: [], problems: [] };
  const index: Partial<Record<Column, number>> = {};
  header.forEach((name, i) => {
    const column = ALIASES[name.trim().toLowerCase()];
    if (column && index[column] === undefined) index[column] = i;
  });
  const missingColumns = (['date', 'amount'] as const).filter((c) => index[c] === undefined);
  if (missingColumns.length > 0) return { rows: [], missingColumns, problems: [] };

  const rows: SaleRow[] = [];
  const problems: ParsedSales['problems'] = [];
  const cell = (r: string[], c: Column) => (index[c] === undefined ? '' : (r[index[c]!] ?? '').trim());
  data.forEach((r, i) => {
    const date = cell(r, 'date').slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) { problems.push({ row: i + 1, problem: 'badDate' }); return; }
    const amount = parseAmount(cell(r, 'amount'));
    if (amount === null) { problems.push({ row: i + 1, problem: 'badAmount' }); return; }
    const quantity = Number.parseInt(cell(r, 'quantity'), 10);
    rows.push({
      date,
      order: cell(r, 'order'),
      customer: cell(r, 'customer'),
      product: cell(r, 'product'),
      quantity: Number.isFinite(quantity) ? quantity : 1,
      amount,
      status: cell(r, 'status'),
    });
  });
  return { rows, missingColumns: [], problems };
}

/** Rows with the same order id are one order; rows without an id count one each. */
export function summarize(rows: SaleRow[]): SalesSummary {
  const total = Math.round(rows.reduce((sum, r) => sum + r.amount, 0) * 100) / 100;
  const ids = new Set(rows.filter((r) => r.order).map((r) => r.order));
  const orders = ids.size + rows.filter((r) => !r.order).length;
  return { total, orders, averageTicket: orders > 0 ? Math.round((total / orders) * 100) / 100 : 0 };
}

export function monthsOf(rows: SaleRow[]): string[] {
  return [...new Set(rows.map((r) => r.date.slice(0, 7)))].sort().reverse();
}

export function statusesOf(rows: SaleRow[]): string[] {
  return [...new Set(rows.map((r) => r.status).filter(Boolean))].sort();
}

export function filterSales(rows: SaleRow[], f: SalesFilter): SaleRow[] {
  const q = f.query.trim().toLowerCase();
  return rows.filter((r) =>
    (!f.month || r.date.startsWith(f.month))
    && (!f.status || r.status === f.status)
    && (!q || [r.order, r.customer, r.product].some((v) => v.toLowerCase().includes(q))));
}

export function salesToCsv(rows: SaleRow[]): string {
  return toCsv([...SALES_COLUMNS], rows.map((r) => SALES_COLUMNS.map((c) => r[c])));
}
