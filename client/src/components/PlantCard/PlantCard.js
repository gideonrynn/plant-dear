import React from "react";
import Plantling from "../../img/plantling.jpg"
import { useNavigate } from "react-router-dom";
import { getDifferenceInDays } from "../../utils/DateUtils"
import { FaExternalLinkAlt } from "react-icons/fa"
import "./PlantCard.css";

/* Description: individual plant that data is passed into. 
* Used with: Recent Additions and plant sorting page.
* ToDo: determine if class needs to be added for plant block structure, verify if wrapper takes care of it
*/

const PlantCard = (props) => {

    console.log("PlantCard component initialized");

    const onePlant = props.plant;

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
            <div key={onePlant._id} className="plant-card-wrapper">
                <div className="plant-card-img">
                    <img src={onePlant.imgURL ? `/img/${onePlant.imgURL}` : Plantling} alt="Most recent plant" className="recent-image"/>
                </div>
                <div id={onePlant._id} className="plant-card-img-overlay" onClick={(e) => handleClick(e, onePlant.name)}>
                    <FaExternalLinkAlt className="fa-exl" id={onePlant._id}/>
                    <p id={onePlant._id}>{onePlant.name}</p>
                    <p id={onePlant._id}>{onePlant.sunlight ? onePlant.sunlight + " light" : ""}</p>
                    <p id={onePlant._id}>{onePlant.lastWatered && onePlant.lastWatered.length > 0 ? "last watered " + getDifferenceInDays(onePlant.lastWatered[onePlant.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                    <p id={onePlant._id}>{onePlant.waterPref} watering conditions</p>
                </div>
            </div>

        </>
    )
};

export default PlantCard;
