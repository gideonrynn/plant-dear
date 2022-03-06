import React, { useEffect, useState, useContext } from "react";
import OutdoorPlants from "../../components/OutdoorPlants/OutdoorPlants.js"
import HardinessZone from "../../components/HardinessZone/HardinessZone"
import HardinessAPI from "../../utils/HardinessAPI"
import { PlantContext } from "../../context/PlantContext"
import { useHistory } from 'react-router-dom';
import "./Outdoor.css";

function Outdoor() {

    /*Description: This is a page meant to aggregate basic information for outdoor plants. 
        Management of this page for the time being will focus on viewing data on outdoor plants in different ways
        Not quite watering and modifying them yet*/
    /*Todo: 
    - add Hardiness Zone Component
    - add to context, this data doesn't really change, it get run against other data
     */

    console.log("Outdoor page initialized, with context");

    const plant = useContext(PlantContext);
    const { activePlants, inactivePlants, update, setUpdate } = useContext(PlantContext);
    console.log("Outdoor page context", activePlants);
    // const activePlants = plant.activePlants;
    // const inactivePlants = plant.inactivePlants;
    // const counter = plant.counter;
    // const inactcounter = plant.inactcounter;
    // // console.log("number of active plants returned", activePlants.length);

    // Setting our component's initial state
    const [updatedPlants, setUpdatedPlants] = useState([]);
    const [updatedInactivePlants, setUpdatedInactivePlants] = useState([]);
    const [hardiness, setHardiness] = useState([]);

    // for handling search bar and input
    //* consider whether or not this is needed rather than input param passed into function *//
    const [searchTerm, setSearchTerm] = useState('');

    // Load all plants and store them within setPlants
    useEffect(() => {
        loadPlants();
        console.log("Outdoor page rerendered");
    
    },[activePlants])

    function loadPlants() {
        // by default, show all plants returned from api
        setUpdatedPlants(activePlants);

        let outdoorPlants = activePlants.filter(plants => { 
            return (plants.hardiness !== "" && plants.location === "outdoor") || (plants.hardiness !== "" && plants.locationPreferred === "outdoor")
        });

        let outdoorInactivePlants = inactivePlants.filter(plants => { 
            return (plants.hardiness !== "" && plants.location === "outdoor") || (plants.hardiness !== "" && plants.locationPreferred === "outdoor")
        });

        setUpdatedPlants(outdoorPlants);
        setUpdatedInactivePlants(outdoorInactivePlants);
        console.log("outdoorplants", outdoorPlants);
    }

    function loadHardiness() {
        HardinessAPI.getHardinessZones()
            .then(res => {
                let allData = res.data;
                console.log(allData);
                setHardiness(allData);
            })
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

            <OutdoorPlants 
                plants={updatedPlants} 
                inactive={updatedInactivePlants}
                hardiness={hardiness}
                // inactive={inactivePlants} 
                // actcounter={counter}
                // inactcounter={inactcounter}
            />

            <HardinessZone/>

        </div>
    )
}

export default Outdoor;