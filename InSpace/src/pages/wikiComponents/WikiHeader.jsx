import "./Navbar.css";
import video from "./WikiAssets/Terminal.mp4";
import NavBar from "../../components/bundles/header/NavBar2";
import { Button } from "./WikiButton";
import { Link } from "react-router-dom";
import imageRock from "./WikiAssets/rocket.png";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [countdown, setCountdown] = useState({
    days: 60,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Jun 16, 2023 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now + 60 * 24 * 60 * 60 * 1000; // Aggiungi 60 giorni in millisecondi

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        // Countdown è terminato, puoi fare qualcosa qui se necessario
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="wiki-container">
      <video src={video} autoPlay loop muted></video>
      {/* <div className="navbar-container">
    <NavBar/>
  </div> */}
      <div className="absolute top-0 w-full z-50 text-white">
        <NavBar />
      </div>
      <div className="wikiTitle">ADVENTURE AWAITS</div>
      <p className="wikiP">What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link to="/Form-Planet">GET STARTED</Link>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          // onClick={console.log('hey')}
        >
          EXPLORE PLANET <i className="far fa-play-circle" />
        </Button>
      </div>
      <div className="launch-time">
        <div className="launch-div">
          <p>{countdown.days.toString().padStart(2, "0")}</p>
          <span>Days</span>
        </div>
        <div>
          <p>{countdown.hours.toString().padStart(2, "0")}</p>
          <span>Hours</span>
        </div>
        <div>
          <p>{countdown.minutes.toString().padStart(2, "0")}</p>
          <span>Minutes</span>
        </div>
        <div>
          <p>{countdown.seconds.toString().padStart(2, "0")}</p>
          <span>Seconds</span>
        </div>
      </div>
      <img src={imageRock} className="rocket" />
    </div>
  );
}

export default Navbar;
