import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import PlantAPI from "../../utils/PlantsAPI"
import AddNewPlant from "../../components/AddNewPlant/AddNewPlant.js";
import "./AddPlants.css";

function AddPlants () {

    /*Description: this will be used for showing different ways of adding new plants (individual or bulk)*/

    // Setting our component's initial state
    const [plants, setPlants] = useState([]);
    console.log("AddNewPlant page rendered, so let's see if this is actually being used");

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadPlants()
        // console.log(plants);
    
    }, [plants])

    // Loads all plants and sets them to plants state
    function loadPlants() {

        PlantAPI.getAllPlants()
            .then(res => {
                console.log(res.data)
                const plants = res.data;
                setPlants(plants);
            })
            .catch(err => console.log(err));
    };



    return (
        <div className="plantsdiv">
            <AddNewPlant/>
        </div>
    )
}

export default AddPlants;