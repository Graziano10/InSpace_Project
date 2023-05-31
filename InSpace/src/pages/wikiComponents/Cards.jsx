import "./card.css";

import { useState } from "react";
function Cards() {
  const [initialParagraph, setInitialParagraph] = useState(
    <>
      <h1>Mars</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia <br />
        totam minima dignissimos in iste vel accusantium, odio quod <br />
        corrupti. Pariatur quo neque corporis debitis sed cumque consectetur{" "}
        <br />
        quisquam fuga tenetur!
      </p>
      <button>Explore</button>
    </>
  );

  const [initialCard1, setInitialCard1] = useState(
    <>
      <h5>Temperature</h5>
      <br />
      <p>
        The average surface temperature of the planet is 63°C below zero, with
        lows of 140°C below zero and highs of 20°C above zero.
      </p>
    </>
  );
  const [initialCard2, setInitialCard2] = useState(
    <>
      <h5>Water</h5>
      <br />
      <p>
        A study conducted by an Italian-American team advanced for the first
        time in 2018 explaned the presence of salt water in a liquid state in
        the subsoil of the Red Planet.
      </p>
    </>
  );
  const [initialCard3, setInitialCard3] = useState(
    <>
      <h5>Satellites</h5>
      <br />
      <p>
        The planet Mars has two small natural satellites: Phobos and Deimos. It
        is the only rocky planet in the inner solar system to have a satellite
        system.
      </p>
    </>
  );
  const [initialCard4, setInitialCard4] = useState(
    <>
      <h5>First form of life</h5>
      <br />
      <p>
        NASA's Perseverance rover has found rocks on the surface of Mars that
        contain organic molecules and which, according to experts from the US
        Space Agency, could be "a possible signature of life"
      </p>
    </>
  );

  const handleclickMoon = () => {
    setInitialParagraph(
      <>
        <h1>Moon</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia{" "}
          <br />
          totam minima dignissimos in iste vel accusantium, odio quod <br />
          corrupti. Pariatur quo neque corporis debitis sed cumque consectetur{" "}
          <br />
          quisquam fuga tenetur!
        </p>
        <button>Explore</button>
      </>
    );
    setInitialCard1(
      <>
        <h5>Lunar Spots</h5>
        <br />
        <p>
          The dark spots, as you call them, are ancient deposits of solidified
          lava that we now call seas
        </p>
      </>
    );

    setInitialCard2(
      <>
        <h5>Water</h5>
        <br />

        <p>
          A team of Chinese scientists has claimed to have discovered a new
          "reservoir" of water and ice on the Moon. The Chang'e-5 robot, engaged
          in a mission on lunar soil launched in 2020
        </p>
      </>
    );
    setInitialCard3(
      <>
        <h5>Craters</h5>
        <br />

        <p>
          An international group of researchers has analyzed the scars left on
          the lunar surface by asteroid impacts and found that the frequency
          with which these impacts have occurred has varied over time.
        </p>
      </>
    );
    setInitialCard4(
      <>
        <h5>Curiosity</h5>
        <br />

        <p>
          Man has reached the moon six times, first in 1969 with the Apollo 11
          mission, and lastly in 1972 with Apollo 17.
        </p>
      </>
    );
  };

  const handleclickSaturn = () => {
    setInitialParagraph(
      <>
        <h1>Saturn</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia{" "}
          <br />
          totam minima dignissimos in iste vel accusantium, odio quod <br />
          corrupti. Pariatur quo neque corporis debitis sed cumque consectetur{" "}
          <br />
          quisquam fuga tenetur!
        </p>
        <button>Explore</button>
      </>
    );
    setInitialCard1(
      <>
        <h5>Size</h5>
        <br />
        <p>
          Saturn's equatorial diameter is 120,536 km; it is over 9.5 times the
          diameter of the Earth
        </p>
      </>
    );

    setInitialCard2(
      <>
        <h5>Rings</h5>
        <br />
        <p>
          The rings of Saturn are planetary rings that revolve around the planet
          Saturn. In theory it could be considered as a single ring, but it is
          intentionally broken up into several separate rings. They are made up
          of billions of small fragments, ranging in size from micrometres to
          metres
        </p>
      </>
    );
    setInitialCard3(
      <>
        <h5>Temperature</h5>
        <br />

        <p>
          The winds blow very strong and are even faster than those that sweep
          Jupiter; the average surface temperature is -186 °C.
        </p>
      </>
    );
    setInitialCard4(
      <>
        <h5>Curiosity</h5>
        <br />

        <p>
          Saturn is the second largest planet in the solar system: it has a
          radius of 58,232 kilometers and has a mass 95 times that of the Earth.
        </p>
      </>
    );
  };
  const handleclickjupiter = () => {
    setInitialParagraph(
      <>
        <h1>Jupiter</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia{" "}
          <br />
          totam minima dignissimos in iste vel accusantium, odio quod <br />
          corrupti. Pariatur quo neque corporis debitis sed cumque consectetur{" "}
          <br />
          quisquam fuga tenetur!
        </p>
        <button>Explore</button>
      </>
    );
    setInitialCard1(
      <>
        <h5>Composizion</h5>
        <br />

        <p>
          It is a gaseous planet, in fact its density is much lower than that of
          the Earth. Jupiter is three-quarters made up of a huge body of liquid
          hydrogen
        </p>
      </>
    );

    setInitialCard2(
      <>
        <h5>Atmosphere</h5>
        <br />

        <p>
          Jupiter's atmosphere is the largest planetary atmosphere in the solar
          system. It is composed mainly of molecular hydrogen and helium with
          traces of methane, ammonia, hydrogen sulphide and water
        </p>
      </>
    );
    setInitialCard3(
      <>
        <h5>Temperatura</h5>
        <br />

        <p>
          With an average temperature of minus 234 degrees Fahrenheit (minus 145
          degrees Celsius), Jupiter is frigid even in its warmest weather.
        </p>
      </>
    );
    setInitialCard4(
      <>
        <h5>Curiosity</h5>
        <br />

        <p>
          In fact, Jupiter boasts, at a distance of 55,000 km from the highest
          clouds in the atmosphere, on the equatorial plane, a formation of
          planetary rings.
        </p>
      </>
    );
  };

  const reset = () => {
    setInitialParagraph(
      <>
        <h1>Mars</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia{" "}
          <br />
          totam minima dignissimos in iste vel accusantium, odio quod <br />
          corrupti. Pariatur quo neque corporis debitis sed cumque consectetur{" "}
          <br />
          quisquam fuga tenetur!
        </p>
        <button>Explore</button>
      </>
    );
    setInitialCard1(
      <>
        <h5>Temperature</h5>
        <br />
        <p>
          The average surface temperature of the planet is 63°C below zero, with
          lows of 140°C below zero and highs of 20°C above zero.
        </p>
      </>
    );
    setInitialCard2(
      <>
        <h5>Water</h5>
        <br />
        <p>
          A study conducted by an Italian-American team advanced for the first
          time in 2018 explaned the presence of salt water in a liquid state in
          the subsoil of the Red Planet.
        </p>
      </>
    );
    setInitialCard3(
      <>
        <h5>Satellites</h5>
        <br />
        <p>
          The planet Mars has two small natural satellites: Phobos and Deimos.
          It is the only rocky planet in the inner solar system to have a
          satellite system.
        </p>
      </>
    );
    setInitialCard4(
      <>
        <h5>First form of life</h5>
        <br />
        <p>
          NASA's Perseverance rover has found rocks on the surface of Mars that
          contain organic molecules and which, according to experts from the US
          Space Agency, could be "a possible signature of life"
        </p>
      </>
    );
  };
  return (
    <>
      <div className="infoh2">
        <h2>Information about some planets</h2>
      </div>
      <div className="BannerButton">
        <button onClick={reset}>Mars</button>
        <button onClick={handleclickMoon}>Moon</button>
        <button onClick={handleclickSaturn}>Saturn</button>
        <button onClick={handleclickjupiter}>Jupiter</button>
      </div>
      <div className="card-container-planet">
        <div className="row">
          <div className="col main-paragraph">{initialParagraph}</div>
          <div className="wrapcard">
            <div className="col">
              <div className="cards card1">{initialCard1}</div>
            </div>
            <div className="col">
              <div className="cards card2">{initialCard2}</div>
            </div>
            <div className="col">
              <div className="cards card3">{initialCard3}</div>
            </div>
            <div className="col">
              <div className="cards card4">{initialCard4}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
