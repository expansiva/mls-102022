/// <mls shortName="temperatureConverter" project="102022" folder="utils" enhancement="_100554_enhancementLit" groupName="utils" />
import { CollabPageElement } from '/_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { initState, setState } from '/_100554_/l2/collabState';

@customElement('utils--temperature-converter-102022')
export class UtilsTemperatureConverter102022 extends CollabPageElement {
  // Local UI state
  private inputValue: string = '';
  private direction: 'CtoF' | 'FtoC' = 'CtoF';
  private resultText: string = '';
  private errorText: string = '';

  constructor() {
    super();
  }

  initPage() {
    // Define page title
    setState('ui.mdm.pageTitle.title', `Temperature Converter`);

    // Initialize local state for the mini app
    initState('ui.temperatureConverter', {
      inputValue: '',
      direction: 'CtoF',
      resultText: '',
      errorText: ''
    });
  }

  // Parse numeric input allowing comma or dot as decimal separator
  private parseInput(value: string): number | null {
    if (!value || value.trim() === '') return null;
    const normalized = value.replace(',', '.').trim();
    const num = Number(normalized);
    if (!Number.isFinite(num)) return null;
    return num;
  }

  private formatResult(value: number): string {
    return Number.isFinite(value) ? value.toFixed(2) : '';
  }

  private computeConversion(value: number, direction: 'CtoF' | 'FtoC'): number {
    if (direction === 'CtoF') {
      return (value * 9) / 5 + 32;
    }
    return ((value - 32) * 5) / 9;
  }

  private onInput(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.inputValue = target.value;
    this.updateConversion();
  }

  private onToggle() {
    this.direction = this.direction === 'CtoF' ? 'FtoC' : 'CtoF';
    this.updateConversion();
  }

  private updateConversion() {
    const parsed = this.parseInput(this.inputValue);
    if (parsed === null) {
      if (this.inputValue.trim() === '') {
        this.resultText = '';
        this.errorText = '';
      } else {
        this.resultText = '';
        this.errorText = 'Valor inválido';
      }
    } else {
      const converted = this.computeConversion(parsed, this.direction);
      this.resultText = this.formatResult(converted);
      this.errorText = '';
    }
    // update shared state (optional)
    setState('ui.temperatureConverter.inputValue', this.inputValue);
    setState('ui.temperatureConverter.direction', this.direction);
    setState('ui.temperatureConverter.resultText', this.resultText);
    setState('ui.temperatureConverter.errorText', this.errorText);
    this.requestUpdate();
  }

  private onClear() {
    this.inputValue = '';
    this.resultText = '';
    this.errorText = '';
    setState('ui.temperatureConverter.inputValue', '');
    setState('ui.temperatureConverter.resultText', '');
    setState('ui.temperatureConverter.errorText', '');
    this.requestUpdate();
  }

  private async onCopy() {
    if (!this.resultText) return;
    try {
      await navigator.clipboard.writeText(this.resultText);
      // small feedback via state (could be used by other components)
      setState('ui.temperatureConverter.copyFeedback', 'copied');
    } catch (err) {
      // ignore copy errors silently
      setState('ui.temperatureConverter.copyFeedback', 'error');
    }
  }

  render() {
    const inputLabel = this.direction === 'CtoF' ? 'Celsius (°C)' : 'Fahrenheit (°F)';
    const outputLabel = this.direction === 'CtoF' ? 'Fahrenheit (°F)' : 'Celsius (°C)';

    return html`
      <div class="max-w-xl mx-auto p-4">
        <div class="bg-white shadow rounded-lg p-4">
          <header class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold">Conversor de Temperatura</h2>
            <button
              class="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              @click=${() => { this.onToggle(); }}
              aria-pressed=${this.direction === 'FtoC'}
              aria-label="Alternar direção da conversão"
            >
              ${this.direction === 'CtoF' ? 'C→F' : 'F→C'}
            </button>
          </header>

          <label class="block text-sm font-medium text-gray-700 mb-1">${inputLabel}</label>
          <input
            class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-3"
            type="text"
            inputmode="decimal"
            placeholder="Insira o valor (ex: 36.6)"
            .value=${this.inputValue}
            @input=${(e: InputEvent) => this.onInput(e)}
            aria-label="Valor de temperatura"
          />

          <div class="flex items-center justify-between mb-3">
            <div>
              <p class="text-sm text-gray-600">Resultado</p>
              <p class="text-2xl font-mono mt-1 ${this.resultText ? 'text-indigo-600' : 'text-gray-400'}">${this.resultText ? `${this.resultText} ${outputLabel}` : '—'}</p>
            </div>

            <div class="flex flex-col items-end gap-2">
              <button
                class="px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200 focus:outline-none"
                @click=${() => this.onCopy()}
                ?disabled=${!this.resultText}
                aria-disabled=${!this.resultText}
              >Copiar</button>

              <button
                class="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200 focus:outline-none"
                @click=${() => this.onClear()}
              >Limpar</button>
            </div>
          </div>

          ${this.errorText
            ? html`<p class="text-sm text-red-600" role="alert">${this.errorText}</p>`
            : html``}

          <footer class="mt-3 text-xs text-gray-500">
            Conversão em cliente. Resultado com 2 casas decimais. Suporta "," e "." como separador decimal.
          </footer>
        </div>
      </div>
    `;
  }
}