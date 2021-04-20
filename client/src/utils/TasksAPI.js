import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    
  getAllTasks: function() {
    return axios.get("/api/tasks/all");
  }

    
}