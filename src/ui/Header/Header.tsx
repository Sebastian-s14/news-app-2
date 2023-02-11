import { NavLink } from '../NavLink'

import './Header.scss'

interface ISections {
  name: string
  to: string
}
// 'Inicio', 'Deportes', 'Política', 'Música', 'Tecnología'
const sections: ISections[] = [
  {
    name: 'Inicio',
    to: '/',
  },
  {
    name: 'Deportes',
    to: '/',
  },
  {
    name: 'Política',
    to: '/',
  },
  {
    name: 'Tecnología',
    to: '/',
  },
]

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__links">
          {sections.map(({ name, to }) => (
            <NavLink key={name} name={name} to={to} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
