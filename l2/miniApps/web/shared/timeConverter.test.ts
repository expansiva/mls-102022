/// <mls fileReference="_102022_/l2/miniApps/web/shared/timeConverter.test.ts" enhancement="_blank" />
import test from 'node:test';
import assert from 'node:assert/strict';
import { formatClock, parseToSeconds, secondsTo } from '/_102022_/l2/miniApps/web/shared/timeConverter.js';

test('plain numbers are read in the source unit, with dot or comma', () => {
  assert.equal(parseToSeconds('1.5', 'hours'), 5400);
  assert.equal(parseToSeconds('1,5', 'hours'), 5400);
  assert.equal(parseToSeconds('90', 'minutes'), 5400);
  assert.equal(parseToSeconds('45', 'seconds'), 45);
});

test('clock formats ignore the source unit', () => {
  assert.equal(parseToSeconds('01:30:00', 'seconds'), 5400);
  assert.equal(parseToSeconds('25:00:10', 'hours'), 90010);
  assert.equal(parseToSeconds('02:30', 'hours'), 150); // mm:ss
});

test('empty, negative or malformed input is refused', () => {
  for (const text of ['', '   ', '-1', 'abc', '1:2:3:4', '1:75', '1:00:60', '1.2.3']) {
    assert.equal(parseToSeconds(text, 'hours'), null, text);
  }
});

test('converts seconds to any unit and to a clock', () => {
  assert.equal(secondsTo(5400, 'hours'), 1.5);
  assert.equal(secondsTo(5400, 'minutes'), 90);
  assert.equal(formatClock(5400), '01:30:00');
  assert.equal(formatClock(90010), '25:00:10');
  assert.equal(formatClock(0), '00:00:00');
});
