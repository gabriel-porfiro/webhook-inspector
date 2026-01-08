import { createFileRoute } from '@tanstack/react-router'
import { Panel, Group, Separator } from 'react-resizable-panels'
import { Sidebar } from '../components/sidebar'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='h-screen bg-zinc-900'>
      <Group>
        <Panel defaultSize={400} minSize={270} maxSize={1000}>
          <Sidebar />
        </Panel>

        <Separator className="w-px bg-zinc-700 hover:bg-zinc-600 transition-colors duration-150"/>

        <Panel> 
          Conteudo
        </Panel>
      </Group>
    </div>
  )
}
