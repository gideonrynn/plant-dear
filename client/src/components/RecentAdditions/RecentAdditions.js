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
    const mostRecent = plantsByDate.slice(0, 4);
    const nextRecentFive = plantsByDate.slice(1, 14);
    console.log(mostRecent, nextRecentFive);

    return (
    
        <div className="new-plant-section">
            {/* <h3 className="recent-plant-header">Recent additions</h3> */}

            <div className="most-recent-plant">
                {mostRecent.map(plants => (
                    <>
                    <figure>
                        <div key={plants._id} className="plant-card">
                            <img src={`/img/${plants.imgURL}`} alt="Most recent plant" className="recent-image"/>
                        </div>
                        {/* <figcaption className="plant-caption">{plants.name}</figcaption> */}
                    </figure>
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
        
    )
};

export default RecentAdditions;
