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
      tempHigh: 70,
      tempLow: 65,
      hardiness: 50,
      soil: "n/a",
      cycle: "n/a",
      plantHardinessZone: "10-12",
      links: "https://plantcaretoday.com/dieffenbachia-plant-care.html",
      notes: "n/a",
    },
    {
      name: "Rubber Plant",
      location: "indoor",
      water: "moist",
      sunlight: "bright light",
      tempHigh: 75,
      tempLow: 60,
      hardiness: 50,
      soil: "n/a",
      cycle: "n/a",
      plantHardinessZone: "10-11",
      links: "https://www.proflowers.com/blog/rubber-plant-care",
      notes: "n/a"
    },
    {
      name: "Coleus",
      location: "indoor",
      water: "moist",
      sunlight: [
        "part sun", 
        "full sun"
      ],
      tempHigh: 90,
      tempLow: 60,
      hardiness: 50,
      soil: 7,
      cycle: "n/a",
      plantHardinessZone: "10-11",
      links: "https://www.doityourself.com/stry/mistakes-to-avoid-when-growing-a-coleus",
      notes: "below 40 and the plant will be damaged"
    },
    {
      name: "Citronella",
      location: "indoor",
      water: "moderate",
      sunlight: "",
      tempHigh: 70,
      tempLow: 60,
      hardiness: 50,
      soil: "n/a",
      cycle: "n/a",
      plantHardinessZone: "9-11",
        links: [
          "https://www.gardenguides.com/90515-care-citronella-plants-fall.html", 
          "https://bonnieplants.com/how-to-grow/growing-mosquito-plants/"
        ], 
        notes: "drought tolerant"
    },
    {
      name: "Rosemary",
      location: "outdoor",
      water: "dry",
      sunlight: "full sun",
      tempHigh: 90,
      tempLow: 30,
      hardiness: 20,
      soil: [
        "sandy", 
        "loamy"
      ],
      cycle: "",
      plantHardinessZone: "7-10",
      links: [
       "https://bonnieplants.com/how-to-grow/growing-rosemary/", 
       "https://www.almanac.com/plant/rosemary"
      ],
      notes: "can handle temp being 0, but not sustained"
    },
    {
      name: "Lavender",
      location: "indoor",
      water: [
        "dry"
      ],
      sunlight: "full sun",
      tempHigh: 90,
      tempLow: 10,
      hardiness: 20,
      soil: "",
      cycle: "",
      plantHardinessZone: "5-8",
      links: [
       "https://homeguides.sfgate.com/climate-grow-english-lavender-71815.html"
      ],
      notes: "check the variety of lavender, as some can't tolerate temps below 40, while others can handle 10 to -20"
    },
    {
      name: "Italian Oregano",
      location: "outdoor",
      water: "",
      sunlight: [
        "full sun",
        "part shade"
      ],
      tempLow: "30",
      tempHigh: "",
      hardiness: "15",
      soil: "",
      cycle: "perennial",
      plantHardinessZone: "5-10",
      links: [
        "https://bonnieplants.com/product/italian-oregano/", 
        "https://www.thespruce.com/growing-oregano-plants-1402818"
      ],
      notes: "allow soil to dry out between waterings"
    },
    {
      name: "Lemon Thyme",
      location: "outdoor",
      water: "",
      sunlight: "part shade",
      tempLow: "",
      tempHigh: "",
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "",
      notes: ""
    },
    {
      name: "Romaine Lettuce",
      location: "outdoor",
      water: "",
      sunlight: "part shade",
      tempLow: "",
      tempHigh: "",
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "",
      notes: ""
  },
    {
      name: "Boxwood",
      location: "outdoor",
      water: "when dry",
      sunlight: "full sun",
      tempLow: "",
      tempHigh: "",
      hardiness: "-30",
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "",
      notes: "Also named Buxus, Green Velvet, height 24-36', space 36'"
    },
    {
      name: "Lilac",
      location: "outdoor",
      water: "when dry",
      sunlight: "full sun",
      tempLow: "",
      tempHigh: "",
      hardiness: "-40",
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "",
      notes: "Also named 'syringa patula', 'Miss Kim', height 3-5', space 5', blooms early spring to summer"
    },
    // {
    //     name: "Dumb Cane",
    //     location: "",
    //     water: "",
    //     sunlight: "",
    //     tempLow: "",
    //     tempHigh: "",
    //     hardiness: "",
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
