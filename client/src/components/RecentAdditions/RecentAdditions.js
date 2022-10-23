import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa"
import Plantling from "../../img/plantling.jpg"
// import MorePlants from "../../img/deskplants.jpeg";
import "./RecentAdditions.css";

const RecentAdditions = (data) => {

    console.log("RecentAdditions component initialized");

    const plants = data.plants;
    const navigate = useNavigate();

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
            { state: { detail: event.target.id,
                    name: name }});
    }

    const plantsByDate = plants.sort((a,b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
    })

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
    const mostRecentIndoor = recentIndoor.slice(0, 15);
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
        {/* <h1>Newest plant dears</h1> */}
            {/* commenting out to get a feel for having indoor and outdoor separated. during the winter this won't matter as much */}
            {/* <div className="new-plant-section"> */}
                {/* <h3 className="recent-plant-header">Recent additions</h3> */}

                {/* <div className="most-recent-plants">
                    <>
                        {mostRecent.map(plants => (
                            
                            <div className="plant-card-wrapper">
                                <div key={plants._id} className="plant-card">
                                    <img src={`/img/${plants.imgURL}`} alt="Most recent plant" className="recent-image"/>
                                </div>
                                <div key={plants._id+1} className="plant-card-2">
                                    <p>{plants.name}</p>
                                    <p>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                    <p>{plants.lastWatered.length > 0 ? "last watered on " + plants.lastWatered[plants.lastWatered.length - 1].split('T')[0] : "not watered yet"}</p>
                                    <p>{plants.waterPref} watering conditions</p> */}
                                    {/* <button className="plant-card-2-btn">Open plant</button> */}
                                {/* </div>
                            </div>
                            
                        ))}
                        <div className="see-more">
                            <div className="plant-card-see-more">
                                <p>See all new plant dears <span className="g-t">&gt;</span></p>
                            </div>
                            <div className="plant-card-see-more-2">
                                <img src={MorePlants} alt="See all plants" className=""/>
                            </div>

                        </div>

                    </>
                </div> */}

                
                {/* <div className="next-recent-plants">
                    {nextRecentFive.map(plants => (
                        <div key={plants._id}>
                            <span>{plants.name}</span> { } */}
                            {/* <span>({plants.hardiness}&#176;)</span> { } */}
                        {/* </div>
                    ))}
                    
                </div> */}
{/*                 
            </div> */}

            <div className="new-plant-section">
                <h3 className="recent-plant-header">Indoor Plants</h3>

                <div className="most-recent-indoor">
                    <>
                    
                        {mostRecentIndoor.map(plants => (
                            
                            <div key={plants._id+1} className="plant-card-wrapper">
                                <div key={plants._id+1} className="plant-card">
                                    <img src={plants.imgURL ? `/img/${plants.imgURL}` : Plantling} alt="Most recent plant" className="recent-image"/>
                                    {/* <p className="name-img">{plants.name}</p> */}
                                </div>
                                <div key={plants._id} id={plants._id} className="plant-card-2" onClick={(e) => handleClick(e, plants.name)}>
                                    <FaExternalLinkAlt className="fa-exl" id={plants._id}/>
                                    <p id={plants._id}>{plants.name}</p>
                                    <p id={plants._id}>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                    <p id={plants._id}>{plants.lastWatered && plants.lastWatered.length > 0 ? "last watered " + waterDateParse(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                                    <p id={plants._id}>{plants.waterPref} watering conditions</p>
                                    {/* <button className="plant-card-2-btn">Open plant</button> */}
                                </div>
                            </div>
                            
                        ))}
                        <div className="see-more">
                            <div className="plant-card-see-more">
                                <p>See all plant dears <span className="g-t">&gt;</span></p>
                            </div>
                            <div className="plant-card-see-more-2">
                                {/* <img src={MorePlants} alt="See all plants" className=""/> */}
                            </div>

                        </div>

                    </>
                </div>

                
            </div>

            <div className="new-plant-section">
                <h3 className="recent-plant-header">Outdoor Plants</h3>

                <div className="most-recent-outdoor">
                    <>
                        {mostRecentOutdoor.map(plants => (
                            
                            <div key={plants._id} className="plant-card-wrapper">
                                <div key={plants._id} className="plant-card">
                                    <img src={plants.imgURL ? `/img/${plants.imgURL}` : Plantling} alt="Most recent plant" className="recent-image"/>
                                    {/* <p className="name-img">{plants.name}</p> */}
                                </div>
                                <div key={plants._id+1} id={plants._id} className="plant-card-2" onClick={(e) => handleClick(e, plants.name)}>
                                    <FaExternalLinkAlt className="fa-exl" id={plants._id}/>
                                    <p id={plants._id}>{plants.name}</p>
                                    <p id={plants._id}>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                    <p id={plants._id}>{plants.lastWatered && plants.lastWatered.length > 0 ? "last watered " + waterDateParse(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not watered yet"}</p>
                                    <p id={plants._id}>{plants.waterPref} watering conditions</p>
                                    {/* <button className="plant-card-2-btn">Open plant</button> */}
                                </div>
                            </div>
                            
                        ))}
                        <div className="see-more">
                            <div className="plant-card-see-more">
                                <p>See all plant dears <span className="g-t">&gt;</span></p>
                            </div>
                            <div className="plant-card-see-more-2">
                                {/* <img src={MorePlants} alt="See all plants" className=""/> */}
                            </div>

                        </div>

                    </>
                </div>
                
            </div>
        </>
    )
};

export default RecentAdditions;
