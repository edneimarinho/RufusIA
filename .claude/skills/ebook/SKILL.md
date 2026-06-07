---
name: ebook
description: >
  Cria ebooks completos prontos pra importar no Gamma (gamma.app) e fazer o design visual.
  Gera conteúdo estruturado em Markdown formatado por slides, roteiro de design slide a slide
  e legenda pra divulgação nas redes. Lê o contexto do negócio antes de criar qualquer coisa.
  Use quando o usuário pedir "criar ebook", "fazer ebook", "montar ebook", "material rico",
  "isca digital", "ebook pra cliente", ou /ebook.
---

# /ebook — Ebook pronto pra Gamma

Skill que cria o conteúdo completo de um ebook — estrutura, texto, roteiro de design e legenda de divulgação. O output é um arquivo Markdown formatado especificamente pro Gamma (gamma.app): cada `##` vira um card visual quando importado. O design fica no Gamma, o conteúdo fica aqui.

## Dependências

- **Contexto do negócio:** `_memoria/empresa.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Identidade visual:** `identidade/design-guide.md` (cores, fontes, logo — pra orientar o roteiro de design)
- **Brief do cliente (se existir):** `dados/projetos/<slug-cliente>/brief.md`
- **Outputs vão em:** `marketing/ebooks/<slug>-<YYYY-MM-DD>/`

---

## Workflow

### Passo 1 — Briefing

Se existir `dados/projetos/<slug-cliente>/brief.md`, ler antes e pular o que já estiver respondido.

Se não tiver brief, perguntar:

1. **Tema/título do ebook?**
2. **Para qual público?** (quem vai ler — seja específico: "donos de oficina mecânica", "mães de primeira viagem", etc.)
3. **Objetivo?** (isca digital pra captar leads / autoridade de marca / conteúdo educacional / apoio pra venda)
4. **Quantos capítulos?** (recomendado 5-7 — cada capítulo vira um bloco de slides no Gamma)
5. **Quantos cards por capítulo?** (padrão: 1 card por capítulo — pra ebooks mais densos, usar 2-4 cards por capítulo; cada card vira um slide no Gamma)
6. **Tem dados, exemplos ou histórias reais pra incluir?** (nunca inventar — se não tiver, usar estrutura didática genérica e sinalizar onde preencher)
7. **CTA final?** (WhatsApp, formulário, site, compra — puxar de `_memoria/empresa.md` se já tiver)
8. **Como vai distribuir?** (link direto, landing page de captura, email, redes sociais)

---

### Passo 2 — Montar e aprovar o índice

Antes de escrever qualquer conteúdo, montar e mostrar o índice completo:

```
Capa
Introdução — [título]
Capítulo 1 — [título]
Capítulo 2 — [título]
Capítulo 3 — [título]
Capítulo 4 — [título]
Capítulo 5 — [título]
Conclusão — Próximos passos
Sobre [empresa/profissional]
```

Mostrar e perguntar:
> "Esse é o índice do ebook. Quer ajustar algum capítulo antes de eu escrever o conteúdo?"

Aguardar confirmação ou ajuste antes de avançar.

---

### Passo 3 — Gerar `conteudo.md` (formato Gamma)

O arquivo principal do ebook. Formatado pra importar direto no Gamma — cada `##` vira um card/slide visual.

**Regras de formatação Gamma:**
- `# Título` → capa (apenas 1 por arquivo)
- `## Nome do bloco` → novo slide/card no Gamma
- Máximo 5 bullets por slide — Gamma é visual, não suporta texto longo bem
- **Negrito** nos pontos-chave de cada slide
- `> [Sugestão de imagem: descrição clara em português]` pra indicar onde colocar imagem no Gamma
- Sem parágrafos longos — bullets curtos e frases diretas
- Dados inventados nunca — usar `[PREENCHER: dado real aqui]` quando faltar informação real

**Estrutura do arquivo:**

```markdown
# [Título do Ebook]
### [Subtítulo — promessa em 1 frase]
*Por [Nome/Empresa — puxar de _memoria/empresa.md]*

---

## Introdução
> [Sugestão de imagem: ...]

- Por que esse tema importa pro leitor
- O que ele vai aprender nesse ebook
- Como usar esse material

---

## [Nome do Capítulo 1]
> [Sugestão de imagem: ...]

- **Ponto principal 1**
- Desenvolvimento em 1 linha
- **Ponto principal 2**
- Desenvolvimento em 1 linha
- Exemplo prático ou dado concreto

---

[repetir para cada capítulo]

---

## Conclusão — O que fazer agora
> [Sugestão de imagem: ...]

- Resumo dos pontos principais (3 bullets)
- O próximo passo concreto pro leitor
- **[CTA: ação específica + canal]**

---

## Sobre nós
> [Sugestão de imagem: foto do profissional ou logo da empresa]

- Quem é [empresa/profissional] — 2-3 linhas diretas
- O que entrega, pra quem atende
- Como entrar em contato: [canal + contato de _memoria/empresa.md]
```

---

### Passo 4 — Gerar `roteiro.md` (guia de design no Gamma)

Arquivo de apoio gerado junto com o conteúdo. Orienta o usuário slide a slide dentro do Gamma — layout, cor de fundo, tipo de visual, onde colocar logo.

Formato do roteiro:

```markdown
# Roteiro de Design — [Título do Ebook]

> Abra o Gamma, importe o conteudo.md e siga esse roteiro pra configurar cada slide.

---

**Capa**
- Layout: Título centralizado
- Fundo: cor principal da marca ([cor de identidade/design-guide.md ou sugestão])
- Visual: logo no topo, foto de fundo com overlay escuro ou gradiente
- Tipografia: título grande, subtítulo menor, nome do autor em itálico

**Introdução**
- Layout: texto à esquerda, imagem à direita
- Fundo: branco ou cinza claro
- Visual: [sugestão concreta baseada no tema]
- Destaque: bullet de abertura em negrito maior

**[Capítulo 1 — título]**
- Layout: [Big text / Split / Visual-first — escolher o que serve pro conteúdo]
- Fundo: [branco / cor de destaque / escuro]
- Visual: [sugestão concreta]
- Destaque: [o bullet mais importante do slide]

[repetir pra cada capítulo]

**Conclusão**
- Layout: CTA centralizado
- Fundo: cor de destaque da marca
- Visual: ícone de seta ou imagem de ação
- Botão: "Fale comigo" ou CTA definido no briefing

**Sobre nós**
- Layout: foto à esquerda, texto à direita
- Fundo: escuro ou cor da marca
- Visual: foto profissional ou logo grande
```

---

### Passo 5 — Gerar `legenda.md` (automático, sem esperar pedido)

Legenda pra divulgar o ebook nas redes sociais. Gerada automaticamente ao final.

Estrutura da legenda:

```markdown
# Legenda — [Título do Ebook]

## Instagram / Facebook

[Hook — primeira linha que para o scroll, sem "Ei" nem "Olá"]

[1-2 frases contextualizando o que é e pra quem é]

No ebook você vai aprender:
→ [ponto 1]
→ [ponto 2]
→ [ponto 3]

[CTA: como conseguir o ebook — link, "me chama no WhatsApp", "clica no link da bio", etc.]

[10-15 hashtags relevantes ao nicho e tema]

---

## LinkedIn

[Versão mais direta, sem hashtags, tom profissional]
[Mesmo conteúdo, linguagem adaptada]
```

---

### Passo 6 — Salvar e resumo

```
marketing/ebooks/<slug>-<YYYY-MM-DD>/
  conteudo.md             ← importar direto no Gamma
  roteiro.md              ← guia de design slide a slide
  legenda.md              ← legenda pra redes sociais
  brief-pagina-vendas.md  ← gerado se o usuário quiser a página de vendas
```

Resumo final entregue ao usuário:

```
✓ Ebook gerado: marketing/ebooks/<slug>-<YYYY-MM-DD>/

Tema: [tema]
Público: [público]
Capítulos: [N]
Slides estimados no Gamma: [N]

Como importar no Gamma:
1. Acesse gamma.app → New → Import
2. Selecione "Paste markdown"
3. Cole o conteúdo de conteudo.md
4. O Gamma vai criar um slide por seção (##)
5. Escolha o tema visual e ajuste seguindo o roteiro.md

Distribuição: [canal informado no briefing]
```

---

### Passo 7 — Oferecer página vinculada ao ebook

Após o resumo, perguntar:

> "Quer criar uma página pra esse ebook? Posso montar agora sem precisar de novo briefing:
> 1. Página de captura — o ebook é gratuito, o visitante deixa nome e contato pra receber
> 2. Página de vendas — o ebook é pago, com oferta, preço e botão de compra
> 3. Não preciso de página agora"

---

**Se opção 1 (captura) ou opção 2 (vendas):**

Salvar `brief-pagina-ebook.md` na pasta do ebook com o seguinte formato:

```markdown
# Brief — Página do Ebook

**Slug do ebook:** <slug>-<YYYY-MM-DD>
**Tipo de página:** [captura / vendas]
**Título:** [título do ebook]
**Subtítulo:** [subtítulo]
**Público:** [público definido no briefing]
**CTA:** [CTA definido no briefing]
**Canal de distribuição:** [canal definido no briefing]

## Capítulos (viram benefícios na página)

1. [Capítulo 1 — título]
2. [Capítulo 2 — título]
3. [Capítulo 3 — título]
[...]

## Promessa central

[extrair do subtítulo e introdução do ebook — o resultado que o leitor vai ter]

## Dores que o ebook resolve

[extrair da introdução do ebook — os problemas que motivam a leitura]
```

**Imediatamente após salvar o brief, executar o Passo 0 da skill `/site` sem esperar nenhum comando do usuário.** O tipo de página (captura ou vendas) já está no brief — o `/site` vai identificar e montar a estrutura correta automaticamente.

---

**Se opção 3:** encerrar normalmente sem criar o brief.

---

## Regras

- **Nunca inventar dados, estatísticas ou histórias** — sinalizar com `[PREENCHER: dado real aqui]` quando faltar
- **Mostrar índice e aguardar aprovação** antes de escrever o conteúdo
- **Máximo 5 bullets por slide** — Gamma é visual, conteúdo longo quebra o layout
- **Sem traços no texto** — nunca usar `—` ou `-` como recurso estilístico em títulos, bullets ou frases. Usar ponto final, vírgula ou reescrever a frase
- **Sem emojis** — o conteúdo do ebook é profissional e limpo. Nenhum emoji em títulos, bullets, CTAs ou qualquer parte do `conteudo.md`
- **Número de cards respeita o que o usuário informou no briefing** — ebook denso pode ter 2-4 cards por capítulo; ebook leve tem 1 card por capítulo
- **Tom segue `_memoria/preferencias.md`** em todo o texto
- **CTA sempre com canal real** (WhatsApp, link, email) — puxar de `_memoria/empresa.md`
- **`legenda.md` gerada automaticamente** ao final, sem esperar o usuário pedir
- **`roteiro.md` sempre incluído** — o usuário vai precisar dele dentro do Gamma
- **Sugestões de imagem em português** e descritivas o suficiente pra orientar a escolha no Gamma
- **Slug do ebook** = versão em kebab-case do título (ex: "Como Atrair Mais Clientes" → `como-atrair-mais-clientes`)
