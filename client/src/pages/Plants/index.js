import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";
import PlantCard from "../../components/PlantCard"
import { Table, Modal } from "react-bootstrap"

function Plants () {

    // Setting our component's initial state
    const [plants, setPlants] = useState([])
    const [counter, setCounter] = useState()
    const [inactcounter, setInactCounter] = useState()
    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])
    const [inactivePlants, setInactivePlants] = useState([])
    console.log(inactivePlants)

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadPlants()
    
    }, [])

    // Loads all plants and sets them to plants state
    function loadPlants() {

        PlantAPI.getAllPlants()
            .then(res => {
                // console.log(res.data)
                const plants = res.data;
                let actPlants = plants.filter(actPlants => { 
                    return actPlants.status !== "inactive"
                });
                let inPlants = plants.filter(inactPlants => { 
                    return inactPlants.status === "inactive"
                });
                setPlants(actPlants);
                setInactivePlants(inPlants);

                let actcounter = 0;
                let inactcounter = 0;
                for (let i = 0; i < plants.length; i++) {
                if (plants[i].status !== "inactive") actcounter++;
                if (plants[i].status === "inactive") inactcounter++;
                }
                setCounter(actcounter);
                setInactCounter(inactcounter);

                                
            })
            .catch(err => console.log(err));
    };

    // function openPlant(id) {
    //     console.log("You clicked on the " + id + " row.")
    //     // console.log(plants[0].id)
     
    // }

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
        <div className="plantsdiv">

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{onePlant.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewPlant onePlant={onePlant} id={onePlantId}/>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>

            <PlantCard 
                plants={plants} 
                inactive={inactivePlants} 
                actcounter={counter}
                inactcounter={inactcounter}/>
        </div>
    )
}

export default Plants;