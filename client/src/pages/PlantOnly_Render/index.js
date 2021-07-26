import React, {useEffect, useState, useContext } from "react";
import "./style.css";
import PlantCard from "../../components/PlantCard"
// import { WeatherContext } from "../../context/WeatherContext"
import PlantAPI from "../../utils/PlantsAPI"
import { PlantContext } from "../../context/PlantContext"
import PlantDetails from "../../components/PlantDetails";
import { useLocation } from "react-router-dom";

function PlantOnly_Render(hist) {

    const location = useLocation();
    const plant = useContext(PlantContext);
    let onePlantOnly = plant.activePlants[133];
    console.log(location.state.detail);

    const [thisPlant, setThisPlant] = useState({});
    const [thisPlantId, setThisPlantId] = useState({});

    useEffect(() => {
        if(location.state.detail) {
            getPlant(location.state.detail);
        }
     }, [location]);

    function getPlant(id) {

        setThisPlantId(id)
            PlantAPI.getOnePlant(id)
                .then(res => {

                    setThisPlant(res.data)

            })
            .catch(err => console.log(err))
     }

    console.log(onePlantOnly);
    return (
        <div className="plants-only-div">

            <PlantDetails
                plant={thisPlant}
            />

        </div>
    )
}

export default PlantOnly_Render;