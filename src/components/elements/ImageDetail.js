import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {Carousel} from 'react-responsive-carousel';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const ImageDetail = () => {
  let settings ={
        
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    cssEase: "linear"

}
  return (
    <div className='w-1/2 mx-auto'>
    <Slider {...settings}>
        <div>
        <img src='./images/1.png' />
      
        </div>
        <div>
        <img src='./images/2.png' />
        </div>
        <div >
        <img src='./images/3.png' />
        </div>
        <div >
        <img  src='./images/c.png' />
        </div>
        <div >
        <img src='./images/red.png' />
        </div>
        
    </Slider>

    

    </div>
  )
}

export default ImageDetail