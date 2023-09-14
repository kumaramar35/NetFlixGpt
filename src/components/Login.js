import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div> 
    <Header />
      <div className='absolute '>
      <img className='z-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
      </div>

      <form className='absolute w-1/4 p-12 bg-black  my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75' >
          <h1 className='font-bold text-3xl py-4'>Sign In</h1>
          <input className='my-4 p-2 w-full rounded-md bg-gray-700' type="text" placeholder='Email Address' />
          <input className='my-4 p-2 w-full rounded-md bg-gray-700' type="text" placeholder='Password' />
          <button className='p-2 my-6 bg-red-700 w-full rounded-md '>
            Sign In
          </button>
          <p>New to Netflix? Sign Up now</p>
      </form>
    </div>
  )
}

export default Login
