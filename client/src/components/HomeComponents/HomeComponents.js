
import React, {useContext} from "react";
import { Box } from "grommet";
import WeatherForecast from "../WeatherForecast"
import PlantForecastHardiness from "../PlantForecastHardiness/PlantForecastHardiness.js"
// import OutdoorPlants from "../../components/OutdoorPlants/"
import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
import RecentAdditions from "../RecentAdditions/RecentAdditions";
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
                                /* <Box gridArea="temp"
                                        background="#FFFFFF"
                                        fill
                                        >
                                      <p> The current temperature is: <span>{currentWeather.app_temp} </span></p>
                                </div> */
                        <div>
                                {/* <div>
                                        <p>By Location</p>
                                        <ByLocation plants={activePlants}/>
                                </div> */}
                                <h1 >{activePlants.length}</h1>
                                <div className="newplant-section">
                                        <RecentAdditions plants={ activePlants} setUpdate={ plant.setUpdate}/>

                                        {/* to keep an eye on */}

                                </div>
                                <div  className="forecastplants-section">

                                        {/* <OutdoorPlants weather={forecastWeather} plants={activePlants}/> */}

                                        <PlantForecastHardiness weather={forecastWeather} plants={activePlants}/>

                                        
                                </div>
                                {/* <div className="watersnip-section"> */}
                                        {/* <WaterLoverSnip plants={activePlants}/> */}
                                        {/* <WaterSnip plants={activePlants}/> */}
                                {/* </div> */}
                                {/* <Box gridArea="stats" className="stats">
                                        <StatsSection/>  
                                </Box> */}
                                {/* <Box 
                                        gridArea="snips"
                                        height="large"
                                        // background="dark-3"
                                        textColor="dark-3"
                                        pad="medium"
                                        background="#FFFFFF">

                                <Tabs>
                                        <Tab title="Watchlist" className="tabTitle">
                                                <Box pad="medium">
                                                        <WatchlistSnip/>
                                                </Box>
                                        </Tab>
                                        <Tab title="Hardiness">
                                                <Box pad="medium">
                                                        <HardinessSnip weather={currentWeather}/>
                                                </Box>
                                        </Tab>
                                        <Tab title="Readiness">
                                                <Box pad="medium">
                                                        <ReadinessSnip weather={currentWeather} forecastWeather={forecastWeather}/>
                                                </Box>
                                        </Tab>
                                        <Tab title="Humidity Lovers">
                                                <Box pad="medium">
                                                        <HumiditySnip/>
                                                </Box>
                                        </Tab>
                                        <Tab title="Water Lovers">
                                                <Box pad="medium">
                                                        <WaterLoverSnip/>
                                                </Box>
                                        </Tab>
                                        <Tab title="Need A Drink">
                                                <Box pad="medium">
                                                        <WaterSnip/>
                                                </Box>
                                        </Tab>
                                        <Tab title="Propagating">
                                                <Box pad="medium">
                                                        <PropaSnip/>
                                                </Box>
                                        </Tab>
                                        <Tab title="Purchase">
                                                <Box pad="medium">
                                                        <PurchaseSnip weather={currentWeather}/>
                                                </Box>
                                        </Tab>
                                </Tabs>
                       
                        </Box>  */}

                        {/* <Box gridArea="watercalc"
                                        height="large"
                                        // background="dark-3"
                                        pad="medium"
                                        background="#FFFFFF">


                                <WaterCalculator/>
                        </Box>  */}

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