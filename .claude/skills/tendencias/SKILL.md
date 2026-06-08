---
name: tendencias
description: >
  Pesquisa os assuntos mais quentes do momento no nicho de marketing digital, IA e automação
  e entrega uma lista de ideias de conteúdo prontas pra usar — com ângulo, formato sugerido
  e por que aquele tema está em alta agora.
  Use quando o usuário pedir "o que está em alta", "ideias de conteúdo", "pesquisa de tendências",
  "o que postar essa semana", "temas pra criar", ou /tendencias.
---

# /tendencias — Pesquisa de tendências e ideias de conteúdo

Pesquisa o que está em alta no nicho → filtra pelo contexto do negócio → entrega lista de ideias prontas com ângulo definido.

## Dependências

- **Contexto do negócio:** `_memoria/empresa.md` — LER ANTES pra calibrar o nicho
- **Tom de voz:** `_memoria/preferencias.md`
- **Output vai em:** `saidas/tendencias/tendencias-<YYYY-MM-DD>.md`

---

## Workflow

### Passo 1 — Verificar recorte

Ler `_memoria/empresa.md` pra confirmar o nicho: marketing digital, IA e automação para brasileiros que buscam renda online.

Se o usuário quiser focar em subnicho específico, perguntar:
> "Quer focar em algum tema específico? (ex: IA, funis, Instagram, automação) — ou pesquiso o nicho completo?"

### Passo 2 — Pesquisar tendências

Fazer buscas nas seguintes fontes via WebSearch:

1. **Tendências de IA e ferramentas:** novidades de modelos, ferramentas, lançamentos da semana
2. **Marketing digital em alta:** o que criadores de conteúdo do nicho estão publicando
3. **Perguntas frequentes:** o que brasileiros estão perguntando sobre o tema (Reddit, YouTube, Quora)
4. **Polêmicas e debates:** o que está gerando discussão no nicho agora

Fazer no mínimo 3 buscas distintas antes de montar a lista.

### Passo 3 — Filtrar e selecionar

Selecionar 7–10 temas que:
- Estão em alta agora (última semana/mês)
- Se encaixam no posicionamento anti-guru da marca
- Têm ângulo concreto — não só o tema genérico

Descartar:
- Temas que a marca não pode falar com propriedade
- Tendências que já passaram
- Assuntos que contradizem o posicionamento da marca

### Passo 4 — Montar a lista

Formato de cada tema:

```
### [N]. [Título do tema]
**Por que está em alta:** [1–2 frases — o que aconteceu pra esse tema ganhar atenção agora]
**Ângulo pro canal:** [como o Ednei aborda isso no estilo da marca — direto, sem hype]
**Formato sugerido:** [vídeo YouTube / carrossel Instagram / post Substack / os três]
**Título sugerido:** [uma opção de título pronto pra usar]
```

### Passo 5 — Salvar e entregar

Salvar em:
```
saidas/tendencias/tendencias-<YYYY-MM-DD>.md
```

Mostrar a lista completa e informar:
```
✓ [N] ideias salvas em: saidas/tendencias/tendencias-<data>.md

Pra transformar qualquer tema em conteúdo:
- Vídeo + post Substack → /post-substack
- Carrossel Instagram → /carrossel
- Só legenda → /legenda
```

---

## Regras

- Nunca inventar tendência — tudo precisa ter origem verificável
- Não incluir tema só porque é popular se não se encaixar no posicionamento da marca
- Sempre incluir o ângulo específico — tema genérico sem ângulo não serve
- Se não encontrar nada relevante na pesquisa, dizer claramente em vez de preencher com conteúdo raso
