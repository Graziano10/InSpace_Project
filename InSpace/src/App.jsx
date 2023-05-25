import { Routes, Route, Link, Navigate  } from "react-router-dom";
import ExplorPlanets from "./pages/ExplorPlanets";
import WikiPlanet from "./pages/WikiPlanet";
import FormPlanet from "./pages/FormPlanet";
import Home from "./pages/Home";
import Login from "./pages/Login";




const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ExplorPlanets">ExplorPlanets</Link>
        <Link to="/FormPlanet">FormPlanet</Link> 
        <Link to="/Wiki-Planet">WikiPlanets</Link>
        <Link to="/Login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explor-planets" element={<ExplorPlanets />} />
        <Route path="/wiki-planet" element={<WikiPlanet />} />
        <Route path="/form-planet" element={<FormPlanet />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </>
  );
};


export default App;
