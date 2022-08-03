import React from "react";
import "./navbar.css";
import logo from "../../assets/images/eden-logo.png"

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-img-container">
          <img
            src={logo}
            className="brand-logo-img"
            alt="logo"
          />
        </div>
        <span className="logo-title">Eden</span>
      </div>
    </nav>
  );
}

export { Navbar };
