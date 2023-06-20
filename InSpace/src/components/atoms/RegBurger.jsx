import React from "react";
import { Fade } from "react-bootstrap";

const RegBurger = ({isActive , handleToggle}) => {
  return (

      <Fade>
    <section onClick={handleToggle} className="flex flex-col gap-2 md:gap-3 absolute left-5 md:left-10 xl:hidden" >
        <div className={` w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg ${isActive ? 'rotate-45 translate-y-3 md:w-12' :''} `}></div>
        <div className={`w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg ${isActive ? 'hidden' : ''}`}></div>
        <div className={`w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg ${isActive ? '-rotate-45 md:w-12 md:-translate-y-1' : ''}`}></div>
    </section>
      </Fade>
      
  );
};

export default RegBurger;
