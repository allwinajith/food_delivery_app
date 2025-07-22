import img from "../assets/logo.webp";
import "../styles/headerStyles.css";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";

function Header() {
  return (
    <div className="header-container">
      <img className="app-logo" src={img} alt="Logo" />
      <nav className="nav-menu">
        <ul className="nav-ul">
          <span className="nav-menu-container">
            <RiDiscountPercentLine />
            <li>Offers</li>
          </span>
          <span className="nav-menu-container">
            <MdHelp />
            <li>Help</li>
          </span>
          <span className="nav-menu-container">
            <FaSignInAlt />
            <li>Sign In</li>
          </span>
          <span className="nav-menu-container">
            <FaCartArrowDown />
            <li>Cart</li>
          </span>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
