---
name: post-substack
description: >
  Escreve artigo longo e profundo pro Substack a partir de um vídeo do YouTube do Ednei.
  Extrai a transcrição do vídeo, expande as ideias com profundidade real, estrutura em seções
  e insere sugestões de imagem com prompt pronto pra gerar em outra IA entre as seções.
  Use quando o usuário pedir "post do substack", "artigo do substack", "escrever sobre o vídeo",
  "transformar vídeo em post", ou /post-substack.
---

# /post-substack — Artigo longo pro Substack a partir de vídeo

Pega um vídeo do YouTube → extrai a transcrição → escreve artigo longo, profundo e no tom da marca → insere sugestões de imagem com prompt entre seções → entrega arquivo pronto pra publicar.

## Dependências

- **Tom de voz:** `_memoria/preferencias.md` — LER ANTES de escrever qualquer linha
- **Contexto do negócio:** `_memoria/empresa.md`
- **yt-dlp:** instalado na máquina (`brew install yt-dlp`) — pra extrair transcrição
- **Output vai em:** `saidas/substack/post-<slug-do-titulo>-<YYYY-MM-DD>/post.md`

---

## Workflow

### Passo 1 — Receber o link

Se o usuário não passou o link do vídeo, pedir:
> "Qual o link do vídeo do YouTube que você quer transformar em post?"

### Passo 2 — Extrair transcrição

Rodar via Bash:
```bash
yt-dlp --write-auto-sub --sub-lang pt --skip-download --sub-format vtt -o "/tmp/yt-transcript" "<URL>"
```

Se não tiver legenda em português, tentar em inglês (`--sub-lang en`).

Se o yt-dlp não estiver instalado, avisar:
> "Preciso do yt-dlp pra extrair a transcrição. Instala com `brew install yt-dlp` e tenta de novo."

Se não conseguir extrair de nenhuma forma, pedir que o usuário cole a transcrição manualmente.

### Passo 3 — Analisar o conteúdo

Antes de escrever, identificar:
- **Ideia central** do vídeo
- **Argumentos principais** (3–5 pontos de peso)
- **Exemplos e histórias** que o Ednei contou
- **Conclusão ou chamada pra ação** do vídeo

### Passo 4 — Escrever o artigo

**Estrutura do artigo:**

```
[Título]
[Subtítulo — uma frase que complementa o título]

[Introdução — 2–3 parágrafos. Abre com uma cena, pergunta ou situação que o leitor reconhece. Não resume o vídeo — cria tensão.]

---

[SUGESTÃO DE IMAGEM 1]
Prompt: [prompt detalhado em inglês pra gerar em Midjourney, DALL-E ou Firefly]
Descrição: [o que a imagem deve comunicar visualmente]

---

[Seção 1 — título curto e direto]
[4–6 parágrafos. Aprofunda o primeiro argumento. Usa exemplos concretos, números reais quando existirem, analogias simples.]

---

[SUGESTÃO DE IMAGEM 2]
Prompt: [prompt detalhado em inglês]
Descrição: [o que a imagem deve comunicar]

---

[Seção 2 — título curto e direto]
[4–6 parágrafos. Segundo argumento. Pode incluir comparação, caso real ou dado.]

---

[SUGESTÃO DE IMAGEM 3]
Prompt: [prompt detalhado em inglês]
Descrição: [o que a imagem deve comunicar]

---

[Seção 3 — título curto e direto]
[4–6 parágrafos. Terceiro argumento ou ponto de virada.]

[Mais seções conforme necessário — mínimo 3, máximo 6]

---

[Conclusão — 2–3 parágrafos. Fecha o raciocínio sem repetir o que já foi dito. Termina com algo que fica na cabeça do leitor.]

[CTA — uma linha direta. Ex: "Se quiser acompanhar o próximo projeto sendo construído ao vivo, se inscreve no canal."]
```

**Regras de escrita:**
- Texto longo e profundo — mínimo 1.200 palavras, idealmente 1.800–2.500
- Tom idêntico ao da marca: direto, honesto, técnico, pessoal — ler `_memoria/preferencias.md` antes
- Escrever na primeira pessoa quando o conteúdo vier do Ednei
- Expandir as ideias além do que foi dito no vídeo — o artigo deve ser mais completo que o vídeo, não um resumo
- Não usar bullet lists como corpo principal — texto corrido em parágrafos
- Nenhuma frase de efeito vazia ou jargão de guru
- Usar exemplos concretos, números reais, situações reconhecíveis

**Regras das sugestões de imagem:**
- Inserir entre seções, nunca no meio de um parágrafo
- Prompt em inglês, descritivo e técnico — adequado pra Midjourney, DALL-E 3 ou Adobe Firefly
- Cada imagem deve reforçar visualmente o argumento da seção anterior ou seguinte
- Estilo visual deve ser coerente com a identidade da marca: sério, limpo, sem ostentação
- Nunca sugerir imagem de celebridade, rosto de pessoa real ou marca registrada

### Passo 5 — Salvar o arquivo

Salvar em:
```
saidas/substack/post-<slug>-<YYYY-MM-DD>/post.md
```

Onde `<slug>` é o título em kebab-case sem acentos.

### Passo 6 — Entregar

Mostrar o artigo completo e informar:
```
✓ Artigo salvo em: saidas/substack/post-<slug>-<data>/post.md
Palavras: [N]
Sugestões de imagem: [N]

Pra publicar: copia o conteúdo direto no editor do Substack.
Imagens: usa os prompts nas seções de SUGESTÃO DE IMAGEM no Midjourney, DALL-E ou Firefly.
```

---

## Regras

- Nunca resumir o vídeo — expandir as ideias com profundidade
- Nunca inventar dados que o Ednei não mencionou — se quiser adicionar contexto, deixar claro que é complemento
- Nunca usar bullet list como estrutura principal do artigo
- Sempre entregar arquivo salvo, não só mostrar na tela
- Se a transcrição estiver incompleta ou truncada, avisar antes de escrever
