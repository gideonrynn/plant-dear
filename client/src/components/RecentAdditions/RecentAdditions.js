import React, {useEffect} from 'react';
import './style.css';

const RecentAdditions = (data) => {

    const plants = data.plants;

    const plantsByDate = plants.sort((a,b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
    })

    // const uniquePlants = [...new Set(plantsByDate.map(data => data.name))]
    
    // console.log(uniquePlants);
    const mostRecent = plantsByDate.slice(0, 12);
    const nextRecentFive = plantsByDate.slice(1, 14);
    console.log(mostRecent, nextRecentFive);

    const d = new Date();

    return (
        <>
            <div className="new-plant-section">
                {/* <h3 className="recent-plant-header">Recent additions</h3> */}

                <div className="most-recent-plants">
                    {mostRecent.map(plants => (
                        <>
                        <div className="plant-card-wrapper">
                            <div key={plants._id} className="plant-card">
                                <img src={`/img/${plants.imgURL}`} alt="Most recent plant" className="recent-image"/>
                                {/* <p className="name-img">{plants.name}</p> */}
                            </div>
                            <div key={plants._id+1} className="plant-card-2">
                                <p>{plants.name}</p>
                                <p>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                <p>{plants.lastWatered ? "last watered on " + plants.lastWatered.split('T')[0] : "not watered yet"}</p>
                                <p>{plants.waterPref} watering conditions</p>
                                {/* <button className="plant-card-2-btn">Open plant</button> */}
                            </div>
                        </div>
                        </>
                    ))}
                    
                </div>
                {/* <div className="next-recent-plants">
                    {nextRecentFive.map(plants => (
                        <div key={plants._id}>
                            <span>{plants.name}</span> { } */}
                            {/* <span>({plants.hardiness}&#176;)</span> { } */}
                        {/* </div>
                    ))}
                    
                </div> */}
                
            </div>
        </>
    )
};

export default RecentAdditions;
