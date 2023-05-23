import React from "react";
import "./footer.css";
import mars from './assets/mars.png'

function Footer() {
  return (
    <div className=" bg-neutral-950 h-screen flex flex-col items-center justify-center">
      <div className=" relative flex justify-around items-center mt-10 mb-24 container rounded-3xl bg-[url('/assets/universe.jpg')] bg-cover h-4/5">
        <div className="w-4/12 h-4/6 absolute left-0 bottom-13">
          <img src={mars} alt="mars" />
        </div>
        <div className="text-white ml-80">
          <p className="3xl:text-6xl xl:text-3xl md:text-lg xs:text-base mb-5  ">
            LEARNING IS EASY WITH US
          </p>
          <p className="3xl:text-lg xl:text-lg md:text-sm xs:text-xs mb-5">
            Augmented reality is an interactive experience{" "}
          </p>
          <p className="3xl:text-lg xl:text-lg md:text-sm xs:text-xs">
            Augmented reality is an interactive experience
          </p>
        </div>
      </div>
      <div className="  container grid grid-cols-4  xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-4 gap-5 text-white ml-12">
        <div className="">
          <p className="mb-12  text-5xl">GitHub</p>
          <p className="mb-4">Subscribe to our newsletter</p>
          <p className="mb-4">Get product updates, company news, and more.</p>
          <div className="w-2/6 bg-zinc-800 border-solid border-2 rounded-md text-xl border-white h-10 text-center pt-1">
            Subscribe
          </div>
          <div>
            
          </div>
        </div>
        <div className="mt-12">
          <p>Product</p>
          <p>Features</p>
          <p>Security</p>
          <p>Team</p>
          <p>Enterprice</p>
          <p>Custom Sto</p>
          <p>theReadMe</p>
          <p>Pricing</p>
          <p>Resources</p>
          <p>Roadmap</p>
        </div>
        <div className="mt-12">
          <p>Platform</p>
          <p>Developer API</p>
          <p>Partners</p>
          <p>Electron</p>
          <p>GitHub Desktop</p>
        </div>
        <div className="mt-12">
          <p>Company</p>
          <p>About</p>
          <p>Blog</p>
          <p>Carrers</p>
          <p>Press</p>
          <p>Inclusion</p>
          <p>Social Impact</p>
          <p>Shop</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
