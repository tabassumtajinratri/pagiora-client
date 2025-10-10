import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Working Hour</h6>
    <a className="link link-hover">Mon-Fri: 9 AM – 6 PM</a>
    <a className="link link-hover">Saturday: 9 AM – 4 PM</a>
    <a className="link link-hover">Sunday: Closed</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Join with Us</h6>
    <div className="flex gap-3">
        <div className="text-3xl">
            <FaFacebook />
        </div>
        <div className="text-3xl">
            <FaInstagramSquare />
        </div>
         <div className="text-3xl">
            <FaLinkedinIn />
        </div>
    </div>
   
  </nav>
</footer>
        </div>
    );
};

export default Footer;