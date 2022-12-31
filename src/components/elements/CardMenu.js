import React from 'react'
import Link from 'next/link';

import { card_menu } from '../constants/cardMenu';
const CardMenu=() => {

  return (
    <>
      {card_menu.map((data) => {
        return (

          <div key={data.id} className="bg-white rounded-xl border border-blue-500 flex flex-col items-center mx-5 justify-center">
            <div className='mx-3 my-2'>
              <img src={data.img} />
            </div>
            <div className='flex justify-between mx-10 gap-32 text-gray-800 font-bold '>
              <h1>{data.price}</h1>
              <h1>{data.name}</h1>
            </div>
            <div>
              <Link href={"./details"}><a href='./details'>
                <button className='buttonBackground hover:text-gray-800 px-5  py-1  text-sm my-3 text-white rounded-md'> جزییات بیشتر</button>
              </a></Link>
            </div>
          </div>

        )
      })}
    </>
  )
}

export default CardMenu