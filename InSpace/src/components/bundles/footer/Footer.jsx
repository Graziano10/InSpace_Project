import React from "react";
import mars from '/src/assets/assets-footer/mars.png'

function Footer() {
  
  return (
    <div className=" bg-[#0E0F14] h-screen flex flex-col items-center justify-center ">
      <div className=" container relative flex justify-around items-center mt-10 mb-24  rounded-3xl bg-[url('/src/assets/assets-footer/universe.jpg')] bg-cover h-4/5">
        <div className="3xl:w-3/12 3xl:left-52  xl:w-4/12  md:w-3/12 md:left-20 s:w-5/12 xs:w-6/12 absolute left-12 xs:left-5 bottom-13">
          <img src={mars} alt="mars" />
        </div>
        <div className="text-white ml-80 mr-10 md:mr-20 xl:mr-40 absolute right-0 ">
          <p className="3xl:text-5xl xl:text-3xl md:text-lg s:text-[0.9rem] xs:text-[0.6rem] mb-5  ">
            LEARNING IS EASY WITH US
          </p>
          <p className="3xl:text-lg xl:text-lg md:text-sm s:text-[0.6rem] xs:text-[0.4rem] mb-5">
            Augmented reality is an interactive experience{" "}
          </p>
          <p className="3xl:text-lg xl:text-lg md:text-sm s:text-[0.6rem] xs:text-[0.4rem]">
            Augmented reality is an interactive experience
          </p>
        </div>
      </div>
      <div className="">
        <div className="  text-white flex justify-center text-xl xs:flex-col s:flex-col md:flex-row">
        <div className="flex gap-20 s:gap-10 xs:mb-10 s:mb-10 md:md-0">
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
        </div>
        <div className="flex gap-20 s:gap-10">
          <p>Press</p>
          <p>Accessibility</p>
          <p>Partners</p>
        </div>
          
          {/* <div className=" xs:w-4/6 s:w-3/6 3xl:w-2/6 bg-zinc-800 border-solid border-2 rounded-md text-s 3xl:text-lg xl:text-lg border-white h-10 text-center pt-1">
            Subscribe
          </div>
           */}
        
       
        
       
      </div>
      <div className="  invert flex justify-center ">
        <img className="w-5 h-5 m-5 " src="src\assets\assets-footer\instagram.png" alt="" />
        <img className="w-5 h-5 m-5" src="src\assets\assets-footer\facebook.png" alt="" />
        <img className="w-5 h-5 m-5" src="src\assets\assets-footer\github.png" alt="" />
        <img className="w-5 h-5 m-5" src="src\assets\assets-footer\linkedin.png" alt="" />
        <img className="w-5 h-5 m-5" src="src\assets\assets-footer\instagram.png" alt="" />
      </div>
      <div className="text-white mt-10 mb-8 text-center">
      © 2020 Your Company, Inc. All rights reserved.
      </div>
      </div>
      
    </div>
  );
}

export default Footer;
