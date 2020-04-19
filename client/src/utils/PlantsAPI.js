import axios from "axios";

export default {

    // Gets all saved plants from db
    
    getAllPlants: function() {
      return axios.get("/api/plants");
    }
    
}