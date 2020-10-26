import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import { Table, Col, Container, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import "./style.css";
import { Modal } from "react-bootstrap"
import ReviewPlant from "../ReviewPlant";
import { Link } from 'react-router-dom'

function ModPlantsSnip() {

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
    
            <Col>
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Header style={{backgroundColor: '#5FAE57'}}><Card.Title>In Progress</Card.Title></Card.Header>
                    {/* <Card.Body> */}
                        
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text> */}
                    {/* </Card.Body> */}
                    {modStatusPlant.map(plant => (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem 
                                key={plant.id} 
                                onClick={() => getPlant(plant.id)}> {plant.name} </ListGroupItem>
                            </ListGroup>))}
                    {/* <Card.Body>
                        <Card.Link href="#">See more</Card.Link>
                    </Card.Body> */}
                </Card>
        
                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header style={{backgroundColor: '#887FE5'}} closeButton>
                        <Modal.Title>{onePlant.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReviewPlant onePlant={onePlant} id={onePlantId}/>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    </Modal.Footer>
                </Modal>   
       
            </Col>
  
    );
    


}

export default ModPlantsSnip;