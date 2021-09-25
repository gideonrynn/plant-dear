import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Plants from './pages/Plants';
import Sorting from './pages/Sorting';
import Weather from './pages/Weather';
import AddNewPlant from './pages/AddNewPlant'
import Navsite from "./components/Navsite/index.js"
import { WeatherProvider } from '../src/context/WeatherContext';
import { PlantProvider } from '../src/context/PlantContext';
import Tasks from './pages/Tasks';
import HeaderAll from './components/HeaderAll/HeaderAll';
import PlantOnly_Render from './pages/PlantOnly_Render';
import Watering from './pages/Watering';


function App() {
  return (
    <Router>
      <div className="App" >
        <WeatherProvider>
        <PlantProvider>
        <Navsite/>
        <HeaderAll/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/plants" component={Plants}/>
          <Route exact path="/sorting" component={Sorting}/>
          <Route exact path="/watering" component={Watering}/>
          <Route exact path="/plantdetails" component={PlantOnly_Render}/>
          <Route exact path="/weather" component={Weather}/>
          <Route exact path="/addnewplants" component={AddNewPlant}/>
          <Route exact path="/tasks" component={Tasks}/>
          {/* <Route exact path="/dashboard" component={Dashboard}/> */}
        </Switch>
        
        </PlantProvider>
        </WeatherProvider>
      </div>
    </Router>
  );
}

export default App;
