import img from "../assets/logo.webp";
import "../styles/headerStyles.css";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaSignInAlt, FaSearch } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { useState, useCallback } from "react";

function Header({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
      console.log("Typing");
    }, 300),
    [setSearchTerm]
  );

  function handleChange(e) {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  }

  return (
    <div className="header-container">
      <img className="app-logo" src={img} alt="Logo" />
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          id="inp-search"
          placeholder="Search restaurants..."
          className="search-input"
          value={inputValue}
          onChange={handleChange}
        />
      </div>

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

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export default Header;
