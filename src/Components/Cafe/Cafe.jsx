import React from 'react';
import VideoBanner from '../VideoBanner/VideoBanner ';
import Allbooks from '../Allbooks/Allbooks';
import Topсategories from '../Topсategories/Topсategories';
import Offer from '../Offer/Offer';
import NewBooksCard from '../NewBooksCard/NewBooksCard';
import Newreleases from '../Newreleases/Newreleases';
import Join from '../Join/Join';



const Cafe = () => {
    return (
        <div>
            <VideoBanner></VideoBanner>
            <Allbooks></Allbooks>
            {/* <Topсategories></Topсategories> */}
            <Offer></Offer>
            <Newreleases></Newreleases>
            <Join></Join>
            
            
         
           
        </div>
    );
};

export default Cafe;