import React from 'react'

const Details = () => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 mx-10 gap-10'>
        <div className='text-right px-10 lg:mt-20'>
        <h1 className='text-gray-800 font-bold pb-5'>توضیحات</h1>
        <p className='py-3 text-gray-700 font-semibold'> لوریم ایپسم متن ساختگی با تولید ساختگی نامفهوم برای تولید صنعت چاپ در بخش گرافیک دیزاین است.</p>
        <p className='py-3 text-gray-700 font-semibold'> لوریم ایپسم متن ساختگی با تولید ساختگی نامفهوم برای تولید صنعت چاپ در بخش گرافیک دیزاین است.</p>

        <p className='py-3 text-gray-700 font-semibold'> لوریم ایپسم متن ساختگی با تولید ساختگی نامفهوم برای تولید صنعت چاپ در بخش گرافیک دیزاین است.</p>
        <div className='flex justify-end gap-5 lg:gap-16'>
        <div className='flex  gap-3'>
                <div className=' w-5 h-5  md:w-8 md:h-8 bg-red-600 rounded-full'></div>
                <div className='w-5 h-5 md:w-8 md:h-8 bg-green-600 rounded-full'></div>
                <div className=' w-5 h-5 md:w-8 md:h-8 bg-yellow-600 rounded-full'></div>
                <div className=' w-5 h-5 md:w-8 md:h-8 bg-blue-600 rounded-full'></div>
                <div className=' w-5 h-5 md:w-8 md:h-8 bg-pink-600 rounded-full'></div>
            </div>
            <button className='text-gray-800 px-5 py-1 rounded-md hover:bg-slate-500 font-bold bg-slate-400'>انتخاب رنگ</button>
           
        </div>
        <div className='flex justify-end gap-16 my-3'>
               <h1 className='w-20 bg-slate-400 text-gray-800 font-bold rounded text-center'> 500$</h1>
            <button className='text-gray-800 px-5 py-1 rounded-md hover:bg-slate-500 font-bold bg-slate-400'> قیمت لباس</button>
           
        </div>
        <button className='w-full bg-blue-500 rounded py-1 text-white font-bold hover:bg-blue-400'>سفارش</button>
        </div>
        <div className='lg:mr-20'>
            <h1 className='text-gray-800 font-bold text-xl pb-10 text-right'>جزییات محصول </h1>
            <img className='float-right' src='./images/c.png'/>
        </div>

    </div>
  )
}

export default Details