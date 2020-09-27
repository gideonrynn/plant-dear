import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";
import { Table, Modal } from "react-bootstrap"

function Plants () {

    // Setting our component's initial state
    const [plants, setPlants] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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

    function openPlant(id) {
        console.log("You clicked on the " + id + " row.")
        // console.log(plants[0].id)
     
    }

    function handleShow() {
        setShow(true)
    }

    function doTwoThings(id) {
                PlantAPI.getOnePlant(id)
                    .then(res => {
                        console.log(res.data)
                    // const plants = res.data;
                    // setPlants(plants);
                })
                .catch(err => console.log(err))

        // handleShow()
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

                        <tr key={plant.id} name={plant.name} onClick={() => doTwoThings(plant.id)}>
                            <th>{plant.name} </th>
                            <th>{plant.location} </th>
                            <th>{plant.tempHigh} </th>
                            <th>{plant.tempLow} </th>
                            <th>{plant.hardiness} </th>
                            <th>{plant.water}</th>
                            <th>{plant.sunlight}</th>
                            <th>{plant.hardinessZone}</th>
                        </tr>))}

                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewPlant/>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Plants;