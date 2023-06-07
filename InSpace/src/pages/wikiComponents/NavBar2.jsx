import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import logo from "./WikiAssets/Logo.png"


const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex px-10 z-50  shadow-xl shadow-black opacity-90 bg-[#020617bc] ">
        <div className="flex items-center justify-between w-full relative">
          <div className="w-[210px]">
            <img src={logo} alt="Logo" />
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
              className="text-red-500 hover:text-gray-300 text-xl font-medium mx-14"
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
              className="bg-white text-"
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