import React from 'react';
import g1 from '../../assets/g1.jpg'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.jpg'
import g4 from '../../assets/g4.jpg'
import g5 from '../../assets/g5.jpg'
const Gallery = () => {
    return (
        <div>
            <h1 className='text-6xl text-center mt-16 text-amber-800 italic'>Stories brew here</h1>
            <div className='flex mt-9'>
            <img className='w-96 h-96' src={g1} alt="" />
            <img className='w-96 h-96' src={g2} alt="" />
            <img className='w-96 h-96' src={g3} alt="" />
            <img className='w-96 h-96'src={g4} alt="" />
            <img className='w-96 h-96'src={g5} alt="" />
            </div>
        </div>
    );
};

export default Gallery;