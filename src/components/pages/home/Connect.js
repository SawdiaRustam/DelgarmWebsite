import React from 'react'

const Connect=() => {
  return (
    <>
      <div className='text-center my-10'>
        <h1 className='text-2xl text-gray-800 font-bold'>ارتباط با ما</h1>
        <h1 className='text-gray-800 pt-20 '> برای ارتباط گرفتن با ما فورم زیر را پر کنید</h1>
      </div>
      <div>
        <form className='flex flex-col  justify-end items-end mr-10 md:mr-32 lg:mr-40 '>
          <label>نام</label>
          <input className=' w-10/12 md:w-1/2 py-2 rounded-md px-5 text-right my-1' type={"text"} placeholder="نام خود را وارد کنید" />
          <label>ایمیل</label>
          <input className='w-10/12 md:w-1/2 py-2 rounded-md px-5 text-right my-1' type={"text"} placeholder="ایمیل خود را وارد کنید" />
          <label>پیام </label>
          <textarea className='h-44 w-10/12 md:w-1/2 py-2 rounded-md px-5 text-right my-1' type={"text"} placeholder="پیام خود را وارد کنید" />
        </form>
        <div className='text-center lg:ml-64'>
          <button className='bg-blue-500 hover:bg-blue-600 w-1/3 py-1 rounded-md text-center text-white my-3'>ارسال پیام</button>
        </div>
      </div>
    </>
  )

}

export default Connect