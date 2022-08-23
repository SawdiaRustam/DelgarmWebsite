import React from 'react'
import Layout from '../src/common/layout/Layout'
import Countries from '../src/components/elements/Countries'
import Golas from '../src/components/elements/Golas'
import Team from '../src/components/elements/Team'
const about = () => {
  return (
    <Layout>
      <div className='bg-white'>
        <div className='relative'>
            <img src='./images/about.png'/>
            <h1 className='text-4xl lg:text-6xl shadow-xl text-white font-bold absolute top-1/3 md:top-1/2 lg:-ml-20 left-28 sm:left-44 md:left-1/2'>در باره ما</h1>
        </div>
       <Team/>
       <Golas/>
     <Countries/>
     </div>
    </Layout>
  )
}

export default about