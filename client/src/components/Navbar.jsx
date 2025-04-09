import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <div>LoGo</div>
          </Link>
        </div>
        <div className="pages">
          <Link to={"/"}>
            <div>Home</div>
          </Link>
          <Link to={"/about"}>
            <div>About</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
