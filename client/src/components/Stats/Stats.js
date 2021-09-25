import React, {useEffect} from 'react';
import './style.css';
import MorePlants from '../../img/deskplants.jpeg';
import { FaExternalLinkAlt } from "react-icons/fa"
import { useHistory } from 'react-router-dom';

const Stats = (data) => {

    //want to add here what likes a lot of water, what surives the winter, etc

    const plants = data.plants;
    const history = useHistory();

    function handleClick(event, id) {
        console.log("clicked", event.target.id);
        
        console.log(id);
        history.push({
            pathname: "plantonly",
            state: { detail: event.target.id }});
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
    const mostRecent = plantsByDate.slice(0, 20);
    const mostRecentIndoor = recentIndoor.slice(0, 10);
    const mostRecentOutdoor = recentOutdoor.slice(0, 10);
    const nextRecentFive = plantsByDate.slice(1, 14);
    console.log(mostRecent, nextRecentFive);

    // const d = new Date();

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
                <h3 className="recent-plant-header">In</h3>

                <div className="most-recent-indoor">
                    <>
                    
                        {mostRecentIndoor.map(plants => (
                            
                            <div key={plants._id+1} className="plant-card-wrapper">
                                <div key={plants._id+1} className="plant-card">
                                    <img src={`/img/${plants.imgURL}`} alt="Most recent plant" className="recent-image"/>
                                    {/* <p className="name-img">{plants.name}</p> */}
                                </div>
                                <div key={plants._id} id={plants._id} className="plant-card-2" onClick={handleClick}>
                                    <FaExternalLinkAlt className="fa-exl" id={plants._id}/>
                                    <p id={plants._id}>{plants.name}</p>
                                    <p id={plants._id}>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                    <p id={plants._id}>{plants.lastWatered.length > 0 ? "last watered on " + plants.lastWatered[plants.lastWatered.length - 1].split('T')[0] : "not watered yet"}</p>
                                    <p id={plants._id}>{plants.waterPref} watering conditions</p>
                                    {/* <button className="plant-card-2-btn">Open plant</button> */}
                                </div>
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
                </div>

                
            </div>

            <div className="new-plant-section">
                <h3 className="recent-plant-header">Out</h3>

                <div className="most-recent-outdoor">
                    <>
                        {mostRecentOutdoor.map(plants => (
                            
                            <div key={plants._id} className="plant-card-wrapper">
                                <div key={plants._id} className="plant-card">
                                    <img src={`/img/${plants.imgURL}`} alt="Most recent plant" className="recent-image"/>
                                    {/* <p className="name-img">{plants.name}</p> */}
                                </div>
                                <div key={plants._id+1} id={plants._id} className="plant-card-2" onClick={handleClick}>
                                    <FaExternalLinkAlt className="fa-exl" id={plants._id}/>
                                    <p id={plants._id}>{plants.name}</p>
                                    <p id={plants._id}>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                    <p id={plants._id}>{plants.lastWatered.length > 0 ? "last watered on " + plants.lastWatered[plants.lastWatered.length - 1].split('T')[0] : "not watered yet"}</p>
                                    <p id={plants._id}>{plants.waterPref} watering conditions</p>
                                    {/* <button className="plant-card-2-btn">Open plant</button> */}
                                </div>
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
                </div>
                
            </div>
        </>
    )
};

export default Stats;
