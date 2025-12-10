/// <mls shortName="pageTest2" project="102022" enhancement="_100554_enhancementLit" groupName="page" folder="areaoftest" />

import { CollabPageElement } from '/_100554_/l2/collabPageElement';
import { customElement } from 'lit/decorators.js';
import { globalState, initState, setState } from '/_100554_/l2/collabState';
import { html } from 'lit'; 

@customElement('areaoftest--page-test2-102022')
export class PageTest2102022 extends CollabPageElement {
  
  initPage() {

  }
  // Simple local state for scaffold
  private cityA: string = 'America/Sao_Paulo';
  private cityB: string = 'Asia/Tokyo';

  // Basic options for selection (placeholder for a full city database)
  private cityOptions = [
    { id: 'America/Sao_Paulo', label: 'São Paulo' },
    { id: 'Asia/Tokyo', label: 'Tóquio' },
    { id: 'Europe/London', label: 'Londres' },
    { id: 'America/New_York', label: 'New York' }
  ];

  constructor() {
    super();
    // Placeholder: initialize any shared state if needed
    // initState(...) or setState(...) could be used here in an integrated environment
  }

  // Helper: get localized time string for a timezone
  private getTimeForZone(zone: string) {
    try {
      return new Date().toLocaleString('pt-BR', { timeZone: zone });
    } catch (e) {
      return '—';
    }
  }

  // Helper: get hour and minute numeric parts for a timezone
  private getHourMinute(zone: string) {
    try {
      // use a locale that yields 24-hour format reliably
      const s = new Date().toLocaleString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: zone });
      const parts = s.split(':').map(p => parseInt(p, 10));
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        return { hour: parts[0], minute: parts[1] };
      }
    } catch (e) {
      // fallthrough
    }
    return { hour: 0, minute: 0 };
  }

  // Compute difference in hours/minutes between cityA and cityB (cityA - cityB)
  private computeDifference() {
    // This is a simple approach based on local hour/minute parts; it covers most needs for a scaffold.
    // For production, consider using a timezone-aware library (luxon, moment-timezone) for DST and edge cases.
    const a = this.getHourMinute(this.cityA);
    const b = this.getHourMinute(this.cityB);
    const minutesA = a.hour * 60 + a.minute;
    const minutesB = b.hour * 60 + b.minute;
    let diff = minutesA - minutesB;
    // normalize to range -12h..+12h approximately
    if (diff > 12 * 60) diff -= 24 * 60;
    if (diff <= -12 * 60) diff += 24 * 60;
    const sign = diff >= 0 ? '+' : '-';
    const abs = Math.abs(diff);
    const hours = Math.floor(abs / 60);
    const mins = abs % 60;
    return `${sign}${hours}h ${mins}m`;
  }

  private onCityAChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.cityA = select.value;
    this.requestUpdate();
    // Placeholder: update shared state if needed
    // setState({ selectedZones: { a: this.cityA, b: this.cityB } });
  }

  private onCityBChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.cityB = select.value;
    this.requestUpdate();
    // Placeholder: update shared state if needed
  }

  render() {
    // The UI below reflects the planning.goal: allow selecting two cities and showing current times + difference.
    // The first user story (select two cities and see difference in real time) is represented here.
    const timeA = this.getTimeForZone(this.cityA);
    const timeB = this.getTimeForZone(this.cityB);
    const diff = this.computeDifference();

    return html`
      <div class="p-4 bg-white rounded shadow-md max-w-xl mx-auto">
        <h1 class="text-xl font-bold mb-2">Comparador de Fusos Horários</h1>
        <p class="text-sm text-gray-600 mb-4">Permite selecionar duas cidades e visualizar seus horários atuais e a diferença entre eles.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border p-3 rounded">
            <label class="block text-sm font-medium mb-2">Cidade A</label>
            <select class="w-full p-2 border rounded" @change="${(e: Event) => this.onCityAChange(e)}">
              ${this.cityOptions.map(c => html`<option value="${c.id}" ?selected=${c.id === this.cityA}>${c.label}</option>`)}
            </select>
            <div class="mt-3 text-sm text-gray-800">
              <div class="font-semibold">Horário atual</div>
              <div class="text-lg font-mono">${timeA}</div>
            </div>
          </div>

          <div class="border p-3 rounded">
            <label class="block text-sm font-medium mb-2">Cidade B</label>
            <select class="w-full p-2 border rounded" @change="${(e: Event) => this.onCityBChange(e)}">
              ${this.cityOptions.map(c => html`<option value="${c.id}" ?selected=${c.id === this.cityB}>${c.label}</option>`)}
            </select>
            <div class="mt-3 text-sm text-gray-800">
              <div class="font-semibold">Horário atual</div>
              <div class="text-lg font-mono">${timeB}</div>
            </div>
          </div>
        </div>

        <div class="mt-4 p-3 bg-gray-50 border rounded text-center">
          <div class="text-sm text-gray-600">Diferença entre City A e City B</div>
          <div class="text-2xl font-bold mt-1">${diff}</div>
        </div>

        <!-- Placeholder: For real-time updates, a timer could be set to refresh every minute -->
        <!-- Placeholder: Complex timezone resolution (search, DST handling) should be implemented with a timezone library -->
      </div>
    `;
  }
}

