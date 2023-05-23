import { Routes, Route, Link } from "react-router-dom"
import ExplorPlanets from "./pages/ExplorPlanets"
import WikiPlanet from "./pages/WikiPlanet"
import FormPlanet from "./pages/FormPlanet"
import Home from "./pages/Home"

const App = () => {
  return(
    <>
      <nav className="hidden"> 
        <Link to="/">Home</Link>
        <Link to="/ExplorPlanets">ExplorPlanets</Link>
        <Link to="/WikiPlanet">WikiPlanet</Link>
        <Link to="/FormPlanet">FormPlanet</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ExplorPlanets" element={<ExplorPlanets />}/>
        <Route path="/WikiPlanet" element={<WikiPlanet/>}/>
        <Route path="/FormPlanet" element={<FormPlanet/>}/>
      </Routes>
    </>
  )
};

export default App;