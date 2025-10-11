import girl from '../../assets/girl.png'
import baby from '../../assets/babis.png'
import { FaBookOpen } from "react-icons/fa";
const Offer = () => {
    return (
        <div>
              <div className='flex justify-center gap-5 mt-20'>
                           <div className='bg-indigo-300 rounded-full p-5'><FaBookOpen /></div>
                           <div className='bg-indigo-300 rounded-full p-5'><FaBookOpen /></div>
                           <div className='bg-indigo-300 rounded-full p-5'><FaBookOpen /></div>
                           <div className='bg-indigo-300 rounded-full p-5'><FaBookOpen /></div>
                            <div className='bg-indigo-300 rounded-full p-5'><FaBookOpen /></div>  
                       </div>

            <div className='flex justify-center h-[350px] mt-7'>


               <div className='bg-pink-300 flex'>
                 <div>
                    <h1 className='text-xl text-white mt-28 ml-5'>NEW COLLECTION</h1>
                    <h3 className='text-5xl text-white ml-5 italic'>Up to 30% Off</h3>

                </div>

                <div>
                    <img className='w-80' src={girl} alt="" />
                </div>
               </div>






                  <div className='bg-indigo-300 flex'>
                <div>
                    <h1 className='text-xl text-white mt-28 ml-5'>Buy 1 and get a free book</h1>
                    <h3 className='text-5xl text-white ml-5 italic'>1 = 2 Kids’ Books</h3>

                </div>
                <div>
                    <img className='w-80' src={baby} alt="" />
                    </div>
            </div>
            </div>

             
        </div>
    );
};

export default Offer;