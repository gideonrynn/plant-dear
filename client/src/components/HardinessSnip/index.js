
import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import { Table, Col, Row } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import WeatherAPI from "../../utils/WeatherAPI"
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import ReviewPlant from "../ReviewPlant";


function HardinessSnip(cw) {

    const [plantsHardiness, setPlantsHardiness] = useState([])
    // let [dangerZone, setdangerZone] = useState([])
    const [currentTemp, setCurrentTemp] = useState([]);

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        
        loadPlantsHardiness()
        // console.log(cw.weather.temp)

    
    }, [])

    function loadPlantsHardiness() {

                PlantAPI.getAllPlants()
                    .then(res => {
                        let incoming = ""
                        let allPlants = res.data;

                        incoming = cw.weather.temp;
                        setCurrentTemp(incoming)
                        console.log(currentTemp)

                        // display all the plants with a hardiness less than or equal to the current weather
                        let hardyPlants = allPlants.filter(allPlants => { 
                            return allPlants.hardiness !== "" && allPlants.location === "outdoor" && incoming <= allPlants.hardiness
                            // return allPlants.hardiness >= (currentWeatherL - 10) && allPlants.location === "outdoor"
                        });

                        // return allPlants.hardiness <= currentWeatherL && allPlants.hardiness < 0

                        const plantsHardiness = hardyPlants;
                        
                        setPlantsHardiness(plantsHardiness);
                   

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

            <h3>Plant Hardiness Watch</h3>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Hardiness</th>
                    </tr>
                </thead>


                <tbody>

                    {plantsHardiness.map(plantsHardiness => (

                        <tr 
                            key={plantsHardiness.id} 
                            style={
                            (currentTemp - 10) <= plantsHardiness.hardiness && currentTemp > plantsHardiness.hardiness ? {background: '#FFEC62'} 
                            : currentTemp <= plantsHardiness.hardiness ? {background: '#FF6726'} 
                            : {background: '#FFFFFF'}}
                            onClick={() => getPlant(plantsHardiness.id)}
                        >
                            <td>{plantsHardiness.name} </td>
                            <td>{plantsHardiness.location} </td>
                            <td>{plantsHardiness.hardiness} </td>

                        </tr>))}

                </tbody>

            </Table>
            <Link>See more</Link>

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

            </Col>
            



        );

}

export default HardinessSnip;