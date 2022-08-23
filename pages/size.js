import React from 'react'
import ProfileSidebar from '../src/components/constants/ProfileSidebar'
import Simpleprofile from '../src/components/constants/Simpleprofile'
import Sizes from '../src/components/elements/Sizes'

const size = () => {
  return (
    <>
    <Simpleprofile/>
    <div className='flex justify-between bg-white'>
        <div className='w-full'>
           <Sizes/>
        </div>
        <div className=' text-right'>
            <ProfileSidebar/> 
        </div>
    </div>
    </>
  )
}

export default size