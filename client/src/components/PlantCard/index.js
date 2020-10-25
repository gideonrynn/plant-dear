import React, {useState, useEffect} from 'react'
import { Card, Button, Row, Col, ListGroup, ListGroupItem, Image, Container } from "react-bootstrap"
import Plants from '../../pages/Plants'
import Plantling from '../../img/plantling.jpg'

function PlantCard(p) {

    const [thisPlant, setThisPlant] = useState([])

    useEffect(() => {

        setThisPlant(p.plants)

    }, [p])

    return (
        <Container>
            
            {thisPlant.map(plant => (
                <div>
                    <Row>
                        <Col xs={3}>
                            <Image src={Plantling} height={100} width={100} rounded style={{
                                    marginTop: 20,
                                    marginBottom: 20
                                }}/>
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
                                            <Button variant="primary">Go somewhere</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                
            ))}
            
        </Container>
    )
} 

export default PlantCard;