import React from "react";
import Plantling from "../../img/plantling.jpg"
import { useNavigate } from "react-router-dom";
import { getDifferenceInDays } from "../../utils/DateUtils"
import { FaExternalLinkAlt } from "react-icons/fa"
import "./PlantCard.css";

/* Description: individual plant that data is passed into. 
* Used with: Recent Additions, Spotlight, Plant Sorting Page
* ToDo: determine if class needs to be added for plant block structure, verify if wrapper takes care of it
*/

const PlantCard = (props) => {

    console.log("PlantCard component initialized");

    const onePlant = props.plant;
    const dataSource = props.dataSource;

    const navigate = useNavigate();

    //uses path identified in App router section to push a specific plant's details to another component for additional review
    //this navigate should be in a util somewhere to make it more centrally available
    function handleClick(event, name) {
        event.preventDefault();

        
        //replace whitespace with dash and single ", ', (, or ) with an empty string
        let setPathname = name
                            .toLowerCase()
                            .replace(/\s/g, "-")
                            .replace(/["'`‘’()]/g, "")
        
        navigate(`/${setPathname}`,
            {state: 
                { detail: event.target.id,
                    name: name }
            });
    }

    return (
        <>
           { dataSource === "Spotlight" ?
                <>
                    <div className="plant-card-container">
                        <div className="plant-card-spotlight-img-wrapper">
                            <img className="plant-card-img" src={onePlant.imgURL ? `/img/${onePlant.imgURL}` : Plantling} alt="Most recent plant" />
                        </div>
                    </div>
                    <div className="plant-card-container">
                        <div className="plant-card-spotlight-text">
                            <p>{onePlant.name}</p>
                            <p>{onePlant.description && onePlant.description.length > 0 ? onePlant.description.substr(0,300) + "..." : null}<span className="g-t"> <FaExternalLinkAlt className="fa-exl" id={onePlant._id}/></span></p>
                            <p>Prefers {onePlant.sunlight ? onePlant.sunlight + " light" : ""} and {onePlant.waterPref.length > 0 ? onePlant.waterPref + " watering conditions": null} </p>
                            <p>{onePlant.lastWatered && onePlant.lastWatered.length > 0 ? "Last watered " + getDifferenceInDays(onePlant.lastWatered[onePlant.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                            
                        </div>
                        <div className="plant-card-spotlight-overlay">
                            <div id={onePlant._id} className="plant-card-spotlight-overlay" onClick={(e) => handleClick(e, onePlant.name)}>
                                <p id={onePlant._id} onClick={(e) => handleClick(e, onePlant.name)}>Go to plant details<span className="g-t" onClick={(e) => handleClick(e, onePlant.name)}> <FaExternalLinkAlt className="fa-exl" id={onePlant._id}/></span></p>
                            </div>
                        </div>
                    </div> 
                </> 
            :

                <div 
                    key={onePlant._id} 
                    className="plant-card-container"
                >
                    <div className="plant-card-img-wrapper">
                        <img 
                            className="plant-card-img"
                            src={onePlant.imgURL ? `/img/${onePlant.imgURL}` : Plantling} alt="Most recent plant"
                        />
                    </div>
                    <div 
                        className="plant-card-text-overlay" 
                        id={onePlant._id} 
                        onClick={(e) => handleClick(e, onePlant.name)}
                    >
                        <p id={onePlant._id}>{onePlant.name}</p>
                        <p id={onePlant._id}>{onePlant.sunlight ? onePlant.sunlight + " light" : ""}</p>
                        <p id={onePlant._id}>{onePlant.lastWatered && onePlant.lastWatered.length > 0 ? "last watered " + getDifferenceInDays(onePlant.lastWatered[onePlant.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                        <p id={onePlant._id}>{onePlant.waterPref} watering conditions</p>
                        <FaExternalLinkAlt className="fa-exl" id={onePlant._id}/>
                    </div>
                </div>

            }
        </>
    )
};

export default PlantCard;
