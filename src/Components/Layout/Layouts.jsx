// import React from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import NavbarMain from '../NavbarMain';
// import NavbarInside from '../NavbarInside';

// const Layouts = () => {
//     return (
        
//         <div>
            
//             <Navbar></Navbar>
//             <Outlet></Outlet>

//         </div>
//     );
// };

// export default Layouts;


import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';


import Navbar from '../Navbar/Navbar';
import NavbarInside from '../NavbarInside/NavbarInside';

const Layouts = () => {
    const location = useLocation();
    const showInsideNavbar = location.pathname.startsWith('/home2');

    return (
        <div>
            {showInsideNavbar ? <NavbarInside></NavbarInside> : <Navbar/>}
            <Outlet />
        </div>
    );
};

export default Layouts;
