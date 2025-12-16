/// <mls shortName="shopeeFeeCalculator" project="102022" folder="ecommerce" enhancement="_100554_enhancementLit" groupName="ecommerce" />
import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit'; 
import { initState, setState, getState } from '/_100554_/l2/collabState.js';
@customElement('ecommerce--shopee-fee-calculator-102022')
export class EcommerceShopeeFeeCalculator102022 extends CollabPageElement {
    // Valores internos (estados locais simples)
    price: number = 0;
    cost: number = 0;
    freight: number = 0;
    discount: number = 0;
    commissionPercent: number = 12; // padrão inicial
    paymentFeePercent: number = 2.5; // padrão inicial
    constructor() {
        super();
    }
    initPage() {
        // Define título da página em pt-BR
        setState('ui.mdm.pageTitle.title', `Calculadora de Taxas - Shopee`);
        // Inicializa configurações persistidas (se houver)
        const savedConfig: any = getState('ui.shopeeFeeCalculator.config');
        initState('ui.shopeeFeeCalculator.config', {
            commissionPercent: savedConfig?.commissionPercent ?? 12,
            paymentFeePercent: savedConfig?.paymentFeePercent ?? 2.5,
            currency: savedConfig?.currency ?? 'BRL'
        });
        // Carrega valores iniciais na UI a partir do state
        const cfg: any = getState('ui.shopeeFeeCalculator.config');
        this.commissionPercent = cfg?.commissionPercent ?? 12;
        this.paymentFeePercent = cfg?.paymentFeePercent ?? 2.5;
    }
    // Handlers de inputs
    onInputNumber(e: Event) {
        const t = e.target as HTMLInputElement;
        const v = parseFloat(t.value.replace(',', '.')) || 0;
        switch (t.name) {
            case 'price':
                this.price = v;
                break;
            case 'cost':
                this.cost = v;
                break;
            case 'freight':
                this.freight = v;
                break;
            case 'discount':
                this.discount = v;
                break;
            case 'commissionPercent':
                this.commissionPercent = v;
                // persist config
                setState('ui.shopeeFeeCalculator.config', {
                    commissionPercent: this.commissionPercent,
                    paymentFeePercent: this.paymentFeePercent
                });
                break;
            case 'paymentFeePercent':
                this.paymentFeePercent = v;
                setState('ui.shopeeFeeCalculator.config', {
                    commissionPercent: this.commissionPercent,
                    paymentFeePercent: this.paymentFeePercent
                });
                break;
        }
        this.requestUpdate();
    }
    // Cálculos principais
    compute() {
        const price = Number(this.price || 0);
        const cost = Number(this.cost || 0);
        const freight = Number(this.freight || 0);
        const discount = Number(this.discount || 0);
        const commissionValue = +(price * (this.commissionPercent / 100));
        const paymentFeeValue = +(price * (this.paymentFeePercent / 100));
        const totalFees = +(commissionValue + paymentFeeValue);
        const costTotal = +(cost + freight + totalFees);
        const profit = +(price - discount - cost - freight - totalFees);
        const margin = price !== 0 ? +((profit / price) * 100) : 0;
        return {
            commissionValue: Number(commissionValue.toFixed(2)),
            paymentFeeValue: Number(paymentFeeValue.toFixed(2)),
            totalFees: Number(totalFees.toFixed(2)),
            costTotal: Number(costTotal.toFixed(2)),
            profit: Number(profit.toFixed(2)),
            margin: Number(margin.toFixed(2))
        };
    }
    // Histórico: salva localmente via estado colaborativo (e localStorage por garantia)
    saveHistory() {
        const now = new Date();
        const computed = this.compute();
        const entry = {
            date: now.toISOString(),
            price: this.price,
            cost: this.cost,
            freight: this.freight,
            discount: this.discount,
            commissionPercent: this.commissionPercent,
            paymentFeePercent: this.paymentFeePercent,
            fees: computed.totalFees,
            profit: computed.profit,
            margin: computed.margin
        };
        const key = 'ui.shopeeFeeCalculator.history';
        const existing: any[] = getState(key) || JSON.parse(localStorage.getItem(key) || 'null') || [];
        existing.unshift(entry);
        // Limita tamanho do histórico a 200 entradas para evitar excessos
        const trimmed = existing.slice(0, 200);
        setState(key, trimmed);
        localStorage.setItem(key, JSON.stringify(trimmed));
        // feedback simples
        setState('ui.shopeeFeeCalculator.lastSaved', entry);
        this.requestUpdate();
    }
    // Exporta histórico atual para CSV
    exportCsv() {
        const key = 'ui.shopeeFeeCalculator.history';
        const history: any[] = getState(key) || JSON.parse(localStorage.getItem(key) || 'null') || [];
        if (!history || history.length === 0) {
            // nada a exportar
            return;
        }
        const headers = ['date', 'price', 'cost', 'freight', 'discount', 'commissionPercent', 'paymentFeePercent', 'fees', 'profit', 'margin'];
        const rows = history.map(r => headers.map(h => {
            const v = r[h];
            if (v === undefined || v === null) return '';
            // formata números com ponto decimal para CSV
            return typeof v === 'number' ? v.toFixed(2) : (`"${String(v).replace(/"/g, '""')}"`);
        }).join(','));
        const csv = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'shopee_fee_history.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
    // Recupera o histórico atual (do state ou localStorage)
    getHistoryArray(): any[] {
        const key = 'ui.shopeeFeeCalculator.history';
        const history: any[] = getState(key) || JSON.parse(localStorage.getItem(key) || 'null') || [];
        return Array.isArray(history) ? history : [];
    }
    // Deleta um item do histórico pelo índice
    deleteHistory(index: number) {
        const key = 'ui.shopeeFeeCalculator.history';
        const existing: any[] = this.getHistoryArray();
        if (!existing || existing.length === 0) return;
        if (index < 0 || index >= existing.length) return;
        existing.splice(index, 1);
        setState(key, existing);
        localStorage.setItem(key, JSON.stringify(existing));
        setState('ui.shopeeFeeCalculator.lastSaved', existing[0] || null);
        this.requestUpdate();
    }
    // Limpa todo o histórico
    clearHistory() {
        const key = 'ui.shopeeFeeCalculator.history';
        setState(key, []);
        localStorage.removeItem(key);
        setState('ui.shopeeFeeCalculator.lastSaved', null);
        this.requestUpdate();
    }
    // Render do bloco de histórico com opções de deletar e limpar tudo
    renderHistory() {
        const history = this.getHistoryArray();
        return html`
<div class="mt-6 bg-white p-4 rounded-lg shadow">
<div class="flex items-center justify-between">
<h3 class="text-lg font-semibold text-gray-800">Histórico de Cálculos</h3>
<div class="flex items-center gap-2">
<button @click="${() => this.clearHistory()}" class="px-3 py-1 bg-red-600 text-white rounded text-sm">Limpar tudo</button>
<button @click="${() => this.exportCsv()}" class="px-3 py-1 bg-green-600 text-white rounded text-sm">Exportar CSV</button>
</div>
</div>
<div class="mt-4">
${history.length === 0 ? html`<p class="text-gray-600">Nenhum registro salvo ainda. Use "Salvar histórico" após um cálculo para criar entradas.</p>` : html`
<ul class="space-y-3">
${history.map((entry, i) => html`
<li class="border rounded p-3 flex justify-between items-start bg-gray-50">
<div>
<div class="text-sm text-gray-500">${new Date(entry.date).toLocaleString('pt-BR')}</div>
<div class="mt-1 text-gray-800">
<div>Preço: R$ ${Number(entry.price || 0).toFixed(2)} &nbsp;•&nbsp; Lucro: R$ ${Number(entry.profit || 0).toFixed(2)} &nbsp;•&nbsp; Margem: ${Number(entry.margin || 0).toFixed(2)}%</div>
<div class="text-sm text-gray-600">Comissão: ${Number(entry.commissionPercent || 0).toFixed(2)}% • Taxa de pagamento: ${Number(entry.paymentFeePercent || 0).toFixed(2)}%</div>
</div>
</div>
<div class="flex flex-col items-end gap-2">
<button @click="${() => this.deleteHistory(i)}" class="px-2 py-1 bg-yellow-500 text-white rounded text-sm">Deletar</button>
</div>
</li>
`)}
</ul>
`}
</div>
</div>
`;
    }
    renderInputs() {
        const c = this.compute();
        return html`
<div class="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
<h2 class="text-xl font-semibold mb-4 text-gray-800">Calculadora de Taxas - Shopee</h2>
<hr>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<label class="block">
<span class="text-sm text-gray-600">Preço de venda (R$)</span>
<input name="price" type="number" step="0.01" .value="${this.price}" @input="${(e: Event) => this.onInputNumber(e)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
</label>
<label class="block">
<span class="text-sm text-gray-600">Custo do produto (R$)</span>
<input name="cost" type="number" step="0.01" .value="${this.cost}" @input="${(e: Event) => this.onInputNumber(e)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
</label>
<label class="block">
<span class="text-sm text-gray-600">Frete (R$)</span>
<input name="freight" type="number" step="0.01" .value="${this.freight}" @input="${(e: Event) => this.onInputNumber(e)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
</label>
<label class="block">
<span class="text-sm text-gray-600">Desconto / Cupom (R$)</span>
<input name="discount" type="number" step="0.01" .value="${this.discount}" @input="${(e: Event) => this.onInputNumber(e)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
</label>
<label class="block">
<span class="text-sm text-gray-600">Comissão da plataforma (%)</span>
<input name="commissionPercent" type="number" step="0.01" .value="${this.commissionPercent}" @input="${(e: Event) => this.onInputNumber(e)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
</label>
<label class="block">
<span class="text-sm text-gray-600">Taxa de pagamento (%)</span>
<input name="paymentFeePercent" type="number" step="0.01" .value="${this.paymentFeePercent}" @input="${(e: Event) => this.onInputNumber(e)}" class="mt-1 block w-full rounded border-gray-200 p-2" />
</label>
</div>
<div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="bg-gray-50 p-4 rounded">
<h3 class="font-semibold text-gray-700">Resumo de taxas</h3>
<div class="mt-2 text-gray-800">
<div class="flex justify-between"><span>Comissão (${this.commissionPercent}%):</span><span>R$ ${c.commissionValue.toFixed(2)}</span></div>
<div class="flex justify-between"><span>Taxa de pagamento (${this.paymentFeePercent}%):</span><span>R$ ${c.paymentFeeValue.toFixed(2)}</span></div>
<div class="flex justify-between font-semibold mt-2"><span>Total de taxas:</span><span>R$ ${c.totalFees.toFixed(2)}</span></div>
</div>
</div>
<div class="bg-gray-50 p-4 rounded">
<h3 class="font-semibold text-gray-700">Resultado financeiro</h3>
<div class="mt-2 text-gray-800">
<div class="flex justify-between"><span>Custo total (produto + frete + taxas):</span><span>R$ ${c.costTotal.toFixed(2)}</span></div>
<div class="flex justify-between"><span>Lucro líquido:</span><span>R$ ${c.profit.toFixed(2)}</span></div>
<div class="flex justify-between"><span>Margem:</span><span>${c.margin.toFixed(2)}%</span></div>
</div>
</div>
</div>
<div class="mt-6 flex gap-3">
<button @click="${() => this.saveHistory()}" class="px-4 py-2 bg-blue-600 text-white rounded">Salvar histórico</button>
<button @click="${() => this.exportCsv()}" class="px-4 py-2 bg-green-600 text-white rounded">Exportar CSV</button>
</div>
${this.renderHistory()}
</div>
`;
    }
    render() {
        return html`
<div class="p-[1em]">
${this.renderInputs()}
</div>
`;
    }
}
