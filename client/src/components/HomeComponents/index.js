
import React from "react";
// import { Link } from 'react-router-dom'
// import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
// import Current from "../Current/index"
// import Hardiness from "../Hardiness/index"
// import HardinessSnip from "../HardinessSnip"
// import ModPlants from "../ModPlants/index"
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Grid, Tabs, Tab } from 'grommet';
import WatchlistSnip from "../../components/WatchlistSnip/index"
// import WeatherAPI from "../../utils/WeatherAPI"
import { Container, Row, Col } from "react-bootstrap"
// import Progress from "../../components/ProgressBar/index"
// import Hardiness from "../../components/Hardiness/index"
import HardinessSnip from "../../components/HardinessSnip"
import ReadinessSnip from "../../components/ReadinessSnip"
import HumiditySnip from "../../components/HumiditySnip";
import WaterSnip from "../../components/WaterSnip";
import PropaSnip from "../../components/PropaSnip";
import PurchaseSnip from "../../components/PurchaseSnip";
import SliderSection from "../../components/SliderSection/SliderSection";
import StatsSection from "../../components/StatsSection/StatsSection"
import './index.css'


function HomeComponents(currentWeather) {

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
                                ['slider', 'stats'],
                                ['snips', 'snips']
                        ]}
                        >

                        
                                <Box gridArea="slider">
                                        <SliderSection/>
                                </Box>
                                <Box gridArea="stats">
                                        <StatsSection/>  
                                </Box>

                
                                <Box 
                                        gridArea="snips"
                                        height="large"
                                        // background="dark-3"
                                        pad="medium">

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
                </Grid>   
        </Box>

        );

}

export default HomeComponents;