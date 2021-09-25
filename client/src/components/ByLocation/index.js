import React, {useState, useEffect} from 'react'
import { useLocation, withRouter } from "react-router-dom";
import PlantBlockAll from "../PlantBlockAll/PlantBlock"
import PlantAPI from "../../utils/PlantsAPI"
import { useHistory } from 'react-router-dom';
import './style.css'
// weather context
// plant data
// condition that checks the hardiness

const ByLocation = (data) => {

    // const forecastWeather = data.weather;
    const plants = data.plants;
    // const dataLocation = data;
    console.log(data);
    console.log("bylocation component", data.plants);
    let location = useLocation();
    let pathname = location.pathname.slice(1);
    const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const d = new Date();
    // const [thesePlants, setThesePlants] = useState([]);
    const [ids, setIds] = useState([]);
    const [newLocation, setNewLocation] = useState("");
    // const [plantsByLocation, setPlantsByLocation] = useState();
    let currentDate = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    const history = useHistory();

    function handleClick(event, id) {
        console.log("clicked", event.target.id);
        
        console.log(id);
        history.push({
            pathname: "plantdetails",
            state: { detail: event.target.id }});
    }
    

    useEffect(() => {
        console.log("ByLocation component rendered");
        // if (data.plants) {
            // setThesePlants(data.plants);
            // sortThesePlants();
            if(data.locationSecondary) {
                setNewLocation(data.locationSecondary);
            }
        // }
        
    }, [data.locationSecondary])


        let plantsByLocation = plants.filter(plantsAll => { 
            return plantsAll.locationSec !== "" && plantsAll.locationSec === newLocation;
        });
        console.log("the value of the new location is: " + newLocation + "and here are the plants: ", plantsByLocation)
    

    function handleInputChange(event) {
        // const { name, defaultValue } = event.target;
        let fieldName = event.target.name
        let fielddefaultValue = event.target.id
        let fieldCheckedValue = event.target.checked

        console.log("This is the info I need right now", event.target, "and this is the value", fieldCheckedValue);
        
        if (fieldCheckedValue === true) {
            setIds([...ids, fielddefaultValue]);
            console.log(fieldName, fielddefaultValue)
        }
        
        console.log(ids);
    };

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

    function updateWaterDate() {
        let date = new Date();
        date.setDate(date.getDate());
        let newISODate = date.toISOString();
        let newDate = newISODate.split('T')[0];
        console.log(newDate);

        PlantAPI.updatePlantWaterDate(
            {
                ids: ids,
                lastWatered: newDate,
            })
            .then(window.location.reload())
            .catch(err => console.log(err))
    }

    return (
        <div className="by-location-section">
            <h1>{newLocation !== "" ? newLocation : "Choose a location"}</h1>

            {newLocation !== "" ? 
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

                            {plantsByLocation.map(plants => (

                                <tr key={plants._id}  >
                                    <th className="plant-table-row" id={plants._id} onClick={handleClick}>{plants.name}</th>
                                    <th id={plants._id}>{plants.lastWatered && plants.lastWatered.length > 0 ? Math.round((currentDate.getTime() - new Date(plants.lastWatered[plants.lastWatered.length - 1]).getTime())/ oneDay) + " day(s) ago" : "not yet watered"} </th>
                                    <th><input type="checkbox" name="today" id={plants._id} onChange={handleInputChange}/></th>

                                </tr>))}

                            </tbody>
                            </table>
                            <button style={{backgroundColor: '#78A4CF'}} onClick={() => updateWaterDate(0)} className="water-button-all">Submit</button>
            
                        </div>
       
                        
                    </div>
            
            </>: <p>Plants will show here based on their location</p>
            }
            
        </div>
    )
};

export default ByLocation;
