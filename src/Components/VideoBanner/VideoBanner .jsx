import React from "react";
import video2 from '../../assets/140807-776043760_small.mp4'
const VideoBanner = () => {
  return (
    <div className="w-full">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="w-full h-full"
      >
        <source src={video2} type="video/mp4" />
        
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <em><h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-blue-500">Unleash Your Athletic Potential</h1></em>
        <p className="mb-6 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-100  to-blue-300">Join the movement. Train smart. Perform better with EquSports.</p>
       
      </div> */}
    </div>
  );
};

export default VideoBanner;
