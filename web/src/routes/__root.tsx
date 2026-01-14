import { createRootRoute, Outlet } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Group, Panel, Separator } from 'react-resizable-panels'
import { Sidebar } from '../components/sidebar'

const queryClient = new QueryClient()

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <div className="h-screen bg-zinc-900">
      <Group>
        <Panel defaultSize={400} minSize={270} maxSize={1000}>
          <Sidebar />
        </Panel>

        <Separator className="w-px bg-zinc-700 hover:bg-zinc-600 transition-colors duration-150" />

        <Panel>
          <Outlet />
        </Panel>
      </Group>
    </div>
  </QueryClientProvider>
)

export const Route = createRootRoute({ component: RootLayout })