import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
const ClientsFeedBack = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('feedback.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
         <div className="mt-10">
               <h1 className="text-6xl text-amber-800 text-center italic">Client’s feedback</h1>

               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               
               {
                reviews.map(review =><SwiperSlide key={review._id}>
                    <div className='text-center m-12'>
                        <p>{review.description}</p>
                        <h3 className="text-2xl">{review.name}</h3>
                    
                    <div className='flex flex-col items-center'>
                                <Rating 
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
    />
                    </div>
                    </div>

                </SwiperSlide>)
               }

              </Swiper>
            
         </div>
        </div>
    );
};

export default ClientsFeedBack;