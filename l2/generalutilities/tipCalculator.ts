/// <mls shortName="tipCalculator" project="102022" folder="generalutilities" enhancement="_100554_enhancementLit" groupName="generalutilities" />
import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { initState, setState, getState } from '/_100554_/l2/collabState.js';
@customElement('generalutilities--tip-calculator-102022')
export class TipCalculatorPage extends CollabPageElement {
  constructor() {
    super();
  }
  initPage() {
    
    // Define título da página
    setState('ui.mdm.pageTitle.title', `Calculadora de Gorjeta`);
    // Estado inicial para o mini-app
    initState('ui.mdm.tipCalculator', {
      billAmount: 0,
      selectedTip: 15,
      customTip: null,
      people: 1,
      rounding: 'none' // options: 'none' | 'ceil' | 'floor' | 'round'
    });
  }
  // Helpers
  formatCurrency(value: number) {
    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatter.format(isNaN(value) ? 0 : value);
  }
  parseNumber(value: string) {
    const cleaned = value.replace(/[^0-9,.-]/g, '').replace(',', '.');
    const n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }
  // Event handlers
  onBillInput(e: any) {
    const v = this.parseNumber(e.target.value || '0');
    setState('ui.mdm.tipCalculator.billAmount', v);
    this.requestUpdate();
  }
  onSelectTip(percent: number) {
    setState('ui.mdm.tipCalculator.selectedTip', percent);
    setState('ui.mdm.tipCalculator.customTip', null);
    this.requestUpdate();
  }
  onCustomTipInput(e: any) {
    const v = this.parseNumber(e.target.value || '0');
    setState('ui.mdm.tipCalculator.customTip', v);
    setState('ui.mdm.tipCalculator.selectedTip', 0);
    this.requestUpdate();
  }
  onPeopleInput(e: any) {
    let v = parseInt(e.target.value, 10);
    if (isNaN(v) || v < 1) v = 1;
    setState('ui.mdm.tipCalculator.people', v);
    this.requestUpdate();
  }
  onRoundingChange(e: any) {
    setState('ui.mdm.tipCalculator.rounding', e.target.value);
    this.requestUpdate();
  }
  compute() {
    const s: any = getState('ui.mdm.tipCalculator') || {};
    const billAmount = Number(s.billAmount) || 0;
    const tipPercent = s.customTip && Number(s.customTip) > 0 ? Number(s.customTip) : Number(s.selectedTip) || 0;
    const people = Math.max(1, Number(s.people) || 1);
    const rounding = s.rounding || 'none';
    const tipTotal = (billAmount * tipPercent) / 100;
    const totalWithTip = billAmount + tipTotal;
    let perPerson = totalWithTip / people;
    if (rounding === 'ceil') perPerson = Math.ceil(perPerson);
    else if (rounding === 'floor') perPerson = Math.floor(perPerson);
    else if (rounding === 'round') perPerson = Math.round(perPerson);
    const tipPerPerson = tipTotal / people;
    return {
      billAmount,
      tipPercent,
      tipTotal,
      totalWithTip,
      perPerson,
      tipPerPerson,
      people,
      rounding
    };
  }
  render() {
    // Lê estado
    const s: any = getState('ui.mdm.tipCalculator') || {};
    const { billAmount, tipPercent, tipTotal, totalWithTip, perPerson, tipPerPerson, people, rounding } = this.compute();
    return html`
<div class="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-sm">
<h2 class="text-xl font-semibold mb-4 text-gray-800">Calculadora de Gorjeta</h2>
<label class="block text-sm text-gray-700 mb-1">Valor da conta (R$)</label>
<input
type="text"
inputmode="decimal"
.value="${billAmount ? billAmount.toFixed(2).replace('.', ',') : ''}"
@input="${(e: any) => this.onBillInput(e)}"
placeholder="0,00"
class="w-full border rounded px-3 py-2 mb-4 text-gray-800"
/>
<div class="mb-4">
<div class="text-sm text-gray-700 mb-2">Porcentagem de gorjeta</div>
<div class="flex gap-2 mb-2">
<button class="px-3 py-1 rounded bg-blue-50 border text-blue-700" @click="${() => this.onSelectTip(10)}">10%</button>
<button class="px-3 py-1 rounded bg-blue-50 border text-blue-700" @click="${() => this.onSelectTip(15)}">15%</button>
<button class="px-3 py-1 rounded bg-blue-50 border text-blue-700" @click="${() => this.onSelectTip(20)}">20%</button>
<button class="px-3 py-1 rounded bg-gray-50 border text-gray-700" @click="${() => this.onSelectTip(0)}">Personalizado</button>
</div>
</div>
<div class="mb-4">
<label class="block text-sm text-gray-700 mb-1">Número de pessoas</label>
<input
type="number"
min="1"
.value="${s.people ?? 1}"
@input="${(e: any) => this.onPeopleInput(e)}"
class="w-32 border rounded px-3 py-2"
/>
</div>
<div class="mb-4">
<label class="block text-sm text-gray-700 mb-1">Arredondamento (opcional)</label>
<select class="border rounded px-3 py-2" @change="${(e: any) => this.onRoundingChange(e)}">
<option value="none" ?selected="${rounding === 'none'}">Sem arredondamento</option>
<option value="ceil" ?selected="${rounding === 'ceil'}">Arredondar para cima</option>
<option value="floor" ?selected="${rounding === 'floor'}">Arredondar para baixo</option>
<option value="round" ?selected="${rounding === 'round'}">Arredondar ao inteiro mais próximo</option>
</select>
</div>
<div class="mt-6 p-4 bg-gray-50 rounded border">
<div class="flex justify-between text-gray-700 mb-2">
<span>Gorjeta total</span>
<strong>${this.formatCurrency(tipTotal)}</strong>
</div>
<div class="flex justify-between text-gray-700 mb-2">
<span>Total com gorjeta</span>
<strong>${this.formatCurrency(totalWithTip)}</strong>
</div>
<div class="flex justify-between text-gray-700 mb-2">
<span>Gorjeta por pessoa</span>
<strong>${this.formatCurrency(tipPerPerson)}</strong>
</div>
<div class="flex justify-between text-gray-800 text-lg font-semibold">
<span>Total por pessoa</span>
<strong>${this.formatCurrency(perPerson)}</strong>
</div>
</div>
<p class="text-xs text-gray-500 mt-3">Valores exibidos em R$ (pt-BR). Cálculo realizado localmente.</p>
</div>
`;
  }
}
