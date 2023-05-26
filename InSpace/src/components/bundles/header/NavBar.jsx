import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HamburgerMenu from "./hamburgerMenu";

const NavBar = () => {
  const logo = <svg></svg>;
  <img src={logo} alt="Logo" />;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex dark:bg-neutral-800 bg-white h-14 px-10 relative">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <div className=" mdd:block xs:hidden">
            <Link
              to="/ExplorPlanets"
              className="text-white hover:text-gray-30 text-xl font-medium"
            >
              ExplorPlanets
            </Link>
            <Link
              to="/WikiPlanet"
              className="text-white hover:text-gray-300 text-xl font-medium mx-14"
            >
              WikiPlanet
            </Link>
            <Link
              to="/FormPlanet"
              className="text-white hover:text-gray-300 text-xl font-medium"
            >
              FormPlanet
            </Link>
          </div>
          <div className="flex items-center justify-between w-[90px]">
            <Link
              to="/ExplorPlanets"
              className="text-white hover:text-gray-300 text-xl font-medium"
            >
              Login
            </Link>
            <HamburgerMenu
              className="mdd:block xs:hidden"
              isOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
