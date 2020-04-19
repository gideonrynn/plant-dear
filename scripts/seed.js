let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/plant-dear", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let plantSeed = [
    {
        name: "Dumb Cane",
        location: "indoor",
        water: "moderate",
        sunlight: "bright light",
        tempHigh: "70",
        tempLow: "65",
        tolerance: "50",
        soil: "n/a",
        cycle: "n/a",
        plantHardinessZone: "10 - 12",
        links: "https://plantcaretoday.com/dieffenbachia-plant-care.html",
        notes: "n/a",
    },
    {
        name: "Rubber Plant",
        location: "indoor",
        water: "moist",
        sunlight: "bright light",
        tempHigh: "75",
        tempLow: "60",
        tolerance: "50",
        soil: "n/a",
        cycle: "n/a",
        plantHardinessZone: "10 - 11",
        links: "https://www.proflowers.com/blog/rubber-plant-care",
        notes: "n/a"
    },
    {
        name: "Coleus",
        location: "outdoor",
        water: "moist",
        sunlight: "part sun to full sun",
        tempHigh: "90",
        tempLow: "60",
        tolerance: "50",
        soil: "7",
        cycle: "n/a",
        plantHardinessZone: "10 - 11",
        links: "https://www.doityourself.com/stry/mistakes-to-avoid-when-growing-a-coleus",
        notes: "below 40 and the plant will be damaged"
    },
    {
        name: "Citronella",
        location: "outdoor",
        water: "moderate",
        sunlight: "",
        tempHigh: "70",
        tempLow: "60",
        tolerance: "50",
        soil: "n/a",
        cycle: "n/a",
        plantHardinessZone: "9 - 11",
        links: [
            "https://www.gardenguides.com/90515-care-citronella-plants-fall.html", 
            "https://bonnieplants.com/how-to-grow/growing-mosquito-plants/"
        ], 
        notes: "drought tolerant"
    },
    // {
    //     name: "Dumb Cane",
    //     location: "",
    //     water: "",
    //     sunlight: "",
    //     tempLow: "",
    //     tempHigh: "",
    //     soil: "",
    //     cycle: "",
    //     plantHardinessZone: "",
    //      links: "",
    //      notes: ""
    // },

];

db.Plant.deleteMany({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
