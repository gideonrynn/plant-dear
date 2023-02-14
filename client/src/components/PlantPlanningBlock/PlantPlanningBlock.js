import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlantContext } from "../../context/PlantContext"
import PlantAPI from "../../utils/PlantsAPI"
// import Plantling from "../../img/plantling.jpg"
import { 
        // date, 
        getDifferenceInDays, 
        getLocalDate, 
        getLongDayOfTheWeek, 
        getNumberDayOfWeek, 
        parseToYYYYMMDD } from "../../utils/DateUtils"

import "./PlantPlanningBlock.css";

const PlantPlanningBlock = (data) => {
    //This component displays water rate alongside duration data for the purpose of watering multiple plants at the same time.
    //This component is also meant to capture all planned tasks, not just watering
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
    const [otherPlants, setOtherPlants] = useState([]);
    const [comparison, setComparison] = useState(false);

    const [closestScheduleDay, setClosestScheduleDay] = useState("");
    const [nextScheduleDay, setNextScheduleDay] = useState("");
    const [differenceUntilPreSchedule, setDifferenceUntilPreSchedule] = useState("");
    const [nextWaterPlant, setNextWaterPlant] = useState({});
    const [nextWaterId, setNextWaterId] = useState({});

    let sortPairings = {
        name: "name",
        location: "locationSec",
        difference: "difference",
        daysago: "daysAgo"
    };

    //date variables
    let date = getLocalDate(new Date());

    // let newISODate = date.toISOString();
    let todaysDate = date.toISOString().split('T')[0];
    let todaysDateParsed = parseToYYYYMMDD(date);


    const [ids, setIds] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    console.log("Ready plants", readyPlants);
    // console.log("Plant context on planning block", plantContext)


    // Load all plants and store them within setPlants
    useEffect(() => {

        setScheduleDates();

        if(plantContext.length > 0 && closestScheduleDay >= 0 & nextScheduleDay >= 0) {
            console.log("plant context length is greater than zero")
            sortPlants(plantContext);
        } else {
            console.log("plant context length is not greater than zero yet")
        }

        // loadPlants();
        setNewUpdate(firstUpdate);
        console.log("Planning page rerendered, pulling last update from" + newUpdate);
    
    },[closestScheduleDay, nextScheduleDay]);


    // set indoor plants when useEffect hook triggers and trigger run comparison to get watering duration rate difference values
    function sortPlants(input) {

        if(input) {

            // indoor plants for now, need to allow planning by outdoor
            let indoor = plantContext.filter(indoor => { 
                return indoor.location === "indoor"
            });

            setIndoorPlants(indoor);
            console.log(indoor)

            sortAndLoadPlants(indoor);
            
        }

    }

    // reuseable
    // sort plants onclick of selected column, check sort settings to get value that should be sorted on
    function sortByColumn(input) {
    
        let columnTitle = input.target.title;
        let sortValue = sortPairings[columnTitle];
        let sortedReadyPlants = "";

        if(columnTitle in sortPairings) {
            sortedReadyPlants = readyPlants.sort((a,b) => {
                if (a[sortValue] < b[sortValue]) return -1;
                if (a[sortValue] > b[sortValue]) return 1;
                return 0;
            })
        }

        //I was previously spreading the sortedReadyPlants, think of why
        setReadyPlants(sortedReadyPlants);

    };

    //reuseable if can pass in field, which I did in sortByColumn. combine into sort function with sort by column
    function sortedPlants(area) {
   
        return area.sort((a,b) => {
             if (a.locationSec < b.locationSec) return -1; 
             if (a.locationSec > b.locationSec) return 1; 
             if (a.difference > b.difference) return -1; //b before a
             if (a.difference < b.difference) return 1; //a before b
             
             return 0; //or leave unchanged
         })
     }

    //reuseable
    function handleClick(event, name) {
        event.preventDefault();

        let setPathname = name.toLowerCase().replace(/\s/g, "-").replace(/['()]/g, "");

        navigate(`/${setPathname}`,
   
            {state: { detail: event.target.id,
                    name: name }});
    }

    //reuseable
    function handleInputChange(event) {

        let fielddefaultValue = event.target.id;
        let fieldCheckedValue = event.target.checked;
        
        if (fieldCheckedValue === true) {
            setIds([...ids, fielddefaultValue]);
        }

    };

    // used for capturing changes into nextWaterPlant state variable that are later submitted to db when handleformsubmit runs
    function handleNextWaterChange(event) {
        // const { name, defaultValue } = event.target;
        let fieldId = event.target.id;
        let fieldName = event.target.name;
        let fielddefaultValue = event.target.value;
        setNextWaterPlant({...nextWaterPlant, [fieldName]: fielddefaultValue});
        setNextWaterId(fieldId);
        // console.log(fieldName, fielddefaultValue);
        console.log("Next water input logging");
        console.log(nextWaterPlant);
        console.log(fieldId);
        console.log(nextWaterId);
    };

    //specific to planning
    function setScheduleDates() {
        //get closest watering date
        //at some point will want to take the schedule dates and ensure they are sorted in order
        //Sunday (0), Wednesday (3)
        let scheduleDays = [0, 3];
        let tempArray = [];
        let nextTwoWeeks = [];
        let dayOfWeek = date.getDay();
        let closestScheduleDay = "";
        let nextScheduleDay = "";

        for (let i = 0; i < 14; i++) {
            let tempDate = getLocalDate(new Date());
            let updatedTempDate = tempDate.setDate(tempDate.getDate() + parseInt([i]));
            tempArray.push(updatedTempDate);

            //convert back to date object so the day of the week as a number can be obtained
            let potentialScheduleDate = new Date(updatedTempDate).getDay();
            if (closestScheduleDay === "" && scheduleDays.includes(potentialScheduleDate)) {
                closestScheduleDay = potentialScheduleDate;
                //go to the next iteration once this value has been retrieved
                continue;
            }
            if (closestScheduleDay !== "" && nextScheduleDay === "" && scheduleDays.includes(potentialScheduleDate)) {
                nextScheduleDay = potentialScheduleDate;
                console.log(nextScheduleDay, "assigned as it's in the schedule days array");
                //don't break the loop yet, down the road want to do more with the dates in this array
            }
        }

        console.log("The next two weeks from today", tempArray);
        

        //I want to see what plants will be scheduled on the next watering dates
        //to do that, I need to calculate the day BEFORE the SECOND watering date
        let dayBeforeScheduled = nextScheduleDay === 0 ? 6 : nextScheduleDay - 1;
        let differenceUntilPreSchedule = (dayOfWeek - dayBeforeScheduled);
        console.log("Difference until schedule = ", differenceUntilPreSchedule);
 
        setClosestScheduleDay(closestScheduleDay);
        setNextScheduleDay(nextScheduleDay);
        setDifferenceUntilPreSchedule(differenceUntilPreSchedule);

        console.log("The closest schedule date and the nextScheduleDate in sequence", closestScheduleDay, nextScheduleDay);

        return closestScheduleDay !== "" && nextScheduleDay !== "" ? true : false;
    }


    /* get difference between time last watered, and duration since previous water date
        set each plant to ready for watering, upcoming, later or other
        other is important because it is capturing plants that do not have a duration to compare yet, so they fall off the schedule */

    function sortAndLoadPlants(indoor) {

        let ready = [];
        let upcoming = [];
        let later = [];
        let other = [];

            indoor.forEach(plant => {

                // as we need to sort by the watering date, confirm a date of some kind exists
                if((plant.waterAdHoc || (plant.lastWatered && plant.lastWatered.length > 1))) {

                    // get the number of days since it was lastWatered   
                    plant["daysAgo"] = getDifferenceInDays(plant.lastWatered[plant.lastWatered.length - 1]);
        
                    // get number of days between the lastWatered date and the previous lastWatered date
                    plant["duration"] = getDifferenceInDays(plant.lastWatered[plant.lastWatered.length - 2]) - getDifferenceInDays(plant.lastWatered[plant.lastWatered.length - 1]);

                    // if the waterAdHoc date exists to represent a "skip to" date, use that to get the difference, otherwise, calculate between water rate and the last time it was watered
                    plant["difference"] = plant.waterAdHoc ? getDifferenceInDays(plant.waterAdHoc.split('T')[0]) : (plant.daysAgo - plant.waterRate);

                    let durationDifference = plant.difference;
                        

                    console.log("The closest schedule date and the nextScheduleDate in sequence Three", closestScheduleDay, nextScheduleDay);
                    //get the next day AS A NUMBER of the week that is one day before the next scheduled date

                    //calculate number of days until watering and push plants
                    //using 7 as cap because with regular schedule, 7 generally fits as timeframe following next watering date. but will need to update this after I begin tracking more than closest and next dates, as this would need the next schedule date after that
                    if (durationDifference >= differenceUntilPreSchedule ) {
                        ready.push(plant);
                    } else if (durationDifference < differenceUntilPreSchedule && durationDifference > -9) {
                        upcoming.push(plant);
                    } else if (durationDifference < -7 && durationDifference !== "") {
                        later.push(plant);
                    }
                    

                } else {

                    other.push(plant);

                }
                
            })
        
        setReadyPlants(sortedPlants(ready));
        setUpcomingPlants(sortedPlants(upcoming));
        setLaterPlants(sortedPlants(later));
        setOtherPlants(sortedPlants(other));
        setComparison(true);

    }

    function sortUpcomingByDay() {

        // get today's date
        // assign day of the week
        // map to day of the week
    }


    //reuseable
    function updateWaterDate() {

        let wateredDate = "";

        if (selectedDate === null || selectedDate === "") {
            
            wateredDate = todaysDate;
            // console.log(wateredDate);
        } else {
            wateredDate = selectedDate;
        }

        console.log("updateWaterDate function: ids, wateredDate", ids, wateredDate);

        PlantAPI.updatePlantWaterDate(
            {
                ids: ids,
                lastWatered: wateredDate,
                waterAdHoc: ""
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
        
    }


    function updateReadyPlants() {

        let newReadyPlants = readyPlants.filter(i => !ids.includes(i._id));
        // console.log(newReadyPlants);
        setReadyPlants(newReadyPlants);

    }

     // submits updates collected in modplants to the db
     function handleNextWaterSubmit(event) {
        event.preventDefault();
        console.log(nextWaterPlant);
        console.log("Id of the plant being submitted", nextWaterId);

        // setButtonColor('button-submitted');

        PlantAPI.updatePlant(
            nextWaterId,
            {
            waterAdHoc: nextWaterPlant.waterAdHoc,
        })
            .then(res => {
                console.log("submitted plant detail update", res)
            })
            .catch(err => console.log(err))

    }

    
    //boil down to one component, reuseable
    return (
        <div className="">

            <h1>Ready for Watering</h1>
            <h2>Last Updated {date.toString().split('G')[0].trim()} </h2>
            {comparison && closestScheduleDay >= 0 && nextScheduleDay >= 0 ?
            <>
                {/* <PlantBlock 
                    plants={readyPlants}
                /> */}

                <h3>As of Today for Watering by {getLongDayOfTheWeek(closestScheduleDay)}: {readyPlants.length}</h3>

                    <div className="by-duration">
                        <div className="by-duration-plants">

                        <div>
                            <span className="plant-details-label">Select Date </span>
                            
                                <input
                                    type="date"
                                    name="lastWatered"
                                    defaultValue={todaysDateParsed}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/>
                            </div>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header planning-sort-option" title="name" onClick={sortByColumn}>Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" onClick={sortByColumn}>Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Difference<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortByColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th>
                                    <th className="watering-col-header">Next Water Date</th>
                                    

                                </tr>
                            </thead>


                            <tbody className="watering-details">

                                {readyPlants.map(plants => (
                                    <tr key={plants._id}>
                                        <th className="watering-details">
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
                                            onClick={(e) => handleClick(e, plants.name)}>
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        <th className="watering-details">{plants.difference}</th>
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> 
                                                {plants.lastWatered && plants.lastWatered.length > 0 ? getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                        </th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 1 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 2]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 2 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 3]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                <input 
                                                id={plants._id}
                                                type="date"
                                                name="waterAdHoc"
                                                className="plant-details-specific"
                                                defaultValue={plants.waterAdHoc ? plants.waterAdHoc.split('T')[0] : null}
                                                onChange={handleNextWaterChange}
                                            />
                                            <button type="submit" className="water-metrics" onClick={handleNextWaterSubmit}>Save</button> 
                                        </th>

                                    </tr>
                                ))}
                             
                                           
                              
                            </tbody>
                            </table>
                            
            
                        </div>

                        <h1>{getLongDayOfTheWeek(nextScheduleDay)}: {upcomingPlants.length}</h1>
       
                        <div className="by-duration-plants">
                        <div>
                            <span className="plant-details-label">Select Date </span>
                            
                                <input
                                    type="date"
                                    name="lastWatered"
                                    defaultValue={todaysDateParsed}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/>
                            </div>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header planning-sort-option" title="name" onClick={sortByColumn}>Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" onClick={sortByColumn}>Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Difference<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortByColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th>
                                    <th className="watering-col-header">Next Water Date</th>
                                    

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
                                            onClick={(e) => handleClick(e, plants.name)}>
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        <th className="watering-details">{plants.difference}</th>
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> 
                                                {plants.lastWatered && plants.lastWatered.length > 0 ? getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                        </th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 1 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 2]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 2 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 3]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                <input 
                                                type="date"
                                                name="waterAdHoc"
                                                className="plant-details-specific"
                                                defaultValue={plants.waterAdHoc ? plants.waterAdHoc.split('T')[0] : null}
                                                onChange={handleNextWaterChange}
                                            />
                                            <button type="submit" className="water-metrics" onClick={handleNextWaterSubmit}>Save</button> 
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
                                    defaultValue={todaysDateParsed}
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
                                    <th className="watering-col-header planning-sort-option" title="name" onClick={sortByColumn}>Name<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="location" onClick={sortByColumn}>Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Preferred Water</th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Difference<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortByColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
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
                                            onClick={(e) => handleClick(e, plants.name)}>
                                                {plants.name}
                                        </th>
                                        <th className="watering-details">{plants.locationSec}</th>
                                        <th className="watering-details">{plants.waterPref}</th>
                                        <th className="watering-details">{plants.difference}</th>
                                        <th className="watering-details">{plants.waterRate}</th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> 
                                                {plants.lastWatered && plants.lastWatered.length > 0 ? getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                        </th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 1 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 2]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 2 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 3]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
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
                                    defaultValue={todaysDateParsed}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/>
                            </div>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>
            
                        </div>
                    </div>

                    
                    <h1>Other</h1>
       
                <div className="by-duration-plants">

                    <table className="watering-table">

                    <thead className="watering-col-header">
                        <tr className="watering-col-header">
                            <th className="watering-col-header">Watered</th>
                            <th className="watering-col-header planning-sort-option" title="name" onClick={sortByColumn}>Name<span className="ustyle">&#9650;</span></th>
                            <th className="watering-col-header planning-sort-option" title="location" onClick={sortByColumn}>Location<span className="ustyle">&#9650;</span></th>
                            <th className="watering-col-header">Preferred Water</th>
                            <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Difference<span className="ustyle">&#9650;</span></th>
                            <th className="watering-col-header planning-sort-option" title="difference" onClick={sortByColumn}>Water Rate</th>
                            <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortByColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
                            <th className="watering-col-header">Last Duration</th>
                            <th className="watering-col-header">Previous Duration</th>
                            

                        </tr>
                    </thead>


                    <tbody className="watering-details">

                        {otherPlants.map(plants => (
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
                                    onClick={(e) => handleClick(e, plants.name)}>
                                        {plants.name}
                                </th>
                                <th className="watering-details">{plants.locationSec}</th>
                                <th className="watering-details">{plants.waterPref}</th>
                                <th className="watering-details">{plants.difference}</th>
                                <th className="watering-details">{plants.waterRate}</th>
                                <th 
                                    className="water-metrics watering-details" 
                                    id={plants._id}> 
                                        {plants.lastWatered && plants.lastWatered.length > 0 ? getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                </th>
                                <th 
                                    className="water-metrics watering-details" 
                                    id={plants._id}>
                                        {plants.lastWatered && plants.lastWatered.length > 1 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 2]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                </th>
                                <th
                                    className="water-metrics watering-details" 
                                    id={plants._id}>
                                        {plants.lastWatered && plants.lastWatered.length > 2 ? (getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 3]) - getDifferenceInDays(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
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
                            defaultValue={todaysDateParsed}
                            className="plant-details-selected-date"
                            onChange={(e) => setSelectedDate(e.target.value)}/>
                    </div>
                    <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>

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