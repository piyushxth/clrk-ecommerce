'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSwiper = () => {
  return (
    <div className="absolute bottom-0 right-0">
      {/* Custom Navigation Buttons */}
      <div className="absolute -top-12 right-2 z-10 flex gap-2">
        <div className="swiper-button-prev !text-black !w-10 !h-10 !bg-white rounded-full !static !m-0 after:!text-[12px] after:!w-6 after:!h-6 after:!flex after:!items-center after:!justify-center"></div>
        <div className="swiper-button-next !text-black !w-10 !h-10 !bg-white rounded-full !static !m-0 after:!text-[12px] after:!w-6 after:!h-6 after:!flex after:!items-center after:!justify-center"></div>
      </div>
      <div className="h-[110px] w-[110px] md:h-[170px] md:w-[170px] lg:h-[210px] lg:w-[210px] overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="h-[110px] w-[110px] md:h-[170px] md:w-[170px] lg:h-[210px] lg:w-[210px] bg-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[110px] w-[110px] md:h-[170px] md:w-[170px] lg:h-[210px] lg:w-[210px] bg-black"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[110px] w-[110px] md:h-[170px] md:w-[170px] lg:h-[210px] lg:w-[210px] bg-green-200"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSwiper;