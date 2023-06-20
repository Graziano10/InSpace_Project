import React from "react";

const RegBurger = ({isActive , handleToggle}) => {
  return (
    <section onClick={handleToggle} className="flex flex-col gap-2 md:gap-3 absolute left-5 md:left-10 xl:hidden" >
      <div className={` w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg ${isActive ? 'rotate-45 translate-y-3' :''} `}></div>
      <div className={`w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg ${isActive ? 'hidden' : ''}`}></div>
      <div className={`w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg ${isActive ? '-rotate-45' : ''}`}></div>
    </section>
  );
};

export default RegBurger;
