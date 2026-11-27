/// <mls fileReference="_102022_/l2/miniApps/web/shared/tipCalculator.test.ts" enhancement="_blank" />
import test from 'node:test';
import assert from 'node:assert/strict';
import { computeTip } from '/_102022_/l2/miniApps/web/shared/tipCalculator.js';

test('splits bill and tip between people', () => {
  const r = computeTip({ bill: 100, tipPercent: 15, people: 2, rounding: 'none' });
  assert.deepEqual(r, { tipTotal: 15, total: 115, tipPerPerson: 7.5, perPerson: 57.5 });
});

test('rounding applies only to the total per person', () => {
  const base = { bill: 100, tipPercent: 15, people: 2 };
  assert.equal(computeTip({ ...base, rounding: 'up' }).perPerson, 58);
  assert.equal(computeTip({ ...base, rounding: 'down' }).perPerson, 57);
  assert.equal(computeTip({ ...base, rounding: 'nearest' }).perPerson, 58);
  assert.equal(computeTip({ ...base, rounding: 'up' }).tipPerPerson, 7.5);
});

test('invalid people count falls back to one person', () => {
  for (const people of [0, -3, Number.NaN]) {
    assert.equal(computeTip({ bill: 50, tipPercent: 10, people, rounding: 'none' }).perPerson, 55);
  }
});

test('negative or empty amounts count as zero', () => {
  const r = computeTip({ bill: -20, tipPercent: Number.NaN, people: 1, rounding: 'none' });
  assert.deepEqual(r, { tipTotal: 0, total: 0, tipPerPerson: 0, perPerson: 0 });
});
