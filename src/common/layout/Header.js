import Link from 'next/link';
import React, { useState } from 'react';
import HeaderMenu from '../../components/elements/HeaderMenu';
import MobileNav from './MobileNav';

const Header = () => {
  const [mobileNav, setShowMobileNav] = useState(false)
  const position = mobileNav ? "translate-x-0" : "-translate-x-full";
  return (
    <div className='flex justify-around my-10 md:mx-10 mx-3 '>
         <div className='lg:hidden '>
        <button className=' mx-4 text-3xl '
        onClick={() => setShowMobileNav(!mobileNav)}> &#9776;</button> 
         <div className={`transition-all duration-700 transform ${position}`}>
        {mobileNav && <MobileNav />}
      </div>
       
      </div>
        <div >
      
       <Link href={"./signup"}><a href='./signup'>  <button className='border border-blue-500 rounded-full px-5 md:px-10 py-1 text-gray-800 font-bold hover:bg-blue-500 hover:text-white'> ثبت نام </button> 
       </a></Link>
       <Link href={"./login"}><a href='./login'><button className='bg-blue-500 rounded-full px-5 md:px-10 py-1 text-white font-bold mx-3 hover:bg-slate-100 hover:text-gray-800'> ورود</button>
        </a></Link> 
        </div>
        <div className='hidden lg:block'>
            <HeaderMenu/>
            
        </div>
        <div>
            <img className=' w-10 md:w-16' src='./images/logo.png'/>
        </div>
      
    </div>
  )
}

export default Header