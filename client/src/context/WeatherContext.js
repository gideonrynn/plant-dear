import React, {useState, useEffect, createContext} from 'react';
import WeatherAPI from "../utils/WeatherAPI"

// so it can be used in different components as needed
export const WeatherContext = createContext();

// holds project info and passes it to the children
export const WeatherProvider = ({children}) => {

    // add placeholders for testing
    const [currentWeather, setCurrentWeather] = useState([
        {
            app_temp: 54.9,
            aqi: 35,
            city_name: "Chicago",
            clouds: 0,
            country_code: "US",
            datetime: "2021-03-20:18",
            dewpt: 27,
            dhi: 114.49,
            dni: 899.43,
            elev_angle: 48.36,
            ghi: 779.45,
            h_angle: 0,
            lat: 41.85003,
            lon: -87.65005,
            ob_time: "2021-03-20 18:17",
            pod: "d",
            precip: 0,
            pres: 1010.4,
            rh: 34,
            slp: 1033.6,
            snow: 0,
            solar_rad: 779.5,
            state_code: "IL",
            station: "E3114",
            sunrise: "11:51",
            sunset: "00:03",
            temp: 55,
            timezone: "America/Chicago",
            ts: 1616264220,
            uv: 7.94551,
            vis: 3.1,
            weather: {icon: "c01d", code: 800, description: "Clear sky"},
            wind_cdir: "SW",
            wind_cdir_full: "southwest",
            wind_dir: 215,
            wind_spd: 9.2
        }
    ]);

    // add placeholders for testing
    const [forecastWeather, setForecastWeather] = useState([
        {
            app_max_temp: 53.4,
            app_min_temp: 15.4,
            clouds: 5,
            clouds_hi: 0,
            clouds_low: 5,
            clouds_mid: 0,
            datetime: "2021-03-20",
            dewpt: 31.2,
            high_temp: 53.4,
            low_temp: 30.7,
            max_dhi: null,
            max_temp: 53.5,
            min_temp: 25.8,
            moon_phase: 0.47118,
            moon_phase_lunation: 0.26,
            moonrise_ts: 1616254745,
            moonset_ts: 1616224807,
            ozone: 317.591,
            pop: 0,
            precip: 0,
            pres: 1010.22,
            rh: 73,
            slp: 1032.35,
            snow: 0,
            snow_depth: 0,
            sunrise_ts: 1616241150,
            sunset_ts: 1616284973,
            temp: 40.3,
            ts: 1616216460,
            uv: 6.10509,
            valid_date: "2021-03-20",
            vis: 13,
            weather: {icon: "c02d", code: 801, description: "Few clouds"},
            wind_cdir: "ESE",
            wind_cdir_full: "east-southeast",
            wind_dir: 111,
            wind_gust_spd: 24.8,
            wind_spd: 4.3,
        },
        {
            app_max_temp: 59.7,
            app_min_temp: 28.8,
            clouds: 23,
            clouds_hi: 23,
            clouds_low: 0,
            clouds_mid: 13,
            datetime: "2021-03-21",
            dewpt: 34.2,
            high_temp: 59.7,
            low_temp: 36.5,
            max_dhi: null,
            max_temp: 59.7,
            min_temp: 36.4,
            moon_phase: 0.572401,
            moon_phase_lunation: 0.29,
            moonrise_ts: 1616343743,
            moonset_ts: 1616314514,
            ozone: 299.24,
            pop: 0,
            precip: 0,
            pres: 1004.21,
            rh: 60,
            slp: 1026.02,
            snow: 0,
            snow_depth: 0,
            sunrise_ts: 1616327447,
            sunset_ts: 1616371441,
            temp: 48.5,
            ts: 1616302860,
            uv: 6.18712,
            valid_date: "2021-03-21",
            vis: 15,
            weather: {icon: "c02d", code: 802, description: "Scattered clouds"},
            wind_cdir: "S",
            wind_cdir_full: "south",
            wind_dir: 172,
            wind_gust_spd: 36,
            wind_spd: 9.1,
        },
        {
            app_max_temp: 61.1,
            app_min_temp: 34.9,
            clouds: 46,
            clouds_hi: 15,
            clouds_low: 12,
            clouds_mid: 37,
            datetime: "2021-03-22",
            dewpt: 41.5,
            high_temp: 61.1,
            low_temp: 41.4,
            max_dhi: null,
            max_temp: 61.4,
            min_temp: 41.4,
            moon_phase: 0.673183,
            moon_phase_lunation: 0.32,
            moonrise_ts: 1616433231,
            moonset_ts: 1616403906,
            ozone: 309.146,
            pop: 20,
            precip: 0.002,
            pres: 998.675,
            rh: 70,
            slp: 1020.38,
            snow: 0,
            snow_depth: 0,
            sunrise_ts: 1616413744,
            sunset_ts: 1616457908,
            temp: 51.5,
            ts: 1616389260,
            uv: 4.99765,
            valid_date: "2021-03-22",
            vis: 14.5,
            weather: {icon: "c03d", code: 803, description: "Broken clouds"},
            wind_cdir: "S",
            wind_cdir_full: "south",
            wind_dir: 184,
            wind_gust_spd: 36.9,
            wind_spd: 9.6
        }

    ]);

    console.log(currentWeather);

    // useEffect(() => {
            
    //     WeatherAPI.getTodaysWeather()
        
    //         .then(res => {

    //             const currentWeather = res.data;
    //             console.log(res.data)

    //             if (currentWeather.temp) {
    //                 setCurrentWeather(currentWeather);
    //             }

    //         })
    //         .catch(err => console.log(err));
        
    // }, []);

    // useEffect(() => {
            
    //     WeatherAPI.getTodaysWeather()
        
    //         .then(res => {

    //             const currentWeather = res.data;
    //             console.log(res.data)

    //             if (currentWeather.temp) {
    //                 setCurrentWeather(currentWeather);
    //             }

    //         })
    //         .catch(err => console.log(err));
        
    // }, []);

  return(
    <WeatherContext.Provider value={currentWeather}>
      {children}
    </WeatherContext.Provider>
  );
};