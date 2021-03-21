
import React from "react";
import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
import { Box, DataChart, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';


function WeatherForecast(weather) {

    const forecastWeather = weather.weather;
    console.log("Forecast weather for WeatherForecast component", forecastWeather)
 
    const data = [];

    for (let counter = 0; counter < forecastWeather.length; counter++) {
        data.push({
          date: forecastWeather[counter].valid_date,
          temp: forecastWeather[counter].temp,
        });
      }

    console.log("Data array", data);

    return (
       
        <>
            <Box  width={{ min: 'small', max: 'large' }}>
                <h1>Forecast</h1>
            <DataChart
                data={data}
                series={['date', 'temp']}
                chart={[
                    { 
                        property: 'temp', 
                        thickness: 'xsmall', 
                        type: 'line',
                        color: 'graph-1'
                    },
                    {
                        property: 'temp',
                        thickness: 'medium',
                        type: 'point',
                        point: 'circle',
                    },
                ]}
                guide={{ x: { granularity: 'fine' }, y: { granularity: 'medium' } }}
                size={{ width: 'fill'}}
                detail
                legend={true}
            />
            </Box>
        </>

    );

}

export default WeatherForecast;