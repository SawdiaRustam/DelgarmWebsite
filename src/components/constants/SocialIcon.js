import React from 'react'
import Link from 'next/link'
import { ICON } from './FooterMenu'
const SocialIcon = () => {
  return (
    <div className='flex justify-center items-center gap-1 md:gap-5 mt-5'>
     {ICON.map((icon)=>{
        return(
            <Link key={icon.url} href={icon.url}>
                <a href={icon.url} className=" flex justify-center items-center">
                    <img src={icon.img} className=" border bg-blue-50 border-blue-400 rounded-full py-2 px-3  w-12 hover:bg-blue-500"/>
                </a>
            </Link>
        )
     })}
        
    </div>
  )
}

export default SocialIcon