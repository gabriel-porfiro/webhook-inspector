import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(333),
  
  DATABASE_URL: z.url(),  
})

export const env = envSchema.parse(process.env)

//Validação das variáveis de ambiente
//Qualquer variável dentro de envSchema deixa de ser opcional e passa a ser obrigatória...