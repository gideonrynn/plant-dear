
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

            const futureWeather = cw.forecastWeather;
            // for(let i = 0; i < futureWeather.length; i++) {
            //     console.log(futureWeather[i]);
            // };

            console.log(futureWeather);

                PlantAPI.getAllPlants()
                    .then(res => {
                        let incoming = cw.weather.app_temp;
                        let allPlants = res.data;
                        let margin = 5;
                        const plantsGroup = [];
                        // console.log(incoming)

                        // setCurrentTemp(incoming)
                        // console.log(currentTemp)

                        // display all the plants with a hardiness greater than the current weather
                        let hardyPlants = allPlants.filter(allPlants => { 
                            return allPlants.hardiness !== "" && allPlants.status !== "inactive" && allPlants.location !== "outdoor" && incoming >= allPlants.hardiness && allPlants.locationPreferred === "outdoor"
                        
                        });

                        // determine which plants can ultimately go into the readiness category
                        // compare plant hardiness against weather for the next two weeks
                        // if the hardiness is at any point below the minimum temp in the weather forecast
                        // the plant should not be pushed to the plantsGroup array
                        for(let i = 0; i < hardyPlants.length; i++) {

                            let add = true;
                            console.log(hardyPlants[i].hardiness)

                            for(let v = 0; v < futureWeather.length; v++) {

                                console.log(futureWeather[v]);
                                
                                if((+hardyPlants[i].hardiness + margin) >= futureWeather[v].min_temp) {
                                    add = false;
                                }
                                console.log("plant temp: " + (+hardyPlants[i].hardiness + margin) + " weather min temp: " + futureWeather[v].min_temp + " value of add: " + add);
                            };

                            if(add){
                                plantsGroup.push(hardyPlants[i]);
                                console.log("This plant is OK");
                            }
                        }

                        console.log(plantsGroup)

                        const plantsHardiness = plantsGroup;
                        
                        setPlantReadiness(plantsHardiness);
                   

                })
            
    };


    function checkPlantReadiness() {

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