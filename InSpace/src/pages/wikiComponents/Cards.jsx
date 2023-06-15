import { Link } from "react-router-dom";
import "./card.css";

import { useState } from "react";
function Cards() {
  const [initialParagraph, setInitialParagraph] = useState(
    <>
      <h1>Mars</h1>
      <p>
        Mars is the fourth planet and the furthest terrestrial planet from the{" "}
        Sun. The reddish color of its surface is due to finely grained iron
        oxide dust in the soil, giving it the nickname "the Red Planet". Mars
        has a second smallest radius among the planets in the Solar System at
        3,389.5 km and has a surface gravity of 3.72 m/s2 , which is 38% of
        Earth's gravity.
      </p>
      <Link to={"Explor-Planets"}>
        {" "}
        <button>Explore</button>{" "}
      </Link>
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
          The Moon is Earth's only natural satellite. Its diameter is about{" "}
          one-quarter of Earth's (comparable to the width of Australia), making
          it the fifth largest satellite in the Solar System and the largest and
          most massive relative to its parent planet. It is larger than all
          known dwarf planets in the Solar System.
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
          Saturn is the sixth planet from the Sun and the second-largest in the{" "}
          Solar System, after Jupiter. It is a gas giant with an average radius{" "}
          of about nine and a half times that of Earth. It has only one-eighth
          the average density of Earth, but is over 95 times more massive.
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
          Saturn.They are made up of billions of small fragments, ranging in
          size from micrometres to metres
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
          Jupiter is the fifth planet from the Sun and the largest in the Solar{" "}
          System. It is a gas giant with a mass more than two and a half times{" "}
          that of all the other planets in the Solar System combined, and
          slightly less than one one-thousandth the mass of the Sun.
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
          traces of methane, ammonia, hydrogen and water
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
          Mars is the fourth planet and the furthest terrestrial planet from the{" "}
          Sun. The reddish color of its surface is due to finely grained iron
          oxide dust in the soil, giving it the nickname "the Red Planet". Mars
          has a second smallest radius among the planets in the Solar System at
          3,389.5 km and has a surface gravity of 3.72 m/s2 , which is 38% of
          Earth's gravity.
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
