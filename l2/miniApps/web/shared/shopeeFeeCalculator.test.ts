/// <mls fileReference="_102022_/l2/miniApps/web/shared/shopeeFeeCalculator.test.ts" enhancement="_blank" />
import test from 'node:test';
import assert from 'node:assert/strict';
import { addToHistory, computeFees, HISTORY_LIMIT, historyToCsv, readHistory, type SaleInput } from '/_102022_/l2/miniApps/web/shared/shopeeFeeCalculator.js';

const sale: SaleInput = { price: 100, cost: 40, freight: 10, discount: 5, commissionPercent: 12, paymentFeePercent: 2.5 };

test('fees on the listed price, discount reduces the profit', () => {
  assert.deepEqual(computeFees(sale), {
    commission: 12, paymentFee: 2.5, totalFees: 14.5, totalCost: 64.5, profit: 30.5, margin: 30.5,
  });
});

test('zero price gives zero margin and negative inputs count as zero', () => {
  const r = computeFees({ ...sale, price: 0, cost: -5 });
  assert.equal(r.margin, 0);
  assert.equal(r.profit, -15); // -discount - freight
});

test('history keeps the newest first and is capped', () => {
  let h = addToHistory([], sale, new Date('2026-01-01T00:00:00Z'));
  h = addToHistory(h, { ...sale, price: 200 }, new Date('2026-01-02T00:00:00Z'));
  assert.equal(h[0].price, 200);
  assert.equal(h[1].profit, 30.5);
  const many = Array.from({ length: HISTORY_LIMIT + 5 }).reduce<typeof h>((acc) => addToHistory(acc, sale, new Date()), []);
  assert.equal(many.length, HISTORY_LIMIT);
});

test('a damaged saved history reads as empty', () => {
  assert.deepEqual(readHistory('not json'), []);
  assert.deepEqual(readHistory('{"a":1}'), []);
  assert.equal(readHistory(JSON.stringify(addToHistory([], sale, new Date()))).length, 1);
});

test('history exports as CSV with a header row', () => {
  const csv = historyToCsv(addToHistory([], sale, new Date('2026-01-01T00:00:00Z')));
  assert.equal(csv, 'date,price,cost,freight,discount,commissionPercent,paymentFeePercent,totalFees,profit,margin\n2026-01-01T00:00:00.000Z,100,40,10,5,12,2.5,14.5,30.5,30.5');
});
