import React from "react";
import PlantCard from "../PlantCard/PlantCard.js"
// import "./Spotlight.css";


/* Description: display one random plant
Future State: will be able to choose whether to show one per day or one per week
ToDo: 
* create settings document which will pass to this component whether to show one per day or per week
* pass in whether I want indoor or outdoor plants or both. This is another good item for settings
*/

const Spotlight = (data) => {

    console.log("Spotlight component initialized");

    const plants = data.plants;
    const sectionHeader = "Spotlight";
    const dataSource = "Spotlight";
    const randomSpotlightPlant = plants[Math.floor(Math.random()*plants.length)];
    // console.log("Today's randomSpotlightPlant", randomSpotlightPlant);

    return (
        <>

            {randomSpotlightPlant ? 

                <div className="home-section">
                    <h3 className="home-section-header">{sectionHeader}</h3>

                    <div className="plant-card-section">
                                
                        <PlantCard 
                            plant={randomSpotlightPlant}
                            dataSource={dataSource}/>

                    </div>

                </div>
            : <p>Loading...</p>}
        </>
    )
};

export default Spotlight;
