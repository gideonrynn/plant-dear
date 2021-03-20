import React, {useEffect, useContext } from "react";
import "./style.css";
import Progress from "../../components/ProgressBar/index"
import HomeComponents from "../../components/HomeComponents";
import { WeatherContext } from "../../context/WeatherContext"

const Home = () => {

    const weather = useContext(WeatherContext);
    const currentWeather = weather.currentWeather;
    const forecastWeather = weather.forecastWeather;
    // let [renderComponent, setrenderComponent] = useState([<Progress key="1" />])
 
    console.log("Home forecastWeather: ", forecastWeather);
    console.log("Home currentWeather: ", currentWeather);

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