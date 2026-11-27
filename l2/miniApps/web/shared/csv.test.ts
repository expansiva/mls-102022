/// <mls fileReference="_102022_/l2/miniApps/web/shared/csv.test.ts" enhancement="_blank" />
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCsv, toCsv } from '/_102022_/l2/miniApps/web/shared/csv.js';

test('toCsv quotes only cells that need it', () => {
  assert.equal(toCsv(['a', 'b'], [[1, 'x,y'], ['say "hi"', 'ok']]), 'a,b\n1,"x,y"\n"say ""hi""",ok');
});

test('parseCsv round-trips toCsv output', () => {
  const rows = [['date', 'note'], ['2026-01-02', 'line one\nline two'], ['2026-01-03', 'a, "b"']];
  assert.deepEqual(parseCsv(toCsv(rows[0], rows.slice(1))), rows);
});

test('parseCsv detects semicolons and drops blank lines', () => {
  assert.deepEqual(parseCsv('a;b\r\n1,5;2\r\n\r\n'), [['a', 'b'], ['1,5', '2']]);
});
