import Footer from "../components/bundles/footer/Footer";
import Header from "./components/componentsHeader/Header";
import NavBar from "./components/componentsHeader/NavBar";
import Section01 from "./components/componentsHeader/Section01";



const Home = () => {

    return(
        <div>
            <NavBar/> 
            <Header/>
            <Section01/>
            <Footer/>
        </div>
    );
};

export default Home;