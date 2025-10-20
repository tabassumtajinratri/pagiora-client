import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const NavbarInside = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))


  }
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
         <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
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
      <li>
        <details>
          <summary>Home</summary>
          <ul className="p-2">
            <Link to='bookCafe'><li className='text-black'>Book Cafe</li></Link>
            <Link to='bookstore'><li className='text-black'> Bookstore</li></Link>
            <Link to='shop'><li className='text-black'> Shop </li></Link>
            <Link to='blogs'><li className='text-black'> Blogs </li></Link>
          
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
           <Link to='home2'><li className='text-black'>About Us</li></Link>
           <Link to='cafe'><li className='text-black'> About Me</li></Link>
           <Link to='cafe'><li className='text-black'> Cafe Menu </li></Link>
           <Link to='cafe'><li className='text-black'> MemberShip </li></Link>
           <Link to='cafe'><li className='text-black'> Our Team </li></Link>
           <Link to='cafe'><li className='text-black'> Authors </li></Link>
          </ul>
        </details>
      </li>
      <Link to='cafe'><li className='text-white mt-2'> Contact Us </li></Link>
    </ul>
  </div>
  <div className="navbar-end">
    
    
    {


      user? <>

      {/* <span>{user?.displayName}</span> */}

      <button className="btn"> <FaShoppingCart />
   <div className="badge badge-sm badge-secondary">+0</div>
</button>
      
      <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button></>
      :<><Link to='/signIn'><button className="btn">SignIn</button></Link></>
    }
  </div>
</div>
        </div>
    );
};

export default NavbarInside;
