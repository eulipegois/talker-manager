# Talker Manager

## Aplicação Back-end CRUD de palestrantes, capaz de cadastrar, visualizar, pesquisar, editar e excluir informações.

# Tabela de conteúdos

<p align="center">
  <a href="#features">Features</a>
  <a href="#requisitos">Pré requisitos</a>
  <a href="#rodando">Rodando o projeto</a>
  <a href="#tech">Tecnologias</a>
  <a href="#autor">Autor</a>
</p>

<h4 align="center"> 
	Projeto Concluído 🚀
</h4>

<h1 id="features">Features</h1>

- [x] Crie o endpoint GET /talker
- [x] Crie o endpoint GET /talker/:id
- [x] Crie o endpoint POST /login
- [x] Adicione as validações para o endpoint /login
- [x] Crie o endpoint POST /talker
- [x] Crie o endpoint PUT /talker/:id
- [x] Crie o endpoint DELETE /talker/:id
- [x] Crie o endpoint GET /talker/search?q=searchTerm


<h1 id="requisitos">Pré-requisitos</h1>

 ### Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install

  ### Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.


<h1 id="Rodando">Rodando o projeto</h1>

Usaremos o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.

<h1 id="tech">Tecnologias</h1>

As seguintes ferramentas foram usadas na construção do projeto:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [VScode](https://code.visualstudio.com/)
- [Nodemon](https://nodemon.io/)

<h1 id="autor">Autor</h1>

<p>Luiz Felipe Espindola Gois</p>

[Linkedin](https://www.linkedin.com/in/luizfelipegois/)
[Behance](https://www.behance.net/luizfelipe_gois)