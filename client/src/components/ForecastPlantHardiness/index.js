import React, {useEffect} from 'react'
import './style.css'
// weather context
// plant data
// condition that checks the hardiness

const ForecastPlantHardiness = (data) => {
    
    const forecastWeather = data.weather;
    const plants = data.plants;

    useEffect(() => {
        console.log("ForecastPlantHardiness component rendered");
    }, [])

    // let d = new Date(forecastWeather[0].valid_date);
    // console.log(d.toLocaleDateString('en-US', {timeZone: 'UTC'}));
    // console.log("Forecast weather for ForecastPlantHardiness component", forecastWeather);
    // console.log("Active plants for ForecastPlantHardiness component", plants);

    // get all the plants that are outdoors and have an existing hardiness
    let outdoorPlants = plants.filter(plants => { 
        return plants.hardiness !== "" && plants.location === "outdoor"
    });

    return (
        <div className="forecast-plant-hardiness-section">

            <header className="forecast-allplants-header"><h2>All Outdoor Plants</h2></header>

                <div className="forecast-alloutdoor">
                    {outdoorPlants.map(plants => (
                        <div key={plants.id}>
                            <span>{plants.name}</span> { }
                            <span>({plants.hardiness}&#176;)</span> { }
                            {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> */}
                        </div>
                    ))}
                </div>

            <hr></hr>

            <header className="forecast-plant-header"><h2>Outdoor Plants versus Low Temp</h2></header>
    
            <div className="forecast-options">
                {forecastWeather.map(weather => (
                    <div key={weather.id} className="forecast-weather">
                        <p>{new Date(weather.valid_date).toLocaleDateString('en-US', {timeZone: 'UTC'})}</p> { }
                        <span>H: {weather.high_temp}</span> { }
                        <span className="low-temp">L: {weather.low_temp}</span> { }
                        {/* <span>{weather.weather.description}</span> { } */}
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
