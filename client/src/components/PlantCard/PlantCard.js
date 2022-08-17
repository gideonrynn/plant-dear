import React from "react";
import { useNavigate } from "react-router-dom";
import Plantling from "../../img/plantling.jpg"
import { getDifferenceInDays } from "../../utils/DateUtils"
import { FaExternalLinkAlt } from "react-icons/fa"
import "./PlantCard.css";

/* Description: individual plant that data is passed into. 
* Used with: Recent Additions. In the future, also Plant page.
* ToDo: determine if class needs to be added for plant block structure, verify if wrapper takes care of it
*/

const PlantCard = (data) => {

    console.log("PlantBlock component initialized");

    const recentPlant = data.plant;

    const navigate = useNavigate();

    //uses path identified in App router section to push a specific plant's details to another component for additional review
    function handleClick(event, name) {
        event.preventDefault();
        // console.log("clicked", event.target.id);
        // console.log(name);

        // let newTitle = "plant";
        // let setPathname = name.toLowerCase().replace(/\s/g, "-").replace(/['()]/g, "");
        
        // console.log(id);
        navigate("/plantdetails",
            // pathname: `${newTitle}/${setPathname}`,
            // pathname: `plant/${setPathname}`,
            {state: { detail: event.target.id,
                    name: name }});
    }

    return (
        <>
            <div key={recentPlant._id} className="plant-card-wrapper">
                <div className="plant-card-img">
                    <img src={recentPlant.imgURL ? `/img/${recentPlant.imgURL}` : Plantling} alt="Most recent plant" className="recent-image"/>
                </div>
                <div id={recentPlant._id} className="plant-card-img-overlay" onClick={(e) => handleClick(e, recentPlant.name)}>
                    <FaExternalLinkAlt className="fa-exl" id={recentPlant._id}/>
                    <p id={recentPlant._id}>{recentPlant.name}</p>
                    <p id={recentPlant._id}>{recentPlant.sunlight ? recentPlant.sunlight + " light" : ""}</p>
                    <p id={recentPlant._id}>{recentPlant.lastWatered && recentPlant.lastWatered.length > 0 ? "last watered " + getDifferenceInDays(recentPlant.lastWatered[recentPlant.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                    <p id={recentPlant._id}>{recentPlant.waterPref} watering conditions</p>
                </div>
            </div>

        </>
    )
};

export default PlantCard;
