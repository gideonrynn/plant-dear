import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import PlantCard from "../../components/PlantCard"
// import { WeatherContext } from "../../context/WeatherContext"
// import { PlantContext } from "../../context/PlantContext"
import PlantAPI from "../../utils/PlantsAPI"
import PlantDetails from "../../components/PlantDetails/PlantDetails.js";
import "./PlantDetail.css";

function PlantDetail(hist) {

    console.log("PlantDetail page initialized, with context");

    const location = useLocation();

    // const plant = useContext(PlantContext);
    // let onePlantOnly = plant.activePlants[133];
    console.log(location);

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