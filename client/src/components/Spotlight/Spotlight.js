import React from "react";
import PlantCard from "../PlantCard/PlantCard.js"
import "./Spotlight.css";


/* Description: display one random plant
Future State: will be able to choose whether to show one per day or one per week
ToDo: 
* create settings document which will pass to this component whether to show one per day or per week
* fix css, which is largely copied from Recent Additions. need to untangle it and keep it specific.
* update plant card to display what needs to be shown here. it has a lot of the same logic.
* utilize shared functions from date utils
* pass in whether I want indoor or outdoor plants or both. This is another good item for settings
* remove inactive plant status, only active is being passed in from the context on the home component - done
*/

const Spotlight = (data) => {

    console.log("Spotlight component initialized");

    const plants = data.plants;
    const dataSource = "Spotlight";
    const randomSpotlightPlant = plants[Math.floor(Math.random()*plants.length)];
    // console.log("randomSpotlightPlant", randomSpotlightPlant);


    //specify indoor plants for now, as it is winter. 
    //once all outdoor plant data has been updated in terms of active or inactive, will change how this filters out only inactive plants
    // const indoorSpotlightPlants = plants.filter(indoor => { 
    //     return indoor.location === "indoor" && indoor.status !== 'inactive'
    // });



    // const plantsByDate = plants.sort((a,b) => {
    //     if (a.createdAt > b.createdAt) return -1;
    //     if (a.createdAt < b.createdAt) return 1;
    //     return 0;
    // })

    // let randomPlant = indoorSpotlightPlants[Math.floor(Math.random()*indoorSpotlightPlants.length)];
    // console.log("Today's random plant", randomPlant);

    // // outdoor plants
    // let recentOutdoor = plantsByDate.filter(outdoor => { 
    //     return outdoor.location === "outdoor"
    // });

    // // indoor plants
    // let recentIndoor = plantsByDate.filter(indoor => { 
    //     return indoor.location === "indoor"
    // });


    return (
        <>

            {randomSpotlightPlant ? 

                <div className="new-plant-section">
                    <h3 className="recent-plant-header">Spotlight</h3>

                    <div className="most-recent">
                                
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
