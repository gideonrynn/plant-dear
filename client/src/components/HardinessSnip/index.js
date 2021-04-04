
import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap"
// import { Table, Col, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import HardinessAPI from "../../utils/HardinessAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
// import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import ReviewPlant from "../ReviewPlant";


function HardinessSnip(cw) {
    console.log(cw)
    const currentTemp = cw.weather.app_temp;
    
    const [plantsHardiness, setPlantsHardiness] = useState([])

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        
        loadPlantsHardiness();
        loadHardinessZones();
        console.log(cw.weather.app_temp)
        console.log("HardinessSnip render triggered")
    
    }, [cw])

    function loadPlantsHardiness() {

                PlantAPI.getAllPlants()
                    .then(res => {
                        let incoming = currentTemp;
                        let allPlants = res.data;
                        // console.log(incoming)

                        // setCurrentTemp(incoming)
                        // console.log(currentTemp)

                        // display all the plants with a hardiness less than or equal to the current weather
                        let hardyPlants = allPlants.filter(allPlants => { 
                            return allPlants.hardiness !== "" && incoming <= allPlants.hardiness && allPlants.location === "outdoor"
                            // return allPlants.hardiness >= (currentWeatherL - 10) && allPlants.location === "outdoor"
                        });

                        // return allPlants.hardiness <= currentWeatherL && allPlants.hardiness < 0

                        const plantsHardiness = hardyPlants;
                        
                        setPlantsHardiness(plantsHardiness);
                   

                })
            
    };

    function loadHardinessZones() {
        HardinessAPI.getHardinessZones()
            .then(res => { console.log(res.data) })
    }
    
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
                        <Card.Title>Plant Hardiness Watch</Card.Title>
                        <Card.Subtitle><i>Outdoor plants to watch with hardiness above current temperature</i></Card.Subtitle>
                    </Card.Header>
                    {plantsHardiness.map(plantsHardiness => (
                        <ListGroup className="list-group-flush" key={plantsHardiness.id} >
                            <ListGroupItem 
                                key={plantsHardiness.id} 
                                onClick={() => getPlant(plantsHardiness.id)}>{plantsHardiness.name} ({plantsHardiness.hardiness}&#176;) </ListGroupItem>
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

export default HardinessSnip;