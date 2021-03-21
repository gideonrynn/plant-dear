
import React, {useContext} from "react";
import { Box, Grid, ResponsiveContext, Tabs, Tab, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import WatchlistSnip from "../../components/WatchlistSnip/index"
// import WeatherAPI from "../../utils/WeatherAPI"
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

const theme  = deepMerge({
        global: {
          colors: {
            brand: 'white',
            dark: "blue",
          },
          font: {
            size: '20px',
            height: '20px',
          },
          breakpoints: {
            xsmall: {
              value: 500,
            },
            small: {
              value: 900,
            },
            medium: { value:1500 },
            middle: {
              value: 3000,
            },
          },
        },
      });

      const ResponsiveGrid = ({ children, areas, ...props }) => {
        const size = React.useContext(ResponsiveContext);
        return (
          <Grid areas={areas[size]} {...props}>
            {children}
          </Grid>
        );
      };

function HomeComponents() {

        const weather = useContext(WeatherContext)
        const currentWeather = weather.currentWeather;
        const forecastWeather = weather.forecastWeather;
        console.log(weather)
        console.log("Home components weather", weather)

    return (

        <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
                <ResponsiveGrid
                        responsive= {true}
                        rows={['auto', 'auto', 'auto', 'auto', 'auto']}
                        columns={['auto', 'auto']}
                        gap="medium"
                        // areas={[
                        //         { name: 'section1', start: [0, 0], end: [1, 0] },
                        //         { name: 'section2', start: [0, 1], end: [1, 1] }
                        // ]}
                        areas={{
                                xsmall: [
                                        { name: 'slider', start: [0, 0], end: [0, 0] },
                                        { name: 'stats', start: [0, 1], end: [0, 1] },
                                        { name: 'snips', start: [0, 2], end: [0, 2] },
                                        { name: 'watercalc', start: [0, 3], end: [0, 3] },
                                        { name: 'weatherforecast', start: [0, 4], end: [0, 4] },
                                ],
                                small: [
                                        { name: 'slider', start: [0, 0], end: [0, 0] },
                                        { name: 'stats', start: [0, 1], end: [0, 1] },
                                        { name: 'snips', start: [0, 2], end: [0, 2] },
                                        { name: 'watercalc', start: [0, 3], end: [0, 3] },
                                        { name: 'weatherforecast', start: [0, 4], end: [0, 4] },
                                ],
                                medium: [
                                        { name: 'slider', start: [0, 0], end: [0, 0] },
                                        { name: 'stats', start: [1, 0], end: [1, 0] },
                                        { name: 'snips', start: [0, 1], end: [1, 1] },
                                        { name: 'watercalc', start: [0, 2], end: [1, 2] },
                                        { name: 'weatherforecast', start: [0, 3], end: [1, 3] },
                                ],
                                middle: [
                                        { name: 'slider', start: [0, 0], end: [1, 0] },
                                        { name: 'stats', start: [1, 0], end: [1, 0] },
                                        { name: 'snips', start: [0, 1], end: [0, 1] },
                                        { name: 'watercalc', start: [1, 1], end: [1, 1] },
                                        { name: 'weatherforecast', start: [1, 1], end: [1, 1] },
                                ]
                              }}
                        
                        >
                                {/* <Box gridArea="temp"
                                        background="#FFFFFF"
                                        fill
                                        >
                                      <p> The current temperature is: <span>{currentWeather.app_temp} </span></p>
                                </Box> */}
                        
                                <Box gridArea="slider"
                                        height={{min: "200px", max: "200px"}}
                                        width={{min: "200px", max: "200px"}}
                                        >
                                        <SliderSection/>
                                </Box>
                                <Box gridArea="stats" width="small">
                                        <StatsSection/>  
                                </Box>
                                <Box 
                                        gridArea="snips"
                                        height="large"
                                        // background="dark-3"
                                        pad="medium"
                                        background="#FFFFFF">

                                <Tabs >
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


                                <WeatherForecast weather={forecastWeather}/>
                        </Box>
                        </ResponsiveGrid>
)}
      </ResponsiveContext.Consumer>
</Grommet>
        );

}

export default HomeComponents;