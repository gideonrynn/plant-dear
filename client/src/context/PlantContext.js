import React, { useState, useEffect, createContext } from 'react';
import PlantAPI from "../utils/PlantsAPI"

// so it can be used in different components as needed
export const PlantContext = createContext();

// holds data and passes it to the children
export const PlantProvider = (props) => {

    console.log("Plant Context initialized");

    // const [allPlants, setAllPlants] = useState([]);

    const [update, setUpdate] = useState("not updated");
    console.log(update);

    const [,setUpdatedPlants] = useState([]);
    const [,setUpdatedInactivePlants] = useState([]);

    // set states for sorting
    const [activePlants, setActivePlants] = useState([]);
    const [inactivePlants, setInactivePlants] = useState([]);

    const [counter, setCounter] = useState();
    const [inactcounter, setInactCounter] = useState();
    
    useEffect(() => {
        console.log("Plant Context useEffect rerendered");
        PlantAPI.getAllPlants()
            .then(res => {
                // console.log(res.data)
                const plants = res.data;
                console.log(plants);

                // filter to show active versus inactive plants
                // set plant state to pass to Plant Card

                let sortActivePlants = plants.filter(plants => { 
                    return plants.status !== "inactive"
                });

                let sortInactivePlants = plants.filter(plants => { 
                    return plants.status === "inactive"
                });

                // set state for active and inactive plants to be filtered based on search bar
                setActivePlants(sortActivePlants);
                setInactivePlants(sortInactivePlants);

                // by default, show all plants returned from api
                setUpdatedPlants(sortActivePlants);
                setUpdatedInactivePlants(sortInactivePlants);


                // set counters at top of Active and Inactive sections
                let actcounter = 0;
                let inactcounter = 0;
                for (let i = 0; i < plants.length; i++) {
                if (plants[i].status !== "inactive") actcounter++;
                if (plants[i].status === "inactive") inactcounter++;
                }

                setCounter(actcounter);
                setInactCounter(inactcounter);

                                
            })
            .catch(err => console.log(err));
        
    }, [update]);

    // useEffect(() => {
    //   // console.log("plant usecontext useEffect is active");
    //   console.log("Checking context change when activePlants should change", activePlants);
    // }, [activePlants]);

  return(
    <PlantContext.Provider value={{ activePlants,
                                  inactivePlants,
                                  update,
                                  setUpdate,
                                  counter,
                                  inactcounter }}>
        { props.children }
    </PlantContext.Provider>
  );
};