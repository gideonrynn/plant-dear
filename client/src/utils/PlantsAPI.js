import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    // Gets all saved plants from db
    
    getAllPlants: function() {
      return axios.get("/api/plants");
    },
    getCurrentPlants: function() {
      return axios.get("/api/plantscurrent");
    },
    getInProgressPlants: function() {
      return axios.get("/api/plantsinprogress");
    },
    getOnePlant: function(id) {
      return axios.get("/api/plantsbyid/" + id);
    },

    addPlant: function(newPlantData) {
      return axios.post("/api/plants/", newPlantData)
    },
    updatePlant: function (id, updatedPlantData) {
      console.log(id)
      return axios.put("api/plants/" + id, updatedPlantData)
    },
    updatePlantWaterDate: function (id, updatedPlantData) {
      console.log(id)
      return axios.put("api/plants/watering/" + id, updatedPlantData)
    },
    deletePlant: function (id) {
      return axios.delete("api/plants/delete/" + id)
    }


    
}