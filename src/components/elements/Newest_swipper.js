import React from 'react'
import { card_menu } from '../constants/cardMenu';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore,{Navigation,Pagination,Scrollbar,Ally} from 'swiper'
// import 'swiper/components/navigation/navigation.css';
// import 'swiper/components/pagination/pagination.css';
// import 'swiper/components/sccrollbar/Scrollbar.css';
// import 'swiper/css';

// SwiperCore.use([Navigation,Pagination,Scrollbar,Ally])
const Newest_swipper = () => {
    let settings ={
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
              
            }
          }
        ]
    
    }
  return (
    <Slider {...settings}>

    {/* <Swiper 
    spaceBetween={20}
    slidesPerView = {3}
    navigation
    pagination = {{clickable:true}}
    scrollbar = {{draggable: true}}
    onSlideChange  ={()=> console.log('slide change')}> */}

  {card_menu.map((data) => {
        return (
        
          <div key={data.id} className="bg-white rounded-xl  border border-blue-500 flex flex-col mx-5 items-center align-middle justify-center gap-10">
            <div className='mx-3 my-2 px-3'>
              <img src={data.img} />
            </div>
            <div className='flex justify-between gap-10 mx-10 text-gray-800 font-bold '>
              <h1>{data.price}</h1>
              <h1>{data.name}</h1>
            </div>
            <div>
              <Link href={"./details"}><a href='./details'>
                <button className='buttonBackground text-sm md:text-base hover:text-gray-800 px-5 py-1 md:ml-28  ml-16 sm:ml-2 my-3 text-white rounded-md'> جزییات بیشتر</button>
              </a></Link>
            </div>
          </div>
          
        )
      })}
    
      {/* </Swiper> */}
     
      </Slider>
  )
}

export default Newest_swipper