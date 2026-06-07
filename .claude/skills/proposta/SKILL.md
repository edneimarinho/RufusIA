---
name: proposta
description: >
  Gera proposta comercial completa como página web — link enviável pelo WhatsApp ou email.
  Página visual estilo sales page com logo do cliente, diagnóstico, entregáveis, antes/depois
  (pra redesigns), investimento em destaque, formas de pagamento e CTA direto.
  Use quando o usuário pedir "criar proposta", "gerar proposta pra X", "montar orçamento",
  "proposta comercial", ou /proposta.
---

# /proposta — Proposta comercial como página web

Skill que gera proposta profissional como uma página web — não um PDF, não um documento. O cliente recebe um link, abre no celular ou computador, e vê uma apresentação visual completa do que será entregue. No final, um botão de WhatsApp pra confirmar na hora.

## Dependências

- **Contexto do negócio:** `_memoria/empresa.md` (quem oferece o serviço, diferenciais, contato)
- **Tom de voz:** `_memoria/preferencias.md`
- **Identidade visual:** `identidade/design-guide.md` (cores, fontes, logo do prestador)
- **Brief do cliente:** `dados/projetos/<slug-cliente>/brief.md` (se existir)
- **Outputs vão em:** `saidas/propostas/<slug-cliente>-<YYYY-MM-DD>/`

---

## Workflow

### Passo 1 — Briefing

Se existir `dados/projetos/<slug-cliente>/brief.md`, ler antes de perguntar e pular o que já estiver respondido.

Se não tiver brief completo, perguntar:

1. **Nome do cliente / empresa?**
2. **O que você vai entregar?** (serviços incluídos — seja específico)
3. **O que NÃO está incluído?** (o que fica fora do escopo)
4. **O cliente já tem site hoje?** (se sim: redesign — ativa seção antes/depois)
5. **URL do site atual do cliente?** (se for redesign — pra capturar screenshot mental e listar pontos fracos)
6. **Logo do cliente?** (caminho do arquivo ou cor/nome da empresa como fallback)
7. **Prazo de entrega?**
8. **Investimento total?** (valor cheio)
9. **Formas de pagamento?** (ex: "R$ 800 entrada + R$ 800 na entrega" / "3x R$ 550" / "à vista R$ 1.500")
10. **Validade da proposta?** (padrão: 7 dias)
11. **Algum diferencial ou argumento específico pra esse cliente?**

---

### Passo 2 — Estrutura da página

A proposta é uma página web com as seguintes seções em ordem:

---

**SEÇÃO 1 — Hero**
- Logo do cliente no topo (se tiver) ou nome da empresa em tipografia grande
- Linha personalizada: "Proposta para [Nome do Cliente]"
- Subtítulo com o serviço principal: "Criação do site institucional da [Empresa]"
- Data de emissão + validade
- Fundo escuro com cor de destaque ou cor da marca do prestador

**SEÇÃO 2 — Quem está propondo**
- Logo + nome do prestador (puxar de `_memoria/empresa.md`)
- 3-4 linhas: quem é, o que faz, por que essa proposta faz sentido pra esse cliente
- Sem "somos apaixonados por" — só concreto: anos de mercado, clientes atendidos, resultado entregue

**SEÇÃO 3 — Diagnóstico**
- O que foi identificado no negócio do cliente: oportunidade ou problema que essa proposta resolve
- Mostrar que entendeu o contexto (2-4 bullets concretos)
- Ex: "Hoje sua empresa não tem presença digital → clientes não te encontram pelo Google"

**SEÇÃO 4 — Antes e Depois (só se for redesign)**
- Ativar apenas se o cliente já tem site e vai ser refeito
- Dois cards lado a lado:
  - **Antes:** pontos fracos do site atual (não responsivo, visual desatualizado, sem CTA claro, lento, etc.)
  - **Depois:** o que o novo site vai corrigir e entregar
- Visual: card cinza/vermelho pra "antes", card verde/destaque pra "depois"
- Nunca inventar — basear nos problemas reais do site atual informados pelo usuário ou identificáveis pela URL

**SEÇÃO 5 — O que será entregue**
- Cards com ícone SVG simples, nome do entregável, descrição de 1-2 linhas e benefício direto
- Separar claramente o que está incluso e o que não está
- Exemplo de card:
  - Ícone: 📱 → "Site responsivo" → "Funciona perfeitamente no celular e no computador"
- Máx 8 entregáveis. Se tiver mais, agrupar

**SEÇÃO 6 — Como vai funcionar**
- Timeline visual em etapas numeradas
- Cada etapa: nome + descrição curta + prazo parcial
- Ex: Etapa 1 (Dia 1-2): Briefing e alinhamento → Etapa 2 (Dia 3-7): Desenvolvimento → Etapa 3 (Dia 8-10): Revisão → Etapa 4 (Dia 11): Entrega e publicação
- Quantas rodadas de revisão estão incluídas (deixar explícito)

**SEÇÃO 7 — Investimento**
- Seção com fundo de destaque — visualmente separada do resto
- Valor total em tipografia grande e bold
- Formas de pagamento em cards separados:
  - Card 1: À vista (com desconto se houver)
  - Card 2: Parcelado (2x, 3x com valores)
  - Card 3: Entrada + entrega (se for o modelo)
- Política de extras: "Itens fora do escopo serão orçados separadamente antes de executar"
- Validade da proposta com data exata (calcular a partir de hoje + dias de validade)

**SEÇÃO 8 — Próximos passos**
- CTA direto e simples: "Gostou? É só me chamar no WhatsApp pra confirmar"
- Botão grande de WhatsApp com mensagem pré-preenchida:
  `"Olá, quero aprovar a proposta de [serviço] para [empresa do cliente]"`
- Abaixo: email de contato como alternativa
- Fundo escuro, contraste alto — essa seção tem que chamar atenção

**RODAPÉ**
- Nome do prestador, logo, contato, copyright
- Linha: "Esta proposta é válida até [data]"

---

### Passo 3 — Criar o HTML

**Tecnologia:** HTML5 + CSS no `<style>` + JS mínimo (smooth scroll, nenhum framework).
Zero dependências externas exceto Google Fonts. Funciona offline após o primeiro load.

**CSS:**
- Variáveis no `:root` pras cores do prestador (de `identidade/design-guide.md`)
- Mobile-first, breakpoint em 768px
- Seções alternando entre fundo branco e cinza claro `#F8F8F6`
- Hero e seção de investimento com fundo escuro
- Max-width: 900px, centralizado

**Logo do cliente:**
```html
<!-- Se tiver arquivo de logo -->
<img src="logo-cliente.png" alt="[Nome do cliente]" style="max-height: 60px;">

<!-- Se não tiver logo — usar nome em tipografia grande -->
<span class="cliente-nome">[NOME DO CLIENTE]</span>
```

**Cards de pagamento:**
```html
<div class="pagamento-cards">
  <div class="card-pagamento destaque">
    <span class="label">À vista</span>
    <span class="valor">R$ X.XXX</span>
    <span class="detalhe">Economia de R$ XXX</span>
  </div>
  <div class="card-pagamento">
    <span class="label">2x sem juros</span>
    <span class="valor">R$ X.XXX</span>
    <span class="detalhe">R$ XXX por parcela</span>
  </div>
</div>
```

**Botão WhatsApp:**
```html
<a href="https://wa.me/55XXXXXXXXXXX?text=Olá%2C+quero+aprovar+a+proposta+de+[serviço]+para+[empresa]"
   class="btn-whatsapp" target="_blank">
  Quero aprovar esta proposta
</a>
```
Preencher com número de `_memoria/empresa.md`.

**Seção antes/depois (quando ativada):**
```html
<div class="antes-depois">
  <div class="card-antes">
    <h3>Site atual</h3>
    <ul>
      <li>❌ Não abre bem no celular</li>
      <li>❌ Visual desatualizado</li>
      <li>❌ Sem botão de WhatsApp</li>
    </ul>
  </div>
  <div class="card-depois">
    <h3>Site novo</h3>
    <ul>
      <li>✅ 100% responsivo</li>
      <li>✅ Design moderno e profissional</li>
      <li>✅ CTA direto pro WhatsApp</li>
    </ul>
  </div>
</div>
```

**Responsivo:** testar mentalmente em 375px — cliente vai abrir no celular.

---

### Passo 4 — Salvar e publicar

```
saidas/propostas/<slug-cliente>-<YYYY-MM-DD>/
  index.html          ← arquivo da proposta
  logo-cliente.png    ← logo do cliente (se fornecida)
```

Ao salvar, mostrar instrução de publicação:

```
Pra enviar pro cliente:
1. Acesse netlify.com/drop
2. Arrasta a pasta saidas/propostas/<slug-cliente>-<YYYY-MM-DD>/
3. Netlify gera um link automático (ex: https://random-name.netlify.app)
4. Manda o link pelo WhatsApp pro cliente

Tempo total: menos de 2 minutos.
```

---

### Passo 5 — Resumo final

```
✓ Proposta gerada: saidas/propostas/<slug-cliente>-<YYYY-MM-DD>/index.html

Cliente: [Nome]
Serviço: [O que será entregue]
Investimento: [Valor] — válida até [data]
Seção antes/depois: [sim / não]

Próximo passo: subir no Netlify Drop e enviar o link.
```

---

## Regras

- **Nunca inventar valores, prazos ou depoimentos** — se não foi informado, perguntar
- **Escopo claro é obrigatório** — o que está e o que não está incluso evita conflito depois
- **Antes/depois só com dados reais** — não inventar problemas no site atual sem URL ou sem o usuário informar
- **Investimento em destaque visual** — tem que ser a seção mais fácil de encontrar na página
- **Formas de pagamento sempre em cards separados** — nunca misturar num parágrafo de texto
- **CTA tem que ser uma ação específica** — botão de WhatsApp com mensagem pré-preenchida, não "entre em contato"
- **Tom profissional mas direto** — seguir `_memoria/preferencias.md`. Sem "prezado cliente", sem corporativês
- **Proposta começa com o cliente** — hero com logo/nome do cliente, não com quem é o prestador
- **Validade padrão: 7 dias** — se o usuário não definir, usar esse e calcular a data exata
- **Zero dependências externas além de Google Fonts** — página tem que carregar rápido no celular
