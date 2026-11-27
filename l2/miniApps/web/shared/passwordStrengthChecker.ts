/// <mls fileReference="_102022_/l2/miniApps/web/shared/passwordStrengthChecker.ts" enhancement="_blank" />

export type StrengthLevel = 'weak' | 'medium' | 'strong';
export type Suggestion =
  | 'minLength'
  | 'longer'
  | 'addUpper'
  | 'addDigit'
  | 'addSymbol'
  | 'avoidCommon'
  | 'avoidRepeats';

export interface PasswordStrength {
  score: number; // 0..100
  level: StrengthLevel;
  suggestions: Suggestion[];
}

const COMMON = ['123456', 'password', 'qwerty', 'abc123', '111111', 'letmein', 'admin'];
const WEAK_BELOW = 40;
const MEDIUM_BELOW = 70;

/** Local heuristic: length, character variety and an entropy estimate, minus common patterns. */
export function evaluatePassword(pwd: string): PasswordStrength {
  if (pwd.length === 0) return { score: 0, level: 'weak', suggestions: [] };

  const suggestions: Suggestion[] = [];
  const len = pwd.length;
  let score = Math.min(40, Math.floor((len / 20) * 40));
  if (len < 8) suggestions.push('minLength');
  else if (len < 12) suggestions.push('longer');

  const hasLower = /[a-z]/.test(pwd);
  const hasUpper = /[A-Z]/.test(pwd);
  const hasDigit = /[0-9]/.test(pwd);
  const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
  score += [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length * 7;
  if (!hasUpper) suggestions.push('addUpper');
  if (!hasDigit) suggestions.push('addDigit');
  if (!hasSymbol) suggestions.push('addSymbol');

  const lower = pwd.toLowerCase();
  if (COMMON.some((c) => lower.includes(c))) {
    score -= 30;
    suggestions.push('avoidCommon');
  }
  if (/(.)\1{2,}/.test(pwd)) {
    score -= 10;
    suggestions.push('avoidRepeats');
  }

  const charset = (hasLower ? 26 : 0) + (hasUpper ? 26 : 0) + (hasDigit ? 10 : 0) + (hasSymbol ? 32 : 0);
  const entropy = len * Math.log2(charset);
  score += Math.max(0, Math.min(30, Math.floor((entropy / 60) * 30)));

  score = Math.max(0, Math.min(100, Math.round(score)));
  const level: StrengthLevel = score < WEAK_BELOW ? 'weak' : score < MEDIUM_BELOW ? 'medium' : 'strong';
  return { score, level, suggestions };
}
