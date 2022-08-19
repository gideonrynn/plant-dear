import React, { useEffect, useState, useContext } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import { PlantContext } from "../../context/PlantContext"
import "./Sorting.css";

/*Description: Sort plants by photo only. On hover will display some details
* Todo: determine whether or not search function will be applied here
    * updated to search for active and inactive plants or create another page to access those. if separate, will be able to remove all the inactive plant references here which are not being used
*/

function Sorting () {

    console.log("Sorting page initialized, with context");

    const plant = useContext(PlantContext);
    const activePlants = plant.activePlants.sort((a,b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
    const inactivePlants = plant.inactivePlants;
 
    // console.log("number of active plants returned", activePlants.length);

    // Setting our component's initial state
    const [updatedPlants, setUpdatedPlants] = useState([]);
    const [updatedInactivePlants, setUpdatedInactivePlants] = useState([]);

    // for handling search bar and input
    //* consider whether or not this is needed rather than input param passed into function *//
    const [searchTerm, setSearchTerm] = useState('');

    // Load all plants and store them within setPlants
    useEffect(() => {
        loadPlants();
        console.log("Sorting page rerendered");
    
    },[])

    function loadPlants() {
        // by default, show all plants returned from api
        setUpdatedPlants(activePlants);
        setUpdatedInactivePlants(inactivePlants);
    }

    // take text entered in the search and filter current list of plants
    function sortPlants(input) {

        if(input) {

            const filtered = activePlants.filter(actPlants => {
                return actPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
               })
    
            const filteredInactive = inactivePlants.filter(inactPlants => {
                return inactPlants.name.toLowerCase().includes(searchTerm.toLowerCase())
               })
            
            setSearchTerm(input);
            setUpdatedPlants(filtered);
            setUpdatedInactivePlants(filteredInactive);
        } else {

            loadPlants();
        }
        

    }

    return (
        <>
            <div className="plantsdiv">

                <input 
                    type="text"
                    style={
                        {width:"350px",
                        background:"#F2F1F9", 
                        padding:"10px"}}
                    placeholder={"search plants"}
                    onChange={(event) => {
                        sortPlants(event.target.value)
                        }}
                />

                <div className="plant-card-sorting-section">

                    {updatedPlants.map((plants, index) => (
                        <div key={index}>
                            <PlantCard 
                                plant={plants}
                            />
                        </div>
                    ))}
                    
                </div>

            </div>
        </>
    )
}

export default Sorting;