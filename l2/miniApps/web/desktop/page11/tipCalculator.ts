/// <mls fileReference="_102022_/l2/miniApps/web/desktop/page11/tipCalculator.ts" enhancement="_102029_/l2/enhancementLit" />
import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import { computeTip, TIP_PRESETS, type Rounding } from '/_102022_/l2/miniApps/web/shared/tipCalculator.js';
import { cardClass, fieldClass, fmtAmount, labelClass, numberOf, panelClass } from '/_102022_/l2/miniApps/web/shared/ui.js';

/// **collab_i18n_start**
const pageMessage_en = {
  pageTitle: 'Tip Calculator',
  pageIntro: 'Work out the tip and split the bill between people.',
  billLabel: 'Bill amount',
  tipLabel: 'Tip',
  customTip: 'Custom',
  customTipLabel: 'Custom tip (%)',
  peopleLabel: 'Number of people',
  roundingLabel: 'Round the total per person',
  roundingNone: 'No rounding',
  roundingUp: 'Round up',
  roundingDown: 'Round down',
  roundingNearest: 'Round to nearest',
  tipTotal: 'Tip',
  total: 'Total with tip',
  tipPerPerson: 'Tip per person',
  perPerson: 'Total per person',
  localNote: 'Calculated in your browser. Nothing is sent anywhere.',
};
type PageMessageType = typeof pageMessage_en;
const pageMessages: Record<string, PageMessageType> = {
  en: pageMessage_en,
};
/// **collab_i18n_end**

@customElement('mini-apps--web--desktop--page11--tip-calculator-102022')
export class MiniAppsDesktopPage11TipCalculatorPage extends StateLitElement {
  private msg: PageMessageType = pageMessage_en;

  // Inputs are left uncontrolled (no .value binding) so re-renders never overwrite what is being typed.
  @state() private bill = 0;
  @state() private preset: number | 'custom' = 15;
  @state() private customPercent = 0;
  @state() private people = 1;
  @state() private rounding: Rounding = 'none';

  private get tipPercent(): number {
    return this.preset === 'custom' ? this.customPercent : this.preset;
  }

  private renderPresetButton(value: number | 'custom', label: string) {
    const selected = this.preset === value;
    const tone = selected
      ? 'border-[var(--selected-border,currentColor)] bg-[var(--selected-bg,transparent)] text-[var(--selected-text,currentColor)]'
      : 'border-[var(--button-secondary-border,currentColor)] bg-[var(--button-secondary-bg,transparent)] text-[var(--button-secondary-text,currentColor)]';
    return html`
      <button
        type="button"
        class="rounded-md border px-3 py-1.5 text-sm font-medium ${tone} focus:outline-2 focus:outline-[var(--focus-ring,currentColor)]"
        aria-pressed=${selected ? 'true' : 'false'}
        @click=${() => { this.preset = value; }}
      >${label}</button>
    `;
  }

  private renderTipField() {
    return html`
      <fieldset>
        <legend class=${labelClass}>${this.msg.tipLabel}</legend>
        <div class="flex flex-wrap gap-2">
          ${TIP_PRESETS.map((p) => this.renderPresetButton(p, `${p}%`))}
          ${this.renderPresetButton('custom', this.msg.customTip)}
        </div>
        ${this.preset === 'custom'
          ? html`
            <label class="${labelClass} mt-3" for="customTip">${this.msg.customTipLabel}</label>
            <input
              id="customTip"
              class="${fieldClass} max-w-32"
              type="number"
              min="0"
              step="0.5"
              inputmode="decimal"
              @input=${(e: Event) => { this.customPercent = numberOf(e); }}
            />`
          : nothing}
      </fieldset>
    `;
  }

  private renderResultRow(label: string, value: number, strong = false) {
    return html`
      <div class="flex justify-between py-1 ${strong ? 'text-lg font-semibold text-[var(--text-strong,currentColor)]' : ''}">
        <span>${label}</span>
        <span class="tabular-nums">${fmtAmount(value)}</span>
      </div>
    `;
  }

  render() {
    this.msg = pageMessages[this.getMessageKey(pageMessages)];
    const r = computeTip({ bill: this.bill, tipPercent: this.tipPercent, people: this.people, rounding: this.rounding });
    return html`
      <main class="min-h-full bg-[var(--page-bg,transparent)] px-6 py-8 text-[var(--text-default,currentColor)]">
        <div class="mx-auto max-w-xl ${cardClass}">
          <h1 class="text-xl font-semibold text-[var(--text-strong,currentColor)]">${this.msg.pageTitle}</h1>
          <p class="mt-1 text-sm text-[var(--text-muted,currentColor)]">${this.msg.pageIntro}</p>

          <div class="mt-6 grid gap-5">
            <div>
              <label class=${labelClass} for="bill">${this.msg.billLabel}</label>
              <input
                id="bill"
                class=${fieldClass}
                type="number"
                min="0"
                step="0.01"
                inputmode="decimal"
                placeholder="0.00"
                @input=${(e: Event) => { this.bill = numberOf(e); }}
              />
            </div>

            ${this.renderTipField()}

            <div>
              <label class=${labelClass} for="people">${this.msg.peopleLabel}</label>
              <input
                id="people"
                class="${fieldClass} max-w-32"
                type="number"
                min="1"
                step="1"
                value="1"
                @input=${(e: Event) => { this.people = numberOf(e); }}
              />
            </div>

            <div>
              <label class=${labelClass} for="rounding">${this.msg.roundingLabel}</label>
              <select
                id="rounding"
                class="${fieldClass} max-w-64"
                @change=${(e: Event) => { this.rounding = (e.target as HTMLSelectElement).value as Rounding; }}
              >
                <option value="none" ?selected=${this.rounding === 'none'}>${this.msg.roundingNone}</option>
                <option value="up" ?selected=${this.rounding === 'up'}>${this.msg.roundingUp}</option>
                <option value="down" ?selected=${this.rounding === 'down'}>${this.msg.roundingDown}</option>
                <option value="nearest" ?selected=${this.rounding === 'nearest'}>${this.msg.roundingNearest}</option>
              </select>
            </div>
          </div>

          <section aria-live="polite" class="mt-6 ${panelClass}">
            ${this.renderResultRow(this.msg.tipTotal, r.tipTotal)}
            ${this.renderResultRow(this.msg.total, r.total)}
            ${this.renderResultRow(this.msg.tipPerPerson, r.tipPerPerson)}
            ${this.renderResultRow(this.msg.perPerson, r.perPerson, true)}
          </section>

          <p class="mt-3 text-xs text-[var(--text-muted,currentColor)]">${this.msg.localNote}</p>
        </div>
      </main>
    `;
  }
}
