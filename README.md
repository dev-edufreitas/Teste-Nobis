# Teste-Nobis

Este é um projeto React criado com Create React App e configurado para ser executado em um container Docker.

## Requisitos

Para executar este projeto, você precisará ter instalado:

- [Docker](https://www.docker.com/get-started)

## Estrutura do Projeto

O projeto está configurado com a seguinte estrutura:

- `src/`: Código fonte da aplicação React
- `public/`: Arquivos públicos
- `Dockerfile`: Configuração para a imagem Docker
- `docker-compose.yml`: Configuração do ambiente Docker
- `.gitignore`: Arquivos e diretórios ignorados pelo Git

## Inicialização Rápida

Para iniciar o projeto, siga estes passos:

1. Clone o repositório
   ```bash
   git clone https://github.com/dev-edufreitas/Teste-Nobis.git
   cd teste-nobis
   ```

2. Inicie o container Docker
   ```bash
   docker-compose up
   ```

3. Acesse a aplicação em seu navegador
   ```
   http://localhost:3000
   ```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `docker-compose up`

Inicia o ambiente de desenvolvimento. A aplicação será executada em [http://localhost:3000](http://localhost:3000).
A página será recarregada automaticamente se você fizer alterações no código.

### `docker-compose up --build`

Reconstrói a imagem Docker e inicia o ambiente de desenvolvimento.

### `docker-compose down`

Encerra o ambiente de desenvolvimento.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [Docker](https://www.docker.com/) - Plataforma de containerização
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
