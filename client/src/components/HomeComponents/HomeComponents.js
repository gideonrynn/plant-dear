
import React, {useContext} from "react";
import { Box } from "grommet";
import WeatherForecast from "../WeatherForecast"
import PlantForecastHardiness from "../PlantForecastHardiness/PlantForecastHardiness.js"
// import OutdoorPlants from "../../components/OutdoorPlants/"
import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
import RecentAdditions from "../RecentAdditions/RecentAdditions";
import Spotlight from "../Spotlight/Spotlight";
// import ByLocation from "../ByLocation";
import "./HomeComponents.css"

/*Description: Allows management of all apps that should appear on the home page from this component instead of the Home page, where this component is initialized*/

function HomeComponents() {

        const weather = useContext(WeatherContext)
        // const currentWeather = weather.currentWeather;
        const forecastWeather = weather.forecastWeather;
        const plant = useContext(PlantContext);
        const activePlants = plant.activePlants;
        // console.log(plant);
        // const inactivePlants = plant.inactivePlants;
        // console.log(weather)
        // console.log("Home components weather", weather)
        // console.log(activePlants);

        return (
                        
                <div>
                                
                        <Spotlight plants={activePlants} setUpdate={ plant.setUpdate}/>

                        <RecentAdditions plants={ activePlants } setUpdate={ plant.setUpdate}/>

                        <div  className="forecastplants-section">

                                {/* <OutdoorPlants weather={forecastWeather} plants={activePlants}/> */}

                                <PlantForecastHardiness weather={forecastWeather} plants={activePlants}/>

                                
                        </div>
                              

                        <Box gridArea="weatherforecast"
                                        // height="large"
                                        // background="dark-3"
                                        // pad="medium"
                                        background="#FFFFFF"
                                        className="weather-forecast-section">


                                <WeatherForecast weather={forecastWeather}/>
                        </Box>
                </div>
                 
        );

}

export default HomeComponents;