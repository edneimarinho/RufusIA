---
name: funil
description: >
  Cria funil de vendas completo: sequência de emails, mensagens de WhatsApp e copy da
  landing page de captura. Estrutura o fluxo do lead desde o primeiro contato até a venda.
  Lê persona e contexto do negócio antes de criar qualquer coisa.
  Use quando o usuário pedir "criar funil", "funil de vendas", "sequência de emails",
  "automação de WhatsApp", "funil de captação", ou /funil.
---

# /funil — Funil de vendas

Skill que monta o funil completo: página de captura + sequência de nutrição (email ou WhatsApp) + mensagem de oferta. Tudo com copy calibrado pela persona e pelo tom de voz da marca.

## Dependências

- **Contexto do negócio:** `_memoria/empresa.md` (produto/serviço, público, diferenciais, contato)
- **Tom de voz:** `_memoria/preferencias.md`
- **Identidade visual:** `identidade/design-guide.md` (pra landing page de captura)
- **Outputs vão em:** `marketing/funis/<nome-funil>-<YYYY-MM-DD>/`

---

## Tipos de funil

Identificar qual se encaixa:

### 1. FUNIL DE CAPTURA + NUTRIÇÃO
- **Quando usar:** gerar leads pra contatar depois (WhatsApp, email, ligação)
- **Fluxo:** anúncio/post → landing page de captura → sequência de nutrição → oferta

### 2. FUNIL DE VENDA DIRETA
- **Quando usar:** produto ou serviço de ticket baixo-médio, decisão rápida
- **Fluxo:** anúncio → página de vendas → pagamento (sem nutrição longa)

### 3. FUNIL DE REATIVAÇÃO
- **Quando usar:** base de contatos fria (clientes antigos, leads que não fecharam)
- **Fluxo:** mensagem de reativação → oferta → follow-up

Se não estiver claro, perguntar:
> "O objetivo é capturar leads pra contatar, vender direto ou reativar quem já conhece a empresa?"

---

## Workflow

### Passo 1 — Briefing

Se não tiver brief completo, perguntar:

1. **O que será oferecido?** (produto, serviço, consulta gratuita, material rico)
2. **Quem é o público?** (perfil, dor principal, objeção mais comum)
3. **Canal principal:** email, WhatsApp ou os dois?
4. **Isca digital (se houver):** o que a pessoa ganha ao se cadastrar? (ebook, checklist, consulta grátis)
5. **Quantos dias de nutrição antes da oferta?** (padrão: 5-7 dias)
6. **Qual o CTA final?** (compra, WhatsApp, agendamento)

### Passo 2 — Estrutura do funil

Montar mapa do funil antes de escrever os textos:

```
[ENTRADA]
  Anúncio / Post orgânico / Link na bio
       ↓
[CAPTURA]
  Landing page com formulário ou link WhatsApp
       ↓
[NUTRIÇÃO] (email ou WhatsApp)
  D+0: Confirmação + entrega da isca
  D+1: Conteúdo de valor (problema)
  D+2: Conteúdo de valor (solução parcial)
  D+3: Prova social / case
  D+4: Quebra de objeção
  D+5: Oferta direta
  D+7: Follow-up (último aviso)
       ↓
[CONVERSÃO]
  Compra / WhatsApp / Agendamento
```

Adaptar conforme o tipo de funil e canal escolhido.

### Passo 3 — Copy da landing page de captura

Criar `landing-captura.html` (arquivo único, responsivo):

**Elementos obrigatórios:**
- **Headline:** promessa direta do que a pessoa vai receber
- **Subheadline:** pra quem é e o que resolve
- **Bullets de benefícios:** 3-5 itens concretos do que vai aprender/ganhar/resolver
- **Formulário mínimo:** nome + WhatsApp (ou email) — menos campos = mais conversão
- **Botão CTA:** ação no presente ("Quero receber agora", "Acessar grátis")
- **Prova social:** depoimento curto ou número de pessoas que já usaram (se tiver)

Seguir identidade visual de `identidade/design-guide.md`.

### Passo 4 — Sequência de mensagens

Criar um arquivo por mensagem. Estrutura da pasta:

```
marketing/funis/<nome-funil>-<YYYY-MM-DD>/
  landing-captura.html
  sequencia/
    d0-confirmacao.md
    d1-conteudo-problema.md
    d2-conteudo-solucao.md
    d3-prova-social.md
    d4-quebra-objecao.md
    d5-oferta.md
    d7-followup.md
  README.md
```

**Estrutura de cada mensagem:**

Para **WhatsApp:**
- Máx 300 palavras por mensagem
- Linguagem próxima, informal (ajustar pelo `_memoria/preferencias.md`)
- Começar com o nome da pessoa se a ferramenta suportar: *Oi, {nome}!*
- Sem "caro usuário" ou corporativês
- CTA no final, sempre

Para **email:**
- **Assunto:** 6-9 palavras, sem emojis excessivos, gerar 3 opções
- **Preview text:** complementa o assunto (não repetir)
- **Corpo:** parágrafos curtos, uma ideia por parágrafo
- **CTA:** botão ou link claro no meio E no final
- **Assinatura:** nome + cargo + contato

**Tom das mensagens por dia:**

| Dia | Objetivo | Tom |
|-----|----------|-----|
| D+0 | Entregar e acolher | Caloroso, empolgante |
| D+1 | Gerar identificação | Empático, "eu já estive aí" |
| D+2 | Mostrar caminho | Educativo, prático |
| D+3 | Gerar confiança | Prova social, depoimento real |
| D+4 | Quebrar objeção | Direto, seguro, sem drama |
| D+5 | Fazer oferta | Claro, confiante, sem pressão falsa |
| D+7 | Urgência real | Objetivo, sem FOMO fabricado |

### Passo 5 — Resumo de entrega

```
✓ Funil criado: marketing/funis/<nome-funil>-<YYYY-MM-DD>/

Estrutura:
- Landing page de captura
- <N> mensagens de nutrição (<canal>)
- Sequência de <N> dias

Pra ativar:
1. Configurar a landing page (hospedar ou usar a skill /site)
2. Conectar formulário ao seu CRM ou lista de WhatsApp
3. Importar as mensagens na ferramenta de automação (Manychat, ActiveCampaign, RD Station, etc.)
4. Testar o fluxo completo antes de ligar o tráfego
```

---

## Regras

- **Nunca inventar prova social** — se não tiver depoimentos reais, omitir ou deixar placeholder claro
- **Urgência tem que ser real** — prazo, vagas, condição especial real. Urgência falsa destrói confiança
- **Um CTA por mensagem** — múltiplos CTAs confundem e reduzem conversão
- **Formulário mínimo** — nome + 1 contato. Cada campo a mais reduz conversão em ~10%
- **Tom segue `_memoria/preferencias.md`** — funil escrito no tom da marca, não no tom genérico de copywriter
- **Nunca prometer o que o serviço não entrega** — clareza na promessa evita churn e reclamação
- Sequências mais longas que 7 dias só se o produto tiver ticket alto ou ciclo de venda longo
