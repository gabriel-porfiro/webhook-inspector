import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { fastifyCors } from '@fastify/cors'
import ScalarApiReference from '@scalar/fastify-api-reference'
import { listWebhooks } from './routes/list-webhooks'
import { env } from './env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETED', 'OPTIONS'],
  // credentials: true,
})

//criação da documentação
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Webhook Inspector Api',
      description: 'Api for capturing and inpecting webhook requests',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

//para acessar a documentação
app.register(ScalarApiReference, {
  routePrefix: '/docs',
})

app.register(listWebhooks)

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log('🔥 HTTP server runnning on http://localhost:3333!')
  console.log('📚 Docs available at http://localhost:3333/docs')
})
