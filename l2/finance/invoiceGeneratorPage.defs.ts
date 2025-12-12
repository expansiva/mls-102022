/// <mls shortName="invoiceGeneratorPage" project="102022" folder="finance" groupName="finance" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102022,
    "folder": "finance",
    "shortName": "invoiceGeneratorPage",
    "type": "page",
    "executionRegions": [],
    "languages": [
      "en",
      "pt",
      "es"
    ],
    "group": "finance",
    "updatedAtByAI": "2025-12-11",
    "tags": [
      "billing",
      "invoices",
      "pdf",
      "finance"
    ],
    "devFidelity": "scaffold"
  },
  "planning": {
    "generalDescription": "Mini aplicativo para administradores gerarem faturas em PDF para clientes, com suporte multilíngue (inglês, português, espanhol), preview, download e envio por e-mail.",
    "goal": "Permitir que administradores criem, personalizem e exportem faturas em PDF para clientes de forma rápida e segura, mantendo conformidade com regras fiscais básicas.",
    "userStories": [
      {
        "story": "Como administrador, quero gerar uma fatura em PDF para um cliente para que eu possa enviar a cobrança por e-mail.",
        "derivedRequirements": [
          {
            "description": "Selecionar cliente existente ou criar cliente rápido (nome, email, identificação fiscal)."
          },
          {
            "description": "Adicionar linhas de itens com descrição, quantidade, preço unitário e impostos aplicáveis."
          },
          {
            "description": "Calcular subtotais, impostos e total automaticamente."
          },
          {
            "description": "Escolher idioma do template (en/pt/es) antes de gerar PDF."
          },
          {
            "description": "Visualizar preview da fatura antes de exportar."
          },
          {
            "description": "Exportar/baixar fatura em PDF e/ou enviar por e-mail ao cliente."
          },
          {
            "description": "Salvar rascunhos e manter histórico/audit log das faturas geradas."
          }
        ]
      },
      {
        "story": "Como administrador, quero personalizar o template da fatura para incluir logo, endereço e campos fiscais.",
        "derivedRequirements": [
          {
            "description": "Editor de template com upload de logo e campos configuráveis (endereço da empresa, notas, termos)."
          },
          {
            "description": "Salvar múltiplos templates por idioma."
          }
        ]
      }
    ],
    "userRequestsFeatures": [
      {
        "description": "Geração de fatura em PDF a partir de dados do cliente e itens.",
        "done": false
      },
      {
        "description": "Suporte multilíngue para conteúdo de fatura (EN/PT/ES).",
        "done": false
      },
      {
        "description": "Preview do PDF antes de exportar.",
        "done": false
      },
      {
        "description": "Envio automático de fatura por e-mail com anexo PDF.",
        "done": false
      },
      {
        "description": "Permissões: apenas administradores podem criar/editar/finalizar faturas.",
        "done": false
      },
      {
        "description": "Templates personalizáveis por idioma com upload de logo.",
        "done": false
      },
      {
        "description": "Logs/auditoria de faturas geradas (quem, quando, alterações).",
        "done": false
      },
      {
        "description": "Exportação em lote (gerar múltiplas faturas em massa) - enhancement candidate.",
        "done": false,
        "comment": "Considerar como melhoria futura ou feature premium."
      }
    ],
    "userRequestsBugs": [],
    "userRequestsEnhancements": [
      {
        "description": "Recorrência de faturas (assinaturas/mensalidades) para clientes.",
        "done": false
      },
      {
        "description": "Integração com gateways de pagamento e sistemas contábeis.",
        "done": false
      },
      {
        "description": "Funcionalidade para números de fatura sequenciais configuráveis por série.",
        "done": false
      }
    ],
    "constraints": [
      "Acesso restrito a usuários com perfil de administrador.",
      "Conformidade com regras básicas de faturamento e armazenamento seguro de dados fiscais.",
      "Compatibilidade do gerador de PDF com bibliotecas server-side ou client-side padrão.",
      "Suporte a internacionalização de formatos numéricos e de datas para en/pt/es."
    ]
  }
}



