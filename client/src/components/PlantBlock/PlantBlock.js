import React, {useState, useEffect} from 'react';
import { Card, Button, Row, Col, ListGroup, ListGroupItem, Image, Container, Modal } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";
import FormModal from "../../components/FormModal/FormModal"
import { useHistory } from 'react-router-dom';
import './style.css';

const PlantBlock = (data) => {
    const [onePlantId, setOnePlantId] = useState([])
    const [onePlant, setOnePlant] = useState([])

    const plants = data.plants;
    const history = useHistory();

    function handleClick(event, id) {
        console.log("clicked", event.target.id);
        
        console.log(id);
        history.push({
            pathname: "plantdetails",
            state: { detail: event.target.id }});
    }

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

    // handle modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getPlant(id) {

        console.log("this was clicked")
        setOnePlantId(id)
                 PlantAPI.getOnePlant(id)
                     .then(res => {
                         console.log(onePlant)
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
                                <img src={`/img/${plants.imgURL}`} alt="plant dear" className="plant-img-block"  />
                                <p className="plant-title-img">{plants.name}</p>
                            </div>
                            <div key={plants._id+1} id={plants._id} className="plant-block-2" onClick={handleClick}>
                                <p id={plants._id}>{plants.name}</p>
                                <p id={plants._id}>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                <p id={plants._id}>{plants.lastWatered.length > 0 ? "last watered on " + plants.lastWatered[plants.lastWatered.length - 1].split('T')[0] : "not watered yet"}</p>
                                <p id={plants._id}>{plants.waterPref} watering conditions</p>
                                {/* <button className="plant-card-2-btn">Open plant</button> */}
                            </div>
                        </div>
                        </>
                    ))}
                    
                </div>
                
            </div>



            {/* <FormModal show={show}> */}
                {/* <Modal.Header style={{backgroundColor: '#887FE5'}} closeButton> */}
                    {/* <Modal.Title>{onePlant.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body> */}
                    {/* <ReviewPlant onePlant={onePlant} id={onePlantId}/> */}
                {/* </Modal.Body>
                <Modal.Footer>
                            
                </Modal.Footer> */}
            {/* </FormModal>    */}
        </>
    )
};

export default PlantBlock;
