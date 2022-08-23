import React from 'react'
import Crad from '../../elements/Crad'

const Suggestion = () => {
  return (
    <section className='bground mx-10 rounded'>
        <div className=' my-10'>
        <h1 className=' text-center text-gray-800 font-bold text-2xl'><span className='radius'>پیشنهاد </span> ما </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10'>
            <Crad/>
        </div>
    </section>
  )
}

export default Suggestion