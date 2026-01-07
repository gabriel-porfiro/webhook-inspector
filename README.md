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

# Tecnologias Utilizadas no Backend - Webhook Inspector

Este documento descreve as tecnologias e ferramentas empregadas no desenvolvimento do backend da aplicação Webhook Inspector, demonstrando as habilidades e conhecimentos aplicados nesta parte do projeto.

## Linguagem e Runtime
- **Node.js**: Ambiente de execução JavaScript no servidor, utilizado para construir aplicações escaláveis e de alta performance.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.

## Framework Web
- **Fastify**: Framework web rápido e eficiente para Node.js, focado em performance e baixo overhead, ideal para APIs RESTful.

## Banco de Dados e ORM
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional robusto e avançado, utilizado para armazenar dados de webhooks.
- **Drizzle ORM**: ORM moderno e type-safe para TypeScript, que gera consultas SQL otimizadas e fornece inferência de tipos automática.

## Validação e Serialização
- **Zod**: Biblioteca de validação de esquemas para TypeScript, usada para validar entradas de dados e garantir consistência.
- **Fastify Type Provider Zod**: Integração que combina Zod com Fastify, permitindo validação automática de rotas e inferência de tipos.

## Documentação de API
- **Fastify Swagger**: Plugin para gerar documentação OpenAPI/Swagger automaticamente a partir das rotas definidas.
- **Scalar API Reference**: Ferramenta para criar uma interface visual atraente e interativa para a documentação da API.

## Utilitários e Ferramentas
- **Biome**: Ferramenta de linting e formatação de código rápida e configurável, substituindo ESLint e Prettier.
- **TSX**: Executor de TypeScript que permite rodar arquivos .ts diretamente em desenvolvimento, facilitando o workflow de dev.
- **UUID v7**: Geração de identificadores únicos baseados em timestamp, utilizados como chaves primárias para melhor ordenação.
- **Docker**: Containerização do banco de dados PostgreSQL para isolamento e facilidade de configuração em diferentes ambientes.

## Gerenciamento de Dependências
- **PNPM**: Gerenciador de pacotes eficiente e rápido, com melhor gerenciamento de cache e espaço em disco comparado ao NPM.

## Infraestrutura e DevOps
- **Docker Compose**: Orquestração de containers para configurar e executar o banco de dados PostgreSQL localmente.

Essas tecnologias foram escolhidas por sua maturidade, performance e integração perfeita, permitindo o desenvolvimento de uma API robusta, type-safe e bem documentada para inspeção de webhooks.