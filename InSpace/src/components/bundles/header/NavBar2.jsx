import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";

const NavBar = () => {
  const logo = "src/assets/assets-Header/Logo.png";
  const avatar2 = "/src/assets/Jeff_Bezos_2 avatar.jpg";


  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu02 = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <>
      <nav className="flex px-10 z-50  shadow-xl shadow-black opacity-90 bg-[#020617bc]">
        <div className="flex items-center justify-between w-full relative">
          <div className="w-[210px]">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="mdd:block xs:hidden">
            {/* <Link
              to="/Explor-Planets"
              className="text-white hover:text-gray-30 text-xl font-medium"
            >
              ExplorePlanets
            </Link> */}
            <Link
              to="/Wiki-Planet"
              className="text-white hover:text-gray-300 text-xl font-medium mx-14"
            >
              Explore Planets
            </Link>
            {/* <Link
              to="/Form-Planet"
              className="text-white hover:text-gray-300 text-xl font-medium"
            >
              FormPlanet
            </Link> */}
          </div>
          <div className="mdd: flex gap-10 items-center">
            {token != null ? (
              <div className="flex items-center justify-between mdd:w-[90px] w-[15px] ">
                <div className="flex justify-center items-center gap-2">
                  <div
                    className="w-[50px] h-[50px] rounded-full mr-3" onClick={toggleMenu02}
                  >
                    <img
                      src={avatar2}
                      alt="Avatar"
                      onClick={toggleMenu02}
                      className="rounded-full w-[50px] h-[50px] border-2 border-solid border-yellow-500"
                 
                    />
                    {isOpen && (
                      <div className="absolute left-[42%] z-10 mt-2 bg-white rounded-lg shadow-xl w-[200px] h-[250px] flex flex-col justify-between md:left-[75%] mdd:left-[85%]">
                        <div className="w-full h-10 bg-slate-300 rounded-lg mt-4 pl-3 flex items-center hover:bg-slate-400">
                          <button className="text-black" >
                            <Link to="/Section-Profile">Window Profile</Link>
                          </button>
                        </div>
                        <div className="w-full h-10 bg-slate-300 rounded-lg pl-3 flex items-center hover:bg-slate-400">
                          <button className="text-black">Rocket</button>
                        </div>
                        <div className="w-full h-10 bg-slate-300 rounded-lg pl-3 flex items-center hover:bg-slate-400">
                          <button className="text-black">Information</button>
                        </div>
                        <div
                          onClick={handleLogout}
                          className="w-full h-10 bg-[#04091b] rounded pl-3 flex items-center justify-center hover:bg-gray-950"
                        >
                          <p className="text-white">Logout</p>
                        </div>
                      </div>
                    )}
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
              <div className="flex items-center justify-between gap-2 mdd:w-[135px] w-[150px]">
                <Link
                  to="/Login"
                  className="text-white hover:text-gray-300 text-xl font-medium mdd:block xs:hidden"
                >
                  <div className="flex items-center mx-3">
                  Login
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                  </div>

                </Link>
                <Link
                  to="/Form-Planet"
                  className="text-white shrink-0 hover:text-gray-300 text-xl font-medium mdd:block xs:hidden"
                >
                  Sign Up
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
