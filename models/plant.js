const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type: String,
    },
    botanicalName: {
        type: String,
    },
    status: {
        type: String
    },
    location: {
        type: String
    },
    locationSec: {
        type: String
    },
    locationPreferred: {
        type: String
    },
    waterPref: {
        type: Array
    },
    lastWatered: {
        type: [String]
    },
    nextWater: {
        type: Date
    },
    waterRate: {
        type: Number
    },
    sunlight: {
        type: Array
    },
    plantType: {
        type: String
    },
    trouble: {
        type: String
    },
    needsCare: {
        type: String
    },
    humidity: {
        type: String
    },
    heightLow: {
        type: String
    },
    heightHigh: {
        type: String
    },
    tempLow: {
        type: String
    },
    tempHigh: {
        type: String
    },
    hardiness: {
        type: String
    },
    tolerance: {
        type: String
    },
    pH: {
        type: String
    },
    soilContent: {
        type: String
    },
    cycle: {
        type: String
    },
    hardinessZoneMin: {
        type: String
    },
    hardinessZoneMax: {
        type: String
    },
    lastPotted: {
        type: Date
    },
    imgURL: {
        type: String
    },
    links: {
        type: Array
    },
    propogating: {
        type: String
    },
    watching: {
        type: String
    },
    overwinter: {
        type: String
    },
    description: {
        type: String
    },
    notes: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
    },
}, {timestamps: true})

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
