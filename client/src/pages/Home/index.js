import React, {useEffect, useState, useContext } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
// import Current from "../../components/Current/index"
// import ModPlants from "../../components/ModPlants/index"
// import WatchlistSnip from "../../components/WatchlistSnip/index"
import WeatherAPI from "../../utils/WeatherAPI"
// import { Container, Row, Col, CardColumns } from "react-bootstrap"
import Progress from "../../components/ProgressBar/index"
// import Hardiness from "../../components/Hardiness/index"
// import HardinessSnip from "../../components/HardinessSnip"
// import HumiditySnip from "../../components/HumiditySnip";
// import WaterSnip from "../../components/WaterSnip";
// import PropaSnip from "../../components/PropaSnip";
// import HomeComponent from "../../components/HomeComponents";
import HomeComponents from "../../components/HomeComponents";
import {WeatherContext} from "../../context/WeatherContext"

// import HomePage from "../../components/Home Page";

function Home () {

    // Setting our component's initial state
    // const [currentWeather, setCurrentWeather] = useState([])
    const currentWeather = useContext(WeatherContext)
    const [forecastWeather, setForecastWeather] = useState([]);
    let [renderComponent, setrenderComponent] = useState([<Progress key="1" />])
 
    console.log(forecastWeather)

    // Load all plants and store them within setPlants
    useEffect(() => {

        // setTimeout(() => {

            // loadStaticWeather()
            // loadCurrentWeather()
            // loadForecastWeather()

        // }, 2000);
        
    
    }, [])

    console.log(currentWeather)

    console.log(currentWeather[0].app_temp)
    return (
        
        <div className="main-title">
            {currentWeather.length > 0
                ? <HomeComponents key="2"/>
                : <Progress key="1" />
            }

        </div>
 
    );
  }
  
  
  export default Home;