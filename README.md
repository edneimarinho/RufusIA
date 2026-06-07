# RufusIA

> A inteligência do seu negócio, dentro do Claude Code.

Você acabou de instalar o RufusIA. Daqui a pouco sua empresa vai ter
memória própria, identidade visual em tudo que o sistema gerar, e skills
prontas pra marketing, SEO, anúncios e operação rodarem com você no
comando.

Bora.

---

## Instalando

Abre o Claude Code em qualquer pasta e cola:

```
Clona o https://github.com/edneimarinho/RufusIA.git na pasta atual,
entra nela e roda o /instalar.
```

O sistema clona, entra na pasta e abre a entrevista de setup. Você
só responde.

Quando o `/instalar` terminar, renomeia a pasta `RufusIA/` pro nome do
teu negócio — fecha o VS Code, renomeia no Finder, abre de novo. A pasta
vira o teu negócio, não o sistema.

O `/instalar` roda uma vez só. Monta a memória, configura o estilo,
deixa tudo pronto. Depois disso, é só trabalhar.

---

## Skills, memória e raciocínio — como o Rufus opera

O RufusIA não é um assistente genérico. É um sistema que aprende o
negócio, acumula contexto e executa tarefas reais com consistência.

Antes de qualquer coisa, o Rufus lê três arquivos:

- `_memoria/empresa.md` — quem é o negócio, o que faz, quem atende
- `_memoria/preferencias.md` — como a marca escreve, o que evitar, o tom
- `_memoria/estrategia.md` — foco atual, prioridades, prazos

Quanto mais completos esses arquivos, menos você precisa explicar.
O sistema acerta na primeira vez porque já sabe de onde está partindo.

Pra qualquer coisa visual — site, proposta, carrossel — o Rufus
consulta `identidade/design-guide.md` e aplica cores, fontes e logo
automaticamente. A marca entra em tudo sem você pedir.

As skills são o repertório de ações que o sistema sabe executar.
Cada uma segue um fluxo definido, salva o resultado no lugar certo
e atualiza a memória quando algo muda. Nenhum resultado se perde.

---

### Operação — o que mantém tudo funcionando

**`/instalar`**
Setup inicial do negócio. Conduz uma entrevista pra preencher a memória
completa: empresa, estilo, estratégia e identidade visual. Roda uma
vez só — depois disso o sistema já sabe quem você é.

**`/abrir`**
Carrega o contexto do projeto antes de cada sessão. Garante que o Rufus
começa cada conversa sabendo o que está em andamento.

**`/salvar`**
Faz commit e push no GitHub com mensagem gerada automaticamente.
Na primeira vez configura o repositório remoto. O trabalho nunca some.

**`/atualizar`**
Varre o projeto e atualiza os arquivos de memória com o que mudou:
cliente novo, skill nova, mudança de foco, ferramenta instalada.
Rode quando sentir que o contexto está desatualizado.

**`/novo-projeto`**
Cria a estrutura de pasta isolada pra cada cliente ou iniciativa.
Mantém o projeto organizado e o brief do cliente no lugar certo.

**`/mapear-rotinas`**
Identifica tarefas que você repete e transforma em skill nova.
O sistema aprende com a operação e fica mais rápido com o tempo.

---

### Presença digital — sites e propostas

**`/site`**
Cria landing pages, sites institucionais e páginas de vendas completos
em HTML/CSS puro — sem framework, sem dependência, pronto pra hospedar.
Antes de escrever uma linha, identifica o nicho do cliente e usa o copy
base certo (oficina, clínica, salão, advocacia, restaurante, academia).
Gera brief do cliente, controla versões de revisão e entrega checklist
de SEO e mobile antes de marcar como pronto.

**`/proposta`**
Gera a proposta comercial como uma página web — não um PDF. O cliente
recebe um link, abre no celular e vê uma apresentação visual completa:
logo dele no topo, diagnóstico do problema, entregáveis em cards,
timeline do projeto, e investimento em destaque com cada forma de
pagamento separada. Se for redesign de site, ativa a seção de
antes/depois automaticamente. No final: botão de WhatsApp com mensagem
pré-preenchida pra aprovar na hora.

---

### Conteúdo e SEO — presença orgânica

**`/legenda`**
Cria 3 versões de legenda prontas pra Instagram, Facebook e LinkedIn
a partir de um tema, produto ou evento. Calibradas pela persona e pelo
tom de voz da marca. Rápido — sem precisar montar carrossel ou post.

**`/carrossel`**
Cria carrosséis 1080×1350 com a identidade visual da marca aplicada.
Copy dos slides, estrutura de storytelling e instruções de design
prontas pra executar no Canva ou no editor de preferência.

**`/publicar-tema`**
A partir de um único tema, entrega artigo de blog completo + carrossel +
3 legendas de uma vez. Ideal pra manter o calendário de conteúdo sem
precisar produzir cada peça separadamente.

**`/aprovar-post`**
Publica o que foi criado pelo `/publicar-tema`: flipa o post de rascunho
pra publicado no blog, copia os arquivos do carrossel pra pasta pública,
faz commit e push (Netlify/Vercel deploya), e posta no Instagram e
Facebook via Meta Graph API — tudo num comando.

**`/seo`**
Fluxo completo de otimização: pesquisa de demanda, análise de
concorrência, Google Meu Negócio, otimização on-page, estratégia de
conteúdo, configuração de anúncios, monitoramento e GEO (otimização
pra IA). Oito passos em sequência, do diagnóstico à execução.

**`/responder-avaliacoes`**
Escreve respostas humanas e calibradas pras reviews do Google. Responde
positivas com personalidade e negativas com inteligência — sem parecer
automático, sem parecer defensivo.

---

### Marketing e vendas — crescimento

**`/funil`**
Cria o funil de vendas completo: sequência de emails, mensagens de
WhatsApp e copy da landing page de captação. Estrutura o fluxo do lead
desde o primeiro contato até a decisão de compra — tudo conectado e
na voz da marca.

**`/meta-ads`**
Monta campanha completa para Facebook e Instagram: conjuntos de
anúncios, segmentações de público, copies e criativos em documento
pronto pra subir no Gerenciador de Anúncios. Lê o contexto do negócio
antes de criar qualquer coisa.

**`/anuncio-google`**
Cria campanha de Google Ads em CSV pronto pra importar no Google Ads
Editor. Palavras-chave, grupos de anúncio, copies e extensões — sem
precisar montar linha por linha na plataforma.

**`/relatorio-ads`**
Lê os exports de Google Ads e Meta Ads e devolve relatório semanal com
métricas, alertas e recomendações em linguagem clara. Você entende o
que está acontecendo sem precisar ficar dentro das plataformas.

**`/relatorio-cliente`**
Gera o relatório mensal de resultados pra enviar ao cliente. Consolida
o que foi feito, métricas do período, análise e próximos passos em
documento profissional pronto pra enviar. O cliente vê valor, você
mantém o contrato.

---

### Ebook — material rico

**`/ebook`**
Cria o conteúdo completo de um ebook pronto pra importar no Gamma (gamma.app) e fazer o
design visual. Gera três arquivos: o conteúdo em Markdown formatado slide a slide
(`conteudo.md`), um roteiro de design orientando layout e visual de cada slide dentro do
Gamma (`roteiro.md`), e uma legenda pronta pra divulgar nas redes (`legenda.md`). Antes
de escrever, monta o índice e aguarda aprovação. Nunca inventa dados — sinaliza onde
preencher com informação real.

---

### Produção — ferramentas de apoio

**`/analisar-dados`**
Lê arquivos CSV, XLSX ou PDF e gera resumo executivo com os pontos
principais, padrões identificados e recomendações. Transforma dado
bruto em decisão.

**`/email-profissional`**
Rascunha emails profissionais a partir de contexto livre. Você descreve
o que precisa comunicar — o sistema escreve no tom certo.

---

### Qualidade — revisão e verificação

**`/code-review`**
Revisa o código gerado pelo sistema — sites, propostas, scripts — em
busca de bugs, oportunidades de simplificação e problemas de
performance. Pode rodar em nível baixo (revisão rápida), médio ou
alto (cobertura completa). Use antes de entregar qualquer código
pra um cliente.

**`/run`**
Roda o projeto no navegador e confirma que o que foi gerado funciona
de verdade — não só no papel. Testa o caminho principal e os casos
de borda antes de você reportar como pronto. Se não conseguir testar,
diz isso explicitamente em vez de fingir que está tudo certo.

---

## Contato

[mednei2@hotmail.com](mailto:mednei2@hotmail.com)
