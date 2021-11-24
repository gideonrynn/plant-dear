import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap"
// import { Table, Col, Container, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import PlantAPI from "../../../utils/PlantsAPI"
import "./style.css";
import { Modal } from "react-bootstrap"
import ReviewPlant from "../../ReviewPlant";
// import { Link } from 'react-router-dom'

function WatchlistSnip() {

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
        console.log("WatchlistSnip render triggered")
    
    }, [])

    // Loads all plants and sets them to plants state
    function loadPlantsbyStatus() {

        PlantAPI.getInProgressPlants()
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
    
            <Col >
                <Card style={{ minWidth: '14rem'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Header style={{backgroundColor: '#78A4CF'}}>
                        <Card.Title>Watchlist</Card.Title>
                        <Card.Subtitle><i>Plant status = in progress or Trouble = yes</i></Card.Subtitle>
                    </Card.Header>
                    {/* <Card.Body> */}
                    {/* </Card.Body> */}
                    {modStatusPlant.map(plant => (
                        <ListGroup className="list-group-flush" key={plant.id} >
                            <ListGroupItem 
                                key={plant.id} 
                                onClick={() => getPlant(plant.id)}> {plant.name} ({plant.locationSec}) </ListGroupItem>
                            </ListGroup>))}
                    <Card.Body>
                        <Card.Link href="/plants">See all plants</Card.Link>
                    </Card.Body>
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

export default WatchlistSnip;