import Planets from "./wikiComponents/SectionPlanets";
import Cards from "./wikiComponents/Cards";
import Navbar from "./wikiComponents/WikiHeader";
import {motion} from 'framer-motion'
import ScrollTop from "../components/atoms/ScrollTop";
const WikiPlanet = () => {
  return (
    
      <>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.5 }}>
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
      <ScrollTop/>
      </motion.div>
    </>
    
    
  );
};

export default WikiPlanet;
