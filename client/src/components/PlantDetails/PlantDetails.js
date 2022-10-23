import React, { useState, useEffect} from 'react'
// import { FaPlus } from "react-icons/fa"
import Plantling from '../../img/plantling.jpg'
import PlantAPI from "../../utils/PlantsAPI"
import { useNavigate } from "react-router-dom";
import { 
        // date, 
        getDifferenceInDays, 
        getLocalDate, 
        // getLongDayOfTheWeek,
        getLongDayOfTheWeekAndColor,
        // getNumberDayOfWeek, 
        // parseToYYYYMMDD 
        } from "../../utils/DateUtils"
import './PlantDetails.css'

function PlantDetails(p) {
    /*Description: rendering one dedicated plant passed in from the Plant Detail parent Page
    * passing in one plant with it's details, kind of like in review plant
    * Successfully triggering re-rendering when certain items update, but the current structure
    of the code is just reapply unchanged values, and the new ones get overwritten
    In addition, the parent page is not getting the updated context that contains the new date value 
    * set modal to display messages on submission of updates, like deletions, prompts, etc
    * Should this only be template-focused? That would be convenient, would make the code cleaner to have the handling elsewhere*/

    let date = getLocalDate(new Date());

    console.log("PlantDetails component initialized");

    const navigate = useNavigate();

    const [thisPlant, setThisPlant] = useState({});
    const [thisPlantId, setThisPlantId] = useState({});
    const [modPlant, setModPlant] = useState({});
    const [constructedDates, setConstructedDates] = useState([]);;
    const [buttonColor, setButtonColor] = useState('button-not-submitted');
    const [viewVisibility, setViewVisibility] = useState('plant-details-visible');
    const [editVisibility, setEditVisibility] = useState('plant-details-hidden');
    const [updatedMessage, setUpdatedMessage] = useState();

    const allDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    //will set state for updateDates from load of this plant
    //will try using remove and update
    const [updatedDates, setUpdatedDates] = useState([]);
    const [tempDates, setTempDates] = useState([]);

    useEffect(() => {
        
        // when there is no data in "thisPlant", which is populated once plant data has been passed into this component
        // and there is data being passed in 
        // set the plant id

        // console.log("This plant", thisPlant.length);
        if(typeof thisPlant.length === "undefined" && p.plant) {
            
            setThisPlantId(p.plant._id);

            // only want these values to update from p if there are actual changes in tempDates
            // if there are tempDate values, set the lastWateredList to the tempDates
            // else set them to the list being passed in to the component, which would have come from the Plant Detail page
            let lastWateredList = "";
            if(tempDates && tempDates.length > 0) {
                console.log("Temp dates chosen for re-rendering")
                lastWateredList = tempDates;
            } else {
                setThisPlant(p.plant);
                lastWateredList = p.plant.lastWatered;
            }
            // console.log("The last watered dates for this plant are", lastWateredList);
            setUpdatedDates(lastWateredList);
            setTempDates(lastWateredList);
        }
        console.log("PlantDetails rerendered");
        createDateObjects();
        
    }, [p, updatedMessage]);

    //create objects that can be used to map the buttons used for updating watering dates
    function createDateObjects() {
        let numberInWeek = 7;
        let prepConstructedDates = [];
        let dayOfWeek = "";
        let color = "";
        // let daysAgo = "";
        
        
        for(let i = 0; i < numberInWeek; i++) {

            //figure out why this doesn't map correctly when the date initialized outside of the loop
            let date = getLocalDate(new Date());
            date.setDate(date.getDate() - i);
            let dayAsNumber = date.getDay();

            let { yourDayofWeek, color } = getLongDayOfTheWeekAndColor(dayAsNumber);

            prepConstructedDates.push({
                    "arrayValue": date.getDay(), 
                    "dayOfWeek": yourDayofWeek, 
                    "color": color, 
                    "daysAgo": i
                });
            
        };
  
        setConstructedDates(prepConstructedDates);
        // console.log(prepConstructedDates);
    };

    // used for capturing changes into modPlant state variable that are later submitted to db when handleformsubmit runs
    function handleInputChange(event) {
        // const { name, defaultValue } = event.target;
        let fieldName = event.target.name;
        let fielddefaultValue = event.target.value;
        setModPlant({...modPlant, [fieldName]: fielddefaultValue});
        // console.log(fieldName, fielddefaultValue);
        // console.log(modPlant);
    };

    // submits updates collected in modplants to the db
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
            waterAdHoc: modPlant.waterAdHoc,
            waterRate: modPlant.waterRate,
            checkRate: modPlant.checkRate,
            propogating: modPlant.propogating,
            imgURL: modPlant.imgURL,
            links: modPlant.links,
            notes: modPlant.notes,
            description: modPlant.description,
            createdAt: modPlant.createdAt,

        })
            .then(res => {
                setUpdatedDates([...updatedDates]);
                setThisPlant({...thisPlant, modPlant});
                setThisPlantId(thisPlantId);
                setButtonColor('button-not-submitted');
                console.log("submitted plant detail update", res)
                p.setUpdate(date);
                setUpdatedMessage(" Details saved! " + date)
            })
            .catch(err => console.log(err))

    }


    function updateWaterDate(id, days) {

        //this is a lot of date handling. can I simplify this somewhere?
        let date = getLocalDate(new Date());
        console.log(days);
        date.setDate(date.getDate() - days);
        console.log(date);
        let newLocaleDate = date.toLocaleDateString("en-CA");
        console.log("newLocaleDate: ", newLocaleDate);
        let newDate = newLocaleDate.split(',')[0];
        let allNewDates = [...tempDates, newDate];
        console.log(allNewDates);
        console.log(newDate);
        PlantAPI.updatePlantWaterDate(
            {
                ids: [id],
                lastWatered: newDate,
                waterAdHoc: ""
            })
            .then(res => {
                console.log("water date updated on plant details page", res)
                setUpdatedMessage(`Last watered date for ${thisPlant.name} updated to ${newDate}`)
                //this is triggering set update to the context, this may be unecessary here if context is not being passed in. but maybe the context is visible on another page
                p.setUpdate(date);
                setUpdatedDates([...updatedDates, newDate])
                setTempDates([...tempDates, newDate])
                setThisPlant({...thisPlant, lastWatered: allNewDates})
        })
            .catch(err => console.log(err))
    }

    //once plant has been deleted, display message and redirect to plants page
    function deletePlant(id) {
    
        PlantAPI.deletePlant(id);
        setUpdatedMessage('  Plant has been deleted. ');
        setTimeout(function(){ 
            navigate("/plants");
            // window.location.reload()
                 }, 2000);
    }

    function handleDateUpdateSubmit(event) {
        event.preventDefault();

        // console.log(updatedDates);
        console.log(thisPlant);

        // setButtonColor('button-submitted');
        console.log("Check updated dates before submitting to updatedDates", tempDates);

        PlantAPI.updatePlant(
            thisPlantId,
            {
            lastWatered: tempDates,
        })
            .then(res => {
                console.log("submitted plant detail update", res)
                p.setUpdate("DB updated at: " + date)
                setUpdatedMessage(" Details saved! " + date)
                setUpdatedDates([...tempDates]);
                setThisPlant({...thisPlant, lastWatered: tempDates})
            })
            .catch(err => console.log(err.message))

    }

    function handleWateringDate(event) {
        event.preventDefault();

        let updatedList = [...tempDates];
        // console.log(event.target, event.target.value, event.target.name, event.target.id);
        let fieldName = event.target.name;
        let newFieldValue = event.target.value;
        let fieldIndex = event.target.id;

        if(fieldName === "remove") {
            console.log("Remove the date from this index in the list");
            updatedList.splice(fieldIndex, 1);
            // console.log(updatedList);
        }
        if(fieldName === "lastWateredDate" && fieldIndex !== "") {
            // console.log("Update" + updatedDates[fieldIndex] + "to this date: ", newFieldValue);
            updatedList[fieldIndex] = newFieldValue;
        }

        if(fieldName === "newLastWateredDate" && fieldIndex === "") {
            console.log("This does not yet have an index value, push to array");
            updatedList.push(newFieldValue);
        }

        let updatedSortedList = updatedList.sort((a,b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })
        // console.log(updatedSortedList);
        //setting with spread operator prompts a rerender that shows the change, like removal, right away on click
        setTempDates([...updatedSortedList]);
        // console.log(updatedDates);
        // setUpdatedDates(updatedSortedList);
    }

    function getWaterDay(day) {
        // console.log("Day is " + day)
        // console.log("New date constructor says" + new Date(day).getDay())
        // console.log("day of the week is: " + allDays[new Date(day.replace(/-/g, '/')).getDay()])
        let dayOfWeek = allDays[new Date(day.replace(/-/g, '/')).getDay()]
        return dayOfWeek;
    }

    function showEdit(event) {
        event.preventDefault();
        console.log(event);
        setViewVisibility('plant-details-hidden');
        setEditVisibility('plant-details-visible plant-detail-editing');
    }

    function hideEdit() {
        setViewVisibility('plant-details-visible');
        setEditVisibility('plant-details-hidden');
    }

    return (
        <>
 
            {/* <h3>All growing plant dears ({p.actcounter})</h3> */}
            {/* <hr/> */}
            {!thisPlant ? null :
                <>
              
                    <div className="plant-details-section">

                        <div className="plant-details-header">
                                    
                            <div className="plant-details-group">
                                <img src={thisPlant.imgURL ? `/img/${thisPlant.imgURL}` : Plantling} 
                                    alt="plant"
                                    height="150px" 
                                    width="150px"
                                    className="plant-details-imgurl"
                                    />
                            </div>
                                    
                        </div>
                        
                        
                        {/* Plant specific data */}
                        <div className="plant-specific-data">
                            <div className="heading-section">
                                    <h1 className="plant-details-section-header">Overview</h1>
                                    <button 
                                        className={"plant-details-overview-button " + buttonColor}
                                        onClick={(e) => {hideEdit(e)}}>Save and Stop Editing</button>
                            </div>
                         
                            <hr></hr>
                            <div className="plant-details-group">
                                            <p className="plant-details-comment">Next Water Date</p>
                                            <input 
                                                type="date"
                                                name="waterAdHoc"
                                                className="plant-details-specific"
                                                defaultValue={thisPlant.waterAdHoc ? thisPlant.waterAdHoc.split('T')[0] : null}
                                                onChange={handleInputChange}
                                            />
                                            <p><button type="submit" className={"water-button " + buttonColor} onClick={handleFormSubmit}>Save</button></p>
                                            <p>{updatedMessage}</p>
                                        </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Description</p>
                                <p 
                                    className={"plant-specific-view " + viewVisibility}
                                    onClick={(e) => showEdit(e)}>
                                    {thisPlant.description}
                                </p>
                                <textarea
                                    defaultValue={thisPlant.description}
                                    name="description"
                                    className={"plant-textarea plant-card-details plant-description plant-specific-edit " + editVisibility}
                                    id="description"
                                    onChange={handleInputChange}
                                    >
                                </textarea>
                                
                            </div>
                        
                            <div className="plant-details-group">
                                <p className="plant-details-label">Links</p>
                                {thisPlant.links && thisPlant.links.length > 1 ? 
                                    thisPlant.links.map(option => (
                                            <a href={option}
                                                className={"plant-specific-view " + viewVisibility}
                                                onClick={(e) => showEdit(e)}>
                                                {option}
                                            </a>)) 
                                    : <a href={thisPlant.links}
                                        className={"plant-specific-view " + viewVisibility}
                                        onClick={(e) => showEdit(e)}>
                                        {thisPlant.links}
                                </a>}
                                <input
                                    defaultValue={thisPlant.links && thisPlant.links.length > 1 ? thisPlant.links.map(option => (<p><a href={option} target="_blank" rel="noopener noreferrer">{option}</a></p>)) : thisPlant.links}
                                    name="links"
                                    className={"plant-details " + editVisibility}
                                    onChange={handleInputChange}
                                /> 
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Plant Name</p>
                                <input 
                                    type="textarea"
                                    name="name"
                                    defaultValue={thisPlant.name}
                                    className="plant-details"
                                    onChange={handleInputChange}
                                    />
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Botanical Name</p>
                                <input 
                                    type="textarea"
                                    name="botanicalName"
                                    defaultValue={thisPlant.botanicalName}
                                    className="plant-details"
                                    onChange={handleInputChange}
                                    />    
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Plant Type</p>
                                <select
                                    name="plantType"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.plantType}</option>
                                        <option>none</option>
                                        <option>herb</option>
                                        <option>houseplant</option>
                                        <option>succulent</option>
                                        <option>vegetable</option>
                                        <option>tbd</option>
                                </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Plant ID (placeholder)</p>
                                <input 
                                    className="plant-details"
                                    defaultValue={thisPlant._id}
                                    readOnly/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Sunlight</p>
                                <select
                                name="sunlight"
                                className="plant-details"
                                onChange={handleInputChange}
                                >
                                    <option>{thisPlant.sunlight && thisPlant.sunlight.length > 1 ? thisPlant.sunlight.map(option => (<p key={option._id}>{option}</p>)) : thisPlant.sunlight}</option>
                                    <option>none</option>
                                    <option>indirect</option>
                                    <option>low</option>
                                    <option>medium</option>
                                    <option>bright</option>
                                    <option>part shade</option>
                                    <option>part sun</option>
                                    <option>full sun</option>
                                    <option>full sun to part shade</option>
                                </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Humidity</p>
                                <select
                                    name="humidity"
                                    className="plant-details"
                                    onChange={handleInputChange}
                                >
                                    <option>{thisPlant.humidity || "none listed"}</option>
                                    <option>low</option>
                                    <option>moderate</option>
                                    <option>high</option>
                                </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">pH</p>
                                <input 
                                    name="ph"
                                    className="plant-details"
                                    defaultValue={thisPlant.pH}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Preferred Soil Content (placeholder)</p>
                                <input 
                                    name="soilContent"
                                    className="plant-details"
                                    defaultValue={thisPlant.soilContent}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Hardiness Zone (Range Min)</p>
                                <select
                                name="hardinessZoneMin"
                                className="plant-details"
                                onChange={handleInputChange}>
                                    <option>{thisPlant.hardinessZoneMin}</option>
                                    <option>1a</option>
                                    <option>1b</option>
                                    <option>2a</option>
                                    <option>2b</option>
                                    <option>3a</option>
                                    <option>3b</option>
                                    <option>4a</option>
                                    <option>4b</option>
                                    <option>5a</option>
                                    <option>5b</option>
                                    <option>6a</option>
                                    <option>6b</option>
                                    <option>7a</option>
                                    <option>7b</option>
                                    <option>8a</option>
                                    <option>8b</option>
                                    <option>9a</option>
                                    <option>9b</option>
                                    <option>10a</option>
                                    <option>10b</option>
                                    <option>11a</option>
                                    <option>11b</option>
                                    <option>12a</option>
                                    <option>12b</option>
                                    <option>13a</option>
                                    <option>13b</option>
                                </select>
                            </div>
                            <div className="plant-details-group"> 
                                <p className="plant-details-label">Hardiness Zone (Range Max)</p>
                                <select
                                name="hardinessZoneMax"
                                className="plant-details"
                                onChange={handleInputChange}>
                                    <option>{thisPlant.hardinessZoneMax}</option>
                                    <option>1a</option>
                                    <option>1b</option>
                                    <option>2a</option>
                                    <option>2b</option>
                                    <option>3a</option>
                                    <option>3b</option>
                                    <option>4a</option>
                                    <option>4b</option>
                                    <option>5a</option>
                                    <option>5b</option>
                                    <option>6a</option>
                                    <option>6b</option>
                                    <option>7a</option>
                                    <option>7b</option>
                                    <option>8a</option>
                                    <option>8b</option>
                                    <option>9a</option>
                                    <option>9b</option>
                                    <option>10a</option>
                                    <option>10b</option>
                                    <option>11a</option>
                                    <option>11b</option>
                                    <option>12a</option>
                                    <option>12b</option>
                                    <option>13a</option>
                                    <option>13b</option>
                                </select>   
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Low Temp</p>
                                    <input 
                                        name="tempLow"
                                        className="plant-details"
                                        defaultValue={thisPlant.tempLow}
                                        onChange={handleInputChange}/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">High Temp</p>
                                <input 
                                    name="tempHigh"
                                    className="plant-details"
                                    defaultValue={thisPlant.tempHigh}
                                    onChange={handleInputChange}/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Hardy To (Temp)</p>
                                    <input 
                                        name="hardiness"
                                        className="plant-details"
                                        defaultValue={thisPlant.hardiness}
                                        onChange={handleInputChange}/>
                            </div>
                            <div className="plant-details-group"> 
                                <p className="plant-details-label">Cycle</p>
                                <select
                                name="cycle"
                                className="plant-details"
                                onChange={handleInputChange}>
                                    <option>{thisPlant.cycle}</option>
                                    <option>none</option>
                                    <option>annual</option>
                                    <option>biennial</option>
                                    <option>perennial</option>
                                </select>
                            </div>
                            <div className="plant-details-group"> 
                                <p className="plant-details-label">Image URL</p>
                                <input 
                                    className="plant-details"
                                    name="imgURL"
                                    defaultValue={thisPlant.imgURL}
                                    onChange={handleInputChange}/>
                            </div>
                        </div>

                        {/* Instance specific data */}
                        <div className="instance-specific-data">
                            <h1 className="plant-details-section-header">This Plant Dear</h1>
                            <hr></hr>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Status</p>
                                <select
                                    name="status"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.status}</option>
                                        <option> </option>
                                        <option>inactive</option>
                                        <option>in progress</option>
                                </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Plant ID</p>
                                <input 
                                    className="plant-details"
                                    defaultValue={thisPlant._id}
                                    readOnly/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Watering preference</p>
                                    
                                    <select
                                    name="waterPref"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.waterPref}</option>
                                        <option>dry</option>
                                        <option>moderate</option>
                                        <option>moist</option>
                                    </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Last Potted</p>
                                <input
                                    type="date"
                                    name="lastPotted"
                                    className="plant-details"
                                    defaultValue={thisPlant.lastPotted ? thisPlant.lastPotted.split('T')[0] : null}
                                    onChange={handleInputChange}/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Soil Content</p>
                                    <input 
                                        name="soilContent"
                                        className="plant-details"
                                        defaultValue={thisPlant.soilContent}
                                        onChange={handleInputChange}/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Trouble?</p>
                                    <select
                                    name="trouble"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.trouble || "not indicated"}</option>
                                        <option>Y</option>
                                        <option>N</option>
                                    </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Overwinter?</p>
                                    <select
                                    name="overwinter"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.overwinter || "not indicated"}</option>
                                        <option>Y</option>
                                        <option>N</option>
                                    </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Check Rate</p>
                                    <input 
                                        name="checkRate"
                                        className="plant-details"
                                        defaultValue={thisPlant.checkRate || "not indicated"}
                                        onChange={handleInputChange}/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Water Rate</p>
                                    <input 
                                        name="waterRate"
                                        className="plant-details"
                                        defaultValue={thisPlant.waterRate}
                                        onChange={handleInputChange}/>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Location</p>
                                    <select
                                    name="location"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.location}</option>
                                        <option>none</option>
                                        <option>indoor</option>
                                        <option>outdoor</option>
                                        <option>indoor and outdoor</option>
                                    </select>
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Location Secondary</p>
                                    <select
                                    name="locationSec"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.locationSec}</option>
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
                            </div>
                            <div className="plant-details-group">
                                <p className="plant-details-label">Location Preferred</p>
                                    <select
                                    name="locationPreferred"
                                    className="plant-details"
                                    onChange={handleInputChange}>
                                        <option>{thisPlant.locationPreferred}</option>
                                        <option>none</option>
                                        <option>indoor</option>
                                        <option>outdoor</option>
                                        <option>indoor and outdoor</option>
                                    </select>
                            </div>
                            <div className="plant-details-group"> 
                                <p className="plant-details-label">CreatedAt</p>
                                    <input 
                                        name="createdAt"
                                        className="plant-details"
                                        defaultValue={thisPlant.createdAt ? thisPlant.createdAt.split('T')[0] : thisPlant.createdAt}
                                        onChange={handleInputChange}
                                        //readOnly
                                        />
                            </div>
                            <div className="plant-details-group"> 
                                <p className="plant-details-label">UpdatedAt</p>
                                    <input 
                                    className="plant-details"
                                    defaultValue={thisPlant.updatedAt ? thisPlant.updatedAt.split('T')[0] : thisPlant.updatedAt}
                                    // onChange={handleInputChange}
                                    readOnly/>
                            </div>
                        </div> 
                                
                        <div className="plant-details-watering">
                            <div className="plant-details-group"> 
                                <p className="plant-details-label">Notes</p>
                                <textarea
                                    defaultValue={thisPlant.notes}
                                    name="notes"
                                    className="plant-textarea plant-card-details plant-description"
                                    id="notes"
                                    onChange={handleInputChange}/>
                            </div>        
  

                            <div className="plant-details-group"> 
                                <p className="plant-details-label">Tasks</p>
                                <p>Here is where I will put tasks</p>
                            </div>

                            <div className="row button-section">
                                <div className="column">

                                    <div className="button-section">
                                        <p className="button-section-header"><b>Watered</b></p>
                                        <p className="plant-details-comment">
                                            Last Watered {thisPlant.lastWatered && thisPlant.lastWatered.length > 0 ? getDifferenceInDays(thisPlant.lastWatered[thisPlant.lastWatered.length - 1]) + " day(s) ago on " : "not yet watered"} 
                                            {thisPlant.lastWatered && thisPlant.lastWatered.length > 0 ? getWaterDay(thisPlant.lastWatered[thisPlant.lastWatered.length - 1]) : null} {thisPlant.lastWatered && thisPlant.lastWatered.length > 0 ? thisPlant.lastWatered[thisPlant.lastWatered.length - 1] : null}</p> {/*getting the length to get the most recent entry in the array */}
                                        <div>{constructedDates.length > 0 ? 
                                            constructedDates.map(dateDetails => (
                                                <button 
                                                    className="water-button" 
                                                    style={thisPlant.lastWatered && thisPlant.lastWatered.length > 0 && getDifferenceInDays(thisPlant.lastWatered[thisPlant.lastWatered.length - 1]) === dateDetails.daysAgo ?
                                                        {backgroundColor: "lightgrey", fontStyle: "italic"} : {backgroundColor: dateDetails.color}} 
                                                    onClick={() => updateWaterDate(thisPlant._id, dateDetails.daysAgo)}
                                                    >
                                                        {dateDetails.daysAgo === 0 ? "Today"
                                                        : dateDetails.daysAgo === 1 ? "Yesterday"
                                                        : dateDetails.dayOfWeek + " (-" + dateDetails.daysAgo + ")"}
                                                </button>
                                        )): "rendering"}
                                        </div>
                                        {/* <div className="plant-details-group">
                                            <p className="plant-details-comment">Specific date</p>
                                            <input
                                                type="date"
                                                name="lastWatered"
                                                className="plant-details-specific"
                                                onChange={handleInputChange}/>
                                        </div> */}
                                        <div className="plant-details-group">
                                            <p className="plant-details-comment">Next Water Date</p>
                                            <input 
                                                type="date"
                                                name="waterAdHoc"
                                                className="plant-details-specific"
                                                defaultValue={thisPlant.waterAdHoc ? thisPlant.waterAdHoc.split('T')[0] : null}
                                                onChange={handleInputChange}
                                            />
                                            <p><button type="submit" className={"water-button " + buttonColor} onClick={handleFormSubmit}>Save</button></p>
                                            <p>{updatedMessage}</p>
                                        </div>
                                        <div className="plant-details-group">
                                            <p><b>All watering dates</b></p>
                                            <div className="">
                                                {tempDates ? tempDates.map((waterDate, index) =>
                                                    <>
                                                        <span>{getWaterDay(waterDate)}</span>
                                                        <input
                                                        type="date"
                                                        name="lastWateredDate"
                                                        className="plant-details-watering"
                                                        id={index}
                                                        // defaultValue={waterDates}
                                                        value={waterDate}
                                                        onChange={handleWateringDate}/>
                                                        <button name="remove" id={index} onClick={handleWateringDate}>Remove</button>
                                                        
                                                        <br></br>
                                                        
                                                    </>
                                                ) : <p>No last watered date</p>}
                                            
                                            <span>Add New Date</span>
                                                <input
                                                type="date"
                                                name="newLastWateredDate"
                                                className="plant-details-watering"
                                                // id={index}
                                                // defaultValue=""
                                                value=""
                                                onChange={handleWateringDate}/>
                                                </div>
                                            <br></br>
                                            <button className="water-button" onClick={handleDateUpdateSubmit}>Update Water Dates</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                            </div>
                                                            <br></br>
                                                            <br></br>
                            <div className="row button-section">
                                    <div className="column">
                                        <ul>
                                            <button type="submit" className={"water-button " + buttonColor} onClick={handleFormSubmit}>Save</button>
                                        </ul>
                                    </div>
                                
                                    <div className="column">
                                        <ul>
                                            <button style={{backgroundColor: '#3A6996'}} 
                                            className="water-button">Modify</button>
                                        </ul>
                                    </div>
                                    {/* <hr></hr> */}
                                    <div className="column">
                                        <ul>
                                            <button style={{backgroundColor: '#990000'}} onClick={() => deletePlant(thisPlant._id)} className="water-button">Delete</button>
                                        </ul>
                                    </div>
                               
                            </div>
                            <span className="last-submitted"></span>
                            <p>{updatedMessage}</p>
                        </div>
                        {/* </div> */}
                </div>
            </>
            }
        </>
    )

                    
} 

export default PlantDetails;