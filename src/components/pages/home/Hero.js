import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col md:mx-20 md:justify-start justify-center'>
      <h1 className='text-3xl px-10 lg:text-5xl animation'> بهترین لباس های هزاره گی</h1>
      <h1 className='py-5 px-10 text-gray-800'> انواع لباس های مردانه، زنانه، پسرانه و دخترانه</h1>
    </div>
    <div className='  flex justify-center'>
         <div className=' mt-2 relative'>
          <img className=' w-full' src='./images/hero.png'/>
           <div className='absolute top-5 sm:top-16 md:top-1/3 text-center left-5 sm:left-10 md:left-20 lg:left-32'>
            <h1 className=' text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-5 text-white shadow-xl'>لورم ایپسوم متن ساختکی با تولید سادگی</h1>
            <h1 className='text-white md:font-bold px-5 pt-10'> چاپگرها و متون بلکه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</h1>
            
            <Link href={"./order"}><a href='./order'>
            <button className='bg-slate-500 rounded-full mt-3 md:mt-10 px-5 py-1 hover:bg-slate-400 text-white font-bold'>سفارش</button>
              </a></Link>
           </div>
         </div> 
      
        
    </div>
    </>
  )
}

export default Hero