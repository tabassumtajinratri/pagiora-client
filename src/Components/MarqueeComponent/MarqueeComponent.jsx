import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div>
      <Marquee pauseOnHover className="bg-black text-2xl text-white p-3 font-bold">
        <span className="text-red-800 mx-6">Shop</span>
        <span className="text-yellow-600 mx-6">Book Cafe</span>
        <span className="text-blue-900 mx-6">Book Shop</span>
        <span className="text-cyan-700 mx-6">Publishing House</span>
        <span className="text-red-700 mx-6">Book Club</span>
        <span className="text-green-500 mx-6">Online Order</span>
        <span className="text-fuchsia-700 mx-6">Media Library</span>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
