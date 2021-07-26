import React, {useEffect, useState, useContext } from "react";
import "./style.css";
import PlantCard from "../../components/PlantCard"
// import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
import PlantDetails from "../../components/PlantDetails";

function PlantOnly_Render () {

    const plant = useContext(PlantContext);
    let onePlantOnly = plant.activePlants[133];

    console.log(onePlantOnly);
    return (
        <div className="plants-only-div">

            <PlantDetails
                plant={onePlantOnly}
            />

        </div>
    )
}

export default PlantOnly_Render;