import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import { Table, Col } from "react-bootstrap"
import PlantAPI from "../../../utils/PlantsAPI"
// import "./style.css";

function ModPlants() {

    /*Description: Want this component to show all plants that are being worked on
    Status: currently not in use */
    
    console.log("TransitPlants/ModPlants component initialized");

    // Setting our component's initial state
    const [modStatusPlant, setModStatusPlant] = useState([])
    
    // Load all plants and store them within setPlants
    useEffect(() => {

        loadPlantsbyStatus()
    
    }, [])

    // Loads all plants and sets them to plants state
    function loadPlantsbyStatus() {

        PlantAPI.getSomePlants()
            .then(res => {
                // console.log(res.data)
                const plants = res.data;
                setModStatusPlant(plants);
            })
            .catch(err => console.log(err));
    };

    function getPlant(id) {
        // console.log("This plant id is" + id)
    }

    return (
        
        <Col className="mod">

            <h3>Plants I'm Working On</h3>

            <Table  striped bordered hover>

                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Notes</th>
        
                    </tr>
                </thead>

                <tbody>

                    {modStatusPlant.map(plant => (

                        <tr key={plant.id} name={plant.name} onClick={() => getPlant(plant.id)}>
                            <th>{plant.name} </th>
                            <th>{plant.status} </th>
                            <th >{plant.notes} </th>
                        </tr>))}

                </tbody>
                
            </Table>

        </Col>
    );


}

export default ModPlants;