import React, {useEffect, useState, useContext } from "react";
import { Box, Button, Grommet, Heading, Layer, Select, Text } from 'grommet';
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../ReviewPlant";
import {WeatherContext} from "../../context/WeatherContext"
import "./style.css";


const Snip = () => {

    const weather = useContext(WeatherContext);
    const currentWeather = weather.currentWeather;
    // const forecastWeather = weather.forecastWeather;

    const currentTemp = currentWeather.app_temp;
    const [plantsHardiness, setPlantsHardiness] = useState([])

    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    useEffect(() => {
        
        loadPlantsHardiness()
        // console.log(currentTemp);
        console.log("Snip render triggered")
    
    }, [])

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

        <>
            <Box fill align="center" justify="center">
                <Button
                    icon={<Trash />}
                    label={
                        <Text>
                        <strong>Remove</strong>
                        </Text>
                    }
                    onClick={handleShow}
                    plain
                />
            </Box>
            {show && (
                <Layer position="center" onClickOutside={handleClose} onEsc={handleClose}>
                <Box pad="medium" gap="small" width="medium">
                    <Heading level={3} margin="none">
                    {onePlant.name}
                    </Heading>
                    <Text>Are you sure you want to delete?</Text>
                    <Box
                    as="footer"
                    gap="small"
                    direction="row"
                    align="center"
                    justify="end"
                    pad={{ top: 'medium', bottom: 'small' }}
                    >
                    <Button label="Open 2" onClick={onOpen2} color="dark-3" />
                    <Button
                        label={
                        <Text color="white">
                            <strong>Delete</strong>
                        </Text>
                        }
                        onClick={onClose}
                        primary
                        color="status-critical"
                    />
                    </Box>
                </Box>
                </Layer>
            )}
        
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
            

        </>

        );

}

export default Snip;