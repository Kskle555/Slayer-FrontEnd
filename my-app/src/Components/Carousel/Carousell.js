import { Button, Carousel} from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,EffectFade,Pagination,Scrollbar,A11y,Mousewheel} from "swiper"

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousell = ()=>{
    return(
      
<div className="mt-0 bg-slate-900">

<br/><h1 className="text-center  font-mono text-4xl text-white align-middle" >Bu sezon popüler Animeler</h1><br/>
<Swiper
        slidesPerView={4}
        spaceBetween={30}
        
       
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
        <SwiperSlide><img src="https://images6.alphacoders.com/909/thumb-1920-909641.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://images6.alphacoders.com/909/thumb-1920-909641.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://images6.alphacoders.com/909/thumb-1920-909641.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://images6.alphacoders.com/909/thumb-1920-909641.png"></img></SwiperSlide>
        <SwiperSlide><img src="https://images6.alphacoders.com/909/thumb-1920-909641.png"></img></SwiperSlide>
      </Swiper>
 
  </div>

    )
}

export default Carousell;