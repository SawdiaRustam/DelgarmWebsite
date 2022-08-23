import React from 'react'
import ProfileSidebar from '../src/components/constants/ProfileSidebar'
import Simpleprofile from '../src/components/constants/Simpleprofile'
import OrderHistoryTable from '../src/components/elements/OrderHistoryTable'

const orderHistory = () => {
  return (
    <>
    <Simpleprofile/>
    <div className='flex justify-between bg-white'>
        <div className='w-full'>
           <OrderHistoryTable/>
        </div>
        <div className=' text-right'>
            <ProfileSidebar/> 
        </div>
    </div>
    </>
  )
}

export default orderHistory