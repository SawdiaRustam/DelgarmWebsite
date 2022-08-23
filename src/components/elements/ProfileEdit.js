import React from 'react'

const ProfileEdit = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-center text-gray-800 font-bold text-xl'>سلام فاطمه عزیز! خوش آمدی به حساب کاربری</h1>
        <div className='grid grdi-cols-1 md:grid-cols-2 mx-10 my-5 gap-10 text-right'>
        <div className='flex flex-col gap-5'>
                <label> ایمیل </label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none  text-right" placeholder='fatema@gmail.com'/>

                <label>آدرس </label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none  text-right" placeholder='استرالیا سیدنی'/>

                <label> شهر  </label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none  text-right" placeholder='سیدنی'/>

                <label> کد پستی  </label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none text-gray-800 text-right" placeholder='۲۳۴۴۳'/>
            </div>
            <div className='flex flex-col gap-5'>
                <label>نام</label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none  text-right" placeholder='فاطمه'/>

                <label>شماره مبایل</label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none  text-right" placeholder='۰۰۶۱۸۳۸۳۶۴۸۳۹'/>

                <label> کشور </label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none  text-right" placeholder='استرالیا'/>

                <label> خیابان </label>
                <input type={"text"} className="rounded py-1 bg-slate-300 px-5 outline-none  text-right" placeholder='سیدنی'/>
            </div>
           
        </div>
        <div className='flex justify-center my-10 gap-10'>
            <button className='px-10 py-1 text-white font-bold bg-blue-500 rounded-md hover:bg-blue-600'>ذخیره</button>

            <button className='px-10 py-1 text-blue-500 border border-blue-600 hover:bg-blue-500 hover:text-white rounded-md font-bold'> ویرایش اطلاعات </button>
        </div>
    </div>
  )
}

export default ProfileEdit