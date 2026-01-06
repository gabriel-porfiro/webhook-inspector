import { env } from '@/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: { 
    url: env.DATABASE_URL, 
  },
  out: './src/db/migrations', //arquivo para onde as migrações sql irão...
  schema: './src/db/schema/index.ts', //"" shemas
  casing: 'snake_case', //formato das tabelas
})