import React, {useState, useEffect, createContext} from 'react';
import WeatherAPI from "../utils/WeatherAPI"

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {

    const [currentWeather, setCurrentWeather] = useState([]);
    const [forecastWeather, setForecastWeather] = useState([])

    useEffect(() => {console.log("WeatherContext render triggered")}, []);

    function loadCurrentWeather() {
        
        WeatherAPI.getTodaysWeather()
        
            .then(res => {

                const currentWeather = res.data;
                console.log(res.data)

                if (currentWeather.temp > 0) {
                    setCurrentWeather(currentWeather);
                    renderComponent = [
                        <HomeComponents currentWeather={currentWeather}/>
                        ];
                    setrenderComponent(renderComponent);
                }

            })
            .catch(err => console.log(err));
            
    }

    function loadForecastWeather() {
        WeatherAPI.getForecastWeather()
            .then(res => {
                const forecastWeather = res.data;
                console.log(forecastWeather);
                setForecastWeather(forecastWeather)
            })
            .catch(err => console.log(err));
    }

    
  
    return(
      <WeatherContext.Provider value={[currentWeather, setCurrentWeather]}>
        {props.children}
      </WeatherContext.Provider>
    )
  }

