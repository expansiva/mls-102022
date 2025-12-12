/// <mls shortName="passwordStrengthChecker" project="102022" enhancement="_blank" groupName="generalutilities" />
import { CollabPageElement } from '/_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { initState, setState, getState } from '/_100554_/l2/collabState';
@customElement('generalutilities--password-strength-checker-102022')
export class PasswordStrengthCheckerPage extends CollabPageElement {
  // Internal state (not using reactive decorators to keep compatibility with CollabPageElement patterns)
  password = '';
  showPassword = false;
  score = 0; // 0-100
  strengthLabel = 'Fraca';
  suggestions: string[] = [];
  private inputDebounceTimer: any = null;
  constructor() {
    super();
  }
  initPage() {
    // Define the page title
    setState('ui.mdm.pageTitle.title', `Verificador de Força de Senha`);
    // Initialize a default settings state for this mini app
    initState('ui.mdm.passwordStrength.settings', {
      thresholds: { weak: 40, medium: 70 },
      privacyNote: 'Avaliação local, sem envio de senhas ao servidor por padrão.'
    });
  }
  connectedCallback() {
    super.connectedCallback();
    // Ensure initPage is run when component is attached
    try {
      this.initPage();
    } catch (e) {
      // ignore
    }
  }
  // Debounced handler for text input
  onInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.password = target.value || '';
    // debounce to avoid heavy calculations on every keystroke
    if (this.inputDebounceTimer) clearTimeout(this.inputDebounceTimer);
    this.inputDebounceTimer = setTimeout(() => {
      this.evaluatePassword(this.password);
    }, 250);
  }
  // Paste should evaluate immediately
  onPaste(e: ClipboardEvent) {
    const text = e.clipboardData?.getData('text') || '';
    if (text) {
      // small delay to allow the input to receive the pasted text
      setTimeout(() => {
        this.password = (this.shadowRoot?.querySelector('#pwd') as HTMLInputElement)?.value || text;
        this.evaluatePassword(this.password);
      }, 10);
    }
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.requestUpdate();
  }
  evaluatePassword(pwd: string) {
    // Reset
    this.suggestions = [];
    if (!pwd || pwd.length === 0) {
      this.score = 0;
      this.strengthLabel = 'Fraca';
      this.requestUpdate();
      return;
    } 
    // Basic heuristics: length, character variety, penalties for common patterns
    let score = 0;
    // Length contribution (max 40 points)
    const len = pwd.length;
    score += Math.min(40, Math.floor((len / 20) * 40)); // length caps at >=20 for full points
    if (len < 8) this.suggestions.push('Use ao menos 8 caracteres.');
    if (len < 12) this.suggestions.push('Considere aumentar para 12+ caracteres para maior segurança.');
    // Character variety (max 30 points)
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasDigit = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
    const varietyCount = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;
    score += varietyCount * 7; // up to 28
    if (!hasUpper) this.suggestions.push('Adicione letras maiúsculas.');
    if (!hasDigit) this.suggestions.push('Inclua números.');
    if (!hasSymbol) this.suggestions.push('Use caracteres especiais (ex.: !@#$%).');
    // Penalize common patterns and repeated sequences
    const lowerPwd = pwd.toLowerCase();
    const commonPasswords = ['123456', 'password', 'qwerty', 'abc123', '111111', 'senha', '123456789'];
    for (const cp of commonPasswords) {
      if (lowerPwd.includes(cp)) {
        score -= 30;
        this.suggestions.push('Evite palavras ou sequências comuns na senha.');
        break;
      }
    }
    // Penalize repeated characters or sequences
    if (/(.){3,}/.test(pwd)) {
      score -= 10;
      this.suggestions.push('Evite repetir o mesmo caractere muitas vezes.');
    }
    // Simple entropy estimate bonus (up to 20 points)
    // entropy ~ log2(charset^length) = length * log2(charset)
    let charsetSize = 0;
    if (hasLower) charsetSize += 26;
    if (hasUpper) charsetSize += 26;
    if (hasDigit) charsetSize += 10;
    if (hasSymbol) charsetSize += 32; // approximate
    const entropyEstimate = len * (charsetSize > 0 ? Math.log2(charsetSize) : 0);
    // map entropy 0-60 to 0-30 points
    const entropyScore = Math.max(0, Math.min(30, Math.floor((entropyEstimate / 60) * 30)));
    score += entropyScore;
    // Clamp
    score = Math.max(0, Math.min(100, Math.round(score)));
    this.score = score;
    // Determine label based on thresholds from initState if available
    const settings: any = getState('ui.mdm.passwordStrength.settings') || { thresholds: { weak: 40, medium: 70 } };
    const weakT = settings.thresholds?.weak ?? 40;
    const medT = settings.thresholds?.medium ?? 70;
    if (score < weakT) this.strengthLabel = 'Fraca';
    else if (score < medT) this.strengthLabel = 'Média';
    else this.strengthLabel = 'Forte';
    // Make suggestions unique and limited
    this.suggestions = Array.from(new Set(this.suggestions)).slice(0, 5);
    // Accessibility: announce the new strength
    // We'll update an aria-live region in render
    this.requestUpdate();
  }
  // Utility for meter color
  meterColor(score: number) {
    if (score < 40) return 'bg-red-500';
    if (score < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  }
  render() {
    const meterWidth = `${this.score}%`;
    const colorClass = this.meterColor(this.score);
    return html`
<div class="p-4 max-w-xl mx-auto">
<h2 class="text-xl font-semibold mb-3 text-gray-800">Verificador de Força de Senha</h2>
<p class="text-sm text-gray-600 mb-4">Avaliação local e imediata da sua senha. Nenhuma senha é enviada por padrão.</p>
<label for="pwd" class="block text-sm font-medium text-gray-700 mb-2">Senha</label>
<div class="flex items-center gap-2">
<input
id="pwd"
@input=${(e: Event) => this.onInput(e)}
@paste=${(e: ClipboardEvent) => this.onPaste(e)}
class="flex-1 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
type=${this.showPassword ? 'text' : 'password'}
.value=${this.password}
aria-describedby="pwd-help pwd-strength-live"
aria-label="Campo de senha"
/>
<button
@click=${() => this.toggleShow()}
class="px-3 py-2 border rounded bg-gray-50 hover:bg-gray-100 text-sm"
aria-pressed=${this.showPassword ? 'true' : 'false'}
title=${this.showPassword ? 'Ocultar senha' : 'Mostrar senha'}
>
${this.showPassword ? 'Ocultar' : 'Mostrar'}
</button>
</div>
<div id="pwd-help" class="text-xs text-gray-500 mt-2">Cole ou digite sua senha para obter feedback em tempo real.</div>
<!-- Strength indicator -->
<div class="mt-4">
<div class="w-full bg-gray-200 rounded h-3 overflow-hidden" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${this.score}">
<div class="h-3 ${colorClass}" style="width: ${meterWidth}; transition: width 200ms ease"></div>
</div>
<div class="flex justify-between items-center mt-2">
<div class="text-sm font-medium text-gray-700">${this.strengthLabel}</div>
<div class="text-sm text-gray-600">Pontuação: <span class="font-semibold">${this.score}</span>/100</div>
</div>
</div>
<!-- Suggestions -->
<div class="mt-4">
<h3 class="text-sm font-semibold text-gray-800 mb-2">Sugestões</h3>
${this.suggestions.length === 0
        ? html`<p class="text-sm text-gray-600">Nenhuma sugestão no momento.</p>`
        : html`<ul class="list-disc pl-5 text-gray-700 space-y-1">${this.suggestions.map(s => html`<li>${s}</li>`)}</ul>`}
</div>
<!-- Accessibility live region -->
<div id="pwd-strength-live" class="sr-only" aria-live="polite">Força: ${this.strengthLabel}. Pontuação: ${this.score} de 100.</div>
<!-- Privacy note & controls -->
<div class="mt-4 text-xs text-gray-500">Avaliação realizada localmente no navegador. Não enviamos sua senha por padrão.</div>
</div>
`;
  }
}