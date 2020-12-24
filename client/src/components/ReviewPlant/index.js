import React, { useEffect, useState } from "react";
import { Form, Button, Col } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"

function ReviewPlant(props) {

    const [modPlant, setModPlant] = useState({});
    const [thisPlant, setThisPlant] = useState({});
    const [thisPlantId, setThisPlantId] = useState({});

    useEffect(() => {
        setThisPlant(props.onePlant)
        setThisPlantId(props.onePlant.id)
        
    }, [props.onePlant]);

    function handleInputChange(event) {
        // const { name, defaultValue } = event.target;
        let fieldName = event.target.name
        let fielddefaultValue = event.target.value
        setModPlant({...modPlant, [fieldName]: fielddefaultValue})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(modPlant)
        console.log(thisPlantId)
        PlantAPI.updatePlant(
            thisPlantId,
            {
            name: modPlant.name,
            botanicalName: modPlant.botanicalName,
            status: modPlant.status,
            location: modPlant.location,
            locationSec: modPlant.locationSec,
            waterPref: modPlant.waterPref,
            sunlight: modPlant.sunlight,
            plantType: modPlant.plantType,
            humidity: modPlant.humidity,
            tempLow: modPlant.tempLow,
            tempHigh: modPlant.tempHigh,
            hardiness: modPlant.hardiness,
            pH: modPlant.pH,
            soilContent: modPlant.soilContent,
            cycle: modPlant.cycle,
            hardinessZone: modPlant.hardinessZone,
            lastPotted: modPlant.lastPotted,
            lastWatered: modPlant.lastWatered,
            propogating: modPlant.propogating,
            links: modPlant.links,
            notes: modPlant.notes
        })
            .then(window.location.reload(true))
            .catch(err => console.log(err))
    }

    return (

        <>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formName" onChange={handleInputChange}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name="name" defaultValue={thisPlant.name} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBotName" >
                        <Form.Label>Botanical Name</Form.Label>
                        <Form.Control type="text" name="botanicalName" defaultValue={thisPlant.botanicalName} onChange={handleInputChange}/>
                    </Form.Group>
                </Form.Row>
                 <Form.Row>   
                    <Form.Group as={Col} controlId="formStatus" >
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" defaultValue={thisPlant.status}  onChange={handleInputChange}/>
                    </Form.Group>

                </Form.Row>
                 <Form.Row>
                    <Form.Group as={Col} controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control as="select" name="location" defaultValue={{value: thisPlant.location}} onChange={handleInputChange}>
                            <option>{thisPlant.location}</option>
                            <option>none</option>
                            <option>indoor</option>
                            <option>outdoor</option>
                            <option>indoor and outdoor</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formLocationSecondary" >
                        <Form.Label>Secondary Location</Form.Label>
                        <Form.Control type="text" name="locationSec" defaultValue={thisPlant.status} onChange={handleInputChange}/>
                    </Form.Group>

                </Form.Row>
                 <Form.Row>   
                    <Form.Group as={Col} controlId="formWater" >
                        <Form.Label>Water</Form.Label>
                        <Form.Control as="select" name="water" defaultValue={thisPlant.waterPref} onChange={handleInputChange}>
                            <option>{thisPlant.waterPref}</option>
                            <option>dry</option>
                            <option>moderate</option>
                            <option>moist</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formSunlight" >
                        <Form.Label>Sunlight</Form.Label>
                        <Form.Control as="select" name="sunlight" defaultValue={thisPlant.sunlight} onChange={handleInputChange}>
                            <option>{thisPlant.sunlight}</option>
                            <option>none</option>
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

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formPlantType" >
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" name="plantType" defaultValue={thisPlant.plantType} onChange={handleInputChange}>
                            <option>{thisPlant.plantType}</option>
                            <option>none</option>
                            <option>herb</option>
                            <option>houseplant</option>
                            <option>succulent</option>
                            <option>tbd</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formHumidity">
                        <Form.Label>Humidity</Form.Label>
                        <Form.Control as="select" name="humidity" defaultValue={thisPlant.humidity} onChange={handleInputChange}>
                            <option>{thisPlant.humidity}</option>
                            <option>low</option>
                            <option>moderate</option>
                            <option>high</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>
                 <Form.Row>   
                    <Form.Group as={Col} controlId="formTempLow">
                        <Form.Label>Low Temp</Form.Label>
                        <Form.Control type="text" name="tempHigh" defaultValue={thisPlant.tempHigh}  onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTempHigh" >
                        <Form.Label>High Temp</Form.Label>
                        <Form.Control type="text" name="tempLow" defaultValue={thisPlant.tempLow} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formHardyTo">
                        <Form.Label>Hardy To (Temp)</Form.Label>
                        <Form.Control type="text" name="hardiness" defaultValue={thisPlant.hardiness} onChange={handleInputChange}/>
                    </Form.Group>


                </Form.Row>
                 <Form.Row>
                    <Form.Group as={Col} controlId="formPH">
                        <Form.Label>pH</Form.Label>
                        <Form.Control type="text" name="ph" defaultValue={thisPlant.pH} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formsoilContent">
                        <Form.Label>Soil Content</Form.Label>
                        <Form.Control type="text" name="soilContent" defaultValue={thisPlant.soilContent} onChange={handleInputChange}/>
                    </Form.Group>

                </Form.Row>
                 <Form.Row>
                    <Form.Group as={Col} controlId="formCycle" >
                        <Form.Label>Cycle</Form.Label>
                        <Form.Control as="select" name="cycle" defaultValue={thisPlant.cycle} onChange={handleInputChange}>
                            <option>{thisPlant.cycle}</option>
                            <option>none</option>
                            <option>annual</option>
                            <option>biennial</option>
                            <option>perennial</option>
                        </Form.Control>
                            <Form.Text className="text-muted">
                                Annuals die yearly, biennial two year lifecycle, perennials regrow every spring.
                            </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formHardyZone" >
                        <Form.Label>Hardiness Zone</Form.Label>
                        <Form.Control type="text" name="hardinessZone" defaultValue={thisPlant.hardinessZone} onChange={handleInputChange}/>
                    </Form.Group>

                </Form.Row>
                 <Form.Row>    
                    <Form.Group as={Col} controlId="formLastPotted" >
                        <Form.Label>Last Potted</Form.Label>
                        <Form.Control type="text" name="lastPotted" defaultValue={thisPlant.lastPotted} onChange={handleInputChange}/>
                            <Form.Text className="text-muted">
                            YYYY-MM-DD.
                            </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formLastWatered" >
                        <Form.Label>Last Watered</Form.Label>
                        <Form.Control type="text" name="lastWatered" defaultValue={thisPlant.lastWatered} onChange={handleInputChange}/>
                            <Form.Text className="text-muted">
                            YYYY-MM-DD.
                            </Form.Text>
                    </Form.Group>

                </Form.Row>
                 <Form.Row>                    
                    <Form.Group as={Col} controlId="formPropogating" >
                        <Form.Label>Propogating?</Form.Label>
                        <Form.Control as="select" name="propogating" defaultValue={thisPlant.propogating} onChange={handleInputChange}>
                            <option>{thisPlant.propogating}</option>
                            <option>Y</option>
                            <option>N</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>
                 <Form.Row>    
                    <Form.Group as={Col} controlId="formLinks" >
                        <Form.Label>Links</Form.Label>
                        <Form.Control type="text" name="links" defaultValue={thisPlant.links}  onChange={handleInputChange}/>
                    </Form.Group>

                </Form.Row>
                <Form.Row>  
                    <Form.Group as={Col} controlId="formNotes" >
                        <Form.Label>Notes</Form.Label>
                        <Form.Control as="textarea" name="notes" rows="3" defaultValue={thisPlant.notes} onChange={handleInputChange}/>
                    </Form.Group>

                </Form.Row>
                <Form.Row>     
                    <Button as={Col} style={{backgroundColor: '#887FE5'}} type="submit" onClick={handleFormSubmit}>
                        Submit
                    </Button>

                </Form.Row> 
            </Form>

      
      </>
    
    );

}

export default ReviewPlant;