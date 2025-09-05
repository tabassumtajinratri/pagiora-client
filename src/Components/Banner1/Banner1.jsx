import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Typewriter } from "react-simple-typewriter"; // ✅ typewriter import
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
          <div className="absolute mt-96 z-20 top-10 left-10 text-white text-6xl">
            <Typewriter 
              words={["Welcome to Our Book World", "Discover More"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </SwiperSlide>
       <SwiperSlide className="relative">
          <img src={B2} alt="" />
          <div className="absolute mt-96 z-20 top-10 left-10 text-yellow-300 text-6xl">
            <Typewriter
              words={["Enjoy & Relax", "Read with Coffee"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </SwiperSlide>

       <SwiperSlide className="relative">
          <img src={B3} alt="" />
          <div className="absolute mt-96 z-20 top-10 left-10 text-blue-300 text-6xl">
            <Typewriter
              words={["Publishing House", "New Arrivals"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </SwiperSlide>

     
     
    </Swiper>
   </div>
  );
};

export default Banner1;
