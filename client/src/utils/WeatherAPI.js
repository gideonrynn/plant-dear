import axios from "axios";


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