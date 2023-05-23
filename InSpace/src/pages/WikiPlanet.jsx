import Planets from "./wikiComponents/SectionPlanets";

const WikiPlanet = () => {
  return (
    <>
      <div className="FirstPart">
        <section></section>
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
