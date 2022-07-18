import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlantContext } from "../../context/PlantContext"
import PlantAPI from "../../utils/PlantsAPI"
// import Plantling from "../../img/plantling.jpg"
import { getDifference, getLocalDate, getDayOfTheWeek } from "../../utils/DateUtils"

import "./PlantPlanningBlock.css";

const PlantPlanningBlock = (data) => {
    //This component displays water rate alongside duration data for the purpose of watering multiple plants at the same time.
    console.log("PlantPlanningBlock component initialized, with context");


    console.log("Planning block initialized, with context");

    const { activePlants, update, setUpdate } = useContext(PlantContext);
    const navigate = useNavigate();

    // Setting our component's initial state
    const [plantContext, setPlantContext] = useState(data.plants);
    const [firstUpdate, setNewFirstUpdate] = useState(update);
    const [newUpdate, setNewUpdate] = useState("");
    const [indoorPlants, setIndoorPlants] = useState([]);
    // const [outdoorPlants, setOutdoorPlants] = useState([]);
    const [readyPlants, setReadyPlants] = useState([]);
    const [upcomingPlants, setUpcomingPlants] = useState([]);
    const [laterPlants, setLaterPlants] = useState([]);
    const [comparison, setComparison] = useState(false);

    const [closestScheduleDate, setClosestScheduleDate] = useState([]);
    const [nextScheduleDate, setNextScheduleDate] = useState([]);

    //date variables
    let date = getLocalDate(new Date());
    // let newISODate = date.toISOString();
    let todaysDate = date.toISOString().split('T')[0];
    console.log("This is todays date", todaysDate);


    const [ids, setIds] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    console.log("Ready plants", readyPlants);
    console.log("Plant context on planning block", plantContext)


    // Load all plants and store them within setPlants
    useEffect(() => {

        if(plantContext.length > 0) {
            console.log("plant context length is greater than zero")
            sortPlants(plantContext);
        } else {
            console.log("plant context length is not greater than zero yet")
        }

        // loadPlants();
        setNewUpdate(firstUpdate);
        console.log("Planning page rerendered, pulling last update from" + newUpdate);
    
    },[]);


    // set indoor plants when useEffect hook triggers and trigger run comparison to get watering duration rate difference values
    function sortPlants(input) {

        if(input) {
        
            // indoor plants
            let indoor = plantContext.filter(indoor => { 
                return indoor.location === "indoor"
            });

            setIndoorPlants(indoor);
            console.log(indoor)

            runComparison(indoor);
            setScheduleDates();
        }

    }

    // sort plants onclick of selected column
    function sortColumn(input) {
        // console.log(input.target.title);
        let columnTitle = input.target.title;
        let sortedReadyPlants = "";
        // console.log(readyPlants);
        if(columnTitle === "name") {
            sortedReadyPlants = readyPlants.sort((a,b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        }
        if(columnTitle === "location") {
            sortedReadyPlants = readyPlants.sort((a,b) => {
                if (a.locationSec < b.locationSec) return -1;
                if (a.locationSec > b.locationSec) return 1;
                return 0;
            })
        }
        if(columnTitle === "difference") {
            sortedReadyPlants = readyPlants.sort((a,b) => {
                if (a.difference < b.difference) return -1;
                if (a.difference > b.difference) return 1;
                return 0;
            })
        }
        if(columnTitle === "daysago") {
            sortedReadyPlants = readyPlants.sort((a,b) => {
                if (a.daysAgo < b.daysAgo) return -1;
                if (a.daysAgo > b.daysAgo) return 1;
                return 0;
            })
        }
        // console.log(sortedReadyPlants);

        setReadyPlants([...sortedReadyPlants]);

    };

      
    function handleClick(event, id) {
        // console.log("clicked", event.target.id);
        
        // console.log(id);
        navigate("/plantdetails",
            { state: { detail: event.target.id }});
    }

    function handleInputChange(event) {

        let fielddefaultValue = event.target.id
        let fieldCheckedValue = event.target.checked
        
        if (fieldCheckedValue === true) {
            setIds([...ids, fielddefaultValue]);
        }

    };

    function setScheduleDates() {
        //get closest watering date
        //Sunday (0), Wednesday (3)
        let scheduleDays = [0, 3];
        let dayOfWeek = date.getDay();
        let thisDay = "";
        //https://thewebdev.info/2021/04/18/how-to-get-the-closest-number-to-a-number-out-of-a-javascript-array/#site-header
        let closestScheduleDate = scheduleDays.reduce((prev, curr) => {
            return (Math.abs(curr - dayOfWeek) < Math.abs(prev - dayOfWeek) ? curr : prev);
            });
        
        //right now this is assuming that there are only two schedule days for water
        let nextScheduleDate = scheduleDays.find(element => element !== closestScheduleDate);
 
        setClosestScheduleDate(getDayOfTheWeek(closestScheduleDate));
        setNextScheduleDate(getDayOfTheWeek(nextScheduleDate));
    }


    // get difference between time last watered, and duration since previous water date
    // set resulting plants to ready for watering, upcoming, or other
    // other is important because it is capturing plants that do not have a duration to compare yet
    function runComparison(indoor) {
        //need to do a date comparison to get an understanding of what needs to be watered
        //get the value of the last watered (ex/5 days) - later we want to get this where we've signed off the duration is OK
        //will need a loop to go through the plants by date
        console.log("runComparison function is running");

        let ready = [];
        let upcoming = [];
        let later = [];
        let sortedReady = [];
        let sortedUpcoming = [];
        let sortedLater = [];

        indoor.forEach(plant => {

            if(plant.waterAdHoc || (plant.lastWatered && plant.lastWatered.length > 1)) {

                //get the number of days since it was lastWatered
                let daysAgo = getDifference(plant.lastWatered[plant.lastWatered.length - 1]);
                let waterRate = plant.waterRate;
                console.log(plant.name + " watered this number of days ago: ", daysAgo);
                plant["daysAgo"] = daysAgo;

                let lastDuration = getDifference(plant.lastWatered[plant.lastWatered.length - 2]) - getDifference(plant.lastWatered[plant.lastWatered.length - 1]);
                console.log("Last Duration between waterings: ", lastDuration);
                plant["duration"] = lastDuration;

                // if the waterAdHoc date exists to represent a skip date, use that to get the difference, otherwise, calculate between water rate and the last time it was watered
                let durationDifference = plant.waterAdHoc ? getDifference(plant.waterAdHoc.split('T')[0]) : (daysAgo - waterRate);
                
                console.log(plant);
                plant["difference"] = durationDifference;
                console.log(plant);


                if (durationDifference >= -2 ) {
                    ready.push(plant);
                } else if (durationDifference < -2 && durationDifference > -7) {
                    upcoming.push(plant);
                } else if (durationDifference < -7 && durationDifference !== "") {
                    later.push(plant);
                }


                console.log(plant.name + " difference between last watered and duration is: " + durationDifference);

            } else {
                later.push(plant);
            }
            sortedReady = ready.sort((a,b) => {
                if (a.locationSec < b.locationSec) return -1; 
                if (a.locationSec > b.locationSec) return 1; 
                if (a.difference > b.difference) return -1; //b before a
                if (a.difference < b.difference) return 1; //a before b
                
                return 0; //leave unchanged
            })
            sortedUpcoming = upcoming.sort((a,b) => {
                if (a.locationSec < b.locationSec) return -1; 
                if (a.locationSec > b.locationSec) return 1; 
                if (a.difference > b.difference) return -1;
                if (a.difference < b.difference) return 1;
                return 0;
            })
            sortedLater = later.sort((a,b) => {
                if (a.difference > b.difference) return -1;
                if (a.difference < b.difference) return 1;
                if (a.locationSec < b.locationSec) return -1; 
                if (a.locationSec > b.locationSec) return 1; 
                return 0;
            })
        })


        console.log("runComparison has completed it's run");
        setUpcomingPlants(sortedUpcoming);
        setReadyPlants(sortedReady);
        setLaterPlants(sortedLater);
        setComparison(true);

        //if the last watered is greater than the last duration, display that in the last as past due
        //if the last watered hasn't passed yet, display that in the upcoming section

    }

    function sortUpcomingByDay() {

        // get today's date
        // assign day of the week
        // map to day of the week
    }


    function updateWaterDate() {

        let wateredDate = "";

        if (selectedDate === null || selectedDate === "") {
            
            wateredDate = todaysDate;
            // console.log(wateredDate);
        } else {
            wateredDate = selectedDate;
        }

        

        PlantAPI.updatePlantWaterDate(
            {
                ids: ids,
                lastWatered: wateredDate,
            })
            .then((ids) => {

                let newReadyPlants = readyPlants;
                console.log("New ready plants!", newReadyPlants);
                console.log("response from db", ids);             
                setIds([]);
                setSelectedDate("");
                setUpdate(date);
                return "Complete"
            })
            .then((result) => {
                updateReadyPlants();
            })
            .catch(err => console.log(err))

        // console.log(newDate);
        // console.log(selectedDate);
        // console.log(ids);
        
    }

    // need function that will add lastwatered to object within the page
    // when navigating to another page, the context will update, because this change updates the db
    function updateReadyPlants() {

        let newReadyPlants = readyPlants.filter(i => !ids.includes(i._id));
        // console.log(newReadyPlants);
        setReadyPlants(newReadyPlants);

    }

    

    return (
        <div className="">
            

            {/* <input 
                type="text"
                style={
                    {width:"350px",
                    background:"#F2F1F9", 
                    padding:"10px"}}
                placeholder={"search plants"}
                onChange={(event) => {
                    sortPlants(event.target.value)
                    }}
            /> */}

            <h1>Ready for Watering</h1>
            <h2>Last Updated {date.toString().split('G')[0].trim()} </h2>
            {comparison ?
            <>
                {/* <PlantBlock 
                    plants={readyPlants}
                /> */}

                <h3>As of Today: {readyPlants.length}</h3>

                    <div className="by-duration">
                        <div className="by-duration-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header planning-sort-option" title="name" onClick={sortColumn}>Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" onClick={sortColumn}>Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortColumn}>Difference<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortColumn}>Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th>
                                    

                                </tr>
                            </thead>


                            <tbody className="watering-details">

                                {readyPlants.map(plants => (
                                    <tr key={plants._id}>
                                        <th  className="watering-details">
                                            <input 
                                                type="checkbox" 
                                                name="today"
                                                id={plants._id} 
                                                // defaultChecked={false}
                                                // checked={checkedVal}
                                                onChange={handleInputChange}/>
                                        </th>
                                        <th 
                                            className="plant-table-row watering-details"
                                            
                                            id={plants._id} 
                                            onClick={handleClick}>
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        <th className="watering-details">{plants.difference}</th>
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> 
                                                {plants.lastWatered && plants.lastWatered.length > 0 ? getDifference(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                        </th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 1 ? (getDifference(plants.lastWatered[plants.lastWatered.length - 2]) - getDifference(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 2 ? (getDifference(plants.lastWatered[plants.lastWatered.length - 3]) - getDifference(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        

                                    </tr>
                                ))}
                             
                                           
                              
                            </tbody>
                            </table>
                            <div>
                            <span className="plant-details-label">Select Date </span>
                            
                                <input
                                    type="date"
                                    name="lastWatered"
                                    defaultValue={todaysDate}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/>
                            </div>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>
            
                        </div>

                        <h1>{nextScheduleDate.toLocaleString('default', {weekday: 'long'})}: {upcomingPlants.length}</h1>
       
                        <div className="by-duration-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header planning-sort-option" title="name" onClick={sortColumn}>Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" onClick={sortColumn}>Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortColumn}>Difference<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortColumn}>Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th>
                                    

                                </tr>
                            </thead>


                            <tbody className="watering-details">

                                {upcomingPlants.map(plants => (
                                    <tr key={plants._id}>
                                        <th  className="watering-details">
                                            <input 
                                                type="checkbox" 
                                                name="today"
                                                id={plants._id} 
                                                // defaultChecked={false}
                                                // checked={checkedVal}
                                                onChange={handleInputChange}/>
                                        </th>
                                        <th 
                                            className="plant-table-row watering-details"
                                            
                                            id={plants._id} 
                                            onClick={handleClick}>
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        <th className="watering-details">{plants.difference}</th>
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> 
                                                {plants.lastWatered && plants.lastWatered.length > 0 ? getDifference(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                        </th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 1 ? (getDifference(plants.lastWatered[plants.lastWatered.length - 2]) - getDifference(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 2 ? (getDifference(plants.lastWatered[plants.lastWatered.length - 3]) - getDifference(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        

                                    </tr>
                                ))}
                             
                                           
                              
                            </tbody>
                            </table>
                            <div>
                            <span className="plant-details-label">Select Date </span>
                            
                                <input
                                    type="date"
                                    name="lastWatered"
                                    defaultValue={todaysDate}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/>
                            </div>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>
            
                        </div>

                        <h1>Later</h1>
       
                        <div className="by-duration-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header planning-sort-option" title="name" onClick={sortColumn}>Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" onClick={sortColumn}>Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortColumn}>Difference<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortColumn}>Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th>
                                    

                                </tr>
                            </thead>


                            <tbody className="watering-details">

                                {laterPlants.map(plants => (
                                    <tr key={plants._id}>
                                        <th  className="watering-details">
                                            <input 
                                                type="checkbox" 
                                                name="today"
                                                id={plants._id} 
                                                // defaultChecked={false}
                                                // checked={checkedVal}
                                                onChange={handleInputChange}/>
                                        </th>
                                        <th 
                                            className="plant-table-row watering-details"
                                            
                                            id={plants._id} 
                                            onClick={handleClick}>
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        <th className="watering-details">{plants.difference}</th>
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> 
                                                {plants.lastWatered && plants.lastWatered.length > 0 ? getDifference(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                        </th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 1 ? (getDifference(plants.lastWatered[plants.lastWatered.length - 2]) - getDifference(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 2 ? (getDifference(plants.lastWatered[plants.lastWatered.length - 3]) - getDifference(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        

                                    </tr>
                                ))}
                             
                                           
                              
                            </tbody>
                            </table>
                            <div>
                            <span className="plant-details-label">Select Date </span>
                            
                                <input
                                    type="date"
                                    name="lastWatered"
                                    defaultValue={todaysDate}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/>
                            </div>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>
            
                        </div>
                    </div>

            {/* <h1>Upcoming</h1>
                <PlantBlock 
                    plants={upcomingPlants} 
                /> 
                <h1>TBD</h1>
                <PlantBlock 
                    plants={otherPlants} 
                /> */}

                </>
            :
                <p>Loading plants...</p>
            }
            

        </div>
        
    )
};

export default PlantPlanningBlock;