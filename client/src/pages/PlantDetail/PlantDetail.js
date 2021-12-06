import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
// import PlantCard from "../../components/PlantCard"
// import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
// import PlantAPI from "../../utils/PlantsAPI"
import PlantDetails from "../../components/PlantDetails/PlantDetails.js";
import "./PlantDetail.css";

function PlantDetail(hist) {

    console.log("PlantDetail page initialized, with context");

    const location = useLocation();
    const id = location.state.detail;
    const { activePlants, setUpdate } = useContext(PlantContext);
    // let onePlantOnly = plant.activePlants[133];
    console.log(activePlants);
    console.log(location);
    
    
    const [thisPlant, setThisPlant] = useState({});
    const [thisPlantId, setThisPlantId] = useState({id});
    const [plantContext, ] = useState(activePlants);
    // const [updateComponent, setUpdateComponent] = useState(false);
    // console.log(plantContext);

    // if (location.state.detail && thisPlant !== {} && thisPlant.lastWatered.length > 0) {
    //     setUpdateComponent(true);
    // }
    // console.log("This plant id!", thisPlantId, thisPlant);

    // if(thisPlantId && thisPlant.lastWatered.length) {
    //     console.log("This plant id from the if statement and the length!", thisPlantId, thisPlant.lastWatered.length);
    // }

    useEffect(() => {
        console.log("Plant detail page rerendered");
        if(location.state.detail) {
            // let id = location.state.detail;
            setThisPlantId(id);
            getPlant(id);
        }
        // console.log(plantContext);
     }, [location, activePlants]);

    function getPlant(id) {

        
            // PlantAPI.getOnePlant(id)
            //     .then(res => {

            //         setThisPlant(res.data)
            //         ("executing get plant from db");

            // })
            // .catch(err => console.log(err))

        // getting data from use context, as the update from the plantdetails will have triggered another db call in the plant context
        let specificPlant = plantContext.find(item => item._id === id);
            console.log(specificPlant);
            setThisPlant(specificPlant);
        // return specificPlant.lastWatered.length
     }

    // console.log(onePlantOnly);
    return (
        <div className="plants-only-div">

            <PlantDetails
                plant={thisPlant}
                setUpdate={setUpdate}
                id={thisPlantId}
            />

        </div>
    )
}

export default PlantDetail;