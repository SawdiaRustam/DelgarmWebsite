import Link from 'next/link'
import React from 'react'
import LoginDetails from '../src/components/elements/LoginDetails'

const login = () => {
  return (
    <>
    <div className='py-10 text-right pr-10'>
        <Link href={"./"}><a href='./'><h1>بازگشت</h1></a></Link>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 my-10 mx-16 gap-10'>
      <div>
        <LoginDetails/>
      </div>
      <div className='mt-20 hidden md:block'>
        <img src='./images/login.svg'/>
      </div>
    </div>
    <div>
        <img src='./images/wave.svg'/>
    </div>
    </>
  )
}

export default login