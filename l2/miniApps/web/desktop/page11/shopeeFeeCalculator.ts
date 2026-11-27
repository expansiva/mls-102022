/// <mls fileReference="_102022_/l2/miniApps/web/desktop/page11/shopeeFeeCalculator.ts" enhancement="_102029_/l2/enhancementLit" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import {
  addToHistory,
  computeFees,
  DEFAULT_COMMISSION_PERCENT,
  DEFAULT_PAYMENT_FEE_PERCENT,
  historyToCsv,
  readHistory,
  type HistoryEntry,
  type SaleInput,
} from '/_102022_/l2/miniApps/web/shared/shopeeFeeCalculator.js';
import {
  cardClass, downloadText, fieldClass, fmtAmount, labelClass, numberOf, panelClass, primaryButtonClass, secondaryButtonClass,
} from '/_102022_/l2/miniApps/web/shared/ui.js';

/// **collab_i18n_start**
const pageMessage_en = {
  pageTitle: 'Shopee Fee Calculator',
  pageIntro: 'See the marketplace fees, your profit and your margin for a sale.',
  price: 'Sale price',
  cost: 'Product cost',
  freight: 'Shipping you pay',
  discount: 'Discount or coupon',
  commissionPercent: 'Marketplace commission (%)',
  paymentFeePercent: 'Payment fee (%)',
  feesTitle: 'Fees',
  commission: 'Commission',
  paymentFee: 'Payment fee',
  totalFees: 'Total fees',
  resultTitle: 'Result',
  totalCost: 'Total cost (product + shipping + fees)',
  profit: 'Net profit',
  margin: 'Margin',
  save: 'Save to history',
  historyTitle: 'History',
  historyEmpty: 'Nothing saved yet. Use "Save to history" after a calculation.',
  exportCsv: 'Export CSV',
  clearAll: 'Clear all',
  remove: 'Remove',
  rates: 'Commission {0}% · Payment fee {1}%',
  historyNote: 'History is kept in this browser only.',
};
type PageMessageType = typeof pageMessage_en;
const pageMessages: Record<string, PageMessageType> = {
  en: pageMessage_en,
};
/// **collab_i18n_end**

const HISTORY_KEY = 'miniApps.shopeeFeeCalculator.history';
type AmountField = 'price' | 'cost' | 'freight' | 'discount' | 'commissionPercent' | 'paymentFeePercent';

function loadHistory(): HistoryEntry[] {
  try {
    return readHistory(localStorage.getItem(HISTORY_KEY));
  } catch {
    return [];
  }
}

@customElement('mini-apps--web--desktop--page11--shopee-fee-calculator-102022')
export class MiniAppsDesktopPage11ShopeeFeeCalculatorPage extends StateLitElement {
  private msg: PageMessageType = pageMessage_en;

  @state() private sale: SaleInput = {
    price: 0,
    cost: 0,
    freight: 0,
    discount: 0,
    commissionPercent: DEFAULT_COMMISSION_PERCENT,
    paymentFeePercent: DEFAULT_PAYMENT_FEE_PERCENT,
  };
  @state() private history: HistoryEntry[] = loadHistory();

  private setHistory(next: HistoryEntry[]) {
    this.history = next;
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
    } catch {
      // storage blocked (private window): the history still works until the page closes
    }
  }

  private renderField(field: AmountField, step: string, initial?: number) {
    return html`
      <div>
        <label class=${labelClass} for=${field}>${this.msg[field]}</label>
        <input
          id=${field}
          class=${fieldClass}
          type="number"
          min="0"
          step=${step}
          inputmode="decimal"
          placeholder="0.00"
          value=${initial ?? ''}
          @input=${(e: Event) => { this.sale = { ...this.sale, [field]: numberOf(e) }; }}
        />
      </div>
    `;
  }

  private renderRow(label: string, value: string, strong = false) {
    return html`
      <div class="flex justify-between gap-4 py-1 ${strong ? 'font-semibold text-[var(--text-strong,currentColor)]' : ''}">
        <span>${label}</span><span class="tabular-nums">${value}</span>
      </div>
    `;
  }

  private renderHistory() {
    const lang = document.documentElement.lang || undefined;
    return html`
      <section class="mt-6">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h2 class="text-lg font-semibold text-[var(--text-strong,currentColor)]">${this.msg.historyTitle}</h2>
          <div class="flex gap-2">
            <button type="button" class=${secondaryButtonClass} ?disabled=${this.history.length === 0}
              @click=${() => downloadText('shopee-fee-history.csv', historyToCsv(this.history))}>${this.msg.exportCsv}</button>
            <button type="button" class=${secondaryButtonClass} ?disabled=${this.history.length === 0}
              @click=${() => this.setHistory([])}>${this.msg.clearAll}</button>
          </div>
        </div>
        ${this.history.length === 0
          ? html`<p class="mt-3 text-sm text-[var(--text-muted,currentColor)]">${this.msg.historyEmpty}</p>`
          : html`
            <ul class="mt-3 grid gap-2">
              ${this.history.map((e, i) => html`
                <li class="flex items-start justify-between gap-4 ${panelClass}">
                  <div class="text-sm">
                    <div class="text-[var(--text-muted,currentColor)]">${new Date(e.date).toLocaleString(lang)}</div>
                    <div class="mt-1">
                      ${this.msg.price} ${fmtAmount(e.price)} · ${this.msg.profit} ${fmtAmount(e.profit)} · ${this.msg.margin} ${fmtAmount(e.margin)}%
                    </div>
                    <div class="text-[var(--text-muted,currentColor)]">
                      ${this.msg.rates.replace('{0}', String(e.commissionPercent)).replace('{1}', String(e.paymentFeePercent))}
                    </div>
                  </div>
                  <button type="button" class=${secondaryButtonClass}
                    @click=${() => this.setHistory(this.history.filter((_, j) => j !== i))}>${this.msg.remove}</button>
                </li>`)}
            </ul>`}
        <p class="mt-2 text-xs text-[var(--text-muted,currentColor)]">${this.msg.historyNote}</p>
      </section>
    `;
  }

  render() {
    this.msg = pageMessages[this.getMessageKey(pageMessages)];
    const r = computeFees(this.sale);
    return html`
      <main class="min-h-full bg-[var(--page-bg,transparent)] px-6 py-8 text-[var(--text-default,currentColor)]">
        <div class="mx-auto max-w-3xl ${cardClass}">
          <h1 class="text-xl font-semibold text-[var(--text-strong,currentColor)]">${this.msg.pageTitle}</h1>
          <p class="mt-1 text-sm text-[var(--text-muted,currentColor)]">${this.msg.pageIntro}</p>

          <div class="mt-6 grid gap-4 md:grid-cols-2">
            ${this.renderField('price', '0.01')}
            ${this.renderField('cost', '0.01')}
            ${this.renderField('freight', '0.01')}
            ${this.renderField('discount', '0.01')}
            ${this.renderField('commissionPercent', '0.1', DEFAULT_COMMISSION_PERCENT)}
            ${this.renderField('paymentFeePercent', '0.1', DEFAULT_PAYMENT_FEE_PERCENT)}
          </div>

          <div class="mt-6 grid gap-4 md:grid-cols-2" aria-live="polite">
            <section class=${panelClass}>
              <h2 class="mb-2 font-semibold text-[var(--text-strong,currentColor)]">${this.msg.feesTitle}</h2>
              ${this.renderRow(`${this.msg.commission} (${this.sale.commissionPercent}%)`, fmtAmount(r.commission))}
              ${this.renderRow(`${this.msg.paymentFee} (${this.sale.paymentFeePercent}%)`, fmtAmount(r.paymentFee))}
              ${this.renderRow(this.msg.totalFees, fmtAmount(r.totalFees), true)}
            </section>
            <section class=${panelClass}>
              <h2 class="mb-2 font-semibold text-[var(--text-strong,currentColor)]">${this.msg.resultTitle}</h2>
              ${this.renderRow(this.msg.totalCost, fmtAmount(r.totalCost))}
              ${this.renderRow(this.msg.profit, fmtAmount(r.profit), true)}
              ${this.renderRow(this.msg.margin, `${fmtAmount(r.margin)}%`)}
            </section>
          </div>

          <div class="mt-4">
            <button type="button" class=${primaryButtonClass} ?disabled=${this.sale.price <= 0}
              @click=${() => this.setHistory(addToHistory(this.history, this.sale, new Date()))}>${this.msg.save}</button>
          </div>

          ${this.renderHistory()}
        </div>
      </main>
    `;
  }
}
