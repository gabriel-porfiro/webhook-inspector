import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { webhooks } from '@/db/schema'
import { db } from '@/db'
import { inArray } from 'drizzle-orm'
import { generateText } from 'ai' 
import { google } from '@ai-sdk/google';

export const generateHandler: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/api/generate',
    {
      schema: {
        summary: 'Generate a TypeScript handler ',
        tags: ['Webhooks'], 
        body: z.object({ 
          webhookIds: z.array(z.string()),
        }), 
        response: {
          201: z.object({
            code: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { webhookIds } = request.body
      
      const result = await db
        .select({ body: webhooks.body })
        .from(webhooks)
        .where(inArray(webhooks.id, webhookIds))

      const webhooksBodies = result.map(webhook => webhook.body).join('\n\n')

      const { text } = await generateText({
        model: google('gemini-2.5-flash'),
        prompt: `
          You are a senior TypeScript backend engineer.

          I will provide you with the raw JSON bodies of multiple webhook events from different services.

          Your task is to generate a single TypeScript webhook handler that:

          1. Uses Zod to validate and parse each possible webhook payload.
          2. Defines one Zod schema per event type.
          3. Infers TypeScript types from the schemas.
          4. Implements a main handleWebhook function that:
            - Receives the raw request body as unknown
            - Detects which event type it corresponds to
            - Validates it using the correct Zod schema
            - Dispatches the event to a specific handler function for that event
          5. Creates one handler function per event type (e.g. handleUserCreated, handlePaymentSucceeded, etc).
          6. Is fully typed, with no any.
          7. Has clear, readable and production-ready code.

          Additional requirements:
          - Prefer discriminated unions if possible.
          - If the webhook does not contain an explicit event type field, infer the event type based on the shape of the payload.
          - Throw meaningful errors when validation fails or the event is unknown.
          - Keep the code framework-agnostic (no Express/Fastify specific code).
          - Use modern TypeScript syntax.
          - Return only the code and do not return \`\`\`typescript or any other markdown symbols, do not include any introduction or text before or after the code

          Here are the webhook event JSON bodies:
          """
          ${webhooksBodies}
          """
        `.trim(),
      });

      return reply.status(201).send({ code: text })
    },
  )
}
