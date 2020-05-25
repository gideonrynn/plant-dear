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
      sunlight: "part sun, full sun",
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
      location: "outdoor",
      water: "moderate to dry",
      sunlight: "",
      tempHigh: 70,
      tempLow: 60,
      hardiness: 50,
      soil: "n/a",
      cycle: "perennial",
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
      type: "herb",
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
      water: "dry",
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
      water: "moist",
      sunlight: [
        "full sun",
        "part shade"
      ],
      type: "herb",
      tempLow: 30,
      tempHigh: "",
      hardiness: 20,
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
      name: "Greek Oregano",
      location: "outdoor",
      water: "moist",
      sunlight: [
        "full sun",
        "part shade"
      ],
      type: "herb",
      tempLow: 20,
      tempHigh: "",
      hardiness: -30,
      soil: "",
      cycle: "perennial",
      plantHardinessZone: "4-8",
      links: [
        "https://bonnieplants.com/product/greek-oregano/", 
        "https://www.thespruce.com/growing-oregano-plants-1402818"
      ],
      notes: "allow soil to dry out between waterings"
    },
    {
      name: "Lemon Thyme",
      location: "outdoor",
      water: "",
      sunlight: "full sun to part shade",
      tempLow: 20,
      tempHigh: "",
      hardiness: 10,
      soil: "",
      cycle: "",
      plantHardinessZone: "7 - 9",
      links: "https://bonnieplants.com/product/lemon-thyme/",
      notes: "Perennial in zones 7 to 9, plant spacing 18 to 24 inches apart"
    },
    {
      name: "Romaine Lettuce",
      location: "outdoor",
      water: "moist",
      sunlight: "full sun to part shade",
      tempLow: 25,
      tempHigh: 90,
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "",
      notes: "cold weather plant"
  },
    {
      name: "Boxwood",
      location: "outdoor",
      water: "when dry",
      sunlight: "full sun",
      tempLow: "",
      tempHigh: "",
      hardiness: -30,
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
      hardiness: -40,
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "",
      notes: "Also named 'syringa patula', 'Miss Kim', height 3-5', space 5', blooms early spring to summer"
    },
    {
      name: "Spinach",
      location: "outdoor",
      water: "moist",
      sunlight: "full sun, part shade",
      type: "herb",
      tempLow: 20,
      tempHigh: "",
      hardiness: 20,
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "https://bonnieplants.com/product/bonnie-spinach/?gclid=EAIaIQobChMIzYXQsZ_L6QIVkIbACh06_AC5EAAYASAAEgLtOPD_BwE&cmp=kid/BonniePlants/Google_SEM/Brand/G|BonniePlants|Search|Generic|Vegetables/G|BonniePlants|Search|Generic|Vegetables|Spinach&s_kwcid=AL!4676!3!426170300098!p!!g!!grow%20spinach&ef_id=EAIaIQobChMIzYXQsZ_L6QIVkIbACh06_AC5EAAYASAAEgLtOPD_BwE:G:s&s_kwcid=AL!4676!3!426170300098!p!!g!!grow%20spinach",
      notes: ""
    },
    {
      name: "Flat Leaf Parsley",
      location: "",
      water: "moist",
      sunlight: "sun to part shade",
      type:"",
      tempLow: "",
      tempHigh: "",
      hardiness: 25,
      soil: "",
      cycle: "biennial",
      plantHardinessZone: "",
      links: "https://bonnieplants.com/product/flat-italian-parsley/",
      notes: "Space 12 to 20 inches apart, depending on type, plant size 1 foot tall"
    },
    {
      name: "Arugula",
      location: "",
      water: "moist",
      sunlight: "",
      type: "vegetable",
      tempLow: "",
      tempHigh: "",
      hardiness: 30,
      soil: "",
      cycle: "annual",
      plantHardinessZone: "",
      links: "",
      notes: "Cool season plant. Leafy plants grow 6 to 12 inches tall while in the harvest stage. Once they bolt in late spring or early summer, the bloom stalks may grow 24 to 36 inches with (edible!) tan-white flowers on top, which signals that it is time to make room for warm-weather crops. However, some gardeners continue to harvest the leaves even from the tall plants, liking the stronger taste. You can even cut them back and pick some more until you finally tire of that and then pull them up and wait until fall to plant again."
    },
    {
      name: "Basil",
      location: "outdoor",
      water: "moist",
      sunlight: "full sun to part sun",
      type: "herb",
      tempLow: 50,
      tempHigh: "",
      hardiness: 40,
      soil: "",
      cycle: "annual",
      plantHardinessZone: "10 - 11",
      links: "",
      notes: ""
    },
    {
      name: "Sweet Potato Vine",
      location: "",
      water: "moist",
      sunlight: "sun, part sun, shade",
      type: "",
      tempLow: 50,
      tempHigh: 50,
      hardiness: 40,
      soil: "",
      cycle: "",
      plantHardinessZone: "",
      links: "http://www.costafarms.com/plants/sweet-potato-vine, https://www.gardendesign.com/vines/sweet-potato-vine.html",
      notes: "For containers, plant in a high quality all-purpose potting soil."
    },
    // {
    //   name: "Dumb Cane",
    //   location: "",
    //   water: "",
    //   sunlight: "",
    //   type: "",
    //   tempLow: "",
    //   tempHigh: "",
    //   hardiness: "",
    //   soil: "",
    //   cycle: "",
    //   plantHardinessZone: "",
    //   links: "",
    //   notes: ""
    // },
    // {
    //   name: "Dumb Cane",
    //   location: "",
    //   water: "",
    //   sunlight: "",
    //   type: "",
    //   tempLow: "",
    //   tempHigh: "",
    //   hardiness: "",
    //   soil: "",
    //   cycle: "",
    //   plantHardinessZone: "",
    //   links: "",
    //   notes: ""
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
