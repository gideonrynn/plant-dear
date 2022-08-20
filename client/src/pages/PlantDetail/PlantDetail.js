import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
// import PlantCard from "../../components/PlantCard"
// import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"
// import PlantAPI from "../../utils/PlantsAPI"
import PlantDetails from "../../components/PlantDetails/PlantDetails.js";
import "./PlantDetail.css";

/* Description: display specific details of individual plant
* Used with: Direct from Plant Card
* ToDo: align sections by type of info. this will be particularly useful when app is set up to handle instances versus plant details

*/
function PlantDetail(hist) {

    console.log("PlantDetail parent page initialized, with context");

    const { state } = useLocation();
    const { activePlants, setUpdate } = useContext(PlantContext);
    // console.log("This is the state from the location object", state);
    const id = state.detail;
    
    const [thisPlant, setThisPlant] = useState();
    const [thisPlantId, setThisPlantId] = useState();

    useEffect(() => {
        console.log("Plant detail page rerendered");

        if(id && activePlants.length > 0) {
    
            setThisPlantId(id);
            getPlant(id);
        } 

     }, [id, activePlants]);

    function getPlant(id) {

        // getting data from use context instead of api
        let specificPlant = activePlants.find(item => item._id === id);
 
            setThisPlant(specificPlant);

        return specificPlant;
     }

    return (
        <div className="plants-only-div">
            {thisPlant && thisPlantId ?

                <PlantDetails
                    plant={thisPlant}
                    setUpdate={setUpdate}
                    id={thisPlantId}
                />

            : <p>"Loading..."</p>}

        </div>
    )
}

export default PlantDetail;