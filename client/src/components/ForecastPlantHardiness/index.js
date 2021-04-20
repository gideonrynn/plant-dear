import React from 'react'
import './style.css'
// weather context
// plant data
// condition that checks the hardiness

const ForecastPlantHardiness = (data) => {

    const forecastWeather = data.weather;
    const plants = data.plants;

    console.log("Forecast weather for ForecastPlantHardiness component", forecastWeather);
    console.log("Active plants for ForecastPlantHardiness component", plants);

    // get all the plants that are outdoors and have an existing hardiness
    let outdoorPlants = plants.filter(plants => { 
        return plants.hardiness !== "" && plants.location === "outdoor"
        // return allPlants.hardiness >= (currentWeatherL - 10) && allPlants.location === "outdoor"
    });

    return (
        <div className="forecast-plant-hardiness-section">
            <p>Outdoor Plants versus Low Temp</p>
            <div className="forecast-options">
                {forecastWeather.map(weather => (
                    <div key={weather.id}>
                        <span>{weather.valid_date}</span> { }
                        <span>H: {weather.high_temp}</span> { }
                        <span className="low-temp">L: {weather.low_temp}</span> { }
                        <span>{weather.weather.description}</span> { }
                        <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} className="weather-icon"></img>
                        <div className="forecast-plants">
                            {outdoorPlants.map(plants => (
                                plants.hardiness > weather.low_temp ?
                                <div key={plants.id}>
                                    <span>{plants.name}</span> { }
                                    <span>({plants.hardiness}&#176;)</span> { }
                                    {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> */}
                                </div> : null
                            ))}
                        </div>
                    </div>
                ))}
                
            </div>
            
        </div>
    )
};

export default ForecastPlantHardiness;
