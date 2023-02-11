import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../'

import './Layout.scss'

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
