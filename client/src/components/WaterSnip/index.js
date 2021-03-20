
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


function WaterSnip() {

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
        console.log("Need a drink render triggered")
    
    }, [])

    function loadPlants() {

        let date = new Date();
        let newDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 3);
        console.log(newDate)
        let days = '3';
        // let dateRange = "";
        let checkDate = newDate - days;
        console.log("date: ", date);
        console.log("date comparison: ", newDate);
        console.log("check date: ", checkDate);

        PlantAPI.getCurrentPlants()
            .then(res => {
                let currentPlants = res.data;
                console.log(res.data);

                
                console.log(currentPlants[0].lastWatered)
                // console.log(dateComparison > date)
                
                // display all the plants with a hardiness less than or equal to the current weather
                let waterPlants = currentPlants.filter(currentPlants => { 
                    return currentPlants.lastWatered >= checkDate;
                });

                // console.log(date);
                
                setWaterPlants(waterPlants);
            

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
                    {/* #5FAE57 */}
                    <Card.Header style={{backgroundColor: '#78A4CF'}}>
                        <Card.Title>Love Water</Card.Title>
                        <Card.Subtitle><i>Indoor plants with moist requirements</i></Card.Subtitle>
                    </Card.Header>
                    {waterPlants.map(waterPlants => (
                        <ListGroup className="list-group-flush" key={waterPlants.id}  >
                            <ListGroupItem 
                                key={waterPlants.id} 
                                onClick={() => getPlant(waterPlants.id)}>{waterPlants.name} </ListGroupItem>
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