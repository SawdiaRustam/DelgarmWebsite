import React from 'react'
import Layout from '../src/common/layout/Layout'
const design=() => {
  return (
    <Layout>
      <div className='flex flex-col justify-end items-end mx-10 my-10'>
        <h1 className='text-2xl px-10 text-gray-800 font-semibold'>طرح شما</h1>
        <p className='py-5 px-10  text-right'> به متن آزمایشی وبی معنی در صنعت چاپ و صفخع ارایی و طراحی گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه به شکل ظاهری و   به متن آزمایشی وبی معنی در صنعت چاپ و صفخع ارایی و طراحی گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه به شکل ظاهری و کلی طرح سفارش گرفته شده کلی طرح سفارش گرفته شده است.</p>
      </div>
      <div className='flex flex-col text-right w-1/2 mx-auto my-10'>
        <label className='text-gray-800 font-bold py-5' >توضیحات </label>
        <textarea className='h-28 py-3 rounded text-right px-5 outline-none' placeholder='توضیحات خود را اینجا بنویسید' />
        <label className='text-gray-800 pt-5 pb-2 font-semibold'>عکس مدل</label>
        <div className=' border border-dotted border-blue-400 '>
          <p className='py-5 text-center cursor-pointer'> برای آپلود عکس اینجا کلیک کنید</p>

        </div>
        <button className='text-white rounded-md py-1 my-3 text-center bg-blue-500 hover:bg-blue-600'> ثبت طرح</button>
      </div>
    </Layout>
  )
}

export default design