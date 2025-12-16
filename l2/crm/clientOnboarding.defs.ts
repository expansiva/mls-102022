/// <mls shortName="clientOnboarding" project="102022" folder="crm" groupName="crm" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102022,
    "folder": "crm",
    "shortName": "clientOnboarding",
    "type": "page",
    "executionRegions": [],
    "languages": [
      "pt-BR"
    ],
    "group": "crm",
    "devFidelity": "scaffold"
  },
  "planning": {
    "generalDescription": "Mini App para guiar novos usuários públicos pelo processo de registro em cinco etapas.",
    "goal": "Facilitar o onboarding de clientes novos no sistema CRM.",
    "userStories": [
      {
        "story": "Como novo usuário público, quero ser guiado passo a passo para completar meu registro facilmente.",
        "derivedRequirements": [
          {
            "description": "Implementar fluxo de registro em cinco etapas sequenciais."
          },
          {
            "description": "Interface amigável e clara para usuários iniciantes."
          }
        ]
      }
    ],
    "userRequestsFeatures": [
      {
        "description": "Fluxo de registro dividido em cinco etapas distintas."
      },
      {
        "description": "Suporte apenas para idioma Português (pt-BR)."
      }
    ],
    "constraints": [
      "Publicação restrita ao idioma pt-BR.",
      "Foco no público público, sem necessidade de autenticação prévia."
    ]
  }
}



