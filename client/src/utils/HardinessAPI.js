import axios from "axios";


export default {

    // Gets all hardiness zone data from db
    getHardinessZones: function() {
      return axios.get("/api/hardiness/data");
    }
    
}