import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../'
import { Loader } from '../Loader'

import './Layout.scss'

export const Layout = () => {
  return (
    <div className="layout">
      <Suspense fallback={<Loader />}>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}
