import React from 'react'
import { CARD_DATA } from '../constants/card'
import Link from 'next/link';

const Crad=() => {
  return (
    <>

      {CARD_DATA.map((data) => {
        return (
          <div key={data.id} className="bg-white rounded-xl border border-blue-500 flex flex-col mx-5 items-center justify-center">
            <div className='mx-3 my-2'>
              <img src={data.img} />
            </div>
            <div className='flex justify-between gap-10 mx-10 text-gray-800 font-bold '>
              <h1>{data.price}</h1>
              <h1>{data.name}</h1>
            </div>
            <div>
              <Link href={"./details"}><a href='./details'>
                <button className='buttonBackground text-sm md:text-base hover:text-gray-800 px-5 py-1  my-3 text-white rounded-md'> جزییات بیشتر</button>
              </a></Link>
            </div>
          </div>
        )
      })}
      <div></div>
    </>
  )
}

export default Crad