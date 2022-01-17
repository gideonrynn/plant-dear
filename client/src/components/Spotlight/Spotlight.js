import React from "react";
import { useHistory } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa"
import Plantling from "../../img/plantling.jpg"
import MorePlants from "../../img/deskplants.jpeg";
import "./Spotlight.css";

const Spotlight = (data) => {

    console.log("Spotlight component initialized");

    const plants = data.plants;
    const history = useHistory();

    function handleClick(event, name) {
        event.preventDefault();
        // console.log("clicked", event.target.id);
        // console.log(name);

        // let newTitle = "plant";
        // let setPathname = name.toLowerCase().replace(/\s/g, "-").replace(/['()]/g, "");
        
        // console.log(id);
        history.push({
            pathname: "plantdetails",
            // pathname: `${newTitle}/${setPathname}`,
            // pathname: `plant/${setPathname}`,
            state: { detail: event.target.id,
                    name: name }});
    }

    const plantsByDate = plants.sort((a,b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
    })

    let randomPlant = plants[Math.floor(Math.random()*plants.length)];
    console.log("Today's random plant", randomPlant);

    // outdoor plants
    let recentOutdoor = plantsByDate.filter(outdoor => { 
        return outdoor.location === "outdoor"
    });

    // indoor plants
    let recentIndoor = plantsByDate.filter(indoor => { 
        return indoor.location === "indoor"
    });

    // const uniquePlants = [...new Set(plantsByDate.map(data => data.name))]
    
    // console.log(uniquePlants);
    // const mostRecent = plantsByDate.slice(0, 20);
    const mostRecentIndoor = recentIndoor.slice(0, 1);
    const mostRecentOutdoor = recentOutdoor.slice(0, 15);
    // const nextRecentFive = plantsByDate.slice(1, 14);
    // console.log(mostRecent, nextRecentFive);
    let currentDate = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // const d = new Date();


    function waterDateParse(lastWatered) {

        let newWaterDate = ""

        if (lastWatered) {

            //date format from the db is yyyy-mm-dd so we will want to parse this

            // let lastWateredArray = lastWatered.split("-");
            let lastWateredYear = lastWatered.split("-")[0];
            let lastWateredMonth = lastWatered.split("-")[1] - 1;
            let lastWateredDay = lastWatered.split("-")[2];
            // console.log("split", lastWateredArray);
            // console.log(lastWateredYear, lastWateredMonth, lastWateredDay);
    
            newWaterDate = new Date(lastWateredYear, lastWateredMonth, lastWateredDay);
            // console.log("New water date formatted: ", newWaterDate);

        }

        return getDifference(newWaterDate);

    }


    function getDifference(waterDate) {

        let differenceConverted = "";

        if(currentDate && waterDate) {

            let dateDifference = currentDate.getTime() - waterDate.getTime();
            differenceConverted = Math.floor(dateDifference / oneDay);
            // console.log("differenceConverted is: ", differenceConverted);

        }

        return differenceConverted;

    }

    return (
        <>

            {randomPlant ? 
            <div className="new-plant-section">
                <h3 className="recent-plant-header">Spotlight</h3>

                <div className="most-recent-indoor">
                    <>                 
                        {mostRecentIndoor.map(plants => (
                            
                            <div key={plants._id+1} className="plant-card-wrapper">
                                <div key={plants._id+1} className="plant-card-spotlight-img">
                                    <img src={randomPlant.imgURL ? `/img/${randomPlant.imgURL}` : Plantling} alt="Most recent plant" className="plant-card-spotlight-img-direct"/>
                                    {/* <p className="name-img">{plants.name}</p> */}
                                </div>
                                {/* <div key={plants._id} id={plants._id} className="plant-card-2" onClick={(e) => handleClick(e, plants.name)}>
                                    <FaExternalLinkAlt className="fa-exl" id={plants._id}/>
                                    <p id={plants._id}>{plants.name}</p>
                                    <p id={plants._id}>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                    <p id={plants._id}>{plants.lastWatered && plants.lastWatered.length > 0 ? "last watered " + waterDateParse(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                                    <p id={plants._id}>{plants.waterPref} watering conditions</p>
                                    
                                </div> */}
                            </div>
                            
                        ))}
                        <div className="see-more">
                            <div className="plant-card-spotlight-text">
                                <p id={randomPlant._id}>{randomPlant.name}</p>
                                <p id={randomPlant._id}>{randomPlant.notes && randomPlant.notes.length > 0 ? randomPlant.notes.substr(0,300) + "..." : null}<span className="g-t"> <FaExternalLinkAlt className="fa-exl" id={randomPlant._id}/></span></p>
                                <p id={randomPlant._id}>Prefers {randomPlant.sunlight ? randomPlant.sunlight + " light" : ""} and {randomPlant.waterPref.length > 0 ?randomPlant.waterPref + " watering conditions": null} </p>
                                <p id={randomPlant._id}>{randomPlant.lastWatered && randomPlant.lastWatered.length > 0 ? "Last watered " + waterDateParse(randomPlant.lastWatered[randomPlant.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                                
                            </div>
                            <div className="plant-card-spotlight">
                                <div key={randomPlant._id} id={randomPlant._id} className="plant-card-spotlight" onClick={(e) => handleClick(e, randomPlant.name)}>
                                    <p>Go to plant details<span className="g-t"> <FaExternalLinkAlt className="fa-exl" id={randomPlant._id}/></span></p>
                                </div>
                            </div>

                        </div>

                    </>
                </div>

                
            </div>
            : <p>No random plant today</p>}
        </>
    )
};

export default Spotlight;
