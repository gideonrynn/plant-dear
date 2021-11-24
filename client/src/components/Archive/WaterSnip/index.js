
import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap"
// import { Table, Col, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import PlantAPI from "../../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
// import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import ReviewPlant from "../../ReviewPlant";


function WaterSnip(data) {

    const plants = data.plants;
    
    const [waterPlants, setWaterPlants] = useState([])

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        
        loadPlants()
        // console.log(cw.weather.temp)
        console.log("Water snip render triggered")
    
    }, [data])

    function loadPlants() {

        if(plants[0]) {
        let date = new Date();
        console.log(plants[0])
        let wateredConverted = new Date(plants[0].lastWatered);
        let days = '3';
        let newDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - days);
        console.log("New date: " + newDate)
        console.log("Watered converted: " + wateredConverted.valueOf())
        // console.log("plants watered with iso: ", new Date(plants[0].lastWatered).toISOString() )

        let plantsLastWatered = wateredConverted.getFullYear() + "-" + (wateredConverted.getMonth() + 1) + "-" + (wateredConverted.getDate());
        console.log("Date this is supposed to be watered: " + newDate)
        console.log("plants watered: " + plantsLastWatered)
        console.log(plantsLastWatered.valueOf() > newDate.valueOf());

        
        // let dateRange = "";
        let checkDate = newDate - days;
        console.log("date: ", date);
        console.log("date comparison: ", newDate);
        console.log("check date: ", checkDate);
            // .split('T')[0]
        let waterPlants = plants.filter(currentPlants => {
                return currentPlants.lastWatered >= newDate;
        });
        console.log("waterplants", waterPlants);
        console.log(plants);
        console.log("last watered:" + new Date(plants[0].lastWatered).toLocaleDateString())
        console.log("today's date:" + date)
        console.log(wateredConverted.valueOf() === date.valueOf())
        setWaterPlants(waterPlants);
    }
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
                    {/* #5FAE57 */}
                    <Card.Header style={{backgroundColor: '#78A4CF'}}>
                        <Card.Title>Love Water</Card.Title>
                        <Card.Subtitle><i>Indoor plants with moist requirements</i></Card.Subtitle>
                    </Card.Header>
                    {waterPlants.map(waterPlants => (
                        <ListGroup className="list-group-flush" key={waterPlants.id}  >
                            <ListGroupItem 
                                key={waterPlants.id} 
                                onClick={() => getPlant(waterPlants.id)}>{waterPlants.name}{  }{waterPlants.lastWatered} </ListGroupItem>
                                
                        </ListGroup>))}
                    <Card.Body>
                        <Card.Link href="/plants">See all plants</Card.Link>
                    </Card.Body>
                </Card>

                <Modal size="lg" show={show} onHide={handleClose} animation={false}>
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

export default WaterSnip;