import React, {useEffect} from 'react'
import { useLocation, withRouter } from "react-router-dom";
import PlantBlockAll from "../PlantBlockAll/PlantBlock"
import './style.css'
// weather context
// plant data
// condition that checks the hardiness

const ByLocation = (data) => {
    // noting that there can be a section into which the plant data is passed for a particular location (data)
    // if checkbox = true, add id to set of ids
    // pass array through route
    // in route, use the following db.collectionName.updateMany(
    // {
    //     _id:
    //         {
    //             $in:
    //                 [
    //                     ObjectId("your object id"),
    //                     ObjectId("your object id")

    //                 ]
    //         }
    // },
    // {
    //     $inc: { quantity: 100 }

    // })
    // check to see how watered date is passing through

    // const forecastWeather = data.weather;
    const plants = data.plants;
    let location = useLocation();
    let pathname = location.pathname.slice(1);
    const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const d = new Date();

    

    useEffect(() => {
        console.log("ByLocation component rendered");
    }, [])

    // get all the plants that are outdoors and have an existing hardiness
    let outdoorPlants = plants.filter(plants => { 
        return plants.locationSec !== "" && plants.locationSec === "dining room"
    });
    // let outdoorPlantsVol = outdoorPlants.length;
    // console.log("Outdoor plants", outdoorPlants)

    /*Winter safe qualifies as plants with a hardiness equal to or less than Chicago's (-20)
    Exclude records where the hardinessZoneMin does not exist*/
    // let outdoorWinterSafe = plants.filter(plants => { 
    //     return plants.hardinessZoneMin !== undefined && plants.location === "outdoor" && (plants.hardinessZoneMin <= 5 || plants.hardiness <= -15) && plants.cycle === "perennial"
    // });
    // console.log("Winter safe plants: ", outdoorWinterSafe);
    // let outdoorWinterSafeMaybe = plants.filter(plants => { 
    //     return plants.hardinessZoneMin !== undefined && plants.location === "outdoor" && (plants.hardinessZoneMin <= 7 || plants.hardiness <= 0) && plants.cycle === "perennial"
    // });

    return (
        <div className="by-location-section">
            <h1>Show me some things by location</h1>

            {pathname === "" ? 
                <>
                    <div className="by-location">
                        <div className="by-location-plants">

                            <table>

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last Watered</th>
                                    <th>Watered Today</th>

                                </tr>
                            </thead>


                            <tbody>

                            {outdoorPlants.map(plants => (

                                <tr key={plants._id}>
                                    <th>{plants.name}</th>
                                    <th>{plants.lastWatered ? plants.lastWatered[plants.lastWatered.length - 1] : null} </th>
                                    <th><input type="checkbox" name="today" id={plants._id}/></th>

                                </tr>))}

                            </tbody>
                            </table>
                            {/* <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(plants._id, 0)} className="water-button-all">Submit</button> */}
            
                        </div>
       
                        
                    </div>
            
            </>: <p>This is not the home page</p>
            }
            
        </div>
    )
};

export default ByLocation;
