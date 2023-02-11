import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

// const auth = getAuth()

export const signInWithGoogle = () => {
  const auth = getAuth()
  console.log('Login button clicked')
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      // The signed-in user info.
      const user = result.user
      // ...
      console.log(token)
      console.log(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
      console.log(errorCode)
      console.log(errorMessage)
      console.log(email)
      console.log(credential)
    })
}
export const signOutGoogle = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.')
    })
    .catch((error) => {
      console.log('error in signOut')
      console.log(error)
    })
}
