import React, { useContext } from "react";
import Progress from "../../components/LoadDataProgress/LoadDataProgress"
import HomeComponents from "../../components/HomeComponents/HomeComponents.js";
import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
import "./Home.css";

const Home = () => {

    /*Description: confirms data has been loaded and displays home components if so, else, will show the Progress detail*/

    console.log("Home component initialized");
    const weather = useContext(WeatherContext);
    const currentWeather = weather.currentWeather;
    const forecastWeather = weather.forecastWeather;
    const plant = useContext(PlantContext);
    // const activePlants = plant.activePlants;
    // const inactivePlants = plant.inactivePlants;
    // let [renderComponent, setrenderComponent] = useState([<Progress key="1" />])
 
    // console.log("Home forecastWeather: ", forecastWeather);
    // console.log("Home currentWeather: ", currentWeather);
    // console.log("Home page plant context", activePlants);

    return (
        
        <div className="main-title">
            {currentWeather && forecastWeather && plant
                ? <HomeComponents key="2"/>
                : <Progress key="1" />
            }

        </div>
 
    );
  }
  
  
  export default Home;