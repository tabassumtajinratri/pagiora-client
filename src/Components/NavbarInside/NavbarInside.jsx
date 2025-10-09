// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavbarInside = () => {
//     return (
//         <div className="navbar fixed z-20 text-white shadow-lg">
//             <div className="navbar-start">
               
//             </div>
//             <div className="navbar-center hidden lg:flex space-x-4">

//                 <div>
                    
//                 </div>
//                 <Link to="/about" className="btn">Home</Link>
                
//                 <Link to="/services" className="btn">Page</Link>
//                 <Link to="/contact" className="btn">Contact</Link>
//             </div>
//             <div className="navbar-end">
//                 <Link to="/" className="btn bg-red-400 text-black">Back..</Link>
//             </div>
//         </div>
//     );
// };

// export default NavbarInside;


import React from 'react';
import { Link } from 'react-router-dom';

const NavbarInside = () => {
    return (
        <div>
            <div className="navbar fixed z-20 bg-gray-800 opacity-50 text-white  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <Link className='text-3xl italic font-bold text-orange-600 p-4 ml-6' to="/">Pagiora</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li className='text-black'><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default NavbarInside;
