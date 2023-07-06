import { Link } from "react-router-dom";
import NavBar from "./NavBar2";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Header = () => {
  const logoHeader = {
    backgroundImage:
      "url('/src/assets/assets-Header/nasa-Q1p7bh3SHj8-unsplash.jpg')",
  };
  const divStyle02 = {
    backgroundImage: "url('/src/assets/assets-Header/universe04.jpg')",
  };
  return (
    <>
      <div className="h-screen text-white flex items-center relative z-1">
        <section
          className="w-full bg-cover bg-center h-full"
          style={divStyle02}
        >
          <div className="absolute top-0 w-full z-50">
            <NavBar />
          </div>

          <div className="flex md:w-full h-full justify-center items-center ">
            <div className="mdd:w-full mdd:h-full"></div>
            <Fade left>
              {/* <Flip left> */}
              <div className="container text-center text-white flex flex-col justify-center items-center h-full z-1">
                <h1 className="text-5xl font-medium mb-6">Welcome InSpace</h1>
                <p className="text-xl mb-12">
                  One small step for man, one giant leap for humanity two were
                  done today, interplanetary travel is now a reality
                </p>
                <Link
                  to="/Wiki-Planet"
                  className="bg-white text-black py-4 px-12 rounded-[40px] hover:bg-neutral-200 h-9 flex justify-center items-center active:bg-yellow-600"
                >
                  Explore
                </Link>
              </div>
            </Fade>
            {/* </Flip> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
