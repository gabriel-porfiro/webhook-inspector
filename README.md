# Webhook Inspector

Um projeto para capturar e inspecionar webhooks HTTP, armazenando-os em um banco de dados PostgreSQL para análise.

## Principais Tecnologias

- **Backend**: Fastify, TypeScript, Drizzle ORM, PostgreSQL, Zod
- **Frontend**: React, Vite, TypeScript, TailwindCSS, TanStack Router, TanStack Query
- **Ferramentas**: pnpm, Biome, Docker, Swagger/Scalar

---
---

## Instalação

1. **Pré-requisitos**:
   - Node.js (versão 18+)
   - pnpm
   - Docker

2. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd webhook-inspector
   ```

3. **Instale as dependências**:
   ```bash
   pnpm install
   ```

4. **Configure o banco de dados**:
   ```bash
   cd api
   docker-compose up -d
   pnpm db:migrate
   pnpm run db:seed ==> este comando popula o banco de dados de forma automática com webhooks
   ```

## Uso

1. **Inicie a API**:
   ```bash
   cd api
   pnpm run dev
   ```
   A API estará disponível em `http://localhost:3333`. Documentação em `http://localhost:3333/docs`.

2. **Inicie o frontend** (em outro terminal):
   ```bash
   cd web
   pnpm run dev
   ```
   O frontend estará disponível em `http://localhost:5173`.

4. **Visualize os webhooks**:
   - Pelo Front-End: acesse [http://localhost:5173](http://localhost:5173) para uma interface visual completa.
   - Pela API: utilize os endpoints documentados em [http://localhost:3333/docs](http://localhost:3333/docs).

<parameter name="filePath">F:\projetos\webhook-inspector\README.md

## Como o projeto foi construído

### Front-End

O front-end foi desenvolvido utilizando **React** com **TypeScript**, utilizando o **Vite** para o bundling e desenvolvimento rápido. A interface utiliza **TailwindCSS** para estilização, garantindo responsividade e visual moderno. A navegação é gerenciada pelo **TanStack Router** e o gerenciamento de dados assíncronos pelo **TanStack Query**. O código é organizado em componentes reutilizáveis e segue boas práticas de acessibilidade e UX.

#### Principais Tecnologias e Ferramentas:
- React 19
- TypeScript
- Vite
- TailwindCSS
- TanStack Router
- TanStack Query
- Radix UI
- Lucide React

#### Como executar o Front-End:
```bash
cd web
pnpm install
pnpm run dev
```
O front-end estará disponível em [http://localhost:5173](http://localhost:5173).

---

### Back-End

O back-end foi construído com **Fastify** e **TypeScript**, utilizando o **Drizzle ORM** para integração com o banco de dados **PostgreSQL**. A validação de dados é feita com **Zod** e a documentação da API é gerada automaticamente com **Swagger** e apresentada via **Scalar**. O ambiente de desenvolvimento utiliza **Docker** para facilitar a configuração do banco de dados.

#### Principais Tecnologias e Ferramentas:
- Fastify
- TypeScript
- Drizzle ORM
- PostgreSQL
- Zod
- Swagger / Scalar
- Docker / Docker Compose
- Biome

#### Como executar o Back-End:
```bash
cd api
pnpm install
docker-compose up -d
pnpm db:migrate
pnpm db:seed
pnpm run dev
```
A API estará disponível em [http://localhost:3333](http://localhost:3333) e a documentação em [http://localhost:3333/docs](http://localhost:3333/docs).
