import React from "react";
import './Navbar.css'

import NavBar from "./NavBar2";



function Navbar() {
    return (
      <div className="wiki-container bg-Wiki-bg bg-cover bg-center  bg-no-repeat">
        <NavBar/>
        <header>
          <h1 className="md:hidden">Ciao sono Lello</h1>
          {/* Contenuto dell'header */}
        </header>
      </div>
    );
  }
  
  export default Navbar;