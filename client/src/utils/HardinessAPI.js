import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    // Gets all hardiness zone data from db
    getHardinessZones: function() {
      return axios.get("/api/hardiness/data");
    }
    
}