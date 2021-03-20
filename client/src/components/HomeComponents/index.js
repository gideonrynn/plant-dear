
import React, {useContext} from "react";
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Grid, Tabs, Tab } from 'grommet';
import WatchlistSnip from "../../components/WatchlistSnip/index"
// import WeatherAPI from "../../utils/WeatherAPI"
import { Container, Row, Col } from "react-bootstrap"
// import Progress from "../../components/ProgressBar/index"
// import Hardiness from "../../components/Hardiness/index"
import HardinessSnip from "../../components/HardinessSnip"
import ReadinessSnip from "../../components/ReadinessSnip"
import HumiditySnip from "../../components/HumiditySnip";
import WaterLoverSnip from "../WaterLoverSnip";
import WaterSnip from "../WaterSnip";
import PropaSnip from "../../components/PropaSnip";
import PurchaseSnip from "../../components/PurchaseSnip";
import SliderSection from "../../components/SliderSection/SliderSection";
import StatsSection from "../../components/StatsSection/StatsSection"
import WaterCalculator from "../../components/WaterCalculator/"
import WeatherForecast from "../../components/WeatherForecast/"
import {WeatherContext} from "../../context/WeatherContext"
import './index.css'


function HomeComponents() {

        const currentWeather = useContext(WeatherContext)
        console.log(currentWeather)
        console.log("Home components weather", currentWeather)

    return (
        <Box>
                
                <Grid 
                        rows={['auto', 'auto']}
                        columns={['auto', 'auto']}
                        gap="medium"
                        // areas={[
                        //         { name: 'section1', start: [0, 0], end: [1, 0] },
                        //         { name: 'section2', start: [0, 1], end: [1, 1] }
                        // ]}
                        areas={[
                                ['temp', 'temp'],
                                ['slider', 'stats'],
                                ['snips', 'snips'],
                                ['watercalc', 'watercalc'],
                                ['weatherforecast', 'weatherforecast']
                        ]}
                        
                        >
                                <Box gridArea="temp"
                                        background="#FFFFFF"
                                        fill
                                        >
                                      <p> The current temperature is: <span>{currentWeather.app_temp} </span></p>
                                </Box>
                        
                                <Box gridArea="slider"
                                        height={{min: "200px", max: "530px"}}
                                        width={{min: "200px", max: "800px"}}
                                        >
                                        <SliderSection/>
                                </Box>
                                <Box gridArea="stats">
                                        <StatsSection/>  
                                </Box>

                
                                <Box 
                                        gridArea="snips"
                                        height="large"
                                        // background="dark-3"
                                        pad="medium"
                                        background="#FFFFFF">

                                <Tabs>
                                        <Tab title="Watchlist" color="status-critical">
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
                                                        <ReadinessSnip weather={currentWeather}/>
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
                       
                        </Box> 

                        <Box gridArea="watercalc"
                                        height="large"
                                        // background="dark-3"
                                        pad="medium"
                                        background="#FFFFFF">


                                <WaterCalculator/>
                        </Box>

                        <Box gridArea="weatherforecast"
                                        height="large"
                                        // background="dark-3"
                                        pad="medium"
                                        background="#FFFFFF">


                                <WeatherForecast weather={currentWeather}/>
                        </Box>
                </Grid>   
        </Box>

        );

}

export default HomeComponents;