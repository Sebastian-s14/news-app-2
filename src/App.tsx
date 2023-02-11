import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { useValidateAuthentication } from './hooks'
import queryClient from './queryClient'
import { router } from './router'

import './firebase'

function App() {
  useValidateAuthentication()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
