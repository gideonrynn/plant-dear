import React, { useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";
// import PlantBlockAll from "../PlantBlockAll/PlantBlock"
import Outdoor from "../../img/outdoor-1.jpg"
import './OutdoorPlants.css'


/*ToDo:
- add winter safe data point to model? or use calculation for that?
- once date and watering function utils have been completed, add difference and last watered here (assuming I haven't handled this elsewhere)
- add check for hardiness versus current temp
- collapse the sections for tables here into the Outdoor page component. can pass data into this component to render what I want to be looking at instead of having separate tables here
- have the plants here display always in the same sort order
- for outdoor plants that are currently indoors, only display that section if there are plants indoors, collapse if not
- allow toggle on inactive plants that are typically outdoors

*/
const OutdoorPlants = (data) => {
    
    console.log("OutdoorPlants component initialized", data);
    // const forecastWeather = data.weather;
    const plants = data.plants;
    const inactive = data.inactive;
    const hardiness = data.hardiness;
    let location = useLocation();
    let pathname = location.pathname.slice(1);
    const history = useHistory();

    useEffect(() => {
        console.log("OutdoorPlants component rerendered");
    }, [])

    // get all the plants that are outdoors and have an existing hardiness
    let outdoorPlants = plants.filter(plants => { 
        return plants.hardiness !== "" && plants.location === "outdoor"
    });
    let outdoorPlantsVol = outdoorPlants.length;

    let indoorOutdoorPlants = plants.filter(plants => { 
        return plants.hardiness !== "" && plants.locationPreferred === "outdoor" && plants.location === "indoor"
    });
    let indoorOutdoorPlantsVol = indoorOutdoorPlants.length;
    // let outdoorPlantsFirst = outdoorPlants[0];
    // let outdoorPlantsThumbs = outdoorPlants.slice(2, 5);

    let outdoorInactive = inactive.filter(plants => { 
        return (plants.locationPreferred === "outdoor" && plants.status === "inactive") || (plants.location === "outdoor" && plants.status === "inactive")
    });
    let outdoorInactiveVol = outdoorInactive.length;

    let outdoorRepot = plants.filter(plants => { 
        return plants.location === "outdoor" && (plants.lastPotted === null || plants.lastPotted === undefined || plants.lastPotted === "")
    });
    let outdoorRepotVol = outdoorRepot.length;
    let outdoorDry = plants.filter(plants => { 
        return plants.location === "outdoor" && plants.waterPref.includes("dry")
    });
    let outdoorDryVol = outdoorDry.length;
    let outdoorModerate = plants.filter(plants => { 
        return plants.location === "outdoor" && plants.waterPref.includes("moderate")
    });
    let outdoorModerateVol = outdoorModerate.length;
    let outdoorWet = plants.filter(plants => { 
        return plants.location === "outdoor" && plants.waterPref.includes("moist")
    });
    let outdoorWetVol = outdoorWet.length;

    function handleClick(event, id) {
        // console.log("clicked", event.target.id);
        
        // console.log(id);
        history.push({
            pathname: "plantdetails",
            state: { detail: event.target.id }});
    }

    // console.log("First", outdoorPlantsFirst)
    // console.log("Outdoor plants", outdoorPlants)

    /*Winter safe qualifies as plants with a hardiness equal to or less than Chicago's (-20)
    Exclude records where the hardinessZoneMin does not exist*/
    // let outdoorWinterSafe = plants.filter(plants => { 
    //     return plants.hardinessZoneMin !== undefined && plants.location === "outdoor" && (plants.hardinessZoneMin <= 5 || plants.hardiness <= -15) && plants.cycle === "perennial"
    // });
    // console.log("Winter safe plants: ", outdoorWinterSafe);


    return (

                <>
                 <div className="outdoor-plant-section">

                
                    <div className="current-deets">
                        <div>
                            {/* <h1>Blah Blah</h1> */}
                        </div>
                        <div className="outdoor-plant-stats">
                            <p className="outdoor-plant-stat"><b>{outdoorPlantsVol} </b>dears enjoying the great outdoors</p>
                            <p className="outdoor-plant-stat"><b>{outdoorRepotVol}</b> may need repotting</p>
                            <p className="outdoor-plant-stat"><b>{outdoorDryVol}</b> like it dry</p>
                            <p className="outdoor-plant-stat"><b>{outdoorModerateVol}</b> like it moderate</p>
                            <p className="outdoor-plant-stat"><b>{outdoorWetVol}</b> like it wet</p>
                            <p className="outdoor-plant-stat"><b>{indoorOutdoorPlantsVol}</b> will need to be moved outside</p>

                        </div>
                        <div className="onward ">
                            <p className="outdoor-plant-stat">See all outdoor plants &gt;</p>
                        </div>
                    </div>

                <div className="outdoor-plant-images">
                    
                    {/* <div className="outdoor-thumbnails">
                        {outdoorPlantsThumbs.map(plants => (
                            <img src={`/img/${plants.imgURL}`} alt="Outdoor plant thumb" className="outdoor-img-thumb"/>
                        ))}
                        
                    </div> */}
                    <div className="outdoor-main">
                        {
                            // outdoorPlantsFirst ? <img src={`/img/${outdoorPlantsFirst.imgURL}`} alt="Outdoor plant" className="outdoor-img-main"/> : ""
                            <img src={Outdoor} alt="Outdoor plant" className="outdoor-img-main"/>

                        }
                    </div>
                    
                </div>
            </div>


                    <div className="by-duration">
                        <div className="by-duration-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    {/* <th className="watering-col-header">Watered</th> */}
                                    <th className="watering-col-header planning-sort-option" title="name" >Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" >Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    {/* <th className="watering-col-header planning-sort-option" title="difference" >Difference<span className="ustyle">&#9650;</span></th> */}
                                    <th className="watering-col-header planning-sort-option" title="difference" >Water Rate</th>
                                    <th className="watering-col-header">Hardiness Low</th>
                                    {/* <th className="watering-col-header planning-sort-option" title="daysago" >Last Watered<span className="ustyle">&#9650;</span></th> */}
                                    {/* <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th> */}
                                    

                                </tr>
                            </thead>


                            <tbody className="watering-details">

                                {outdoorPlants.map(plants => (
                                    <tr key={plants._id}>
                                        {/* <th  className="watering-details">
                                            <input 
                                                type="checkbox" 
                                                name="today"
                                                id={plants._id} 
                                                // defaultChecked={false}
                                                // checked={checkedVal}
                                                // onChange={handleInputChange}/
                                                ></input>
                                        </th> */}
                                        <th 
                                            className="plant-table-row watering-details"
                                            
                                            id={plants._id} 
                                            onClick={handleClick}
                                            >
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        {/* <th className="watering-details">{plants.difference}</th> */}
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th className="watering-details">{plants.hardinessZoneMin}</th>
                                        {/* <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>  */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 0 ? waterDateParse(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"}  */}
                                        {/* </th> */}
                                        {/* <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 1 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 2]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"}  */}
                                        {/* </th> */}
                                        {/* <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}> */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 2 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 3]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"}  */}
                                        {/* </th> */}
                                        
                                    </tr>
                                ))}
                             
                                           
                              
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h1>Outdoor Plants that are currently indoors</h1>
                    <div className="by-duration">
                        <div className="by-duration-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    {/* <th className="watering-col-header">Watered</th> */}
                                    <th className="watering-col-header planning-sort-option" title="name" >Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" >Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    {/* <th className="watering-col-header planning-sort-option" title="difference" >Difference<span className="ustyle">&#9650;</span></th> */}
                                    <th className="watering-col-header planning-sort-option" title="difference" >Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" >Hardiness</th>
                                    {/* <th className="watering-col-header planning-sort-option" title="daysago" >Last Watered<span className="ustyle">&#9650;</span></th> */}
                                    {/* <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th> */}
                                    

                                </tr>
                            </thead>


                            
                            <tbody className="watering-details">

                                {indoorOutdoorPlants.map(plants => (
                                    <tr key={plants._id}>
                                        {/* <th  className="watering-details">
                                            <input 
                                                type="checkbox" 
                                                name="today"
                                                id={plants._id} 
                                                // defaultChecked={false}
                                                // checked={checkedVal}
                                                // onChange={handleInputChange}/
                                                ></input>
                                        </th> */}
                                        <th 
                                            className="plant-table-row watering-details"
                                            
                                            id={plants._id} 
                                            onClick={handleClick}
                                            >
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        {/* <th className="watering-details">{plants.difference}</th> */}
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th className="watering-details">{plants.hardinessZoneMin || "not indicated"} - {plants.hardinessZoneMax || "not indicated"}</th>
                                        {/* <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>  */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 0 ? waterDateParse(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"}  */}
                                        {/* </th> */}
                                        {/* <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 1 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 2]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"}  */}
                                        {/* </th> */}
                                        {/* <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}> */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 2 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 3]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"}  */}
                                        {/* </th> */}
                                        
                                    </tr>
                                ))}
                             
                                           
                              
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <h1>Inactive plants that are typically outdoors</h1>
                    <div className="by-duration">
                        <div className="by-duration-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    {/* <th className="watering-col-header">Watered</th> */}
                                    <th className="watering-col-header planning-sort-option" title="name" >Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" >Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    {/* <th className="watering-col-header planning-sort-option" title="difference" >Difference<span className="ustyle">&#9650;</span></th> */}
                                    <th className="watering-col-header planning-sort-option" title="difference" >Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" >Hardiness</th>
                                    <th className="watering-col-header">Hardiness</th>
                                    {/* <th className="watering-col-header planning-sort-option" title="daysago" >Last Watered<span className="ustyle">&#9650;</span></th> */}
                                    {/* <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th> */}
                                    

                                </tr>
                            </thead>


                            
                            <tbody className="watering-details">

                                {outdoorInactive.map(plants => (
                                    <tr key={plants._id}>
                                        {/* <th  className="watering-details">
                                            <input 
                                                type="checkbox" 
                                                name="today"
                                                id={plants._id} 
                                                // defaultChecked={false}
                                                // checked={checkedVal}
                                                // onChange={handleInputChange}/
                                                ></input>
                                        </th> */}
                                        <th 
                                            className="plant-table-row watering-details"
                                            
                                            id={plants._id} 
                                            onClick={handleClick}
                                            >
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        {/* <th className="watering-details">{plants.difference}</th> */}
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th className="watering-details">{plants.hardinessZoneMin || "not indicated"} - {plants.hardinessZoneMax || "not indicated"}</th>
                                        {/* <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>  */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 0 ? waterDateParse(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"}  */}
                                        {/* </th> */}
                                        {/* <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 1 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 2]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"}  */}
                                        {/* </th> */}
                                        {/* <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}> */}
                                                {/* {plants.lastWatered && plants.lastWatered.length > 2 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 3]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"}  */}
                                        {/* </th> */}
                                        
                                    </tr>
                                ))}
                             
                                           
                              
                                </tbody>
                            </table>
                        </div>
                    </div>
            </>
            
    )
};

export default OutdoorPlants;
