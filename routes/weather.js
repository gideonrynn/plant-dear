// const db = require("../models");
const router = require("express").Router();
const axios = require("axios")
//required dotenv to enable environmental variables such as API_KEY
require('dotenv').config({path:'../env'})

// returns all current weather from WeatherBit
router.get('/current', (req, res) => {
    
    const oldKey = "faa9f8bb779e4165b52c0af7edcdbf68";
    const newKey = process.env.API_KEY;
    const queryCTWeather = "https://api.weatherbit.io/v2.0/current?" + "city=Chicago,IL" + "&units=I" + "&key=" + newKey;

    axios({
        url: queryCTWeather,
        method: "GET"
        })
        // store retrieved data inside response object and send to the frontend
        .then(weather => res.json(weather.data.data[0]))
        .catch(err => console.log(err));
});

// returns all forecast weather data from WeatherBit
router.get('/forecast', (req, res) => {
    
    const oldKey = "faa9f8bb779e4165b52c0af7edcdbf68";
    const newKey = process.env.API_KEY;
    const queryFTWeather = "https://api.weatherbit.io/v2.0/forecast/daily?" + "city=Chicago,IL" + "&units=I" + "&key=" + newKey;
    

    axios({
        url: queryFTWeather,
        method: "GET"
        })
        // store retrieved data inside response object and send to the frontend
        .then(weather => res.json(weather.data.data))
        .catch(err => console.log(err));

});

module.exports = router;