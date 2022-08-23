import React from 'react'
import Layout from '../src/common/layout/Layout'

const order = () => {
  return (
    <Layout>
             <div className='flex flex-col justify-end items-end mx-10 my-10'>
        <h1 className='text-2xl px-10 text-gray-800 font-semibold'>سفارش شما</h1>
        <p className='py-5 px-10  text-right'> به متن آزمایشی وبی معنی در صنعت چاپ و صفخع ارایی و طراحی گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه به شکل ظاهری و   به متن آزمایشی وبی معنی در صنعت چاپ و صفخع ارایی و طراحی گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه به شکل ظاهری و کلی طرح سفارش گرفته شده کلی طرح سفارش گرفته شده است.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 my-10 lg:mx-16 mx-10 lg:gap-10 gap-5'>
        <div>
            <form className='flex flex-col space-y-3 text-right'>
                <label>اندازه آستین</label>
                <input type={"text"} className=" rounded-md py-2 px-5 outline-none"/>
                <label>اندازه بغل</label>
                <input type={"text"} className=" rounded-md py-2 px-5 outline-none"/>
                <label>قد پیراهن </label>
                <input type={"text"} className=" rounded-md py-2 px-5 outline-none"/>
            </form>
        </div>
        <div>
            <form className='flex flex-col space-y-3 text-right'>
                <label>اندازه شانه</label>
                <input type={"text"} className=" rounded-md py-2 px-5 outline-none"/>
                <label>اندازه کمر</label>
                <input type={"text"} className=" rounded-md py-2 px-5 outline-none"/>
                <label>قدشلوار  </label>
                <input type={"text"} className=" rounded-md py-2 px-5 outline-none"/>
                <label>جزییات بیشتر  </label>
                <input type={"text"} className=" rounded-md py-2 px-5 outline-none"/>
            </form>
        </div>
        
      </div>
      <div className='text-center'>
      <button className='bg-blue-500 hover:bg-blue-600 rounded-md py-1 w-1/3 text-center text-white font-bold'>ثبت سفارش</button>
      </div>
    </Layout>
  )
}

export default order