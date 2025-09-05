import React from 'react';
import { Link } from 'react-router-dom';

const NavbarInside = () => {
    return (
        <div className="navbar fixed z-20 bg-gray-900 text-white shadow-lg">
            <div className="navbar-start">
               
            </div>
            <div className="navbar-center hidden lg:flex space-x-4">
                <Link to="/about" className="btn btn-ghost">About</Link>
                <Link to="/services" className="btn btn-ghost">Services</Link>
                <Link to="/contact" className="btn btn-ghost">Contact</Link>
            </div>
            <div className="navbar-end">
                <Link to="/" className="btn bg-red-400 text-black">Back..</Link>
            </div>
        </div>
    );
};

export default NavbarInside;
