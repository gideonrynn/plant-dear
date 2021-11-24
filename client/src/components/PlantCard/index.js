import React, {useState, useEffect} from 'react'
import { Modal } from "react-bootstrap"
// import { FaPlus } from "react-icons/fa"
// import Plants from '../../pages/Plants'
import Plantling from '../../img/plantling.jpg'
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";
import './style.css'

function PlantCard(p) {

    console.log("PlantCard component initialized");
    const [thisPlant, setThisPlant] = useState([]);
    const [thisPlantInact, setThisPlantInact] = useState([]);
    const [onePlant, setOnePlant] = useState([]);
    const [onePlantId, setOnePlantId] = useState([]);
    
    // handle modal
    const [show, setShow] = useState(false);

    useEffect(() => {
        // right now, none of the sorted 
        loadSortedPlants()
        console.log("PlantCard rerendered");
        
    });


    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true)
    }

    function loadSortedPlants() {
        // console.log(p)
        // sort plants in alphabetical order
        let activeSorted = p.plants.sort((a,b) => a.name > b.name ? 1: -1);
        setThisPlant(activeSorted);
        // console.log(p.plants);

        let inactiveSorted = p.inactive.sort((a,b) => a.name > b.name ? 1: -1);
        setThisPlantInact(inactiveSorted);
        // console.log(p.inactive)

        // console.log(p)

    }


    function updateWaterDate(id, days) {
        let date = new Date()
        date.setDate(date.getDate() - days);
        // console.log(date)
        // console.log(id)
        PlantAPI.updatePlantWaterDate(
            id,
            {
                lastWatered: date,
            })
            // .then(window.location.reload(true))
            // .catch(err => console.log(err))
    }

    function deletePlant(id) {
    
        // console.log(id)
        PlantAPI.deletePlant(id)

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
        <>
            
            <h3>All growing plant dears ({p.actcounter})</h3>
            <hr/>

            {thisPlant.map(plant => (
                <div key={plant._id} >
                    <div className="row plant-details-sec">
                        <div className="column plant-img-left">
                            <img src={plant.imgURL ? `/img/${plant.imgURL}` : Plantling} 
                                    alt="plant"
                                    height="150px" 
                                    width="150px"
                                    className="plant-imgurl"
                                />
                        </div>
                        <div className="column plant-card-x">
                            <p className="plant-card-header">{plant.name} (<i>{plant.botanicalName}</i>)</p>
                            
                            <div className="row">
                                <div className="column plant-details-left">
                                    <ul className="plant-card-details-group">
                                        <li className="plant-card-details"><b>Plant Type</b>: {plant.plantType}</li>
                                        <li className="plant-card-details"><b>Plant ID</b>: {plant._id}</li>
                                        <li className="plant-card-details"><b>Watering preference</b>: {plant.waterPref}</li>
                                        <li className="plant-card-details"><b>Last Watered</b>: {plant.lastWatered.length > 0 ? plant.lastWatered[plant.lastWatered.length - 1].split('T')[0] : plant.lastWatered}</li>
                                        <li className="plant-card-details"><b>Sunlight</b>: {plant.sunlight.map(option => (<p key={option._id}>{option}</p>))}</li>
                                        <li className="plant-card-details"><b>Humidity</b>: {plant.humidity || "none listed"} </li>
                                        <li className="plant-card-details"><b>Trouble?</b> {plant.trouble || "N"}</li>
                                    </ul>
                                </div>
                                <div className="column plant-details-right">
                                    <ul className="plant-card-details-group">
                                        <li className="plant-card-details"><b>Location</b>: {plant.location}</li>
                                        <li className="plant-card-details"><b>Location secondary</b>: {plant.locationSec}</li>
                                        <li className="plant-card-details"><b>Location preferred</b>: {plant.locationPreferred || "No preference"}</li>
                                        <li className="plant-card-details"><b>Hardiness Min</b> {plant.hardinessZoneMin || "none listed"}</li>
                                        <li className="plant-card-details"><b>Hardiness Max</b> {plant.hardinessZoneMax || "none listed"}</li>
                                        <li className="plant-card-details"><b>Cycle</b> {plant.cycle || "none listed"}</li>
                                        <li className="plant-card-details"><b>Created At</b>: {plant.createdAt ? plant.createdAt.split('T')[0] : plant.createdAt}</li>
                                        <li className="plant-card-details"><b>Updated At</b>: {plant.updatedAt ? plant.updatedAt.split('T')[0] : plant.updatedAt}</li>
                                        
                                    </ul>
                                </div> 
                            </div>
                            <div className="row bottom-section">
                                <div className="column plant-details-bottom">
                                    <ul className="plant-card-details-group">
                                        <li className="plant-card-details"><b>Notes</b>: {plant.notes}</li>
                                        <li className="plant-card-details"><b>Links</b>: {plant.links.map(option => (<p><a href={option} target="_blank" rel="noopener noreferrer">{option}</a></p>))}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row button-section">
                                <div className="column">
                                    <ul>
                                        {/* <li className="plant-card-details"> */}
                                        <p className="button-section-header"><b>Watered</b></p>
                                        <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(plant._id, 0)} className="water-button">Today</button>
                                        <button style={{backgroundColor: '#91AFF5'}} onClick={() => updateWaterDate(plant._id, 1)} className="water-button">Yesterday</button>
                                        <button style={{backgroundColor: '#7A9AE3'}} onClick={() => updateWaterDate(plant._id, 2)} className="water-button">Two Days</button>
                                        <button style={{backgroundColor: '#799EE2'}} onClick={() => updateWaterDate(plant._id, 3)} className="water-button">Three Days</button>
                                        <button style={{backgroundColor: '#3D64BD'}} onClick={() => updateWaterDate(plant._id, 7)} className="water-button">One Week</button>
                                    {/* </li> */}
                                    </ul>
                                </div>
                            
                            </div>

                            <div className="row button-section">
                                
                                    <div className="column">
                                        <ul>
                                            <button style={{backgroundColor: '#3A6996'}} onClick={() => getPlant(plant._id)} className="water-button">Modify</button>
                                        </ul>
                                    </div>
                                    {/* <hr></hr> */}
                                    <div className="column">
                                        <ul>
                                            <button style={{backgroundColor: '#990000'}} onClick={() => deletePlant(plant._id)} className="water-button">Delete</button>
                                        </ul>
                                    </div>
                               
                            </div>
                            
                        </div>

                    </div>
                        
                </div>
                
            ))}
            {/* <button className="always">Jump to top</button> */}

            <h3>Inactive plant dears ({p.inactcounter})</h3>
            <hr/>

            {thisPlantInact.map(plantinact => (
                <div key={plantinact._id} >
                <div className="row plant-details-sec">
                    <div className="column plant-img-left">
                        <img src={plantinact.imgURL ? `/img/${plantinact.imgURL}` : Plantling} 
                                alt="plant"
                                height="150px" 
                                width="150px"
                                className="plant-imgurl"
                            />
                    </div>
                    <div className="column plant-card-x">
                        <p className="plant-card-header">{plantinact.name} (<i>{plantinact.botanicalName}</i>)</p>
                        
                        <div className="row">
                            <div className="column plant-details-left">
                                <ul className="plant-card-details-group">
                                    <li className="plant-card-details"><b>Plant Type</b>: {plantinact.plantType}</li>
                                    <li className="plant-card-details"><b>Plant ID</b>: {plantinact._id}</li>
                                    <li className="plant-card-details"><b>Watering preference</b>: {plantinact.waterPref}</li>
                                    <li className="plant-card-details"><b>Last Watered</b>: {plantinact.lastWatered.lastIndexOf() > 0 ? plantinact.lastWatered.split('T')[plantinact.lastWatered.lastIndexOf()] : plantinact.lastWatered}</li>
                                    <li className="plant-card-details"><b>Sunlight</b>: {plantinact.sunlight.map(option => (<p key={option._id}>{option}</p>))}</li>
                                    <li className="plant-card-details"><b>Humidity</b>: {plantinact.humidity || "none listed"} </li>
                                    <li className="plant-card-details"><b>Trouble?</b> {plantinact.trouble || "N"}</li>
                                </ul>
                            </div>
                            <div className="column plant-details-right">
                                <ul className="plant-card-details-group">
                                    <li className="plant-card-details"><b>Location</b>: {plantinact.location}</li>
                                    <li className="plant-card-details"><b>Location secondary</b>: {plantinact.locationSec}</li>
                                    <li className="plant-card-details"><b>Location preferred</b>: {plantinact.locationPreferred || "No preference"}</li>
                                    <li className="plant-card-details"><b>Hardiness Min</b> {plantinact.hardinessZoneMin || "none listed"}</li>
                                    <li className="plant-card-details"><b>Hardiness Max</b> {plantinact.hardinessZoneMax || "none listed"}</li>
                                    <li className="plant-card-details"><b>Cycle</b> {plantinact.cycle || "none listed"}</li>
                                    <li className="plant-card-details"><b>Created At</b>: {plantinact.createdAt ? plantinact.createdAt.split('T')[0] : plantinact.createdAt}</li>
                                    <li className="plant-card-details"><b>Updated At</b>: {plantinact.updatedAt ? plantinact.updatedAt.split('T')[0] : plantinact.updatedAt}</li>
                                    
                                </ul>
                            </div> 
                        </div>
                        <div className="row bottom-section">
                            <div className="column plant-details-bottom">
                                <ul className="plant-card-details-group">
                                    <li className="plant-card-details"><b>Notes</b>: {plantinact.notes}</li>
                                    <li className="plant-card-details"><b>Links</b>: {plantinact.links.map(option => (<p><a href={option} target="_blank" rel="noopener noreferrer">{option}</a></p>))}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row button-section">
                            <div className="column">
                                <ul>
                                    {/* <li className="plant-card-details"> */}
                                    <p className="button-section-header"><b>Watered</b></p>
                                    <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(plantinact._id, 0)} className="water-button">Today</button>
                                    <button style={{backgroundColor: '#91AFF5'}} onClick={() => updateWaterDate(plantinact._id, 1)} className="water-button">Yesterday</button>
                                    <button style={{backgroundColor: '#7A9AE3'}} onClick={() => updateWaterDate(plantinact._id, 2)} className="water-button">Two Days</button>
                                    <button style={{backgroundColor: '#799EE2'}} onClick={() => updateWaterDate(plantinact._id, 3)} className="water-button">Three Days</button>
                                    <button style={{backgroundColor: '#3D64BD'}} onClick={() => updateWaterDate(plantinact._id, 7)} className="water-button">One Week</button>
                                {/* </li> */}
                                </ul>
                            </div>
                        
                        </div>

                        <div className="row button-section">
                            
                                <div className="column">
                                    <ul>
                                        <button style={{backgroundColor: '#3A6996'}} onClick={() => getPlant(plantinact._id)} className="water-button">Modify</button>
                                    </ul>
                                </div>
                                {/* <hr></hr> */}
                                <div className="column">
                                    <ul>
                                        <button style={{backgroundColor: '#990000'}} onClick={() => deletePlant(plantinact._id)} className="water-button">Delete</button>
                                    </ul>
                                </div>
                           
                        </div>
                        
                    </div>

                </div>
                    
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
            
        </>
    )
} 

export default PlantCard;