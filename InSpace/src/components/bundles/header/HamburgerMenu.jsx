import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state) => state.auth.token);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="relative h-auto">
      <button
        type="button"
        className="block text-white hover:text-gray-900 focus:text-gray-900 focus:outline-none mdd:hidden"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          {isOpen ? (
            <path fillRule="evenodd" clipRule="evenodd" d="M19 13H5v-2h14v2z" />
          ) : (
            <>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            </>
          )}
        </svg>
      </button>
      {isOpen && (
        <div className=" flex flex-col text-xl absolute top-0.5 right-0 mt-[30px] w-[321px] h-[600px] bg-[#020617] shadow-black shadow-xl transition-transform transform translate-x-[12%] z-150 rounded-xl md:mt-[54px]">
          <ul className="py-2 mt-6 flex flex-col flex-1">
            <li className="px-4 py-2  hover:bg-gray-700  cursor-pointer mb-10 ">
              <Link
                to="/Explor-Planets"
                className="px-4 py-2cursor-pointer mb-10"
              >
                Explor Planets
              </Link>
              <div className="w-full h-[2px] bg-gray-900 mt-2"></div>
            </li>

            <li className="px-4 py-2  hover:bg-gray-700 cursor-pointer mb-10">
              <Link
                to="/Login"
                className="px-4 py-2cursor-pointer mb-10"
              >
                Login
              </Link>
              <div className="w-full h-[2px] bg-gray-900  mt-2"></div>
            </li>
            <li className="px-4 py-2 cursor-pointer mb-10 hover:bg-gray-700">
              <Link to="/Form-Planet" className="px-4 py-2 cursor-pointer mb-10">
              Sign-in
              </Link>
              <div className="w-full h-[2px] bg-gray-900  mt-2"></div>
            </li>
            
            {/* <Link
                to="/Login"
                className="px-4 py-2 cursor-pointer mb-10 "
              >
                Login
              </Link>
              <div className="w-full h-[2px] bg-gray-900 mt-2"></div> */}
    {token != null ? <li className="px-4 py-2 cursor-pointer mb-10 hover:bg-gray-700">
              <Link
                to="/Logout"
                className="px-4 py-2 cursor-pointer mb-10"
                onClick={handleLogout}
              >
                Logout
              </Link>
              <div className="w-full h-[2px] bg-gray-900 mt-2"></div>
            </li>  : <li className="px-4 py-2 cursor-pointer mb-10 hover:bg-gray-700">
              
            </li>}
          </ul>
          <div className="w-full h-[2px] bg-gray-900"></div>
          <div class="flex justify-center mt-3 space-x-6 mb-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Facebook</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {
                  <path
                      fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                }
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Instagram</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                    fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Twitter</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">GitHub</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                    fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

        
            <a href="#" className="text-gray-400 hover:text-white">
            <span class="sr-only">Linkedin</span>
              <svg
                class="w-5 h-5 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
