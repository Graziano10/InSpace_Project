import React from "react";
import './Navbar.css'
import video from './WikiAssets/WikiPlanet3.mp4'
import logo from './WikiAssets/Logo.png'
import NavBar from "./NavBar2";



function Navbar() {
    return (
      <div className="wiki-container">
        <video src={video} autoPlay loop muted></video>
        <NavBar/>
        <header>
          {/* Contenuto dell'header */}
        </header>
      </div>
    );
  }
  
  export default Navbar;