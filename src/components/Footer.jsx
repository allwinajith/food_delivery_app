import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "../styles/footerStyles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section">
          <h3 className="footer-logo">OrderMyFood</h3>
          <p className="footer-tagline">
            Delivering happiness to your doorstep
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">My Orders</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p>
              <MdPhone /> +1 (123) 456-7890
            </p>
            <p>
              <MdEmail /> support@ordermyfood.com
            </p>
            <p>
              <IoLocationSharp /> 123 Food Street, Chennai - 600021
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} OrderMyFood. All rights reserved.
        </p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
