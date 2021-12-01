import React, {useEffect, useContext } from "react";
import PlantForecastHardiness from "../../components/PlantForecastHardiness/PlantForecastHardiness.js"
import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
import "./Weather.css";

function Weather () {

    /*Description: Dedicated weather page
    */
   /*ToDo: Handle rendering for this page versus home page. Home page will have a snapshot, whereas weather page will allow range of data*/

    console.log("Weather page initialized, with context");
    // Setting our component's initial state
    // const [forecastWeather, setForecastWeather] = useState([])
    // const date = new Date();
    const weather = useContext(WeatherContext);
    // const currentWeather = weather.currentWeather;
    const forecastWeather = weather.forecastWeather;
    const plant = useContext(PlantContext);
    const activePlants = plant.activePlants;
    // const inactivePlants = plant.inactivePlants;

    // Load all plants and store them within setPlants
    useEffect(() => {

        // loadForecastWeather()
    
    }, [])


    return (
        <div className="forecast-div">
            <PlantForecastHardiness weather={forecastWeather} plants={activePlants}/>
        </div>
    )
}

export default Weather;