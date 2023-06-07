import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";

const NavBar = () => {
  const logo = "src/assets/assets-Header/Logo.png";
  const avatar = "src/assets/User_Avatar.png";

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="flex px-10 z-50  shadow-xl shadow-black opacity-90 bg-[#020617bc] ">
        <div className="flex items-center justify-between w-full relative">
          <div className="w-[210px]">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="mdd:block xs:hidden">
            <Link
              to="/Explor-Planets"
              className="text-white hover:text-gray-30 text-xl font-medium"
            >
              ExplorPlanets
            </Link>
            <Link
              to="/Wiki-Planet"
              className="text-white hover:text-gray-300 text-xl font-medium mx-14"
            >
              WikiPlanet
            </Link>
            <Link
              to="/Form-Planet"
              className="text-white hover:text-gray-300 text-xl font-medium"
            >
              FormPlanet
            </Link>
          </div>
          <div className="mdd: flex gap-10 items-center">
            {token != null ? (
              <div className="flex items-center justify-between mdd:w-[90px] w-[15px] ">
                <div className="flex justify-center items-center gap-2">
                  <div className="w-[40px] h-[40px] bg-black rounded-full">
                    <img src={avatar} alt="Avatar" />
                  </div>

                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-gray-300 text-xl font-medium mdd:block xs:hidden"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between mdd:w-[90px] w-[15px]">
                <Link
                  to="/Login"
                  className="text-white hover:text-gray-300 text-xl font-medium mdd:block xs:hidden w-[40px]"
                >
                  Login
                </Link>              
              </div>
            )}
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
