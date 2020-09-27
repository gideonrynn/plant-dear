import axios from "axios";

export default {

    // Gets all saved plants from db
    
    getAllPlants: function() {
      return axios.get("/api/plants");
    },
    getSomePlants: function() {
      return axios.get("/api/plantsbystatus");
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
    }


    
}