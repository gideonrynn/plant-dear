import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";
import PlantCard from "../../components/PlantCard"
import { Table, Modal } from "react-bootstrap"

function Plants () {

    // Setting our component's initial state
    const [plants, setPlants] = useState([])
    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadPlants()
    
    }, [])

    // Loads all plants and sets them to plants state
    function loadPlants() {

        PlantAPI.getAllPlants()
            .then(res => {
                // console.log(res.data)
                const plants = res.data;
                setPlants(plants);
            })
            .catch(err => console.log(err));
    };

    // function openPlant(id) {
    //     console.log("You clicked on the " + id + " row.")
    //     // console.log(plants[0].id)
     
    // }

    function getPlant(id) {

       setOnePlantId(id)
                PlantAPI.getOnePlant(id)
                    .then(res => {
                        // console.log(onePlant)
                        setOnePlant(res.data)
                        
                        handleShow()
                            // .then(res => {
                            //     
                            // })
                            
                    // const plants = res.data;
                    // setPlants(plants);
                })
                .catch(err => console.log(err))
    }

    return (
        <div className="plantsdiv">
            
            <h3>All plants ( )</h3>

            {/* <Table striped bordered hover>

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

                        <tr key={plant.id} name={plant.name} onClick={() => getPlant(plant.id)}>
                            <td>{plant.name} </td>
                            <td>{plant.location} </td>
                            <td>{plant.tempHigh} </td>
                            <td>{plant.tempLow} </td>
                            <td>{plant.hardiness} </td>
                            <td>{plant.water}</td>
                            <td>{plant.sunlight}</td>
                            <td>{plant.hardinessZone}</td>
                        </tr>))}

                </tbody>
            </Table> */}

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{onePlant.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewPlant onePlant={onePlant} id={onePlantId}/>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>

            <PlantCard plants={plants}/>
        </div>
    )
}

export default Plants;