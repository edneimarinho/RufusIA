---
name: instalar
description: >
  Instala o RufusIA num negócio. Preenche o brief do cliente (ou do próprio usuário)
  com base em pesquisa pública ou conversa direta, e popula `_memoria/empresa.md`,
  `_memoria/preferencias.md`, `_memoria/estrategia.md` e `identidade/design-guide.md`.
  Use quando o usuário clonar o repositório e quiser fazer o setup, ou pedir
  explicitamente "rodar /instalar", "instalar o RufusIA", "primeiro setup".
---

# /instalar — Setup inicial do RufusIA

Esse comando monta o brief do negócio antes de qualquer produção. Pode ser rodado
pra uso próprio ou pra um cliente antes de uma call de apresentação.

Pergunta uma coisa por vez. Não enfileira. Se a resposta vier vaga, pede concretude
uma vez — se continuar vaga, registra o que tem e segue.

---

## Pré-checagem

### 1. Contexto de uso

Perguntar antes de começar:

> "Esse setup é pra você ou pra um cliente?"

- **Próprio:** rodar o brief completo (Bloco 1 + Bloco 2)
- **Cliente:** rodar só o Bloco 1 e avisar que o Bloco 2 fica pra depois de fechar

### 2. Arquivos de contexto

Verificar se algum arquivo de memória já tem conteúdo real (não placeholder):
- `_memoria/empresa.md`
- `_memoria/preferencias.md`
- `_memoria/estrategia.md`
- `identidade/design-guide.md`

Se algum estiver preenchido, perguntar:
> "Já tem contexto aqui. Quer recomeçar do zero ou complementar o que falta?"

Se for setup limpo, seguir direto.

---

## Bloco 1 — Brief de pesquisa

*Sempre preenchido. Respondível a partir do Instagram, site, Google Maps ou
qualquer material público do negócio.*

**1. Nome / marca**
> "Qual o nome da empresa ou marca?"

**2. Nicho específico**
> "Em qual nicho específico atua? Não só o setor — o recorte. Ex: não 'salão',
> mas 'salão focado em coloração pra mulheres acima de 40'."

**3. O que vende**
> "Quais os produtos ou serviços principais?"

**4. Quem compra**
> "Descreve o cliente ideal — quem é, quantos anos tem, o que tá passando quando
> procura esse negócio?"

**5. Dor do cliente**
> "Qual o principal problema que o cliente tem antes de contratar ou comprar?"

**6. Canais ativos**
> "Onde o negócio já está presente? Instagram, site, WhatsApp, GMB, YouTube —
> lista o que tiver."

**7. Tom de comunicação**
> "Como a marca se comunica hoje — e o que não combina com ela?"
>
> *(Se for cliente: olhar os posts existentes e descrever o padrão. Se for próprio:
> colar um exemplo real de escrita.)*

**8. Identidade visual**
> "Tem identidade visual? Me passa as cores principais, fonte e se tem logo.
> Se tiver o arquivo do logo, joga em `identidade/logo.png` ou `.svg`."

**9. Entregáveis da call** *(só para setup de cliente)*
> "O que está faltando nesse negócio que você vai criar antes da reunião?
> Ex: site, carrossel de apresentação, perfil do GMB, proposta."

---

## Bloco 2 — Contexto interno

*Preencher quando for setup próprio ou após fechar o cliente.*

Se for setup de cliente, avisar:
> "As próximas duas perguntas são sobre operação interna — mais relevantes depois
> que você fechar. Quer pular por agora?"

**10. O que trava o crescimento**
> "O que está impedindo o negócio de crescer hoje?"

**11. O que você mais repete**
> "Se eu pudesse tirar uma coisa que você faz toda semana das suas costas, qual seria?"

---

## Preenchimento dos arquivos

### `_memoria/empresa.md`
Preencher com base nas perguntas 1–6. Estrutura: nome, nicho, o que vende, perfil
de cliente, dor principal, canais ativos.

### `_memoria/preferencias.md`
Preencher com base na pergunta 7. Estrutura:
- **Tom de voz:** descrever o padrão de comunicação em 2–3 frases
- **O que evitar:** o que não combina com a marca
- **Estilo geral:** síntese

### `_memoria/estrategia.md`
Preencher com base nas perguntas 9–11. Estrutura:
- **Entregáveis imediatos:** [resposta da 9, se cliente]
- **O que trava o crescimento:** [resposta da 10]
- **Pra automatizar:** [resposta da 11] — candidata a skill via `/mapear-rotinas`
- **Próximas prioridades:** derivar dos entregáveis e do gargalo

### `identidade/design-guide.md`
Preencher com cores, fonte e logo da resposta 8. Se não tiver identidade definida,
deixar em branco e avisar:
> "Deixei o `identidade/design-guide.md` em branco. Quando tiver a identidade
> visual, edita lá — as skills de carrossel, site e proposta leem esse arquivo
> antes de criar qualquer visual."

---

## Resumo

Ao final, mostrar o que foi configurado:

```
✓ Empresa: _memoria/empresa.md
✓ Tom de voz: _memoria/preferencias.md
✓ Estratégia: _memoria/estrategia.md
✓ Identidade visual: identidade/design-guide.md  [preenchida | em branco]
```

Se for setup de cliente e tiver entregáveis listados na pergunta 9:
> "Entregáveis mapeados: [lista]. Quer que eu comece por algum agora?"

Se for setup próprio e tiver resposta na pergunta 11:
> "Você mencionou que repete '[resposta 11]' toda semana. Quando quiser
> automatizar isso, roda `/mapear-rotinas`."

---

## Regras

- Não inventar dados — registrar do jeito que veio ou deixar placeholder claro
- Não escrever avisos de placeholder nos arquivos finais
- Setup deve durar no máximo 7 minutos — se travar numa pergunta, registra o que tem e segue
- Não fazer perguntas fora da lista sem motivo claro
- Se for setup de cliente, o Bloco 2 é opcional — não insistir
