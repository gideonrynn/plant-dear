import React, {useState, useEffect, createContext} from 'react';
import PlantAPI from "../utils/PlantsAPI"

// so it can be used in different components as needed
export const PlantContext = createContext();

// holds data and passes it to the children
export const PlantProvider = ({children}) => {

    console.log("Plant Context initialized");

    // const [allPlants, setAllPlants] = useState([]);

    const [,setUpdatedPlants] = useState([])
    const [,setUpdatedInactivePlants] = useState([])

    // set states for sorting
    const [activePlants, setActivePlants] = useState([])
    const [inactivePlants, setInactivePlants] = useState([])

    const [counter, setCounter] = useState()
    const [inactcounter, setInactCounter] = useState()
    
    useEffect(() => {
        // console.log("plant usecontext useEffect is active");
        PlantAPI.getAllPlants()
            .then(res => {
                // console.log(res.data)
                const plants = res.data;

                // filter to show active versus inactive plants
                // set plant state to pass to Plant Card

                let actPlants = plants.filter(actPlants => { 
                    return actPlants.status !== "inactive"
                });

                let inPlants = plants.filter(inactPlants => { 
                    return inactPlants.status === "inactive"
                });

                // set state for active and inactive plants to be filtered based on search bar
                setActivePlants(actPlants);
                setInactivePlants(inPlants);

                // by default, show all plants returned from api
                setUpdatedPlants(actPlants);
                setUpdatedInactivePlants(inPlants);


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
        
    }, []);


  return(
    <PlantContext.Provider value={{activePlants, inactivePlants, counter, inactcounter}}>
      {children}
    </PlantContext.Provider>
  );
};