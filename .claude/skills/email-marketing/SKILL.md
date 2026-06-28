---
name: email-marketing
description: >
  Transforma um post do Substack, transcrição de vídeo ou tema em email marketing pronto pra enviar.
  Versão curta, direta, com assunto matador e CTA claro. Gera 1 email principal + 1 variação de assunto.
  Use quando o usuário pedir "email marketing", "criar email", "versão email", "mandar pra lista",
  "newsletter", "email do vídeo", ou /email-marketing.
---

# /email-marketing — Email marketing a partir de conteúdo existente

Pega conteúdo já produzido (post Substack, vídeo, roteiro) → entrega email pronto pra enviar pra lista.

## Dependencias

- **Tom de voz:** `_memoria/preferencias.md` — LER ANTES
- **Contexto do negocio:** `_memoria/empresa.md`
- **Output vai em:** `marketing/conteudo/email-<slug>-<YYYY-MM-DD>/email.md`

---

## Workflow

### Passo 1 — Receber o conteúdo base

Identificar a fonte:
1. **Post do Substack** — usuario passa o arquivo ou link
2. **Vídeo do YouTube** — usuario passa o link (extrair transcricao via yt-dlp)
3. **Roteiro de vídeo** — usuario aponta pro arquivo do /roteiro-youtube
4. **Tema solto** — usuario descreve o que quer comunicar

Se nenhuma fonte for clara, perguntar:
> "Qual conteúdo vira email? (link do vídeo, post do Substack, ou descreve o tema)"

### Passo 2 — Extrair o essencial

Do conteúdo base, identificar:
- **Ideia central** em uma frase
- **1-2 insights mais fortes** (os que fazem alguem parar e pensar)
- **Exemplo ou historia concreta** mais impactante
- **CTA natural** (o que o leitor deve fazer depois)

### Passo 3 — Escrever o email

Estrutura:

```markdown
# Email Marketing — [Tema]

## Assunto (opcao A)
[Assunto curto — max 50 caracteres, sem emoji, gera curiosidade real]

## Assunto (opcao B)
[Variacao — angulo diferente pro mesmo conteudo]

## Preview text
[Frase que aparece ao lado do assunto na caixa de entrada — complementa sem repetir]

---

## Corpo do email

[Abertura — 1-2 frases. Começa com situacao, pergunta ou fato que o leitor reconhece. Sem "Olá, tudo bem?" nem "Nessa semana eu..."]

[Desenvolvimento — 3-5 paragrafos curtos. Conta a ideia principal com um exemplo concreto. Cada paragrafo tem no maximo 3 linhas — email nao e artigo.]

[Ponte pro conteudo — 1-2 frases conectando ao video/post/material completo]

[CTA — uma linha clara]
→ [Texto do botao/link]: [URL ou instrucao]

[Assinatura]
Ednei Marinho
Atitude e Progresso
[link do canal/site]

---

## Versao texto puro
[Mesmo conteudo sem formatacao — pra plataformas que precisam]
```

### Passo 4 — Salvar

Salvar em:
```
marketing/conteudo/email-<slug>-<YYYY-MM-DD>/email.md
```

Entregar:
```
Email salvo em: marketing/conteudo/email-<slug>-<data>/email.md
Assunto A: [assunto]
Assunto B: [assunto]
Palavras: [N]

Cola no teu provedor de email (Mailchimp, ConvertKit, Substack) e dispara.
```

---

## Regras

- Email curto — maximo 400 palavras no corpo. Ninguem le email longo
- Assunto sem emoji, sem CAIXA ALTA GRITANDO, sem "URGENTE" ou falsa escassez
- Abertura sem cumprimento generico ("Oi, tudo bem?", "Espero que esteja bem")
- Um unico CTA por email — nao dar 5 opcoes pro leitor
- Paragrafos de no maximo 3 linhas — email e lido no celular
- Tom identico ao da marca: direto, honesto, sem hype
- Sempre gerar versao texto puro alem da formatada
- Nunca prometer no assunto algo que o email nao entrega
- Se o conteudo base for um video, o CTA principal deve levar pro video
- Se for post Substack, o CTA leva pro post
