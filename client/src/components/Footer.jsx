import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerContent">
          <div className="footerLeft">
            <Link to="/about">About</Link>
          </div>
          <div className="footerRight">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="copyRights">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
