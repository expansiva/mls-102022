/// <mls fileReference="_102022_/l2/miniApps/web/desktop/page11/timeConverter.ts" enhancement="_102029_/l2/enhancementLit" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import { formatClock, parseToSeconds, secondsTo, type TimeUnit } from '/_102022_/l2/miniApps/web/shared/timeConverter.js';
import { cardClass, fieldClass, fmtNumber, labelClass, panelClass, secondaryButtonClass } from '/_102022_/l2/miniApps/web/shared/ui.js';

/// **collab_i18n_start**
const pageMessage_en = {
  pageTitle: 'Time Converter',
  pageIntro: 'Convert between hours, minutes and seconds.',
  inputLabel: 'Time',
  inputHint: 'A number such as 1.5, or a clock such as 01:30:00 (h:mm:ss) or 02:30 (mm:ss).',
  fromLabel: 'From',
  toLabel: 'To',
  swap: 'Swap units',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  asClock: 'Show as h:mm:ss',
  resultLabel: 'Result',
  invalid: 'Enter a number or a time such as 01:30:00.',
  copy: 'Copy result',
  copied: 'Copied.',
  copyFailed: 'Could not copy.',
  localNote: 'Calculated in your browser. Nothing is sent anywhere.',
};
type PageMessageType = typeof pageMessage_en;
const pageMessages: Record<string, PageMessageType> = {
  en: pageMessage_en,
};
/// **collab_i18n_end**

const UNITS: TimeUnit[] = ['hours', 'minutes', 'seconds'];

@customElement('mini-apps--web--desktop--page11--time-converter-102022')
export class MiniAppsDesktopPage11TimeConverterPage extends StateLitElement {
  private msg: PageMessageType = pageMessage_en;

  @state() private text = '';
  @state() private from: TimeUnit = 'hours';
  @state() private to: TimeUnit = 'minutes';
  @state() private asClock = false;
  @state() private copyStatus = '';

  private result(): string | null {
    const seconds = parseToSeconds(this.text, this.from);
    if (seconds === null) return null;
    return this.asClock ? formatClock(seconds) : fmtNumber(secondsTo(seconds, this.to));
  }

  private swap() {
    [this.from, this.to] = [this.to, this.from];
  }

  private async copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      this.copyStatus = this.msg.copied;
    } catch {
      this.copyStatus = this.msg.copyFailed;
    }
  }

  private renderUnitSelect(id: string, label: string, value: TimeUnit, onChange: (unit: TimeUnit) => void, disabled = false) {
    return html`
      <div>
        <label class=${labelClass} for=${id}>${label}</label>
        <select
          id=${id}
          class=${fieldClass}
          ?disabled=${disabled}
          @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value as TimeUnit)}
        >
          ${UNITS.map((u) => html`<option value=${u} ?selected=${value === u}>${this.msg[u]}</option>`)}
        </select>
      </div>
    `;
  }

  render() {
    this.msg = pageMessages[this.getMessageKey(pageMessages)];
    const result = this.result();
    const hasText = this.text.trim() !== '';
    return html`
      <main class="min-h-full bg-[var(--page-bg,transparent)] px-6 py-8 text-[var(--text-default,currentColor)]">
        <div class="mx-auto max-w-xl ${cardClass}">
          <h1 class="text-xl font-semibold text-[var(--text-strong,currentColor)]">${this.msg.pageTitle}</h1>
          <p class="mt-1 text-sm text-[var(--text-muted,currentColor)]">${this.msg.pageIntro}</p>

          <div class="mt-6 grid gap-5">
            <div>
              <label class=${labelClass} for="time">${this.msg.inputLabel}</label>
              <input
                id="time"
                class=${fieldClass}
                type="text"
                inputmode="decimal"
                autocomplete="off"
                placeholder="1.5"
                aria-describedby="timeHint"
                @input=${(e: Event) => { this.text = (e.target as HTMLInputElement).value; this.copyStatus = ''; }}
              />
              <p id="timeHint" class="mt-1 text-xs text-[var(--text-muted,currentColor)]">${this.msg.inputHint}</p>
            </div>

            <div class="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
              ${this.renderUnitSelect('from', this.msg.fromLabel, this.from, (u) => { this.from = u; })}
              <button type="button" class=${secondaryButtonClass} title=${this.msg.swap} aria-label=${this.msg.swap} @click=${() => this.swap()}>⇄</button>
              ${this.renderUnitSelect('to', this.msg.toLabel, this.to, (u) => { this.to = u; }, this.asClock)}
            </div>

            <label class="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" .checked=${this.asClock} @change=${(e: Event) => { this.asClock = (e.target as HTMLInputElement).checked; }} />
              ${this.msg.asClock}
            </label>
          </div>

          <section aria-live="polite" class="mt-6 ${panelClass}">
            <div class="text-sm text-[var(--text-muted,currentColor)]">${this.msg.resultLabel}</div>
            ${result !== null
              ? html`<div class="mt-1 text-2xl font-semibold tabular-nums text-[var(--text-strong,currentColor)]">${result}</div>`
              : html`<div class="mt-1 text-sm">${hasText ? this.msg.invalid : '—'}</div>`}
          </section>

          <div class="mt-3 flex items-center gap-3">
            <button type="button" class=${secondaryButtonClass} ?disabled=${result === null} @click=${() => result !== null && this.copy(result)}>${this.msg.copy}</button>
            <span class="text-sm text-[var(--text-muted,currentColor)]" role="status">${this.copyStatus}</span>
          </div>

          <p class="mt-3 text-xs text-[var(--text-muted,currentColor)]">${this.msg.localNote}</p>
        </div>
      </main>
    `;
  }
}
