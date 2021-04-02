# Crud com NextJS Serveless

Simples aplicação em reactjs com nextjs utilizando serveless no nextjs, a aplicação consiste em um simples CRUD de usuários, utilizando o faunaDb para armazenar e os dados, sendo ele o mais indicado banco de dados para aplicações serveless.

A aplicação foi feita seguindo um artigo no medium, você pode esta lendo ele [aqui](https://medium.com/technest/crud-app-with-next-js-and-faunadb-918b76068e1e), vale salientar que toda a estilização da aplicação foi feita por mim, e algumas partes do código criado no artigo foi modificado na minha versão do projeto.

# Tópicos 

- [Tecologias](#techs)
- [Layout](#layout)
- [Rodando a aplicação](#execute)

<a id="techs"></a>
## Tecnologias e bibliotecas utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/)
- [FaunaDB](https://fauna.com/)
- [SWR](https://swr.vercel.app/)

<a id="layout"></a>
## Layout

### Home 

![Home page](https://github.com/edmilson-dk/flash-promo/blob/main/.github/home.png)

### Create Costumer

![Create costumer](https://github.com/edmilson-dk/flash-promo/blob/main/.github/create.png)

### View Costumer

![Create costumer](https://github.com/edmilson-dk/flash-promo/blob/main/.github/view.png)

### Update Costumer

![Update](https://github.com/edmilson-dk/flash-promo/blob/main/.github/update.png)

<a id="execute"></a>
## Executando o front-end

Para executar a frnt-end em sua máquina siga os passos abaixo.

- 1 Clone meu repositório em sua máquina 

```sh
git https://github.com/edmilson-dk/crud-with-next-faunadb

# entre na pasta

cd crud-with-next-faunadb
```

- 2 Após o passo acima, instale as dependências necessárias, para isso é preciso que você tenha o [NodeJS](https://nodejs.org/en/) instalado em sua máquina.

```sh
npm install

# ou com yarn

yarn install
```

- 4 Por fim, crie uma conta no site do faunadb e gere uma chave de acesso secreta, e adicione ela em um arquivo .env.local na raiz do projeto, assim como indica o arquivo env.local.example, caso você mão saíba cria uma database no faunadb, siga os passos [aqui](https://medium.com/technest/crud-app-with-next-js-and-faunadb-918b76068e1e)

- 5 Feito isso é hora de executar o projeto, para isso execute o comando abaixo.

```sh
npm dev 

# ou com yarn

yarn dev
```

Creator with 💙 by [Edmilson Jesus](https://www.linkedin.com/in/edmilson-jesus-4128711b5)