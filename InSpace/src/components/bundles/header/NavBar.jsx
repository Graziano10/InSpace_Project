import { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import HamburgerMenu from "./hamburgerMenu";

const NavBar = () => {
  const logo = "src/assets/assets-Header/Logo.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const dispatch = useDispatch();
  // const location = useLocation();
  // const auth = useSelector((state) => state.auth);

  // const formatNavClassName = (path) => {
  //   return location.pathname == path
  //     ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
  //     : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
  // };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

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

            {/* <div>
              <div>
                <div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navItems.map((item, index) =>
                        item.protected ? (
                          auth.token !== null ? (
                            <Link
                              key={`nav-item-${index}`}
                              to={item.path}
                              className={formatNavClassName(item.path)}
                              aria-current="page"
                            >
                              {item.label}
                            </Link>
                          ) : null
                        ) : (
                          <Link
                            key={`nav-item-${index}`}
                            to={item.path}
                            className={formatNavClassName(item.path)}
                            aria-current="page"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {auth.token !== null ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>

                    <div className="relative ml-3">
                      <div>
                        <button
                          type="button"
                          className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          id="user-menu-button"
                          aria-expanded="false"
                          aria-haspopup="true"
                        >
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div> */}

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
