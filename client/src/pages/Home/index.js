import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
// import Current from "../../components/Current/index"
// import ModPlants from "../../components/ModPlants/index"
// import WatchlistSnip from "../../components/WatchlistSnip/index"
// import WeatherAPI from "../../utils/WeatherAPI"
// import { Container, Row, Col, CardColumns } from "react-bootstrap"
import Progress from "../../components/ProgressBar/index"
// import Hardiness from "../../components/Hardiness/index"
// import HardinessSnip from "../../components/HardinessSnip"
// import HumiditySnip from "../../components/HumiditySnip";
// import WaterSnip from "../../components/WaterSnip";
// import PropaSnip from "../../components/PropaSnip";
// import HomeComponent from "../../components/HomeComponents";
import HomeComponents from "../../components/HomeComponents";

// import HomePage from "../../components/Home Page";

function Home () {

    // Setting our component's initial state
    const [, setCurrentWeather] = useState([])
    let [renderComponent, setrenderComponent] = useState([<Progress key="1" />])
 


    // Load all plants and store them within setPlants
    useEffect(() => {

        // setTimeout(() => {

            loadStaticWeather()
            // loadCurrentWeather()

        // }, 2000);
        
    
    }, [])


    // function loadCurrentWeather() {
        
    //     WeatherAPI.getTodaysWeather()
        
    //         .then(res => {

    //             const currentWeather = res.data;
    //             console.log(res.data)

    //             if (currentWeather.temp > 0) {
    //                 setCurrentWeather(currentWeather);
    //                 renderComponent = [
    //                     <HomeComponents currentWeather={currentWeather}/>
    //                     ];
    //                 setrenderComponent(renderComponent);
    //             }

    //         })
    //         .catch(err => console.log(err));
            
    // }

    function loadStaticWeather() {

        const currentWeather = {
            temp: 36,
            wind_spd: 1
        }

            if (currentWeather.temp > 0) {
                setCurrentWeather(currentWeather);
                renderComponent = [
                    <HomeComponents key="2" currentWeather={currentWeather}/>
                    ];
                setrenderComponent(renderComponent);
            }

    }


    return (
        <div className="main-title">

            {renderComponent}

            
        </div>
 
    );
  }
  
  
  export default Home;