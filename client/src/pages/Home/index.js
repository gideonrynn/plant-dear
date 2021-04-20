import React, { useContext } from "react";
import Progress from "../../components/ProgressBar/index"
import HomeComponents from "../../components/HomeComponents";
import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
import "./style.css";

const Home = () => {

    const weather = useContext(WeatherContext);
    const currentWeather = weather.currentWeather;
    const forecastWeather = weather.forecastWeather;
    const plant = useContext(PlantContext);
    const activePlants = plant.activePlants;
    const inactivePlants = plant.inactivePlants;
    // let [renderComponent, setrenderComponent] = useState([<Progress key="1" />])
 
    // console.log("Home forecastWeather: ", forecastWeather);
    // console.log("Home currentWeather: ", currentWeather);
    // console.log("Home plant context", activePlants);

    return (
        
        <div className="main-title">
            {currentWeather && forecastWeather
                ? <HomeComponents key="2"/>
                : <Progress key="1" />
            }

        </div>
 
    );
  }
  
  
  export default Home;