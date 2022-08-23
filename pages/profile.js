import Link from 'next/link'
import React from 'react'
import ProfileHeader from '../src/components/constants/ProfileHeader'
import ProfileSidebar from '../src/components/constants/ProfileSidebar'
import ProfileEdit from '../src/components/elements/ProfileEdit'

const profile = () => {
  return (
    <>
<ProfileHeader/>
    <div className='flex justify-between bg-white'>
        <div className='w-full'>
           <ProfileEdit/>
        </div>
        <div className=' text-right'>
            <ProfileSidebar/> 
        </div>
    </div>
    </>
  )
}

export default profile