---
name: site
description: >
  Cria landing pages e sites institucionais completos em HTML/CSS puro, prontos pra hospedar.
  Gera página responsiva com seções de hero, serviços, sobre, depoimentos, FAQ e CTA.
  Lê identidade visual e contexto do negócio antes de criar qualquer coisa.
  Use quando o usuário pedir "criar site", "fazer landing page", "montar página", "site pra cliente",
  "página de vendas", ou /site.
---

# /site — Landing page e site institucional

Skill que cria sites completos em HTML/CSS puro — sem framework, sem dependência de build, pronto pra hospedar no GitHub Pages, Netlify, ou qualquer servidor. Um arquivo HTML funcional, responsivo e com identidade visual aplicada.

## Dependências

- **Identidade visual:** `identidade/design-guide.md` — LER ANTES de criar qualquer visual
- **Contexto do negócio:** `_memoria/empresa.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Brief do cliente (se existir):** `dados/projetos/<slug-cliente>/brief.md`
- **Outputs vão em:** `site/<slug-cliente>/` (ou `site/` se for site próprio)

---

## Tipos de site

Identificar qual se encaixa no pedido:

### 1. LANDING PAGE (página única)
- **Quando usar:** captura de leads, lançamento de serviço, apresentação pré-call
- **Estrutura:** Hero → Problema → Solução → Serviços → Sobre → Depoimentos → FAQ → CTA final

### 2. SITE INSTITUCIONAL (multi-seção)
- **Quando usar:** presença digital completa da empresa
- **Estrutura:** igual ao landing page + nav com âncoras + rodapé com mapa/contato

### 3. PÁGINA DE VENDAS (long copy)
- **Quando usar:** produto com objeções, serviço de ticket alto
- **Estrutura:** Hero → Dor → Agitação → Solução → Prova social → Oferta → Garantia → FAQ → CTA

### 4. PÁGINA DE VENDAS DE EBOOK
- **Quando usar:** ebook pago — o usuário criou um ebook com `/ebook` e quer vender ou apresentar o produto com oferta e preço
- **Fonte:** ler `marketing/ebooks/<slug>/conteudo.md` e `marketing/ebooks/<slug>/brief-pagina-ebook.md`
- **Estrutura:** Hero → O que você vai aprender → Para quem é → Sobre o autor → Depoimentos → FAQ → Oferta + CTA
- **Briefing:** nenhum — todas as informações vêm do brief e do conteúdo do ebook

### 5. PÁGINA DE CAPTURA DE EBOOK
- **Quando usar:** ebook gratuito usado como isca digital — o visitante deixa nome e contato pra receber o material
- **Fonte:** ler `marketing/ebooks/<slug>/conteudo.md` e `marketing/ebooks/<slug>/brief-pagina-ebook.md`
- **Estrutura:** Hero + formulário → O que você vai aprender → Para quem é → Sobre o autor → CTA final
- **Diferença da página de vendas:** sem seção de preço, sem FAQ de objeções — foco total na troca (contato por ebook). Formulário simples: nome + email ou WhatsApp
- **Briefing:** nenhum — todas as informações vêm do brief e do conteúdo do ebook

Se não estiver claro, perguntar:
> "Qual o objetivo da página? (1) capturar leads, (2) apresentar a empresa, (3) vender um produto/serviço específico, (4) vender um ebook, (5) capturar leads com ebook gratuito"

---

## Workflow

### Passo 0 — Verificar se é página de ebook (tipos 4 ou 5)

Se o tipo for **Página de Vendas de Ebook (4)** ou **Página de Captura de Ebook (5)**, executar este passo antes de qualquer briefing:

1. Perguntar: "Qual o slug do ebook? (ex: `como-atrair-mais-clientes-2026-06-06`)"
2. Ler `marketing/ebooks/<slug>/brief-pagina-ebook.md` — extrair tipo de página, título, subtítulo, público, CTA, canal, capítulos, promessa e dores
3. Ler `marketing/ebooks/<slug>/conteudo.md` — usar a introdução e os bullets dos capítulos como prova de conteúdo
4. Identificar o **Tipo de página** no brief (`captura` ou `vendas`) e montar a estrutura correspondente abaixo
5. Não fazer nenhuma pergunta de briefing — tudo já está nos arquivos

---

#### Estrutura — Página de Captura (isca digital, ebook gratuito)

**Hero:**
- Headline: promessa central do ebook em 6-10 palavras
- Subheadline: para quem é e o que vai resolver
- Formulário inline: nome + email ou WhatsApp (mínimo de campos)
- Botão CTA: "Quero receber o ebook grátis" ou "Baixar agora"
- Visual: capa do ebook (placeholder estilizado se não tiver imagem)

**O que você vai aprender:**
- Capítulos reescritos como benefícios diretos: "Capítulo 2 — Gestão de tempo" → "Como organizar sua rotina e sobrar horas no dia"
- Máx 7 itens com ícone SVG simples e 1 linha de descrição

**Para quem é:**
- 3 perfis em cards: "Esse ebook é pra você se..."
- Extrair do campo Público do brief

**Sobre o autor / empresa:**
- Puxar de `_memoria/empresa.md`
- Nome, foto (ou placeholder), 3-4 linhas diretas, diferenciais

**CTA final:**
- Repetir formulário de captura
- Fundo na cor de destaque da marca

*Não incluir: seção de preço, FAQ de objeções, depoimentos (a menos que fornecidos)*

---

#### Estrutura — Página de Vendas (ebook pago)

**Hero:**
- Headline: título do ebook focado no resultado
- Subheadline: subtítulo do ebook
- CTA primário: botão de compra com o CTA do brief
- Visual: capa do ebook (placeholder estilizado se não tiver imagem)

**O que você vai aprender:**
- Capítulos reescritos como benefícios diretos
- Máx 7 itens com ícone SVG simples e 1 linha de descrição

**Para quem é:**
- 3 perfis em cards: "Esse ebook é pra você se..."

**Sobre o autor / empresa:**
- Puxar de `_memoria/empresa.md`

**Depoimentos:**
- Só incluir se fornecidos — nunca inventar. Se não tiver, omitir.

**FAQ:**
- 5-6 perguntas comuns sobre o conteúdo e a compra
- Accordion em CSS puro

**Oferta + CTA final:**
- Valor em destaque, formas de pagamento em cards separados
- Botão de compra com urgência ou escassez real (nunca inventar)
- Fundo na cor de destaque da marca

---

Após montar a estrutura, pular direto para o Passo 4 (criar o HTML). Não executar Passos 1, 2 ou 3.

**Output:** `site/ebook-<slug>/index.html`

---

### Passo 1 — Briefing do cliente

Verificar se existe `dados/projetos/<slug-cliente>/brief.md`. Se sim, usar como base.

Se não tiver brief, perguntar:

1. **Tipo de site?** (landing page / institucional / página de vendas)
2. **Nicho/segmento do cliente?** (oficina, clínica, salão, advogado, restaurante...)
3. **Qual o principal CTA?** (WhatsApp, formulário, ligação, compra)
4. **Serviços ou produtos a destacar?** (máx 4-6)
5. **Tem depoimentos de clientes?** (texto ou nome — inventar nunca)
6. **Tem endereço físico ou atende online?**
7. **Tem logo e cores definidas?** (se não, pedir referências visuais)
8. **Domínio já existe?** (pra configurar links corretamente)

Após coletar, salvar o brief em `dados/projetos/<slug-cliente>/brief.md` com o formato:

```markdown
# Brief — [Nome do Cliente]

**Tipo de site:** 
**Nicho:** 
**CTA principal:** 
**WhatsApp:** 
**Serviços:** 
**Depoimentos:** 
**Endereço:** 
**Domínio:** 
**Cores:** 
**Logo:** 
**Referências visuais:** 
**Data de início:** 
**Versão atual:** v1
```

Perguntar ao final:
> "Quer que eu gere também a proposta comercial pra apresentar pro cliente antes de começar? (/proposta)"

---

### Passo 2 — Template por nicho

Antes de estruturar as seções, identificar o nicho e usar o copy base correspondente:

#### OFICINA MECÂNICA
- **Headline padrão:** "Seu carro em boas mãos — revisão e manutenção com quem entende"
- **Dores:** carro parado, mecânico que não explica, orçamento surpresa, prazo que não cumpre
- **Serviços comuns:** revisão geral, troca de óleo, suspensão, freios, elétrica, ar-condicionado
- **CTA:** "Solicite seu orçamento pelo WhatsApp"

#### CLÍNICA / CONSULTÓRIO
- **Headline padrão:** "Cuidado com quem você pode confiar — agende sua consulta"
- **Dores:** dificuldade de agendar, falta de atenção, dúvidas sem resposta
- **Serviços comuns:** consultas, exames, procedimentos específicos do nicho
- **CTA:** "Agende sua consulta"

#### SALÃO DE BELEZA / BARBEARIA
- **Headline padrão:** "Look novo, confiança renovada — agende seu horário"
- **Dores:** corte que não ficou bom, espera longa, profissional que não ouve o cliente
- **Serviços comuns:** corte, coloração, tratamentos, manicure, barba
- **CTA:** "Reserve seu horário pelo WhatsApp"

#### ESCRITÓRIO DE ADVOCACIA
- **Headline padrão:** "Seus direitos defendidos com experiência e atenção"
- **Dores:** não saber se tem direito, medo do processo, advogado difícil de contatar
- **Serviços comuns:** áreas de atuação (trabalhista, família, civil, etc.)
- **CTA:** "Fale com um advogado agora"

#### RESTAURANTE / LANCHONETE
- **Headline padrão:** "Sabor de casa, feito com cuidado — venha nos visitar"
- **Dores:** comida sem qualidade, espera longa, ambiente ruim
- **Serviços comuns:** cardápio, delivery, eventos, reservas
- **CTA:** "Fazer pedido pelo WhatsApp" ou "Ver cardápio"

#### ACADEMIA / PERSONAL TRAINER
- **Headline padrão:** "Transforme seu corpo com acompanhamento que faz diferença"
- **Dores:** resultado que não vem, treino sem orientação, falta de motivação
- **Serviços comuns:** musculação, funcional, aulas, personal, avaliação física
- **CTA:** "Agende sua aula experimental"

#### NICHO NÃO LISTADO
- Pesquisar as 3 principais dores do público com base no segmento
- Adaptar o copy conforme `_memoria/preferencias.md`

---

### Passo 3 — Estrutura de seções

Montar outline das seções antes de codar:

**Hero:**
- Headline: promessa principal em 6-10 palavras (o resultado do cliente, não o serviço)
- Subheadline: quem atende e como entrega (1-2 frases)
- CTA primário: botão com ação direta ("Fale pelo WhatsApp", "Solicitar orçamento")
- Imagem/visual: foto do profissional, produto ou placeholder estilizado

**Problema (opcional mas recomendado):**
- 3-4 dores do público-alvo em bullets ou cards
- "Você reconhece alguma dessas situações?"

**Serviços:**
- Cards com ícone SVG simples, nome do serviço, descrição em 1-2 linhas
- Máx 6 cards por linha de 3

**Sobre:**
- Foto + texto de apresentação (3-4 parágrafos)
- Diferenciais concretos (anos de mercado, clientes atendidos, certificações)

**Depoimentos:**
- Cards com citação, nome e foto (ou inicial)
- Mínimo 3, máximo 6
- **Nunca inventar depoimentos** — se não tiver, omitir a seção

**FAQ:**
- 5-8 perguntas frequentes do nicho
- Accordion simples em CSS puro

**CTA final:**
- Repetir o CTA principal com headline de fechamento
- Fundo na cor de destaque da marca

**Rodapé:**
- Logo, links de navegação, contato, redes sociais, copyright

---

### Passo 4 — Criar o HTML

**Tecnologia:** HTML5 + CSS inline no `<style>` + JS mínimo (só pro accordion do FAQ).
Sem Bootstrap, sem Tailwind, sem jQuery. Zero dependências externas exceto Google Fonts.

**CSS:**
- Variáveis CSS no `:root` pras cores da marca
- Grid e Flexbox para layout
- Media queries: mobile-first, breakpoint em 768px
- Scroll behavior: smooth

**Performance:**
- Imagens com `loading="lazy"`
- Font: `font-display: swap`
- Hero sem imagem pesada — usar gradiente ou cor sólida se não tiver foto

**Acessibilidade mínima:**
- `alt` em todas as imagens
- Contraste suficiente texto/fundo
- Botões com `aria-label` quando necessário

**WhatsApp CTA:**
```html
<a href="https://wa.me/55XXXXXXXXXXX?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais" target="_blank">
  Fale pelo WhatsApp
</a>
```
Preencher com número de `_memoria/empresa.md` ou do brief do cliente.

---

### Passo 5 — Salvar

```
site/<slug-cliente>/
  index.html        ← arquivo principal
  README.md         ← instruções de hospedagem (Netlify, GitHub Pages, etc.)
```

Atualizar o campo `Versão atual` no brief do cliente para `v1`.

---

### Passo 6 — Controle de revisões

Quando o cliente enviar feedback e pedir alterações:

1. Ler `dados/projetos/<slug-cliente>/brief.md` pra ver a versão atual
2. Listar as alterações solicitadas antes de aplicar:
   > "Vou aplicar as seguintes mudanças na v2: [lista]. Confirma?"
3. Aplicar as alterações no `index.html`
4. Salvar versão anterior como `index_v1.html` antes de sobrescrever
5. Atualizar o campo `Versão atual` no brief para `v2` (ou v3, v4...)
6. Informar o que mudou:
   > "v2 salva. Alterações aplicadas: [lista]"

Máximo de versões recomendado: 3 rodadas de revisão (incluir isso na proposta comercial).

---

### Passo 7 — Checklist de entrega

Antes de marcar como entregue, verificar:

**Conteúdo:**
- [ ] Headline foca no resultado do cliente (não no serviço)
- [ ] CTA tem número de WhatsApp ou email real
- [ ] Depoimentos só se forem reais
- [ ] Endereço e horários corretos (se aplicável)

**Técnico:**
- [ ] Responsivo no mobile (testar mentalmente em 375px de largura)
- [ ] Todos os links funcionando
- [ ] WhatsApp abre conversa com mensagem pré-preenchida
- [ ] Formulário (se tiver) tem destino configurado
- [ ] Imagens com `alt` preenchido

**SEO básico:**
- [ ] `<title>` com nome do negócio + cidade (ex: "Oficina do Vitor — Belo Horizonte")
- [ ] `<meta description>` com 120-155 caracteres
- [ ] `<meta name="viewport">` presente
- [ ] URL canônica (se o domínio já existir)

**Analytics (opcional mas recomendado):**
- [ ] Google Analytics 4 instalado (perguntar se o cliente tem conta)
- [ ] Google Tag Manager (se o cliente usar)

Ao final, mostrar o checklist com os itens marcados e destacar o que ficou pendente (ex: foto real, depoimentos, analytics).

---

### Passo 8 — Resumo final

```
✓ Site gerado: site/<slug-cliente>/index.html
Versão: v[X]

Seções criadas: [lista]

Checklist de entrega: [X/Y itens ok]
Pendente: [lista do que falta — ex: foto real do cliente, depoimentos]

Pra publicar:
1. Netlify (mais fácil): arrasta a pasta em netlify.com/drop
2. GitHub Pages: push pra repositório → Settings → Pages → Deploy from branch
3. Servidor próprio: fazer upload via FTP/cPanel

Próximo passo: revisar textos com o cliente e publicar.
```

---

## Regras

- **Nunca inventar depoimentos** — omitir a seção se não tiver
- **CTA principal tem que ter número de WhatsApp ou email real** — puxar do brief ou de `_memoria/empresa.md`
- **Headline foca no resultado do cliente**, não no serviço ("Mais clientes para sua oficina" não "Serviços de marketing digital")
- **Zero dependências externas** além de Google Fonts — site tem que funcionar offline
- **Responsivo é obrigatório** — testar mentalmente no mobile antes de entregar
- **Cores e fontes** de `identidade/design-guide.md` ou do brief — se em branco, usar: `#1A1A1A` texto, `#FFFFFF` fundo, cor de destaque da marca como CTA
- **Depoimentos sem foto:** usar inicial do nome em círculo colorido
- **Tom segue** `_memoria/preferencias.md` em todos os textos
- **Versão anterior sempre salva** antes de aplicar revisões
- **Brief sempre atualizado** com versão corrente após cada entrega
