/* import Planets from "./wikiComponents/SectionPlanets"; */
import Cards from "./wikiComponents/Cards";
import Navbar from "./wikiComponents/WikiHeader";
import ScrollTop from "../components/atoms/ScrollTop";
import "./wikiComponents/SectionPlanets.css";
import Footer from "../components/bundles/footer/Footer";
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
         {/*  <Planets /> */}
        </section>
      </div>
      
     <Footer/>
     <ScrollTop/>
    </>
    
    
  );
};

export default WikiPlanet;
