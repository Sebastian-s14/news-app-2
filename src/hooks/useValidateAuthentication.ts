import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

import { useAuthStore } from './useAuthStore'

export const useValidateAuthentication = () => {
  const { setIsAuthenticated, setUser } = useAuthStore()
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // console.log(user.email)
        const uid = user.uid
        // console.log(uid)
        // ...
        // console.log('logueadoooo')
        setIsAuthenticated(true)
        // setIsLoading(false)
        setUser({
          id: user.uid,
          name: user.displayName ?? 'username',
          email: user.email ?? 'email',
          photo: user.photoURL ?? '',
        })
      } else {
        // User is signed out
        // ...
        // console.log('no logueado')
        setIsAuthenticated(false)
        // setIsLoading(false)
      }
    })
  }, [setIsAuthenticated, setUser])
}
