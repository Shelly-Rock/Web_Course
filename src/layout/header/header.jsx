import { useState } from "react"; 
import HeaderLinks from "./HeaderLink.jsx";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <header className="header-container">
      <div className="header-logo-container">
        <a href ="https://www.youtube.com/@HIENLTH" style ={{textDecoration: "none"}}><h1 style ={{color: "white",padding:"20px",marginBottom:"0"}}>HIENLTH</h1></a>
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
