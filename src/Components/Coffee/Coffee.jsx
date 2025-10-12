import React, { useEffect, useState } from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import c2 from '../../assets/c2.jpg'

const Coffee = () => {
     const [coffees, setCoffees]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/coffeeCardCollection')
        .then(res => res.json())
        .then(data=>setCoffees(data))

       
    }, [])
    return (
        <div className='flex justify-between'>
            <div>

               <h1 className='text-7xl italic text-amber-900'>Coffee---&---Cake-----------</h1>
                {
                coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }



            </div>
            <div>
                <img className='' src={c2} alt="" />

            </div>
        </div>
    );
};

export default Coffee;