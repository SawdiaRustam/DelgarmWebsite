import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
const ImageDetail = () => {
  return (
    <div className='w-40 mx-auto'>
    <Carousel>
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
        
    </Carousel>
    </div>
  )
}

export default ImageDetail