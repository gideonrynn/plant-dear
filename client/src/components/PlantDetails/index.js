import React, {useState, useEffect} from 'react'
import { FaPlus } from "react-icons/fa"
// import Plants from '../../pages/Plants'
import Plantling from '../../img/plantling.jpg'
import PlantAPI from "../../utils/PlantsAPI"
import HardinessAPI from "../../utils/HardinessAPI"
import './style.css'

function PlantDetails(p) {
    //in this component, we are only rendering one dedicated plant
    //passing in one plant with it's details, kind of like in review plant

    const [thisPlant, setThisPlant] = useState([])
    // const [onePlant, setOnePlant] = useState([])
    // const [onePlantId, setOnePlantId] = useState([])
    
    // handle modal probably will not need a modal
    // const [show, setShow] = useState(false);

    console.log(p.plant);

    useEffect(() => {
        
        if(p.plant) {
            setThisPlant(p.plant);
        }
        console.log("Plant details render triggered")
        
    }, [p])

    // probably will not need modal
    // function handleClose() {
    //     setShow(false);
    // }

    // function handleShow() {
    //     setShow(true)
    // }

    //function loadThisPlant() {
        //console.log(p)
        // sort plants in alphabetical order
        //let activeSorted = p.plants.sort((a,b) => a.name > b.name ? 1: -1);
        //setThisPlant(activeSorted);
        // console.log(p.plants);

        //let inactiveSorted = p.inactive.sort((a,b) => a.name > b.name ? 1: -1);
        //setThisPlantInact(inactiveSorted);
        // console.log(p.inactive)

        // console.log(p)

    //}

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


    return (
        <>
 
            {/* <h3>All growing plant dears ({p.actcounter})</h3> */}
            {/* <hr/> */}
            {!thisPlant ? null :

                <div key={thisPlant._id} >
                    <div className="row plant-details-sec">

                        <div className="column plant-details-card">
                            <div className="row">
                                <div className="plant-details-header">
                                    <p className="plant-details-name">{thisPlant.name} </p>
                                    <p className="plant-details-botanical"><i>{thisPlant.botanicalName}</i></p>
                                    
                                </div>
                                <img src={thisPlant.imgURL ? `/img/${thisPlant.imgURL}` : Plantling} 
                                        alt="plant"
                                        height="150px" 
                                        width="150px"
                                        className="plant-details-imgurl"
                                    />

                            </div>
                            
                            
                            <div className="row">
                            
                                <ul className="plant-card-details-group">
                                <li className="plant-card-details description-plant"><b>Description</b>: {thisPlant.description}</li>
                                    <li className="plant-card-details"><b>Links</b>: {thisPlant.links ? thisPlant.links.map(option => (<p><a href={option} target="_blank" rel="noopener noreferrer">{option}</a></p>)) : null}</li>
                                </ul>
                                
                            </div>
                            <div className="row">
                                <div className="column plant-details-left">
                                    <ul className="plant-card-details-group">
                                        <li className="plant-card-details"><b>Plant Type</b>: {thisPlant.plantType}</li>
                                        <li className="plant-card-details"><b>Plant ID</b>: {thisPlant._id}</li>
                                        <li className="plant-card-details"><b>Watering preference</b>: {thisPlant.waterPref}</li>
                                        <li className="plant-card-details"><b>Last Watered</b>: {thisPlant.lastWatered ? thisPlant.lastWatered : null}</li>
                                        <li className="plant-card-details"><b>Sunlight</b>: {thisPlant.sunlight ? thisPlant.sunlight.map(option => (<p key={option._id}>{option}</p>)) : null}</li>
                                        <li className="plant-card-details"><b>Humidity</b>: {thisPlant.humidity || "none listed"} </li>
                                        <li className="plant-card-details"><b>Trouble?</b> {thisPlant.trouble || "N"}</li>
                                    </ul>
                                </div>
                                <div className="column plant-details-right">
                                    <ul className="plant-card-details-group">
                                        <li className="plant-card-details"><b>Location</b>: {thisPlant.location}</li>
                                        <li className="plant-card-details"><b>Location secondary</b>: {thisPlant.locationSec}</li>
                                        <li className="plant-card-details"><b>Location preferred</b>: {thisPlant.locationPreferred || "No preference"}</li>
                                        <li className="plant-card-details"><b>Hardiness Min</b> {thisPlant.hardinessZoneMin || "none listed"}</li>
                                        <li className="plant-card-details"><b>Hardiness Max</b> {thisPlant.hardinessZoneMax || "none listed"}</li>
                                        <li className="plant-card-details"><b>Cycle</b> {thisPlant.cycle || "none listed"}</li>
                                        <li className="plant-card-details"><b>Created At</b>: {thisPlant.createdAt ? thisPlant.createdAt.split('T')[0] : thisPlant.createdAt}</li>
                                        <li className="plant-card-details"><b>Updated At</b>: {thisPlant.updatedAt ? thisPlant.updatedAt.split('T')[0] : thisPlant.updatedAt}</li>
                                        
                                    </ul>
                                </div> 
                            </div>
                            <div className="row">
                                <div className="column plant-details-bottom">
                                    <ul className="plant-card-details-group">
                                        <li className="plant-card-details"><b>Notes</b>: {thisPlant.notes}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row button-section">
                                <div className="column">
                                    <ul>
                                        {/* <li className="plant-card-details"> */}
                                        <p className="button-section-header"><b>Watered</b></p>
                                        <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(thisPlant._id, 0)} className="water-button">Today</button>
                                        <button style={{backgroundColor: '#91AFF5'}} onClick={() => updateWaterDate(thisPlant._id, 1)} className="water-button">Yesterday</button>
                                        <button style={{backgroundColor: '#7A9AE3'}} onClick={() => updateWaterDate(thisPlant._id, 2)} className="water-button">Two Days</button>
                                        <button style={{backgroundColor: '#799EE2'}} onClick={() => updateWaterDate(thisPlant._id, 3)} className="water-button">Three Days</button>
                                        <button style={{backgroundColor: '#3D64BD'}} onClick={() => updateWaterDate(thisPlant._id, 7)} className="water-button">One Week</button>
                                    {/* </li> */}
                                    </ul>
                                </div>
                            
                            </div>

                            <div className="row button-section">
                                
                                    <div className="column">
                                        <ul>
                                            <button style={{backgroundColor: '#3A6996'}} 
                                            className="water-button">Modify</button>
                                        </ul>
                                    </div>
                                    {/* <hr></hr> */}
                                    <div className="column">
                                        <ul>
                                            <button style={{backgroundColor: '#990000'}} onClick={() => deletePlant(thisPlant._id)} className="water-button">Delete</button>
                                        </ul>
                                    </div>
                               
                            </div>
                            
                        </div>

                    </div>
                        
                </div>
                

            }
        </>
    )

                    
} 

export default PlantDetails;