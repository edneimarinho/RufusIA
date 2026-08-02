# Como eu transformei um minicurso de 4 horas em uma skill que trabalha por mim

**Você não precisa de uma equipe. Precisa de um sistema com a sua cara.**

---

Fiz um minicurso de Google Meu Negócio. Umas 4 horas de conteúdo, módulo por módulo. Fui anotando tudo com as minhas palavras, do jeito que eu entendi, do jeito que eu iria aplicar. No final, tinha uma pilha de texto: resumos, checklists e 13 prompts pra trabalhar com IA.

Aí eu fiz algo simples. Copiei tudo isso, colei no RufusIA com um prompt de 3 linhas e pedi pra ele criar uma skill.

O resultado: 689 linhas de código. 12 módulos cobrindo cada fase do GMN — desde cadastro e verificação até ranqueamento local e manutenção mensal. 13 prompts prontos pra usar com qualquer cliente.

Agora toda vez que eu pegar um cliente novo que precise de Google Meu Negócio, digito `/gmn` e o sistema já sabe o que perguntar, o que checar, o que entregar. Eu não preciso lembrar de nada. Não preciso montar do zero. Não preciso improvisar.

Isso é o que uma skill faz.

---

*[SUGESTÃO DE IMAGEM 1]*
*Prompt: Dark minimal workspace flat lay, open notebook with handwritten course notes, laptop screen showing lines of code, single desk lamp, dark green and gold color palette, editorial photography style, no people*
*Descrição: A transição entre aprendizado analógico (caderno, anotações) e execução digital (código, sistema)*

---

## O que é uma skill e por que muda tudo

No Claude, uma skill é um conjunto de instruções permanentes que você instala uma vez e ativa com um comando. Ela não é um prompt avulso. Não é um documento que você cola toda vez. É uma lógica completa — com fluxo, regras, checkpoints e outputs definidos — que fica gravada no sistema e executa a mesma tarefa do mesmo jeito, toda vez.

A diferença parece pequena. Não é.

Sem skill, cada sessão começa do zero. Você explica o contexto, define o tom, descreve o processo, corrige os erros de direção. Consome 20, 30 minutos antes de produzir qualquer coisa útil. E se você fizer isso 3 vezes por semana, são horas perdidas toda semana em setup.

Com skill, você digita um comando. O sistema lê o contexto do negócio que já está salvo, entende o que você quer, segue o fluxo que você definiu e entrega o que você precisa. O trabalho começa onde o pensamento termina, não onde a memória falha.

Pra quem trabalha sozinho prestando serviço, isso não é conforto. É a diferença entre conseguir escalar o trabalho ou ficar travado no mesmo volume pra sempre.

---

*[SUGESTÃO DE IMAGEM 2]*
*Prompt: Split screen concept illustration, left side shows person repeatedly explaining same thing to a screen (frustrated, wasted time), right side shows same person typing one command and getting results instantly, dark background with green accent lighting, clean modern style*
*Descrição: O contraste entre trabalho sem sistema e trabalho com sistema*

---

## Por que criar a sua própria skill em vez de baixar uma pronta

Essa é a parte que a maioria pula.

Existe uma lógica fácil: alguém já criou uma skill de GMN, de copywriting, de gestão de projetos. Baixa, instala, usa. Economiza tempo.

O problema é que a skill de outra pessoa foi construída com a filosofia de outra pessoa. O que ela julga importante, o que ela acha desnecessário, o que ela define como boa prática — tudo isso vai junto. Você passa a trabalhar com a cara de outra pessoa. Com o processo de outra pessoa. Com os erros e atalhos de outra pessoa.

Isso funciona se você não tiver opinião formada sobre o assunto. Mas se você estudou, experimentou e tem um ponto de vista próprio sobre como fazer bem feito — a skill de outra pessoa vai colidir com isso.

O que eu fiz com o GMN é o oposto disso. Peguei 4 horas de aprendizado, reduzi para as minhas palavras, com a minha sequência, com a minha filosofia de como otimizar um perfil local. A skill que saiu daí soa como eu. Funciona como eu trabalho. Entrega do jeito que eu entregaria.

E o processo pra chegar nisso é mais simples do que parece.

---

## O processo: de anotação de curso para skill em produção

O que eu fiz:

1. Fiz o curso tomando notas em linguagem minha — não copiando slides, mas resumindo o que aprendi com as minhas palavras
2. No final, tinha um documento com módulos, processos e os prompts que foram ensinados durante o curso
3. Copiei esse documento inteiro
4. Abri o RufusIA e escrevi um prompt de 3 linhas: quero criar uma skill de GMN, vou compartilhar minhas anotações como base estrutural, você pode fazer pequenas melhorias mas respeitar minha filosofia
5. Colei o texto
6. Aguardei

O RufusIA primeiro leu as outras 21 skills existentes pra garantir que nada conflitasse. Depois organizou o material em 12 módulos com fluxo lógico, adicionou algumas coisas que eu havia esquecido — tabela de métodos de verificação, SEO de nome de arquivo de foto, integração com Wellhub pra academias — e entregou a skill pronta.

689 linhas. Salva automaticamente no repositório. Disponível pra usar no próximo cliente.

---

*[SUGESTÃO DE IMAGEM 3]*
*Prompt: Close-up of terminal screen with green text showing skill creation process, dark room ambiance, code lines flowing, soft glow from screen illuminating workspace, cinematic quality, no faces*
*Descrição: A skill sendo criada — o momento em que conhecimento vira sistema*

---

## Como isso funciona na prática com clientes

Quando eu fechar um cliente que precisa de GMN, vou criar uma pasta nova no computador, instalar o RufusIA nela, abrir no VS Code e digitar `/gmn`.

A skill vai pedir: nome da empresa, endereço, telefone, categoria, se já tem perfil ativo. A partir daí, ela guia o processo inteiro. Diagnóstico primeiro — independente de quantas avaliações o cliente já tem ou há quanto tempo o perfil existe. Sem atalho, sem pular etapa.

Depois: identidade do perfil, fotos, serviços, avaliações, posts, ranqueamento, NAP, manutenção mensal. Cada fase tem o prompt pronto. Eu preencho com os dados do cliente e disparo.

E o mais importante: cada cliente tem a sua própria pasta, a sua própria memória, a sua própria identidade. Se eu tiver 10 pizzarias diferentes como clientes, são 10 instalações separadas. A pizzaria A não interfere na pizzaria B. Cada uma tem o seu contexto isolado.

Isso resolve um dos maiores problemas de quem presta serviço com IA: contaminar o contexto de um cliente com informações de outro.

---

## Pra quem usa o Claude na versão grátis

O processo é diferente, mas o resultado é parecido.

No site do Claude, tem um botão chamado Personalizar. Dentro dele, tem uma seção de Habilidades. Você clica em Adicionar, escolhe "Escrever as instruções", define como a skill é ativada (uma palavra, um comando), cola o texto das instruções e salva.

A partir daí, em qualquer conversa, você aperta `/` e a skill aparece. Clica, ela carrega e você começa de onde o sistema manda, não de onde você se lembra.

A limitação em relação ao RufusIA é que o contexto de negócio não é salvo automaticamente — você precisa criar um projeto no Claude e configurar as instruções do projeto pra carregar junto. Mas o princípio é o mesmo: você cria uma vez, usa muitas vezes.

---

*[SUGESTÃO DE IMAGEM 4]*
*Prompt: Minimalist UI mockup showing two paths side by side, left path labeled "free" with browser interface, right path labeled "pro" with terminal, both leading to same destination, clean flat design, dark green and gold colors, no real brand logos*
*Descrição: Duas formas de chegar no mesmo lugar*

---

## O que muda quando você para de improvisar

Trabalho no Canadá na construção civil. Esse projeto digital — o canal, o conteúdo, os clientes — é construído nas horas que sobram. Não tenho 8 horas por dia pra isso. Tenho 1 ou 2, quando tenho.

Por isso sistema não é opcional pra mim. É o único jeito de manter consistência com o tempo que eu tenho.

Quando você para de começar do zero toda vez — seja num post, numa proposta, numa otimização de GMN — você para de gastar energia com processo e começa a gastar energia com resultado. A diferença na qualidade do trabalho é visível. A diferença no tempo gasto é enorme.

Uma skill não faz o trabalho por você. Ela elimina a parte do trabalho que não exige você — o setup, a explicação do contexto, a definição do processo. O que sobra é a parte que só você pode fazer: o julgamento, a relação com o cliente, a decisão de onde ir.

Isso é o que eu tô construindo. Não rápido. Não perfeito. Mas com sistema.

---

Se quiser ver o processo ao vivo — como criamos a skill de GMN do zero com as anotações de um minicurso — o vídeo está no canal.

E se quiser o sistema completo com as 22 skills prontas, o RufusIA tá disponível no link da bio.

---

*Ednei Marinho*
*Atitude e Progresso — Marketing digital sem hype, construído do zero*
