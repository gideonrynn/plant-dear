import React, {useState, useEffect} from 'react'
import { FaPlus } from "react-icons/fa"
// import Plants from '../../pages/Plants'
import Plantling from '../../img/plantling.jpg'
import PlantAPI from "../../utils/PlantsAPI"
import HardinessAPI from "../../utils/HardinessAPI"
import './style.css'

function PlantDetails(p) {
    //in this component, we are only rendering one dedicated plant
    //passing in one plant with it's details, kind of like in review plant

    const [thisPlant, setThisPlant] = useState({});
    const [thisPlantId, setThisPlantId] = useState({});
    const [modPlant, setModPlant] = useState({});
    const [constructedDates, setConstructedDates] = useState([]);
    // const [updated, setUpdated] = useState(false);
    // const [onePlant, setOnePlant] = useState([])
    // const [onePlantId, setOnePlantId] = useState([])
    
    // handle modal probably will not need a modal
    // const [show, setShow] = useState(false);

    

    let currentDate = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let today = weekday[currentDate.getDay()];
    let yesterday = weekday[currentDate.getDay() - 1];
    console.log("today is " + today);

    

    //mapping
    // if todays date = Monday then button 1 = Monday, button 2 = Sunday, button 3
    // can use a function that renders the days of the week and creates the array of objects

    

    let colorDate = [
            {arrayValue: 0, dayOfWeek: "Sunday", color: "pink"},
            {arrayValue: 1, dayOfWeek: "Monday", color: "red"},
            {arrayValue: 2, dayOfWeek: "Tuesday", color: "orange"},
            {arrayValue: 3, dayOfWeek: "Wednesday", color: "yellow"},
            {arrayValue: 4, dayOfWeek: "Thursday", color: "green"},
            {arrayValue: 5, dayOfWeek: "Friday", color: "blue"},
            {arrayValue: 6, dayOfWeek: "Saturday", color: "purple"},
        ];
    
    console.log(colorDate[0]);



    console.log(p.plant);

    useEffect(() => {
        
        if(p.plant) {
            setThisPlant(p.plant);
            setThisPlantId(p.plant._id)
        }
        console.log("Plant details render triggered")
        createDateObjects();
        
    }, [p]);

    function createDateObjects() {
        let numberInWeek = 7;
        let prepConstructedDates = [];
        let dayOfWeek = "";
        let color = "";
        let daysAgo = "";
        
        for(let i = 0; i < numberInWeek; i++) {
            // console.log("this is the loop" + i);
            // let constructedDate = weekday[currentDate.getDay() - i];
            // console.log("this is the loop" + i + " and the constructedDate " + constructedDate);

            let date = new Date()
            date.setDate(date.getDate() - i);
            let day = date.getDay();
            console.log("the date " + date + " and the day is " + day);

            switch (day) {
                case 0:
                  dayOfWeek = "Sunday";
                  color = "pink";
                  daysAgo = 0;
                  break;
                case 1:
                  dayOfWeek = "Monday";
                  color = "red";
                  break;
                case 2:
                   dayOfWeek = "Tuesday";
                   color = "orange";
                  break;
                case 3:
                  dayOfWeek = "Wednesday";
                  color = "yellow";
                  break;
                case 4:
                  dayOfWeek = "Thursday";
                  color = "green";
                  break;
                case 5:
                  dayOfWeek = "Friday";
                  color = "blue";
                  break;
                case 6:
                  dayOfWeek = "Saturday";
                  color = "purple";
              }
            prepConstructedDates.push({"arrayValue": date.getDay(), "dayOfWeek": dayOfWeek, "color": color, "daysAgo": i});
            
        };
        console.log(prepConstructedDates);
        setConstructedDates(prepConstructedDates);
    };

    function handleInputChange(event) {
        // const { name, defaultValue } = event.target;
        let fieldName = event.target.name
        let fielddefaultValue = event.target.value
        setModPlant({...modPlant, [fieldName]: fielddefaultValue})
        console.log(fieldName, fielddefaultValue)
        console.log(modPlant);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(modPlant)
        // console.log(thisPlantId)
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
            propogating: modPlant.propogating,
            imgURL: modPlant.imgURL,
            links: modPlant.links,
            notes: modPlant.notes,
            description: modPlant.description,
            createdAt: modPlant.createdAt,

        })
            .then(window.location.reload()
                // setUpdated(true)
            )
            .catch(err => console.log(err))

        

    }

    // function handleDatesInput(event) {
    //     // const { name, defaultValue } = event.target;
    //     let fieldName = event.target.name
    //     let fielddefaultValue = event.target.value
    //     setModPlant({...modPlant, [fieldName]: fielddefaultValue})
    //     console.log(fieldName, fielddefaultValue)
    //     console.log(modPlant);
    // };
    

    // probably will not need modal
    // function handleClose() {
    //     setShow(false);
    // }

    // function handleShow() {
    //     setShow(true)
    // }

    //function loadThisPlant() {
        //console.log(p)
        // sort plants in alphabetical order
        //let activeSorted = p.plants.sort((a,b) => a.name > b.name ? 1: -1);
        //setThisPlant(activeSorted);
        // console.log(p.plants);

        //let inactiveSorted = p.inactive.sort((a,b) => a.name > b.name ? 1: -1);
        //setThisPlantInact(inactiveSorted);
        // console.log(p.inactive)

        // console.log(p)

    //}

    function updateWaterDate(id, days) {
        let date = new Date();
        date.setDate(date.getDate() - days);
        let newISODate = date.toISOString();
        let newDate = newISODate.split('T')[0];
        console.log(newDate);
        PlantAPI.updatePlantWaterDate(
            {
                ids: [id],
                lastWatered: newDate,
            })
            .then(window.location.reload())
            .catch(err => console.log(err))
    }

    function deletePlant(id) {
    
        // console.log(id)
        PlantAPI.deletePlant(id)

    }

    // function getNumberOfDays(start, end) {
    //     const date1 = new Date(start);
    //     const date2 = new Date(end);
    
    //     // One day in milliseconds
    //     const oneDay = 1000 * 60 * 60 * 24;
    
    //     // Calculating the time difference between two dates
    //     const diffInTime = date2.getTime() - date1.getTime();
    
    //     // Calculating the no. of days between two dates
    //     const diffInDays = Math.round(diffInTime / oneDay);
    
    //     return diffInDays;
    // }

    return (
        <>
 
            {/* <h3>All growing plant dears ({p.actcounter})</h3> */}
            {/* <hr/> */}
            {!thisPlant ? null :

                <div key={thisPlant._id} >
                    <div className="plant-details-section plant-details-card-y">

                        <div className="column plant-details-card-y">
                            {/* <form onSubmit={handleFormSubmit}> */}
                            <div className="row">
                                <div className="plant-details-header">
                                    <div className="plant-details-group">
                                        <input 
                                            type="textarea"
                                            name="name"
                                            defaultValue={thisPlant.name}
                                            className="plant-details-name"
                                            onChange={handleInputChange}
                                            />
                                    </div>
                                    <div className="plant-details-group">
                                        <input 
                                            type="textarea"
                                            name="botanicalName"
                                            defaultValue={thisPlant.botanicalName}
                                            className="plant-details-botanical"
                                            onChange={handleInputChange}
                                            />    
                                    </div>
                                    <div className="plant-details-group">
                                    <img src={thisPlant.imgURL ? `/img/${thisPlant.imgURL}` : Plantling} 
                                        alt="plant"
                                        height="150px" 
                                        width="150px"
                                        className="plant-details-imgurl"
                                        />
                                    </div>
                                </div>
                                
 
                            </div>
                            
                            
                            <div className="row plant-details-section">
                                <div className="column">
                                    <div className="plant-details-group">
                                        <p className="plant-details-label">Description</p>
                                        <textarea
                                            defaultValue={thisPlant.description}
                                            name="description"
                                            className="plant-textarea plant-card-details plant-description"
                                            id="description"
                                            onChange={handleInputChange}
                                            >
                                        </textarea>
                                    </div>

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
                                        <p className="plant-details-label">Links</p>
                                        <input
                                                defaultValue={thisPlant.links && thisPlant.links.length > 1 ? thisPlant.links.map(option => (<p><a href={option} target="_blank" rel="noopener noreferrer">{option}</a></p>)) : thisPlant.links}
                                                name="links"
                                                className="plant-details"
                                                onChange={handleInputChange}
                                                /> 
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="column plant-details-left">

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
                                    {/* <p>Last Potted: {thisPlant.lastPotted}</p> */}
                                    <div className="plant-details-group">
                                        <p className="plant-details-label">Sunlight</p>
                                            <select
                                            name="sunlight"
                                            className="plant-details"
                                            onChange={handleInputChange}>
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
                                            onChange={handleInputChange}>
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
                                </div>
                                <div className="column plant-details-right">
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
                                    <div className="plant-details-group"> 
                                        <p className="plant-details-label">CreatedAt</p>
                                            <input 
                                                className="plant-details"
                                                defaultValue={thisPlant.createdAt ? thisPlant.createdAt.split('T')[0] : thisPlant.createdAt}
                                                // onChange={handleInputChange}
                                                readOnly/>
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
                            </div>
                            <div className="row">
                                <div className="column">
                                    <div className="plant-details-group"> 
                                        <p className="plant-details-label">Notes</p>
                                        <textarea
                                            defaultValue={thisPlant.notes}
                                            name="notes"
                                            className="plant-textarea plant-card-details plant-description"
                                            id="notes"
                                            onChange={handleInputChange}/>
                                    </div>        
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <div className="plant-details-group"> 
                                        <p className="plant-details-label">Tasks</p>
                                        <p>Here is where I will put tasks</p>
                                    </div>
                                    <div>
                                        {/* add task */}
                                    </div>
                                </div>
                            </div>

                            <div className="row button-section">
                                <div className="column">
                                    {/* <div className="color-coding">
                                        <p className="button-section-header"><b>Color Coding</b></p>
                                        <p style={{backgroundColor: 'yellow'}} className="color-coding-details">Monday = yellow</p>
                                        <p style={{backgroundColor: 'green'}} className="color-coding-details">Tuesday = green</p>
                                        <p style={{backgroundColor: 'blue'}} className="color-coding-details">Wednesday = blue</p>
                                        <p style={{backgroundColor: 'purple'}} className="color-coding-details">Thursday = purple</p>
                                        <p style={{backgroundColor: 'pink'}} className="color-coding-details">Friday = pink</p>
                                        <p style={{backgroundColor: 'red'}} className="color-coding-details">Saturday = red</p>
                                        <p style={{backgroundColor: 'orange'}} className="color-coding-details">Sunday = orange</p>
                                    </div> */}
                                    <div className="plant-details-group">
                
                                        
                                    </div>
                                    {/* <ul>
                                        <li className="plant-card-details">
                                        <p className="button-section-header"><b>Watered</b></p>
                                        <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(thisPlant._id, 0)} className="water-button">Today({today})</button>
                                        <button style={{backgroundColor: '#91AFF5'}} onClick={() => updateWaterDate(thisPlant._id, 1)} className="water-button">{yesterday}</button>
                                        <button style={{backgroundColor: '#7A9AE3'}} onClick={() => updateWaterDate(thisPlant._id, 2)} className="water-button">Two Days</button>
                                        <button style={{backgroundColor: '#799EE2'}} onClick={() => updateWaterDate(thisPlant._id, 3)} className="water-button">Three Days</button>
                                        <button style={{backgroundColor: '#799EE2'}} onClick={() => updateWaterDate(thisPlant._id, 4)} className="water-button">Four Days</button>
                                        <button style={{backgroundColor: '#3D64BD'}} onClick={() => updateWaterDate(thisPlant._id, 7)} className="water-button">One Week</button>
                                    </li>
                                    
                                    </ul> */}
                                    <div className="button-section">
                                        <p className="button-section-header"><b>Watered</b></p>
                                        <p className="plant-details-comment">Last Watered {thisPlant.lastWatered && thisPlant.lastWatered.length > 0 ? Math.round((currentDate.getTime() - new Date(thisPlant.lastWatered[thisPlant.lastWatered.length - 1]).getTime())/ oneDay) + " day(s) ago on " : "not yet watered"} {thisPlant.lastWatered && thisPlant.lastWatered.length > 0 ? thisPlant.lastWatered[thisPlant.lastWatered.length - 1].split('T')[0] : null}</p>
                                        <div>{constructedDates.length > 0 ? 
                                            constructedDates.map(dateDetails => (
                                                <button 
                                                    className="water-button" 
                                                    style={thisPlant.lastWatered && thisPlant.lastWatered.length > 0 && Math.round((currentDate.getTime() - new Date(thisPlant.lastWatered[thisPlant.lastWatered.length - 1]).getTime())/ oneDay) === dateDetails.daysAgo ?
                                                        {backgroundColor: "lightgrey", fontStyle: "italic"} : {backgroundColor: dateDetails.color}} 
                                                    onClick={() => updateWaterDate(thisPlant._id, dateDetails.daysAgo)}
                                                    >
                                                        {dateDetails.daysAgo === 0 ? "Today"
                                                        : dateDetails.daysAgo === 1 ? "Yesterday"
                                                        : dateDetails.dayOfWeek + " (-" + dateDetails.daysAgo + ")"}
                                                </button>
                                        )): "rendering"}
                                        </div>
                                        <div className="plant-details-group">
                                            <p className="plant-details-comment">Specific date</p>
                                            <input
                                                type="date"
                                                name="lastWatered"
                                                className="plant-details"
                                                onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                            </div>

                            <div className="row button-section">
                                
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
                            <button type="submit" onClick={handleFormSubmit}>Save</button><span className="last-submitted"></span>
                          
                        </div>

                    </div>
                        
                </div>
                

            }
        </>
    )

                    
} 

export default PlantDetails;