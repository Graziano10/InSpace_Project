import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

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
              to="/ExplorPlanets"
              className="bg-white text-black py-4 px-12 rounded-[40px] hover:bg-neutral-200 h-9 flex justify-center items-center"
            >
              History
            </Link>
          </div>
        </section>
        </Fade>
      </div>
  );
};

export default Section01;
