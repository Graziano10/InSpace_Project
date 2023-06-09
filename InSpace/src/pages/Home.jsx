import Footer from "../components/bundles/footer/Footer";
import Header from "../components/bundles/header/Header";
import Section01 from "../components/bundles/header/Section01";
import Fade from 'react-reveal'

const Home = () => {
  return (
    
      <div>
        <Fade>
        <Header />
        <Section01 />
        <Footer />
        </Fade>
      </div>
    
  );
};

export default Home;
