// import React, { useState, useEffect} from 'react';
import React, { useState } from 'react';
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../ReviewPlant";
import FormModal from "../FormModal/FormModal"
import './PlantBlockAll.css';

const PlantBlockAll = (data) => {

    /*
    Status: currently not in use */

    console.log("PlantBlockAll component initialized");
    const [onePlantId, setOnePlantId] = useState([]);
    const [onePlant, setOnePlant] = useState([]);
    // handle modal
    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let currentDate = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    function getPlant(id) {

        // console.log("this was clicked")
        setOnePlantId(id)
                 PlantAPI.getOnePlant(id)
                     .then(res => {
                         console.log(onePlant);
                         setOnePlant(res.data);
                         
                         handleShow()
                             // .then(res => {
                             //     
                             // })
                             
                     // const plants = res.data;
                     // setPlants(plants);
                 })
                 .catch(err => console.log(err))
     }


    const plants = data.plants;

    // const plantsByDate = plants.sort((a,b) => {
    //     if (a.createdAt > b.createdAt) return -1;
    //     if (a.createdAt < b.createdAt) return 1;
    //     return 0;
    // })

    const plantsByName = plants.sort((a,b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
    // const uniquePlants = [...new Set(plantsByDate.map(data => data.name))]
    
    // console.log(uniquePlants);
    // const mostRecent = plantsByDate.slice(0, 12);
    // const nextRecentFive = plantsByDate.slice(1, 14);
    // console.log(mostRecent, nextRecentFive);

    return (
        <>
            <div className="plant-block-section">

                <div className="plant-block-plant">
                    {plantsByName.map(plants => (
                        <>
                        <div className="plant-block-wrapper">
                            <div key={plants._id} className="plant-block">
                                <img src={`/img/${plants.imgURL}`} alt="plant dear" className="plant-img-block" onClick={() => getPlant(plants._id)} />
                                <p className="plant-title-img">{plants.name}</p>
                            </div>
                            <div key={plants._id+1} className="plant-block-2">
                                <p>{plants.name}</p>
                                <p>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                <p>{plants.lastWatered ? "last watered " + Math.round((currentDate.getTime() - new Date(plants.lastWatered[plants.lastWatered.length - 1]).getTime())/ oneDay) + "Days Ago" : "not watered yet"}</p>
                                <p>{plants.waterPref} watering conditions</p>
                                {/* <button className="plant-card-2-btn">Open plant</button> */}
                            </div>
                        </div>
                        </>
                    ))}
                    
                </div>
                
            </div>



            <FormModal show={show}>
                {/* <Modal.Header style={{backgroundColor: '#887FE5'}} closeButton> */}
                    {/* <Modal.Title>{onePlant.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body> */}
                    <ReviewPlant onePlant={onePlant} id={onePlantId}/>
                {/* </Modal.Body>
                <Modal.Footer>
                            
                </Modal.Footer> */}
            </FormModal>   
        </>
    )
};

export default PlantBlockAll;
