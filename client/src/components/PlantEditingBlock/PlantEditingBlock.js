import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PlantContext } from "../../context/PlantContext"
import PlantAPI from "../../utils/PlantsAPI"
import Plantling from "../../img/plantling.jpg"
import { FaEdit, FaSave } from "react-icons/fa"

import "./PlantEditingBlock.css";

const PlantEditingBlock = (data) => {

    console.log("PlantEditingBlock component initialized, with context");


    console.log("Planning editing block initialized, with context");

    const { activePlants, update, setUpdate } = useContext(PlantContext);
    const history = useHistory();
    // const newUpdate = update;
    // console.log("number of active plants returned", activePlants.length);

    // Setting our component's initial state
    const [plantContext, setPlantContext] = useState(data.plants);
    const [firstUpdate, setNewFirstUpdate] = useState(update);
    const [newUpdate, setNewUpdate] = useState("");
    const [indoorPlants, setIndoorPlants] = useState([]);
    // const [outdoorPlants, setOutdoorPlants] = useState([]);
    const [readyPlants, setReadyPlants] = useState([]);
    const [upcomingPlants, setUpcomingPlants] = useState([]);
    const [otherPlants, setOtherPlants] = useState([]);
    const [comparison, setComparison] = useState(false);
    const [thisPlant, setThisPlant] = useState({});
    const [thisPlantId, setThisPlantId] = useState({});
    const [modPlant, setModPlant] = useState({});
    const [buttonColor, setButtonColor] = useState('button-not-submitted');
    // console.log("This is the value of update", update, activePlants);

    //date variables
    let date = new Date();
    //one day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    date.setDate(date.getDate());
    let newISODate = date.toISOString();
    let todaysDate = newISODate.split('T')[0];

    const [ids, setIds] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    // console.log("Ready plants", readyPlants);
    // console.log("Plant context on planning editing block", plantContext)


    // Load all plants and store them within setPlants
    useEffect(() => {

        if(plantContext.length > 0) {
            console.log("plant context length is greater than zero")
            sortColumn();
        } else {
            console.log("plant context length is not greater than zero yet")
        }

        // loadPlants();
        setNewUpdate(firstUpdate);
        console.log("Editing page rerendered, pulling last update from" + newUpdate);
    
    },[])



    // sort plants onclick of selected column
    function sortColumn(input) {
        // console.log(input.target.title);
        let sortedReadyPlants = "";

        if(!input) {
            sortedReadyPlants = plantContext.sort((a,b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        } else {
            let columnTitle = input.target.title;
            
            // console.log(readyPlants);
            if(columnTitle === "name") {
                sortedReadyPlants = plantContext.sort((a,b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                })
            }
            if(columnTitle === "botanicalName") {
                sortedReadyPlants = plantContext.sort((a,b) => {
                    if (a.botanicalName < b.botanicalName) return -1;
                    if (a.botanicalName > b.botanicalName) return 1;
                    return 0;
                })
            }
            if(columnTitle === "location") {
                sortedReadyPlants = plantContext.sort((a,b) => {
                    if (a.location < b.location) return -1;
                    if (a.location > b.location) return 1;
                    return 0;
                })
            }
            if(columnTitle === "locationSec") {
                sortedReadyPlants = plantContext.sort((a,b) => {
                    if (a.locationSec < b.locationSec) return -1;
                    if (a.locationSec > b.locationSec) return 1;
                    return 0;
                })
            }
            if(columnTitle === "status") {
                sortedReadyPlants = plantContext.sort((a,b) => {
                    if (a.status < b.status) return -1;
                    if (a.status > b.status) return 1;
                    return 0;
                })
            }
            
        }
        
        console.log("Sorted ready plants on column selection", sortedReadyPlants);

        setReadyPlants([...sortedReadyPlants]);

    };

      
    function handleClick(event, id) {
        // console.log("clicked", event.target.id);
        
        // console.log(id);
        history.push({
            pathname: "plantdetails",
            state: { detail: event.target.id }});
    }

    // function handleInputChange(event) {
    //     // const { name, defaultValue } = event.target;
    //     // let fieldName = event.target.name
    //     let fielddefaultValue = event.target.id
    //     let fieldCheckedValue = event.target.checked

    //     // console.log("This is the info I need right now", event.target, "and this is the value", fieldCheckedValue);
        
    //     if (fieldCheckedValue === true) {
    //         setIds([...ids, fielddefaultValue]);
    //         // setCheckedVal(true)
    //         // console.log(fieldName, fielddefaultValue)
    //     }
        
    //     // console.log(ids);
    //     // setCheckedVal(handleCheckedValue(fieldCheckedValue))

    // };

    function waterDateParse(dateToParse) {

        let newWaterDate = ""

        if (dateToParse) {
            let dateToParseYear = dateToParse.split("-")[0];
            let dateToParseMonth = dateToParse.split("-")[1] - 1;
            let dateToParseDay = dateToParse.split("-")[2];
            // console.log("split", dateToParseArray);
            // console.log(dateToParseYear, dateToParseMonth, dateToParseDay);
    
            newWaterDate = new Date(dateToParseYear, dateToParseMonth, dateToParseDay);
            // console.log("New water date formatted: ", newWaterDate);

        }

        return getDifference(newWaterDate);

    }


    function getDifference(waterDate) {

        let differenceConverted = "";

        if(date && waterDate) {

            let dateDifference = date.getTime() - waterDate.getTime();
            differenceConverted = Math.floor(dateDifference / oneDay);
            // console.log("differenceConverted is: ", differenceConverted);

        }

        return differenceConverted;

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
        let other = [];
        let sortedReady = [];

        indoor.forEach(plant => {

            if(plant.lastWatered && plant.lastWatered.length > 1) {

                //get the number of days since it was lastWatered
                let daysAgo = waterDateParse(plant.lastWatered[plant.lastWatered.length - 1]);
                console.log("Watered this number of days ago: ", daysAgo);
                plant["daysAgo"] = daysAgo;
                // let daysAgoComparison = ;
                // console.log("Watered this number of days ago COMPARISON conversion: ", daysAgoComparison)
                //get the previous duration of watering the plant
                //this will need to be updated to the last good duration for having watered the plant
                //convert the lastWatered date you want to look at 
                //
                // plants.lastWatered && plants.lastWatered.length > 1 ? 
                //() 
                //- 
                //Math.round((date.getTime() - new Date(plant.lastWatered[plant.lastWatered.length - 1]).getTime())/ oneDay)) + " days" : "n/a"
                let lastDuration = waterDateParse(plant.lastWatered[plant.lastWatered.length - 2]) - waterDateParse(plant.lastWatered[plant.lastWatered.length - 1]);
                console.log("Last Duration between waterings: ", lastDuration);
                plant["duration"] = lastDuration;

                //get the absolute date, as if doesn't matter if the difference is positive or negative
                // let durationDifference = Math.abs(daysAgo - lastDuration);
                let durationDifference = daysAgo - lastDuration;
                console.log(plant);
                plant["difference"] = durationDifference;
                console.log(plant);

                if (durationDifference < 0) {
                    upcoming.push(plant);
                } else {
                    //  else if (durationDifference >= 0) {
                    ready.push(plant);
                }


                console.log(plant.name + " difference between last watered and duration is: " + durationDifference);

            } else {
                other.push(plant);
            }
            sortedReady = ready.sort((a,b) => {
                if (a.difference > b.difference) return -1;
                if (a.difference < b.difference) return 1;
                return 0;
            })
        })


        console.log("runComparison has completed it's run");
        setUpcomingPlants(upcoming);
        setReadyPlants(sortedReady);
        setOtherPlants(other);
        setComparison(true);

        //if the last watered is greater than the last duration, display that in the last as past due
        //if the last watered hasn't passed yet, display that in the upcoming section

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

    function handleInputChange(event) {
        // const { name, defaultValue } = event.target;
        let fieldName = event.target.name;
        let fielddefaultValue = event.target.value;
        let fieldId = event.target.id;
        setModPlant({...modPlant, [fieldName]: fielddefaultValue});
        setThisPlantId(fieldId);
        console.log(fieldName, fielddefaultValue, fieldId);
        console.log(modPlant);
        setButtonColor('button-pending');
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(modPlant);
        console.log(thisPlantId);

        setButtonColor('button-submitted');

        PlantAPI.updatePlant(
            thisPlantId,
            {
            name: modPlant.name,
            botanicalName: modPlant.botanicalName,
            status: modPlant.status,
            location: modPlant.location,
            locationSec: modPlant.locationSec,
            locationPreferred: modPlant.locationPreferred,
            waterPref: modPlant.waterPref,
            sunlight: modPlant.sunlight,
            plantType: modPlant.plantType,
            trouble: modPlant.trouble,
            overwinter: modPlant.overwinter,
            needsCare: modPlant.needsCare,
            humidity: modPlant.humidity,
            tempLow: modPlant.tempLow,
            tempHigh: modPlant.tempHigh,
            hardiness: modPlant.hardiness,
            pH: modPlant.pH,
            soilContent: modPlant.soilContent,
            cycle: modPlant.cycle,
            hardinessZoneMin: modPlant.hardinessZoneMin,
            hardinessZoneMax: modPlant.hardinessZoneMax,
            lastPotted: modPlant.lastPotted,
            lastWatered: modPlant.lastWatered,
            waterRate: modPlant.waterRate,
            propogating: modPlant.propogating,
            imgURL: modPlant.imgURL,
            links: modPlant.links,
            notes: modPlant.notes,
            description: modPlant.description,
            createdAt: modPlant.createdAt,

        })
            .then(res => {
                setModPlant(null);
                setThisPlantId(null);
                setButtonColor("button-submitted");
                // setUpdatedDates([...updatedDates])
                // setThisPlant({...thisPlant, modPlant});
                // setThisPlantId(thisPlantId);
                // setButtonColor('button-not-submitted');
                // setUpdatedDates(p.plant.lastWatered)
                console.log("submitted plant detail update", res)
                // p.setUpdate(currentDate);
                // setUpdatedMessage(" Details saved! " + currentDate);
                    // setTimeout(function(){ 
                    //     window.location.reload(); }, 2000)
                    // p.setUpdate("DB updated at: " + currentDate);
                // setUpdated(true)
            })
            .catch(err => console.log(err))

        

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

            <h1>Editing</h1>

            {readyPlants ?
            <>
                {/* <PlantBlock 
                    plants={readyPlants}
                /> */}


                    <div className="by-editing-plants-container">
                        <div className="by-editing-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header planning-sort-option" title="name" onClick={sortColumn}>Name<span className="ustyle">&#9650;</span></th>
                                    {/* <th className="watering-col-header planning-sort-option" title="name" onClick={sortColumn}>Name<span className="ustyle">&#9650;</span></th> */}
                                    <th className="watering-col-header" title="botanicalName" onClick={sortColumn}>Botanical Name<span className="ustyle">&#9650;</span></th>
                                    {/* <th className="watering-col-header planning-sort-option" title="status" onClick={sortColumn}>Status<span className="ustyle">&#9650;</span></th> */}
                                    <th className="watering-col-header planning-sort-option" title="daysago" onClick={sortColumn}>Last Watered<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Water Rate</th>
                                    <th className="watering-col-header planning-sort-option" title="location" onClick={sortColumn}>Location<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header" title="locationSec" onClick={sortColumn}>Location Secondary<span className="ustyle">&#9650;</span></th>
                                    <th className="watering-col-header"></th>
                                </tr>
                            </thead>


                            <tbody className="editing-details">

                                {readyPlants.map(plants => (
                                    <tr key={plants._id}>
                                        <th className="editing-details">
                                            <input 
                                                type="checkbox" 
                                                name="today"
                                                id={plants._id} 
                                                // defaultChecked={false}
                                                // checked={checkedVal}
                                                onChange={handleInputChange}/>
                                        </th>
                                        <th 
                                            className="plant-table-row editing-details"   
                                            id={plants._id} 
                                            onClick={handleClick}>
                                                {plants.name}
                                        </th>
                                        {/* <th className="editing-details">
                                            <input 
                                                type="textarea"
                                                name="name"
                                                id={plants._id}
                                                defaultValue={plants.name}
                                                className="editing-details edit-details-name"
                                                onChange={handleInputChange}
                                                />
                                        </th> */}
                                        <th className="editing-details"> 
                                            <input 
                                                type="textarea"
                                                name="botanicalName"
                                                id={plants._id}
                                                defaultValue={plants.botanicalName}
                                                className="editing-details edit-details-botanical"
                                                onChange={handleInputChange}
                                                />  
                                        </th>
                                        {/* <th className="editing-details">
                                            <select
                                                name="status"
                                                className="editing-details edit-details-status"
                                                id={plants._id}
                                                onChange={handleInputChange}>
                                                    <option>{plants.status}</option>
                                                    <option> </option>
                                                    <option>inactive</option>
                                                    <option>in progress</option>
                                            </select>
                                        </th> */}
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}> 
                                                {plants.lastWatered && plants.lastWatered.length > 0 ? waterDateParse(plants.lastWatered[plants.lastWatered.length - 1]) + " day(s) ago" : "not yet watered"} 
                                        </th>
                                        <th 
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 1 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 2]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
                                        </th>
                                        <th className="editing-details">
                                            <input 
                                                type="textarea"
                                                name="waterRate"
                                                id={plants._id}
                                                defaultValue={plants.waterRate}
                                                className="editing-details edit-details-waterRate"
                                                onChange={handleInputChange}
                                                /> 
                                        </th> 
                                        <th 
                                            className="water-metrics editing-details" 
                                            > 
                                                <select
                                                    name="location"
                                                    className="editing-details edit-details-location"
                                                    id={plants._id}
                                                    onChange={handleInputChange}>
                                                    <option>{plants.location}</option>
                                                    <option>none</option>
                                                    <option>indoor</option>
                                                    <option>outdoor</option>
                                                    <option>indoor and outdoor</option>
                                                </select>
                                        </th>
                                        <th 
                                            className="water-metrics editing-details" 
                                            >
                                                <select
                                                    name="locationSec"
                                                    className="editing-details"
                                                    id={plants._id}
                                                    onChange={handleInputChange}>
                                                    <option>{plants.locationSec}</option>
                                                    <option></option>
                                                    <option>none</option>
                                                    <option>bathroom</option>
                                                    <option>bedroom</option>
                                                    <option>dining room</option>
                                                    <option>dining room east case</option>
                                                    <option>dining room south case</option>
                                                    <option>dining room windowsill</option>
                                                    <option>terrarium large</option>
                                                    <option>kitchen</option>
                                                    <option>kitchen windowsill</option>
                                                    <option>living room</option>
                                                    <option>living room aquarium shelf</option>
                                                    <option>living room east case</option>
                                                    <option>living room east case short</option>
                                                    <option>living room north case</option>
                                                    <option>living room west case</option>
                                                    <option>living room windowsill</option>
                                                </select>
                                        </th>
                                        <th
                                            className="water-metrics editing-details" 
                                            id={plants._id}>
                                                <button style={{backgroundColor: 'green'}}><FaEdit className="fa-exl" id={plants._id}/></button>
                                                <button style={{backgroundColor: '#78A4CF'}} onClick={handleFormSubmit} className="edit-update"><FaSave className="fa-exl" id={plants._id}/></button>
                                        </th>
                                        

                                    </tr>
                                ))}
                             
                                           
                              
                            </tbody>
                            </table>
                            <div>
                            {/* <span className="plant-details-label">Select Date </span>
                            
                                <input
                                    type="date"
                                    name="lastWatered"
                                    defaultValue={todaysDate}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/> */}
                            </div>
                            
            
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

                </>: <p>Loading...</p>
            }
            

        </div>
        
    )
};

export default PlantEditingBlock;
