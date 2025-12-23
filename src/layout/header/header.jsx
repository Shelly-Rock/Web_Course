import { useState } from "react";
import logoHeader from "../../assets/images/logoHeader.png";
import HeaderLinks from "./HeaderLink.jsx";
import "./header.css";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <header className="header-container">
      <div className="header-logo-container">
        <img src={logoHeader} alt="Logo" />
      </div>
      <div className={`header-nav ${openSearch ? "hide" : ""}`}>
        <HeaderLinks />
      </div>
      <div className={`header-search ${openSearch ? "show" : ""}`}>
        <input type="text" placeholder="Tìm kiếm..." autoFocus />
        <span
          className="close-search"
          onClick={() => setOpenSearch(false)}
        >
          ✕
        </span>
      </div>
      {!openSearch && (
      <div
        className="header-search-icon"
        onClick={() => setOpenSearch(true)}
      >
        <i className="bi bi-search"></i>
      </div>)}
    </header>
  );
}

export default Header;
