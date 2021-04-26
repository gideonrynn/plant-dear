import React, {useEffect} from 'react';
import './style.css';

const RecentAdditions = (data) => {

    const plants = data.plants;

    const plantsByDate = plants.sort((a,b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
    })

    const mostRecent = plantsByDate.slice(0, 1);
    const nextRecentFive = plantsByDate.slice(1, 14);

    return (
        <div className="new-plant-section">
            <h3 className="recent-plant-header">Recent additions</h3>

            <div className="most-recent-plant">
                {mostRecent.map(plants => (
                    <div key={plants.id}>
                        <img src={`/img/${plants.imgURL}`} alt="Most recent plant" width="300px" height="300px"/>
                        <p>{plants.name}</p>
                    </div>
                ))}
            </div>
            <div className="next-recent-plants">
                {nextRecentFive.map(plants => (
                    <div key={plants.id}>
                        <span>{plants.name}</span> { }
                        {/* <span>({plants.hardiness}&#176;)</span> { } */}
                    </div>
                ))}
                
            </div>
            
        </div>
    )
};

export default RecentAdditions;
