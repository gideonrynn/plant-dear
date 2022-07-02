import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
// import { useLocation, withRouter } from "react-router-dom";
// import PlantBlockAll from "../PlantBlockAll/PlantBlock"
import './PlantForecastHardiness.css'
// weather context
// plant data
// condition that checks the hardiness

const PlantForecastHardiness = (data) => {
    
    console.log("PlantForecastHardiness component initialized");
    const forecastWeather = data.weather;
    const plants = data.plants;
    let location = useLocation();
    let pathname = location.pathname.slice(1);
    const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // console.log(plants);

    useEffect(() => {
        console.log("PlantForecastHardiness component rerendered");
    }, [])

    // let d = new Date(forecastWeather[0].valid_date);
    // console.log(d.toLocaleDateString('en-US', {timeZone: 'UTC'}));
    // console.log("Forecast weather for ForecastPlantHardiness component", forecastWeather);
    // console.log("Active plants for ForecastPlantHardiness component", plants);

    // get all the plants that are outdoors and have an existing hardiness
    let outdoorPlants = plants.filter(plants => { 
        return plants.hardiness !== "" && plants.location === "outdoor"
    });
    // let outdoorPlantsVol = outdoorPlants.length;
    // console.log("Outdoor plants", outdoorPlants)

    /*Winter safe qualifies as plants with a hardiness equal to or less than Chicago's (-20)
    Exclude records where the hardinessZoneMin does not exist*/
    // let outdoorWinterSafe = plants.filter(plants => { 
    //     return plants.hardinessZoneMin !== undefined && plants.location === "outdoor" && (plants.hardinessZoneMin <= 5 || plants.hardiness <= -15) && plants.cycle === "perennial"
    // });
    // console.log("Winter safe plants: ", outdoorWinterSafe);
    let outdoorWinterSafeMaybe = plants.filter(plants => { 
        return plants.hardinessZoneMin !== undefined && plants.location === "outdoor" && (plants.hardinessZoneMin <= 7 || plants.hardiness <= 0) && plants.cycle === "perennial"
    });

    return (
        <div className="forecast-plant-hardiness-container">
            <h3 className="forecast-hardiness-header">Upcoming weather with plants in danger</h3>
            <div className="forecast-plant-hardiness-section">
            

            {pathname === "" ? 
                <>

                    <div className="forecast-options-today">
                        {forecastWeather.slice(0, 1).map(weather => (
                            <div key={weather.ts} className="forecast-weather">
                                <span>{dayOfWeek[new Date(weather.valid_date).getDay()]} </span>
                                <span>{new Date(weather.valid_date).toLocaleDateString('en-US', {timeZone: 'UTC'}).slice(0,4)}</span> { }
                                <br></br>
                                <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} className="weather-icon"></img>
                                <p>H: {weather.high_temp}</p> { }
                                <p className="low-temp">L: {weather.low_temp}</p> { }
                                {/* <span>{weather.weather.description}</span> { } */}

                                <div className="forecast-plants">
                                    {outdoorPlants.map((plants, index) => (
                                        plants.hardiness > weather.low_temp ?
                                        <div key={index}>
                                            <span>{plants.name}</span> { }
                                            <span>({plants.hardiness}&#176;)</span> { }
                                            {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> */}
                                        </div> : null
                                    ))}
                                </div>
                            </div>
                        ))}
                        
                    </div>
        
                    <div className="forecast-options-next">
                        {forecastWeather.slice(1, 5).map(weather => (
                            <div key={weather.ts} className="forecast-weather">
                                <span>{dayOfWeek[new Date(weather.valid_date).getDay()]} </span>
                                <span>{new Date(weather.valid_date).toLocaleDateString('en-US', {timeZone: 'UTC'}).slice(0,4)}</span> { }
                                <p>H: {weather.high_temp}</p> { }
                                <p className="low-temp">L: {weather.low_temp}</p> { }
                                {/* <span>{weather.weather.description}</span> { } */}
                                <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} className="weather-icon"></img>
                                <div className="forecast-plants">
                                    {outdoorPlants.map((plants, index) => (
                                        plants.hardiness > weather.low_temp ?
                                        <div key={index}>
                                            <span>{plants.name}</span> { }
                                            <span>({plants.hardiness}&#176;)</span> { }
                                            {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> */}
                                        </div> : null
                                    ))}
                                </div>
                                
                            </div>
                            
                        ))}
                        
                    </div>

                <header className="forecast-wintersafe-header"><h2>Winter Safe</h2></header>
                <div className="winter-safe-maybe">
                    {outdoorWinterSafeMaybe.map(plants => (
                            <div key={plants._id}>
                                <span>{plants.name}</span> { }
                                <span>({plants.hardiness}&#176;)</span> { }
                                <span>Zone {plants.hardinessZoneMin || "not listed"}</span> { }
                                <span>{plants.cycle}</span> { }
                                {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> */}
                            </div>
                        ))}
                    
                </div>
            </>: 
                            <div className="forecast-options">
                            {forecastWeather.map(weather => (
                                <div key={weather.ts} className="forecast-weather">
                                    <span>{dayOfWeek[new Date(weather.valid_date).getDay()]} </span>
                                    <span>{new Date(weather.valid_date).toLocaleDateString('en-US', {timeZone: 'UTC'}).slice(0,4)}</span> { }
                                    <p>H: {weather.high_temp}</p> { }
                                    <p className="low-temp">L: {weather.low_temp}</p> { }
                                    {/* <span>{weather.weather.description}</span> { } */}
                                    <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} className="weather-icon"></img>
                                    <div className="forecast-plants">
                                        {outdoorPlants.map((plants, index) => (
                                            plants.hardiness > weather.low_temp ?
                                            <div key={index}>
                                                <span>{plants.name}</span> { }
                                                <span>({plants.hardiness}&#176;)</span> { }
                                                {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> */}
                                            </div> : null
                                        ))}
                                    </div>
                                </div>
                            ))}
                            
                        </div>
            }
            </div>
        </div>
    )
};

export default PlantForecastHardiness;
