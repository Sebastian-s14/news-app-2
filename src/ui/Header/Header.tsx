import { useState } from 'react'
import { useAuthStore } from '../../hooks'
import { signInWithGoogle, signOutGoogle } from '../../services'
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
  // {
  //   name: 'Favoritos',
  //   to: '/',
  // },
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
  const { user, isAuthenticated } = useAuthStore()

  const [openModal, setOpenModal] = useState<boolean>(false)

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <header className="header">
        <nav>
          <ul></ul>
          <ul className="header__links">
            {sections.map(({ name, to }) => (
              <NavLink key={name} name={name} to={to} />
            ))}
            {isAuthenticated && (
              <NavLink key="favoritos" name="Favoritos" to="/favoritos" />
            )}
          </ul>
          <ul>
            {!isAuthenticated ? (
              <button onClick={signInWithGoogle}>Login</button>
            ) : (
              <img
                src={user.photo}
                alt="user photo"
                style={{ maxHeight: 62 }}
                onClick={() => {
                  setOpenModal(true)
                }}
              />
            )}
          </ul>
        </nav>
      </header>
      <dialog open={openModal}>
        <article>
          <header>
            <button
              aria-label="Close"
              className="close outline"
              onClick={closeModal}
            />
            ¿Estas seguro de cerrar sesión?
          </header>
          <p>
            <button
              onClick={() => {
                signOutGoogle()
                setOpenModal(false)
              }}
            >
              Sí
            </button>
            <button className="outline" onClick={closeModal}>
              No
            </button>
          </p>
        </article>
      </dialog>
    </>
  )
}
