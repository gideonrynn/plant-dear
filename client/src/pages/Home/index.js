import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import WeatherAPI from "../../utils/WeatherAPI"
import { Table } from "react-bootstrap"

function Home () {

    // Setting our component's initial state
  const [plants, setPlants] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecastWeather, setForecastWeather] = useState([])

  // Load all plants and store them within setPlants
  useEffect(() => {

    loadPlants()
    loadCurrentWeather()
    loadForecastWeather()
    
  }, [])

    // Loads all plants and sets them to plants state
    function loadPlants() {

        PlantAPI.getAllPlants()
            .then(res => {
            const plants = res.data;
            setPlants(plants)
            })
            .catch(err => console.log(err));
    };

    function loadCurrentWeather() {
        WeatherAPI.getTodaysWeather()
            .then(res => {
            const currentWeather = res.data;
            console.log(currentWeather);
            setCurrentWeather(currentWeather)
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


    return (
        <div className="main-title"
        >
            <h1>Welcome to Plant Dear!</h1>

            <h3>Here's the weather</h3>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>City</th>
                        <th>Current Temp</th>
           
                    </tr>
                </thead>


                <tbody>

                        <tr key={currentWeather.id}>
                            <th>{currentWeather.city_name} </th>
                            <th>{currentWeather.temp} </th>
                        
                        </tr>

                </tbody>
            </Table>

            <br></br>
            <h3>Here's the forecast</h3>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Low Temp</th>
                        <th>High Temp</th>
           
                    </tr>
                </thead>


                <tbody>

                {forecastWeather.map(forecast => (

                    <tr key={forecast.id}>
                        <th>{forecast.datetime} </th>
                        <th>{forecast.low_temp} </th>
                        <th>{forecast.high_temp} </th>
                    </tr>))}

                </tbody>
            </Table>



            <br></br>
            <h3>Here are all our plants!</h3>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Temp High</th>
                        <th>Temp Lo</th>
                        <th>Tolerance</th>
                        <th>Water</th>
                        <th>Sunlight</th>
                        <th>Plant Hardziness Zone</th>
                    </tr>
                </thead>


                <tbody>

                    {plants.map(plant => (

                        <tr key={plant.id}>
                            <th>{plant.name} </th>
                            <th>{plant.location} </th>
                            <th>{plant.tempHigh} </th>
                            <th>{plant.tempLow} </th>
                            <th>{plant.tolerance} </th>
                            <th>{plant.water}</th>
                            <th> {plant.sunlight}</th>
                            <th>{plant.plantHardinessZone}</th>
                        </tr>))}

                </tbody>
            </Table>
            
        </div>
 
    );
  }
  
  
  export default Home;