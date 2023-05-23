import Planets from "./wikiComponents/SectionPlanets";
import Navbar from "./wikiComponents/Navbar";

const WikiPlanet = () => {
  return (
    <>
      <div className="FirstPart">
        <section>
          <Navbar />
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
