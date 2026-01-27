# Webhook Inspector

O Webhook Inspector é uma aplicação fullstack desenvolvida para capturar, armazenar e inspecionar webhooks HTTP. 

Este projeto foi criado como uma ferramenta de aprendizado e demonstração técnica, com foco na captura de webhooks fictícios gerados automaticamente pelo próprio sistema. Esses webhooks são armazenados em um banco de dados PostgreSQL e podem ser visualizados, analisados e gerenciados através de uma interface web intuitiva.

A geração automática de webhooks fictícios permite simular cenários reais de integração, facilitando a demonstração das funcionalidades do sistema sem depender de sistemas externos. Assim, o Webhook Inspector é ideal para estudos e apresentações técnicas. 


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

4. **Configuração das Variáveis de Ambiente** 
   ```bash
   Antes de configurar o banco de dados, crie um arquivo `.env` na raiz pasta `api` com o seguinte conteúdo:

   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/webhooks"
   GOOGLE_GENERATIVE_AI_API_KEY="sua-chave-gemini"
   ```

   - Para a variável `DATABASE_URL` => utilize a string de conexão do seu banco PostgreSQL.
   - Para a variável `GOOGLE_GENERATIVE_AI_API_KEY`, obtenha uma chave gratuita do Gemini em: https://aistudio.google.com/app/apikey
      ```

5. **Configure o banco de dados**:
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

## Principais Tecnologias e Ferramentas:

### Front-End
- React 19
- TypeScript
- Vite
- TailwindCSS
- TanStack Router
- TanStack Query
- Radix UI
- Lucide React

### Back-End
- Fastify
- TypeScript
- Drizzle ORM
- PostgreSQL
- Zod
- Swagger / Scalar
- Docker / Docker Compose
- Biome
