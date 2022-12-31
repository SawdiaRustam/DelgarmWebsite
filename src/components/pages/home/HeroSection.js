import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import SwiperCore,{Autoplay} from "swiper"
import { Hero } from "./HeroSwiperContent";
import Link from 'next/link'
import "swiper/css/autoplay"
 function HeroSection() {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        
        slidesPerView={1}
        autoplay={{
          delay:2800,
          disableOnInteraction:true,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={1}
        speed={1000}
      >
        {Hero.map((hero) => (
          <SwiperSlide key={hero.id}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className="flex flex-col justify-center p-3 space-y-3 ">
            <h1 className="text-title xl:text-5xl md:text-3xl text-2xl font-bold">{hero.title}</h1>
            <p className="py-3  text-title font-medium">{hero.text}</p>
            <Link href={hero.url}><span className="button  rounded-full mt-3 px-7 sm:px-10 py-1.5 sm:py-2 text-white text-lg font-medium sm:font-semibold w-fit">{hero.button}</span></Link>
            </div>
            <div className="">
           
              <img src={hero.img} className='float-center'/>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>
        {`
            .button{
              // background: linear-gradient(#015c92,#06334b);
              background: linear-gradient(#B750F6,#3F3FEB);
             
            }
            .button:hover{
                background:#5D69BE;
            }
            .herobg{
              background:linear-gradient( to right, rgba(255,0,0,0) ,rgba(219, 77, 255,0.3));
              border-radius:60%;
            }
            
        `}
      </style>
    </div>
  );
}
export default HeroSection