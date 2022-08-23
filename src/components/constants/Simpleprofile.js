import Link from 'next/link'
import React from 'react'

const Simpleprofile = () => {
  return (
    <div className='px-10 pt-2 flex justify-between  rounded bg-gray-50 shadow-xl'>
    <div>
        <img src='./images/Ellipse.png'className='w-20 rounded-full '/>
        

    </div>
    <div className='flex gap-5 py-5'>
        <Link href={"./"}><a href='./' className='text-gray-800 font-bold hover:text-blue-600'> صفحه اصلی </a></Link>
        <img src='./images/logo.png' className='w-16 h-10'/>
    </div>
</div>
  )
}

export default Simpleprofile