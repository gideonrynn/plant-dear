
import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import { Table, Col } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import WeatherAPI from "../../utils/WeatherAPI"


function HardinessComp(cw) {

    const [plantsHardiness, setPlantsHardiness] = useState([])
    // let [dangerZone, setdangerZone] = useState([])
    const [currentTemp, setCurrentTemp] = useState([]);
    
    useEffect(() => {
        
        loadPlantsHardiness()
        // console.log(cw.weather.temp)

    
    }, [])

    function loadPlantsHardiness() {

                PlantAPI.getAllPlants()
                    .then(res => {
                        let incoming = ""
                        let allPlants = res.data;
                        // console.log(allPlants);

                        // display all the plants with a hardiness less than or equal to the current weather
                        let hardyPlants = allPlants.filter(allPlants => { 
                            return allPlants.hardiness !== null && allPlants.location === "outdoor"
                            // return allPlants.hardiness >= (currentWeatherL - 10) && allPlants.location === "outdoor"
                        });

                        
                        incoming = cw.weather.temp;
                        setCurrentTemp(incoming)
                        console.log(currentTemp)

                        // return allPlants.hardiness <= currentWeatherL && allPlants.hardiness < 0

                        const plantsHardiness = hardyPlants;
                        
                        setPlantsHardiness(plantsHardiness);
                   

                })
            
    };

    return (
            <Col>

            <h3>Plant Hardiness Watch</h3>
            <p>Current temperature is 10 degrees or less from the plant's hardiness threshold </p>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Name</th>
                        {/* <th>Location</th> */}
                        {/* <th>Average</th> */}
                        <th>Hardiness</th>
                        <th>Water</th>
                        <th>Sunlight</th>
                        {/* <th>PHZ</th> */}
                    </tr>
                </thead>


                <tbody>

                    {plantsHardiness.map(plantsHardiness => (

                        <tr key={plantsHardiness.id} style={
                            (currentTemp - 10) <= plantsHardiness.hardiness && currentTemp > plantsHardiness.hardiness ? {background: '#FFEC62'} 
                            : currentTemp <= plantsHardiness.hardiness ? {background: '#FF6726'} 
                            : {background: '#FFFFFF'}}>
                            <td>{plantsHardiness.name} </td>
                            {/* <th>{plantsHardiness.location} </th> */}
                            {/* <th>{plantsHardiness.tempLow} - {plantsHardiness.tempHigh} </th> */}
                            <td>{plantsHardiness.hardiness} </td>
                            <td>{plantsHardiness.waterPref}</td>
                            <td>{plantsHardiness.sunlight}</td>
                            {/* <th>{plantsHardiness.hardinessZone}</th> */}
                        </tr>))}

                </tbody>

            </Table>

            </Col>

        );

}

export default HardinessComp;