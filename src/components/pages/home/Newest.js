import React from 'react';

import Crad from '../../elements/Crad';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Newest_swipper from '../../elements/Newest_swipper';


const Newest = () => {

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <section className='bground mx-10 rounded my-5'>
        <div className=' my-10'>
        <h1 className=' text-center text-gray-800 font-bold text-2xl'><span className='radius'>جدید ترین</span> ها </h1>
        </div>
        <div className='grid grid-cols-1 mx-20 gap-10 pb-20 '>
       
         <Newest_swipper/>
     
        </div>
    </section>
  )
}

export default Newest