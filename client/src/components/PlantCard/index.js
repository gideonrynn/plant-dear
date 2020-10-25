import React, {useState, useEffect} from 'react'
import { Card, Button } from "react-bootstrap"
import Plants from '../../pages/Plants'

function PlantCard(p) {

    const [thisPlant, setThisPlant] = useState([])

    useEffect(() => {

        setThisPlant(p.plants)

    }, [p])

    return (
        <>
            {thisPlant.map(plant => (
                <Card className="text-left" key={plant.id} >
                    <Card.Header style={{backgroundColor: '#495F75'}}>{plant.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Subtitle>{plant.botanicalName}</Card.Subtitle>
                            <Card.Text>
                            {plant.notes}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>

            ))}
            
        </>
    )
} 

export default PlantCard;