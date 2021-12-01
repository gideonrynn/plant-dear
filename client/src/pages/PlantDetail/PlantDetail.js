import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import PlantCard from "../../components/PlantCard"
// import { WeatherContext } from "../../context/WeatherContext"
import PlantAPI from "../../utils/PlantsAPI"
// import { PlantContext } from "../../context/PlantContext"
import PlantDetails from "../../components/PlantDetails";

import "./PlantDetail.css";

function PlantDetail(hist) {

    console.log("PlantDetail page initialized");

    const location = useLocation();
    // const plant = useContext(PlantContext);
    // let onePlantOnly = plant.activePlants[133];
    // console.log(location.state.detail);

    const [thisPlant, setThisPlant] = useState({});
    const [, setThisPlantId] = useState({});

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

    // console.log(onePlantOnly);
    return (
        <div className="plants-only-div">

            <PlantDetails
                plant={thisPlant}
            />

        </div>
    )
}

export default PlantDetail;