import React, { useEffect, useState } from 'react';
import NewBooksCard from '../NewBooksCard/NewBooksCard';

const Newreleases = () => {
    const [newbook, setNewbook] = useState([])
    useEffect(()=>{
        fetch('newreleases.json')
        .then(res=>res.json())
        .then(data =>setNewbook(data))
    }, [])
    return (
        <div>
            <h1 className='text-7xl text-center mt-7 italic'>New releases</h1>
         <div className='grid grid-cols-5'>
               {
                newbook.map(newbook=> <NewBooksCard key={newbook} newbook={newbook}></NewBooksCard>)
            }
         </div>
        </div>
    );
};

export default Newreleases;