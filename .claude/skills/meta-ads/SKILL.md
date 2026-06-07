---
name: meta-ads
description: >
  Cria estrutura completa de campanha para Meta Ads (Facebook + Instagram). Gera conjuntos
  de anúncios, segmentações de público, copies e criativos em documento pronto pra subir
  no Gerenciador de Anúncios. Lê briefing, persona e contexto do negócio antes de criar.
  Use quando o usuário pedir "anúncio facebook", "meta ads", "campanha instagram", "criar
  anúncio meta", "subir campanha no facebook", ou /meta-ads.
---

# /meta-ads — Estrutura de campanha Meta Ads

Skill que monta a campanha completa do Meta Ads (Facebook + Instagram): objetivo, públicos, conjuntos de anúncios e copies dos criativos. Sai do briefing direto pra estrutura pronta pra subir no Gerenciador.

## Dependências

- **Contexto do negócio:** `_memoria/empresa.md` (produto/serviço, público, região, diferenciais)
- **Tom de voz:** `_memoria/preferencias.md`
- **Pesquisa de público:** se existir `marketing/seo/01-pesquisa-demanda.md`, usar pra calibrar públicos
- **Criativos existentes:** se tiver carrosséis em `marketing/conteudo/`, usar como referência
- **Outputs vão em:** `marketing/campanhas/meta-ads-<YYYY-MM-DD>/`

---

## Workflow

### Passo 1 — Briefing

Se não tiver brief completo, perguntar:

1. **O que anunciar?** (produto, serviço, evento, isca digital)
2. **Objetivo da campanha?**
   - Mensagens (WhatsApp/Direct)
   - Leads (formulário do próprio Meta)
   - Tráfego pro site
   - Vendas (e-commerce)
   - Reconhecimento de marca
3. **Público-alvo?** (idade, gênero, localização, interesses — quanto mais específico, melhor)
4. **Orçamento diário?** (R$/dia)
5. **Tem criativos prontos?** (imagens/vídeos) — se sim, descrever. Se não, a skill sugere o briefing visual
6. **Concorrentes diretos?** (ajuda a montar público de interesse)
7. **Já anunciou antes?** Tem pixel instalado? Tem lista de clientes pra criar lookalike?

### Passo 2 — Estrutura da campanha

**Arquitetura recomendada (teste A/B de público):**

```
Campanha: <Negócio> — <Objetivo> — <Mês/Ano>
│
├── Conjunto 1: Público Frio — Interesses
│   ├── Segmentação: interesses relevantes + localização
│   ├── Orçamento: 40% do total
│   └── Anúncios: 2-3 criativos diferentes
│
├── Conjunto 2: Público Frio — Lookalike (se tiver pixel/lista)
│   ├── Segmentação: lookalike 1-3% de clientes ou visitantes
│   ├── Orçamento: 30% do total
│   └── Anúncios: mesmos criativos do Conjunto 1
│
└── Conjunto 3: Retargeting (se tiver pixel)
    ├── Segmentação: visitantes do site / engajamento nos últimos 30-60 dias
    ├── Orçamento: 30% do total
    └── Anúncios: copy mais direto (já te conhecem)
```

Se for campanha simples (sem pixel/lookalike), focar só no Conjunto 1 com variação de criativos.

### Passo 3 — Segmentações detalhadas

Para cada conjunto, especificar:

**Localização:**
- Cidade(s) + raio em km ou por região
- Excluir áreas que não atende

**Público detalhado (Conjunto 1):**
- Dados demográficos: idade, gênero (se aplicável)
- Interesses: listar 8-15 interesses relevantes agrupados por categoria
  - Categoria comportamento (ex: "Compradores online frequentes")
  - Categoria interesse direto (ex: "Nutrição", "Academia", "Emagrecimento")
  - Categoria páginas de concorrentes (se o usuário informar)
- Excluir: pessoas que já são clientes (se tiver lista)

**Público Lookalike (Conjunto 2, se aplicável):**
- Fonte: listar qual usar (pixel, lista de emails, engajamento na página)
- Porcentagem: 1% (mais similar) a 3% (maior alcance)

**Retargeting (Conjunto 3, se aplicável):**
- Visitantes do site nos últimos 30 dias
- Pessoas que enviaram mensagem mas não converteram
- Engajamento com vídeo (>50% assistido)

### Passo 4 — Copies dos anúncios

Para cada conjunto, criar 3 variações de copy (testar qual performa melhor):

**Estrutura de cada copy:**

*Texto principal (primary text):*
- **Variação 1 — Problema/Solução:** começa com a dor, apresenta a solução
- **Variação 2 — Resultado:** começa com o resultado que o cliente vai ter
- **Variação 3 — Prova social:** começa com depoimento ou número de clientes

Limites: máx 125 caracteres pro preview sem "ver mais" (mobile). Texto completo pode ser maior, mas os 2 primeiros parágrafos têm que prender.

*Headline (título):*
- 3 opções por anúncio
- Máx 40 caracteres
- Foco no benefício ou na CTA

*Descrição (opcional):*
- 1 linha de suporte
- Reforçar diferencial ou urgência

*CTA do botão:* escolher o mais adequado ao objetivo:
- "Enviar mensagem" → WhatsApp/Direct
- "Saiba mais" → tráfego frio
- "Cadastre-se" → leads
- "Comprar" → e-commerce

**Copies de retargeting:** mais diretos, menos contexto (a pessoa já conhece), foco em objeção ou urgência.

### Passo 5 — Briefing de criativos (se não tiver)

Se o usuário não tiver imagem/vídeo pronto, gerar briefing visual:

**Para cada anúncio, especificar:**
- Formato: imagem estática (1080x1080 ou 1080x1350) / vídeo (9:16 pra Reels/Stories) / carrossel
- Elemento principal: foto do produto, antes/depois, pessoa usando, número em destaque
- Texto na imagem: headline curta (máx 20% da área — regra antiga do Meta, mas ainda válida)
- Paleta: seguir `identidade/design-guide.md`

Sugerir: "Quer que eu crie os criativos com a skill `/carrossel`?"

### Passo 6 — Configurações da campanha

Gerar `configuracoes.md` com:

- **Objetivo de campanha:** conforme briefing (Mensagens, Leads, Tráfego, Vendas)
- **Estratégia de lance:** Menor custo (pra começar) → Meta de custo (quando tiver dados)
- **Orçamento:** diário por conjunto (como calculado no Passo 2)
- **Programação:** dias e horários (padrão: todos os dias, sem restrição — ajustar depois com dados)
- **Posicionamentos:** Advantage+ (automático) pra começar. Manual só quando tiver dados de qual posicionamento performa
- **Pixel:** instruções pra verificar se está instalado e disparando corretamente
- **UTMs:** parâmetros pra rastrear no Analytics:
  `?utm_source=facebook&utm_medium=cpc&utm_campaign=<nome>&utm_content=<conjunto>`

### Passo 7 — Salvar

```
marketing/campanhas/meta-ads-<YYYY-MM-DD>/
  estrutura.md           ← visão geral da arquitetura
  publicos.md            ← segmentações detalhadas por conjunto
  copies.md              ← todos os copies organizados por conjunto
  briefing-criativos.md  ← se não tiver criativos prontos
  configuracoes.md       ← configurações + checklist de subida
  README.md              ← passo a passo pra subir no Gerenciador
```

### Passo 8 — Resumo

```
✓ Campanha Meta Ads pronta: marketing/campanhas/meta-ads-<YYYY-MM-DD>/

Estrutura:
- <N> conjuntos de anúncios
- <N> públicos segmentados
- <N> variações de copy
- Orçamento: R$<X>/dia (total)

Pra subir:
1. Acessar business.facebook.com → Gerenciador de Anúncios
2. Criar campanha com objetivo: <objetivo>
3. Criar conjuntos conforme publicos.md
4. Subir os criativos (ou criar no Canva/Figma com briefing-criativos.md)
5. Aplicar copies de copies.md em cada anúncio
6. Configurar pixel e eventos de conversão
7. Publicar e monitorar nas primeiras 48h

Checar resultados com /relatorio-ads após 7 dias.
```

---

## Regras

- **Nunca inventar dados de CPL ou ROAS** — dar faixas baseadas no nicho, não números exatos
- **Começar sempre com Advantage+ posicionamentos** — deixar o algoritmo otimizar antes de restringir
- **Criativos são o maior alavancador** — o copy importa, mas a imagem/vídeo é o que para o scroll
- **Teste A/B real:** mínimo 2 criativos por conjunto, aguardar 5-7 dias antes de pausar o que não funciona
- **Retargeting só com pixel instalado** — nunca configurar retargeting sem confirmar que o pixel está ativo
- **Tom segue `_memoria/preferencias.md`** — copies que soam robóticos não convertem
- **Sem clickbait ou promessas que o serviço não cumpre** — além de violar políticas do Meta, destrói confiança
- **Pixel e conversões antes de anunciar** — sem rastreamento, a campanha não otimiza e o dinheiro vai ralo abaixo
