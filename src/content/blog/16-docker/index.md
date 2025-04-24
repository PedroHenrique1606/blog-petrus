---
title: "Guia sobre Docker"
summary: "Conceitos, Arquitetura, Comandos e Prática"
date: "Apr 24 2025"
draft: false
tags:

- Guia
- Regex
- TypeScript
- Front End
- JavaScript
---

###### Autor: <em><a href="https://www.linkedin.com/in/pedro-henrique-melo-a7a700231" target="_blank" rel="noopener noreferrer">Pedro Henrique Melo</a></em>

O Docker revolucionou a forma como desenvolvemos e distribuímos aplicações. Com ele, conseguimos criar ambientes isolados e reproduzíveis, garantindo que o "funciona na minha máquina" realmente funcione em qualquer lugar.

Neste post, vamos mergulhar de cabeça em:

- O que é Docker e como funciona
- Arquitetura do Docker
- Diferença entre Dockerfile e Docker Compose
- Comandos Docker úteis no dia a dia
- Criando containers na prática
- Emulando sistemas com Docker (ex: Ubuntu)
- Dicas práticas e exercícios

---

## 🧠 O que é Docker?

O Docker é uma plataforma que permite **empacotar, distribuir e rodar aplicações em containers**.

Mas o que é um container?

> Um container é um ambiente isolado, leve e portátil que roda sua aplicação com todas as suas dependências.
> 

Enquanto uma máquina virtual simula um sistema operacional completo, um container compartilha o mesmo kernel do host, mas isola processos, rede, e sistema de arquivos.

---

## ⚙️ Arquitetura do Docker

A arquitetura do Docker é composta por alguns elementos principais:

### 1. **Docker Engine**

É o motor principal que roda os containers. Ele tem dois componentes:

- **Daemon (`dockerd`)**: roda em segundo plano e gerencia imagens, containers, volumes, redes, etc.
- **Client (`docker`)**: a CLI (linha de comando) que usamos para interagir com o Docker.

### 2. **Imagens**

São como os "modelos" para os containers. Contêm tudo o que um container precisa: sistema de arquivos, dependências, bibliotecas, etc.

### 3. **Containers**

Instâncias em execução de uma imagem.

### 4. **Dockerfile**

Arquivo que define o passo-a-passo para montar uma imagem customizada.

### 5. **Docker Compose**

Ferramenta para definir e rodar múltiplos containers com um só comando (`docker compose up`).

---

## ⚔️ Dockerfile vs Docker Compose

### **Dockerfile**: define como uma imagem será construída.

Exemplo de um Dockerfile básico:

```docker
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### **Docker Compose**: define **como containers diferentes se relacionam**.

Exemplo:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: myapp
    ports:
      - "5432:5432"
```

---

## 🔧 Comandos Docker úteis

Aqui vão comandos super usados no dia a dia:

| Comando                             | Descrição                                 |
| ----------------------------------- | ----------------------------------------- |
| `docker ps`                         | Lista containers em execução              |
| `docker ps -a`                      | Lista todos containers                    |
| `docker images`                     | Lista imagens locais                      |
| `docker pull nginx`                 | Baixa imagem do Docker Hub                |
| `docker run -it ubuntu`             | Roda um container interativo com Ubuntu   |
| `docker exec -it <nome ou id> bash` | Acessa o shell de um container rodando    |
| `docker stop <nome ou id>`          | Para um container                         |
| `docker rm <nome ou id>`            | Remove um container                       |
| `docker rmi <imagem>`               | Remove uma imagem                         |
| `docker build -t nome-da-imagem .`  | Cria uma imagem com base em um Dockerfile |
| `docker compose up -d`              | Sobe os containers definidos no Compose   |
| `docker compose down`               | Derruba os containers                     |

---

## 🐧 Emulando um sistema Ubuntu no Docker

Sim, é possível "emular" um Ubuntu no Docker com pouquíssimos comandos. Veja como fazer isso:

```bash
docker run -it ubuntu
```

Pronto, você está dentro de um Ubuntu minimalista rodando num container.

Se quiser instalar algo dentro, como o `curl`, basta fazer:

```bash
apt update
apt install curl
```

Você pode até criar sua própria imagem customizada com isso:

### Dockerfile:

```docker
FROM ubuntu:22.04

RUN apt update && apt install -y curl git vim

CMD ["/bin/bash"]
```

Depois, no terminal:

```bash
docker build -t meu-ubuntu .
docker run -it meu-ubuntu
```

---

## 📦 Criando seu primeiro container

Vamos criar um "Hello World" com Node.js, por exemplo:

1. Crie uma pasta com os seguintes arquivos:

### `package.json`

```json
{
  "name": "hello-docker",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

### `index.js`

```jsx
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello Docker!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### `Dockerfile`

```docker
FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
```

1. Rode:

```bash
docker build -t hello-docker .
docker run -p 3000:3000 hello-docker
```

Acesse: [http://localhost:3000](http://localhost:3000/)

---

## 🛠️ Criando ambiente completo com Compose

Agora, com Compose, adicionando um banco de dados:

### `docker-compose.yml`

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: hello_db
    ports:
      - "5432:5432"

```

Suba com:

```bash
docker compose up --build
```

---

## 🧠 Dicas finais e aprendizado prático

- Sempre utilize `.dockerignore` para ignorar arquivos que não precisam ir pra imagem (como `node_modules`, `.git`, etc.)
- Use volumes para persistência de dados (`v`)
- Explore redes Docker (`docker network ls`) para comunicação entre containers
- Aprenda a usar imagens oficiais e otimize suas imagens (multi-stage builds, por exemplo)

---

## 📚 Recursos extras

- Documentação oficial do Docker
- Play with Docker – ambiente online para testar Docker
- Curso gratuito: [Docker para Devs](https://youtu.be/DdoncfOdru8?si=xT5fu3O06eSPXVz9) – ótimo para iniciantes
- Ferramenta: [Portainer.io](https://www.portainer.io/) – gerenciador visual de containers