
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import B10 from '../../assets/B4.png';
import "swiper/css";

const Banner2 = () => {
  return (
    <div className="relative w-full">
      <Swiper className="mySwiper">
        <SwiperSlide className="relative">
          <img src={B10} alt="" className="w-full object-cover" />

          {/* Animated Centered Text */}
          <motion.h1
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-6xl italic text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Where Page Turn and Coffee Flows
          </motion.h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner2;
