import React from 'react';
import Banner2 from '../Banner2/Banner2';
import MainDetails from '../MainDetails/MainDetails';
import Bestsellingbooks from '../Bestsellingbooks/Bestsellingbooks';
import Coffee from '../Coffee/Coffee';
import Gallery from '../Gallery/Gallery';
import ClientsFeedBack from '../ClientsFeedBack/ClientsFeedBack';
import Footer from '../Footer/Footer';


const Home2 = () => {
    return (
        <div>
          
             <Banner2></Banner2>
             <MainDetails></MainDetails>
             <Bestsellingbooks></Bestsellingbooks>
             <Coffee></Coffee>
             <Gallery></Gallery>
             <ClientsFeedBack></ClientsFeedBack>
             <Footer></Footer>
        </div>
    );
};

export default Home2;