import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    
  getAllSupplies: function() {
    return axios.get("/api/supplies/all");
  },
  addSupplies: function(newSupplies) {
    return axios.post("/api/supplies/add", newSupplies)
  },

    
}