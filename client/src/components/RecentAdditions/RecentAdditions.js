import React from "react";
import MorePlants from "../../img/deskplants.jpeg";
import "./RecentAdditions.css";
import PlantCard from "../PlantCard/PlantCard.js"

/* Description: takes in plant context data passed in as prop from the home component to display by created date. Currently only plants with a status of active are represented here. On click of a plant, details for that individual plant pushed to another component, Plant Details.
* Further detail: I kept using non-state variables here because useContext seemed to futz with them getting updated when something changed. Don't really need to handle state here, just showing the most recent.
ToDos: 
    * Though the plant context update function is being passed in, I don't currently see any places where it is getting called, thus this can likely be removed in the home component 
    * One plant card is updated, use it here. Can map the individual cards, or keep that as a section. - done
    * Move handleClick to plant card - done
    * Keep in mind that spotlight was replicated from recent additions and share css. So if something is not working correctly, check out Spotlight and maybe PlantBlock until that gets cleaned up
    * consider creating see more plants card, since it will need to be set up with ability to navigate
*/
const RecentAdditions = (data) => {

    console.log("RecentAdditions component initialized");

    const plants = data.plants;
    
    const plantsByDate = plants.sort((a,b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
    })

    let recentOutdoor = plantsByDate.filter(outdoor => { 
        return outdoor.location === "outdoor"
    });

    let recentIndoor = plantsByDate.filter(indoor => { 
        return indoor.location === "indoor"
    });

    // specify how many plants to display
    const mostRecentIndoor = recentIndoor.slice(0, 15);
    const mostRecentOutdoor = recentOutdoor.slice(0, 15);

    const recentToRender = [
        {
            title: "Indoor Plants",
            plants: mostRecentIndoor
        },
        {
            title: "Outdoor Plants",
            plants: mostRecentOutdoor
        }
    ];
        
    return (
        <>
            {
                recentToRender.map((sections, index) => (
                    <div key={index} className="new-plant-section">
                    
                        <h3 className="recent-plant-header">{sections.title}</h3>

                        <div className="most-recent">
                           
                            {sections.plants.map(plants => (
                                
                                <PlantCard plant={plants}/>
                                
                            ))}
                            <div className="more-plants-card">
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
