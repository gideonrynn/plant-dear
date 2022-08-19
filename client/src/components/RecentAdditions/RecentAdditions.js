import React from "react";
import MorePlants from "../../img/deskplants.jpeg";
import "./RecentAdditions.css";
import PlantCard from "../PlantCard/PlantCard.js"

/* Description: takes in plant context data passed in as prop from the home component to display by created date. Currently only plants with a status of active are represented here. On click of a plant, details for that individual plant pushed to another component, Plant Details.

ToDos: 
    * Though the plant context update function is being passed in, I don't currently see any places where it is getting called, thus this can likely be removed in the home component
    * consider creating see more plants card, since it will need to be set up with ability to navigate
*/
const RecentAdditions = (data) => {

    console.log("RecentAdditions component initialized");

    let dataSource = "RecentAdditions";
    let numberOfPlantsToDisplay = 15;

    let plants = data.plants;

    let plantsByDate = plants.sort((a,b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
    })

    const recentPlantsToDisplay = (location, number, sortOrder = plantsByDate) => {

        if (location === "indoor") {

            let recentIndoor = sortOrder.filter(indoor => { 
                return indoor.location === "indoor"
            });

            return recentIndoor.slice(0, number)

        } else if (location === "outdoor") {
            
            let recentOutdoor = sortOrder.filter(outdoor => { 
                return outdoor.location === "outdoor"
            });

            return recentOutdoor.slice(0, number);

        } else {
            return "No location entered for plants.";
        }

    }

    const recentToRender = [
        {
            title: "Indoor Plants",
            plants: recentPlantsToDisplay("indoor", numberOfPlantsToDisplay, plantsByDate)
        },
        {
            title: "Outdoor Plants",
            plants: recentPlantsToDisplay("outdoor", numberOfPlantsToDisplay, plantsByDate)
        }
    ];
        
    return (
        <>
            {
                recentToRender.map((sections, index) => (
                    <div className="home-section" key={index} >
                    
                        <h3 className="home-section-header">{sections.title}</h3>

                        <div className="plant-card-section">
                           
                            {sections.plants.map(plants => (
                                
                                <PlantCard 
                                    plant={plants}
                                    dataSource={dataSource}/>
                                
                            ))}
                            <div className="plant-card-container">
                                <div className="more-plant-card more-plant-card-text">
                                    <p>See all plant dears <span className="g-t">&gt;</span></p>
                                </div>
                                <div className="more-plant-card more-plant-card-img">
                                    <img src={MorePlants} alt="See all plants" className=""/>
                                </div>

                            </div>
                          
                        </div>
                    
                    </div>
                ))
                
            }
       
        </>
    )
};

export default RecentAdditions;
