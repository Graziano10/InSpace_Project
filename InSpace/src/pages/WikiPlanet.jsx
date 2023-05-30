import Planets from "./wikiComponents/SectionPlanets";
import Navbar from "./wikiComponents/Navbar";
import Cards from "./wikiComponents/Cards";

const WikiPlanet = () => {
  return (
    <>
      <div className="FirstPart">
        <section>
          <Navbar />
        </section>
      </div>
      <div className="Middlepart">
        <section>
          <Cards />
        </section>
      </div>
      <div className="LastPart">
        <section>
          <Planets />
        </section>
      </div>
    </>
  );
};

export default WikiPlanet;
