import React, { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-auto">
      <button
        type="button"
        className="block text-white hover:text-gray-900 focus:text-gray-900 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
        <div className=" flex flex-col text-xl absolute top-0 right-0 mt-10 w-[321px] h-[700px]  bg-white shadow-lg transition-transform duration-300 transform translate-x-10 z-50">
          <ul className="py-2 mt-6 flex flex-col flex-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10">
              <Link
                to="/ExplorPlanets"
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10"
              >
                Explor Planets
              </Link>
              <div className="w-full h-[2px] bg-gray-900"></div>
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10">
              <Link
                to="/WikiPlanet"
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10"
              >
                Wiki Planet
              </Link>
              <div className="w-full h-[2px] bg-gray-900"></div>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10">
              <Link
                to="/FormPlanet"
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10"
              >
                Form Planet
              </Link>
              <div className="w-full h-[2px] bg-gray-900"></div>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10">
              <Link
                to="/ExplorPlanets"
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer mb-10"
              >
                Login
              </Link>
              <div className="w-full h-[2px] bg-gray-900"></div>
            </li>
          </ul>
          <div className="w-full h-[2px] bg-gray-900 mb-1"></div>
          <div class="m-1 flex  justify-center pb-2">

            <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start gap-9">
              <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
