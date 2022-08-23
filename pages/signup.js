import Link from 'next/link';
import React from 'react'
import SignupDetails from '../src/components/elements/SignupDetails'

const signup = () => {
  return (
    <>
    <div className='pt-10 text-right pr-10'>
        <Link href={"./"}><a href='./'><h1>بازگشت</h1></a></Link>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 my-10 mx-16 gap-10'>
      <div className='mt-10'>
        <SignupDetails/>
      </div>
      <div className='mt-10 hidden md:block'>
        <img src='./images/signup.svg'/>
      </div>
    </div>
    <div>
        <img src='./images/wave.svg'/>
    </div>
    </>
  )
}

export default signup;