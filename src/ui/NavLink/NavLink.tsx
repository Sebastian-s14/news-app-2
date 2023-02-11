import { NavLink as NavLinkRouter } from 'react-router-dom'

import './NavLink.scss'

interface NavLinkProps {
  to: string
  name: string
}

export const NavLink = ({ to, name }: NavLinkProps) => {
  return (
    <NavLinkRouter
      to={to}
      className="nav-link"
      // className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {name}
    </NavLinkRouter>
  )
}
