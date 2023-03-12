import React, {useState, useEffect, createContext} from 'react';
import WeatherAPI from "../utils/WeatherAPI"
import currenttests from "../test/currentweathertests.json";
import forecasttests from "../test/forecastweathertests.json";

// so it can be used in different components as needed
export const WeatherContext = createContext();

// holds data and passes it to the children
export const WeatherProvider = ({children}) => {

    /*To do:
        //replace Context, it causes too many issues with pulling and re-rendering data 
        //create test cases that match the time of year
        //add a counter to help track rate-limiting if possible, Weatherbio caps you at 50 per day
        //need better handling to ensure avoiding too many requests
        //when api is on, grab weather data and store it in one of the existing state variables
        //maybe store in the db for now because context runs a lot and will be replaced, and high and low temp doesn't change drastically in a day
        //check for weather api on or off value, this is something I should be able to toggle on the frontend
        //in dev, should default to off
    */

    console.log("Weather Context initialized");

    let weatherAPIStatus = {
        toggle: false,
        current: false,
        forecast: false
    };

    //set default as test values, these will be replaced when api is active
    //expecting json objects from successful response of api
    const [currentWeather, setCurrentWeather] = useState(currenttests);
    //expecting an array of objects
    const [forecastWeather, setForecastWeather] = useState(forecasttests);

    useEffect(() => {

        if(weatherAPIStatus.toggle === true) {
            WeatherAPI.getTodaysWeather()
                .then(res => {
                    //check for 200 response. if it's anything else, test data in the currentWeather state var is retained
                    if(res !== 200) {
                        //set weatherAPIState === false
                        //how do I ensure it remains that way? pay close attention to where weatherAPIState gets flipped to true
                        weatherAPIStatus.toggle = false;
                        weatherAPIStatus.current = false;
                    } else {
                        setCurrentWeather(res.data);
                        weatherAPIStatus.current = true;
                    }
            })
            .catch(err => console.log("Error retrieving data from current weather API", err));

        } else {
            //if toggle is off, set status only as placeholder values are the default
            weatherAPIStatus.current = false;
        };
        
    }, []);

    useEffect(() => {
        if(weatherAPIStatus.toggle === true) {
            WeatherAPI.getForecastWeather()
                .then(res => {
                    //check for 200 response. if it's anything else, test data in the currentWeather state var is retained
                    if(res !== 200) {
                        //set weatherAPIState === false
                        //how do I ensure it remains that way? pay close attention to where weatherAPIState gets flipped to true
                        weatherAPIStatus.toggle = false;
                        weatherAPIStatus.forecast = false;
                    } else {
                        setForecastWeather(forecastWeather);
                        weatherAPIStatus.current = true;
                    }
            })
            .catch(err => console.log("Error retrieving data from forecast weather API", err));

        } else {
            //if toggle is off, set status only as placeholder values are the default
            weatherAPIStatus.forecast = false;
        };
        
    }, []);

  return(
    <WeatherContext.Provider value={{currentWeather, forecastWeather, weatherAPIStatus}}>
      {children}
    </WeatherContext.Provider>
  );
};