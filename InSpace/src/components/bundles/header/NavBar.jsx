import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HamburgerMenu from "./hamburgerMenu";
import './navBar.css'

const NavBar = () => {
  const logo = <svg></svg>;
  <img src={logo} alt="Logo" />;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
           <div className="wiki-container">
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
      </div>

    </>
  );
};

export default NavBar;
