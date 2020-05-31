import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import { Table } from "react-bootstrap"

function Plants () {

    // Setting our component's initial state
    const [plants, setPlants] = useState([])

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadPlants()
    
    }, [])

    // Loads all plants and sets them to plants state
    function loadPlants() {

        PlantAPI.getAllPlants()
            .then(res => {
                console.log(res.data)
                const plants = res.data;
                setPlants(plants);
            })
            .catch(err => console.log(err));
    };

    function consoleHello(event) {
        console.log("You clicked on the" + event.target.id + " row.")
    }

    return (
        <div className="plantsdiv">
            
            <h3>Here are all our plants!</h3>

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

                    {plants.map(plant => (

                        <tr key={plant._id} onClick={consoleHello}>
                            <th>{plant.name} </th>
                            <th>{plant.location} </th>
                            <th>{plant.tempHigh} </th>
                            <th>{plant.tempLow} </th>
                            <th>{plant.hardiness} </th>
                            <th>{plant.water}</th>
                            <th>{plant.sunlight}</th>
                            <th>{plant.plantHardinessZone}</th>
                        </tr>))}

                </tbody>
            </Table>
        </div>
    )
}

export default Plants;