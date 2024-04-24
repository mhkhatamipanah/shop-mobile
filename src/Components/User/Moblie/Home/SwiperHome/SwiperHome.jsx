"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

import Image from 'next/image'
import img1 from '../../../../../../public/Assets/Images/PlaceHolders/11.jpg'
import img2 from '../../../../../../public/Assets/Images/PlaceHolders/22.jpg'
import img3 from '../../../../../../public/Assets/Images/PlaceHolders/33.jpg'
import img4 from '../../../../../../public/Assets/Images/PlaceHolders/44.jpg'
import img5 from '../../../../../../public/Assets/Images/PlaceHolders/55.jpg'
const SwiperHome = () => {
    return (
        <>
            <Swiper
           
              dir="rtl"
              loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            
                className="mySwiper !rounded !m-3"
      
                modules={[Autoplay]}
            >
                <SwiperSlide>
                <Image className='rounded-xl' alt="asd" src={img1}/>
              
                </SwiperSlide>
                <SwiperSlide>
                <Image className='rounded-xl' alt="asd" src={img2}/>
                </SwiperSlide>
                <SwiperSlide>
                <Image className='rounded-xl' alt="asd" src={img3}/>
                </SwiperSlide>
                <SwiperSlide>
                <Image className='rounded-xl' alt="asd" src={img4}/>
                </SwiperSlide>
                <SwiperSlide>
                <Image className='rounded-xl' alt="asd" src={img5}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperHome