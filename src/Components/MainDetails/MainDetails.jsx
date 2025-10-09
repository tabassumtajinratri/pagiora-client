import React from 'react';
import MainDetails1 from '../MainDetails1/MainDetails1';
import MainDe2 from '../MainDetails2/MainDe2';

const MainDetails = () => {
    return (
        <div className='flex justify-evenly'>

            <div>
                <MainDetails1></MainDetails1>
            </div>
            <div>
                <MainDe2></MainDe2>
            </div>
            
        </div>
    );
};

export default MainDetails;