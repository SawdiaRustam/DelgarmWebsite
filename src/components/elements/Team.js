import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className='my-10'>
    <h1 className='text-center text-gray-800 font-bold text-3xl'>
        تیم ما
    </h1>
    <div className='flex flex-col md:flex-row gap-10 w-3/4 mx-auto justify-betwen my-10'>
        <div className='bg-white rounded-md contain overflow-hidden relative '>
            <img src='./images/nemat.png'/>
            <h1 className='py-3 text-center text-gray-800 font-bold text-lg'>نعمت الله حسینی</h1>
            <p className='text-gray-800 py-3 text-center'> Founder&CEO </p>
             <div className='caption'>
                <Link href={"./contact"}><a href='./contact'>
                    <button className='bg-blue-400 text-white font-bold py-1 px-10 hover:bg-blue-600 rounded-md my-56'>برقرار ارتباط</button>
                    </a></Link>
             </div>
        </div>
        <div className='bg-white rounded-md  contain relative overflow-hidden'>
            <img src='./images/boy.png'/>
            <h1 className='py-3 text-center text-gray-800 font-bold text-lg'>آصف صفری</h1>
            <p className='text-gray-800 py-3 text-center'> Founder&CTO </p>
            <div className='second'>
            <Link href={"./contact"}><a href='./contact'>
                    <button className='bg-gray-900 hover:bg-slate-200 hover:text-gray-900 text-white font-bold py-1 px-10 rounded-md my-56'>برقرار ارتباط</button>
                    </a></Link>
            </div>
             
        </div>
    </div>
</div>
  )
}

export default Team