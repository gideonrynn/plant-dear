import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import { Table, Col, Container } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import "./style.css";
import { Modal } from "react-bootstrap"
import ReviewPlant from "../../components/ReviewPlant";

function ModPlants() {

    // Setting our component's initial state
    const [modStatusPlant, setModStatusPlant] = useState([])

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
        <Container>
        
        <Col md="auto">

            <h3>Plants I'm Working On</h3>

            <Table striped bordered hover responsive>

                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Notes</th>
        
                    </tr>
                </thead>

                <tbody>

                    {modStatusPlant.map(plant => (

                        <tr key={plant.id} onClick={() => getPlant(plant.id)}>
                            <td>{plant.name} </td>
                            <td>{plant.status} </td>
                            <td width="600">{plant.notes} </td>
                        </tr>))}

                </tbody>
                
            </Table>

        </Col>

        
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
        </Container>

        
    );


}

export default ModPlants;