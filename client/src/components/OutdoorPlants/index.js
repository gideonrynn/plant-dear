import React, { useEffect } from 'react'
// import { useLocation, withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import PlantBlockAll from "../PlantBlockAll/PlantBlock"
import Outdoor from "../../img/outdoor-1.jpg"
import './style.css'
// weather context
// plant data
// condition that checks the hardiness

const OutdoorPlants = (data) => {
    
    console.log("OurdoorPlants component initialized");
    // const forecastWeather = data.weather;
    const plants = data.plants;
    let location = useLocation();
    let pathname = location.pathname.slice(1);

    useEffect(() => {
        console.log("ForecastPlantHardiness component rerendered");
    }, [])

    // get all the plants that are outdoors and have an existing hardiness
    let outdoorPlants = plants.filter(plants => { 
        return plants.hardiness !== "" && plants.location === "outdoor"
    });
    // let outdoorPlantsFirst = outdoorPlants[0];
    // let outdoorPlantsThumbs = outdoorPlants.slice(2, 5);
    let outdoorPlantsVol = outdoorPlants.length;
    let outdoorRepot = plants.filter(plants => { 
        return plants.location === "outdoor" && (plants.lastPotted === null || plants.lastPotted === undefined || plants.lastPotted === "")
    });
    let outdoorRepotVol = outdoorRepot.length;
    let outdoorDry = plants.filter(plants => { 
        return plants.location === "outdoor" && plants.waterPref.includes("dry")
    });
    let outdoorDryVol = outdoorDry.length;
    let outdoorModerate = plants.filter(plants => { 
        return plants.location === "outdoor" && plants.waterPref.includes("moderate")
    });
    let outdoorModerateVol = outdoorModerate.length;
    let outdoorWet = plants.filter(plants => { 
        return plants.location === "outdoor" && plants.waterPref.includes("moist")
    });
    let outdoorWetVol = outdoorWet.length;

    // console.log("First", outdoorPlantsFirst)
    // console.log("Outdoor plants", outdoorPlants)

    /*Winter safe qualifies as plants with a hardiness equal to or less than Chicago's (-20)
    Exclude records where the hardinessZoneMin does not exist*/
    // let outdoorWinterSafe = plants.filter(plants => { 
    //     return plants.hardinessZoneMin !== undefined && plants.location === "outdoor" && (plants.hardinessZoneMin <= 5 || plants.hardiness <= -15) && plants.cycle === "perennial"
    // });
    // console.log("Winter safe plants: ", outdoorWinterSafe);


    return (
        <div className="outdoor-plant-section">

            {/* <header className="outdoor-plant-header"><h2>Outdoor</h2></header> */}

            {pathname === "" ? 
                <>

                
                <div className="current-deets">
                    <div>
                        <h1>Blah Blah</h1>
                    </div>
                    <div className="outdoor-plant-stats">
                        <p className="outdoor-plant-stat"><b>{outdoorPlantsVol} </b>dears enjoying the great outdoors</p>
                        <p className="outdoor-plant-stat"><b>{outdoorRepotVol}</b> may need repotting</p>
                        <p className="outdoor-plant-stat"><b>{outdoorDryVol}</b> like it dry</p>
                        <p className="outdoor-plant-stat"><b>{outdoorModerateVol}</b> like it moderate</p>
                        <p className="outdoor-plant-stat"><b>{outdoorWetVol}</b> like it wet</p>

                    </div>
                    <div className="onward ">
                        <p className="outdoor-plant-stat">See all outdoor plants &gt;</p>
                    </div>
                </div>
                <div className="outdoor-plant-images">
                    
                    {/* <div className="outdoor-thumbnails">
                        {outdoorPlantsThumbs.map(plants => (
                            <img src={`/img/${plants.imgURL}`} alt="Outdoor plant thumb" className="outdoor-img-thumb"/>
                        ))}
                        
                    </div> */}
                    <div className="outdoor-main">
                        {
                            // outdoorPlantsFirst ? <img src={`/img/${outdoorPlantsFirst.imgURL}`} alt="Outdoor plant" className="outdoor-img-main"/> : ""
                            <img src={Outdoor} alt="Outdoor plant" className="outdoor-img-main"/>

                        }
                    </div>
                    
                </div>
                    {/* <div className="forecast-alloutdoor">
                        {outdoorPlants.map(plants => (
                            <div className="plant-outdoor" key={plants._id}>
                                <span>{plants.name}</span> { }
                                <span>({plants.hardiness}&#176;)</span> { }
                                {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> }
                            </div>
                        ))}
                    </div>

                    <PlantBlockAll plants={outdoorPlants}/>

                    <hr></hr> */}

                {/* <header className="forecast-plant-header"><h2>Outdoor Plants versus Low Temp</h2></header> */}
        
                {/* <div className="forecast-options">
                    {forecastWeather.map(weather => (
                        <div key={weather.uv} className="forecast-weather">
                            <p>{new Date(weather.valid_date).toLocaleDateString('en-US', {timeZone: 'UTC'})}</p> { }
                            <span>H: {weather.high_temp}</span> { }
                            <span className="low-temp">L: {weather.low_temp}</span> { }
                            <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} className="weather-icon"></img>
                            <div className="forecast-plants">
                                {outdoorPlants.map(plants => (
                                    plants.hardiness > weather.low_temp ?
                                    <div key={plants.id}>
                                        <span>{plants.name}</span> { }
                                        <span>({plants.hardiness}&#176;)</span> { }
                                    </div> : null
                                ))}
                            </div>
                        </div>
                    ))}
                    
                </div> */}

            {/* <hr></hr> */}

            {/* <header className="forecast-wintersafe-header"><h2>Winter Safe</h2></header> */}

            {/* <div className="winter-safe">
                {outdoorWinterSafe.map(plants => (
                        <div key={plants._id}>
                            <span>{plants.name}</span> { }
                            <span>({plants.hardiness}&#176;)</span> { }
                            <span>Zone {plants.hardinessZoneMin || "not listed"}</span> { }
                            <span>{plants.cycle}</span> { }
                            <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img>
                        </div>
                    ))}
                
            </div> */}
{/* 
            <header className="forecast-wintersafe-header"><h2>Maybe Winter Safe</h2></header>
            <div className="winter-safe-maybe">
                {outdoorWinterSafeMaybe.map(plants => (
                        <div key={plants._id}>
                            <span>{plants.name}</span> { }
                            <span>({plants.hardiness}&#176;)</span> { }
                            <span>Zone {plants.hardinessZoneMin || "not listed"}</span> { }
                            <span>{plants.cycle}</span> { }
                            {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img>}
                        </div>
                    ))}
                
            </div> */}
            </>: <p>This is not the home page</p>
            }
            
        </div>
    )
};

export default OutdoorPlants;
