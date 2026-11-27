/// <mls fileReference="_102022_/l2/miniApps/web/desktop/page11/monthlySales.ts" enhancement="_102029_/l2/enhancementLit" />
import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import {
  filterSales, monthsOf, parseSalesCsv, salesToCsv, SAMPLE_CSV, statusesOf, summarize, type SalesFilter,
} from '/_102022_/l2/miniApps/web/shared/monthlySales.js';
import {
  cardClass, downloadText, fieldClass, fmtAmount, labelClass, panelClass, secondaryButtonClass,
} from '/_102022_/l2/miniApps/web/shared/ui.js';

/// **collab_i18n_start**
const pageMessage_en = {
  pageTitle: 'Monthly Sales',
  pageIntro: 'Paste or open a CSV of your sales to see totals by month.',
  csvLabel: 'Sales CSV',
  csvHint: 'Columns: date (YYYY-MM-DD) and amount are required; order, customer, product, quantity and status are optional. Comma or semicolon separated; amounts like 1234.56 or 1.234,56.',
  openFile: 'Open CSV file',
  loadSample: 'Load example',
  clear: 'Clear',
  missingColumns: 'The first line must name the columns. Missing: {0}.',
  skippedRows: '{0} row(s) skipped: ',
  badDate: 'row {0} has no valid date',
  badAmount: 'row {0} has no valid amount',
  totalSales: 'Total sales',
  orders: 'Orders',
  averageTicket: 'Average ticket',
  monthLabel: 'Month',
  allMonths: 'All months',
  statusLabel: 'Status',
  allStatuses: 'All statuses',
  searchLabel: 'Search',
  searchPlaceholder: 'Order, customer or product',
  exportCsv: 'Export CSV',
  date: 'Date',
  order: 'Order',
  customer: 'Customer',
  product: 'Product',
  quantity: 'Qty',
  amount: 'Amount',
  status: 'Status',
  noRows: 'No sales match these filters.',
  showing: 'Showing {0} of {1} sales.',
  empty: 'No data yet. Paste a CSV above, open a file, or load the example.',
  localNote: 'Read in your browser. The file is never uploaded.',
};
type PageMessageType = typeof pageMessage_en;
const pageMessages: Record<string, PageMessageType> = {
  en: pageMessage_en,
};
/// **collab_i18n_end**

const MAX_TABLE_ROWS = 200;
const fill = (text: string, ...values: Array<string | number>) => values.reduce<string>((t, v, i) => t.replace(`{${i}}`, String(v)), text);

@customElement('mini-apps--web--desktop--page11--monthly-sales-102022')
export class MiniAppsDesktopPage11MonthlySalesPage extends StateLitElement {
  private msg: PageMessageType = pageMessage_en;

  @state() private csvText = '';
  @state() private filter: SalesFilter = { month: '', status: '', query: '' };

  private setCsv(text: string) {
    this.csvText = text;
    this.filter = { month: '', status: '', query: '' };
  }

  private async openFile(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.setCsv(await file.text());
    input.value = '';
  }

  private renderKpi(label: string, value: string) {
    return html`
      <div class=${panelClass}>
        <div class="text-sm text-[var(--text-muted,currentColor)]">${label}</div>
        <div class="mt-1 text-2xl font-semibold tabular-nums text-[var(--text-strong,currentColor)]">${value}</div>
      </div>
    `;
  }

  private renderProblems(parsed: ReturnType<typeof parseSalesCsv>) {
    if (parsed.missingColumns.length > 0) {
      return html`<p role="alert" class="mt-2 text-sm text-[var(--status-error-text,currentColor)]">${fill(this.msg.missingColumns, parsed.missingColumns.join(', '))}</p>`;
    }
    if (parsed.problems.length === 0) return nothing;
    const shown = parsed.problems.slice(0, 5).map((p) => fill(this.msg[p.problem], p.row)).join('; ');
    const more = parsed.problems.length > 5 ? '; …' : '';
    return html`<p role="status" class="mt-2 text-sm text-[var(--status-warning-text,currentColor)]">${fill(this.msg.skippedRows, parsed.problems.length)}${shown}${more}</p>`;
  }

  private renderTable(rows: ReturnType<typeof filterSales>) {
    const th = 'px-3 py-2 text-left text-xs font-medium text-[var(--text-muted,currentColor)]';
    const td = 'px-3 py-2 text-sm';
    if (rows.length === 0) return html`<p class="mt-4 text-sm text-[var(--text-muted,currentColor)]">${this.msg.noRows}</p>`;
    return html`
      <div class="mt-4 overflow-x-auto rounded-md border border-[var(--border-subtle,currentColor)]">
        <table class="min-w-full">
          <thead class="bg-[var(--surface-alt-bg,transparent)]">
            <tr>
              <th class=${th}>${this.msg.date}</th>
              <th class=${th}>${this.msg.order}</th>
              <th class=${th}>${this.msg.customer}</th>
              <th class=${th}>${this.msg.product}</th>
              <th class="${th} text-right">${this.msg.quantity}</th>
              <th class="${th} text-right">${this.msg.amount}</th>
              <th class=${th}>${this.msg.status}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.slice(0, MAX_TABLE_ROWS).map((r) => html`
              <tr class="border-t border-[var(--border-subtle,currentColor)]">
                <td class="${td} tabular-nums">${r.date}</td>
                <td class=${td}>${r.order}</td>
                <td class=${td}>${r.customer}</td>
                <td class=${td}>${r.product}</td>
                <td class="${td} text-right tabular-nums">${r.quantity}</td>
                <td class="${td} text-right tabular-nums">${fmtAmount(r.amount)}</td>
                <td class=${td}>${r.status}</td>
              </tr>`)}
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-xs text-[var(--text-muted,currentColor)]">${fill(this.msg.showing, Math.min(rows.length, MAX_TABLE_ROWS), rows.length)}</p>
    `;
  }

  private renderReport(parsed: ReturnType<typeof parseSalesCsv>) {
    if (parsed.rows.length === 0) return html`<p class="mt-6 text-sm text-[var(--text-muted,currentColor)]">${this.msg.empty}</p>`;
    const rows = filterSales(parsed.rows, this.filter);
    const s = summarize(rows);
    const lang = document.documentElement.lang || undefined;
    return html`
      <section class="mt-6 grid gap-4 md:grid-cols-3" aria-live="polite">
        ${this.renderKpi(this.msg.totalSales, fmtAmount(s.total))}
        ${this.renderKpi(this.msg.orders, new Intl.NumberFormat(lang).format(s.orders))}
        ${this.renderKpi(this.msg.averageTicket, fmtAmount(s.averageTicket))}
      </section>

      <div class="mt-6 grid items-end gap-3 md:grid-cols-[auto_auto_1fr_auto]">
        <div>
          <label class=${labelClass} for="month">${this.msg.monthLabel}</label>
          <select id="month" class=${fieldClass} @change=${(e: Event) => { this.filter = { ...this.filter, month: (e.target as HTMLSelectElement).value }; }}>
            <option value="" ?selected=${this.filter.month === ''}>${this.msg.allMonths}</option>
            ${monthsOf(parsed.rows).map((m) => html`<option value=${m} ?selected=${this.filter.month === m}>${m}</option>`)}
          </select>
        </div>
        <div>
          <label class=${labelClass} for="status">${this.msg.statusLabel}</label>
          <select id="status" class=${fieldClass} @change=${(e: Event) => { this.filter = { ...this.filter, status: (e.target as HTMLSelectElement).value }; }}>
            <option value="" ?selected=${this.filter.status === ''}>${this.msg.allStatuses}</option>
            ${statusesOf(parsed.rows).map((st) => html`<option value=${st} ?selected=${this.filter.status === st}>${st}</option>`)}
          </select>
        </div>
        <div>
          <label class=${labelClass} for="search">${this.msg.searchLabel}</label>
          <input id="search" class=${fieldClass} type="search" placeholder=${this.msg.searchPlaceholder}
            .value=${this.filter.query}
            @input=${(e: Event) => { this.filter = { ...this.filter, query: (e.target as HTMLInputElement).value }; }} />
        </div>
        <button type="button" class=${secondaryButtonClass} ?disabled=${rows.length === 0}
          @click=${() => downloadText('monthly-sales.csv', salesToCsv(rows))}>${this.msg.exportCsv}</button>
      </div>

      ${this.renderTable(rows)}
    `;
  }

  render() {
    this.msg = pageMessages[this.getMessageKey(pageMessages)];
    const parsed = parseSalesCsv(this.csvText);
    return html`
      <main class="min-h-full bg-[var(--page-bg,transparent)] px-6 py-8 text-[var(--text-default,currentColor)]">
        <div class="mx-auto max-w-5xl ${cardClass}">
          <h1 class="text-xl font-semibold text-[var(--text-strong,currentColor)]">${this.msg.pageTitle}</h1>
          <p class="mt-1 text-sm text-[var(--text-muted,currentColor)]">${this.msg.pageIntro}</p>

          <div class="mt-6">
            <label class=${labelClass} for="csv">${this.msg.csvLabel}</label>
            <textarea
              id="csv"
              class="${fieldClass} h-36 font-mono text-xs"
              spellcheck="false"
              aria-describedby="csvHint"
              .value=${this.csvText}
              @input=${(e: Event) => { this.csvText = (e.target as HTMLTextAreaElement).value; }}
            ></textarea>
            <p id="csvHint" class="mt-1 text-xs text-[var(--text-muted,currentColor)]">${this.msg.csvHint}</p>
            ${this.renderProblems(parsed)}
            <div class="mt-3 flex flex-wrap gap-2">
              <label class="${secondaryButtonClass} cursor-pointer">
                ${this.msg.openFile}
                <input type="file" accept=".csv,text/csv" class="sr-only" @change=${(e: Event) => this.openFile(e)} />
              </label>
              <button type="button" class=${secondaryButtonClass} @click=${() => this.setCsv(SAMPLE_CSV)}>${this.msg.loadSample}</button>
              <button type="button" class=${secondaryButtonClass} ?disabled=${this.csvText === ''} @click=${() => this.setCsv('')}>${this.msg.clear}</button>
            </div>
          </div>

          ${this.renderReport(parsed)}

          <p class="mt-4 text-xs text-[var(--text-muted,currentColor)]">${this.msg.localNote}</p>
        </div>
      </main>
    `;
  }
}
