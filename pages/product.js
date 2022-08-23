import React, { useState } from 'react'
import Layout from '../src/common/layout/Layout';
import { card_menu } from '../src/components/constants/cardMenu';
import CardMenu from '../src/components/elements/CardMenu';
const product=() => {
  const [input, setInput]=useState(" ");



  let dataSearch=card_menu.filter(item => {
    if (input=="") {
      return item
    } else if (item.name.toLowerCase().includes(input.toLowerCase())) {
      return item
    }

  });

  return (
    <Layout>
      <div className='flex justify-center items-center flex-col space-y-5'>
        <h1 className='text-center text-3xl text-gray-800 font-semibold'>محصولات</h1>
        <div className='flex'>
          <button className='rounded-l-2xl bg-blue-500 hover:bg-blue-600 px-5 py-1 text-white font-semibold'>جستجو</button>
          <input type={"text"} value={input} onChange={(e) => setInput(e.target.value)} placeholder="جستجو کنید" className='text-right px-5 py-1 w-full rounded-r-2xl bg-white outline-none' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 my-10 gap-10'>
        <CardMenu />
      </div>
    </Layout>
  )
}

export default product