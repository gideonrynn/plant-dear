import React from 'react'
import './style.css'
// weather context
// plant data
// condition that checks the hardiness

const ForecastPlantHardiness = (data) => {

    const forecastWeather = data.weather;
    console.log("Forecast weather for ForecastPlantHardiness component", forecastWeather);
    const plants = data.plants;
    console.log("Active plants for ForecastPlantHardiness component", plants);

    // get all the plants that are outdoors

    return (
        <div className="forecast-plant-hardiness-section">
            <p>Test</p>
        </div>
    )
};

export default ForecastPlantHardiness;
