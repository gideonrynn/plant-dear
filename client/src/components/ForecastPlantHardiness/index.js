import React from 'react'
import './style.css'
// weather context
// plant data
// condition that checks the hardiness

const ForecastPlantHardiness = (weather) => {

    const forecastWeather = weather.weather;
    console.log("Forecast weather for ForecastPlantHardiness component", forecastWeather);

    // get all the plants that are outdoors
    
    return (
        <div className="forecast-plant-hardiness-section">
            <p>Test</p>
        </div>
    )
};

export default ForecastPlantHardiness;
