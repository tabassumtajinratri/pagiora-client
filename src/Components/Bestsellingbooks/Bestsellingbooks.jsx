import React, { useEffect, useState } from 'react';
import BestsellingbooksCard from '../BestsellingbooksCard/BestsellingbooksCard';
import useBooks from '../Hooks/useBooks';


const Bestsellingbooks = () => {
    const [allbooks]= useBooks()
    const bestseller = allbooks.filter(item => item.popularity ==='Best Seller')

   

    // useEffect(()=>{
    //    fetch('http://localhost:5000/bookcollection')
    //     .then(res=>res.json())
    //     .then(data => {
    //         const bestseller = data.filter(item => item.popularity ==='Best Seller')
    //         setBest(bestseller)})
        

    // },[])


    
    return (
        <div>
           <div className='mt-4'>
             <p className='text-3xl text-center mt-4 text-amber-600 italic'>Popular books</p>
            <h1 className='text-6xl text-center mt-4 text-amber-900 font-bold'>Bestsellingbooks</h1>
           </div>

          <div className='grid md:grid-cols-5 gap-5 mt-7'>
            {
                bestseller.map(bestBook=> <BestsellingbooksCard key={bestBook._id} bestBook={bestBook}></BestsellingbooksCard>)
            }
          </div>

          <div className='text-center mt-9'>
            <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 dark:border-white dark:hover:bg-white dark:hover:text-slate-800">View All Books</button> 
          </div>
        </div>
    );
};

export default Bestsellingbooks;



