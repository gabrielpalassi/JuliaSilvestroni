# Análise da estrutura do site de Júlia Silvestroni

Data de referência: 20/10/2026. Pesquisa qualitativa. Nenhuma alteração no site nesta etapa.

## Escopo

Manter hero e Sobre mim. Repensar as seções seguintes, preservando o tom leve, natural, positivo e orientado a resultados, sem limitar o posicionamento ao emagrecimento. Atendimento exclusivamente online; valores e duração informados pelo WhatsApp.

Não há acesso a conversão, agenda ou faturamento das referências. Reconhecimento público e maturidade da oferta não comprovam desempenho comercial dos sites. As recomendações abaixo são hipóteses de melhoria da comunicação, não promessas de conversão.

## Referência indicada: Isabela Carrelas

Fonte primária: [site de Isabela Carrelas](https://isabelacarrelas.netlify.app/), inspecionado no navegador. Foram lidas a página completa e a aba Consulta online dos planos.

### O que o site apresenta

- Identificação do público em quatro situações cotidianas, antes de explicar a consulta.
- Uma seção com entregáveis: plano, orientações, materiais, suporte e aplicativo, entre outros recursos da profissional.
- Planos separados por modalidade, com quantidade de encontros, período e condições de acompanhamento.
- Botões de WhatsApp cuja mensagem identifica o plano selecionado.
- FAQ sobre preparação, diferenças entre formatos, exames, suporte e contratação.
- Relatos de pacientes e um convite ao Instagram sem três publicações incorporadas.

Esses recursos são ofertas e declarações daquele site. Não foram verificados resultados clínicos, autenticidade independente dos relatos ou desempenho comercial.

### O que aproveitar

1. Explicar para quem é o acompanhamento com situações reconhecíveis. Adaptar a escrita para desejos e objetivos, evitando um catálogo de frustrações.
2. Tornar visível o que a pessoa recebe. Uma lista objetiva comunica mais que repetir personalização e acolhimento.
3. Explicar a oferta antes de encaminhar para o WhatsApp. Manter valores e duração no contato, conforme a decisão da profissional.
4. Adaptar a mensagem inicial do WhatsApp quando houver ofertas realmente distintas. Com uma oferta única, manter um contato simples e direto.
5. Usar um bloco social compacto para continuar a conversa, sem fazer o visitante percorrer uma segunda página dentro da landing page.

### O que adaptar com cuidado

- As três modalidades e os planos longos fazem sentido para a oferta publicada por Isabela. Não há motivo para reproduzir abas de modalidades no site de Júlia, que atende apenas online.
- Não importar aplicativo, materiais, prazos de suporte, retornos incluídos ou avaliação corporal sem confirmação de que fazem parte do serviço de Júlia.
- Evitar rótulos como “mais escolhido” sem informação real que os sustente.
- Não repetir a extensão de todas as seções. Uma página longa pode explicar bem, mas a quantidade de conteúdo deve acompanhar a complexidade real da oferta.

## Diagnóstico do nosso site

Fonte: implementação atual em `src/content/site.ts` e `src/routes/index.tsx`.

1. Os cards de Atendimento misturam três categorias: consulta é um encontro, acompanhamento é continuidade, online é modalidade. A apresentação sugere opções, mas não ajuda a escolher nem mostra uma entrega completa.
2. Atendimento, Abordagem e Como funciona voltam aos mesmos conceitos de rotina, plano individual e ajustes. Falta distinguir o que a pessoa recebe, como o serviço acontece e por que o processo é adequado a ela.
3. A seção Abordagem ocupa bastante espaço com uma foto de alimentos e princípios genéricos. Os princípios podem explicar decisões práticas dentro do processo, com menos repetição.
4. O passo a passo tem quatro etapas, mas Primeiro contato já está implícito nos botões de WhatsApp. Três etapas centradas no cuidado podem explicar melhor o serviço.
5. O visitante não encontra uma síntese de objetivos atendidos. Isso ajudaria a ampliar o posicionamento para além de perda de peso, sem inventar especialidades.
6. Cada iframe do Instagram mede 540 px de altura. Como os três ficam empilhados abaixo de `xl`, somam 1.620 px só de incorporações, antes de incluir links, títulos, margens e espaços. Essa é uma dimensão de layout, não uma medição de velocidade. O carregamento depende do Instagram.
7. Instagram e cupons aparecem antes de FAQ e contato final. São caminhos de saída antes de responder às dúvidas de contratação.
8. Ainda não há relatos publicados no site. A credibilidade pode ser fortalecida com detalhes reais do atendimento e, se houver material apropriado, experiências de pacientes. A estrutura não deve depender de relatos ainda inexistentes.

## Sequência recomendada depois de Sobre mim

### 1. Seu objetivo, nosso ponto de partida

Função: ajudar a pessoa a reconhecer se o acompanhamento faz sentido para ela.

Formato sugerido: três ou quatro situações curtas, sem carrossel. Exemplos a validar com a profissional: organizar a alimentação na rotina; fazer escolhas com mais confiança; ajustar a alimentação a metas pessoais. Saúde, treino, composição corporal ou condições clínicas específicas só entram se corresponderem ao público e à atuação reais.

### 2. O que faz parte do seu acompanhamento

Função: apresentar a oferta concreta e substituir os três cards atuais.

Usar o que já é descrito no site: conversa por videochamada, planejamento individual e ajustes nos encontros de acompanhamento. Separar claramente o que é incluído daquilo que pode ser contratado depois. App, materiais, canais de suporte, período de acesso e entregas devem ser confirmados antes de publicação.

CTA: Conhecer o acompanhamento, levando ao WhatsApp. Nota curta sobre valores e duração no contato.

### 3. Como vamos trabalhar suas metas

Função: unir a atual Abordagem com Como funciona, preservando o que agrega informação.

Três etapas sugeridas: conhecer sua rotina e objetivos; construir o plano e definir metas; avaliar o que funcionou e ajustar o caminho. Para cada etapa, dizer o que acontece e como isso ajuda a pessoa. Os diferenciais entram como exemplos concretos do processo, sem criar um método proprietário fictício.

### 4. Experiências de quem já se cuida comigo, se houver material

Função: apresentar relatos reais e autorizados sobre a experiência do cuidado, com contexto suficiente e identificação conforme combinado com cada paciente. Preferir poucos relatos legíveis a imagens minúsculas de mensagens. Não inventar números, avaliações ou resultados; não depender de promessas de transformação corporal. Se não houver material pronto, omitir a seção nesta versão.

### 5. Dúvidas antes de começar

Função: responder às questões de decisão, sem repetir toda a apresentação. Priorizar funcionamento do online, preparação, conteúdo da consulta, retornos e suporte, contratação e valores. Só publicar respostas sobre convênio, reembolso, pagamento, prazos e frequência depois de confirmar os detalhes.

### 6. Vamos dar o primeiro passo?

Função: concluir a apresentação do atendimento com uma ação clara no WhatsApp. Explicar brevemente o que acontece após o clique: conversar sobre o acompanhamento e consultar horários e condições. Não inserir urgência ou escassez artificial.

### 7. Conteúdos e parcerias como informação complementar

Posicionar depois do bloco principal de contato e antes do rodapé. Instagram em bloco curto com um link ou até três chamadas com capas locais disponibilizadas pela profissional. Se forem mantidas incorporações, carregá-las sob demanda é uma opção a testar. Cupons em uma faixa compacta com marca, código e desconto; botão de copiar e links oficiais podem facilitar uso, após confirmar destinos. Não retirar os cupons já solicitados.

## Direção visual e mobile

- Preservar a paleta, a tipografia e o tom já aprovados.
- Alternar texto curto, listas de entregáveis e etapas. Evitar uma sequência inteira de seções com três cards visualmente iguais.
- Reservar grandes blocos de cor para conteúdo prioritário, sem depender de fotografias genéricas para preencher espaço.
- Manter as informações de contratação antes das saídas para redes e lojas.
- Usar listas ou uma linha do tempo vertical no mobile. Não exigir deslizar um carrossel para descobrir conteúdo essencial.
- Um botão de WhatsApp fixo no mobile é uma hipótese de teste, não uma recomendação automática. Ele precisa evitar o rodapé, os cupons e os controles do site, e não competir com os CTAs existentes.

## Prioridades

1. Reestruturar Atendimento em entregáveis e combinar Abordagem com o processo.
2. Acrescentar identificação do público com escopo confirmado.
3. Colocar FAQ e contato antes de Instagram e parcerias; compactar os blocos complementares.
4. Acrescentar relatos reais quando disponíveis.
5. Avaliar desempenho e agendamento com dados depois da implementação, sem presumir que referências externas comprovam conversão.

## Informações necessárias para uma implementação fiel

- Principais objetivos e públicos atendidos, sem restringir à perda de peso.
- Conteúdo exato da consulta e do acompanhamento; existência e condições de retornos.
- Forma e prazo de entrega do plano, materiais e eventual aplicativo.
- Canal, escopo e período de suporte, se houver.
- Relatos que possam ser publicados, se disponíveis.
- Links oficiais das marcas, se desejados. Cupons e percentuais já estão informados.

Essas confirmações podem ser feitas sem publicar valores ou duração no site.

## Outras referências

Ver a pesquisa complementar em [referencias-nutricionistas.md](referencias-nutricionistas.md), com links primários e limites da comparação.
