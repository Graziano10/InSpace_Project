import React from "react";

const RegBurger = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-3 relative left-5 md:left-10 xl:hidden">
      <div className="w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg"></div>
      <div className="w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg"></div>
      <div className="w-8 h-1 sm:w-8 sm:h-2 md:w-14 md:h-1 bg-white rounded-lg"></div>
    </section>
  );
};

export default RegBurger;
