import React, {useState, useEffect} from 'react'
// import { useLocation } from "react-router-dom";
// import PlantBlockAll from "../PlantBlockAll/PlantBlock"
import PlantAPI from "../../utils/PlantsAPI"
import { useNavigate } from 'react-router-dom';
import './WaterByLocation.css'
// import { set } from 'mongoose';
import { 
    // date, 
    getDifferenceInDays, 
    getLocalDate, 
    // getLongDayOfTheWeek,
    getLongDayOfTheWeekAndColor,
    // getNumberDayOfWeek, 
    // parseToYYYYMMDD 
    } from "../../utils/DateUtils"


const WaterByLocation = (data) => {

    /*To do:
        *consider calendar view with plant name on calendar
        *calculated value for next water date 
        *show next water date here and allow submission of selected value versus
        *on hover of name, show photo of plant or other relevant details
        *may wrap this into "rooms" or sections of the apartment that have plants
    */

    console.log("ByLocation component initialized");

    const [plants, setPlants] = useState([]);
    // const [readyLocationPlants, setReadyLocationPlants] = useState([]);
    // let location = useLocation();
    const navigate = useNavigate();
    // let pathname = location.pathname.slice(1);

    // set date variables
    let date = new Date();
    date.setUTCHours(date.getUTCHours() - 5); //daylight savings 5, else 6
    date.setDate(date.getDate());
    let newISODate = date.toISOString();
    let todaysDate = newISODate.split('T')[0];
    // let localDate = date.toLocaleDateString("en-US", {timeZone: "America/Chicago"});
    // console.log("This is the local date", localDate);
    // One day in milliseconds, 1000 milliseconds in each seconds, 60 seconds for each minute, 60 minutes for each hour, 24 hours for each day
    const oneDay = 1000 * 60 * 60 * 24;

    const [ids, setIds] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [newLocation] = useState("all");
    const [updated] = useState(false);
    // const [checkedVal, setCheckedVal] = useState();
    // console.log(plants);

    useEffect(() => {

        setPlants(data.plants);
        
    }, [data.plants, updated])

    
    function handleClick(event, id) {
        // console.log("clicked", event.target.id);
        
        // console.log(id);
        navigate("/plantdetails",
        { state: { detail: event.target.id }});
    }

    function handleInputChange(event) {
        // const { name, defaultValue } = event.target;
        // let fieldName = event.target.name
        let fielddefaultValue = event.target.id
        let fieldCheckedValue = event.target.checked

        // console.log("This is the info I need right now", event.target, "and this is the value", fieldCheckedValue);
        
        if (fieldCheckedValue === true) {
            setIds([...ids, fielddefaultValue]);
            // setCheckedVal(true)
            // console.log(fieldName, fielddefaultValue)
        }
        
        // console.log(ids);
        // setCheckedVal(handleCheckedValue(fieldCheckedValue))

    };


    // function handleCheckedValue(checkedValue) {

    //     return !checkedValue;
    // }

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
                // let newReadyLocationPlants = plants;
                setIds([]);
                setSelectedDate("");
                setPlants(data.plants); 
                data.setUpdate(date);
                window.location.reload()
            })
            .catch(err => console.log(err))

        // console.log(newDate);
        // console.log(selectedDate);
        // console.log(ids);
        
    }

    // need function that will add lastwatered to object within the page
    // when navigating to another page, the context will update, because this change updates the db
    // function updateReadyLocationPlants() {

    //     let newReadyLocationPlants = readyLocationPlants.filter(i => !ids.includes(i._id));
    //     // console.log(newReadyPlants);
    //     setReadyLocationPlants(newReadyLocationPlants);

    // }

    return (
        <div className="by-location-section">

            {/* <h1>{newLocation !== "" ? newLocation : "Choose a location"}</h1> */}

            {newLocation !== "" ? 
               
                <>
                    <div className="by-location">
                        <div className="by-location-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header">Name</th>
                                    <th className="watering-col-header">Watering Pref</th>
                                    <th className="watering-col-header">Difference</th>
                                    <th className="watering-col-header">Watering Rate</th>
                                    <th className="watering-col-header">Last Watered</th>
                                    <th className="watering-col-header">Last Duration</th>
                                    <th className="watering-col-header">Previous Duration</th>
                                    

                                </tr>
                            </thead>


                            <tbody className="watering-details">

                                {plants.map(plants => (
                                    <tr key={plants._id} style={{ backgroundColor: plants.waterAdHoc ? getDifferenceInDays(plants.waterAdHoc.split('T')[0]) : ((getDifferenceInDays((plants.lastWatered && plants.lastWatered.length > 1 ? plants.lastWatered[plants.lastWatered.length - 1] : 0))) - plants.waterRate) >= 0 ? '#8ac8db' : plants.waterAdHoc ? getDifferenceInDays(plants.waterAdHoc.split('T')[0]) : ((getDifferenceInDays((plants.lastWatered && plants.lastWatered.length > 1 ? plants.lastWatered[plants.lastWatered.length - 1] : 0))) - plants.waterRate) >= -2 ? '#69af67' : plants.waterAdHoc ? getDifferenceInDays(plants.waterAdHoc.split('T')[0]) : ((getDifferenceInDays((plants.lastWatered && plants.lastWatered.length > 1 ? plants.lastWatered[plants.lastWatered.length - 1] : 0))) - plants.waterRate) >= -3 ? '#ede3d0' : ''}}>
                                        
                                        <th  className="watering-details" >
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
                                        <th className="watering-details">{plants.waterPref}</th>
                                        <th className="watering-details" >{plants.waterAdHoc ? getDifferenceInDays(plants.waterAdHoc.split('T')[0]) : ((getDifferenceInDays((plants.lastWatered && plants.lastWatered.length > 1 ? plants.lastWatered[plants.lastWatered.length - 1] : 0))) - plants.waterRate)}</th>
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
                                    defaultValue={todaysDate}
                                    className="plant-details-selected-date"
                                    onChange={(e) => setSelectedDate(e.target.value)}/>
                            </div>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>
            
                        </div>
       
                        
                    </div>
            
            </>: <p>Plants will show here based on their location</p>
       
            }
            
        </div>
    )
};

export default WaterByLocation;
