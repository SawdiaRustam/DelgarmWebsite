import React from 'react'
import Crad from '../elements/Crad'
const MoreProducts = () => {
  return (
    <div className='bground my-10'>
      <div className='text-center py-10 text-gray-800 font-bold text-lg'> محصولات مربوطه</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10'>
        <Crad/>
      </div>
    </div>
  )
}

export default MoreProducts