/// <mls shortName="shopeeFeeCalculator" project="102022" folder="ecommerce" groupName="sellerTools" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102022,
    "folder": "ecommerce",
    "shortName": "shopeeFeeCalculator",
    "type": "page",
    "executionRegions": [
      "BR"
    ],
    "languages": [
      "pt-BR"
    ],
    "group": "sellerTools",
    "updatedAtByAI": "2025-12-16",
    "tags": [
      "shopee",
      "fees",
      "calculator",
      "seller",
      "ecommerce"
    ],
    "devFidelity": "scaffold"
  },
  "planning": {
    "generalDescription": "Mini app para calcular as taxas aplicáveis a vendas na Shopee. Permite inserir preço de venda, custo do produto, valor do frete e descontos; ajustar percentuais de comissão; visualizar valores de taxa, custo total, lucro líquido e margem; salvar histórico de cálculos e exportar em CSV.",
    "goal": "Permitir que vendedores (principalmente no Brasil) estimem rapidamente as taxas da Shopee e analisem lucro líquido e margem, com opções básicas de histórico e exportação.",
    "userStories": [
      {
        "story": "Como vendedor individual, quero calcular rapidamente as taxas da Shopee para uma venda inserindo preço, custo e frete, para saber meu lucro líquido.",
        "derivedRequirements": [
          {
            "description": "Campo de entrada: preço de venda (BRL).",
            "done": false
          },
          {
            "description": "Campo de entrada: custo do produto (BRL).",
            "done": false
          },
          {
            "description": "Campo de entrada: valor do frete (BRL).",
            "done": false
          },
          {
            "description": "Campo de entrada: descontos/cupom (BRL).",
            "done": false
          },
          {
            "description": "Cálculo automático da comissão da plataforma (percentual padrão ajustável) e impacto do frete no custo total.",
            "done": false
          },
          {
            "description": "Apresentar saídas: valor das taxas, custo total, lucro líquido e margem percentual.",
            "done": false
          }
        ]
      },
      {
        "story": "Como vendedor quero ajustar manualmente os percentuais de comissão e outras taxas para refletir diferentes políticas ou promoções.",
        "derivedRequirements": [
          {
            "description": "Tela de configurações para editar percentuais: comissão da plataforma, taxa de pagamento, e outras taxas relevantes.",
            "done": false
          },
          {
            "description": "Persistir configurações por usuário (localmente) para uso em cálculos futuros.",
            "done": false
          }
        ]
      },
      {
        "story": "Como usuário quero salvar um histórico de cálculos e exportá-lo em CSV para controle e análise posterior.",
        "derivedRequirements": [
          {
            "description": "Salvar histórico simples de cálculos com data, entradas e resultados.",
            "done": false
          },
          {
            "description": "Exportar histórico em CSV com campos básicos (data, preço, custo, frete, taxas, lucro, margem).",
            "done": false
          }
        ]
      }
    ],
    "userRequestsFeatures": [
      {
        "description": "Interface amigável e simples em pt-BR com campos claros e explicações curtas.",
        "done": false
      },
      {
        "description": "Campos de entrada: preço de venda, custo do produto, valor do frete, descontos/cupom.",
        "done": false
      },
      {
        "description": "Ajuste manual de percentuais de comissão e taxa de pagamento (valores padrão configuráveis).",
        "done": false
      },
      {
        "description": "Cálculo em tempo real dos valores de taxa, custo total, lucro líquido e margem percentual.",
        "done": false
      },
      {
        "description": "Salvar histórico local com listagem e filtros básicos por data e palavra-chave.",
        "done": false
      },
      {
        "description": "Exportar histórico em CSV (download).",
        "done": false
      },
      {
        "description": "Validação de entradas numéricas e tratamento de moeda BRL.",
        "done": false
      }
    ],
    "userRequestsBugs": [],
    "userRequestsEnhancements": [
      {
        "description": "Integração com ERP/planilhas (por API ou importação) — planejamento para versão futura.",
        "done": false
      },
      {
        "description": "Exportar relatórios em PDF além do CSV.",
        "done": false
      },
      {
        "description": "Suporte a múltiplos idiomas e variações regionais das taxas (além do pt-BR).",
        "done": false
      }
    ],
    "constraints": [
      "Inicialmente suportar apenas pt-BR.",
      "Taxas e percentuais podem variar por região e campanhas; valores padrão são referência e devem ser editáveis pelo usuário.",
      "Histórico será armazenado localmente (considerar consentimento/privacidade).",
      "Valores financeiros devem aceitar validação e formato em BRL.",
      "Versão inicial sem integração direta com sistemas externos (ERP integrado como melhoria futura)."
    ]
  }
}



