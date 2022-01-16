import React, { useEffect, useState, useContext } from "react";
// import PlantCard from "../../components/PlantCard"
import PlantPlanningBlock from "../../components/PlantPlanningBlock/PlantPlanningBlock"
// import { WeatherContext } from "../../context/WeatherContext"
import PlantAPI from "../../utils/PlantsAPI"
import { PlantContext } from "../../context/PlantContext"
import { useHistory } from 'react-router-dom';
import "./Planning.css";

function Planning() {

    /*Description: This is a temporary page for collecting information on plants to be watered by duration*/
    /*Todo: Rename and fold component(s) into existing page
    *update to get the last duration date where we've verified that that duration is OK
    *refactor to look at checkRate or waterRate when logic created
    *update checkbox logic to handle removals from ids array when checkbox unselected */

    console.log("Planning page initialized, with context");

    const plant = useContext(PlantContext);
    const { activePlants, update, setUpdate } = useContext(PlantContext);
    console.log("Plant planning page context", activePlants);
    // const activePlants = plant.activePlants;
    // const inactivePlants = plant.inactivePlants;
    // const counter = plant.counter;
    // const inactcounter = plant.inactcounter;
    // // console.log("number of active plants returned", activePlants.length);

    // Setting our component's initial state
    const [updatedPlants, setUpdatedPlants] = useState([]);
    const [updatedInactivePlants, setUpdatedInactivePlants] = useState([]);

    // for handling search bar and input
    //* consider whether or not this is needed rather than input param passed into function *//
    const [searchTerm, setSearchTerm] = useState('');

    // Load all plants and store them within setPlants
    useEffect(() => {
        loadPlants();
        console.log("Sorting page rerendered");
    
    },[activePlants])

    function loadPlants() {
        // by default, show all plants returned from api
        setUpdatedPlants(activePlants);
    }

    // take text entered in the search and filter current list of plants
    function sortPlants(input) {

        if(input) {
            const filtered = activePlants.filter(actPlants => {
                return actPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
               })
    
            
            setSearchTerm(input);
            setUpdatedPlants(filtered);
        } else {

            loadPlants();
        }
        

    }

    return (
        <div className="plantsdiv">

            {/* <input 
                type="text"
                style={
                    {width:"350px",
                    background:"#F2F1F9", 
                    padding:"10px"}}
                placeholder={"search plants"}
                onChange={(event) => {
                    sortPlants(event.target.value)
                    }}
            /> */}

            <PlantPlanningBlock 
                plants={activePlants} 
                // inactive={inactivePlants} 
                // actcounter={counter}
                // inactcounter={inactcounter}
            />

        </div>
    )
}

export default Planning;