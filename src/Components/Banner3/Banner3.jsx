import horse from '../../assets/horse.jpg'

const Banner3 = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <img className="w-full h-[500px] object-cover" src={horse} alt="horse" />

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-start">
                <h1 className="text-blue-950 text-4xl md:text-6xl px-6 py-3 italic">
                    Turning Page, Sparking <br /> <span className='ml-90 mt-2'>Imagination</span>
                </h1>
            </div>
        </div>
    );
};

export default Banner3;
