import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
    <div className="h-screen text-white flex items-center relative z-1">
      
      <section className="w-full bg-cover bg-center h-full bg-[url('/src\assets\assets-Header\moon-3704285_1920.jpg')] ring">
      <NavBar/>
        <div className="container mx-auto text-center text-white flex flex-col justify-center items-center h-full z-20">
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
      </section>
    </div>
    </>
  );
};

export default Header;
