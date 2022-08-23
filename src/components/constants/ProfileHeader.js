import Link from 'next/link'
import React from 'react'

const ProfileHeader = () => {
  return (
    <div className='px-10 pt-2 flex justify-between rounded bg-gray-50 shadow-xl w-full'>
    <div className='relative'>
        <img src='./images/Ellipse.png'className=' w-20 md:w-28 rounded-full mt-3'/>
        <img src='./images/edit.png' className='absolute top-5 md:top-10 left-3 md:left-10 ' />

    </div>
    <div className='flex gap-5 py-10'>
        <Link href={"./"}><a href='./' className='text-gray-800 font-bold hover:text-blue-600'> صفحه اصلی </a></Link>
        <img src='./images/logo.png' className='w-16 h-10'/>
    </div>
</div>
  )
}

export default ProfileHeader