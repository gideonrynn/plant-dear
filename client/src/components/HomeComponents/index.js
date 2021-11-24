
import React, {useContext} from "react";
import { Box } from 'grommet';
// import { deepMerge } from 'grommet/utils';
// import WatchlistSnip from "../../components/WatchlistSnip/index"
// import WeatherAPI from "../../utils/WeatherAPI"
// import Progress from "../../components/ProgressBar/index"
// import Hardiness from "../../components/Hardiness/index"
// import HardinessSnip from "../../components/HardinessSnip"
// import ReadinessSnip from "../../components/ReadinessSnip"
// import HumiditySnip from "../../components/HumiditySnip";
// import WaterLoverSnip from "../WaterLoverSnip";
// import WaterSnip from "../WaterSnip";
// import PropaSnip from "../../components/PropaSnip";
// import PurchaseSnip from "../../components/PurchaseSnip";
// import SliderSection from "../../components/SliderSection/SliderSection";
// import StatsSection from "../../components/StatsSection/StatsSection"
// import WaterCalculator from "../../components/WaterCalculator/"
import WeatherForecast from "../../components/WeatherForecast/"
import ForecastPlantHardiness from "../../components/ForecastPlantHardiness/"
// import OutdoorPlants from "../../components/OutdoorPlants/"
import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
import './index.css'
import RecentAdditions from "../RecentAdditions/RecentAdditions";
// import ByLocation from "../ByLocation";



function HomeComponents() {

        const weather = useContext(WeatherContext)
        // const currentWeather = weather.currentWeather;
        const forecastWeather = weather.forecastWeather;
        const plant = useContext(PlantContext);
        const activePlants = plant.activePlants;
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
                                <div className="newplant-section">
                                        <RecentAdditions plants={activePlants}/>

                                        {/* to keep an eye on */}

                                </div>
                                <div  className="forecastplants-section">

                                        {/* <OutdoorPlants weather={forecastWeather} plants={activePlants}/> */}

                                        <ForecastPlantHardiness weather={forecastWeather} plants={activePlants}/>

                                        
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