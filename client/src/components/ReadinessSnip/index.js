
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


function ReadinessSnip(cw) {

    const [plantReadiness, setPlantReadiness] = useState([])

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        
        loadPlantReadiness()
        // console.log(cw.weather.currentWeather.temp)
        console.log("ReadinessSnip render triggered")
    
    }, [cw])

    function loadPlantReadiness() {

                PlantAPI.getAllPlants()
                    .then(res => {
                        let incoming = cw.weather.app_temp;
                        let allPlants = res.data;
                        // console.log(incoming)

                        // setCurrentTemp(incoming)
                        // console.log(currentTemp)

                        // display all the plants with a hardiness greater than the current weather
                        let hardyPlants = allPlants.filter(allPlants => { 
                            return allPlants.hardiness !== "" && allPlants.status !== "inactive" && allPlants.location !== "outdoor" && incoming >= allPlants.hardiness && allPlants.locationPreferred === "outdoor"
                        
                        });

                        const plantsHardiness = hardyPlants;
                        
                        setPlantReadiness(plantsHardiness);
                   

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
                    <Card.Header style={{backgroundColor: '#78A4CF'}}>
                        <Card.Title>Ready For Outdoors</Card.Title>
                        <Card.Subtitle><i>Preferred outdoor plants with hardiness below current temperature</i></Card.Subtitle>
                    </Card.Header>
                    {plantReadiness.map(plantReadiness => (
                        <ListGroup className="list-group-flush" key={plantReadiness.id} >
                            <ListGroupItem 
                                key={plantReadiness.id} 
                                onClick={() => getPlant(plantReadiness.id)}>{plantReadiness.name} ({plantReadiness.hardiness}&#176;) </ListGroupItem>
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

export default ReadinessSnip;