/// <mls shortName="timeConverter" project="102022" enhancement="_blank" groupName="utilities" />
import { CollabPageElement } from '/_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { initState, setState, getState } from '/_100554_/l2/collabState';
@customElement('generalutilities--time-converter-102022')
export class TimeConverterPage extends CollabPageElement {
  // Estado simples interno
  inputValue: string = '';
  fromUnit: 'hours' | 'minutes' | 'seconds' = 'hours';
  toUnit: 'hours' | 'minutes' | 'seconds' = 'minutes';
  resultValue: string = '';
  formatAsHHMMSS: boolean = false;
  // dark theme tracking
  isDark: boolean = false;
  mediaQuery: any = null;
  initPage() {
    // Define o título da página em Português
    setState('ui.mdm.pageTitle.title', `Conversor de Tempo`);
    // Estado inicial local (exemplo de uso de initState se necessário)
    try {
      initState('ui.mdm.organismDetail', {
        id: 'time-converter',
        description: 'Conversor simples entre horas, minutos e segundos',
        status: 'active'
      });
    } catch (e) {
      // initState pode não existir em todos os ambientes; ignora falhas
    }
    // Detecta preferencia de tema do navegador e escuta mudanças
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        this.isDark = mq.matches;
        this.mediaQuery = mq;
        // addEventListener é preferível, addListener para compatibilidade
        if (mq.addEventListener) {
          mq.addEventListener('change', this.handleColorSchemeChange);
        } else if (mq.addListener) {
          mq.addListener(this.handleColorSchemeChange);
        }
      }
    } catch (e) {
      // ignore
    }
  }
  // Remove listener quando o componente for desconectado
  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
  }
  disconnectedCallback() {
    try {
      if (this.mediaQuery) {
        if (this.mediaQuery.removeEventListener) {
          this.mediaQuery.removeEventListener('change', this.handleColorSchemeChange);
        } else if (this.mediaQuery.removeListener) {
          this.mediaQuery.removeListener(this.handleColorSchemeChange);
        }
      }
    } catch (e) {
      // ignore
    }
    super.disconnectedCallback && super.disconnectedCallback();
  }
  handleColorSchemeChange = (e: any) => {
    this.isDark = !!(e && e.matches);
    this.requestUpdate();
  };
  // Converte uma entrada textual para segundos.
  // Aceita formatos: hh:mm:ss, mm:ss, ss, ou número decimal (horas/minutos dependendo do unitFlag)
  parseToSeconds(text: string, assumedUnit: 'hours' | 'minutes' | 'seconds') {
    if (!text || text.trim() === '') return 0;
    const t = text.trim();
    // hh:mm:ss ou mm:ss
    if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(t) || /^\d{1,2}:\d{1,2}$/.test(t)) {
      const parts = t.split(':').map(p => parseInt(p, 10));
      if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
      }
      if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
      }
    }
    // número decimal ou inteiro
    const num = Number(t.replace(',', '.'));
    if (!Number.isNaN(num)) {
      switch (assumedUnit) {
        case 'hours':
          return Math.round(num * 3600);
        case 'minutes':
          return Math.round(num * 60);
        case 'seconds':
          return Math.round(num);
      }
    }
    return 0;
  }
  // formata segundos em hh:mm:ss ou decimal conforme desejado
  formatFromSeconds(seconds: number, targetUnit: 'hours' | 'minutes' | 'seconds', asHHMMSS: boolean) {
    if (asHHMMSS) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      const pad = (n: number) => String(n).padStart(2, '0');
      return `${pad(h)}:${pad(m)}:${pad(s)}`;
    }
    switch (targetUnit) {
      case 'hours':
        return (seconds / 3600).toString();
      case 'minutes':
        return (seconds / 60).toString();
      case 'seconds':
        return seconds.toString();
    }
  }
  // Realiza a conversão e atualiza resultValue
  convert() {
    const secs = this.parseToSeconds(this.inputValue, this.fromUnit);
    const out = this.formatFromSeconds(secs, this.toUnit, this.formatAsHHMMSS);
    this.resultValue = out;
    this.requestUpdate(); 
  }
  swapDirections() {
    const tmp = this.fromUnit;
    this.fromUnit = this.toUnit;
    this.toUnit = tmp;
    // Recalcula automaticamente
    this.convert();
  }
  clearAll() {
    this.inputValue = '';
    this.resultValue = '';
    this.requestUpdate();
  }
  async copyResult() {
    try {
      await navigator.clipboard.writeText(this.resultValue || '');
      // pequena notificação visual pode ser enviada ao estado global se necessário
      setState('ui.mdm.flash', { message: 'Resultado copiado', type: 'success' });
    } catch (e) {
      setState('ui.mdm.flash', { message: 'Falha ao copiar', type: 'error' });
    }
  }
  // Eventos de input
  onInputChange(e: any) {
    this.inputValue = e.target.value;
  }
  onFromChange(e: any) {
    this.fromUnit = e.target.value;
    this.convert();
  }
  onToChange(e: any) {
    this.toUnit = e.target.value;
    this.convert();
  }
  onToggleFormat() {
    this.formatAsHHMMSS = !this.formatAsHHMMSS;
    this.convert();
  }
  render() {
    return html`
<div class="${this.isDark ? 'dark' : ''} p-4 max-w-3xl mx-auto">
<div class="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Conversor de Tempo</h2>
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Entrada</label>
<div class="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
<input
class="col-span-2 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-blue-200 p-2"
placeholder="ex.: 1.5 ou 01:30:00 ou 90"
.value=${this.inputValue}
@input=${(e: Event) => this.onInputChange(e)}
aria-label="Entrada de tempo"
/>
<div class="flex space-x-2 w-full">
<select
class="rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-1/2 text-gray-900 dark:text-gray-100"
@change=${(e: Event) => this.onFromChange(e)}
.value=${this.fromUnit}
aria-label="Unidade de origem"
>
<option value="hours">Horas</option>
<option value="minutes">Minutos</option>
<option value="seconds">Segundos</option>
</select>
<button
class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
@click=${() => this.swapDirections()}
title="Alternar direção"
>
Alternar
</button>
</div>
</div>
<div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
<label class="text-sm font-medium text-gray-700 dark:text-gray-300">Converter para</label>
<div class="sm:col-span-2 flex space-x-2">
<select
class="rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full text-gray-900 dark:text-gray-100"
@change=${(e: Event) => this.onToChange(e)}
.value=${this.toUnit}
aria-label="Unidade destino"
>
<option value="hours">Horas</option>
<option value="minutes">Minutos</option>
<option value="seconds">Segundos</option>
</select>
<label class="inline-flex items-center space-x-2 ml-2 text-gray-600 dark:text-gray-300">
<input type="checkbox" class="rounded" @change=${() => this.onToggleFormat()} .checked=${this.formatAsHHMMSS} />
<span class="text-sm text-gray-600 dark:text-gray-300">Formato hh:mm:ss</span>
</label>
</div>
</div>
<div class="mt-4 flex space-x-2">
<button class="bg-blue-600 dark:bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-700 dark:hover:bg-blue-600" @click=${() => this.convert()}>Converter</button>
<button class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" @click=${() => this.clearAll()}>Limpar</button>
<button class="bg-green-600 dark:bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-700 dark:hover:bg-green-600" @click=${() => this.copyResult()}>Copiar</button>
</div>
<div class="mt-4">
<h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Resultado</h3>
<div class="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-100">
<code class="block break-words">${this.resultValue || '—'}</code>
</div>
</div>
<div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
<p>Dicas: insira tempos em hh:mm:ss ou em decimal (ex.: 1.5 para 1 hora e 30 minutos). O botão "Alternar" inverte origem/destino.</p>
</div>
</div>
</div>
`;
  }
}