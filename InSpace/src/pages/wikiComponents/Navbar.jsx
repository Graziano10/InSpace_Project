import React from "react";
import './Navbar.css'



function Navbar() {
    return (
      <nav className="main-nav">
        {/* Logo a sinistra */}
        <div className="logo">
          <h2>
            <span>InSpace</span>
          </h2>
        </div>
  
        {/* Link al centro */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
export default Navbar;