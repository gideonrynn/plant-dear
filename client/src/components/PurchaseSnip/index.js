
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


function PurchaseSnip(cw) {

    const [toPurchase, setToPurchase] = useState([])

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        
        loadToPurchase()
        // console.log(cw.weather.currentWeather.temp)

    
    }, [cw])

    function loadToPurchase() {

                PlantAPI.getAllPlants()
                    .then(res => {
                        let allPlants = res.data;
                        let incoming = cw.weather.currentWeather.temp;

                        // display all the plants marked inactive
                        let inactivePlants = allPlants.filter(allPlants => { 
                            return allPlants.hardiness !== "" && allPlants.status === "inactive" && incoming >= allPlants.hardiness
                        });

                        // return allPlants.hardiness <= currentWeatherL && allPlants.hardiness < 0

                        const plantsToPurchase = inactivePlants;
                        
                        setToPurchase(plantsToPurchase);
                   

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
                        <Card.Title>Time to Purchase</Card.Title>
                        <Card.Subtitle><i>Inactive plants where the current temperature is above the hardiness</i></Card.Subtitle>
                    </Card.Header>
                    {toPurchase.map(toPurchase => (
                        <ListGroup className="list-group-flush" key={toPurchase.id} >
                            <ListGroupItem 
                                key={toPurchase.id} 
                                onClick={() => getPlant(toPurchase.id)}>{toPurchase.name} ({toPurchase.hardiness}&#176;) </ListGroupItem>
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

export default PurchaseSnip;