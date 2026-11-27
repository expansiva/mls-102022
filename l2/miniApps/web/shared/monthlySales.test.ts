/// <mls fileReference="_102022_/l2/miniApps/web/shared/monthlySales.test.ts" enhancement="_blank" />
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterSales, monthsOf, parseAmount, parseSalesCsv, salesToCsv, SAMPLE_CSV, statusesOf, summarize,
} from '/_102022_/l2/miniApps/web/shared/monthlySales.js';

test('amounts in either decimal style', () => {
  assert.equal(parseAmount('1234.56'), 1234.56);
  assert.equal(parseAmount('1,234.56'), 1234.56);
  assert.equal(parseAmount('1.234,56'), 1234.56);
  assert.equal(parseAmount('R$ 89,90'), 89.9);
  assert.equal(parseAmount('abc'), null);
});

test('the sample parses cleanly and sums per order', () => {
  const { rows, problems, missingColumns } = parseSalesCsv(SAMPLE_CSV);
  assert.equal(rows.length, 5);
  assert.deepEqual(problems, []);
  assert.deepEqual(missingColumns, []);
  assert.deepEqual(summarize(rows), { total: 1276.4, orders: 5, averageTicket: 255.28 });
  assert.deepEqual(monthsOf(rows), ['2026-11', '2026-10']);
  assert.deepEqual(statusesOf(rows), ['Cancelled', 'Completed', 'Pending']);
});

test('line items of one order count as one order', () => {
  const { rows } = parseSalesCsv('date;order;amount\n2026-11-01;A;10\n2026-11-01;A;5\n2026-11-02;;7');
  assert.deepEqual(summarize(rows), { total: 22, orders: 2, averageTicket: 11 });
});

test('missing required columns and bad rows are reported, not guessed', () => {
  assert.deepEqual(parseSalesCsv('order,customer\nA,B').missingColumns, ['date', 'amount']);
  const r = parseSalesCsv('date,amount\n03/11/2026,10\n2026-11-03,abc\n2026-11-04,5');
  assert.equal(r.rows.length, 1);
  assert.deepEqual(r.problems, [{ row: 1, problem: 'badDate' }, { row: 2, problem: 'badAmount' }]);
});

test('filters by month, status and text, then exports', () => {
  const { rows } = parseSalesCsv(SAMPLE_CSV);
  assert.equal(filterSales(rows, { month: '2026-11', status: '', query: '' }).length, 4);
  assert.equal(filterSales(rows, { month: '', status: 'Completed', query: 'beta' }).length, 2);
  const one = filterSales(rows, { month: '2026-10', status: '', query: '' });
  assert.equal(salesToCsv(one), 'date,order,customer,product,quantity,amount,status\n2026-10-28,ORD-0998,Beta Inc,Product B,2,641,Completed');
});
