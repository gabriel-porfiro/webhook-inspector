import { createFileRoute } from '@tanstack/react-router'
<<<<<<< HEAD
=======
import { SectionDataTable } from '../components/section-data-table'
import { SectionTitle } from '../components/section-title'
import { CodeBlock } from '../components/ui/code-block'
import { WebhookDetailHeader } from '../components/webhook-detail-header'
import { useSuspenseQuery } from '@tanstack/react-query'
import { webhookDetailsSchema } from '../http/schemas/webhook'
>>>>>>> 19455b1bf5a95027084472b9ae4cfd07b044380b
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 19455b1bf5a95027084472b9ae4cfd07b044380b
