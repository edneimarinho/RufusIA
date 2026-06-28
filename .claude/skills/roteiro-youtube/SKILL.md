---
name: roteiro-youtube
description: >
  Cria roteiro de vídeo pro YouTube com bullet points, momentos-chave, hook de abertura e CTA final.
  Transforma uma ideia de conteúdo em estrutura pronta pra gravar — o que falar, em que ordem, com que energia.
  Use quando o usuário pedir "roteiro", "roteiro pro youtube", "script do vídeo", "o que falar no vídeo",
  "estruturar vídeo", ou /roteiro-youtube.
---

# /roteiro-youtube — Roteiro de vídeo pro YouTube

Pega uma ideia → entrega roteiro estruturado em blocos com bullet points, pronto pra gravar.

## Dependencias

- **Tom de voz:** `_memoria/preferencias.md` — LER ANTES
- **Contexto do negocio:** `_memoria/empresa.md`
- **Estrategia:** `_memoria/estrategia.md`
- **Output vai em:** `marketing/conteudo/roteiro-<slug>-<YYYY-MM-DD>/roteiro.md`

---

## Workflow

### Passo 1 — Receber a ideia

Se o usuario nao passou o tema, perguntar:
> "Qual o tema do video? (pode colar uma ideia do /tendencias ou descrever com suas palavras)"

Se veio do `/tendencias`, usar o angulo ja definido.

### Passo 2 — Pesquisar referencia

Fazer 2-3 buscas rapidas via WebSearch pra:
- Ver como criadores gringos abordaram o mesmo tema (angulos, titulos, estrutura)
- Encontrar dados, numeros ou exemplos concretos pra usar no video
- Identificar o que ja foi dito demais (pra evitar) e o que ninguem falou (pra diferenciar)

### Passo 3 — Definir estrutura

Propor 3 opcoes de titulo pro video e perguntar qual o usuario prefere.

Definir o formato do video:
- **Curto (5-8 min):** 3 blocos + intro + CTA
- **Medio (10-15 min):** 4-5 blocos + intro + CTA
- **Longo (20+ min):** 6+ blocos + intro + CTA

Se o usuario nao especificar, sugerir o formato medio.

### Passo 4 — Escrever o roteiro

Estrutura do roteiro:

```
# [Titulo do video]

## Duracao estimada: [X] minutos
## Formato: [curto/medio/longo]

---

## HOOK (primeiros 30 segundos)
> [Frase exata de abertura — pergunta, afirmacao forte ou situacao que prende]

- O que acontece: [descrever a energia, o tom, o que mostrar na tela]
- Transicao pro conteudo: [como sair do hook pro primeiro bloco]

---

## BLOCO 1 — [Titulo do bloco]
**Ponto principal:** [uma frase com a ideia central]

- [bullet point do que falar]
- [bullet point do que falar]
- [exemplo concreto ou dado pra mencionar]
- [analogia ou historia curta se tiver]

**Momento-chave:** [a frase mais forte desse bloco — a que fica na cabeca]
**Dica de gravacao:** [energia, ritmo, se deve olhar pra camera, se mostra tela]

---

## BLOCO 2 — [Titulo]
[mesmo formato]

---

## BLOCO 3 — [Titulo]
[mesmo formato]

---

## BLOCO N — [Titulo]
[mesmo formato]

---

## FECHAMENTO
- Resumo em 2-3 frases do que foi dito
- [frase de impacto final]

## CTA
- O que pedir: [inscrever, comentar, link na descricao]
- Frase sugerida: "[frase natural, sem parecer desesperado]"

---

## THUMBNAIL
- Texto sugerido: [2-4 palavras impactantes]
- Expressao: [seria, surpresa, pensativa]
- Elementos: [logo de ferramenta, grafico, nada]

## DESCRICAO DO VIDEO
[Texto pronto pra colar na descricao do YouTube — 3-5 linhas + links relevantes]

## TAGS
[10-15 tags relevantes separadas por virgula]
```

### Passo 5 — Salvar

Salvar em:
```
marketing/conteudo/roteiro-<slug>-<YYYY-MM-DD>/roteiro.md
```

Entregar:
```
Roteiro salvo em: marketing/conteudo/roteiro-<slug>-<data>/roteiro.md
Blocos: [N]
Duracao estimada: [X] minutos

Proximo passo: grava o video e depois roda /post-substack com o link pra transformar em artigo.
```

---

## Regras

- Nunca escrever script palavra por palavra — o Ednei fala natural, nao le teleprompter
- Bullet points curtos que guiam o raciocinio, nao paragrafos decorados
- Hook dos primeiros 30 segundos e obrigatorio — sem isso ninguem fica
- Sempre incluir pelo menos um exemplo concreto ou numero real por bloco
- Tom: direto, tecnico, sem hype — seguir `_memoria/preferencias.md`
- Nunca sugerir clickbait falso no titulo — o titulo promete, o video entrega
- Sempre incluir sugestao de thumbnail no final
