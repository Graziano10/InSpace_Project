import React from "react";
import './Navbar.css'
import video from './WikiAssets/Terminal.mp4'
import NavBar from "./NavBar2";
import { Button } from "./WikiButton";
import { Link } from "react-router-dom";



function Navbar() {
 
    return (
      <div className="wiki-container">
  <video src={video} autoPlay loop muted></video>
  <div className="navbar-container">
    <NavBar/>
  </div>
  <div className="wikiTitle">ADVENTURE AWAITS</div>
  <p className="wikiP">What are you waiting for?</p>
  <div className='hero-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      <Link to="/Form-Planet">GET STARTED</Link>
    </Button>
    <Button
      className='btns'
      buttonStyle='btn--primary'
      buttonSize='btn--large'
      onClick={console.log('hey')}
    >
  EXPLORE PLANET <i className="far fa-play-circle" />
    </Button>
  </div>
</div>
    );
  }
  
  export default Navbar;