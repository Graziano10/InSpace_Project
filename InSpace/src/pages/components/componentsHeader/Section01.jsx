import { Link } from "react-router-dom";

const Section01 = () => {
  const divStyle02 = {
    backgroundImage: "url('src/assets/universe04.jpg')",
  };

  return (
    <div className="h-screen text-white flex items-center justify-center relative bg-slate-950">
      <section className="w-11/12 h-5/6 bg-cover bg-center rounded-lg" style={divStyle02}>
        <div className="container mx-auto text-center text-white ml-80 mt-16">
          <h1 className="text-5xl font-medium mb-6">Universo: la meraviglia oltre</h1>
          <p className="text-xl mb-12">
          Vieni a scoprire l'universo e immergiti in un'avventura cosmica senza precedenti.
          </p>
          <Link
            to="/ExplorPlanets"
            className="bg-white text-black py-4 px-12 rounded-md hover:bg-neutral-200"
          >
            Registrati
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Section01;
