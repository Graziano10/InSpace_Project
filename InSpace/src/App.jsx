import { Routes, Route, Link, Navigate } from "react-router-dom";
import ExplorPlanets from "./pages/ExplorPlanets";
import WikiPlanet from "./pages/WikiPlanet";
import FormPlanet from "./pages/FormPlanet";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SectionProfile from './pages/SectionProfile';
import Reservation from "./pages/Reservation";






const App = () => {
  return (
    <>
      <nav className="hidden" >
        <Link to="/">Home</Link>
        <Link to="/Explor-Planets">ExplorPlanets</Link>
        <Link to="/Form-Planet">FormPlanet</Link>
        <Link to="/Wiki-Planet">WikiPlanets</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Section-Profile">SectionProfile</Link>
        <Link to="/reservation">Reservation</Link>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explor-planets" element={<ExplorPlanets />} />
          <Route path="/wiki-planet" element={<WikiPlanet />} />
          <Route path="/form-planet" element={<FormPlanet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/section-profile" element={<SectionProfile/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
        </Routes>

    </>
  );
};

export default App;