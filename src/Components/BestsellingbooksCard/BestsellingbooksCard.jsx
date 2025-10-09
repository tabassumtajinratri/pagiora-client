import React from 'react';

const BestsellingbooksCard = ({bestBook}) => {
    const {name, author, category, genre, img, popularity, description, price}=bestBook
    return (
        <div className='grid grid-cols-5'>
          
             <div className="max-w-[300px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
            <img
                width={400}
                height={400}
                className="h-[275px] w-[350px] rounded-lg object-cover"
                src={img}
                alt="card navigate ui"
             />
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold"> <span className='text-2xl font-bold'>{name}</span>-  <span className='text-red-700 italic'>{author}</span> </h1>
                <h1 className="text-lg font-semibold text-yellow-600">{category}</h1>
                <p className="text-sm text-gray-500 dark:text-white/60 text-justify">{description}</p>
                <div className="text-lg font-semibold text-yellow-700">${price}</div>
            </div>
            <div className="flex gap-4">
                {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">Add to Cart</button>
                <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 dark:border-white dark:hover:bg-white dark:hover:text-slate-800">View Details</button> */}

                


            </div>

            
        </div>
        
        </div>
    );
};

export default BestsellingbooksCard;