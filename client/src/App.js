import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewPlant from "./pages/AddPlants/AddPlants.js"
import HeaderAll from "./components/HeaderAll/HeaderAll.js";
import Home from "./pages/Home/Home.js";
import SiteNavigation from "./components/SiteNavigation/SiteNavigation.js"
import Plants from "./pages/Plants/Plants.js";
import Planning from "./pages/Planning/Planning.js";
import Editing from "./pages/Editing/Editing.js";
import PlantDetail from "./pages/PlantDetail/PlantDetail.js";
import Sorting from "./pages/Sorting/Sorting.js";
import Tasks from "./pages/Tasks/Tasks.js";
import Watering from "./pages/Watering/Watering.js";
import Outdoor from "./pages/Outdoor/Outdoor.js";
import Weather from "./pages/Weather/Weather.js";
import { WeatherProvider } from "../src/context/WeatherContext";
import { PlantProvider } from "../src/context/PlantContext";
import "bootstrap/dist/css/bootstrap.min.css";

/*ToDo: 
*determine if HeaderAll should really be for all pages, or only for home. may do a subheader for subpages
*/

function App() {
  return (
    <Router>
      <div className="App" >
        <WeatherProvider>
          <PlantProvider>
          <SiteNavigation/>
          <HeaderAll/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/archive" element={<Plants/>}/>
            <Route path="/plants" element={<Sorting/>}/>
            <Route path="/watering" element={<Watering/>}/>
            <Route path="/outdoor" element={<Outdoor/>}/>
            <Route path="/plants/:plantname" element={<PlantDetail/>}/>
            {/* <Route path="/plantdetail" element={PlantDetail}/> */}
            <Route path="/weather" element={<Weather/>}/>
            <Route path="/addnewplants" element={<AddNewPlant/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/planning" element={<Planning/>}/>
            <Route path="/editing" element={<Editing/>}/>
            {/* <Route exact path="/dashboard" element={Dashboard}/> */}
          </Routes>
          </PlantProvider>
        </WeatherProvider>
      </div>
    </Router>
  );
}

export default App;
