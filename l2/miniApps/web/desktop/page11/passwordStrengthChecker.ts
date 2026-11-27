/// <mls fileReference="_102022_/l2/miniApps/web/desktop/page11/passwordStrengthChecker.ts" enhancement="_102029_/l2/enhancementLit" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import { evaluatePassword, type StrengthLevel } from '/_102022_/l2/miniApps/web/shared/passwordStrengthChecker.js';
import { cardClass, fieldClass, labelClass, panelClass, secondaryButtonClass } from '/_102022_/l2/miniApps/web/shared/ui.js';

/// **collab_i18n_start**
const pageMessage_en = {
  pageTitle: 'Password Strength Checker',
  pageIntro: 'Check how strong a password is, right here in your browser.',
  passwordLabel: 'Password',
  passwordHint: 'Type or paste a password to get feedback as you go.',
  show: 'Show',
  hide: 'Hide',
  showLabel: 'Show password',
  hideLabel: 'Hide password',
  strengthLabel: 'Strength',
  weak: 'Weak',
  medium: 'Medium',
  strong: 'Strong',
  score: 'Score',
  suggestionsTitle: 'Suggestions',
  noSuggestions: 'No suggestions right now.',
  minLength: 'Use at least 8 characters.',
  longer: 'Consider 12 or more characters.',
  addUpper: 'Add uppercase letters.',
  addDigit: 'Add numbers.',
  addSymbol: 'Add symbols such as ! @ # $ %.',
  avoidCommon: 'Avoid common words and sequences such as "password" or "123456".',
  avoidRepeats: 'Avoid repeating the same character three times or more.',
  localNote: 'Checked in your browser. The password is never sent anywhere.',
};
type PageMessageType = typeof pageMessage_en;
const pageMessages: Record<string, PageMessageType> = {
  en: pageMessage_en,
};
/// **collab_i18n_end**

const METER_TONE: Record<StrengthLevel, string> = {
  weak: 'bg-[var(--status-error-text,currentColor)]',
  medium: 'bg-[var(--status-warning-text,currentColor)]',
  strong: 'bg-[var(--status-success-text,currentColor)]',
};

@customElement('mini-apps--web--desktop--page11--password-strength-checker-102022')
export class MiniAppsDesktopPage11PasswordStrengthCheckerPage extends StateLitElement {
  private msg: PageMessageType = pageMessage_en;

  // The input stays uncontrolled: the password lives only in the field and in this property.
  @state() private password = '';
  @state() private visible = false;

  render() {
    this.msg = pageMessages[this.getMessageKey(pageMessages)];
    const r = evaluatePassword(this.password);
    const levelText = this.msg[r.level];
    return html`
      <main class="min-h-full bg-[var(--page-bg,transparent)] px-6 py-8 text-[var(--text-default,currentColor)]">
        <div class="mx-auto max-w-xl ${cardClass}">
          <h1 class="text-xl font-semibold text-[var(--text-strong,currentColor)]">${this.msg.pageTitle}</h1>
          <p class="mt-1 text-sm text-[var(--text-muted,currentColor)]">${this.msg.pageIntro}</p>

          <div class="mt-6">
            <label class=${labelClass} for="pwd">${this.msg.passwordLabel}</label>
            <div class="flex gap-2">
              <input
                id="pwd"
                class=${fieldClass}
                type=${this.visible ? 'text' : 'password'}
                autocomplete="off"
                spellcheck="false"
                aria-describedby="pwdHint"
                @input=${(e: Event) => { this.password = (e.target as HTMLInputElement).value; }}
              />
              <button
                type="button"
                class=${secondaryButtonClass}
                aria-pressed=${this.visible ? 'true' : 'false'}
                aria-label=${this.visible ? this.msg.hideLabel : this.msg.showLabel}
                @click=${() => { this.visible = !this.visible; }}
              >${this.visible ? this.msg.hide : this.msg.show}</button>
            </div>
            <p id="pwdHint" class="mt-1 text-xs text-[var(--text-muted,currentColor)]">${this.msg.passwordHint}</p>
          </div>

          <div class="mt-6">
            <div
              class="h-3 w-full overflow-hidden rounded bg-[var(--surface-alt-bg,transparent)] border border-[var(--border-subtle,currentColor)]"
              role="progressbar"
              aria-label=${this.msg.strengthLabel}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow=${r.score}
              aria-valuetext=${`${levelText}, ${r.score}/100`}
            >
              <div class="h-full ${METER_TONE[r.level]} transition-[width] duration-200" style="width: ${r.score}%"></div>
            </div>
            <div class="mt-2 flex items-center justify-between text-sm">
              <span class="font-medium text-[var(--text-strong,currentColor)]">${this.password ? levelText : '—'}</span>
              <span class="text-[var(--text-muted,currentColor)]">${this.msg.score}: <span class="font-semibold tabular-nums">${r.score}</span>/100</span>
            </div>
          </div>

          <section class="mt-6 ${panelClass}">
            <h2 class="text-sm font-semibold text-[var(--text-strong,currentColor)]">${this.msg.suggestionsTitle}</h2>
            ${r.suggestions.length === 0
              ? html`<p class="mt-2 text-sm text-[var(--text-muted,currentColor)]">${this.msg.noSuggestions}</p>`
              : html`<ul class="mt-2 list-disc space-y-1 pl-5 text-sm">${r.suggestions.map((s) => html`<li>${this.msg[s]}</li>`)}</ul>`}
          </section>

          <div class="sr-only" aria-live="polite">${this.password ? `${this.msg.strengthLabel}: ${levelText}. ${this.msg.score} ${r.score}/100.` : ''}</div>
          <p class="mt-3 text-xs text-[var(--text-muted,currentColor)]">${this.msg.localNote}</p>
        </div>
      </main>
    `;
  }
}
