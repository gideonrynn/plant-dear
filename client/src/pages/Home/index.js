import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import WeatherAPI from "../../utils/WeatherAPI"
import { Table } from "react-bootstrap"

function Home () {

    // Setting our component's initial state
  const [plantsHardiness, setPlantsHardiness] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecastWeather, setForecastWeather] = useState([])

  // Load all plants and store them within setPlants
  useEffect(() => {

    loadCurrentWeather()
    loadForecastWeather()
    loadPlantsHardiness()
    
  }, [])

    // loads current weather and plants, and adds those with a hardiness temp below the current temp to a table
    function loadPlantsHardiness() {

        let currentWeatherL = ""

        // get today's weather
        WeatherAPI.getTodaysWeather()
            .then(res => {
                
                currentWeatherL = res.data.temp;
                // console.log("------")
                // console.log(res.data.temp)

                PlantAPI.getAllPlants()
                    .then(res => {
               
                        let allPlants = res.data;
                        // console.log(currentWeatherL)

                        let hardyPlants = allPlants.filter(allPlants => { 
                            return allPlants.tolerance > currentWeatherL && allPlants.tolerance > 0
                        });
                    
                        // console.log(hardyPlants)
                        const plantsHardiness = hardyPlants;
                        setPlantsHardiness(plantsHardiness);

                })
            })
            
    };

    function loadCurrentWeather() {
        WeatherAPI.getTodaysWeather()
            .then(res => {
                const currentWeather = res.data;
                // console.log(currentWeather);
                setCurrentWeather(currentWeather)
            })
            .catch(err => console.log(err));
    }

    function loadForecastWeather() {
        WeatherAPI.getForecastWeather()
            .then(res => {
                const forecastWeather = res.data;
                // console.log(forecastWeather);
                setForecastWeather(forecastWeather)
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="main-title">

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
            <h3>Here are all our plants with a hardiness we should be concerned about!</h3>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Temp High</th>
                        <th>Temp Low</th>
                        <th>Hardiness</th>
                        <th>Water</th>
                        <th>Sunlight</th>
                        <th>Plant Hardiness Zone</th>
                    </tr>
                </thead>


                <tbody>

                    {plantsHardiness.map(plantsHardiness => (

                        <tr key={plantsHardiness.id}>
                            <th>{plantsHardiness.name} </th>
                            <th>{plantsHardiness.location} </th>
                            <th>{plantsHardiness.tempHigh} </th>
                            <th>{plantsHardiness.tempLow} </th>
                            <th>{plantsHardiness.hardiness} </th>
                            <th>{plantsHardiness.water}</th>
                            <th> {plantsHardiness.sunlight}</th>
                            <th>{plantsHardiness.plantHardinessZone}</th>
                        </tr>))}

                </tbody>
            </Table>


            <br></br>
            
        </div>
 
    );
  }
  
  
  export default Home;