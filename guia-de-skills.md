# Guia de Skills — RufusIA

21 skills organizadas por área. Para cada uma: o que faz, quando usar e como chamar.

---

## Núcleo — operação do sistema

### /instalar
Roda uma vez só, logo depois de clonar o repositório. Faz as perguntas de brief (nome da empresa, nicho, quem compra, tom de voz, identidade visual) e preenche os arquivos de memória do sistema. Se for setup de cliente antes de uma call, preenche o Bloco 1 com informações de pesquisa pública. O Bloco 2 (gargalo interno, o que repete toda semana) fica pra depois de fechar.

**Como chamar:** `/instalar` ou "instalar o RufusIA"

---

### /abrir
Carrega o contexto do negócio no início de cada sessão. Lê `_memoria/empresa.md`, `preferencias.md` e `estrategia.md` e devolve um resumo em 4 linhas: nome do negócio, foco atual e tom de voz. Sem isso, o sistema responde sem saber com quem está falando.

**Como chamar:** `/abrir` ou "abre a sessão" — usar sempre no início de uma conversa nova

---

### /salvar
Faz commit e push de tudo que foi produzido pro GitHub. Na primeira vez configura o repositório. Nas seguintes, mostra o que mudou, pede uma frase de descrição (ou gera automático) e sobe. Não tem risco: nunca força nada sem confirmar.

**Como chamar:** `/salvar` ou "salva no GitHub" ou "faz commit"

---

### /atualizar
Varre o projeto e compara o que está nos arquivos de memória com o que realmente existe nas pastas. Se criou um cliente novo, adicionou uma skill, mudou de foco — o `/atualizar` detecta e propõe as correções. Mostra o que vai mudar antes de aplicar.

**Como chamar:** `/atualizar` ou "varre o projeto" ou "atualiza a memória"

---

### /novo-projeto
Cria a estrutura de pasta pra um cliente ou projeto novo. Faz 4 perguntas (nome, tipo, objetivo, entregas previstas) e monta a pasta com `CLAUDE.md` dedicado, `briefing.md` e subpastas conforme as entregas. Cada projeto fica isolado mas herda a identidade e o tom da raiz.

**Como chamar:** `/novo-projeto` ou "novo cliente" ou "começa projeto pra X"

---

### /mapear-rotinas
Descobre o que você repete toda semana e transforma em skill personalizada. Faz 3 perguntas (o que repete, qual o input, qual o output esperado) e propõe skills concretas. Você aprova quais criar. No máximo 5 por sessão.

**Como chamar:** `/mapear-rotinas` ou "o que dá pra automatizar" ou "criar skills novas"

---

## Conteúdo e redes sociais

### /carrossel
Cria carrosséis pra Instagram (1080×1350) com identidade visual da marca. Suporta três formatos: texto puro (posts educativos, dicas, listas), carrossel com foto IA (gerada via OpenAI) e post único. Gera o HTML com todos os slides, um script pra renderizar em PNG e a legenda pronta. Lê o `identidade/design-guide.md` antes de criar qualquer visual.

**Como chamar:** `/carrossel` + descrever o tema ou tipo de conteúdo

---

### /legenda
Cria legendas avulsas sem precisar de carrossel. Ideal pra posts de foto, vídeo, Reels ou qualquer conteúdo onde a imagem já existe. Entrega 3 versões: Instagram/Facebook (longa, com hashtags), LinkedIn (mais analítica, sem bloco de oferta agressivo) e versão curta pra Stories ou Reels.

**Como chamar:** `/legenda` + tema ou contexto do post

---

### /publicar-tema
Pipeline completo de conteúdo. Pega um tema (ou lê da estratégia de conteúdo do `/seo`) e entrega três peças conectadas: artigo de blog completo (em markdown, com frontmatter, começa como draft), carrossel resumo e legendas para Instagram/Facebook e LinkedIn. O carrossel aponta pro blog. Tudo na mesma pasta, organizado.

**Como chamar:** `/publicar-tema` + nome do tema, ou só `/publicar-tema` pra escolher da lista

---

### /aprovar-post
Publica o que foi criado pelo `/publicar-tema`. Flipa o blog de draft pra published, copia os PNGs pro site, faz commit e push (o deploy acontece automaticamente via Netlify/Vercel), aguarda o site subir e posta o carrossel no Instagram e Facebook via Meta API. Pede confirmação antes de qualquer ação irreversível. Requer configuração prévia de tokens no `.env`.

**Como chamar:** `/aprovar-post` + slug do post (ex: `/aprovar-post nome-do-artigo`)

---

## SEO e presença digital

### /seo
Fluxo completo de SEO e GEO em 8 passos: pesquisa de demanda (o que as pessoas buscam), análise de concorrência (quem aparece e onde estão os gaps), otimização do Google Meu Negócio, otimização on-page do site, estratégia de conteúdo com calendário editorial, estrutura de campanha Google Ads, checklist de monitoramento mensal e GEO (como aparecer nas respostas de IAs como ChatGPT, Gemini e Perplexity). Cada passo gera um arquivo salvo em `marketing/seo/`. Pode rodar os 8 passos de uma vez ou só um: `/seo passo 3` ou `/seo gmb`.

**Como chamar:** `/seo` para o fluxo completo, ou `/seo gmb`, `/seo geo`, `/seo passo 5`

---

### /site
Cria landing pages e sites institucionais completos em HTML/CSS puro — sem framework, sem dependência de build. Responsivo, pronto pra hospedar no GitHub Pages, Netlify ou qualquer servidor. Suporta três tipos: landing page de captura (hero + problema + solução + CTA), site institucional (com nav e âncoras) e página de vendas (long copy com gatilhos). Aplica identidade visual de `identidade/design-guide.md`. Nunca inventa depoimentos.

**Como chamar:** `/site` ou "cria site pra X" ou "faz landing page pra Y"

---

### /responder-avaliacoes
Escreve respostas curtas e humanas para as avaliações do Google Meu Negócio. Cita o nome do cliente, varia o agradecimento, e sempre inclui uma frase concreta sobre o produto ou processo — nunca respostas automáticas de empresa grande. Em avaliações com 3 estrelas ou menos, para e alinha com você antes de responder. Aceita texto copiado ou print da review.

**Como chamar:** `/responder-avaliacoes` + colar o texto da(s) avaliação(ões)

---

## Anúncios pagos

### /anuncio-google
Monta campanha completa de Google Ads em CSV pronto pra importar no Google Ads Editor. Gera: estrutura de campanhas por cluster de palavras-chave, grupos de anúncios, RSAs (15 headlines + 4 descriptions por anúncio), extensões (sitelinks, chamadas, snippets) e lista de palavras negativas. Também gera arquivo de configurações com estratégia de lance, orçamento, segmentação e conversões a configurar. Se já existir pesquisa do `/seo`, usa como base e pula as perguntas já respondidas.

**Como chamar:** `/anuncio-google` ou "criar campanha Google Ads" ou "campanha pra X"

---

### /meta-ads
Monta campanha completa para Meta Ads (Facebook + Instagram). Estrutura em até 3 conjuntos: público frio por interesses, lookalike (se tiver pixel ou lista de clientes) e retargeting. Gera segmentações detalhadas, 3 variações de copy por conjunto (problema/solução, resultado e prova social), briefing de criativos se não tiver imagens prontas e arquivo de configurações com UTMs. Finaliza com checklist de publicação no Gerenciador de Anúncios.

**Como chamar:** `/meta-ads` ou "criar campanha no Facebook" ou "anúncio no Instagram"

---

### /relatorio-ads
Gera relatório semanal de performance de Google Ads e Meta Ads. Lê os CSVs exportados das plataformas (ou prints), compara com a semana anterior e entrega: resumo executivo com os números que importam, top e bottom campanhas/criativos, alertas automáticos (queima de orçamento, CTR caindo, frequência saturada, oportunidade de escalar) e lista de 3 a 5 ações concretas pra semana seguinte. Salva o histórico pra comparação futura.

**Como chamar:** `/relatorio-ads` + caminho dos arquivos exportados

---

## Vendas e clientes

### /proposta
Gera proposta comercial completa em HTML pronta pra converter em PDF e enviar. Estrutura em 6 blocos: apresentação (quem é, sem "somos apaixonados por"), diagnóstico (o problema identificado no negócio do cliente), o que será entregue (escopo claro, com o que está fora), como vai funcionar (etapas e revisões), investimento (valor, formas de pagamento, validade) e próximos passos (CTA específico). Começa pelo problema do cliente, não por quem você é.

**Como chamar:** `/proposta` ou "cria proposta pra X" ou "gera orçamento pra Y"

---

### /funil
Cria funil de vendas completo. Suporta três tipos: captura + nutrição (gerar leads e nutrir até a venda), venda direta (produto de decisão rápida) e reativação (base fria). Entrega: landing page de captura em HTML, sequência de mensagens para email ou WhatsApp (de 5 a 7 dias) com copy calibrado por dia (acolher, educar, provar, quebrar objeção, fazer oferta, follow-up) e mapa visual do fluxo. Nunca usa urgência falsa ou depoimentos inventados.

**Como chamar:** `/funil` ou "criar funil de vendas" ou "sequência de WhatsApp pra X"

---

### /relatorio-cliente
Gera o relatório mensal de resultados para enviar ao cliente. Consolida o que foi entregue no período (posts, artigos, campanhas, site), resultados por canal (alcance, leads, CPA, tráfego), análise do que funcionou e do que não funcionou, e próximos passos concretos. Disponível em HTML (converter pra PDF) ou markdown. Se faltar dado, deixa placeholder e avisa — nunca inventa número.

**Como chamar:** `/relatorio-cliente` ou "relatório do mês pra X" ou "monta relatório mensal"

---

## Produção

### /analisar-dados
Lê arquivos de dados (CSV, Excel, TXT, JSON) e gera análise executiva em prosa. Identifica o que está funcionando, o que preocupa, comparações de período e insights não óbvios que não aparecem na leitura superficial. Entrega 3 recomendações concretas e tabela com os números-chave. Pergunta o contexto antes de analisar se não estiver claro.

**Como chamar:** `/analisar-dados` + arrastar ou apontar o arquivo

---

### /email-profissional
Rascunha emails profissionais a partir de contexto livre — mesmo que bagunçado. Calibra o tom ao destinatário e ao objetivo (cobrar, propor, agradecer, dar feedback, fazer follow-up). Para assuntos delicados, oferece duas versões: direta e suave. Usa o tom de voz da marca definido em `_memoria/preferencias.md`. Nunca usa assuntos vagos como "Seguimento" ou "Proposta".

**Como chamar:** `/email-profissional` ou "escreve um email pra X sobre Y"

---

## Como as skills se conectam

Algumas skills foram feitas pra trabalhar em sequência:

**Fluxo pré-call (cliente novo):**
`/instalar` → `/site` → `/carrossel` → `/proposta`

**Fluxo de conteúdo recorrente:**
`/seo` → `/publicar-tema` → `/aprovar-post`

**Fluxo de anúncios:**
`/seo` → `/anuncio-google` ou `/meta-ads` → `/relatorio-ads`

**Fluxo de retenção de cliente:**
`/relatorio-cliente` + `/responder-avaliacoes` + `/email-profissional`

**Fluxo de venda:**
`/funil` → `/legenda` (conteúdo pra alimentar o topo) → `/relatorio-ads` (medir)
