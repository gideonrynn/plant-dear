import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import ReviewPlant from "../../components/ReviewPlant";
import PlantCard from "../../components/PlantCard"
import { Modal } from "react-bootstrap"

function Plants () {

    // Setting our component's initial state
    const [updatedPlants, setUpdatedPlants] = useState([])
    const [activePlants, setActivePlants] = useState([])
    const [updatedInactivePlants, setUpdatedInactivePlants] = useState([])
    const [inactivePlants, setInactivePlants] = useState([])
    const [counter, setCounter] = useState()
    const [inactcounter, setInactCounter] = useState()
    const [onePlant, setOnePlant] = useState([])
    const [onePlantId, setOnePlantId] = useState([])

    // for handling search bar and input
    const [searchTerm, setSearchTerm] = useState('');

    // handle modal
    const [show, setShow] = useState(false);

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadPlants()
    
    }, [])

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true)
    }

    // Loads all plants and sets them to plants state
    function loadPlants() {

        PlantAPI.getAllPlants()
            .then(res => {
                // console.log(res.data)
                const plants = res.data;

                // filter to show active versus inactive plants
                // set plant state to pass to Plant Card
 
                let actPlants = plants.filter(actPlants => { 
                    return actPlants.status !== "inactive"
                 });
    
                let inPlants = plants.filter(inactPlants => { 
                    return inactPlants.status == "inactive"
                   });

                // set state for active and inactive plants to be filtered based on search bar
                setActivePlants(actPlants);
                setInactivePlants(inPlants);

                // by default, show all plants returned from api
                setUpdatedPlants(actPlants);
                setUpdatedInactivePlants(inPlants);

   
                // set counters at top of Active and Inactive sections
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

    // take text entered in the search and filter current list of plants
    function sortPlants(input) {

        const filtered = activePlants.filter(actPlants => {
            return actPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
           })

           const filteredInactive = inactivePlants.filter(inactPlants => {
            return inactPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
           })
        
           setSearchTerm(input);
           setUpdatedPlants(filtered);
           setUpdatedInactivePlants(filteredInactive);

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

            <input 
                type="text"
                style={
                    {width:"350px",
                    background:"#F2F1F9", 
                    padding:"10px"}}
                placeholder={"search plants"}
                onChange={(event) => {
                    sortPlants(event.target.value)
                    }}
            />

            <br/>
            <br/>

            <PlantCard 
                plants={updatedPlants} 
                inactive={updatedInactivePlants} 
                actcounter={counter}
                inactcounter={inactcounter}
            />
            
        </div>
    )
}

export default Plants;