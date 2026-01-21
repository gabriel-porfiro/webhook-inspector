import { useState } from 'react'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { WebhooksListItem } from './webhooks-list-item'
import { webhookListSchema } from '../http/schemas/webhooks'
import { Loader2, Wand2 } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function WebhooksList() {
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver>(null)

  const [checkedWebhooksIds, setCheckedWebhooksIds] = useState<string[]>([])
  const [generateHandlerCode, setGenerateHandlerCode] = useState<string | null>(null)

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['webhooks'],
      queryFn: async ({ pageParam }) => {
        const url = new URL('http://localhost:3333/api/webhooks')

        if (pageParam) {
          url.searchParams.set('cursor', pageParam) 

        }
         
        const response = await fetch(url)
        const data = await response.json()

        return webhookListSchema.parse(data)
      },
      getNextPageParam: (lastPage) => {
        return lastPage.nextCursor ?? undefined
      },
      initialPageParam: undefined as string | undefined,
    })

  const webhooks = data.pages.flatMap((page) => page.webhooks)

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    //API da internet que permite observar quando um objeto aparece em tela
    observerRef.current = new IntersectionObserver(entries => {
        const entry = entries[0]

        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          //Se o elemento está em tela e tem proxima pagina e ainda não está carregando a prox pagina
          fetchNextPage()
        }
      },
      {
        threshold: 0.1, //
      },
    )

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  function handleCheckWebhook(checkedWebhookId: string) {
    if (checkedWebhooksIds.includes(checkedWebhookId)) {
      setCheckedWebhooksIds(state => {
        return state.filter(webhookId => webhookId !== checkedWebhookId)
      })
    } else {
      setCheckedWebhooksIds(state => [...state, checkedWebhookId])
    }
  }

  async function handleGenerateHandler() {
    const response = await fetch('http://localhost:3333/api/generate', {
      method: 'POST',
      body: JSON.stringify({ webhookIds: checkedWebhooksIds }),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    type GenerateResponse = {code: string}

    const data: GenerateResponse = await response.json()    

    setGenerateHandlerCode(data.code)
  }

  const hasAnyWebhookChecked = checkedWebhooksIds.length > 0 
  
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-1 p-2">
        
        <button 
          disabled={!hasAnyWebhookChecked} 
          className='bg-indigo-400 mb-3 text-white w-full rounded-lg flex items-center justify-center gap-3 font-medium text-sm p-2 disabled:opacity-50'
          onClick={() => handleGenerateHandler()}
        >
          <Wand2 className='size-4' />
          Gerar Handler
        </button>

        {webhooks.map((webhook) => {
          return (
            <WebhooksListItem 
              key={webhook.id} 
              webhook={webhook} 
              onWebhookChecked={handleCheckWebhook} 
              isWebhookChecked={checkedWebhooksIds.includes(webhook.id)}        
              />
          )
        })}
      </div>

      {hasNextPage && (
        <div className="p-2" ref={loadMoreRef}>
          {isFetchingNextPage && (
            <div className="flex items-center justify-center py-2">
              <Loader2 className="size-5 animate-spin text-zinc-500" />
            </div>
          )}
        </div>
      )}

    </div>
  )
}