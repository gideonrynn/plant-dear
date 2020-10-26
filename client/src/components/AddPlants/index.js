import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap"
import AddPlantAPI from "../../utils/PlantsAPI"

function AddPlants() {

    const [newPlant, setNewPlant] = useState({});

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    useEffect(() => {}, []);

    function handleInputChange(event) {
        // const { name, value } = event.target;
        let fieldName = event.target.name
        let fieldValue = event.target.value
        setNewPlant({...newPlant, [fieldName]: fieldValue})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log(newPlant)
        AddPlantAPI.addPlant({
            name: newPlant.name,
            botanicalName: newPlant.botanicalName,
            status: newPlant.status,
            location: newPlant.location,
            locationSec: newPlant.locationSec,
            water: newPlant.water,
            sunlight: newPlant.sunlight,
            plantType: newPlant.plantType,
            humidity: newPlant.humidity,
            tempLow: newPlant.tempLow,
            tempHigh: newPlant.tempHigh,
            hardiness: newPlant.hardiness,
            pH: newPlant.pH,
            soilContent: newPlant.soilContent,
            cycle: newPlant.cycle,
            plantHardinessZone: newPlant.hardiness,
            lastPotted: newPlant.lastPotted,
            links: newPlant.links,
            notes: newPlant.notes
        })
            .then(window.location.reload(true))
            .catch(err => console.log(err))
    }

    return (

        <>
            <Form>
                <Form.Group controlId="formName" onChange={handleInputChange}>
                    <Form.Label>Plant Name</Form.Label>
                    <Form.Control type="name" placeholder="" name="name" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBotName" >
                    <Form.Label>Botanical Name</Form.Label>
                    <Form.Control type="text" placeholder="" name="botanicalName" onChange={handleInputChange}/>
                </Form.Group>
                {/* <Form.Group controlId="formStatus" >
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" name="status" onChange={handleInputChange}>
                        <option></option>
                        <option>moving</option>
                        <option>potting</option>
                        <option>moist</option>
                    </Form.Control>
                </Form.Group> */}
                <Form.Group controlId="formStatus" >
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="" name="status" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select" name="location" onChange={handleInputChange}>
                        <option></option>
                        <option>indoor</option>
                        <option>outdoor</option>
                        <option>indoor and outdoor</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formLocationSecondary" >
                    <Form.Label>Secondary Location</Form.Label>
                    <Form.Control type="text" placeholder="" name="locationSec" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formWater" >
                    <Form.Label>Water</Form.Label>
                    <Form.Control as="select" name="water" onChange={handleInputChange}>
                        <option></option>
                        <option>dry</option>
                        <option>moderate</option>
                        <option>moist</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formSunlight" >
                    <Form.Label>Sunlight</Form.Label>
                    <Form.Control as="select" name="sunlight" onChange={handleInputChange}>
                        <option></option>
                        <option>indirect</option>
                        <option>low</option>
                        <option>medium</option>
                        <option>bright</option>
                        <option>part shade</option>
                        <option>part sun</option>
                        <option>full sun</option>
                        <option>full sun to part shade</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formPlantType" >
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" name="plantType" onChange={handleInputChange}>
                        <option></option>
                        <option>herb</option>
                        <option>houseplant</option>
                        <option>succulent</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formHumidity">
                    <Form.Label>Humidity</Form.Label>
                    <Form.Control as="select" name="humidity" onChange={handleInputChange}>
                        <option></option>
                        <option>low</option>
                        <option>moderate</option>
                        <option>high</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formTempLow">
                    <Form.Label>Low Temp</Form.Label>
                    <Form.Control type="text" placeholder="" name="tempHigh" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formTempHigh" >
                    <Form.Label>High Temp</Form.Label>
                    <Form.Control type="text" placeholder="" name="tempLow" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formHardyTo">
                    <Form.Label>Hardy To (Temp)</Form.Label>
                    <Form.Control type="text" placeholder="" name="hardiness" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formPH">
                    <Form.Label>pH</Form.Label>
                    <Form.Control type="text" placeholder="" name="ph" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formsoilContent">
                    <Form.Label>Soil Content</Form.Label>
                    <Form.Control type="text" placeholder="" name="soilContent" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formCycle" >
                    <Form.Label>Cycle</Form.Label>
                    <Form.Control as="select" name="cycle" onChange={handleInputChange}>
                        <option></option>
                        <option>annual</option>
                        <option>biennial</option>
                        <option>perennial</option>
                    </Form.Control>
                        <Form.Text className="text-muted">
                            Annuals die yearly, biennial two year lifecycle, perennials regrow every spring.
                        </Form.Text>
                </Form.Group>
                <Form.Group controlId="formHardyZone" >
                    <Form.Label>Hardiness Zone</Form.Label>
                    <Form.Control type="text" placeholder="" name="plantHardinessZone" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formLastPotted" >
                    <Form.Label>Last Potted</Form.Label>
                    <Form.Control type="text" placeholder="" name="lastPotted" onChange={handleInputChange}/>
                        <Form.Text className="text-muted">
                        YYYY-MM-DD.
                        </Form.Text>
                </Form.Group>
                <Form.Group controlId="formLinks" >
                    <Form.Label>Links</Form.Label>
                    <Form.Control type="text" placeholder="" name="links" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formNotes" >
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="text" placeholder="" name="notes" onChange={handleInputChange}/>
                </Form.Group>
                <Button style={{backgroundColor: '#887FE5'}} type="submit" onClick={handleFormSubmit}>
                    Submit
                </Button>
            </Form>

      
      </>
    
    );

}

export default AddPlants;