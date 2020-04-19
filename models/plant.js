const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
        type: String,
    },
    water: {
        type: String,
    },
    sunlight: {
        type: String,
    },
    tempLow: {
        type: String,
    },
    tempHigh: {
        type: String,
    },
    tolerance: {
        type: String,
    },
    soil: {
        type: String,
    },
    cycle: {
        type: String,
    },
    plantHardinessZone: {
        type: String,
    },
    links: {
        type: String,
    },
    notes: {
        type: String
    }
  }
);


const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
