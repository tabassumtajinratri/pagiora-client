import React from 'react';

const Navbar = () => {
    return (
       <div className="navbar fixed z-20 bg-gray-800 opacity-60 text-white  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-400  text-black">Lets Explore</a>
  </div>
</div>
    );
};

export default Navbar;