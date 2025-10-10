import React from 'react';

const CoffeeCard = ({coffee}) => {
    const {name, description, price}=coffee
    return (
        <div className='mt-5 ml-7'>
           <div className='flex justify-between text-amber-700'>
             <div>
                <h1 className='text-3xl'><span>{name}</span></h1>
            </div>
            <div>
                <p>${price}</p>
            </div>
           </div>


            <p className='text-yellow-600'>{description}</p>
        </div>
    );
};

export default CoffeeCard;