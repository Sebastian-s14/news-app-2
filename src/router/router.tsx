import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../ui'
import { Home, NewsDetail, NotFound } from '../pages'
// import { loader as newsLoader } from '../pages/News'
// import queryClient from '../queryClient'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        // loader: newsLoader(queryClient),
        element: <Home />,
        // errorElement: <NotFound />,
      },
      {
        path: '/news/:slug',
        element: <NewsDetail />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
])
