import "./SectionPlanets.css";
import { useState } from "react";

import PlanetCarousel from "./PlanetCarousel";
import luna from "./WikiAssets/Pianeti Carosello/Luna.png";
import Giove from "./WikiAssets/Pianeti Carosello/Giove.png";
import satuno from "./WikiAssets/Pianeti Carosello/saturno.png";
import pianeta from "./WikiAssets/Terra.png";
function Planets() {
  const [planets] = useState([
    { id: 1, name: "Giove", image: Giove },
    { id: 2, name: "Luna", image: luna },
    { id: 3, name: "Saturno", image: satuno },
    { id: 4, name: "Terra", image: pianeta },
  ]);

  return (
    <>
      <div className="banner">
        <h4>The most important choise</h4>
        <div className="adv">
          <a href="">
            Click a planet below or return to <span>Home</span>{" "}
          </a>
        </div>
      </div>
      <div className="Container">
        <PlanetCarousel planets={planets} />
        <div className="Little-section">
          <p>
            Augmented reality is an interactive <br />
            experience that combines the real word <br />
            and computer-genereted content
          </p>
          <button id="Life">Life</button>
          <button id="GoHome">Go Home</button>
        </div>
      </div>
    </>
  );
}
export default Planets;
