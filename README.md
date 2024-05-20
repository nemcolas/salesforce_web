# Projeto Reestruturação de Páginas Salesforce

## Sumário
- [Objetivo](#objetivo)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Descrição sobre o projeto](#descrição-sobre-o-projeto)
- [Componentes e Funcionalidades](#componentes-e-funcionalidades)
- [Chatbot](#chatbot)
- [Procedimento para Rodar a Aplicação](#procedimento-para-rodar-a-aplicação)
- [Conclusão](#conclusão)
- [Equipe](#equipe)

## Objetivo
O objetivo deste projeto é reestruturar as páginas do site da Salesforce para melhorar a navegação, tornando-a mais intuitiva e responsiva. Isso inclui a realocação de elementos, criação de novas páginas e o desenvolvimento de um chatbot para atendimento automatizado. O projeto visa oferecer uma experiência de navegação fluida e responsiva, reduzindo o tempo necessário para obter informações sobre a empresa e seus produtos.

## Requisitos
Para rodar este projeto, é necessário atender aos seguintes requisitos:
1. **Node.js**: O Next.js é construído em Node.js. Certifique-se de ter o Node.js instalado em sua máquina. A versão mínima do Node.js necessária é a 10.13. Você pode baixar o Node.js [aqui](https://nodejs.org/).
2. **npm**: Você pode usar o npm como gerenciadores de pacotes para instalar o Next.js e suas dependências. Certifique-se de ter ele instalado. Se você instalou o Node.js, o npm já deve estar instalado, mas você pode querer atualizá-lo.
3. **Editor de código**: Você precisará de um editor de código para escrever seu código. Recomendamos o uso do [Visual Studio Code](https://code.visualstudio.com/).

## Instalação
Para instalar o projeto, siga estas etapas:
1. Clone o repositório usando o comando abaixo:
```bash
git clone https://github.com/yagoluucas/salesforce_web
```
2. Navegue até o diretório do projeto

3. Instale as dependências do projeto, para isso execute o seguinte comando:
```bash
npm install
```

## Descrição sobre o projeto
Durante o projeto, a reestruturação foi conduzida através da criação de diversos componentes, cards e containers, cada um com sua função específica, devidamente descrita em sua respectiva pasta.

## Componentes e Funcionalidades
O projeto conta com diversos componentes e funcionalidades, incluindo:
- Menu de Contexto
- Componentes de Cards e Containers para exibição de informações
- Páginas específicas para diferentes seções do site
- Layout responsivo para melhor adaptação a diferentes dispositivos

## Chatbot
O chatbot foi desenvolvido com a tecnologia IBM Watson, com a função de fornecer respostas aos usuários sobre informações relacionadas à empresa Salesforce, seus produtos e navegação no site. O chatbot está em processo de desenvolvimento, portanto, as respostas podem não ser totalmente precisas no estágio atual.

## Procedimento para Rodar a Aplicação
Para acessar a aplicação no Visual Studio Code (VSCode) e iniciar o servidor localmente, siga estas etapas:
1. Abra o terminal no Visual Studio Code e verifique se você está na pasta raiz do projeto.
2. Execute o comando `npm install` para instalar as dependências necessárias.
3. Após a conclusão da instalação, execute o comando `npm run dev` para iniciar o servidor local e ter acesso às páginas web rodando localmente.

## Informações consumidas da API
O nosso projeto consome duas API, uma construida em Java para o salvamento das informações no banco de dados e tambem recuperação das informações como país, porte empresa e idioma para utilizarmos na nossa página de teste grátis
A outra api construida em express foi usada para o envio do email que fazemos quando a pessoa solicita um teste grátis.
Ambas estão funcionais, porém como estão rodando na nossa máquina, não será possível consumir elas pois não estão hospedadas de forma online

## Conclusão
Espera-se que esta reestruturação das páginas do site da Salesforce proporcione uma experiência de navegação mais intuitiva e responsiva para os usuários, reduzindo o tempo necessário para obter informações sobre a empresa e seus produtos.

## Links uteis
O nosso vídeo pitch pode ser conferido no seguinte link : https://youtu.be/9UXcAQWEwRY?si=ryVWw9X3QlbkvdWL  
O link do nosso repositório no github é : https://github.com/yagoluucas/salesforce_web
A nossa aplicação já hospedada na Vercel pode ser vista nesse link : https://salesforce-web.vercel.app/

## Equipe
Este projeto foi desenvolvido por:
- Ander Kamada RM:553449
- Nicolas Martins RM:553478
- Yago Lucas Gonçalves RM:553013
