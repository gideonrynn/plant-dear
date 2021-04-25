
import React, {useEffect} from 'react';
import './style.css';
import maiden from '../../img/plants/maidenhairfern.jpg'

const RecentAdditions = (data) => {

    const plants = data.plants;

    const plantsByDate = plants.sort((a,b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        return 0;
    })

    const mostRecent = plantsByDate.slice(0, 1);
    const nextRecentFive = plantsByDate.slice(1, 5);

    // console.log(plantsByDate);
    // console.log(mostRecent);
    // console.log(nextRecentFive);

    return (
        <div className="new-plant-section">
            <h3 className="recent-plant-header">Recent additions</h3>

            <div className="most-recent-plant">
                <img src={maiden} alt="Most recent plant" width="200px" height="200px"/>
                {mostRecent.map(plants => (
                    <div key={plants.id}>
                        <p>{plants.name}</p>
                    </div>
                ))}
            </div>
            <div className="next-recent-plants">
                {nextRecentFive.map(plants => (
                    <div key={plants.id}>
                        <span>{plants.name}</span> { }
                        <span>({plants.hardiness}&#176;)</span> { }
                        {/* <img alt="weather" src={`https://www.weatherbit.io/static/img/icons/ + {} + .png`}></img> */}
                    </div>
                ))}
                
            </div>
            
        </div>
    )
};

export default RecentAdditions;
