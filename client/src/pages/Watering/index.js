import React, {useEffect, useState, useContext } from "react";
import "./style.css";
import ByLocation from "../../components/ByLocation"
// import { WeatherContext } from "../../context/WeatherContext"
import { PlantContext } from "../../context/PlantContext"

function Watering () {

    /*Description
        This component handles the location selection, and sends the plants by location to the By Location component for rendering
        By default, all plants will display regardless of location
    */
    /*Todo:
        *add header photo to array for Watering page
        *set up dependency on lastWatered dates. may handle this in ByLocation component
    */

    console.log("Weathering page initialized, with context");
    const plant = useContext(PlantContext);
    const activePlants = plant.activePlants;
    const inactivePlants = plant.inactivePlants;
    const counter = plant.counter;
    const inactcounter = plant.inactcounter;
    // console.log("number of active plants returned", activePlants.length);
    // console.log("activePlants drilldown", activePlants[0]);

    // Setting our component's initial state
    const [updatedPlants, setUpdatedPlants] = useState([activePlants]);
    const [updatedInactivePlants, setUpdatedInactivePlants] = useState([]);
    const [locationSecondary, setLocationSecondary] = useState("");

    // for handling search bar and input
    //* consider whether or not this is needed rather than input param passed into function *//
    // const [searchTerm, setSearchTerm] = useState('');

    // Load all plants and store them within setPlants
    useEffect(() => {
        // loadPlants();
        console.log("Watering page rerender");

        if(locationSecondary === "" || locationSecondary === "all") {

            let plantsByName = activePlants.sort((a,b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
            setUpdatedPlants(plantsByName);
            setUpdatedInactivePlants(inactivePlants);
        }
    
    }, [locationSecondary, activePlants, inactivePlants]);
    // [updatedPlants, plant]

    function sendPlants(updatedLocation) {
        // console.log("show updatedLocation ", updatedLocation);
        setLocationSecondary(updatedLocation);

        let plantsByLocation = activePlants.filter(plantsAll => { 
            return plantsAll.locationSec !== "" && plantsAll.locationSec === updatedLocation;
        });

        let plantsByName = plantsByLocation.sort((a,b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
        
        setUpdatedPlants(plantsByName);
        // console.log(plantsByLocation);
    }

    return (
        <div className="plants-by-location-container">
            <div className="plants-by-location-section">
                <div className="color-coding-details-section">
                    <div style={{backgroundColor: 'red'}} className="color-coding-details">M</div>
                    <div style={{backgroundColor: 'orange'}} className="color-coding-details">T</div>
                    <div style={{backgroundColor: 'yellow'}} className="color-coding-details">W</div>
                    <div style={{backgroundColor: 'green'}} className="color-coding-details">Th</div>
                    <div style={{backgroundColor: 'blue'}} className="color-coding-details">F</div>
                    <div style={{backgroundColor: 'purple'}} className="color-coding-details">Sat</div>
                    <div style={{backgroundColor: 'pink'}} className="color-coding-details">Sun</div>
                </div>

                <span className="plant-details-label">Select Location</span>

                <select
                    name="locationSec"
                    className="plant-details"
                    onChange={(e) => sendPlants(e.target.value)}
                    >
                        <option>all</option>
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

                <ByLocation
                    locationSecondary={locationSecondary}
                    plants={updatedPlants} 
                    inactive={updatedInactivePlants} 
                    actcounter={counter}
                    inactcounter={inactcounter}
                />
            </div>
        </div>
    )
}

export default Watering;