
import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap"
// import { Table, Col, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
// import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import ReviewPlant from "../ReviewPlant";


function HumiditySnip() {

    const [humidPlants, setHumidPlants] = useState([])

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        
        loadPlants()
        // console.log(cw.weather.temp)

    
    }, [])

    function loadPlants() {

                PlantAPI.getAllPlants()
                    .then(res => {
                        let allPlants = res.data;

                        // display all the plants with a hardiness less than or equal to the current weather
                        let humidPlants = allPlants.filter(allPlants => { 
                            return allPlants.humidity !== "" && allPlants.humidity === "high" && allPlants.location === "indoor"
                        });
                        
                        setHumidPlants(humidPlants);
                   

                })
            
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

                <Card style={{ minWidth: '14rem'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Header style={{backgroundColor: '#5FAE57'}}>
                        <Card.Title>Humidity Lovers</Card.Title>
                        <Card.Subtitle><i>Indoor plants with high humidity</i></Card.Subtitle>
                    </Card.Header>
                    {/* <Card.Body>
                        <Card.Title></Card.Title> */}
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                    {/* </Card.Body> */}
                    {humidPlants.map(humidPlants => (
                        <ListGroup className="list-group-flush" key={humidPlants.id}>
                            <ListGroupItem 
                                key={humidPlants.id} 
                                onClick={() => getPlant(humidPlants.id)}>{humidPlants.name} </ListGroupItem>
                        </ListGroup>))}
                    <Card.Body>
                        <Card.Link href="#">See all humidity-lovers</Card.Link>
                    </Card.Body>
                </Card>

                <Modal size="lg"  show={show} onHide={handleClose}>
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

export default HumiditySnip;