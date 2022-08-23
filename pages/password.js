import React from 'react'
import ProfileSidebar from '../src/components/constants/ProfileSidebar'
import Simpleprofile from '../src/components/constants/Simpleprofile'

const password = () => {
  return (
    <>
    <Simpleprofile/>
    <div className='flex  justify-between bg-white '>
        <div className='w-full'>
           <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center py-10 font-bold text-xl text-gray-800'>تغییر رمز عبور</h1>
            <div className='flex flex-col md:flex-row gap-10'>
            <div className='flex flex-col text-right'>
                <label>تایید رمز عبور </label>
                <input type={"text"} className ="rounded bg-slate-100 py-1 "/>
                </div>
                <div className='flex flex-col text-right'>
                <label> رمز عبور جدید</label>
                <input type={"text"} className ="rounded bg-slate-100 py-1 "/>
                </div>
               
            </div>
           </div>
        </div>
        <div className=' text-right'>
            <ProfileSidebar/> 
        </div>
    </div>
    </>
  )
}

export default password