import React, {useEffect, useState, useContext } from "react";
import "./style.css";
// import PlantCard from "../../components/PlantCard"
import PlantBlock from "../../components/PlantBlock/PlantBlock"
// import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"

function Sorting () {

    const plant = useContext(PlantContext);
    const activePlants = plant.activePlants;
    const inactivePlants = plant.inactivePlants;
    const counter = plant.counter;
    const inactcounter = plant.inactcounter;
    console.log("number of active plants returned", activePlants.length);

    // Setting our component's initial state
    const [updatedPlants, setUpdatedPlants] = useState([])
    const [updatedInactivePlants, setUpdatedInactivePlants] = useState([])

    // for handling search bar and input
    //* consider whether or not this is needed rather than input param passed into function *//
    const [searchTerm, setSearchTerm] = useState('');

    // Load all plants and store them within setPlants
    useEffect(() => {
        loadPlants();
        console.log("Plants page render triggered")
    
    })

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

    return (
        <div className="plantsdiv">
            {/* <h1> Plants By Location</h1> */}
{/* 
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
            /> */}

            {/* <select>
                <option value="a-z">A-Z</option>
                <option value="rooms">Rooms</option>
            </select> */}

            <br/>
            <br/>

            <PlantBlock 
                plants={updatedPlants} 
                inactive={updatedInactivePlants} 
                actcounter={counter}
                inactcounter={inactcounter}
            />

        </div>
    )
}

export default Sorting;