---
title: "Comandos SQL e Postgres Essenciais"
summary: "Aprendendo SQL com PostgreSQL: Um Guia Prático"
date: "Apr 16 2025"
draft: false
tags: 
- Postgres
- SQL
- Docker
---
###### Autor: *[Pedro Henrique Melo](http://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231)*

O SQL (Structured Query Language) é a linguagem padrão para gerenciamento de bancos de dados relacionais. E quando se fala de um SGBD poderoso e open-source, o PostgreSQL é uma das primeiras opções que vêm à mente.

Neste post, vamos explorar:

- 🧠 O que é SQL e PostgreSQL
- ✅ Vantagens do PostgreSQL
- 🧰 Comandos básicos de SQL
- 🧪 Exemplo prático com tabelas e relacionamentos
- 🐳 Um Docker Compose prontinho para você testar tudo isso localmente

---

## 💡 O que é SQL?

SQL é a linguagem usada para **criar, consultar, modificar e gerenciar dados** em bancos de dados relacionais. Com SQL você pode:

- Criar estruturas de dados (tabelas, relações)
- Inserir dados
- Consultar informações (com `SELECT`)
- Atualizar e deletar dados
- Gerenciar permissões de usuários e muito mais

---

## 🐘 Por que usar PostgreSQL?

O PostgreSQL é um banco de dados objeto-relacional, robusto, gratuito, e com recursos avançados como:

- Suporte a **tipos complexos** e **JSON**
- **Extensibilidade**, com várias extensões como `PostGIS` e `pg_trgm`
- Excelente suporte a **relacionamentos complexos**
- **Transações confiáveis** e controle de concorrência

---

## 🧰 Comandos básicos em SQL

Aqui estão alguns comandos que você verá mais adiante no exemplo prático:

```sql
-- Criar tabela
CREATE TABLE produto (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  preco NUMERIC(10, 2) NOT NULL
);

-- Inserir dados
INSERT INTO produto (nome, preco) VALUES ('Leite Integral', 4.50);

-- Consultar dados
SELECT * FROM produto;

-- Atualizar
UPDATE produto SET preco = 5.00 WHERE id = 1;

-- Deletar
DELETE FROM produto WHERE id = 1;

```

---

## 🧪 Exemplo prático: Empresa de Laticínios

Vamos criar algumas tabelas com relacionamento:

- `fazendas` – locais fornecedores de leite
- `animais` – animais da fazenda
- `produtos` – como leite, queijo, etc
- `producoes` – quantidade produzida, associando produto com fazenda

### Estrutura do Banco

```sql
-- Fazendas
CREATE TABLE fazendas (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  localizacao TEXT NOT NULL
);

-- Animais
CREATE TABLE animais (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  especie TEXT NOT NULL,
  fazenda_id INTEGER REFERENCES fazendas(id)
);

-- Produtos
CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  tipo TEXT NOT NULL
);

-- Produções
CREATE TABLE producoes (
  id SERIAL PRIMARY KEY,
  produto_id INTEGER REFERENCES produtos(id),
  fazenda_id INTEGER REFERENCES fazendas(id),
  quantidade_litros NUMERIC(10,2) NOT NULL,
  data DATE NOT NULL
);

```

---

## 🐳 Docker Compose para PostgreSQL

Crie um arquivo chamado `docker-compose.yml` com o seguinte conteúdo:

```yaml
version: '3.8'

services:
  db:
    image: postgres:15
    container_name: laticinios_db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: laticinios
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:

```

### Como rodar

1. Salve esse arquivo como `docker-compose.yml`
2. No terminal, execute:

```bash
docker compose up -d

```

1. Conecte com alguma ferramenta como **DBeaver**, **pgAdmin** ou usando CLI:

```bash
psql -h localhost -U postgres -d laticinios

```

---

## 🧪 Teste o banco com alguns inserts

```sql
INSERT INTO fazendas (nome, localizacao) VALUES ('Fazenda Boa Vista', 'Minas Gerais');
INSERT INTO animais (nome, especie, fazenda_id) VALUES ('Mimosa', 'Vaca', 1);
INSERT INTO produtos (nome, tipo) VALUES ('Leite Integral', 'Bebida');
INSERT INTO producoes (produto_id, fazenda_id, quantidade_litros, data) VALUES (1, 1, 1500.50, '2025-04-15');

```

---

## 🔍 Consultando os dados

```sql
SELECT
  f.nome AS fazenda,
  p.nome AS produto,
  pr.quantidade_litros,
  pr.data
FROM producoes pr
JOIN fazendas f ON pr.fazenda_id = f.id
JOIN produtos p ON pr.produto_id = p.id;

```
---

## 🧠 Aprendizado e boas práticas com SQL

Trabalhar com bancos de dados relacionais envolve mais do que apenas saber os comandos. Aqui vão algumas boas práticas para adotar desde o início:

- **Nomeclatura consistente**: use nomes de tabelas e colunas em minúsculo e no plural quando fizer sentido (`fazendas`, `produtos` etc.).
- **Normalização**: evite redundâncias. Por exemplo, em vez de armazenar o nome da fazenda em várias tabelas, use `fazenda_id` como chave estrangeira.
- **Use constraints**: além de `FOREIGN KEY`, considere usar `CHECK`, `UNIQUE`, e `NOT NULL` para garantir a integridade dos dados.
- **Evite SELECT * em produção**: seja específico com as colunas que deseja retornar. Isso ajuda na performance e clareza.
- **Indexes**: em bases maiores, considere usar índices (`CREATE INDEX`) para acelerar consultas com `WHERE` ou `JOIN`.

---

## 🧠 Dica bônus: criando uma VIEW

Uma `VIEW` é como uma “tabela virtual” que representa uma consulta. Veja um exemplo prático:

```sql
CREATE VIEW resumo_producao AS
SELECT
  f.nome AS fazenda,
  p.nome AS produto,
  SUM(pr.quantidade_litros) AS total_litros
FROM producoes pr
JOIN fazendas f ON pr.fazenda_id = f.id
JOIN produtos p ON pr.produto_id = p.id
GROUP BY f.nome, p.nome;

```

Agora você pode consultar essa `view` como se fosse uma tabela:

```sql
SELECT * FROM resumo_producao;

```

---

## ✍️ Proposta de desafio prático

Para fixar o conteúdo, aqui vai um desafio para você implementar:

> Crie uma tabela chamada funcionarios que pertença a uma fazenda, contendo: id, nome, cargo, salario e fazenda_id. Relacione corretamente com a tabela fazendas.
> 

Depois, faça uma consulta que retorne o nome da fazenda, o nome do funcionário e seu cargo. Poste sua solução nos comentários ou nas redes sociais com a hashtag **#AprendendoSQL**!

---


## 📚 Referências

Se quiser se aprofundar, recomendo:

- [Documentação oficial do PostgreSQL](https://www.postgresql.org/docs/)
- Curso gratuito de SQL: [SQLBolt](https://sqlbolt.com/)
- Livro: *PostgreSQL: Up and Running* – O’Reilly

