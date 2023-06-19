import React from "react";
import mars from "/src/assets/assets-footer/mars5.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import FooterLinks from "../../atoms/FooterLinks";

function Footer() {
  return (
    <div className=" bg-[#04091b] h-full">
      {/* universe image */}

      {
        <Fade bottom delay={500}>
          <div>
            <div class=" container rounded-3xl bg-[url('/src/assets/assets-footer/space.jpg')] bg-cover shadow-xl p-10 lg:p-20 mx-auto text-white relative md:text-left">
              <div class="md:flex items-center -mx-10">
                <div class=" w-full 3xl:w-5/12 md:w-1/2 px-10 mb-10 md:mb-0">
                  <div class="relative">
                    <Fade top delay={1000}>
                      {<img src={mars} alt="mars" />}
                    </Fade>
                  </div>
                </div>

                <div class="w-full md:w-1/2 px-10">
                  <div class="mb-10">
                    <h1 class="font-bold uppercase text-3xl mb-5">
                      <Fade bottom delay={1000}>
                        the future is now
                      </Fade>
                    </h1>

                    <p class="text-xl">
                      <Fade bottom delay={1000}>
                        Explore a new way to travel,join this new adventure, you
                        won't regret it{" "}
                      </Fade>
                      <a
                        href="#"
                        class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i class="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>

                  <div>
                    <div class="inline-block align-bottom">
                      <Fade bottom delay={1000}>
                        <div>
                          <button class="bg-yellow-600 opacity-75 hover:opacity-100 text-black hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                            {" "}
                            <Link to="/Login">Subscribe</Link>
                          </button>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      }

      {/* footer */}

      {<FooterLinks />}
    </div>
  );
}

export default Footer;
