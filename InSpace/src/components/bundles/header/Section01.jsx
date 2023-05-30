import React,  {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Section01 = () => {
  const [countdown, setCountdown] = useState(10);

  const divStyle02 = {
    backgroundImage: "url('/src/assets/assets-Header/universe04.jpg')"
  };
  const logoHeader = {
    backgroundImage: "url('/src/assets/assets-Header/nasa-Q1p7bh3SHj8-unsplash.jpg')"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="h-screen text-white flex items-center justify-center relative bg-[#04091b] z-1">
      <section className=" container w-11/12 h-5/6 bg-cover bg-center rounded-lg flex" style={logoHeader}>
        <div className="container mx-auto text-center text-white flex flex-col justify-center items-center ">
          <h1 className="text-5xl font-medium mb-6">Universo: la meraviglia oltre</h1>
          <p className="text-xl mb-12">
          Vieni a scoprire l'universo e immergiti in un'avventura cosmica senza precedenti.
          </p>
          <Link
            to="/ExplorPlanets"
            className="bg-white text-black py-4 px-12 rounded-[40px] hover:bg-neutral-200 h-9 flex justify-center items-center"
          >
            Registrati
          </Link>
          <div>
      <h1>Countdown</h1>
      {countdown > 0 ? (
        <p>
          Tempo rimanente: {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </p>
      ) : (
        <p>Countdown terminato!</p>
      )}
    </div>
        </div>
      </section>
    </div>
  );
};

export default Section01;
