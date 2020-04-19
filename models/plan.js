const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// overall plan for maintaining plants in each season
const planSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    current: {
        type: String
    },
    upcoming: {
        type: String
    }
    
  }
  
);


const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
