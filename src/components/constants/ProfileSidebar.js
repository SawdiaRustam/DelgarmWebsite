import React from 'react'
import Link from 'next/link';
const ProfileSidebar = () => {
  return (
    <div className='flex flex-col justify-around px-10  h-screen bg-slate-100 shadow-xl rounded'>
        <div className='flex flex-col gap-5'>
           <Link href={""}><a href=''><h1 className='text-blue-500 font-bold '>پروفایل</h1></a></Link>
           <Link href={"./size"}><a href='./size'><h1 className='text-blue-500 font-bold '>  اندازه ها   </h1></a></Link>
        
           <Link href={"./orderHistory"}><a href='./orderHistory'><h1 className='text-blue-500 font-bold '>تاریخچه سفارش </h1></a></Link>
           <Link href={"./password"}><a href='./password'><h1 className='text-blue-500 font-bold '> تغییر رمز</h1></a></Link>
        </div>
        <div>
            <Link href={"./"}><a href='./'><h1 className='text-blue-500 font-bold'>خروج</h1></a></Link>
        </div>
    </div>
  )
}

export default ProfileSidebar