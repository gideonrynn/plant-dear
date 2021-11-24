import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    // Gets all current weather data
    getTodaysWeather: function() {
      return axios.get("/api/weather/current");
    },

    // Gets all forecast weather data
    getForecastWeather: function() {
        return axios.get("/api/weather/forecast");
    }
    
}