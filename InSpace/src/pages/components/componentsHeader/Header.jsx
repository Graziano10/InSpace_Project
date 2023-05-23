import { Link } from "react-router-dom";

const Header = () => {
  const divStyle = {
    backgroundImage: "url('src/assets/universe03.jpg')",
  };

  return (
    <div className="h-screen text-white flex items-center relative">
      <section className="w-full bg-cover bg-center h-full" style={divStyle}>
        <div className="container mx-auto text-center text-white absolute top-60">
          <h1 className="text-5xl font-medium mb-6">Welcome InSpace</h1>
          <p className="text-xl mb-12">
            Un piccolo passo per l'uomo, un grande passo per l'umanita <br></br> oggi ne
            sono stai fatti due, i viaggi interplanetari sono ora una realtà,
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
  );
};

export default Header;
