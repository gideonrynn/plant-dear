import React, {useEffect, useState, useContext } from "react";
import "./style.css";
import WeatherAPI from "../../utils/WeatherAPI"
import ForecastPlantHardiness from "../../components/ForecastPlantHardiness/"
import {WeatherContext} from "../../context/WeatherContext"
import {PlantContext} from "../../context/PlantContext"

function Weather () {

    // Setting our component's initial state
    // const [forecastWeather, setForecastWeather] = useState([])
    // const date = new Date();
    const weather = useContext(WeatherContext)
    const currentWeather = weather.currentWeather;
    const forecastWeather = weather.forecastWeather;
    const plant = useContext(PlantContext);
    const activePlants = plant.activePlants;
    const inactivePlants = plant.inactivePlants;

    // Load all plants and store them within setPlants
    useEffect(() => {

        // loadForecastWeather()
    
    }, [])

    // Loads all plants and sets them to plants state
    // function loadForecastWeather() {
    //     WeatherAPI.getForecastWeather()
    //         .then(res => {
    //             const forecastWeather = res.data;
    //             console.log(forecastWeather);
    //             setForecastWeather(forecastWeather)
    //         })
    //         .catch(err => console.log(err));
    // }

    // function consoleHello(event) {
    //     console.log("You clicked on the" + event.target.id + " row.")
    // }

    return (
        <div className="forecast-div">
            <ForecastPlantHardiness weather={forecastWeather} plants={activePlants}/>
            <br></br>
            {/* <table>

                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Icon</th>
                        <th>Date</th>
                        <th>Average Temp</th>
                        <th>Low Temp</th>
                        <th>High Temp</th>
           
                    </tr>
                </thead>


                <tbody>

                {forecastWeather.map(forecast => (

                    <tr key={forecast.ts}>
                        <th>{forecast.weather.description} </th>
                        <th><img alt="weather" src={`https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`} className="weather-icon"></img> </th>
                        <th>{forecast.valid_date} </th>
                        <th>{forecast.temp}&#176; </th>
                        <th>{forecast.low_temp}&#176; </th>
                        <th>{forecast.high_temp}&#176; </th>

                    </tr>))}

                </tbody>
            </table> */}



            <br></br>
        </div>
    )
}

export default Weather;