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
      <nav className="flex dark:bg-neutral-800 bg-white h-14 px-10 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full relative">
          <div className="">
          <Logo/>
          </div>
          <div className="mdd:block xs:hidden">
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
          <div className="flex items-center justify-between mdd:w-[90px] w-[15px]">
            <Link
              to="/ExplorPlanets"
              className="text-white hover:text-gray-300 text-xl font-medium mdd:block xs:hidden w-[40px]"
            >
              Login
            </Link>
            <HamburgerMenu
              className="hidden "
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
