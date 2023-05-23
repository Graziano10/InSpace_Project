import "./SectionPlanets.css";
import stelle from "./WikiAssets/stelle.jpg";
import luna from "./WikiAssets/luna.png";
import marte from "./WikiAssets/marte.png";
import satuno from "./WikiAssets/Saturno.png";
import pianeta from "./WikiAssets/Terra.png";
function Planets() {
  return (
    <>
      <div className="Container">
        <img src={stelle} alt="" className="Stelle" />
        <div className="images-luna">
          <img src={luna} alt="luna" />
        </div>
        <div className="images-marte">
          <img src={marte} alt="marte" />
        </div>
        <div className="images-saturno">
          <img src={satuno} alt="marte" />
        </div>
        <div className="images-pianeta">
          <img src={pianeta} alt="marte" />
        </div>
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
