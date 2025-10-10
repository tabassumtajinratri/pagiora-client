
// import React from 'react';
// import { Outlet, useLocation } from 'react-router-dom';


// import Navbar from '../Navbar/Navbar';
// import NavbarInside from '../NavbarInside/NavbarInside';
// import Footer from '../Footer/Footer';

// const Layouts = () => {
//     const location = useLocation();
//     const showInsideNavbar = location.pathname.startsWith('/home2');
    

//     return (
//         <div>
//             {showInsideNavbar ? <NavbarInside></NavbarInside> : <Navbar/>}  
//             {/* <NavbarInside></NavbarInside> */}
//             <Outlet />
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Layouts;


import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import NavbarInside from '../NavbarInside/NavbarInside';
import Footer from '../Footer/Footer';

const Layouts = () => {
  const location = useLocation();
  const path = location.pathname;

  // যেসব route-এ outside navbar থাকবে
  const outsideRoutes = ['/', '/login', '/register'];

  // যদি path outsideRoutes এ না থাকে, তাহলে inside navbar দেখাও
  const showInsideNavbar = !outsideRoutes.includes(path);

  return (
    <div>
      {showInsideNavbar ? <NavbarInside /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
