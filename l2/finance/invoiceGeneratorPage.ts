/// <mls shortName="invoiceGeneratorPage" project="102022" enhancement="_blank" groupName="finance" />
import { CollabPageElement } from '/_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { initState, setState, getState } from '/_100554_/l2/collabState';
@customElement('finance--invoice-generator-page-102022')
export class InvoiceGeneratorPage extends CollabPageElement {
  constructor() {
    super();
  }
  initPage() {
    // Set page title
    setState('ui.mdm.pageTitle.title', `Invoice Generator`);
    // Initialize local state for the invoice generator
    initState('finance.invoiceDraft', {
      client: {
        id: null,
        name: '',
        email: '',
        taxId: ''
      },
      items: [
        {
          description: '',
          quantity: 1,
          unitPrice: 0,
          taxRate: 0
        }
      ],
      currency: 'USD',
      language: 'en',
      notes: '',
      template: null,
      subtotal: 0,
      taxes: 0,
      total: 0,
      previewUrl: ''
    });
    // Example of page detail init using selected state (if available)
    const data: any = getState('ui.mdm.selected');
    setState('ui.mdm.pageDetail.title', `Invoice Generator`);
  }
  // Calculate totals based on items array
  private calculateTotals() {
    const draft: any = getState('finance.invoiceDraft');
    if (!draft) return;
    const items = draft.items || [];
    let subtotal = 0;
    let taxes = 0;
    for (const it of items) {
      const qty = Number(it.quantity) || 0;
      const price = Number(it.unitPrice) || 0;
      const taxRate = Number(it.taxRate) || 0;
      const line = qty * price;
      subtotal += line;
      taxes += (line * taxRate) / 100;
    }
    const total = subtotal + taxes;
    setState('finance.invoiceDraft.subtotal', subtotal);
    setState('finance.invoiceDraft.taxes', taxes);
    setState('finance.invoiceDraft.total', total);
  }
  // Handlers
  private onClientChange(field: string, ev: any) {
    const value = ev?.target?.value ?? '';
    const draft: any = getState('finance.invoiceDraft');
    draft.client = { ...(draft.client || {}), [field]: value };
    setState('finance.invoiceDraft.client', draft.client);
  }
  private onItemChange(index: number, field: string, ev: any) {
    const value = ev?.target?.value ?? '';
    const draft: any = getState('finance.invoiceDraft');
    draft.items = draft.items || [];
    draft.items[index] = { ...(draft.items[index] || {}), [field]: value };
    setState('finance.invoiceDraft.items', draft.items);
    this.calculateTotals();
  }
  private addItem() {
    const draft: any = getState('finance.invoiceDraft');
    draft.items = draft.items || [];
    draft.items.push({ description: '', quantity: 1, unitPrice: 0, taxRate: 0 });
    setState('finance.invoiceDraft.items', draft.items);
    this.calculateTotals();
  }
  private removeItem(index: number) {
    const draft: any = getState('finance.invoiceDraft');
    draft.items = draft.items || [];
    draft.items.splice(index, 1);
    setState('finance.invoiceDraft.items', draft.items);
    this.calculateTotals();
  }
  // Placeholder: Generate PDF (client-side or trigger server-side job)
  private async generatePdf() {
    const draft: any = getState('finance.invoiceDraft');
    // Basic validation
    if (!draft.client?.email || !draft.items?.length) {
      this.notify('Please provide client email and at least one item.');
      return;
    }
    // Simulate PDF generation and produce a preview URL
    // In a real implementation this would call an API that returns a PDF blob or URL
    const placeholderUrl = `https://placehold.co/800x1000?text=Invoice+${encodeURIComponent(
      draft.client.name || 'Draft'
    )}`;
    setState('finance.invoiceDraft.previewUrl', placeholderUrl);
    this.notify('PDF preview generated.');
  }
  private async downloadPdf() {
    const draft: any = getState('finance.invoiceDraft');
    const url = draft.previewUrl;
    if (!url) {
      this.notify('Please generate PDF preview before downloading.');
      return;
    }
    // Trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice_${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    this.notify('Download started.');
  }
  private async sendEmail() {
    const draft: any = getState('finance.invoiceDraft');
    if (!draft.client?.email) {
      this.notify('Client email is required to send the invoice.');
      return;
    }
    // In a real app, call API to send e-mail with PDF attached
    this.notify(`Invoice sent to ${draft.client.email} (simulated).`);
  }
  private notify(message: string) {
    // Simple notification hook - integrate with platform notification if available
    console.info('[InvoiceGenerator]', message);
    // Optionally show a small UI toast - simplified for scaffold fidelity
    setState('finance.invoiceGenerator.lastNotice', message);
  }
  render() {
    const draft: any = getState('finance.invoiceDraft') || {};
    const items = draft.items || [];
    const subtotal = draft.subtotal || 0;
    const taxes = draft.taxes || 0;
    const total = draft.total || 0;
    const previewUrl = draft.previewUrl || '';
    return html`
<div class="p-6 bg-white rounded-lg shadow-sm">
<h2 class="text-xl font-semibold mb-4 text-gray-800">Invoice Generator</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="md:col-span-2">
<section class="mb-4 p-4 border rounded-lg">
<h3 class="font-medium mb-2">Client</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
<input class="border p-2 rounded" placeholder="Name" .value="${draft.client?.name || ''}" @input="${(e: any) => this.onClientChange('name', e)}" />
<input class="border p-2 rounded" placeholder="Email" .value="${draft.client?.email || ''}" @input="${(e: any) => this.onClientChange('email', e)}" />
<input class="border p-2 rounded" placeholder="Tax ID" .value="${draft.client?.taxId || ''}" @input="${(e: any) => this.onClientChange('taxId', e)}" />
</div>
</section>
<section class="mb-4 p-4 border rounded-lg">
<h3 class="font-medium mb-2">Items</h3>
<div class="space-y-3">
${items.map((it: any, idx: number) => html`
<div class="grid grid-cols-1 md:grid-cols-6 gap-2 items-end">
<input class="col-span-2 border p-2 rounded" placeholder="Description" .value="${it.description || ''}" @input="${(e: any) => this.onItemChange(idx, 'description', e)}" />
<input type="number" class="border p-2 rounded" placeholder="Qty" .value="${it.quantity}" @input="${(e: any) => this.onItemChange(idx, 'quantity', e)}" />
<input type="number" class="border p-2 rounded" placeholder="Unit Price" .value="${it.unitPrice}" @input="${(e: any) => this.onItemChange(idx, 'unitPrice', e)}" />
<input type="number" class="border p-2 rounded" placeholder="Tax %" .value="${it.taxRate}" @input="${(e: any) => this.onItemChange(idx, 'taxRate', e)}" />
<button class="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1" @click="${() => this.removeItem(idx)}">Remove</button>
</div>
`)}
</div>
<div class="mt-3">
<button class="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2" @click="${() => this.addItem()}">Add item</button>
</div>
</section>
<section class="mb-4 p-4 border rounded-lg">
<h3 class="font-medium mb-2">Options</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
<select class="border p-2 rounded" @change="${(e: any) => setState('finance.invoiceDraft.language', e.target.value)}">
<option value="en" ?selected=${draft.language === 'en'}>English</option>
<option value="pt" ?selected=${draft.language === 'pt'}>Português</option>
<option value="es" ?selected=${draft.language === 'es'}>Español</option>
</select>
<input class="border p-2 rounded" placeholder="Currency (e.g., USD)" .value="${draft.currency || 'USD'}" @input="${(e: any) => setState('finance.invoiceDraft.currency', e.target.value)}" />
</div>
<textarea class="w-full mt-3 border p-2 rounded" rows="3" placeholder="Notes" .value="${draft.notes || ''}" @input="${(e: any) => setState('finance.invoiceDraft.notes', e.target.value)}"></textarea>
</section>
</div>
<aside class="md:col-span-1">
<div class="p-4 border rounded-lg mb-4">
<h3 class="font-medium mb-2">Summary</h3>
<div class="text-gray-700">
<div class="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)} ${draft.currency}</span></div>
<div class="flex justify-between"><span>Taxes</span><span>${taxes.toFixed(2)} ${draft.currency}</span></div>
<div class="flex justify-between font-semibold mt-2"><span>Total</span><span>${total.toFixed(2)} ${draft.currency}</span></div>
</div>
<div class="mt-4 space-y-2">
<button class="w-full bg-green-600 hover:bg-green-700 text-white rounded px-3 py-2" @click="${() => this.generatePdf()}">Generate Preview</button>
<button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded px-3 py-2" @click="${() => this.downloadPdf()}">Download PDF</button>
<button class="w-full bg-yellow-600 hover:bg-yellow-700 text-white rounded px-3 py-2" @click="${() => this.sendEmail()}">Send by Email</button>
</div>
</div>
<div class="p-4 border rounded-lg">
<h3 class="font-medium mb-2">Preview</h3>
${previewUrl ? html`<img src="${previewUrl}" alt="PDF Preview" class="w-full rounded border" />` : html`<div class="text-sm text-gray-500">No preview available. Generate preview to see it here.</div>`}
</div>
</aside>
</div>
</div>
`;
  }
}