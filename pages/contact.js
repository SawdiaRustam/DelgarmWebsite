import React from 'react'
import Layout from '../src/common/layout/Layout'
import Connect from '../src/components/pages/home/Connect'
const contact = () => {
  return (
   <Layout>
    <div className='relative text-center'>
        <img className='rounded shadow-lg' src='./images/contact.png'/>
        <h1 className='text-white text-3xl md:text-5xl font-bold absolute top-1/2 lg:-ml-20 left-32 md:left-1/2'>ارتباط با ما </h1>
    </div>
     <div>
        <Connect/>
     </div>
   </Layout>
  )
}

export default contact