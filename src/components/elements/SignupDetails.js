import Link from 'next/link'
import React from 'react'

const signupDetails = () => {
  return (
    <> 
       <div className='flex gap-5' >
       <div className='flex flex-col text-right'>
       <h1 className='font-bold text-lg text-gray-800'>خوش آمدید</h1>
        <p>برای استفاده از امکانات سیستم ثبت نام کنید</p>
       </div>
        <img src='./images/logo.png' className='w-16'/>
         </div>

         <div className='my-10 text-right'>
            <form className='flex flex-col space-y-5'>
                <label>ایمیل</label>
                <input type={"text"} className="rounded-md text-right py-2 px-5 bg-slate-300 text-gray-800" placeholder='ایمیل خود را وارد کنید' />
                <label>رمز عبور</label>
                <input type={"text"} className="rounded-md text-right py-2 px-5 bg-slate-300 text-gray-800" placeholder='رمز عبور خود را وارد کنید' />
                <label> تکرار رمز عبور</label>
                <input type={"text"} className="rounded-md text-right py-2 px-5 bg-slate-300 text-gray-800" placeholder='رمز عبور خود را وارد کنید ' />
                <div className='flex justify-between'>
                   <div>
                   <input type={'checkbox'} /> <label> مرا به خاطر داشته باش</label>
                   </div>
                    <div>
                        <p className='text-blue-500 font-bold underline cursor-pointer'> رمز عبور خود را فراموش کرده ام</p>
                    </div>
                </div>
            </form>
            
         </div>
        <div>
        <button type='submit' className='border border-blue-400 hover:bg-blue-600 text-gray-800 my-3 font-bold rounded-md w-full py-2'>ثبت مکان</button>
        <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md w-full py-2'>ورود</button>
        <h1 className='text-right text-gray-800 font-semibold py-3 cursor-pointer'> از قبل حساب دارید؟ <span className='text-blue-500 underline'> ورود </span></h1>
        </div>
        <div className='my-3 text-center'>
            <h1 className='font-bold text-gray-800'> <span className='text-gray-400'>--------------------- </span> یا <span className='text-gray-400'>
            --------------------  </span></h1>

            <div className='flex justify-center gap-10'>
              <Link href={"www/google.com"}><a href='www.google.com'><img className='px-10 py-1 bg-gray-300 rounded-full' src='./images/Frame.png'/>
                </a></Link>  

              <Link href={"www.facebook.com"}><a href='www.facebook.com'>
              <img className='px-10 py-2 bg-gray-300 rounded-full' src='./images/fb.png'/>
                </a></Link>
            </div>
        </div>
</>

  )
}

export default signupDetails