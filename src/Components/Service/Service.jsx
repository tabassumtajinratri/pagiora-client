import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [service, setService]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/serviceCollection')
        .then(res=>res.json())
        .then(data=>setService(data))

    },[])
    return (
        
        <div className='flex justify-center gap-10'>
            {
                service.map(ser=> <ServiceCard key={ser} ser={ser}></ServiceCard>)
            }
        </div>
    );
};

export default Service;
