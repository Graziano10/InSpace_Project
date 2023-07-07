import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "./button.css"

const Section01 = () => {

  const divStyle02 = {
    backgroundImage: "url('/src/assets/assets-Header/universe04.jpg')",
  };
  const logoHeader = {
    backgroundImage:
      "url('/src/assets/assets-Header/nasa-Q1p7bh3SHj8-unsplash.jpg')",
  };
  return (

      <div className="h-screen text-white flex items-center justify-center relative bg-[#04091b] z-1 px-7">
            <Fade bottom delay = {200}>
        <section
          className="container w-11/12 h-5/6 bg-cover bg-center rounded-3xl flex "
          style={logoHeader}
        >
          <div className="container mx-auto text-center text-white flex flex-col justify-center items-center p-3 ">
            <h1 className="text-5xl font-medium mb-6">
              Universe: The Wonder Beyond
            </h1>
            <p className="text-xl mb-12">
              Come and discover the universe and immerse yourself in an
              unprecedented cosmic adventure.
            </p>
            <Link
              to="/reservation"
              className="bg-white overflow-hidden ctaButton text-black py-4 px-12 rounded-[40px]  h-9 flex justify-center items-center hover:bg-yellow-600 hover:text-white"
            >
              RESERVE NOW
              <div className="arrow-animation ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>



            </Link>
          </div>
        </section>
        </Fade>
      </div>
  );
};

export default Section01;
