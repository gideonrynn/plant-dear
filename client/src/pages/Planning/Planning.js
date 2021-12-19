import React, { useEffect, useState, useContext } from "react";
// import PlantCard from "../../components/PlantCard"
import PlantBlock from "../../components/PlantBlock/PlantBlock"
// import { WeatherContext } from "../../context/WeatherContext"
import PlantAPI from "../../utils/PlantsAPI"
import { PlantContext } from "../../context/PlantContext"
import { useHistory } from 'react-router-dom';
import "./Planning.css";

function Planning () {

    /*Description: This is a temporary page for collecting information on plants to be watered by duration*/
    /*Todo: Rename and fold component(s) into existing page
    *update to get the last duration date where we've verified that that duration is OK*/

    console.log("Planning page initialized, with context");

    const { activePlants, setUpdate } = useContext(PlantContext);
    const history = useHistory();
    // console.log("number of active plants returned", activePlants.length);

    // Setting our component's initial state
    const [plantContext, ] = useState(activePlants);
    const [indoorPlants, setIndoorPlants] = useState([]);
    // const [outdoorPlants, setOutdoorPlants] = useState([]);
    const [readyPlants, setReadyPlants] = useState([]);
    const [upcomingPlants, setUpcomingPlants] = useState([]);
    const [otherPlants, setOtherPlants] = useState([]);
    const [comparison, setComparison] = useState(false);

    //date variables
    let date = new Date();
    //one day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    date.setDate(date.getDate());
    let newISODate = date.toISOString();
    let todaysDate = newISODate.split('T')[0];

    const [ids, setIds] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    // for handling search bar and input
    //* consider whether or not this is needed rather than input param passed into function *//
    // const [searchTerm, setSearchTerm] = useState('');

    
    // outdoor plants -- for now we don't care about these, because we are in winter, and want to get back data on indoor plants
    // let recentOutdoor = plantsByDate.filter(outdoor => { 
    //     return outdoor.location === "outdoor"
    // });



    // const uniquePlants = [...new Set(plantsByDate.map(data => data.name))]
    
    // console.log(uniquePlants);
    // const mostRecent = plantsByDate.slice(0, 20);
    // const mostRecentIndoor = recentIndoor.slice(0, 15);
    // const mostRecentOutdoor = recentOutdoor.slice(0, 15);
    // const nextRecentFive = plantsByDate.slice(1, 14);
    // console.log(mostRecent, nextRecentFive);


    // Load all plants and store them within setPlants
    useEffect(() => {
        loadPlants();
        console.log("Planning page rerendered");
    
    },[])

    function loadPlants() {
        // by default, show all plants returned from api
        // setUpdatedPlants(activePlants);

        if(plantContext.length > 0) {
            console.log("plant context length is greater than zero")
            sortPlants(plantContext);
        } else {
            console.log("plant context length is not greater than zero yet")
        }

        // if(indoorPlants.length > 0) {
        //     //if we've received the indoor plants, we can now do the date comparisons
        //     console.log("indoorPlants length is  greater than zero, run comparison")
        //     runComparison();
        // } else {
        //     console.log("indoorPlants length is not greater than zero yet")
        // }
        
    }

    // take text entered in the search and filter current list of plants
    function sortPlants(input) {

        if(input) {
            // const filtered = activePlants.filter(actPlants => {
            //     return actPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
            //    })
    
            // const filteredInactive = inactivePlants.filter(inactPlants => {
            //     return inactPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
            //    })
            
            // setSearchTerm(input);
            // setUpdatedPlants(filtered);
            // setUpdatedInactivePlants(filteredInactive);
        
            // indoor plants
            let indoor = plantContext.filter(indoor => { 
                return indoor.location === "indoor"
            });

            setIndoorPlants(indoor);
            console.log(indoor)

            runComparison(indoor);
        }

    }

    function sortPlants2(input2) {

    };

      
    function handleClick(event, id) {
        // console.log("clicked", event.target.id);
        
        // console.log(id);
        history.push({
            pathname: "plantdetails",
            state: { detail: event.target.id }});
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

    function runComparison(indoor) {
        //need to do a date comparison to get an understanding of what needs to be watered
        //get the value of the last watered (ex/5 days) - later we want to get this where we've signed off the duration is OK
        //will need a loop to go through the plants by date
        console.log("runComparison function is running");

        let ready = [];
        let upcoming = [];
        let other = [];

        indoor.forEach(plant => {

            if(plant.lastWatered && plant.lastWatered.length > 1) {

                //get the number of days since it was lastWatered
                let daysAgo = waterDateParse(plant.lastWatered[plant.lastWatered.length - 1]);
                console.log("Watered this number of days ago: ", daysAgo);
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

                //get the absolute date, as if doesn't matter if the difference is positive or negative
                // let durationDifference = Math.abs(daysAgo - lastDuration);
                let durationDifference = daysAgo - lastDuration;
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
            
        })


        console.log("runComparison has completed it's run");
        setUpcomingPlants(upcoming);
        setReadyPlants(ready);
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
            .then(setIds([]), setSelectedDate(""), setUpdate(date), window.location.reload())
            .catch(err => console.log(err))

        // console.log(newDate);
        // console.log(selectedDate);
        // console.log(ids);
        
    }

    

    return (
        <div className="plantsdiv">
            

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
            <p>Plants that need to be watered based on their lastwatered date</p>

            <h1>Ready for Watering</h1>

            {comparison ?
            <>
                {/* <PlantBlock 
                    plants={readyPlants}
                /> */}


                    <div className="by-duration">
                        <div className="by-duration-plants">

                            <table className="watering-table">

                            <thead className="watering-col-header">
                                <tr className="watering-col-header">
                                    <th className="watering-col-header">Watered</th>
                                    <th className="watering-col-header">Name</th>
                                    <th className="watering-col-header">Location</th>
                                    <th className="watering-col-header">Watering Rate</th>
                                    <th className="watering-col-header">Last Watered</th>
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
                                        <th
                                            className="water-metrics watering-details" 
                                            id={plants._id}>
                                                {plants.lastWatered && plants.lastWatered.length > 2 ? (waterDateParse(plants.lastWatered[plants.lastWatered.length - 3]) - waterDateParse(plants.lastWatered[plants.lastWatered.length - 1])) + " days" : "n/a"} 
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

            <h1>Upcoming</h1>
                <PlantBlock 
                    plants={upcomingPlants} 
                /> 

                <h1>TBD</h1>
                <PlantBlock 
                    plants={otherPlants} 
                />

                </>
            :
                <p>Loading plants...</p>
            }
            

        </div>
        
    )
}

export default Planning;