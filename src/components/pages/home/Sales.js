import React from 'react'
import Crad from '../../elements/Crad'
import Newest_swipper from '../../elements/Newest_swipper';


const Sales = () => {
  return (
    <section className='bground mx-10 rounded'>
        <div className=' my-10'>
        <h1 className=' text-center text-gray-800 font-bold text-2xl'><span className='radius'>پرفروش ترین </span> ها </h1>
        </div>
        <div className='grid grid-cols-1 mx-20 gap-10 pb-20'>
            <Newest_swipper/>
        </div>
    </section>
  )
}

export default Sales;