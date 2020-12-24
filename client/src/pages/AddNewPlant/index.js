import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"
import AddPlants from "../../components/AddPlants";

function AddNewPlant () {

    // Setting our component's initial state
    const [plants, setPlants] = useState([])

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
            <AddPlants/>
        </div>
    )
}

export default AddNewPlant;