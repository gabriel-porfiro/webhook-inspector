import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { WebhookDetails } from '../components/webhook-details'

export const Route = createFileRoute('/webhooks/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams() //Armazena o param passado dentro da tag link em webhooks-list-item

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <WebhookDetails id={id} />
    </Suspense>
  )
}