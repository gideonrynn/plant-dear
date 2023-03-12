
import PlantAPI from "../../utils/PlantsAPI"

// One day in milliseconds, 1000 milliseconds in each second, 60 seconds for each minute, 60 minutes for each hour, 24 hours for each day
let oneDay = 1000 * 60 * 60 * 24;

export function updateWaterDate(selectedDate, todaysDate = ) {

    let wateredDate = "";

    if (selectedDate === null || selectedDate === "") {
        
        wateredDate = todaysDate;
        // console.log(wateredDate);
    } else {
        wateredDate = selectedDate;
    }

    // console.log("updateWaterDate function: ids, wateredDate", ids, wateredDate);

    PlantAPI.updatePlantWaterDate(
        {
            ids: ids,
            lastWatered: wateredDate,
            waterAdHoc: ""
        })
        .then((ids) => {

            // let newReadyPlants = readyPlants;
            // console.log("New ready plants!", newReadyPlants);
            // console.log("response from db", ids);             
            setIds([]);
            setSelectedDate("");
            setUpdate(date);
            return "Complete"
        })
        .then((result) => {
            updateReadyPlants();
            updateUpcomingPlants();
        })
        .catch(err => console.log(err))
    
}
