import React from 'react'
import { FOOTER_FIRST, FOOTER_SECOND } from '../../components/constants/FooterMenu'
import SocialIcon from '../../components/constants/SocialIcon';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-5 mx-5 md:mx-10 my-10 md:gap-10 border-t border-blue-400 pt-10'>
        <div className='flex flex-col md:flex-row justify-start'>
        <img className='w-12 h-12 md:w-20 md:h-20 ' src='./images/logo.png'/>
        <div className='md:hidden'>
            <SocialIcon/>
        </div>
        </div>
        <div className='hidden md:block'>
            <SocialIcon/>
        </div>
        <div className='md:flex flex-col justify-center items-center cursor-pointer text-gray-800 space-y-5 hidden '>
            <h1 className='pb-7 hover:text-blue-600'>شماره تماس </h1>
            <h1 className='hover:text-blue-600'> ۰۰۹۳۷۹۹۳۴۵۳۸</h1>
        </div>
        <div className='flex flex-col justify-center items-center text-gray-800 '>
            {FOOTER_SECOND.map((menu)=>{
                return(
                <Link href={menu.url} key={menu.url}>
                    <a href={menu.url} className="pb-3 hover:text-blue-600">{menu.title}</a>
                </Link>
                )
            })}
            <div className='flex flex-col justify-center items-center cursor-pointer pt-3 text-gray-800  md:hidden '>
            <h1 className='pb-2 hover:text-blue-600'>شماره تماس </h1>
            <h1 className='hover:text-blue-600'> ۰۰۹۳۷۹۹۳۴۵۳۸</h1>
        </div>
        </div>
        <div className='flex flex-col justify-center items-center text-gray-800'>
            {FOOTER_FIRST.map((menu)=>{
                return(
                <Link href={menu.url} key={menu.url}>
                    <a href={menu.url} className="pb-3 hover:text-blue-600">{menu.title}</a>
                </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Footer