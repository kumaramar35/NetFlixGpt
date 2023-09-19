import React, { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase'

const Login = () => {
  const [isSignInOrSignUp, setIsSignInOrSignUp] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)

  // toggle between the SignIn or SignUp
  const toggleSignInOrSignUp = () => {
    setIsSignInOrSignUp(!isSignInOrSignUp)
  }

  const handleForm = () => {
    // using useRef
    const message = validation(email.current.value, password.current.value)
    setErrorMessage(message);
    // if validation failed then return
    if (message) return

    //if message is null then SignIn or SignUp
    //SignUp
    if (!isSignInOrSignUp) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
          // ..
        });
    }
    //signIn
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +" - " + errorMessage)
        });
    }
  }
  return (
    <div>
      <Header />
      <div className='absolute ' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute w-1/4 p-12 bg-black  my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75' >

        {/* by default it is sign in so isSignInOrSignUp is true */}
        <h1 className='font-bold text-3xl py-4'>{isSignInOrSignUp ? "Sign In" : "Sign Up"}</h1>

        {/* if sing in then this field is not display */}
        {!isSignInOrSignUp && <input className='my-4 p-2 w-full rounded-md bg-gray-700' type="text" placeholder='Full Name' />}

        <input ref={email} className='my-4 p-2 w-full rounded-md bg-gray-700' type="text" placeholder='Email Address' />
        <input ref={password} className='my-4 p-2 w-full rounded-md bg-gray-700' type="password" placeholder='Password' />

        <button className='p-2 my-6 bg-red-700 w-full rounded-md ' onClick={handleForm}>
          {isSignInOrSignUp ? "Sign In" : "Sign Up"}
        </button>

        {/* will show error message if validation failed */}
        <p className='font-bold text-2xl text-red-600 my-2' >{errorMessage}</p>

        {/* TO toggle between the Sign in and Sign up  according to isSignInOrSignUp will be true or false*/}
        <p onClick={toggleSignInOrSignUp} className='cursor-pointer'>{isSignInOrSignUp ? "New to Netflix? Sign Up now" : "Already have account Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
