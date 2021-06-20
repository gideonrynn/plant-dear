import React, {useState, useEffect} from 'react';
import { Card, Button, Row, Col, ListGroup, ListGroupItem, Image, Container, Modal } from "react-bootstrap"
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";
import FormModal from "../../components/FormModal/FormModal"
import './style.css';

const PlantBlock = (data) => {
    const [onePlantId, setOnePlantId] = useState([])
    const [onePlant, setOnePlant] = useState([])
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
                            <div key={plants._id} className="plant-block">
                                <img src={`/img/${plants.imgURL}`} alt="plant dear" className="plant-img-block" onClick={() => getPlant(plants._id)} />
                                <p className="plant-title-img">{plants.name}</p>
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

export default PlantBlock;
