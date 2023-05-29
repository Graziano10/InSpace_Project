import Footer from "../components/bundles/footer/Footer";
import Header from "../components/bundles/header/Header";
import Section01 from "../components/bundles/header/Section01";

const Home = () => {

    return(
        <div style={{fontFamily: 'Karantina, sans-serif'}}>
            <Header/>
            <Section01/>
            <Footer/>
        </div>
    );
};

export default Home;