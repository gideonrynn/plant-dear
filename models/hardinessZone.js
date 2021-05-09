const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hardinessZoneSchema = new Schema({
    zone: {
        type: String
    },
    rangeLow: {
        type: Number
    },
    rangeHigh: {
        type: Number
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
})
        
   
const HardinessZone = mongoose.model("HardinessZone", hardinessZoneSchema);

module.exports = HardinessZone;