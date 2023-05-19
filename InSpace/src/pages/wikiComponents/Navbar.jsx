import React from "react";
import './Navbar.css'
import video from './WikiAssets/WikiPlanet3.mp4'
import logo from './WikiAssets/Logo.png'



function Navbar() {
    return (
      <div className="wiki-container">
        <video src={video} autoPlay loop muted></video>
        <nav className="main-nav">
          {/* Logo a sinistra */}
          <div className="logo">
           <img src={logo} alt="" width='300px' />
          </div>
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
        <header>
          {/* Contenuto dell'header */}
        </header>
      </div>
    );
  }
  
  export default Navbar;