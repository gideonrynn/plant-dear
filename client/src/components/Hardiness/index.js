
import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import { Table, Col } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import WeatherAPI from "../../utils/WeatherAPI"


function HardinessComp() {

    const [plantsHardiness, setPlantsHardiness] = useState([])
    // let [dangerZone, setdangerZone] = useState([])
    const [currentWeather, setCurrentWeather] = useState([]);

    useEffect(() => {

        loadPlantsHardiness()
    
    }, [])

    function loadPlantsHardiness() {

        let currentWeatherL = ""

        // get today's weather
        WeatherAPI.getTodaysWeather()
            .then(res => {
                
                currentWeatherL = res.data.temp;
                // console.log("------")
                // console.log(res.data)
                console.log(currentWeatherL - 10)

                PlantAPI.getAllPlants()
                    .then(res => {
               
                        let allPlants = res.data;
                        console.log(allPlants);

                        // display all the plants with a hardiness less than or equal to the current weather
                        let hardyPlants = allPlants.filter(allPlants => { 
                            return allPlants.hardiness >= (currentWeatherL - 10) && allPlants.location === "outdoor"
                        });

                        

                        // return allPlants.hardiness <= currentWeatherL && allPlants.hardiness < 0
                    
                        const plantsHardiness = hardyPlants;
                        setPlantsHardiness(plantsHardiness);
                        setCurrentWeather(currentWeatherL);

                })
            })
            
    };

    return (
            <Col>
                    
            <h3>Plant Hardiness Watch</h3>

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
                        <th>PHZ</th>
                    </tr>
                </thead>


                <tbody>

                    {plantsHardiness.map(plantsHardiness => (

                        <tr key={plantsHardiness._id} style={
                            (plantsHardiness.hardiness <= (currentWeather - 5)) ? {background: 'yellow'} : {background: 'orange'}}>
                            <th>{plantsHardiness.name} </th>
                            <th>{plantsHardiness.location} </th>
                            <th>{plantsHardiness.tempHigh} </th>
                            <th>{plantsHardiness.tempLow} </th>
                            <th>{plantsHardiness.hardiness} </th>
                            <th>{plantsHardiness.water}</th>
                            <th>{plantsHardiness.sunlight}</th>
                            <th>{plantsHardiness.plantHardinessZone}</th>
                        </tr>))}

                </tbody>

            </Table>

            </Col>

        );

}

export default HardinessComp;