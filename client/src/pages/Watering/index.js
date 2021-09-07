import React, {useEffect, useState, useContext } from "react";
import "./style.css";
import ByLocation from "../../components/ByLocation"
// import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"

function Watering () {

    const plant = useContext(PlantContext);
    const activePlants = plant.activePlants;
    const inactivePlants = plant.inactivePlants;
    const counter = plant.counter;
    const inactcounter = plant.inactcounter;
    console.log("number of active plants returned", activePlants.length);

    // Setting our component's initial state
    const [updatedPlants, setUpdatedPlants] = useState([]);
    const [updatedInactivePlants, setUpdatedInactivePlants] = useState([]);
    const [locationSecondary, setLocationSecondary] = useState();

    // for handling search bar and input
    //* consider whether or not this is needed rather than input param passed into function *//
    const [searchTerm, setSearchTerm] = useState('');

    // Load all plants and store them within setPlants
    useEffect(() => {
        loadPlants();
        console.log("Watering page render triggered")
    
    }, [])

    function loadPlants() {
        // by default, show all plants returned from api
        setUpdatedPlants(activePlants);
        setUpdatedInactivePlants(inactivePlants);
    }

    // take text entered in the search and filter current list of plants
    function sortPlants(input) {

        if(input) {
            const filtered = activePlants.filter(actPlants => {
                return actPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
               })
    
            const filteredInactive = inactivePlants.filter(inactPlants => {
                return inactPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
               })
            
            setSearchTerm(input);
            setUpdatedPlants(filtered);
            setUpdatedInactivePlants(filteredInactive);
        } else {

            loadPlants();
        }
        

    }

    console.log(locationSecondary);

    return (
        <div className="plantsdiv">
            <p className="plant-details-label">Select Location</p>
            <select
                name="locationSec"
                className="plant-details"
                onChange={(e) => setLocationSecondary(e.target.value)}
                >
                    <option>none</option>
                    <option>bathroom</option>
                    <option>bedroom</option>
                    <option>dining room</option>
                    <option>dining room east case</option>
                    <option>dining room south case</option>
                    <option>dining room windowsill</option>
                    <option>terrarium large</option>
                    <option>kitchen</option>
                    <option>kitchen windowsill</option>
                    <option>living room</option>
                    <option>living room aquarium shelf</option>
                    <option>living room east case</option>
                    <option>living room east case short</option>
                    <option>living room north case</option>
                    <option>living room west case</option>
                    <option>living room windowsill</option>
                </select>

            <ByLocation
                locationSecondary={locationSecondary}
                plants={updatedPlants} 
                inactive={updatedInactivePlants} 
                actcounter={counter}
                inactcounter={inactcounter}
            />

        </div>
    )
}

export default Watering;