import "./SectionPlanets.css";
import { useState } from "react";
import stelle from "./WikiAssets/stelle.jpg";
import PlanetCarousel from "./PlanetCarousel";
import luna from "./WikiAssets/luna.png";
import marte from "./WikiAssets/marte.png";
import satuno from "./WikiAssets/Saturno.png";
import pianeta from "./WikiAssets/Terra.png";
function Planets() {
  const [planets] = useState([
    { id: 1, name: "Marte", image: marte },
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
        <img src={stelle} alt="" className="Stelle" />
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
