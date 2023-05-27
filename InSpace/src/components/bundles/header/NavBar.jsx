import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HamburgerMenu from "./hamburgerMenu";
import "./navBar.css";

const NavBar = () => {
  const logo = "src/assets/assets-Header/Logo.png";
  <img src={logo} alt="Logo" />;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="wiki-container">
        <nav className="main-nav">
          <div className="menu-link">
            <div className="logo">
              <img src={logo} alt="" width="300px" />
            </div>

            <ul>
              <Link to="/ExplorPlanets">ExplorPlanets</Link>
              <Link to="/ExplorPlanets">ExplorPlanets</Link>
              <Link to="/ExplorPlanets">ExplorPlanets</Link>
            </ul>
            <div className="login">
              <Link to="/ExplorPlanets">Login</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
