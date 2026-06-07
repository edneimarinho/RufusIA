---
name: legenda
description: >
  Cria legendas prontas pra Instagram, Facebook e LinkedIn a partir de um tema, ideia,
  produto ou evento. Rápido — sem precisar criar carrossel ou blog. Gera 3 versões
  calibradas pela persona e pelo tom de voz da marca.
  Use quando o usuário pedir "legenda", "criar legenda", "texto pro post", "legenda pro
  instagram", "escrever legenda pra X", ou /legenda.
---

# /legenda — Legendas para redes sociais

Skill rápida de produção de copy para posts. Pega um tema ou contexto → entrega 3 legendas prontas (Instagram/Facebook + LinkedIn + versão curta) com hashtags.

## Dependências

- **Tom de voz:** `_memoria/preferencias.md` — LER SEMPRE
- **Contexto do negócio:** `_memoria/empresa.md` (diferenciais, contato, oferta)
- **Outputs vão em:** `marketing/conteudo/legenda-<tema>-<YYYY-MM-DD>/legenda.md`

---

## Workflow

### Passo 1 — Entender o pedido

Se o usuário passou tema, produto ou contexto → usar diretamente.

Se veio vago, perguntar só o essencial:

1. **Tema ou contexto do post?** (ex: "lançamento de serviço novo", "dica de segunda-feira", "antes e depois de cliente")
2. **Tem imagem ou vídeo que vai junto?** (muda o hook — com visual o hook pode ser curto; sem visual precisa prender mais)
3. **Objetivo do post?** (engajamento, venda, relacionamento, tráfego pro site)

### Passo 2 — Criar as 3 versões

**Versão 1 — Instagram + Facebook (longa)**

Estrutura:
- **Hook (linha 1):** pergunta, afirmação provocativa, dado ou situação que o público reconhece. Essa linha aparece antes do "ver mais" — é o que decide se a pessoa vai ler
- **Corpo (2-4 parágrafos):** desenvolver o tema com linguagem natural. Uma ideia por parágrafo, parágrafos de 2-3 linhas
- **CTA:** ação específica ("Arraste pro lado", "Comenta aqui X", "Chama no direct", "Link na bio")
- **Bloco de oferta (quando relevante):** diferenciais da empresa + contato (WhatsApp ou @)
- **Hashtags:** 10-15 — mistura de nicho + público + localização (se aplicável)

**Versão 2 — LinkedIn (mais analítica)**

Estrutura:
- **Hook:** pode ser mais direto ou provocativo profissionalmente
- **Corpo:** 3-5 parágrafos. LinkedIn aceita texto longo — aproveitar. Mais análise, mais contexto de mercado
- **Sem** bloco de oferta agressivo — fechar com 1 linha sobre a empresa
- **Sem** "arraste pro lado"
- Máx 3-5 hashtags do nicho profissional, no final

**Versão 3 — Curta (Stories / Reels / Twitter/X)**

- 2-4 linhas no máximo
- Hook + ponto principal + CTA
- Direto ao ponto

### Passo 3 — Hashtags

Gerar 2 listas:

**Lista padrão** (puxar de `_memoria/empresa.md` se tiver nicho definido):
- 5 hashtags de nicho (ex: #nutricionista #alimentacaosaudavel)
- 4 hashtags de público (ex: #maesocupadas #empreendedoras)
- 3 hashtags de conteúdo (ex: #dicasdesaude #vidasaudavel)
- 2 hashtags de localização se negócio local (ex: #saopaulosp #bairronome)

**Lista alternativa** (variar pra não cair no shadow-ban):
- Mesma estrutura, hashtags diferentes

### Passo 4 — Salvar

```
marketing/conteudo/legenda-<slug-tema>-<YYYY-MM-DD>/
  legenda.md    ← as 3 versões + 2 listas de hashtags
```

### Passo 5 — Entrega

Mostrar as 3 versões diretamente na conversa (não só salvar no arquivo). O usuário escolhe qual usar, pode pedir ajuste, e vai.

---

## Regras

- **Hook é o mais importante** — a primeira linha decide tudo. Reescrever até ficar forte
- **Linguagem segue `_memoria/preferencias.md` estritamente** — a legenda tem que soar como a marca, não como copy genérico
- **Sem corporativês:** "prezados seguidores", "venha nos conhecer", "confira nossas soluções" — nunca
- **CTA específico:** "comenta aqui" é melhor que "deixe seu comentário". "Chama no direct" é melhor que "entre em contato"
- **Hashtags reais:** usar hashtags que o público realmente usa, não as mais populares que afogam o post
- **Post de venda:** não esconder que é uma oferta. Transparência converte mais que disfarçar
- **Post de conteúdo:** terminar sempre com alguma forma de interação (pergunta, CTA de comentário)
- Nunca inventar métricas, estatísticas ou depoimentos
