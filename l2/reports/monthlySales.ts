/// <mls shortName="monthlySales" enhancement="_blank" project="102022" folder="reports" />

import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { initState, setState, getState } from '/_100554_/l2/collabState.js';

@customElement('reports--monthly-sales-102022')
export class ReportsMonthlySales102022 extends CollabPageElement {
  constructor() {
    super();
  }

  initPage() {
    // Define o título da página
    setState('ui.mdm.pageTitle.title', `Relatório Mensal de Vendas`);

    // Estado inicial da página com informações essenciais
    initState('reports.monthlySales', {
      period: 'currentMonth', // 'currentMonth' por padrão
      filters: {
        cliente: '',
        produto: '',
        status: '',
        minValue: null,
        maxValue: null,
        query: ''
      },
      kpis: {
        totalVendas: 0,
        numeroPedidos: 0,
        ticketMedio: 0
      },
      chartData: [],
      rows: [],
      page: 1,
      pageSize: 25,
      totalRows: 0,
      loading: false
    });
  }

  // Simula chamada para buscar dados (placeholder para integração com backend)
  async fetchData() {
    setState('reports.monthlySales.loading', true);

    // Aqui normalmente chamaria uma API. Simulamos resposta.
    const simulated = {
      kpis: {
        totalVendas: 152430.75,
        numeroPedidos: 1243,
        ticketMedio: 122.6
      },
      chartData: [/* dados por dia/semana */],
      rows: [
        { data: '2025-12-01', pedido: 'ORD-1001', cliente: 'ACME LTDA', produto: 'Produto A', quantidade: 2, valor: 150.0, status: 'Concluído' },
        { data: '2025-12-02', pedido: 'ORD-1002', cliente: 'Beta SA', produto: 'Produto B', quantidade: 1, valor: 320.5, status: 'Concluído' }
      ],
      totalRows: 2
    };

    // Atualiza estado
    setState('reports.monthlySales.kpis', simulated.kpis);
    setState('reports.monthlySales.chartData', simulated.chartData);
    setState('reports.monthlySales.rows', simulated.rows);
    setState('reports.monthlySales.totalRows', simulated.totalRows);
    setState('reports.monthlySales.loading', false);
  }

  // Handler para aplicar filtros (atualiza estado e recarrega dados)
  applyFilters() {
    // Em implementação real, compor query a partir de filters e chamar API
    setState('reports.monthlySales.page', 1);
    this.fetchData();
  }

  // Exportadores simples (placeholders)
  exportCSV() {
    const rows = getState('reports.monthlySales.rows') || [];
    // Gerar CSV básico (placeholder)
    const header = ['Data','Pedido','Cliente','Produto','Quantidade','Valor','Status'];
    const csv = [header.join(',')].concat(
      rows.map((r: any) => [r.data, r.pedido, r.cliente, r.produto, r.quantidade, r.valor, r.status].join(','))
    ).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'monthly-sales.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  exportPDF() {
    // Placeholder: em implementação real, integrar com serviço que gera PDF
    alert('Exportar para PDF - função ainda não implementada (placeholder).');
  }

  // Render da página com Tailwind CSS
  render() {
    const title = getState('ui.mdm.pageTitle.title') || 'Relatório Mensal';
    const state = getState('reports.monthlySales') || {};
    const kpis = state.kpis || { totalVendas: 0, numeroPedidos: 0, ticketMedio: 0 };
    const rows = state.rows || [];
    const loading = state.loading;

    return html`
      <div class="p-6 bg-white min-h-[400px]">
        <header class="mb-6">
          <h1 class="text-2xl font-semibold text-gray-800">${title}</h1>
          <p class="text-sm text-gray-600">Visão consolidada e detalhada das vendas do mês atual</p>
        </header>

        <!-- KPIs -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="p-4 bg-gray-50 rounded-lg border">
            <div class="text-sm text-gray-500">Total de Vendas</div>
            <div class="text-xl font-bold text-green-600">R$ ${kpis.totalVendas?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg border">
            <div class="text-sm text-gray-500">Número de Pedidos</div>
            <div class="text-xl font-bold text-gray-800">${kpis.numeroPedidos}</div>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg border">
            <div class="text-sm text-gray-500">Ticket Médio</div>
            <div class="text-xl font-bold text-blue-600">R$ ${kpis.ticketMedio?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
          </div>
        </section>

        <!-- Filtros e ações -->
        <section class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center gap-3">
            <input
              class="border rounded px-3 py-2 text-sm"
              placeholder="Pesquisar por ID / pedido / cliente"
              .value="${state.filters?.query || ''}"
              @input="${(e: any) => setState('reports.monthlySales.filters.query', e.target.value)}"
            />
            <select class="border rounded px-3 py-2 text-sm" @change="${(e: any) => setState('reports.monthlySales.filters.status', e.target.value)}">
              <option value="">Todos os Status</option>
              <option value="Concluído">Concluído</option>
              <option value="Pendente">Pendente</option>
              <option value="Cancelado">Cancelado</option>
            </select>
            <button class="bg-blue-600 text-white px-4 py-2 rounded text-sm" @click="${() => this.applyFilters()}">Aplicar</button>
            <button class="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm" @click="${() => this.fetchData()}">Atualizar</button>
          </div>
          <div class="flex items-center gap-3">
            <button class="bg-white border px-3 py-2 rounded text-sm" @click="${() => this.exportCSV()}">Exportar CSV</button>
            <button class="bg-white border px-3 py-2 rounded text-sm" @click="${() => this.exportPDF()}">Exportar PDF</button>
          </div>
        </section>

        <!-- Tabela de transações -->
        <section class="bg-white border rounded shadow-sm">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">Data</th>
                  <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">Pedido</th>
                  <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">Cliente</th>
                  <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">Produto</th>
                  <th class="px-4 py-2 text-right text-xs font-medium text-gray-500">Quantidade</th>
                  <th class="px-4 py-2 text-right text-xs font-medium text-gray-500">Valor (R$)</th>
                  <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100">
                ${loading ? html`<tr><td class="p-4" colspan="7">Carregando...</td></tr>` : html`${rows.length === 0 ? html`<tr><td class="p-4" colspan="7">Nenhum registro encontrado.</td></tr>` : rows.map((r: any) => html`
                  <tr class="hover:bg-gray-50">
                    <td class="px-4 py-2 text-sm text-gray-700">${r.data}</td>
                    <td class="px-4 py-2 text-sm text-gray-700">${r.pedido}</td>
                    <td class="px-4 py-2 text-sm text-gray-700">${r.cliente}</td>
                    <td class="px-4 py-2 text-sm text-gray-700">${r.produto}</td>
                    <td class="px-4 py-2 text-sm text-right text-gray-700">${r.quantidade}</td>
                    <td class="px-4 py-2 text-sm text-right text-gray-700">${Number(r.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    <td class="px-4 py-2 text-sm text-gray-700">${r.status}</td>
                  </tr>
                `)} `}
              </tbody>
            </table>
          </div>

          <!-- Rodapé com paginação (placeholder) -->
          <div class="p-4 flex items-center justify-between text-sm text-gray-600">
            <div>Mostrando ${rows.length} de ${state.totalRows || 0} registros</div>
            <div class="flex items-center gap-2">
              <button class="px-3 py-1 border rounded bg-white" @click="${() => { const p = (getState('reports.monthlySales.page') || 1) - 1; setState('reports.monthlySales.page', Math.max(1, p)); this.fetchData(); }}">Anterior</button>
              <button class="px-3 py-1 border rounded bg-white" @click="${() => { const p = (getState('reports.monthlySales.page') || 1) + 1; setState('reports.monthlySales.page', p); this.fetchData(); }}">Próximo</button>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}