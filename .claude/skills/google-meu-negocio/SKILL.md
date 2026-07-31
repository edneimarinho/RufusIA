---
name: google-meu-negocio
description: >
  Skill completa de otimização do Google Meu Negócio (Google Business Profile).
  Cobre criação, verificação, fotos, produtos, avaliações, posts, ranqueamento
  local (Relevância, Distância, Destaque), consistência NAP, manutenção mensal,
  AI Overviews e suporte técnico. Inclui 13 prompts prontos pra executar cada etapa.
  Use quando o usuário pedir "otimizar GMN", "google meu negócio", "perfil local",
  "ranqueamento local", "/gmn", ou /google-meu-negocio.
---

# /google-meu-negocio — Google Business Profile completo

Skill de operação completa do Google Meu Negócio. Cobre desde criação do perfil até manutenção mensal, ranqueamento no Local Pack e proteção contra edições não autorizadas.

## Dependências

- **Contexto do cliente:** `_memoria/empresa.md` — ler antes de qualquer prompt
- **Tom de voz:** `_memoria/preferencias.md` — pra respostas de avaliações e posts
- **Dados do projeto:** `dados/projetos/<slug-cliente>/brief.md` (se existir)
- **Outputs vão em:** `saidas/gmn/<slug-cliente>-<YYYY-MM-DD>/`
- **Ferramenta externa:** [GBP Check](https://gbpcheck.com) — pra análise de ranqueamento por raio

---

## Modos de uso

Ao ativar `/gmn`, identificar o modo:

1. **Novo cliente** — nunca teve GMN ou vai criar do zero → seguir Módulo 1
2. **Perfil existente** — já tem GMN → rodar diagnóstico completo (Módulo 1 em diante), sem pular fases
3. **Tarefa específica** — avaliações, posts, manutenção → ir pro módulo correspondente
4. **Emergência** — perfil suspenso, edição indevida → ir pro Módulo 11

> Regra crítica: nenhuma fase é descartada com base em dados que o cliente apresenta (número de avaliações, tempo de perfil, posição no mapa). Sempre auditar do zero — o que parece bom por fora pode ter gaps que só aparecem na análise.

Se não ficar claro, perguntar:
> "Esse cliente já tem um perfil ativo no Google? Se sim, qual é o nome exato e cidade?"

---

## Dados necessários antes de começar

Se não estiverem no brief ou na empresa.md, coletar:

```
Nome legal da empresa:
Nome no GMN (pode ser diferente do legal):
Endereço completo (rua, número, bairro, cidade, estado, CEP):
Telefone principal (com DDD):
Site (se tiver):
Horário de funcionamento:
Categoria principal de negócio:
CNPJ (opcional, mas ajuda na verificação):
Pessoa responsável pelo perfil (nome + email):
```

---

## MÓDULO 1 — Cadastro e configuração inicial

### Passo 1 — Criar o perfil

1. Acessar [business.google.com](https://business.google.com)
2. Clicar em "Gerenciar agora" e fazer login com Google Business Account (não conta pessoal)
3. Inserir o nome exato da empresa — verificar se já existe perfil duplicado
4. Selecionar a categoria principal (pode adicionar secundárias depois)
5. Informar se tem endereço físico ou atende em domicílio
6. Inserir endereço completo — usar o mesmo formato em todos os canais (NAP consistency)
7. Adicionar telefone e site
8. Confirmar e solicitar verificação

### Passo 2 — Opções de verificação

| Método | Tempo | Quando usar |
|--------|-------|-------------|
| Carta pelos Correios | 5-14 dias | Padrão para endereço físico |
| Vídeo | 1-3 dias | Mais rápido, mostra o local |
| Telefone | Imediato | Nem sempre disponível |
| E-mail | Imediato | Raro, só com domínio verificado |
| Google Search Console | Imediato | Se site já estiver verificado |

> Pra verificação por vídeo: mostrar a fachada com o número do endereço visível, dentro do estabelecimento com o nome da empresa, e o responsável segurando um documento.

### Passo 3 — Configurações iniciais pós-verificação

- Completar 100% do perfil (indicador de completude no painel)
- Adicionar pelo menos 3 categorias secundárias relevantes
- Ativar "Serviços" e "Produtos" (se aplicável)
- Configurar horários especiais (feriados)
- Ativar mensagens diretas pelo Google
- Habilitar FAQ (Perguntas e Respostas)

---

### PROMPT 1 — Análise inicial do perfil

```
Vou te passar os dados de um cliente com Google Meu Negócio. 
Analise e me diga o que está faltando ou pode ser melhorado 
para aumentar a relevância local.

DADOS DO CLIENTE:
- Nome no GMN: [nome]
- Categoria principal: [categoria]
- Categorias secundárias: [lista]
- Descrição atual: [texto ou "não tem"]
- Tem fotos? [sim/não — quantas aprox.]
- Tem avaliações? [número e média]
- Frequência de posts: [semanal/mensal/nunca]
- Site linkado: [sim/não]

Me entregue:
1. Score estimado de completude (0-100)
2. Lista das 3 maiores lacunas
3. Prioridade de ação (o que fazer primeiro)
4. Palavras-chave que deveriam aparecer no perfil
```

---

## MÓDULO 2 — Identidade e descrição

### Regras para o nome no GMN

- Usar o nome real da empresa — sem palavras-chave artificiais no nome (ex: "Academia CrossFit XYZ" → ok. "Academia CrossFit XYZ Perto de Você SP" → suspensão)
- Nunca adicionar cidade, bairro ou serviços no nome
- Verificar se concorrentes estão usando nomes com keywords — reportar via "Sugerir uma alteração" se violarem as diretrizes

### Estrutura da descrição (750 caracteres)

1. **Frase 1:** O que a empresa faz + pra quem
2. **Frase 2:** Diferencial ou história (humanizar)
3. **Frase 3:** Serviços principais com palavras-chave naturais
4. **Frase 4:** CTA + localização

---

### PROMPT 2 — Redação do título e descrição otimizados

```
Crie o título de exibição e a descrição completa pro Google Meu Negócio 
do seguinte negócio. A descrição deve ter no máximo 750 caracteres,
usar linguagem natural (não robotizada), incluir palavras-chave de 
forma orgânica e passar nas diretrizes do Google.

INFORMAÇÕES DO NEGÓCIO:
- Nome legal: [nome]
- Segmento: [ex: academia, restaurante, consultório]
- Cidade/bairro: [localização]
- Principais serviços: [lista]
- Diferencial principal: [o que os concorrentes não têm]
- Público: [perfil do cliente ideal]
- Tom: [ex: profissional e acolhedor / direto e técnico]

Entregue:
1. Nome de exibição recomendado
2. Descrição (máx 750 caracteres) — versão principal
3. Palavras-chave usadas (lista separada)
4. Versão alternativa mais curta (300 caracteres) pra testar
```

---

## MÓDULO 3 — Categorias e atributos

### Estratégia de categorias

- **Categoria principal:** define o ícone e aparece no mapa — escolher a mais específica do core business
- **Categorias secundárias:** até 9 — adicionar tudo que seja real (não inventar serviços)
- Exemplo academia: Principal → "Academia" / Secundárias → "Sala de musculação", "Aulas de yoga", "Personal trainer", "Pilates"

### Atributos (variam por categoria)

- Wi-Fi, estacionamento, acessibilidade, pagamentos aceitos
- Atributos de saúde: uso obrigatório de máscara, verificação de temperatura
- Atributos LGBTQ+: espaço amigável
- Atributos de sustentabilidade

---

### PROMPT 3 — Categorias e atributos ideais

```
Liste as melhores categorias e atributos pro Google Meu Negócio 
do seguinte tipo de negócio.

NEGÓCIO: [descrever o que faz, onde, pra quem]

Entregue:
1. Categoria principal recomendada (1 opção)
2. Categorias secundárias (até 9, ordenadas por importância)
3. Atributos relevantes pra esse tipo de negócio
4. Palavras-chave de cauda longa pra incluir na descrição e posts
5. Categorias que concorrentes podem estar usando indevidamente (pra reportar)
```

---

## MÓDULO 4 — Fotos e vídeos

### Benchmarks mínimos

| Tipo | Mínimo recomendado | Formato |
|------|-------------------|---------|
| Capa | 1 (atualizar a cada 6 meses) | 1080x608 |
| Perfil (logo) | 1 (sempre atualizado) | 250x250 (quadrado) |
| Fachada | 3+ (diferentes horários/ângulos) | JPG/PNG |
| Interna | 5+ (ambiente real) | JPG/PNG |
| Equipe | 2+ (humaniza o negócio) | JPG/PNG |
| Serviços/Produtos | 1 por serviço principal | JPG/PNG |
| Clientes (com autorização) | Opcional | JPG/PNG |
| Vídeo | 1-3 (30s cada, max 75MB) | MP4 |

### Regras de fotos

- Resolução mínima: 720x720px — ideal: 1080x1080 ou maior
- Sem texto sobreposto, sem bordas, sem filtros excessivos
- Fotos reais do local — imagens de banco de fotos podem ser removidas pelo Google
- Nomear os arquivos antes de fazer upload (ex: `academia-sala-musculacao-sp.jpg`) — ajuda no indexamento
- Adicionar mínimo 1 foto nova por semana (sinal de atividade para o algoritmo)

---

### PROMPT 4 — Checklist e estratégia de fotos

```
Crie um plano de fotos pra um negócio local que quer otimizar 
o Google Meu Negócio.

NEGÓCIO: [tipo + tamanho do espaço + o que oferece]

Entregue:
1. Lista de fotos essenciais (com ângulo e momento ideal pra tirar)
2. Lista de fotos de bônus (diferenciadoras vs concorrência)
3. Roteiro de vídeo de 30s pra GMN (o que mostrar, ordem das cenas)
4. Frequência de atualização por tipo de foto
5. Sugestão de nomes de arquivo pra SEO de imagem
6. O que NÃO colocar (fotos que podem causar remoção ou penalização)
```

---

## MÓDULO 5 — Produtos e serviços

### Produtos vs Serviços

- **Serviços:** aparecem na seção "Serviços" — usar pra todos os tipos de negócio. Adicionar preço quando possível
- **Produtos:** aparecem em destaque no Knowledge Panel — usar pra comércio ou serviços com entrega tangível

### Como preencher serviços

1. Nome do serviço (usar a palavra-chave que o cliente busca)
2. Descrição (150 caracteres — incluir benefício, não só o nome)
3. Preço (fixo, a partir de, ou faixa)

---

### PROMPT 5 — Lista de serviços e produtos otimizados

```
Crie a lista de serviços/produtos pra colocar no Google Meu Negócio 
do seguinte negócio. Cada item precisa ter nome, descrição e preço 
(ou faixa de preço).

NEGÓCIO: [tipo + serviços que oferecem + faixa de preço média]

Entregue:
1. Lista de serviços com nome + descrição de 150 caracteres + preço
2. Produtos em destaque (se aplicável) com nome + descrição + foto recomendada
3. Ordem de exibição recomendada (mais buscados primeiro)
4. Palavras-chave de busca usadas em cada nome
```

---

## MÓDULO 6 — Avaliações

### Estratégia de captação de avaliações

- Nunca pedir avaliação de forma forçada ou oferecer desconto em troca — viola diretrizes do Google
- Melhor momento: logo após a entrega do serviço ou produto (satisfação alta)
- Método mais efetivo: link direto pra avaliação via WhatsApp
- Pra gerar o link: `https://search.google.com/local/writereview?placeid=<PLACE_ID>` (buscar o Place ID no Google ou GMN dashboard)

### Protocolo de resposta

| Tipo | SLA | Regra |
|------|-----|-------|
| Avaliação positiva (5★) | 24-48h | Personalizar, mencionar o produto/serviço citado, convidar pra voltar |
| Avaliação neutra (3-4★) | 24h | Agradecer, reconhecer o ponto de melhora, oferecer solução |
| Avaliação negativa (1-2★) | 4-8h | Responder com calma, sem defensiva, convidar pra contato direto |
| Avaliação falsa | Imediato | Reportar ao Google — não responder com agressividade |

---

### PROMPT 6 — Respostas a avaliações

```
Crie respostas para as seguintes avaliações do Google Meu Negócio.
Tom: [profissional e acolhedor / direto / informal].
Nome do negócio: [nome].

Para cada avaliação, crie uma resposta que:
- Mencione o nome do cliente (se disponível)
- Referencie o serviço específico citado
- Não seja robótica nem genérica
- Convide pra uma próxima visita (positivas) ou pra contato direto (negativas)
- Seja curta (3-5 linhas máximo)

AVALIAÇÕES:
1. [colar texto + estrelas]
2. [colar texto + estrelas]
3. [colar texto + estrelas]

Entregue: resposta pronta pra cada uma, sem precisar editar.
```

---

### PROMPT 7 — Estratégia de captação de avaliações

```
Crie uma estratégia completa de captação de avaliações Google para:

NEGÓCIO: [tipo + volume de atendimentos por semana + canal principal de comunicação com cliente]

Entregue:
1. Mensagem WhatsApp pra pedir avaliação (versão curta e versão longa)
2. Roteiro pra treinamento da equipe (quando e como pedir)
3. Automação sugerida (qual ferramenta + fluxo)
4. Meta mensal de avaliações (baseada no volume de atendimento)
5. Como responder as avaliações mais comuns desse setor
6. O que NUNCA fazer (práticas que podem suspender o perfil)
```

---

## MÓDULO 7 — Posts e atualizações

### Tipos de posts no GMN

| Tipo | Quando usar | Duração |
|------|-------------|---------|
| Novidade | Lançamento, mudança, comunicado | 6 meses |
| Evento | Datas especiais, promoções | Até a data do evento |
| Oferta | Promoção com desconto, código | Personalizado |
| Produto | Destacar item específico | Permanente |

### Frequência ideal

- **Mínimo:** 1 post por semana (mantém perfil "ativo" no algoritmo)
- **Ideal:** 2-3 posts por semana
- **Regra de ouro:** consistência > volume

### Estrutura de post que converte

1. **Hook visual** (imagem ou vídeo atraente)
2. **Headline** — benefício claro em 6-8 palavras
3. **Corpo** — 1-2 frases de contexto
4. **CTA** — ação específica ("Ligar agora", "Ver cardápio", "Agendar")

---

### PROMPT 8 — Calendário de posts para 30 dias

```
Crie um calendário de posts pro Google Meu Negócio de 30 dias.

NEGÓCIO: [tipo + principais serviços + público-alvo + datas especiais do mês]

Entregue:
1. Calendário com data + tipo de post + título + copy pronto + CTA
2. Pelo menos 1 post de oferta, 1 de evento (se tiver), 2 de novidade
3. Sugestão de imagem pra cada post (descrever o visual)
4. Palavras-chave locais a incluir nos textos
5. Variação de CTA pra testar conversão
```

---

## MÓDULO 8 — Fatores de ranqueamento no Local Pack

### Os 3 pilares do ranqueamento local

#### 1. Relevância
O perfil corresponde ao que o usuário buscou?
- Categoria principal bem escolhida
- Palavras-chave na descrição, serviços e posts
- Responder perguntas (Q&A) com as palavras-chave naturais
- Conteúdo do site alinhado com o GMN

#### 2. Distância
Quão perto do usuário ou da localização buscada?
- Não dá pra controlar — mas dá pra compensar com Relevância e Destaque fortes
- Pra negócios com área de cobertura: configurar corretamente a "área de atendimento"
- Pra negócios físicos: endereço exato e consistente em todos os canais

#### 3. Destaque (Prominence)
O negócio é conhecido e confiável?
- Número e média de avaliações (meta: 4.3+ com volume relevante)
- Citações em diretórios (NAP consistency)
- Autoridade do site (backlinks, SEO local)
- Atividade no perfil (posts, fotos novas, respostas)
- Menções em outros sites e mídias

---

### PROMPT 9 — Auditoria de ranqueamento local

```
Faça uma auditoria de ranqueamento local pra esse perfil 
de Google Meu Negócio.

DADOS:
- Nome e categoria: [dados]
- Cidade/bairro de atuação: [local]
- Palavras-chave alvo: [termos que o cliente quer aparecer]
- Número de avaliações: [quantidade e média]
- Concorrentes principais (nomes ou links): [lista]

Analise os 3 pilares (Relevância, Distância, Destaque) e entregue:
1. Score estimado pra cada pilar (1-10) com justificativa
2. Pontos críticos que derrubam o ranqueamento
3. Quick wins (o que fazer esta semana)
4. Ações de médio prazo (30-90 dias)
5. Como usar o GBP Check pra monitorar posição por raio
```

---

## MÓDULO 9 — NAP e consistência de citações

### O que é NAP

**NAP = Name, Address, Phone** — os três dados que o Google cruza em todos os sites da internet pra confirmar que o negócio existe e que as informações são confiáveis.

**Inconsistência = penalização.** Se o site diz "Rua das Flores, 123" e o GMN diz "R. das Flores, 123 — sala 5", são informações diferentes para o algoritmo.

### Onde o NAP deve estar consistente

- Google Meu Negócio
- Site da empresa (rodapé + página de contato)
- Facebook / Instagram (bio)
- WhatsApp Business
- iFood, Uber Eats, iFácil, Tripadvisor (se aplicável)
- Yelp, Foursquare
- Diretórios do setor (OAB, CFM, CRECI, etc.)
- Guia Mais, Telelistas, Apontador

### Ferramentas de auditoria NAP

- Buscar o nome no Google Maps + Bing Maps
- Verificar no [Moz Local](https://moz.com/local) (versão free mostra inconsistências principais)
- Pesquisar `"nome da empresa" "telefone"` no Google pra ver versões divergentes

---

### PROMPT 10 — Auditoria e correção de NAP

```
Faça uma auditoria de consistência NAP para o seguinte negócio e 
me diga o que precisa ser corrigido.

DADOS OFICIAIS (o que DEVE aparecer em todo lugar):
- Nome: [nome exato]
- Endereço: [endereço completo e formatação oficial]
- Telefone: [com DDD, formato padrão]
- Site: [URL completa]

PLATAFORMAS QUE JÁ TEM CADASTRO:
- [listar onde o negócio já está cadastrado]

Entregue:
1. Checklist de verificação (plataforma + dado + status: ok/divergente)
2. Lista de diretórios relevantes pra esse setor onde NÃO está cadastrado
3. Prioridade de correção (impacto no ranqueamento)
4. Texto padrão NAP pra copiar e colar em todos os cadastros
5. Como monitorar novas citações
```

---

## MÓDULO 10 — AI Overviews e novas funcionalidades

### O que são AI Overviews

Os "AI Overviews" (antigo SGE) são respostas geradas por IA que aparecem no topo do Google antes dos resultados orgânicos. Pra negócios locais, o GMN bem otimizado aumenta a chance de aparecer nessas respostas.

### Como otimizar pra AI Overviews

- **Seção de Q&A** (Perguntas e Respostas): responder as perguntas mais comuns com as palavras-chave naturais — o Google usa esses textos pra alimentar os Overviews
- **Descrição rica:** incluir contexto, benefícios e comparações naturais
- **Posts frequentes:** conteúdo recente sobre o tema da busca aumenta relevância
- **Reviews mencionando serviços:** quando clientes escrevem reviews com palavras-chave específicas, isso reforça o sinal

---

### PROMPT 11 — FAQ e Q&A pra AI Overviews

```
Crie uma lista de Perguntas e Respostas (Q&A) pra colocar 
na seção de Perguntas do Google Meu Negócio.

As respostas devem:
- Ser escritas como se um cliente real perguntou e a empresa respondeu
- Incluir palavras-chave de busca local naturalmente
- Ser curtas (2-4 linhas) mas completas
- Ajudar o Google a entender exatamente o que o negócio oferece

NEGÓCIO: [tipo + serviços + cidade]
PERGUNTAS MÁS BUSCADAS DO SETOR: [listar ou deixar o Claude sugerir]

Entregue:
1. 10 perguntas frequentes + respostas prontas pra publicar
2. 3 perguntas estratégicas com palavras-chave de cauda longa
3. Instruções pra publicar (você mesmo pode perguntar e responder no GMN)
```

---

## MÓDULO 11 — Manutenção mensal (4h/mês)

### Semana 1 — Avaliações e interação (1h)
- Responder TODAS as avaliações da semana
- Verificar novas perguntas no Q&A e responder
- Aprovar ou recusar fotos enviadas por clientes
- Verificar mensagens diretas recebidas

### Semana 2 — Conteúdo e fotos (1h)
- Publicar 2-3 posts (use o Prompt 8 pra planejar com antecedência)
- Adicionar 2-5 fotos novas do local ou serviço
- Atualizar horários especiais se tiver feriado no mês

### Semana 3 — Análise de dados (1h)
- Acessar "Desempenho" no GMN
- Verificar: visualizações, buscas, cliques, chamadas, rotas
- Comparar com o mês anterior
- Identificar palavras-chave que geraram buscas

### Semana 4 — Auditoria e proteção (1h)
- Verificar se houve "Edições sugeridas" por usuários (e aprovar/recusar)
- Conferir se todos os dados NAP estão corretos
- Verificar status de verificação do perfil
- Usar GBP Check pra ver posição nos raios principais

---

### PROMPT 12 — Relatório mensal de performance do GMN

```
Analise os dados de desempenho do Google Meu Negócio do mês 
e me entregue um relatório executivo.

DADOS DO PAINEL (extrair do GMN → Desempenho):
- Período: [mês/ano]
- Visualizações no mapa: [número]
- Visualizações na busca: [número]
- Buscas por nome (diretas): [número]
- Buscas por categoria (por descoberta): [número]
- Chamadas recebidas: [número]
- Solicitações de rota: [número]
- Cliques no site: [número]
- Cliques em mensagens: [número]
- Avaliações recebidas no mês: [número e média]
- Fotos adicionadas: [número]
- Posts publicados: [número]

Entregue:
1. Resumo executivo (3-5 linhas) — o que melhorou, o que caiu
2. KPI principal do mês (métrica mais importante)
3. Tendências positivas pra continuar
4. Pontos de atenção
5. 3 ações pra próximo mês com impacto estimado
6. Comparação com benchmarks do setor (se disponíveis)
```

---

## MÓDULO 12 — Suporte e problemas comuns

### Problemas frequentes e soluções

| Problema | Causa provável | Solução |
|----------|---------------|---------|
| Perfil suspenso | Violação de diretrizes | Revisar nome, fotos, categoria → Solicitar reinscrição |
| Edição não autorizada | Usuários "sugerem alteração" | Verificar semanalmente → Recusar edições incorretas |
| Perfil duplicado | Alguém criou antes | Solicitar mesclagem no suporte |
| Verificação negada | Endereço diferente dos registros | Usar carta com comprovante ou vídeo |
| Não aparece no mapa | Perfil recente ou baixo Destaque | Trabalhar avaliações + NAP + posts |
| Foto removida pelo Google | Foto de banco, texto, ou inapropriada | Verificar diretrizes e reenviar |

### Como contatar o suporte do Google

1. GMN → Ajuda → Central de ajuda → "Falar com a equipe de suporte"
2. Chat ou callback (mais rápido que email)
3. [Fórum da comunidade](https://support.google.com/business/community) — pra casos complexos
4. Twitter/X: @GoogleMyBiz — funciona pra casos urgentes

---

### PROMPT 13 — Diagnóstico e solução de problema no GMN

```
Meu Google Meu Negócio está com um problema. Me ajude a diagnosticar 
e resolver.

NEGÓCIO: [nome + categoria + cidade]
PROBLEMA: [descrever o que aconteceu — quando começou, o que mudou, 
           mensagem de erro se tiver, o que já foi tentado]

Entregue:
1. Diagnóstico provável (causa mais comum pra esse sintoma)
2. Passos de resolução em ordem (do mais simples ao mais complexo)
3. O que NÃO fazer (erros comuns que pioram a situação)
4. Como contatar o suporte do Google pra esse tipo de problema
5. Prazo estimado de resolução
6. Plano B caso o suporte não resolva
```

---

## Workflow de uso da skill

### Primeira vez com um cliente

```
1. Coletar dados básicos (nome, endereço, telefone, site, categoria)
2. Verificar se já tem perfil → buscar no Google Maps
3. Se não tem → Módulo 1 (criar do zero)
4. Se tem → Prompt 1 (análise inicial) → priorizar pelos gaps encontrados
5. Executar Módulo 2 (identidade) → Prompt 2
6. Executar Módulo 3 (categorias) → Prompt 3
7. Executar Módulo 4 (fotos) → Prompt 4
8. Executar Módulo 5 (serviços) → Prompt 5
9. Configurar estratégia de avaliações → Prompt 7
10. Criar calendário de posts → Prompt 8
11. Auditoria de ranqueamento → Prompt 9
12. Auditoria NAP → Prompt 10
13. FAQ para AI Overviews → Prompt 11
14. Definir rotina de manutenção → Módulo 11
```

### Sessão de manutenção mensal (recorrente)

```
1. Rodar Semanas 1-4 do Módulo 11
2. Gerar relatório com Prompt 12
3. Ajustar estratégia com base nos dados
```

### Atendendo avaliações (recorrente)

```
1. Coletar as avaliações novas
2. Rodar Prompt 6
3. Publicar respostas em até 48h (positivas) ou 8h (negativas)
```

---

## Outputs

Salvar tudo em `saidas/gmn/<slug-cliente>-<YYYY-MM-DD>/`:

```
saidas/gmn/<cliente>-<data>/
  diagnostico.md          ← análise inicial + gaps
  identidade.md           ← nome, descrição, categorias definidas
  plano-fotos.md          ← checklist de fotos a tirar
  servicos.md             ← lista de serviços formatados
  estrategia-avaliacoes.md ← fluxo de captação + templates de resposta
  calendario-posts.md     ← 30 dias de posts
  auditoria-ranqueamento.md ← score por pilar + ações
  auditoria-nap.md        ← inconsistências + plano de correção
  faq-qanda.md            ← 10+ perguntas pra publicar
  relatorio-<mes>.md      ← relatório mensal
```

---

## Regras

- Sempre ler `_memoria/empresa.md` antes de qualquer prompt pra personalizar o output
- Nunca sugerir práticas que violem as diretrizes do Google (nome com keywords, reviews falsos, etc.)
- Respostas de avaliação: sempre personalizadas — nunca colar a mesma resposta em avaliações diferentes
- NAP consistency: qualquer dado do perfil deve ser confirmado antes de publicar
- Fotos: nunca usar banco de fotos — orientar pra tirar fotos reais do local
- Quando for cliente de academia/fitness: verificar se tem Wellhub (ex-Gympass) e se o GMN está sincronizado
- Pra ranqueamento: lembrar que Distância não é controlável — focar em Relevância e Destaque
- GBP Check: usar pra auditar posição real por raio — não confiar só no que aparece na própria busca (Google personaliza os resultados)
