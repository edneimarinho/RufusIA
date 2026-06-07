---
name: relatorio-cliente
description: >
  Gera relatório mensal de resultados para enviar ao cliente. Consolida o que foi feito,
  métricas do período, análise e próximos passos em documento profissional pronto pra enviar.
  Lê os arquivos de campanhas, conteúdo e estratégia antes de montar o relatório.
  Use quando o usuário pedir "relatório do cliente", "relatório mensal", "montar relatório",
  "resumo do mês pra X", ou /relatorio-cliente.
---

# /relatorio-cliente — Relatório mensal de resultados

Skill que consolida o trabalho do mês num documento claro e profissional. O cliente vê o que foi feito, o que funcionou, o que precisa melhorar e o que vem a seguir.

## Dependências

- **Contexto do negócio:** `_memoria/empresa.md` (nome do cliente, serviços contratados)
- **Estratégia:** `_memoria/estrategia.md` (objetivos, prioridades do período)
- **Campanhas de anúncios:** `marketing/campanhas/` (se houver)
- **Conteúdo produzido:** `marketing/conteudo/` (posts, carrosséis, blog)
- **Relatório de ads:** `marketing/relatorios/` (se tiver — criado pelo `/relatorio-ads`)
- **Outputs vão em:** `saidas/relatorios/<slug-cliente>-<YYYY-MM>/`

---

## Workflow

### Passo 1 — Briefing

Antes de montar, perguntar:

1. **Qual cliente e qual mês/período?**
2. **Quais serviços foram prestados no período?** (conteúdo, ads, site, SEO, etc.)
3. **Tem métricas concretas pra incluir?** (alcance, cliques, leads, vendas, seguidores — o que tiver)
4. **Teve algum resultado ou evento importante no mês?** (campanha que bombou, problema que surgiu, cliente novo que veio de anúncio)
5. **Tom do relatório:** técnico (pro cliente que entende de marketing) ou simples (pro cliente que só quer saber se funcionou)?

Ler os arquivos de `marketing/` pra preencher o que o usuário não lembrar.

### Passo 2 — Estrutura do relatório

**1. Cabeçalho**
- Logo da empresa prestadora
- Nome do cliente + período
- Data de envio

**2. Resumo executivo (1 parágrafo)**
- O que foi feito no mês em 3-4 linhas
- Principal resultado em destaque (número ou conquista mais importante)

**3. O que foi entregue**
Tabela ou lista clara por área:

| Entregável | Quantidade | Status |
|---|---|---|
| Posts Instagram | X | Publicados |
| Carrosséis | X | Publicados |
| Artigos de blog | X | Publicados |
| Campanha Google Ads | X | Ativa |
| ... | | |

**4. Resultados por canal**

Para cada canal ativo no período, incluir:

*Redes sociais:*
- Alcance total, impressões, engajamento (curtidas + comentários + compartilhamentos)
- Posts com melhor desempenho (print ou descrição)
- Crescimento de seguidores no período

*Anúncios pagos (Google/Meta):*
- Investimento total
- Impressões, cliques, CTR
- Leads ou conversões geradas
- Custo por lead / custo por resultado
- ROAS (se e-commerce)

*SEO / Blog:*
- Artigos publicados
- Posição das keywords-alvo (se monitorado)
- Tráfego orgânico (se tiver acesso ao Analytics)

*Site:*
- Visitas totais, páginas mais acessadas
- Taxa de conversão (se tiver formulário/WhatsApp com rastreamento)

**5. Análise rápida**
- O que funcionou bem (e por quê, brevemente)
- O que não performou como esperado (sem drama — com contexto e aprendizado)
- Benchmark: comparar com mês anterior quando possível

**6. Próximos passos**
- 3-5 ações planejadas pro próximo mês
- Ajustes baseados nos resultados do mês atual
- Qualquer decisão que depende do cliente (aprovação, acesso, informação)

**7. Rodapé**
- Contato do prestador
- "Dúvidas? Me chama em [WhatsApp/email]"

### Passo 3 — Gerar o documento

Criar `relatorio.html` com design limpo. Alternativa: `relatorio.md` se o cliente preferir texto simples.

**Design padrão do HTML:**
- Fonte: Inter
- Cores: marca da empresa prestadora (não do cliente)
- Tabelas com bordas suaves
- Números importantes em destaque (tipografia maior ou caixa colorida)
- Responsivo — cliente vai ver no celular

**Se não houver métricas:**
Deixar campos com `[a preencher]` e avisar:
> "Não encontrei os dados de X. Me passa as métricas e eu completo."

### Passo 4 — Salvar

```
saidas/relatorios/<slug-cliente>-<YYYY-MM>/
  relatorio.html     ← enviar ou converter pra PDF
  README.md          ← como converter pra PDF e enviar
```

### Passo 5 — Resumo

```
✓ Relatório gerado: saidas/relatorios/<slug-cliente>-<YYYY-MM>/relatorio.html

Período: <mês/ano>
Seções: [lista do que foi incluído]
Campos pendentes: [se houver métricas faltando]

Pra enviar:
1. Revisar os dados — especialmente métricas
2. Abrir no Chrome → Imprimir → Salvar como PDF
3. Enviar por email ou WhatsApp
```

---

## Regras

- **Nunca inventar métricas** — se não tiver o dado, deixar placeholder e avisar
- **Foco em resultado, não em volume de trabalho** — o cliente quer saber o que rendeu, não quantas horas foram gastas
- **Tom varia por cliente** (pergunta 5 do briefing) — técnico pra quem entende, simples pra quem só quer resultado
- **Problemas são honestos** — se uma campanha não foi bem, explicar o motivo e o que vai mudar. Esconder não funciona
- **Próximos passos sempre concretos** — não "otimizar campanhas", mas "reduzir lances em [campanha X] e testar novo criativo até dia 15"
- **Relatório mensal, não semanal** — se o usuário pedir semanal, usar a skill `/relatorio-ads` que é mais adequada pra isso
