import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNewPlant from "./pages/AddPlants/AddPlants.js"
import HeaderAll from "./components/HeaderAll/HeaderAll.js";
import Home from "./pages/Home/Home.js";
import SiteNavigation from "./components/SiteNavigation/SiteNavigation.js"
import Plants from "./pages/Plants/Plants.js";
import Planning from "./pages/Planning/Planning.js";
import PlantDetail from "./pages/PlantDetail/PlantDetail.js";
import Sorting from "./pages/Sorting/Sorting.js";
import Tasks from "./pages/Tasks/Tasks.js";
import Watering from "./pages/Watering/Watering.js";
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
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/archive" component={Plants}/>
            <Route exact path="/plants" component={Sorting}/>
            <Route exact path="/watering" component={Watering}/>
            <Route path="/plantdetails" component={PlantDetail}/>
            {/* <Route path="/plantdetail" component={PlantDetail}/> */}
            <Route exact path="/weather" component={Weather}/>
            <Route exact path="/addnewplants" component={AddNewPlant}/>
            <Route exact path="/tasks" component={Tasks}/>
            <Route exact path="/planning" component={Planning}/>
            {/* <Route exact path="/dashboard" component={Dashboard}/> */}
          </Switch>
          </PlantProvider>
        </WeatherProvider>
      </div>
    </Router>
  );
}

export default App;
