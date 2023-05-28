import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
    <div className="h-screen text-white flex items-center relative z-1">
      
      <section className="w-full bg-cover bg-center h-full bg-[url('src/assets/assets-Header/nasa-Q1p7bh3SHj8-unsplash.jpg')]">
              <NavBar/>
              <div className="w-full h-full flex items-center justify-center">
              <div className="z-1 bg[#0000] w-[650px] h-[400px] flex items-center justify-center">
        <div className="container mx-auto text-center text-white flex flex-col justify-center items-center h-full z-20 opacity-100">
          <h1 className="text-5xl font-medium mb-6">Welcome InSpace</h1>
          <p className="text-xl mb-12">
            Un piccolo passo per l'uomo, un grande passo per l'umanita <br></br>
            oggi ne sono stai fatti due, i viaggi interplanetari sono ora una
            realtà,
          </p>
          <Link
            to="/ExplorPlanets"
            className="bg-white text-black py-4 px-12 rounded-md hover:bg-neutral-200"
          >
            Explore
          </Link>
        </div>
        </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Header;
