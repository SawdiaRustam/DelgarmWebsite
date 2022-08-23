import React from 'react'
import { HEADER } from '../constants/HeaderMenu'
import Link from 'next/link';
const HeaderMenu = () => {
  return (
    <div className='flex justify-between   '>
     {HEADER.map((header)=>{
        return(
            <Link href={header.url} key= {header.id}>
            <a href={header.url} className='text-gray-800 font-semibold px-4
             hover:text-blue-500' > {header.name}</a>
        </Link>
        )
     })}

    </div>
  )
}

export default HeaderMenu