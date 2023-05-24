import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PlanetCarousel.css"

const PlanetCarousel = ({ planets }) => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {planets.map((planet) => (
        <div key={planet.id}>
          <img src={planet.image} alt={planet.name} />
          <p>{planet.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default PlanetCarousel;
