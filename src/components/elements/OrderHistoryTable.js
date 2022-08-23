import React from 'react'

const OrderHistoryTable = () => {
  return (
    <div>
        <div className='flex justify-end mx-28 my-10'>
            <input type={"text"} placeholder="جستجو کنید" className='px-5 py-1 bg-slate-100 text-right rounded-xl'/>
        </div>
        <div className='flex flex-col overflow-x-scroll'>
            <table className='border my-3 cursor-pointer table-auto '>
                <thead className='bg-slate-100'>
                    <th className='px-10'>وضعیت سفارش جدید</th>
                    <th className='px-10' >تاریخ دریافت محصول</th>
                    <th className='px-10'>تاریخ سفارش</th>
                    <th className='px-10'>قیمت محصول</th>
                    <th className='px-10'>نام محصول</th>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-white text-center py-2  bg-green-600 rounded'>دریافت شده</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>500$</td>
                        <td className='px-16 py-2'>لباس</td>
                        
                    </tr>
                    <tr className='border' >
                        <td className='text-white text-center py-2  bg-yellow-400 rounded'>در حال بررسی</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>500$</td>
                        <td className='px-16 py-2'>لباس</td>
                        
                    </tr>
                    <tr >
                        <td className='text-white text-center py-2 bg-green-600 rounded'>دریافت شده</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>500$</td>
                        <td className='px-16 py-2'>لباس</td>
                        
                    </tr>
                    <tr className='border' >
                        <td className='text-white text-center py-2 bg-red-600 rounded'>رد شده</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>500$</td>
                        <td className='px-16 py-2'>لباس</td>
                        
                    </tr>
                    <tr >
                        <td className='text-white text-center py-2 bg-green-600 rounded'>دریافت شده</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>۲.۲۲/.۲/.۴</td>
                        <td className='px-16 py-2'>500$</td>
                        <td className='px-16 py-2'>لباس</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderHistoryTable