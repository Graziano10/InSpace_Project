import Header from "./components/componentsHeader/Header";
import NavBar from "./components/componentsHeader/NavBar";
import Section01 from "./components/componentsHeader/Section01";
import Footer from "./footer/Footer";


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