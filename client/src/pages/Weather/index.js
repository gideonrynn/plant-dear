import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import WeatherAPI from "../../utils/WeatherAPI"
import { Table } from "react-bootstrap"

function Weather () {

    // Setting our component's initial state
    const [forecastWeather, setForecastWeather] = useState([])
    const date = new Date();

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadForecastWeather()
    
    }, [])

    // Loads all plants and sets them to plants state
    function loadForecastWeather() {
        WeatherAPI.getForecastWeather()
            .then(res => {
                const forecastWeather = res.data;
                console.log(forecastWeather);
                setForecastWeather(forecastWeather)
            })
            .catch(err => console.log(err));
    }

    // function consoleHello(event) {
    //     console.log("You clicked on the" + event.target.id + " row.")
    // }

    return (
        <div className="forecast-div">
            
            <h3>Next two weeks</h3>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Description</th>
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
                        <th>{forecast.valid_date} </th>
                        <th>{forecast.temp}&#176; </th>
                        <th>{forecast.low_temp}&#176; </th>
                        <th>{forecast.high_temp}&#176; </th>

                    </tr>))}

                </tbody>
            </Table>



            <br></br>
        </div>
    )
}

export default Weather;