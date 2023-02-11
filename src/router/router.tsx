/* eslint-disable @typescript-eslint/promise-function-async */
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../ui'

const Home = lazy(() => import('../pages/Home'))
const NewsDetail = lazy(() => import('../pages/NewsDetail'))
const NotFound = lazy(() => import('../pages/NotFound'))
// import { Home, NewsDetail, NotFound } from '../pages'
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
