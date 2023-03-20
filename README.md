# Labenu Music Awards

## Sobre o projeto
Projeto desenvolvido durante o curso de Full Stack da Labenu. O projeto consiste em uma API que permite o cadastro de bandas e shows, e a visualização de shows por dia.

## Tecnologias utilizadas
- Typescript
- Node.js
- Express
- MySQL
- JsonWebToken
- Bcrypt
- Cors
- Uuid

## Como rodar o projeto
### Pré-requisitos
- Node.js
- MySQL

### Instalação
- Clone o repositório
- Instale as dependências com `npm install`
- Crie um banco de dados MySQL
- Crie um arquivo `.env` na raiz do projeto e preencha com as informações do seu banco de dados
- Rode o projeto com `npm run dev`

## Deploy
https://projeto-lama-rorf.onrender.com

## Documentação
https://documenter.getpostman.com/view/22369915/2s93JzN1hk

## Endpoints

### 1. Criar usuário
`POST /user/signup`

### 2. Fazer login
`POST /user/login`

### 3. Criar banda
`POST /band/create`

### 4. Pegar banda pelo id
`GET /band/bands/:id`

### 5. Adicionar um show
`POST /show/register`

### 6. Pegar shows por dia
`GET /show/shows?weekDay=day`

