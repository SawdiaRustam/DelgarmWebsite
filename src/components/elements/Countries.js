import Link from 'next/link'
import React from 'react'

const Countries=() => {
    return (
        <div className='my-10 '>
            <h1 className='text-center text-gray-800 font-bold text-xl sm:text-2xl md:text-3xl'>
                نمایندگی های ما در کشور های مختلف
            </h1>
            <div className='flex flex-col md:flex-row gap-10 w-3/4 mx-auto justify-betwen my-10'>
                <div className='bg-white rounded-md border border-blue-500 mb-10 pb-5'>
                    <img src='./images/c1.png' />
                    <h1 className='py-3 text-center text-gray-800 font-bold text-lg'>انگلیس ، خیابان لندن</h1>
                    <div className='flex gap-10 justify-center'>
                        <Link href={"www.instagram.com"}><a><img className='w-8 lg:w-10' src='./images/instagram.png' /></a></Link>
                        <Link href={"www.telegram.com"}><a><img className='w-8 lg:w-10' src='./images/t.png' /></a></Link>
                    </div>

                </div>
                <div className='bg-white rounded-md border border-blue-500 mb-10 pb-5 '>
                    <img src='./images/c2.png' />
                    <h1 className='py-3 text-center text-gray-800 font-bold text-lg'>فرانسه ، خیابان پاریس</h1>
                    <div className='flex gap-10 justify-center'>
                        <Link href={"www.instagram.com"}><a><img className='w-8 lg:w-10' src='./images/instagram.png' /></a></Link>
                        <Link href={"www.telegram.com"}><a><img className='w-8 lg:w-10' src='./images/t.png' /></a></Link>
                    </div>

                </div>
                <div className='bg-white rounded-md border border-blue-500 mb-10 pb-5'>
                    <img src='./images/c3.png' />
                    <h1 className='py-3 text-center text-gray-800 font-bold text-lg'>استرالیا ، خیابان سیدنی</h1>
                    <div className='flex gap-10 justify-center'>
                        <Link href={"www.instagram.com"}><a><img className=' w-8 lg:w-10' src='./images/instagram.png' /></a></Link>
                        <Link href={"www.telegram.com"}><a><img className='  w-8 lg:w-10' src='./images/t.png' /></a></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Countries