
import React, {useEffect, useState } from "react";
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
import { Box, DataChart, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';


function WeatherForecast(forecastWeather) {

    console.log("Forecast weather for WeatherForecast component", forecastWeather)
    const data = [];

    for (let i = 1; i < 8; i += 1) {
        const v = Math.sin(i / 2.0);

        data.push({
            date: `2020-${((i % 12) + 1).toString().padStart(2, 0)}-01`,
            percent: Math.round(Math.abs(v * 100)),
        });
    }

    return (
       
        <Grommet theme={grommet}>
            <Box  width={{ min: 'small', max: 'large' }} justify="center" alignContent="center">
            <DataChart
                data={data}
                series={['date', 'percent']}
                chart={[
                { property: 'percent', thickness: 'xsmall', type: 'line' },
                {
                    property: 'percent',
                    thickness: 'medium',
                    type: 'point',
                    point: 'diamond',
                },
                ]}
                guide={{ x: { granularity: 'fine' }, y: { granularity: 'medium' } }}
                size={{ width: 'fill'}}
                detail
                jusify="center"
            />
            </Box>
        </Grommet>

    );

}

export default WeatherForecast;