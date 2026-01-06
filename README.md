# Webhook Inspector

Um projeto para capturar e inspecionar webhooks HTTP, armazenando-os em um banco de dados PostgreSQL para análise.

## Tecnologias

- **Backend**: Fastify, TypeScript, Drizzle ORM, PostgreSQL, Zod
- **Frontend**: React, Vite, TypeScript
- **Ferramentas**: pnpm, Biome, Docker, Swagger/Scalar

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
   ```

## Uso

1. **Inicie a API**:
   ```bash
   cd api
   pnpm dev
   ```
   A API estará disponível em `http://localhost:3333`. Documentação em `http://localhost:3333/docs`.

2. **Inicie o frontend** (em outro terminal):
   ```bash
   cd web
   pnpm dev
   ```
   O frontend estará disponível em `http://localhost:5173`.

3. **Envie webhooks** para `http://localhost:3333/api/webhooks` para capturá-los.

4. **Visualize os webhooks** através da API ou do frontend.</content>
<parameter name="filePath">F:\projetos\webhook-inspector\README.md