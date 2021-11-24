
import React from "react";
import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
import { Box, DataChart } from 'grommet';
// import { grommet } from 'grommet/themes';


function WeatherForecast(weather) {

    console.log("WeatherForecast component with line chart initialized");

    const forecastWeather = weather.weather;
    // console.log("Forecast weather for WeatherForecast component", forecastWeather)
 
    const data = [];

    for (let counter = 0; counter < forecastWeather.length; counter++) {
        data.push({
          date: forecastWeather[counter].valid_date,
          temp: forecastWeather[counter].temp,
        });
      }

    // console.log("Data array", data);

    return (
       
        <>
            <Box  
                // width={{ min: 'small', max: 'large' }} 
                className="weather-forecast-section2">
                {/* <h1>Forecast</h1> */}
            <DataChart
                data={data}
                series={['date', 'temp']}
                axis={{
                    x: { property: 'date', granularity: 'medium'},
                    y: { property: 'temp', granularity: 'fine' },

                  }}
                chart={[
                    { 
                        property: 'temp', 
                        thickness: 'xxsmall', 
                        type: 'line',
                        color: 'graph-1'
                    },
                    {
                        property: 'temp',
                        thickness: 'small',
                        type: 'point',
                        point: 'circle',
                    },
                ]}
                guide={{ x: { property: 'date', granularity: 'fine'}, y: { property: 'temp', granularity: 'medium' } }}
                size={{ width: 'fill'}}
                detail
                legend={true}
            />
            </Box>
        </>

    );

}

export default WeatherForecast;