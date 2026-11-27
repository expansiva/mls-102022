/// <mls fileReference="_102022_/l2/miniApps/web/shared/passwordStrengthChecker.test.ts" enhancement="_blank" />
import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluatePassword } from '/_102022_/l2/miniApps/web/shared/passwordStrengthChecker.js';

test('empty password scores zero with no suggestions', () => {
  assert.deepEqual(evaluatePassword(''), { score: 0, level: 'weak', suggestions: [] });
});

test('short, single-class password is weak and says what is missing', () => {
  const r = evaluatePassword('abc');
  assert.equal(r.level, 'weak');
  assert.deepEqual(r.suggestions, ['minLength', 'addUpper', 'addDigit', 'addSymbol']);
});

test('common words are penalised', () => {
  const r = evaluatePassword('password123');
  assert.equal(r.level, 'weak');
  assert.ok(r.suggestions.includes('avoidCommon'));
});

test('only runs of 3+ identical characters count as repeats', () => {
  assert.ok(evaluatePassword('aaaa1111').suggestions.includes('avoidRepeats'));
  assert.ok(!evaluatePassword('Tr0ub4dor&3').suggestions.includes('avoidRepeats'));
});

test('long password with every character class is strong', () => {
  const r = evaluatePassword('Xk9#mQ2$vL7!pR4@');
  assert.equal(r.level, 'strong');
  assert.deepEqual(r.suggestions, []);
  assert.ok(r.score <= 100);
});
