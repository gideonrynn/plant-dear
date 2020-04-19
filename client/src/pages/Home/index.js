import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import PlantAPI from "../../utils/PlantsAPI"

function Home () {

    // Setting our component's initial state
  const [plants, setPlants] = useState([])

  // Load all plants and store them within setPlants
  useEffect(() => {

    loadPlants()
    
  }, [])

    // Loads all plants and sets them to plants state
    function loadPlants() {

        PlantAPI.getAllPlants()
            .then(res => {
            const plants = res.data;
            setPlants(plants)
            })
            .catch(err => console.log(err));
    };


    return (
        <div className="main-title"
        >
            <h1>Welcome to Plant Dear!</h1>
            <p>Here are all our plants!</p>

            <table>
                <tbody>
                    
                    {plants.map(plant => (

                        <tr key={plant.id}>
                            <th>{plant.name} </th>
                            <th>{plant.location} </th>
                            <th>{plant.tempHigh} </th>
                            <th>{plant.tempLow} </th>
                            <th>{plant.tolerance} </th>
                            <th>{plant.water}</th>
                            <th> {plant.sunlight}</th>
                            <th>{plant.plantHardinessZone}</th>
                        </tr>))}

                </tbody>
            </table>
            
        </div>
 
    );
  }
  
  
  export default Home;