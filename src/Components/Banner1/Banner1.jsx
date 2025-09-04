import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import B1 from '../../assets/B1.png';
import B2 from '../../assets/B2.png';
import B3 from '../../assets/B3.png';
import B4 from '../../assets/B4.png';

const Banner1 = () => {
  return (
    

   <div>
    <div>
    
    </div>
     <Swiper

   

      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000, // stays 5s before changing
        disableOnInteraction: false,
      }}
      speed={2000} // 2s smooth transition
      loop={true} // makes it infinite
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="relative">
        <img src={B1} alt="" />
        <div className="absolute z-20 top-10 left-10 text-white">
         
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <img src={B4} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={B2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={B3} alt="" />
      </SwiperSlide>
     
    </Swiper>
   </div>
  );
};

export default Banner1;
