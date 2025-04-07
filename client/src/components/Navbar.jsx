import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">FAANG</div>
      <div className="navbarLinks">
        <ul className="navbarList">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
