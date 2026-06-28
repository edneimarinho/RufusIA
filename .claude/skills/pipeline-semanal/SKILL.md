---
name: pipeline-semanal
description: >
  Pipeline completo de conteúdo semanal — pesquisa tendências, cria roteiro de vídeo, gera carrossel,
  e depois da gravação transforma em post Substack + email marketing. Orquestra as skills em sequência,
  pausando quando precisa de ação do usuário (gravar vídeo). Use quando o usuário pedir "pipeline semanal",
  "conteúdo da semana", "rodar o pipeline", "começar a semana de conteúdo", "produção semanal", ou /pipeline-semanal.
---

# /pipeline-semanal — Pipeline completo de conteúdo da semana

Orquestra todas as skills de conteúdo em sequência. Cada etapa entrega um resultado concreto e avança pra próxima. Pausa quando precisa de ação humana.

## Dependencias

- Todas as skills chamadas: `/tendencias`, `/roteiro-youtube`, `/carrossel`, `/post-substack`, `/email-marketing`
- Contexto: `_memoria/empresa.md`, `_memoria/preferencias.md`, `_memoria/estrategia.md`
- Identidade: `identidade/design-guide.md`

---

## Workflow

### FASE 1 — Pesquisa e ideias
**Skill:** `/tendencias`

1. Rodar a pesquisa de tendências focando em fontes gringas (YouTube, Substack, X em inglês)
2. Entregar 7-10 ideias com ângulo definido
3. Perguntar ao usuário:
> "Essas são as ideias da semana. Qual você quer transformar em vídeo?"

**Pausa:** Esperar o usuário escolher a ideia.

---

### FASE 2 — Roteiro do vídeo
**Skill:** `/roteiro-youtube`

1. Pegar a ideia escolhida e criar o roteiro completo
2. Entregar: bullet points, hook, blocos, CTA, sugestão de thumbnail
3. Perguntar:
> "Roteiro pronto. Quer ajustar algo antes de gravar?"

**Pausa:** Esperar aprovação do roteiro.

---

### FASE 3 — Carrossel pro Instagram
**Skill:** `/carrossel`

1. Usar o mesmo tema do vídeo pra criar carrossel
2. Adaptar o ângulo pro formato visual (mais curto, mais direto)
3. Entregar: HTML + PNGs + legenda

Informar:
> "Carrossel pronto pra postar. Pode publicar agora ou agendar — o tema é o mesmo do vídeo, reforça a mensagem."

---

### FASE 4 — Pausa pra gravação

Nesse ponto, o usuário precisa gravar o vídeo e subir pro YouTube.

Informar:
```
--- PAUSA DO PIPELINE ---

Etapas concluídas:
✓ Tendências pesquisadas
✓ Roteiro criado
✓ Carrossel pronto

Próximo passo: grava o vídeo usando o roteiro e sobe pro YouTube.
Quando tiver o link, roda /pipeline-semanal de novo ou cola o link aqui
que eu continuo de onde parei (Fase 5 — Substack + Email).
```

**Pausa:** Esperar o usuário voltar com o link do vídeo.

---

### FASE 5 — Post pro Substack
**Skill:** `/post-substack`

1. Receber o link do vídeo do YouTube
2. Extrair transcrição
3. Escrever artigo longo e profundo
4. Entregar o post salvo

---

### FASE 6 — Email marketing
**Skill:** `/email-marketing`

1. Usar o post do Substack como base
2. Criar versão email: curta, direta, com CTA pro vídeo
3. Entregar email pronto

---

### ENTREGA FINAL

```
--- PIPELINE SEMANAL COMPLETO ---

✓ Tendências: saidas/tendencias/tendencias-<data>.md
✓ Roteiro: marketing/conteudo/roteiro-<slug>-<data>/roteiro.md
✓ Carrossel: marketing/conteudo/carrossel-<slug>-<data>/
✓ Post Substack: saidas/substack/post-<slug>-<data>/post.md
✓ Email: marketing/conteudo/email-<slug>-<data>/email.md

Tudo produzido a partir de 1 ideia:
- Vídeo YouTube (você gravou)
- Carrossel Instagram (pronto)
- Artigo Substack (pronto)
- Email marketing (pronto)

4 peças de conteúdo de 1 tema. Semana resolvida.
```

---

## Como retomar o pipeline

O pipeline tem uma pausa natural entre a Fase 4 e a Fase 5 (gravação do vídeo).

Quando o usuário voltar com o link do vídeo, ele pode:
1. Rodar `/pipeline-semanal` e colar o link — o sistema detecta que já tem roteiro e carrossel e pula pras fases 5-6
2. Rodar `/post-substack` e `/email-marketing` separadamente

Para detectar que é continuação: verificar se existe pasta `marketing/conteudo/roteiro-*` da semana atual. Se existir, perguntar:
> "Vi que você já tem roteiro e carrossel dessa semana. Quer continuar o pipeline? Me passa o link do vídeo."

---

## Regras

- Cada fase usa a skill correspondente com todas as regras dela — o pipeline so orquestra, nao substitui
- Sempre pausar pra aprovacao entre fases — nunca rodar tudo automaticamente sem o usuario ver
- Na Fase 1, priorizar fontes em inglês e traduzir/adaptar pro contexto brasileiro
- Se o usuario quiser pular uma fase (ex: ja tem a ideia, nao precisa do /tendencias), deixar pular
- Se o usuario quiser so as fases 1-4 (sem ter gravado ainda), entregar e informar como continuar depois
- Nunca inventar o link do video — sempre esperar o usuario fornecer
- Uma ideia por semana no pipeline — se quiser mais, rodar o pipeline de novo
