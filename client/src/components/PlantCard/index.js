import React, {useState, useEffect} from 'react'
import { Card, Button, Row, Col, ListGroup, ListGroupItem, Image, Container, Modal } from "react-bootstrap"
import Plants from '../../pages/Plants'
import Plantling from '../../img/plantling.jpg'
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";

function PlantCard(p) {

    const [thisPlant, setThisPlant] = useState([])
    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        loadSortedPlants()

    }, [p])

    function loadSortedPlants () {
        p.plants.sort((a,b) => a.name > b.name ? 1: -1)
        setThisPlant(p.plants)
    }


    function updateWaterDate(id, days) {
        let date = new Date()
        date.setDate(date.getDate() - days);
        // console.log(date)
        // console.log(id)
        PlantAPI.updatePlant(
            id,
            {
                lastWatered: date,
            })
            .then(window.location.reload(true))
            .catch(err => console.log(err))
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
        <Container>
            
            {thisPlant.map(plant => (
                <div>
                    <Row>
                        <Col xs={3}>
                            <Image src={Plantling} 
                                    height={100} 
                                    width={100} 
                                    rounded 
                                    style={{
                                        marginTop: 20,
                                        marginBottom: 20
                                        }}
                                />
                        </Col>
                        <Col>
                            <Card 
                                className="text-left" 
                                key={plant.id} 
                                style={{
                                    marginTop: 20,
                                    marginBottom: 20
                                }}
                            >
                                <Card.Header style={{backgroundColor: '#78A4CF'}}>
                                    <Card.Title>{plant.name} (<i>{plant.botanicalName}</i>)</Card.Title>
                                    
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem><b>Watering preference</b>: {plant.waterPref}</ListGroupItem>
                                                <ListGroupItem><b>Last Watered</b>: {plant.lastWatered}</ListGroupItem>
                                                <ListGroupItem><b>Sunlight</b>: {plant.sunlight}</ListGroupItem>
                                            </ListGroup>
                                        </Col>
                                        <Col>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem><b>Humidity</b>: {plant.humidity}</ListGroupItem>
                                                <ListGroupItem><b>Location</b>: {plant.location}</ListGroupItem>
                                                <ListGroupItem><b>Location secondary</b>: {plant.locationSec}</ListGroupItem>
                                                <ListGroupItem><b>Notes</b>: {plant.notes}</ListGroupItem>
                                            </ListGroup>
                                            {/* <Card.Text>
                                            </Card.Text> */}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>
                                                    <Card.Text> <b>Watered</b></Card.Text>
                                                    <Button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(plant.id, 0)}>Today</Button>
                                                    <Button style={{backgroundColor: '#91AFF5'}} onClick={() => updateWaterDate(plant.id, 1)}>Yesterday</Button>
                                                    <Button style={{backgroundColor: '#7A9AE3'}} onClick={() => updateWaterDate(plant.id, 2)}>Two Days</Button>
                                                    <Button style={{backgroundColor: '#799EE2'}} onClick={() => updateWaterDate(plant.id, 3)}>Three Days</Button>
                                                    <Button style={{backgroundColor: '#3D64BD'}} onClick={() => updateWaterDate(plant.id, 7)}>One Week</Button>
                                                </ListGroupItem>
                                                <ListGroupItem><Button style={{backgroundColor: '#3A6996'}} onClick={() => getPlant(plant.id)}>Modify</Button></ListGroupItem>
                                            </ListGroup>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        
                    </Row>

                    
                        
                </div>
                
            ))}

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
            
        </Container>
    )
} 

export default PlantCard;