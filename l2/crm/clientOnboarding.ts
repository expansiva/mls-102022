/// <mls shortName="clientOnboarding" project="102022" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { CollabPageElement } from '/_100554_/l2/collabPageElement.js';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { initState, setState, getState } from '/_100554_/l2/collabState.js';

@customElement('crm--client-onboarding-102022')
export class ClientOnboarding extends CollabPageElement {
  initPage() {
    setState('ui.mdm.pageTitle.title', `Onboarding de Clientes`);
    initState('clientOnboarding.step', 1);
  }

  nextStep() {
    const currentStep = getState('clientOnboarding.step') || 1;
    if (currentStep < 5) {
      setState('clientOnboarding.step', currentStep + 1);
    }
  }

  prevStep() {
    const currentStep = getState('clientOnboarding.step') || 1;
    if (currentStep > 1) {
      setState('clientOnboarding.step', currentStep - 1);
    }
  }

  render() {
    const step = getState('clientOnboarding.step') || 1;
    return html`
      <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Onboarding de Clientes</h1>
        <div class="mb-4">
          <progress class="w-full h-4 rounded bg-gray-200" value="${step}" max="5"></progress>
          <p class="text-sm text-gray-600 mt-1">Etapa ${step} de 5</p>
        </div>
        <div class="mb-6">
          ${step === 1 ? html`<p class="text-gray-700">Bem-vindo! Por favor, informe seus dados pessoais para iniciar o cadastro.</p>` : ''}
          ${step === 2 ? html`<p class="text-gray-700">Informe seu endereço para contato.</p>` : ''}
          ${step === 3 ? html`<p class="text-gray-700">Configure suas preferências de comunicação.</p>` : ''}
          ${step === 4 ? html`<p class="text-gray-700">Revise suas informações antes de finalizar.</p>` : ''}
          ${step === 5 ? html`<p class="text-green-700 font-semibold">Cadastro concluído com sucesso! Obrigado por se registrar.</p>` : ''}
        </div>
        <div class="flex justify-between">
          <button
            class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            ?disabled=${step === 1}
            @click=${this.prevStep}
          >Anterior</button>
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            ?disabled=${step === 5}
            @click=${this.nextStep}
          >Próximo</button>
        </div>
      </div>
    `;
  }
}