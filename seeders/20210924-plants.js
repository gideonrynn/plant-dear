let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/plantdear", {
  useNewUrlParser: true,
//   useFindAndModify: false,
  useUnifiedTopology: true
});

let plantsSeed = [
  {
    "_id" : ObjectId("609826aeeb53ee6b3059ec6d"),
    "name" : "Dumb Cane",
    "botanicalName" : "Dieffenbachia",
    "status" : "active",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        "2020-10-25", 
        ISODate("2021-08-17T17:51:17.866-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium", 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "70",
    "tempHigh" : "65",
    "hardiness" : "60",
    "tolerance" : "",
    "pH" : "n/a",
    "soilContent" : "peat, perlite, potting mix",
    "cycle" : "n/a",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "12",
    "lastPotted" : "2020-05-30",
    "imgURL" : "dumb-cane.jpg",
    "links" : [ 
        "https:plantcaretoday.com/dieffenbachia-plant-care.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "n/a\n\n8/19/21: trying to be careful of this one. it doesn't seem in love with the low light, but nowhere else to put it. also can't water too much, seems to attract a lot of fungus gnats when wet.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-19T17:51:18.198-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec6e"),
    "name" : "Rubber Plant",
    "botanicalName" : "Ficus elastica",
    "status" : "active",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        "2020-10-14", 
        ISODate("2021-08-13T21:37:33.798-05:00"), 
        ISODate("2021-08-21T07:40:42.067-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "80",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "n/a",
    "soilContent" : "",
    "cycle" : "n/a",
    "hardinessZoneMin" : "10-11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "rubber-plant.jpg",
    "links" : [ 
        "https:www.proflowers.com/blog/rubber-plant-care", 
        "https:www.today.com/home/easiest-indoor-house-plants-won-t-die-you-t73006"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "let it dry out. When a leaf starts to wilt, you know it's time to water it.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-21T07:40:42.391-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec6f"),
    "name" : "Coleus",
    "botanicalName" : "Plectranthus scuttellariodes",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "{'moist'}",
    "lastWatered" : [ 
        "2020-10-24"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part sun", 
        "full sun"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "none",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "100",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "7",
    "soilContent" : "",
    "cycle" : "annual",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "11",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.doityourself.com/stry/mistakes-to-avoid-when-growing-a-coleus"
    ],
    "propogating" : "N",
    "watching" : "",
    "notes" : "below 40 and the plant will be damaged. propogating, needs to be topped off",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-21T08:03:29.668-05:00"),
    "imgURL" : "coleus.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec70"),
    "name" : "Citronella plant",
    "botanicalName" : "Pelargonium citrosum",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "{'moderate to dry'}",
    "lastWatered" : [ 
        "2020-10-18"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "70",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "n/a",
    "soilContent" : "",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11",
    "lastPotted" : "2021-04-03",
    "links" : [ 
        "https:www.gardenguides.com/90515-care-citronella-plants-fall.html", 
        "https:bonnieplants.com/how-to-grow/growing-mosquito-plants/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "drought tolerant. also known as mosquito plant. it is a geranium with a lemon scent, but does not actually repel mosquitoes.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-21T07:59:02.735-05:00"),
    "imgURL" : "citronella-plant.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec71"),
    "name" : "Rosemary",
    "botanicalName" : "",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "balcony railing",
    "locationPreferred" : "outdoor",
    "waterPref" : "dry",
    "lastWatered" : [ 
        "2020-11-08"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "30",
    "tempHigh" : "90",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "n/a",
    "soilContent" : "sandy, loamy",
    "cycle" : "",
    "hardinessZoneMin" : "7",
    "hardinessZoneMax" : "10",
    "lastPotted" : "2021-04-03",
    "links" : [ 
        "https:bonnieplants.com/how-to-grow/growing-rosemary/", 
        "https:www.almanac.com/plant/rosemary"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "can handle temp being 0, but not sustained",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-05-23T19:15:40.404-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec72"),
    "name" : "Lavender",
    "botanicalName" : "",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "dry",
    "lastWatered" : [ 
        "2021-01-01"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "10",
    "tempHigh" : "90",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "5-8",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:homeguides.sfgate.com/climate-grow-english-lavender-71815.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "check the variety of lavender, as some can't tolerate temps below 40, while others can handle 10 to -20",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2021-03-13"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec73"),
    "name" : "Italian Oregano",
    "botanicalName" : "",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "balcony railing",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        "2020-11-08"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "-20",
    "tempHigh" : "",
    "hardiness" : "-20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "perennial",
    "hardinessZoneMin" : "5a",
    "hardinessZoneMax" : "10a",
    "lastPotted" : "2020-10-24",
    "links" : [ 
        "https:bonnieplants.com/product/italian-oregano/", 
        "https:www.thespruce.com/growing-oregano-plants-1402818"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "allow soil to dry out between waterings",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-07-27T12:30:11.420-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec74"),
    "name" : "Greek Oregano",
    "botanicalName" : "",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "balcony railing",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        "2020-11-08"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "20",
    "tempHigh" : "",
    "hardiness" : "-30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "perennial",
    "hardinessZoneMin" : "4-8",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:bonnieplants.com/product/greek-oregano/", 
        "https:www.thespruce.com/growing-oregano-plants-1402818"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "allow soil to dry out between waterings",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec75"),
    "name" : "Lemon Thyme",
    "botanicalName" : "Thymus citriodorus",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "balcony railing",
    "locationPreferred" : "outdoor",
    "waterPref" : "",
    "lastWatered" : [ 
        "2021-01-01"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "100",
    "tempHigh" : "",
    "hardiness" : "10",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "potting mix",
    "cycle" : "perennial",
    "hardinessZoneMin" : "7 - 9",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:bonnieplants.com/product/lemon-thyme/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Perennial in zones 7 to 9, plant spacing 18 to 24 inches apart. Extremely tolerant of poor soil and drought conditions.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-06-20T15:20:10.201-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec76"),
    "name" : "Romaine Lettuce",
    "botanicalName" : "",
    "status" : "inactive",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        "2021-01-01"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "25",
    "tempHigh" : "90",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "cold weather plant",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2021-04-11"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec77"),
    "name" : "Boxwood",
    "botanicalName" : "",
    "status" : "inactive",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "when dry",
    "lastWatered" : [ 
        "2021-01-01"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "-30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Also named Buxus, Green Velvet, height 24-36', space 36'.\nTurned yellow, appears to be dead as of 7/1/21.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-07-18T16:16:44.331-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec78"),
    "name" : "Miss Kim Lilac",
    "botanicalName" : "",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "when dry",
    "lastWatered" : [ 
        "2021-01-01", 
        ISODate("2021-08-20T16:08:09.938-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "-40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : ISODate("2021-05-22T19:00:00.000-05:00"),
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Also named 'syringa patula', 'Miss Kim', height 3-5', space 5', blooms early spring to summer.\nRepotted on 5/23/21 in bigger pot. Hoping it will get well established before the winter, at which point it goes dormant. Will need to get mulch on it before then.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-21T16:08:09.951-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec79"),
    "name" : "Spinach",
    "botanicalName" : "Spinacia oleracea",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "balcony railing",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        "2021-01-01"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "20",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:bonnieplants.com/product/bonnie-spinach/?gclid=EAIaIQobChMIzYXQsZ_L6QIVkIbACh06_AC5EAAYASAAEgLtOPD_BwE&cmp=kid/BonniePlants/Google_SEM/Brand/G|BonniePlants|Search|Generic|Vegetables/G|BonniePlants|Search|Generic|Vegetables|Spinach&s_kwcid=AL!4676!3!426170300098!p!!g!!grow%20spinach&ef_id=EAIaIQobChMIzYXQsZ_L6QIVkIbACh06_AC5EAAYASAAEgLtOPD_BwE:G:s&s_kwcid=AL!4676!3!426170300098!p!!g!!grow%20spinach"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2021-04-20"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec7a"),
    "name" : "Flat Leaf Parsley",
    "botanicalName" : "",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moist",
    "lastWatered" : [ 
        "2021-01-01"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "25",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "biennial",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:bonnieplants.com/product/flat-italian-parsley/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Space 12 to 20 inches apart, depending on type, plant size 1 foot tall",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2020-12-24"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec7b"),
    "name" : "Arugula (Roquette)",
    "botanicalName" : "Eruca vesicaria subsp. sativa",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        "2021-04-11"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [],
    "plantType" : "vegetable",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "annual",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Cool season plant. Leafy plants grow 6 to 12 inches tall while in the harvest stage. Once they bolt in late spring or early summer, the bloom stalks may grow 24 to 36 inches with (edible!) tan-white flowers on top, which signals that it is time to make room for warm-weather crops. However, some gardeners continue to harvest the leaves even from the tall plants, liking the stronger taste. You can even cut them back and pick some more until you finally tire of that and then pull them up and wait until fall to plant again.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-21T08:54:50.991-05:00"),
    "imgURL" : "arugula.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec7c"),
    "name" : "Greek Basil",
    "botanicalName" : "",
    "status" : "",
    "location" : "none",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        "2020-10-24"
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "50",
    "tempHigh" : "",
    "hardiness" : "40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "annual",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "N",
    "watching" : "",
    "notes" : "A dwarf basil that grows into a rounded dome. Leaves are 1/2'\" long and have a delicious sweet, spicy flavor. Perfect for decorative 3\" to 6\" pots. A tender annual that prefers sunny locations with rich soil. For best results, start indoors under lights and transplant outdoors after all danger of frost has passed. Pinch off flowers as soon as they appear to extend harvest. This variety is an excellent basil to grow indoors with sufficient light.\n\n5-10 days to germination. 65-70 soil temperature. Full sun light requirements. 1/4\" planting depth. Plant spacing 4\" to 8\".",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2021-04-20"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec7d"),
    "name" : "Greek Basil (growing from seed)",
    "botanicalName" : "",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "50",
    "tempHigh" : "90",
    "hardiness" : "40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "annual",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "N",
    "watching" : "",
    "notes" : "A dwarf basil that grows into a rounded dome. Leaves are 1/2'\" long and have a delicious sweet, spicy flavor. Perfect for decorative 3\" to 6\" pots. A tender annual that prefers sunny locations with rich soil. For best results, start indoors under lights and transplant outdoors after all danger of frost has passed. Pinch off flowers as soon as they appear to extend harvest. This variety is an excellent basil to grow indoors with sufficient light.\n\n5-10 days to germination. 65-70 soil temperature. Full sun light requirements. 1/4\" planting depth. Plant spacing 4\" to 8\".",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-04-26"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec7e"),
    "name" : "Sweet Potato Vine",
    "botanicalName" : "Ipomoea butatas",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        ISODate("2021-05-16T19:00:00.000-05:00"), 
        ISODate("2021-08-05T16:37:24.679-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "50",
    "tempHigh" : "50",
    "hardiness" : "40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "For containers, plant in a high quality all-purpose potting soil.",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : ISODate("2021-05-16T19:00:00.000-05:00"),
    "links" : [ 
        "http:www.costafarms.com/plants/sweet-potato-vine", 
        "https:www.gardendesign.com/vines/sweet-potato-vine.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Growing purple (ace of spades) and green. \n\nWhen it starts getting to it's full size, needs to be watered every day in hot weather. Leaves will droop. If allowed to do so for longer than half a day, leaves will brown and fall off.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-05T16:38:04.281-05:00"),
    "imgURL" : "sweet-potato-vine.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec7f"),
    "name" : "Artillery plant",
    "botanicalName" : "Pilea microphylla",
    "status" : "inactive",
    "location" : "none",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part shade"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "95",
    "hardiness" : "45",
    "tolerance" : "",
    "pH" : "7",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "11 - 12",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.gardeningknowhow.com/houseplants/pilea-plants/growing-artillery-plants.htm"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Propagation Methods: By dividing the rootball, From herbaceous stem cuttings",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2020-12-24"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec80"),
    "name" : "Chinese Money plant",
    "botanicalName" : "Pilea peperomioides",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room window",
    "locationPreferred" : "",
    "waterPref" : "moderate to dry",
    "lastWatered" : [ 
        "2020-10-18", 
        ISODate("2021-08-07T07:50:27.503-05:00"), 
        ISODate("2021-08-24T07:51:57.607-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright light", 
        "indirect light"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "",
    "hardiness" : "none",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2000-01-01",
    "links" : [ 
        "https:greeneryunlimited.co/blogs/plant-care/pilea-peperomioides-care", 
        "https:bloomscape.com/plant-care-guide/pilea/#g1", 
        "https:savvygardening.com/pilea-peperomioides-care/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-24T07:52:18.861-05:00"),
    "description" : "If you are repotting in the same size container, you must ensure that as much of the old soil as possible is discarded without harming the root structure. Fill the new container with all-purpose tropical soil/peat mix, transfer the plant, and water it lightly.\n\nIf you decide to use a larger container, it should be 1.5 times the previous size or more. For example: if the original pot diameter was 4 inches, then the new one should be at least 6 inches! Transfer your Pilea directly into the larger container with the old soil undisturbed, but make sure there is enough new soil to fill the container. \n\nWhen overwatered, the Pilea's leaves will develop brown spotting and edging, and the leaves will begin to fall off the plant. If your plant is showing these symptoms, feel the soil. If it’s moist then hold off on watering until the soil dries all the way through the pot. Reference the care instructions for re-establishing a watering routine with your plant. Other causes for brown spotting are too much fertilizer, too much sun, or pests.",
    "imgURL" : "pilea-peperomioides.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec81"),
    "name" : "Spider plant",
    "botanicalName" : "Chlorophytum comosum",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-24T08:07:01.542-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "medium"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "75",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "well-draining soil, can be planted in poor soil",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-01",
    "links" : [ 
        "https://www.almanac.com/plant/spider-plants"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "I have these as adults and babies. As of 6/20/21, at least 4 total.",
    "createdAt" : "2003-05-11",
    "updatedAt" : ISODate("2021-08-24T08:07:01.865-05:00"),
    "imgURL" : "spider-plant.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec82"),
    "name" : "Haworthia (Zebra Wart)",
    "botanicalName" : "Haworthia reinwardtii",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-20T08:57:04.549-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "indirect"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "haworthia-zebra-wart.jpg",
    "links" : [ 
        "https:worldofsucculents.com/haworthia-reinwardtii-zebra-wart/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-21T08:57:04.872-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec83"),
    "name" : "Pothos",
    "botanicalName" : "Epipremnum aureum",
    "status" : "in progress",
    "location" : "indoor",
    "locationSec" : "kitchen",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "indirect"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "80",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "any well draining potting soil",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-03",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Bright indirect light is ideal, but plants are tolerant of low light and fluorescent lighting. Avoid direct sunlight, which can burn or discolor foliage.",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec84"),
    "name" : "Fiddleleaf fig plant",
    "botanicalName" : "Ficus lyrata",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate to moist",
    "lastWatered" : [ 
        ISODate("2021-08-05T16:41:34.107-05:00"), 
        ISODate("2021-08-13T21:35:17.550-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "filtered"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "80",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Any good, fast-draining potting soil will likely do",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.thespruce.com/grow-fiddle-leaf-fig-indoors-1902756", 
        "https:www.gardenista.com/posts/10-things-nobody-tells-fiddle-leaf-fig-trees-houseplant-growing-care-guide/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "I have more than one of these. A small one I picked up from Trader Joe's, and has gotten bigger over time. A larger one I picked up from Target.\n\nKnown to be finicky. As long as the water schedule is consistent, it seem to be pretty happy. \n\n8/10/21: I put the smaller one under the newer full spectrum grow lights two weeks ago and it seems happy, producing new leaves quickly. However, the bottom leaves suddenly started getting yellow and dropping, and I think that's because I started going further between waterings. Will try to water every 5 days and see how that goes.\n\n8/5/21: a bunch of old leaves are turning yellow and dropping off. keep an eye on it. ",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-14T21:35:17.891-05:00"),
    "description" : "These plants are native to tropical parts of Africa, where they thrive in very warm and wet conditions. This makes them somewhat challenging for the home grower, who is likely to have trouble duplicating these steamy conditions. However, they are relatively tough plants that can withstand a less-than-perfect environment for a fairly long time.\n\nFiddle-leaf figs are not especially demanding plants as long as you can get their growing conditions right. When grown as a houseplant, be prepared to rotate your fiddle-leaf fig every few days so a different part faces the light source. That way, it will grow evenly, rather than lean toward the light.\n\nAlso, every week or two dust the leaves with a damp cloth. Not only does this make the leaves appear shinier and more appealing, but it also allows more sunlight to hit the leaves for photosynthesis. Moreover, you can trim off any damaged or dead leaves as they arise, as they no longer benefit the plant. And if you wish, you can prune off the top of the main stem for a bushier growth habit.",
    "imgURL" : "fiddle-leaf-fig.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec85"),
    "name" : "Bird of paradise",
    "botanicalName" : "Strelitzia reginae",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room window",
    "locationPreferred" : "outdoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "part sun"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "50",
    "tempHigh" : "80",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "All-purpose potting mix",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-18",
    "links" : [ 
        "https:www.fieldnotesbystudioplants.com/houseplants/bird-of-paradise-plant-care-strelitzia"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "  Plant to repot in a big container, as soon as I can figure out the best plant to put it away from the radiator, and the best way to make sure it's getting good light. This plant will get huge.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-06-20T14:43:56.807-05:00"),
    "imgURL" : "bird-of-paradise.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec86"),
    "name" : "Red Aglaonema",
    "botanicalName" : "Aglaonema",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate to dry",
    "lastWatered" : [ 
        ISODate("2021-08-17T17:30:32.167-05:00"), 
        ISODate("2021-08-24T07:53:35.316-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "low to bright light"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "",
    "hardiness" : "65",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "A well-drained, lightly acidic potting soil",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-01",
    "links" : [ 
        "https:www.thespruce.com/grow-aglaonema-houseplants-1902734"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "mist\n\n8/15/21: This one seems to have issues with fungus gnats, even though I don't water it very often. However it seems to be thriving in the spot where it's just under the full spectrum grow lights. Consistent new leaves, so it is filling out.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-24T07:53:35.340-05:00"),
    "imgURL" : "red-aglaonema.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec87"),
    "name" : "Pincushion peperomia",
    "botanicalName" : "Peperomia ferreyrae",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-05T16:42:31.392-05:00"), 
        ISODate("2021-08-06T07:02:03.720-05:00"), 
        ISODate("2021-08-13T21:36:25.902-05:00"), 
        ISODate("2021-08-19T17:48:02.010-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "75",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : ISODate("2021-07-31T19:00:00.000-05:00"),
    "links" : [ 
        "https:plantcaretoday.com/peperomia-ferreyrae.html", 
        "https:www.houseplantsexpert.com/peperomia-ferreyrae.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Use a potting mix prepared with two parts peat and one part perlite or sand for best results.\n\n8/19/21: there's another pot that I put cuttings from the mother plant into on 8/1/21. under the same grow light. last watered on Tuesday 8/17/21.\n\n8/1/21: Cut plant back to the last 2 inches. Trying to produce a bushy plant that can keep itself up. Will put it under the brighter grow lights. Last potted 10/1/2020, potted again today.\n\n8/5/21: watered very lightly, in the center. trying to prevent fungus gnats. will water again in four days or so.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-19T17:49:12.207-05:00"),
    "imgURL" : "pincushion-peperomia.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec88"),
    "name" : "Umbrella plant",
    "botanicalName" : "Schefflera arboricola",
    "status" : "\"\"",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moist",
    "lastWatered" : [ 
        ISODate("2021-08-13T21:11:12.209-05:00"), 
        ISODate("2021-08-19T18:08:08.853-05:00"), 
        ISODate("2021-08-24T07:56:40.647-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "indirect"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-01",
    "links" : [ 
        "https:www.thespruce.com/grow-schefflera-plants-inside-1902771"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "8/19/21: still yellowing, dropping leaves. will water it every few days and see what happens.",
    "createdAt" : "2020-11-08",
    "updatedAt" : ISODate("2021-08-24T07:56:40.970-05:00"),
    "imgURL" : "schefflera.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec89"),
    "name" : "Bamboo plant",
    "botanicalName" : "Dracaena sanderiana",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room window",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        "2020-10-01", 
        ISODate("2021-07-25T09:19:52.424-05:00"), 
        ISODate("2021-08-24T08:07:19.376-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "indirect"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "95",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "11",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.proflowers.com/blog/lucky-bamboo-care", 
        "https:bambooplantshq.com/lucky-bamboo-turning-white-or-pale/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-24T08:07:19.395-05:00"),
    "imgURL" : "dracaena-sanderiana.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec8a"),
    "name" : "Sensitive plant",
    "botanicalName" : "Mimosa pudica",
    "status" : "in progress",
    "location" : "indoor",
    "locationSec" : "plant shelf",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "medium"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "85",
    "hardiness" : "60",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "loamy, peat moss",
    "cycle" : "",
    "hardinessZoneMin" : "9 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.youtube.com/watch?v=Fl-3lpYXnYg", 
        "https:homeguides.sfgate.com/care-sensitive-plant-mimosa-pudica-67276.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "allow to dry and wilt a little but watch closely. do not overwater. yellow leaves appear when overwatered.\r\nmostly died. we'll see what happens.",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2020-12-24"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec8b"),
    "name" : "Stapelia",
    "botanicalName" : "Stapelia hirsuta",
    "status" : "in progress",
    "location" : "indoor",
    "locationSec" : "front window",
    "locationPreferred" : "",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "50",
    "tempHigh" : "95",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "airy, well-drained soil",
    "cycle" : "",
    "hardinessZoneMin" : "9 - 10",
    "hardinessZoneMax" : "",
    "lastPotted" : "2019-01-01",
    "links" : [ 
        "http:pza.sanbi.org/stapelia", 
        "https:plantcaretoday.com/carrion-flower-stapelia.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "water once every 3-4 weeks in the winter, once every other week in the growing season. watch for mealy bugs, though they tend to appear from overwatering\n\n1/1/2019: when I got it from Scott, he said it needed to be repotted so I did. Half of the plant died in a few days. Mostly used the same soil.\n\n8/7/21: seems to overall be good. The biggest part of the plant is hanging over the side, is heavy and was pulling the roots out of the soil. Staked it, and added more soil on top. Tried to not disturb the roots too much.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-07T21:17:41.642-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec8c"),
    "name" : "Janet Craig Compacta (with stalk)",
    "botanicalName" : "Dracaena deremensis",
    "status" : "inactive",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "80",
    "hardiness" : "40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "9 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-01",
    "links" : [ 
        "https:plantcaretoday.com/dracaena-compacta.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "tall one with stalk. yellow leaf, too little water or too much sunlight. Also brown leaf tips can mean needs to water with distilled.\r\ndied when transferred from water only",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2020-12-24"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec8d"),
    "name" : "Rabbit's Foot Fern",
    "botanicalName" : "Davallia fejeensis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "80",
    "hardiness" : "55",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "50% peat and chopped bark",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.epicgardening.com/rabbits-foot-fern/", 
        "https:www.gardeningknowhow.com/houseplants/rabbits-foot-fern/repotting-rabbits-foot-fern.htm"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "water when top inch of soil is dry. Shallow pots work well for growing this houseplant. Make sure to change the pot every few years. Rabbit’s foot ferns need repotting about every two years, and the best time to repot is in spring. Mix regular potting soil half-and-half with sand to create an ideal medium for rabbit’s foot ferns. This is an excellent time to divide large plants.",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2020-11-08"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec8e"),
    "name" : "Purple Waffle Plant",
    "botanicalName" : "hemigraphis alternata",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "plant shelf",
    "locationPreferred" : "",
    "waterPref" : "moist",
    "lastWatered" : [ 
        ISODate("2021-08-07T07:53:54.094-05:00"), 
        ISODate("2021-08-11T08:16:09.858-05:00"), 
        ISODate("2021-08-11T08:16:22.822-05:00"), 
        ISODate("2021-08-17T17:26:56.324-05:00"), 
        ISODate("2021-08-12T17:27:45.512-05:00"), 
        ISODate("2021-08-17T17:27:54.906-05:00"), 
        ISODate("2021-08-24T08:04:39.132-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "55",
    "tempHigh" : "80",
    "hardiness" : "55",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:lunarly.com/blogs/plant-care/grow-a-vibrant-purple-waffle-plant"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "low growing\ndied, didn't keep it moist enough\n\n8/24/21: forgot to water it, a bunch of leaves died. will see if it comes back.",
    "createdAt" : "2020-10-11",
    "updatedAt" : ISODate("2021-08-24T08:05:03.186-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec8f"),
    "name" : "Corn Plant",
    "botanicalName" : "Dracaena massangeana",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "dry",
    "lastWatered" : [ 
        ISODate("2021-08-17T17:52:35.687-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "75",
    "tempHigh" : "60",
    "hardiness" : "60",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "11",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.ourhouseplants.com/plants/dracaena-fragrans", 
        "https:www.hunker.com/12135227/how-to-care-for-a-corn-plant-dracaena-fragrans", 
        "https:www.thespruce.com/grow-dracaena-fragrans-indoors-1902748"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Soil shouldn't be allowed to dry out completely. Does not like direct sunlight. Does prefer some humidity. Repot every two or three years. Avoid using soil mixes that contain a large amount of perlite or fertilizers containing superphosphate with these plants. That's because Dracaenas are very sensitive to fluoride, which perlite and superphosphate contain. Can water with distilled water. In terms of lighting, the ideal location for this plant indoors is near a window with filtered sunlight. Too little light will result in the leaves losing their stripes, and it can cause the plant's growth to become stunted. But direct sun can burn the plant and cause it to wilt. Outdoors, the plant does best in part shade.\n\n8/19/21: still keeping it sparingly watered. like the dumb cane plant, seems to attract a lot of fungus gnats when wet. had to repot during the early summer because of it.",
    "createdAt" : "2021-04-04",
    "updatedAt" : ISODate("2021-08-21T08:09:23.232-05:00"),
    "imgURL" : "corn-plant.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec90"),
    "name" : "Boston Fern",
    "botanicalName" : "Nephrolepis exaltata",
    "status" : "in progress",
    "location" : "indoor",
    "locationSec" : "front window",
    "locationPreferred" : "",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "indirect"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "75",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "5.5",
    "soilContent" : "loamy, rich, organic mixture as a potting soil, peat moss",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "12",
    "lastPotted" : "2020-10-18",
    "imgURL" : "bostonfern.jpg",
    "links" : [ 
        "https:www.gardeningknowhow.com/houseplants/boston-fern/boston-fern-care.htm", 
        "https:www.thespruce.com/grow-nephrolepis-boston-ferns-1902723"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Don't like soggy soil. Mist frequently.",
    "createdAt" : "2020-12-24",
    "updatedAt" : ISODate("2021-05-23T19:58:35.351-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec91"),
    "name" : "Jade",
    "botanicalName" : "Crassula argentea",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-24T07:47:43.851-05:00"), 
        ISODate("2021-08-17T07:47:51.876-05:00"), 
        ISODate("2021-08-24T07:48:11.099-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "indirect"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "75",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "5.5",
    "soilContent" : "potting mix, half perlite",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 12",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-01",
    "links" : [ 
        "https:www.almanac.com/plant/jade-plants"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "young plants need bright, indirect sunlight, older need direct sunlight for 4 hours. water when mostly dried out, less in winter.",
    "createdAt" : "2020-11-08",
    "updatedAt" : ISODate("2021-08-24T07:48:11.113-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec92"),
    "name" : "ZZ Plant",
    "botanicalName" : "Zamioculcas zamifolia",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-02T07:46:27.756-05:00"), 
        ISODate("2021-08-07T15:36:33.271-05:00"), 
        ISODate("2021-08-24T07:46:50.242-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright", 
        "indirect"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "90",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "5.5",
    "soilContent" : "succulent soil with a little bit of regular potting mix, half perlite and the existing bark material",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 12",
    "hardinessZoneMax" : "",
    "lastPotted" : ISODate("2021-08-01T19:00:00.000-05:00"),
    "links" : [ 
        "https:www.gardeningknowhow.com/houseplants/zz-plant/caring-for-zz-plant.htm"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "young plants need bright, indirect sunlight, older need direct sunlight for 4 hours. water when mostly dried out, less in winter.\n\n8/4/2021: Previously repotted on 10/2/2020. Potted again two days ago as the roots were so thick it was warping the pot it was in. Am hoping that it was only beginning to turn yellow because it was too tight in the pot. Will keep an eye on it.",
    "createdAt" : "2020-11-08",
    "updatedAt" : ISODate("2021-08-24T07:46:50.259-05:00"),
    "imgURL" : "zz-plant.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec93"),
    "name" : "Snake plant (Mother in Law's Tongue)",
    "botanicalName" : "Sansevieria trifasciata",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "low"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "80",
    "hardiness" : "45",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : "https:www.joyusgarden.com/sansevierias-snake-plant-care/",
    "propogating" : "",
    "watching" : "",
    "notes" : "slow growing. make sure soil is completely dry before watering again. water every 2-8 weeks, less often in winter.",
    "createdAt" : "2020-10-11",
    "updatedAt" : "2021-03-18"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec94"),
    "name" : "Snake plant",
    "botanicalName" : "Sansevieria fischeri",
    "status" : "",
    "location" : "",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2020-10-24",
    "updatedAt" : "2020-10-24"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec95"),
    "name" : "Bird's Nest Snake Plant",
    "botanicalName" : "Sansevieria trifasciata ‘Hahnii’",
    "status" : "",
    "location" : "",
    "locationSec" : "plant shelf",
    "locationPreferred" : "",
    "waterPref" : "dry",
    "lastWatered" : [ 
        ISODate("2021-08-06T21:12:15.745-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "well draining potting soil",
    "cycle" : "",
    "hardinessZoneMin" : "10a",
    "hardinessZoneMax" : "11a",
    "lastPotted" : "2020-10-03",
    "imgURL" : "birdsnestsnakeplant.jpg",
    "links" : [ 
        "https:desertsucculents.com/birds-nest-sansevieria-trifasciata-hahnii-details-growing-tips/", 
        "https:www.urbanorganicyield.com/sansevieria-varieties/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "These are small and slow growing so they can be grown in terrariums and dish gardens. Propagation can be done by dividing the rootball, from offsets and from leaf cuttings.\n\nOn 8/7/21, watered the one in the white pot with one pup, not the other one that has two in it.",
    "createdAt" : "2021-04-04",
    "updatedAt" : ISODate("2021-08-07T21:12:51.580-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec96"),
    "name" : "African milk tree plant",
    "botanicalName" : "Euphorbia trigona rubra",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room window",
    "locationPreferred" : "",
    "waterPref" : "dry",
    "lastWatered" : [ 
        ISODate("2021-06-13T00:01:27.344-05:00"), 
        ISODate("2021-06-19T21:56:16.468-05:00"), 
        ISODate("2021-08-21T16:01:48.314-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "55",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-18",
    "links" : [ 
        "https:dengarden.com/gardening/Euphorbia-Trigona-African-Milk-Tree", 
        "https:www.thespruce.com/african-milk-tree-profile-4846360"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Also known as Rubra or Royal Red. Can water once a week. Drought tolerant. Can grow up to 2 feet a year.\n\n7/23/21: a lot of the leaves were lost earlier in the spring, but at the beginning of July, the leaves started to grow back. Can't tell quite yet if the leaves will cover the whole plant again. These are just at the top for now.",
    "createdAt" : "2021-04-04",
    "updatedAt" : ISODate("2021-08-21T16:01:48.331-05:00"),
    "imgURL" : "african-milk-tree.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec97"),
    "name" : "Fluffy Ruffle Fern",
    "botanicalName" : "Nephrolepis exaltata",
    "status" : "inactive",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "80",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "garden soil, sand, peat moss or spaghnum",
    "cycle" : "",
    "hardinessZoneMin" : "11 - 12",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.hendriksgreenhouses.com/fluffy-ruffle"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Hybrid of a boston fern. Thrives in humidity. Mist frequently. Don't like soggy soil\r\nhad fungus gnats. put outside, got cold and it died.",
    "createdAt" : "2020-12-24",
    "updatedAt" : "2020-12-24"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec98"),
    "name" : "Mini fan plant",
    "botanicalName" : "",
    "status" : "inactive",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "regular potting soil",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-08-28",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Not sure what the plant is named. Found in mini plant section at Gethsemane. Check frequently and do not allow to get completely dry or leaves will die.\r\n\r\nUpdate: died in December",
    "createdAt" : "2021-03-13",
    "updatedAt" : "2021-03-13"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec99"),
    "name" : "Mini bushy plant",
    "botanicalName" : "",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Not sure what the plant is named. Found in Mariano's. water.",
    "createdAt" : "2020-10-25",
    "updatedAt" : "2020-10-25"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec9a"),
    "name" : "Mini flower succulent",
    "botanicalName" : "",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Not sure what the plant is named. Found in Trader Joe's. Very tall right now, need to be repotted.",
    "createdAt" : "2020-10-25",
    "updatedAt" : "2020-10-25"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec9b"),
    "name" : "Prayer Plant",
    "botanicalName" : "Maranta leuconeura",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-05T16:38:45.377-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.thespruce.com/grow-maranta-inside-1902647"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2020-11-08",
    "updatedAt" : ISODate("2021-08-05T16:38:45.388-05:00"),
    "imgURL" : "maranta.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec9c"),
    "name" : "Peacock plant",
    "botanicalName" : "Calathea makoyana",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "",
    "waterPref" : "moist",
    "lastWatered" : [ 
        ISODate("2021-08-04T07:54:24.009-05:00"), 
        ISODate("2021-08-15T08:30:44.123-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "low medium"
    ],
    "plantType" : "houseplant",
    "trouble" : "Y",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "75",
    "hardiness" : "60",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "peat, sand, perlite, 1-1-1",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-18",
    "links" : [ 
        "https:www.houseplantsexpert.com/peacock-plant-calathea-makoyana.html"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "evenly moist but not wet. if leaves are turning brown, more humidity. \n\nUpdate In January 2020, all the leaves curled up. Had to cut off two of the dying stems. Seems to curl up under the constant medium light on the plant shelf, probably dry there as well. Have it currently in the dining room. Changing Water from moist to moderate. After being in the dining room for a week and a half, leaves uncurled. No new leaves yet.\n\nApril 2021, new leaves have been cropping up.",
    "createdAt" : "2021-04-11",
    "updatedAt" : ISODate("2021-08-15T08:30:44.136-05:00"),
    "imgURL" : "calathea.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec9d"),
    "name" : "Asparagus fern",
    "botanicalName" : "Asparagus densiflorus",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "fish tank",
    "locationPreferred" : "",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-21T16:02:10.620-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part shade"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "9 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "drought tolerant. current one is a baby succulent.",
    "createdAt" : "2020-12-24",
    "updatedAt" : ISODate("2021-08-21T16:02:10.636-05:00"),
    "imgURL" : "asparagus-fern.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec9e"),
    "name" : "Peace lily",
    "botanicalName" : "Spathiphyllum wallisi",
    "status" : "in progress",
    "location" : "indoor",
    "locationSec" : "bedroom",
    "locationPreferred" : "",
    "waterPref" : "dry",
    "lastWatered" : [ 
        ISODate("2021-08-06T07:59:57.809-05:00"), 
        ISODate("2021-08-15T17:31:22.174-05:00"), 
        ISODate("2021-08-24T08:04:16.932-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "80",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Peat-based potting mix with perlite, sand, or bark",
    "cycle" : "",
    "hardinessZoneMin" : "11 - 12",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https://www.thespruce.com/grow-peace-lilies-1902767"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Drought tolerant. Wait until it droops a little to water. When your plant’s roots show or your peace lily seems to be drinking up all its water within a few days, re-pot into a larger container. Your plant may need to be gradually moved into larger and larger containers, but generally peace lilies won’t need to go into a pot larger than 10 inches.",
    "createdAt" : "2020-12-24",
    "updatedAt" : ISODate("2021-08-24T08:04:16.952-05:00"),
    "description" : "Peace Lily Care\nPeace lilies are generally grown in the ground outdoors only in tropical regions such as Florida or Hawaii; elsewhere, they are grown only as potted plants. If you have potted peace lilies, you can move them outside during the summer months, but once temperatures dip, bring them back inside. When grown in pots, soil for a peace lily must be kept moist but not soggy, which will cause the leaves to turn yellow. Avoid direct sunlight, but do give them lots of bright filtered light. They like warm conditions and will react badly if exposed to temperatures below 40 degrees Fahrenheit.\n\nLight\nPeace lilies are shade-loving plants in their native habitats, but when grown indoors they need plenty of filtered light, though not direct sunlight. Some varieties can withstand more light than others. Curled, pale leaves generally indicate that the plant is receiving too much light and scorched leaves indicate too much direct sun. In either case, the plant should be moved to a shadier location.\n\nSoil\nPeace lilies like a rich, loose potting soil containing plenty of organic material. These plants are native to tropical canopy conditions where the soil is rich with deteriorating plant material. Growing them as outdoor garden plants requires soil that mimics this composition.\n\nWater\nDuring the summer, water and mist peace lilies frequently because they thrive with higher humidity, such as that found in the rainforest. In winter, reduce watering but never allow the soil to dry out. If your water is highly chlorinated, use filtered water. Or, you can allow tap water to sit for several days until the chlorine evaporates out.\n\nTemperature and Humidity\nThese plants really prefer moist warmth. Avoid cold drafts and temperatures below 55 degrees Fahrenheit, because the plant will die in cold temperatures. The ideal temperature range is 65 to 80 degrees Fahrenheit. Spritz the leaves every week with softened or distilled water throughout the summer growing season."
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ec9f"),
    "name" : "Gerbera",
    "botanicalName" : "Gerbera jamesonii",
    "status" : "in progress",
    "location" : "outdoor",
    "locationSec" : "plant shelf",
    "locationPreferred" : "outdoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "houseplant",
    "trouble" : "Y",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "80",
    "tempHigh" : "50",
    "hardiness" : "45",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "rich and moist",
    "cycle" : "perennial",
    "hardinessZoneMin" : "8 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-17",
    "links" : [ 
        "https:www.thespruce.com/gerber-daises-4121360"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Keep watch. Gerbera daisies require full sun to partial shade, but they do not like intense heat. That said, allow for morning sun in warmer zones and full sun in cooler climates. Try not to plant Gerbera near a foundation or stone wall that will reflect heat back onto the plant.",
    "createdAt" : "2020-10-18",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca0"),
    "name" : "Janet Craig Compacta (small)",
    "botanicalName" : "Dracaena deremensis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-24T08:04:30.753-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "65",
    "tempHigh" : "80",
    "hardiness" : "40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-10-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "smaller version. keep an eye on it. use distilled water if the edge turn brown.",
    "createdAt" : "2020-10-25",
    "updatedAt" : ISODate("2021-08-24T08:04:30.768-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca1"),
    "name" : "Pothos",
    "botanicalName" : "Epipremnum aureum",
    "status" : "in progress",
    "location" : "indoor",
    "locationSec" : "plant shelf",
    "locationPreferred" : "",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-21T15:57:52.888-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "60",
    "tempHigh" : "80",
    "hardiness" : "50",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "any well draining potting soil",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2020-11-02",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Bright indirect light is ideal, but plants are tolerant of low light and fluorescent lighting. Avoid direct sunlight, which can burn or discolor foliage.",
    "createdAt" : "2020-12-24",
    "updatedAt" : ISODate("2021-08-21T15:57:52.957-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca2"),
    "name" : "Haworthia magnifica",
    "botanicalName" : "Haworthia magnifica",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-20T08:56:27.677-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part shade"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "95",
    "tempHigh" : "65",
    "hardiness" : "60",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "succulent soil dry",
    "cycle" : "",
    "hardinessZoneMin" : "10 - 11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:worldofsucculents.com/haworthia-magnifica/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Can get up to 16 inches, but usually 3-5. Can form flowers. Keep dry. Look out for sunburned spots.",
    "createdAt" : "2021-03-13",
    "updatedAt" : ISODate("2021-08-21T08:56:28.028-05:00"),
    "imgURL" : "haworthia-magnifica.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca3"),
    "name" : "Flaming katy",
    "botanicalName" : "Kalanchoe blossfeldiana",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "plant shelf",
    "locationPreferred" : "",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-17T08:04:00.090-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "72",
    "tempHigh" : "50",
    "hardiness" : "40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:www.ourhouseplants.com/plants/flaming-katy"
    ],
    "propogating" : "Y",
    "watching" : "",
    "notes" : "Can propagate with leaf cuttings. Will flower again with bright enough light.",
    "createdAt" : "2021-03-13",
    "updatedAt" : ISODate("2021-08-21T08:04:00.433-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca5"),
    "name" : "Black Hens and Chicks",
    "botanicalName" : "Echeveria Black Prince",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part sun"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "80",
    "tempHigh" : "20",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "https:succulentplantcare.com/echeveria-black-prince-care-types-propagation-blooms/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "This should be potted in full sunlight. Gets very tall and leggy in low light.",
    "createdAt" : "2021-03-13",
    "updatedAt" : ISODate("2021-08-21T07:55:23.082-05:00"),
    "imgURL" : "black-hens-and-chicks.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca6"),
    "name" : "Buttercrunch lettuce",
    "botanicalName" : "Lactuca sativa var. capitata",
    "status" : "inactive",
    "location" : "outdoor",
    "locationSec" : "balcony railing",
    "locationPreferred" : "outdoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "vegetable",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "80",
    "tempHigh" : "45",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "moist but well-drained, nutrient-rich soil. Amend soil with compost, blood meal or other organic matter prior to planting. Fertile soil helps fuel fast, tender leaf development.",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-03",
    "links" : [ 
        "https:www.thespruce.com/how-to-grow-and-care-for-buttercrunch-lettuce-4767592"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "when it gets hot outside, look to move buttercrunch lettuce into a cooler spot or it will wilt and bolt faster. keep moderate to moist",
    "createdAt" : "2021-04-04",
    "updatedAt" : ISODate("2021-07-18T16:16:53.577-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca7"),
    "name" : "Bear's paw",
    "botanicalName" : "Cotyledon tomentosa",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room window",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-07-31T09:29:00.782-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "30",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Well draining soil for succulents. Perlite or coarse sand can be added to ordinary potting soil.",
    "cycle" : "",
    "hardinessZoneMin" : "9b",
    "hardinessZoneMax" : "11b",
    "lastPotted" : "2021-03-01",
    "links" : [ 
        "https:succulentsbox.com/blogs/blog/how-to-care-for-cotyledon-tomentosa-bears-paw"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "When watering this one, make sure to let it soak in water. Just watering it from the top will not be enough. The paws will get squishy.\n\n8/1/21: want to move this under a grow light so it gets bright light, instead of in the direct sun where it's been since April.",
    "createdAt" : "2021-04-11",
    "updatedAt" : ISODate("2021-08-01T09:53:30.435-05:00"),
    "imgURL" : "bear-paw-cotyledon.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca8"),
    "name" : "Haworthia glauca",
    "botanicalName" : "Haworthia glauca var herrei",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room window",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-20T08:56:49.106-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "well-drained succulent soil",
    "cycle" : "",
    "hardinessZoneMin" : "10a-11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-03-01",
    "imgURL" : "haworthia-glauca-herrei.jpg",
    "links" : [ 
        "https:plantlust.com/plants/32595/haworthiopsis-glauca-var-herrei/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2021-04-11",
    "updatedAt" : ISODate("2021-08-21T08:56:49.123-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eca9"),
    "name" : "Haworthia venosa (Veined Haworthia)",
    "botanicalName" : "Haworthia venosa tessellata",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "front living room window",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [ 
        ISODate("2021-08-06T11:58:20.231-05:00"), 
        ISODate("2021-08-20T08:57:30.660-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "25",
    "hardiness" : "25",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "well drained succulent soil",
    "cycle" : "",
    "hardinessZoneMin" : "9b-11b",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-03-01",
    "imgURL" : "haworthia-venosa-tessellata.jpg",
    "links" : [ 
        "https:worldofsucculents.com/haworthia-venosa-tessellata-veined-haworthia/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "7/23/21: When left too dry, starts to shrivel and turn red. Deep water (let sit in container of water for an hour, then dump out the excess) and it will return to normal, plump size in a few days. \n\nGrew 3 pups during the summer, and a huge stem end of spring/early summer.\n\n8/6/21: noticed a couple days ago it was growing another stem.",
    "createdAt" : "2021-04-11",
    "updatedAt" : ISODate("2021-08-21T08:57:30.977-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecaa"),
    "name" : "Queen Victoria Agave",
    "botanicalName" : "Agave victoriae-reginae",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room",
    "locationPreferred" : "indoor",
    "waterPref" : "dry",
    "lastWatered" : [ 
        ISODate("2021-06-13T15:31:36.220-05:00"), 
        ISODate("2021-08-05T11:59:13.616-05:00"), 
        ISODate("2021-08-06T11:59:22.319-05:00"), 
        ISODate("2021-08-17T17:32:09.609-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "20",
    "tempHigh" : "",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Provide lean to average, well-drained soil.",
    "cycle" : "",
    "hardinessZoneMin" : "9-11",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-28",
    "imgURL" : "queen-victoria-agave.jpg",
    "links" : [ 
        "https:www.horticultureunlimited.com/plant-guide/queen-victoria-agave/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Provide lean to average, well-drained soil. Thrives in full sun in cool coastal areas; shelter from harsh afternoon sun and reflected heat in hot summer areas. Drought tolerant once established, but looks best with periodic water in extreme heat. The mother plant declines after flowering; younger rosettes will perpetuate the plant.",
    "createdAt" : "2021-04-28",
    "updatedAt" : ISODate("2021-08-19T17:32:09.628-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecab"),
    "name" : "Spinach (Bloomsdale) (Seeds)",
    "botanicalName" : "Spinacia oleracea",
    "status" : "",
    "location" : "",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "vegetable",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "20",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "bactktotheroots.com/seedinfo"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "USDA Organic (Back to the Roots). 1/2\" planting depth. 6\" spacing. 7-14 days to germination. 40-48 days to harvest. Cold weather crop.",
    "createdAt" : "2021-04-20",
    "updatedAt" : "2021-04-20"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecac"),
    "name" : "Arugula (Roquette) (Seeds)",
    "botanicalName" : "Eruca vesicaria subsp. sativa",
    "status" : "inactive",
    "location" : "",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "vegetable",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "annual",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [ 
        "backtotheroots.com/seedinfo"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Cool season plant. Leafy plants grow 6 to 12 inches tall while in the harvest stage. Once they bolt in late spring or early summer, the bloom stalks may grow 24 to 36 inches with (edible!) tan-white flowers on top, which signals that it is time to make room for warm-weather crops. However, some gardeners continue to harvest the leaves even from the tall plants, liking the stronger taste. You can even cut them back and pick some more until you finally tire of that and then pull them up and wait until fall to plant again.\n\n1/8' planting depth. 6\" spacing. 5-7 days to germination. 40 days to harvest. Plant seeds outdoors in dense 2-4\" bands for baby greens, or 6\" apart for full-sized plants.",
    "createdAt" : "2021-04-20",
    "updatedAt" : ISODate("2021-07-18T16:16:08.039-05:00"),
    "imgURL" : "arugula.jpg"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecad"),
    "name" : "Mesclun (Spicy Mix)",
    "botanicalName" : "",
    "status" : "",
    "location" : "",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "vegetable",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Full sun 6+ hours. 21-35 days to harvest. Depth 1/4\". Thin 12\". Container friendly. Includes 20% lettuces 'Red Salad Bowl' , 20% mustard 'Mizuna', 20% endive 'Green Curled', 20% radicchio 'Red Treviso' and 20% arugula 'Rocket'. Sow in average soil in full sun in early spring, again in late summer for fall crop. Sow thinly in rows 12\" apart and cover with 1/4\" of fine soil. Firm lightly and keep evenly moist. Seedlings emerge in 10-14 days.",
    "createdAt" : "2021-04-20",
    "updatedAt" : "2021-04-20"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecae"),
    "name" : "Lemon Balm",
    "botanicalName" : "Melissa officinalis",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "outer railing",
    "locationPreferred" : "outdoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "80",
    "tempHigh" : "-20",
    "hardiness" : "-20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "perennial",
    "hardinessZoneMin" : "4-9",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-17",
    "links" : [ 
        "https:harvesttotable.com/how_to_grow_lemon_balm/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : " Lemon balm grows best in cool weather. In freezing temperatures, it will die back to the ground then regrow from the roots in spring. Plant form and size: Lemon balm grows to 12 to 24 inches tall and wide; it grows in clumps of branched stems with loose terminal clusters of small white to creamy yellow flowers at the top. Lemon balm may be mistaken for mint at first glance. Flowers: Small white flowers are borne in tight clusters at the axles along the length of the stems. Bloom time: Lemon balm blooms throughout the summer and into fall. Leaves: Lemon balm has lemon-scented, oval, toothed leaves that are heavily veined or quilted from 2 to 3 inches long arranged opposite one another on four-sided stems. Leave are coarsely toothed with a bristly surface.",
    "createdAt" : "2021-04-20",
    "updatedAt" : "2021-04-20"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecaf"),
    "name" : "Maidenhair Fern",
    "botanicalName" : "Adiantum pedatum",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "indoor and outdoor",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part shade"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "-40",
    "hardiness" : "-40",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "perennial",
    "hardinessZoneMin" : "3-9",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "maidenhairfern.jpg",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Note: probably a southern maidenhair fern that has different requirements than a northern. A graceful, delicate-looking fern, beautiful in rock gardens, shaded gardens, and woodland settings. Complements wild ginger, pulmonaria, hellebore, and hosta as well as spring-flowering bulbs. The fronds can be used as filler in bouquets. Easily grown in average, medium, well-drained soil in part shade to full shade. Prefers moist, humusy, acidic soils in full shade. Spreads slowly by creeping, branching rhizomes to form large colonies over time..",
    "createdAt" : "2021-04-22",
    "updatedAt" : "2021-04-22"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb0"),
    "name" : "Cape sundew octopus plant",
    "botanicalName" : "Drosera capensis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room front window",
    "locationPreferred" : "indoor",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "45",
    "tempHigh" : "90",
    "hardiness" : "45",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Live sphagnum moss or a half and half mix of peat moss and horticultural sand.",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "cape-sundew.jpg",
    "links" : [ 
        "https:curiousplant.com/product/sundews/drosera-capensis-typical/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Drosera capensis, or the Cape Sundew, is a carnivorous plant species forming linear leaves up to 2.5 inches long. It is easy to care for and and may produce plantlets as it grows. The leaves are covered with tentacles (trichomes) that secrete a sticky “dew” to attract and catch prey. Do not fertilize.",
    "createdAt" : "2021-04-25",
    "updatedAt" : ISODate("2021-06-20T19:13:35.190-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb1"),
    "name" : "Venus Flytrap",
    "botanicalName" : "Dionaea muscipula",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "living room front window",
    "locationPreferred" : "indoor",
    "waterPref" : "moist",
    "lastWatered" : [ 
        ISODate("2021-08-05T16:38:26.937-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "30",
    "tempHigh" : "100",
    "hardiness" : "20",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "The flytrap requires nutrient-free soil that provides good drainage and aeration. Use a standard soil mixture of 1 part peat moss and 1 part perlite. Never use potting soil, compost or fertilizer. These ingredients will kill your plant.",
    "cycle" : "",
    "hardinessZoneMin" : "8",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "venus-flytrap.jpg",
    "links" : [ 
        "https:www.carnivorousplants.co.uk/resources/venus-flytrap-complete-guide/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Check link, has good suggestions",
    "createdAt" : "2021-04-25",
    "updatedAt" : ISODate("2021-08-05T16:38:26.958-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb2"),
    "name" : "Mini Orchid (Blush)",
    "botanicalName" : "Phalaenopsis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "indirect"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "70",
    "tempHigh" : "90",
    "hardiness" : "70",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "miniorchid.jpg",
    "links" : [ 
        "https:www.justaddiceorchids.com/mini-phalaenopsis-orchids"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Water with 1 ice cube or 1.5 tablespoons of water once a week.",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-04-28"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb3"),
    "name" : "Mini Orchid (White))",
    "botanicalName" : "Phalaenopsis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "bedroom",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "indirect"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "70",
    "tempHigh" : "90",
    "hardiness" : "70",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "miniorchid.jpg",
    "links" : [ 
        "https:www.justaddiceorchids.com/mini-phalaenopsis-orchids"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Water with 1 ice cube or 1.5 tablespoons of water once a week.",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-04-28"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb4"),
    "name" : "Mini Orchid (Orange)",
    "botanicalName" : "Phalaenopsis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "kitchen",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "indirect"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "70",
    "tempHigh" : "90",
    "hardiness" : "70",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "miniorchid.jpg",
    "links" : [ 
        "https:www.justaddiceorchids.com/mini-phalaenopsis-orchids"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Water with 1 ice cube or 1.5 tablespoons of water once a week.",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-04-28"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb5"),
    "name" : "Orchid (Magenta)",
    "botanicalName" : "Phalaenopsis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "indirect"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "70",
    "tempHigh" : "90",
    "hardiness" : "70",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "miniorchid.jpg",
    "links" : [ 
        "https:www.aos.org/orchids/orchid-care.aspx"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Water with 1 ice cube or 1.5 tablespoons of water once a week.",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb6"),
    "name" : "Silver Squill (Scilla Violacea)",
    "botanicalName" : "Ledebouria socialis",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-06T11:59:45.208-05:00"), 
        ISODate("2021-08-15T17:36:52.063-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part shade"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "30",
    "tempHigh" : "80",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Silver squill thrives in well-drained soil, rich with nutrients. It grows well in different types of soil as long as the potting mixture provides good drainage.",
    "cycle" : "",
    "hardinessZoneMin" : "8b-11b",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "silver-squill.jpg",
    "links" : [ 
        "https:worldofsucculents.com/ledebouria-socialis-silver-squill/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Being drought-tolerant, it looks great in xeriscape gardens. Water only when the potting mixture dries out completely. ",
    "createdAt" : "2021-04-25",
    "updatedAt" : ISODate("2021-08-19T17:36:52.083-05:00"),
    "description" : "A small yet tough and hardy species, the silver squill (Ledebouria socialis) hails from the dry savannas of South Africa. This perennial is known for being a colorful and eye-catching houseplant. It has silvery leaves with green leopard spots, as well as unique teardrop-shaped bulbs that form above the ground. The silver squill also has the ability to store moisture in its purple, bulb-like stems during times of drought.\n\nOne of the most widely cultivated bulbs, silver squills are closely related to the hyacinth and are most often sold as a houseplant. However, they can be grown as a ground cover or even in xeriscape gardens in regions with warmer climates.\n\nThough it resembles a succulent, and possesses the same drought tolerance, the silver quill isn't technically this type of plant. The silver squill is a geophytic species of a bulbous perennial plant. You can expect its structurally unique leaves to grow in a lance shape and contain both silver spots and purple on the underside. Its flowers will grow during spring, displaying pink stems and small green flowers."
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb7"),
    "name" : "String of Pearls",
    "botanicalName" : "Senecio rowleyanus",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-05T07:16:50.745-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "40",
    "tempHigh" : "90",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Give this houseplant a well-draining sandy soil, preferably the type most suitable for growing cacti and succulent plants.",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9-11",
    "hardinessZoneMax" : "",
    "lastPotted" : ISODate("2021-07-31T19:00:00.000-05:00"),
    "imgURL" : "string-of-pearls.jpg",
    "links" : [ 
        "https:planterina.com/blogs/plant-care/senecio-care and https:www.thespruce.com/grow-string-of-pearls-succulents-1902522"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "7/31/31: Good & Planty overview of strings of pearls care. https://www.youtube.com/watch?v=pLrPdOa9xqk\n\nFirst repot on 4/26/2021. Last repot on 8/1/21 in a terracotta pot.\n",
    "createdAt" : "2021-05-02",
    "updatedAt" : ISODate("2021-08-06T07:17:48.289-05:00"),
    "description" : "Occasionally, you may find that pruning becomes necessary as part of your string of pearls care in order to maintain its size or appearance. This is simple to do. Trim off any dead stems and pearls, as well as any stems that have lost a lot of their beads. Pruning back will help promote fuller, more compact plants. String of pearls plants propagate quite easily, and doing so is integral to the plant's continued presence in your home. To propagate, take stem cuttings that are several inches in length, and allow them to heal over (form a scab on the cut end) for a few days before replanting. Fill a small pot with succulent or cactus mix and replant the cuttings in the soil. Allow the new plants to settle for a couple of days, then give them a good watering—they should take root quickly."
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb8"),
    "name" : "String of Turtles",
    "botanicalName" : "Peperomia prostrata",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-08-07T07:48:08.435-05:00"), 
        ISODate("2021-08-15T18:01:14.570-05:00"), 
        ISODate("2021-08-24T08:00:46.808-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "succulent",
    "trouble" : "Y",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "40",
    "tempHigh" : "90",
    "hardiness" : "30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Well-draining soil like a cactus/succulent mix",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : ISODate("2021-07-17T19:00:00.000-05:00"),
    "imgURL" : "string-of-turtles.jpg",
    "links" : [ 
        "https:www.thespruce.com/growing-string-of-turtles-5091591"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Occasionally, you may find that pruning becomes necessary as part of your string of pearls care in order to maintain its size or appearance. This is simple to do. Trim off any dead stems and pearls, as well as any stems that have lost a lot of their ‘beads.’ Pruning back will help promote fuller, more compact plants.\n\nGot a bigger version of this from Gethsemane Garden center on 7-2-21. It originally looked kind of light on the top and the tips looked like they were burning. On 7-18-21, moving from under the grow light to in front of the window so it has dappled light, repotting and am spraying with insecticide. Saw little bugs in the top soil, possibly a spider crawling on the pot. Put in a smaller 3 inch pot instead of the 4 inch. Can stand underwatering a lot better than overwatering. Only water when it's dry. Water it once a week, once every two weeks during the winter. Keep an eye on this one. \nhttps://www.youtube.com/watch?v=RYesJelxiok\n\n\nSmall string of turtles: watered on 8/8/21, 8/14/21. Also, sitting on the shelf under the full spectrum grow light that had a curtain over it, the leaves were getting bleached out.\n\n8/19/21: small one seems the same, not growing, not dying.",
    "createdAt" : "2021-05-02",
    "updatedAt" : ISODate("2021-08-24T08:00:46.825-05:00"),
    "description" : "The String of Turtles – Peperomia prostrata is a slow-growing perennial succulent belonging to the family piperaceae.\n\nNative to the rainforests of Brazil, ‘prostrata’ has several names:\n\n‘Magic marmer’ – a select variety of Prostrata\nString of Turtles Plant\n\nBright light can help peperomia prostrata grow well.\n\nIf the leaves are dark green, do not expose plants to too much direct sunlight as it can harm them.\n\nThese plants grow well as indoor plants under fluorescent lights.\n"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecb9"),
    "name" : "String of Dolphins",
    "botanicalName" : "Senecio peregrinus",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-07-29T09:15:38.002-05:00"), 
        ISODate("2021-08-14T08:22:23.991-05:00"), 
        ISODate("2021-08-24T07:59:57.742-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "succulent",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Well-draining soil like a cactus/succulent mix",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "string-of-dolphins.jpg",
    "links" : [ 
        "https:succulentsbox.com/blogs/blog/how-to-care-for-string-of-dolphins"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "8/1/21: moved string of dolphins from purple light to hanging under the newer beige grow lights. Went looking to figure out why leaves are flat instead of dolphin-shaped, and it appears that it was not getting enough light. Moving it higher under the purple light seemed to help a bit, but growth was slow though the plant has drape to it. Will keep an eye out to see if this helps.",
    "createdAt" : "2021-04-27",
    "updatedAt" : ISODate("2021-08-24T07:59:57.806-05:00"),
    "description" : "String of Dolphins prefers a bit more watering, which mostly makes them suffer from being under-watered. When you see signs like dull, deflated and dry leaves, that implies that your Dolphin is underwater. On the other hand, if you see squishy, yellow or transparent leaves, it means your Dolphin is getting more water than needed."
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecba"),
    "name" : "Tillandsia Houston Cotton Candy",
    "botanicalName" : "Tillandsia houston cotton candy",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "part shade"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-houston-cotton-candy.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A20650/Houston-Cotton-Candy/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia Houston Cotton Candy is another attractive form of Tillandsia Houston. The leaves tend to be a frosty, silvery gray and softer leaved than the standard T. Houston. The bloom is bright blush to rose pink and frequently those we offer are in bud. Easy to grow and yummy when it blooms!",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecbb"),
    "name" : "Tillandsia capitata red",
    "botanicalName" : "Tillandsia capitata",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-capitata-red.jpg",
    "links" : [ 
        "https:www.air-plants.com/blogs/air-plant-care-and-design-articles/tillandsia-spotlight-capitata-air-plant"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "The T. capitata prefers bright indirect light and waterings at least once a week. If it receives too much sun, you might notice that its leaves take on a yellow sort of appearance. It is a very hardy plant, and is great for beginners.",
    "createdAt" : "2021-04-22",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecbc"),
    "name" : "Tillandsia victoria red splendor",
    "botanicalName" : "Tillandsia victoria",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-victoria-red-splendor.jpg",
    "links" : [ 
        "https:www.air-plants.com/blogs/air-plant-care-and-design-articles/tillandsia-spotlight-capitata-air-plant"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Once or twice a week, submerge entire plant in water for several minutes. Remove and shake out well so no droplets are left in the crevices (leaving drops of water can lead to rot). Keep in bright but no direct light! Only mist mildly with a very fine spray mister so you don't have any large drops on the leaves that could lead to rot.",
    "createdAt" : "2021-04-22",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecbd"),
    "name" : "Tillandsia Tricolor",
    "botanicalName" : "Tillandsia tricolor",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "bright"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-tricolor.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A11350/tricolor/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia tricolor has bright green leaves and castaneous (dark brown) leaf sheaths (bases) and, interestingly, the transition between the two has many small brown spots that dot the green leaf blade. In bright light, the leaf blades of T. tricolor will often blush red. The inflorescence is cherry and canary yellow and the flowers are indigo, a very dark blue. The offsets are produced on a short runner called a stolon which separates the offsets from the mother plant. Our plants are 12 years old and grown from seeds. Their quality is exquisite because of the number of leaves and the leaf color.",
    "createdAt" : "2021-04-22",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecbe"),
    "name" : "Tillandsia aeranthos",
    "botanicalName" : "Tillandsia aeranthos",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-aeranthos.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A10030/aeranthos/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "4/25 pictured is a bergeri. Tillandsia aeranthos (eye-RAHN-thos) grows epiphytically from near sea level to several hundred meters in Argentina, Uruguay, Brazil, and Paraguay. It has a preference for mature tipa trees (Tipuana tipu) and tends to grow singly or in small clusters of two to a dozen plants. It is very similar in appearance to T. bergeri but a look at the blooms of the two will show how different they are. Also, T. bergeri will often have several offsets growing from the base because it offsets all year round unlike T. aeranthos that is more typical of the genus and it generally offsets after the blooming cycle. This is one of the mainstay species and while it is relatively common, it blooms like clockwork every Spring and it produces a vibrantly colorful inflorescence. Hummingbirds love this plant!",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecbf"),
    "name" : "Tillandsia caput medusae",
    "botanicalName" : "Tillandsia caput medusae",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-caput-medusae.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A10260/caput-medusae/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia caput-medusae (KAH-poot meh-DOO-sigh) is one of the mainstays in most everyone's collection. A fantastic shape and appropriate name if ever there was one! As another myrmecophytic, pseudobulbous species, Tillandsia caput-medusae is often not so easy to grow because it rots more easily than many of the others. One way to avoid this, as with these other similar types, is to grow it mounted or hanging sideways to upside down. In this manner, no water will be able to collect in the base of the plant, something that can initiate the rotting process. While not always the case, generally it is true that if the leaves are relatively straight and short and there are no roots the plant is an offset taken from a mother plant. If the converse is true, that is, the leaves are long and curving and there is a root system present, then this plant will be a number of years old and grown from a seed.",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc0"),
    "name" : "Tillandsia velutina",
    "botanicalName" : "Tillandsia velutina",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "indirect"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-velutina.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A11750/velutina/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia velutina is a venerable species that has been around the trade for a long time because it's one of the easily collectible plants from nature. It was known for many years as T. brachycaulos v. multiflora. It has velvety leaves due to it's more pronounced trichome covering on the leaves. This lessens the brightness of the color at anthesis (flowering) but for those who like pastels, this is a great choice. Also, the leaves tend to be thicker and are a more olive color than than the standard T. brachycaulos.",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc1"),
    "name" : "Tillandsia bergeri",
    "botanicalName" : "Tillandsia bergeri",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Well-draining soil like a cactus/succulent mix",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-05-05",
    "imgURL" : "tillandsia-bergeri.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A10180/bergeri/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia bergeri (BEAR-gehr-ee) is rightfully called the Mad Pupper of the Tillandsia world. Unlike most tillandsias, it offsets all year, thereby growing into an attractive clump faster than any other Tillandsia. It normally doesn't bloom every year but rather its effort goes into growing into a large specimen clump. It's ruffled flower petals is not common in this genus. If you notice the edges of the leaves curling up toward each other more than normal it is an indication that the plant wasn't receiving water frequently enough and that it needs to be submerged under good water for 12 to 14 hours. Good water is water that is not high in dissolved salts or other impurities. Bottled drinking, rain, and filtered tap are great.",
    "createdAt" : "2021-05-05",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc2"),
    "name" : "Tillandsia bergeri 2 (medium)",
    "botanicalName" : "Tillandsia bergeri",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Well-draining soil like a cactus/succulent mix",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-05-05",
    "imgURL" : "tillandsia-bergeri.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A10180/bergeri/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia bergeri (BEAR-gehr-ee) is rightfully called the Mad Pupper of the Tillandsia world. Unlike most tillandsias, it offsets all year, thereby growing into an attractive clump faster than any other Tillandsia. It normally doesn't bloom every year but rather its effort goes into growing into a large specimen clump. It's ruffled flower petals is not common in this genus. If you notice the edges of the leaves curling up toward each other more than normal it is an indication that the plant wasn't receiving water frequently enough and that it needs to be submerged under good water for 12 to 14 hours. Good water is water that is not high in dissolved salts or other impurities. Bottled drinking, rain, and filtered tap are great.",
    "createdAt" : "2021-05-05",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc3"),
    "name" : "Tillandsia bergeri 3 (small)",
    "botanicalName" : "Tillandsia bergeri",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "Well-draining soil like a cactus/succulent mix",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-05-05",
    "imgURL" : "tillandsia-bergeri.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A10180/bergeri/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia bergeri (BEAR-gehr-ee) is rightfully called the Mad Pupper of the Tillandsia world. Unlike most tillandsias, it offsets all year, thereby growing into an attractive clump faster than any other Tillandsia. It normally doesn't bloom every year but rather its effort goes into growing into a large specimen clump. It's ruffled flower petals is not common in this genus. If you notice the edges of the leaves curling up toward each other more than normal it is an indication that the plant wasn't receiving water frequently enough and that it needs to be submerged under good water for 12 to 14 hours. Good water is water that is not high in dissolved salts or other impurities. Bottled drinking, rain, and filtered tap are great.",
    "createdAt" : "2021-05-05",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc4"),
    "name" : "Tillandsia caput medusae 2 small",
    "botanicalName" : "Tillandsia caput medusae",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "waterPref" : "dry",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "air plant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "moderate",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-04-26",
    "imgURL" : "tillandsia-caput-medusae.jpg",
    "links" : [ 
        "https:www.rainforestflora.com/store/tillandsia/A10260/caput-medusae/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Tillandsia caput-medusae (KAH-poot meh-DOO-sigh) is one of the mainstays in most everyone's collection. A fantastic shape and appropriate name if ever there was one! As another myrmecophytic, pseudobulbous species, Tillandsia caput-medusae is often not so easy to grow because it rots more easily than many of the others. One way to avoid this, as with these other similar types, is to grow it mounted or hanging sideways to upside down. In this manner, no water will be able to collect in the base of the plant, something that can initiate the rotting process. While not always the case, generally it is true that if the leaves are relatively straight and short and there are no roots the plant is an offset taken from a mother plant. If the converse is true, that is, the leaves are long and curving and there is a root system present, then this plant will be a number of years old and grown from a seed.",
    "createdAt" : "2021-04-25",
    "updatedAt" : "2021-05-05"
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc5"),
    "name" : "Rue",
    "botanicalName" : "Ruta graveolens",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moderate",
    "lastWatered" : [ 
        ISODate("2021-05-10T11:03:31.768-05:00")
    ],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "-30",
    "tempHigh" : "",
    "hardiness" : "-30",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "well draining soil. thrives in poor soil.",
    "cycle" : "perennial",
    "hardinessZoneMin" : "4",
    "hardinessZoneMax" : "9",
    "lastPotted" : ISODate("2021-05-22T19:00:00.000-05:00"),
    "imgURL" : "rue.jpg",
    "links" : [ 
        "http:theherbexchange.com/rules-for-growing-rue/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "Repotted on 5/21/21: as this can last outdoors, want to make sure this is in a state by end of June that can last through the winter.\nAlso known as herb-of-grace, the name ruta comes from the Greek word, reuo (to set free). Fun fact: and old superstition says that rue grows best when it is stolen from another gardener! In herbal preparations, rue has an extremely bitter and acrid taste, but don’t let that turn you off! Rue is an extremely useful and powerful herb. Rue may help soothe inflammation as well as support lipid balance in healthy adults.",
    "createdAt" : "2021-05-06",
    "updatedAt" : ISODate("2021-05-23T20:43:13.591-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc6"),
    "name" : "Fennel",
    "botanicalName" : "Foeniculum vulgare",
    "status" : "",
    "location" : "outdoor",
    "locationSec" : "",
    "locationPreferred" : "outdoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : ISODate("2021-05-22T19:00:00.000-05:00"),
    "imgURL" : "fennel.jpg",
    "links" : [ 
        "https:www.gardeningknowhow.com/edible/herbs/fennel/growing-fennel.htm"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "",
    "createdAt" : "2021-05-06",
    "updatedAt" : ISODate("2021-05-23T21:01:50.989-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc7"),
    "name" : "Fan palm",
    "botanicalName" : "",
    "status" : "inactive",
    "location" : "indoor",
    "locationSec" : "terrarium",
    "locationPreferred" : "indoor",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "medium"
    ],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "fan-palm-mini.jpg",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "In a closed terrarium, leaves seemed to rot fairly quickly. Took it out, put it near light, forgot to water it, and it is dead.\nI've had this plant a few times and don't know what it's called. Dries out very quickly and dies if dry so keep an eye on it. Trying in a terrarium this round to see if that gives it a better life.",
    "createdAt" : "2021-05-06",
    "updatedAt" : ISODate("2021-06-13T17:51:57.590-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecc9"),
    "name" : "Oxalis Pink Wood Sorrel",
    "botanicalName" : "Oxalis articulata",
    "status" : "inactive",
    "location" : "indoor",
    "locationSec" : "terrarium",
    "locationPreferred" : "indoor",
    "waterPref" : "moist",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [ 
        "full sun", 
        "part shade"
    ],
    "plantType" : "herb",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "well draining soil, can do sandy or loamy soil",
    "cycle" : "perennial",
    "hardinessZoneMin" : "7-10",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "oaxalis-pink-wood-sorrel.jpg",
    "links" : [ 
        "https:plants.ces.ncsu.edu/plants/oxalis-articulata/"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "7/23/21: definitely died. couldn't get the hang of it. may get it in a bigger size at the small one was hard to figure out.\n\nHard to kill. Some reported to find it as a weed. Outdoor and indoor plant. The genus name Oxalis comes from the Greek word oxys meaning acid, sour or sharp, in reference to the taste of the leaves. If eating, be careful with this one. Can flower.",
    "createdAt" : "2021-05-06",
    "updatedAt" : ISODate("2021-07-24T18:16:31.449-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059ecca"),
    "name" : "Devils backbone variegated",
    "botanicalName" : "",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "alien-tail.jpg",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Not sure what this plant is. Found at Gethsemane in the place where a lot of the mini and terrarium plants are. Bought two. Will put one in a terrarium, take care of the other outside of it and see what happens.",
    "createdAt" : "2021-05-06",
    "updatedAt" : ISODate("2021-07-18T16:15:53.777-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eccb"),
    "name" : "Devils backbone variegated",
    "botanicalName" : "",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "indoor",
    "waterPref" : "",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [],
    "plantType" : "",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "alien-tail.jpg",
    "links" : [],
    "propogating" : "",
    "watching" : "",
    "notes" : "Not sure what this plant is. Found at Gethsemane in the place where a lot of the mini and terrarium plants are. Bought two. Will put one in a terrarium, take care of the other outside of it and see what happens.",
    "createdAt" : "2021-05-06",
    "updatedAt" : ISODate("2021-07-18T16:15:39.865-05:00")
},
{
    "_id" : ObjectId("609826aeeb53ee6b3059eccc"),
    "name" : "Basket plant",
    "botanicalName" : "Callisia gentlei var. 'elegans'",
    "status" : "",
    "location" : "indoor",
    "locationSec" : "terrarium",
    "locationPreferred" : "indoor",
    "waterPref" : "moderate",
    "lastWatered" : [],
    "nextWater" : "",
    "waterRate" : "",
    "sunlight" : [],
    "plantType" : "houseplant",
    "trouble" : "",
    "needsCare" : "",
    "humidity" : "high",
    "heightLow" : "",
    "heightHigh" : "",
    "tempLow" : "",
    "tempHigh" : "",
    "hardiness" : "",
    "tolerance" : "",
    "pH" : "",
    "soilContent" : "",
    "cycle" : "",
    "hardinessZoneMin" : "",
    "hardinessZoneMax" : "",
    "lastPotted" : "2021-01-01",
    "imgURL" : "basket-plant.jpg",
    "links" : [ 
        "https:www.botaniful.ca/product/tradescantia-callisia-elegans/1603"
    ],
    "propogating" : "",
    "watching" : "",
    "notes" : "6/11/21 - leaves seem to disintegrate quickly when wet\nCallisia elegans, also known as the striped inch plant, are so striking with its pinstripe pattern. They do well in terrariums and add texture to any display.",
    "createdAt" : "2021-05-06",
    "updatedAt" : ISODate("2021-06-13T13:57:49.792-05:00")
},
{
    "_id" : ObjectId("609949a6ba6def40245d7c53"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "medium"
    ],
    "links" : [ 
        "https://growplantshop.com/products/sansevieria-boncellensis?variant=31071171739691"
    ],
    "name" : "Starfish Sansevieria",
    "botanicalName" : "Sansevieria boncellensis",
    "location" : "indoor",
    "locationSec" : "plant shelf",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "tempHigh" : "55",
    "hardiness" : "55",
    "soilContent" : "cactus and succulent plant mix",
    "lastPotted" : ISODate("2021-05-07T19:00:00.000-05:00"),
    "imgURL" : "sansevieria-boncellensis.jpg",
    "notes" : "8/13/21: bought two more. still have the other baby one that isn't growing very fast.\n\n7/31/21: both of the big ones died a month or two ago. there are two babies. will water every 10 days and see if that will help them grow.\n5/17/21, noticed that some of the leaves were mushy and rotting on both. Cut all of those off. There is one leaf that looks brown in the middle of one. When I repotted it on 5/6/21, I also watered it and I think the whole thing stayed wet for too long. Repotted on 5/18/21 with more perlite, vermiculite and sand. Also, there had been two connected starfish plants and they separated cleanly while repotting. Keep an eye on it, as I'm expecting the leaf on one in the center to end up falling up, but want to make sure the rot isn't continuing. There is also a baby plant potted separately by one of the lights.\n5/19/21, one of the two died, definitely making sure I barely water this plant.\n\nGROWING INDOORS\n\nDracaena is one of our most popular houseplants due to its tolerance of pretty much any environment and extremely easy care level. These guys will take their time growing in a low light space, but will grow effortlessly if they are given a spot with more light. It's necessary for Dracaena to dry out between waterings, so only water your plant every 7-10 days.\n\n \n\nGROWING OUTDOORS\n\nDracaena make great outdoor plants, but they are not winter hardy and should be brought inside once temperatures dip below 55 degrees. Spring through Fall, keep your Dracaena in Full to Partial Shade and make sure it is not receiving any hot, direct sun. Water once your plant has had a chance to dry out, usually about once a week with moderate temperatures.",
    "createdAt" : ISODate("2021-05-10T09:56:38.581-05:00"),
    "updatedAt" : ISODate("2021-08-19T17:35:58.801-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-05-09T11:17:07.617-05:00"), 
        ISODate("2021-08-17T17:35:58.789-05:00")
    ],
    "trouble" : "Y"
},
{
    "_id" : ObjectId("60a480b8537b523ce0431852"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.rainforestflora.com/store/tillandsia/A10590/funckiana/"
    ],
    "name" : "Tillandsia funckiana",
    "botanicalName" : "Tillandsia funckiana",
    "location" : "indoor",
    "locationSec" : "plant shelf",
    "locationPreferred" : "indoor",
    "plantType" : "air plant",
    "lastPotted" : null,
    "imgURL" : "tillandsia-funckiana.jpg",
    "notes" : "Tillandsia funckiana (foonk-ee-AH-na) is one of the most exquisite and interesting of the smaller Tillandsias. As you can see from the photo, it can grow to be an enormous clump. Produces a bright coral red flower. It does better with frequent watering and good air movement. ",
    "createdAt" : ISODate("2021-05-18T22:06:32.238-05:00"),
    "updatedAt" : ISODate("2021-05-18T22:06:32.238-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60a482d3420b853aa41d655b"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.succulentsandsunshine.com/types-of-succulents/haworthia-coarctata/"
    ],
    "name" : "Haworthiopsis coarctata",
    "botanicalName" : "Haworthiopsis coarctata",
    "location" : "indoor",
    "locationSec" : "dining room",
    "locationPreferred" : "indoor",
    "tempHigh" : "32",
    "hardiness" : "32",
    "soilContent" : "Cactus and succulent soil",
    "hardinessZoneMin" : "10a",
    "imgURL" : "haworthia-coarctata.jpg",
    "notes" : "Haworthiopsis coarctata is a prolific propagator, growing many offsets. It can also be propagated by seeds and leaves. Watch for green flowers in the summer. has typical watering needs for a succulent. It's best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.",
    "createdAt" : ISODate("2021-05-18T22:15:31.200-05:00"),
    "updatedAt" : ISODate("2021-05-18T22:15:31.200-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60a48ba5420b853aa41d655c"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/edible/herbs/basil/spicy-globe-basil-plants.htm#:~:text=Spicy%20Globe%20basil%20plants%20are,to%20pasta%20dishes%20and%20pestos."
    ],
    "name" : "Spicy Globe Basil Plant",
    "botanicalName" : "Ocimum basilicum",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "tempHigh" : "50",
    "hardiness" : "50",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11",
    "imgURL" : "spicy-globe-basil.jpg",
    "notes" : "Spicy Globe basil plants are short and compact, reaching only 6 to 12 inches (15-30 cm.) in most gardens. Their attractive round shape makes a great addition to the sunny flower bed or herb garden. The flavor of the basil ‘Spicy Globe’ herb is different from most basils, adding a spicy kick to pasta dishes and pestos. It is easy to grow and regular harvesting encourages more growth. If you keep an indoor herb garden during winter, you may include this basil, as it is actually a perennial plant. Spicy Globe bush basil grows quickly when conditions are right, planted in full sun and getting adequate water. Morning sun is most appropriate for this basil plant and afternoon shade is most appropriate during hot summer days.",
    "createdAt" : ISODate("2021-05-18T22:53:09.951-05:00"),
    "updatedAt" : ISODate("2021-07-26T20:20:02.044-05:00"),
    "__v" : 0,
    "soilContent" : "well draining soil"
},
{
    "_id" : ObjectId("60a48d20420b853aa41d655d"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/edible/herbs/basil/spicy-globe-basil-plants.htm#:~:text=Spicy%20Globe%20basil%20plants%20are,to%20pasta%20dishes%20and%20pestos."
    ],
    "name" : "Spicy Globe Basil Plant (indoor)",
    "botanicalName" : "Ocimum basilicum",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "herb",
    "tempHigh" : "50",
    "hardiness" : "50",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11",
    "imgURL" : "spicy-globe-basil.jpg",
    "notes" : "Spicy Globe basil plants are short and compact, reaching only 6 to 12 inches (15-30 cm.) in most gardens. Their attractive round shape makes a great addition to the sunny flower bed or herb garden. The flavor of the basil ‘Spicy Globe’ herb is different from most basils, adding a spicy kick to pasta dishes and pestos. It is easy to grow and regular harvesting encourages more growth. If you keep an indoor herb garden during winter, you may include this basil, as it is actually a perennial plant. Spicy Globe bush basil grows quickly when conditions are right, planted in full sun and getting adequate water. Morning sun is most appropriate for this basil plant and afternoon shade is most appropriate during hot summer days.",
    "createdAt" : ISODate("2021-05-18T22:59:28.708-05:00"),
    "updatedAt" : ISODate("2021-05-18T22:59:28.708-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60a48e91420b853aa41d655e"),
    "waterPref" : [],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/edible/herbs/caraway/caraway-growing.htm"
    ],
    "name" : "Caraway",
    "botanicalName" : "Carum carvi",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "tempHigh" : "-25",
    "hardiness" : "-25",
    "soilContent" : "well-drained, loamy soil",
    "hardinessZoneMin" : "4",
    "hardinessZoneMax" : "10",
    "imgURL" : "caraway.jpg",
    "notes" : "Varieties can be annual or biennial. Caraway is excellent at self-seeding, so plant it somewhere that you don’t mind it returning. Once it seeds, it dies off. Plant caraway in an open, sunny position. You can plant in a container, but as caraway has a taproot, the pot needs to be deep. Prefer a tall terracotta pot with rich potting soil. You can also plant caraway indoors. Just make sure it’s in direct sunlight.",
    "createdAt" : ISODate("2021-05-18T23:05:37.037-05:00"),
    "updatedAt" : ISODate("2021-05-23T21:01:16.199-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-05-23T21:01:02.894-05:00")
    ],
    "lastPotted" : ISODate("2021-05-22T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("60a492cb420b853aa41d655f"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/edible/herbs/cuban-oregano/growing-cuban-oregano.htm, https://www.bhg.com/gardening/plant-dictionary/herb/cuban-oregano/, "
    ],
    "name" : "Cuban oregano",
    "botanicalName" : "Plectranthus amboinicus",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "tempHigh" : "40",
    "hardiness" : "40",
    "cycle" : "perennial",
    "imgURL" : "cuban-oregano.jpg",
    "notes" : "Will have it as outdoor at first, but will bring indoor. Can be grown as a houseplant. Referred to in a lot of places as a semi-succulent, or as a succulent herb. Haven't found any info on hardiness so far.\n\n7/23/21: doesn't seem to grow very quickly. due to the rain it was wet a lot. Has been on a shelf outside, staying about the same size.\n\n7/27/21: will also put this in part shade and see if it performs better. still doesn't seem to be increasing or diminishing in size.\n\n\n\n",
    "createdAt" : ISODate("2021-05-18T23:23:39.019-05:00"),
    "updatedAt" : ISODate("2021-08-21T16:07:29.479-05:00"),
    "__v" : 0,
    "description" : "Cuban oregano is botanically known as Plectranthus amboinicus or its synonym Coleus amboinicus, and is an unusual member of the mint family. Cuban oregano is commonly known by many other names including Mexican mint, Spanish thyme, Indian borage, Caribbean oregano, and Broadleaf thyme. Contrary to its name, Cuban oregano is believed to have originated in India. Can be used in place of Greek oregano, though this is has a strong aroma.\n\nPlants grow between 12 and 18 inches (30.5 and 45 cm.) tall and may develop a trailing habit, making it attractive in hanging baskets. As an in-ground plant, it will spread to a small mounded ground cover. Cuban oregano growing requirements are somewhat different than traditional oreganos, as they may burn in full sun and perform better in some light shade.\n\nhttps://gardenerspath.com/plants/herbs/grow-cuban-oregano/\n",
    "lastWatered" : [ 
        ISODate("2021-07-29T10:04:00.393-05:00"), 
        ISODate("2021-08-21T16:07:29.464-05:00")
    ]
},
{
    "_id" : ObjectId("60a49c5a03a2450cc85f7dc0"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/houseplants/kalanchoe/kalanchoe-chandelier-plants.htm"
    ],
    "name" : "Mother of millions",
    "botanicalName" : "https://www.bhg.com/gardening/plant-dictionary/herb/cuban-oregano/",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "succulent",
    "imgURL" : "mother-of-millions.jpg",
    "notes" : "May give this plant away",
    "createdAt" : ISODate("2021-05-19T00:04:26.419-05:00"),
    "updatedAt" : ISODate("2021-08-01T10:00:49.962-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-07-25T10:00:49.922-05:00")
    ]
},
{
    "_id" : ObjectId("60a4a02003a2450cc85f7dc1"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.motherearthgardener.com/plant-profiles/edible/hyssopus-officinalis-zmaz16szsbak, https://www.gardenista.com/posts/gardening-101-hyssop-hyssopus-officinalis-perennial-herb/"
    ],
    "name" : "Hyssop",
    "botanicalName" : "Hyssopus officinalis",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "soilContent" : "well-drained soil",
    "cycle" : "perennial",
    "hardinessZoneMin" : "3",
    "hardinessZoneMax" : "10",
    "imgURL" : "hyssop.jpg",
    "notes" : "Those looking for something colorful would do well to add hyssop to the garden, as it can be expected to bloom reliably from June to September. It requires well-drained soil, and is both drought tolerant and deer resistant (a boon for the herb grower in deer country). Large root system.\n\nPruning back hard in the spring, or after flowering is finished for the year, will ensure beautiful bushy plants that can provide an appealing border in the flower garden or a nice splash of color in the middle of an herb garden. The plant averages about 18 inches high, with a similar width.\n\nAs a shrubby perennial, Hyssop can be clipped into a low hedge, worked into a knot-garden or rock garden, planted in containers or window boxes (large enough to accommodate a robust root system), or just allowed to fly free. Trim back established hyssop plants heavily in early spring to prevent them from becoming too woody and spindly. Cutting back the foliage also encourages bushier plants.",
    "createdAt" : ISODate("2021-05-19T00:20:32.205-05:00"),
    "updatedAt" : ISODate("2021-08-14T21:51:22.451-05:00"),
    "__v" : 0,
    "hardiness" : "-35",
    "tempHigh" : "-35",
    "lastPotted" : ISODate("2021-07-28T19:00:00.000-05:00"),
    "lastWatered" : [ 
        ISODate("2021-07-30T09:56:03.593-05:00"), 
        ISODate("2021-08-04T16:35:44.663-05:00"), 
        ISODate("2021-08-14T21:51:22.439-05:00")
    ]
},
{
    "_id" : ObjectId("60a4a1a103a2450cc85f7dc2"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun"
    ],
    "links" : [ 
        "https://homeguides.sfgate.com/grow-melaleuca-alternifolia-indoors-73889.html"
    ],
    "name" : "Tea tree",
    "botanicalName" : "Melaleuca alternifolia",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "",
    "tempHigh" : "20",
    "hardiness" : "20",
    "soilContent" : "Plant the tea tree in a container of well-drained potting soil that is slightly larger than what you think it needs. Tea trees grown indoors need lots of water, and the bigger the container, the more forgiving the tree will be if you forget a watering.",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11",
    "imgURL" : "tea-tree-plant.jpg",
    "notes" : "8/1/21: seems to be doing well enough. Have been watering every 3-4 days since I got it in May.",
    "createdAt" : ISODate("2021-05-19T00:26:57.239-05:00"),
    "updatedAt" : ISODate("2021-08-14T21:51:10.969-05:00"),
    "__v" : 0,
    "description" : "The tea tree plant (Melaleuca alternifolia) is an evergreen shrub or small tree native to Australia. Considered easy to grow outdoors in U.S. Department of Agriculture plant hardiness zones 9 through 11, this tropical plant can be grown indoors as well with a bit of extra effort. Tea trees typically produce wispy white blooms in the spring and summer, but may not do so when grown indoors. The plants are sometimes capable of self-pollination, but rely on insect pollinators as well. Your plant may not flower unless you set it outdoors during warm weather, so insects can access it. When working with this plant, remember that, although it has many health benefits when properly processed, raw tea tree oil is toxic, and the plant should be grown well out of the reach of children.\n\nPlant the tea tree in a container of well-drained potting soil that is slightly larger than what you think it needs. Tea trees grown indoors need lots of water, and the bigger the container, the more forgiving the tree will be if you forget a watering.",
    "lastWatered" : [ 
        ISODate("2021-07-29T10:02:42.929-05:00"), 
        ISODate("2021-08-05T07:48:54.537-05:00"), 
        ISODate("2021-08-14T21:51:10.956-05:00")
    ],
    "lastPotted" : ISODate("2021-07-28T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("60c6596cc5178720dcca52b4"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "medium"
    ],
    "links" : [],
    "name" : "Jade",
    "botanicalName" : "unknown",
    "location" : "indoor",
    "locationSec" : "dining room table",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "imgURL" : "crassula-220.jpg",
    "notes" : "Picked up from Green City Market on 6/11/21. No one knew what it was.\nPotentially Crassula radicans 'Small Red Carpet' but can also just be another version of jade\nhttps://encyclopedia.phoenixperennials.com/plant.php?plantId=9923\n\n8/5/21: as of this moment, kind of falling apart. I think it was overwatered. repotted in terracotta pot will water once every 10 days.",
    "createdAt" : ISODate("2021-06-13T14:15:56.229-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:47:34.165-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-08-04T16:36:02.225-05:00"), 
        ISODate("2021-08-17T18:03:03.117-05:00"), 
        ISODate("2021-08-24T07:47:34.147-05:00")
    ]
},
{
    "_id" : ObjectId("60c6662d09ebd45d100611f7"),
    "waterPref" : [ 
        "moist"
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [],
    "name" : "Purple Waffle Plant 2",
    "location" : "indoor",
    "locationSec" : "greenhouse",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "notes" : "Picked up from Gethsemane on May 29",
    "createdAt" : ISODate("2021-06-13T15:10:21.469-05:00"),
    "updatedAt" : ISODate("2021-06-13T15:13:16.047-05:00"),
    "__v" : 0,
    "imgURL" : "purple-waffle-2.jpg"
},
{
    "_id" : ObjectId("60c6678809ebd45d100611f8"),
    "waterPref" : [ 
        "moist"
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [],
    "name" : "Frilly bush",
    "location" : "indoor",
    "locationSec" : "greenhouse",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "imgURL" : "tbd3.jpg",
    "notes" : "Picked up from Gethsemane on May 29",
    "createdAt" : ISODate("2021-06-13T15:16:08.349-05:00"),
    "updatedAt" : ISODate("2021-06-13T15:16:08.349-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60c667e309ebd45d100611f9"),
    "waterPref" : [ 
        "moist"
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [],
    "name" : "Purple Round Leaf",
    "location" : "indoor",
    "locationSec" : "greenhouse",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "humidity" : "high",
    "imgURL" : "tbd1.jpg",
    "notes" : "Picked up from Gethsemane on May 29",
    "createdAt" : ISODate("2021-06-13T15:17:39.084-05:00"),
    "updatedAt" : ISODate("2021-06-13T15:18:30.849-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60c6687509ebd45d100611fa"),
    "waterPref" : [ 
        "moist"
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [],
    "name" : "Heart Shaped Leaf Vine",
    "location" : "indoor",
    "locationSec" : "greenhouse",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "humidity" : "high",
    "imgURL" : "tbd2.jpg",
    "notes" : "Picked up from Gethsemane on May 29",
    "createdAt" : ISODate("2021-06-13T15:20:05.676-05:00"),
    "updatedAt" : ISODate("2021-06-13T15:20:05.676-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60c66a8b09ebd45d100611fb"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [ 
        "https://www.gardentags.com/plant-encyclopedia/crassula-david/25869"
    ],
    "name" : "Crassula David",
    "botanicalName" : "Crassula David",
    "location" : "indoor",
    "locationSec" : "dining room shelf",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "sharply drained soil, such as 2 parts John Innes potting compost number 2 and 1 part course sand or grit.",
    "imgURL" : "crassula-david-tlc.jpg",
    "notes" : "8/10/21: I did get another crassula david, that was repotted on 8/8/21. I have not yet repotted the other busted one. Will repot and see if that one looks better. Still looks pretty ragged.\n\nOrdered from VividRoot on Etsy. Arrived on June 11 with the majority of the plant yellow. I'm being sent another one that's I'll get on June 22, going to see if I can rehab this one.\n\nCRASSULA DAVID\nCrassula are succulent, herbaceous plants. Some varieties are suitable for rock gardens in mild regions as long as the soil is well drained. The thick leaves are often covered with hair or 'meal' and the flowers are generally small in size and borne on terminal panicles. Crassulas can easily be grown from leaf cuttings. 'David' - this is a carpet forming green vigorous plant. An ideal wall or basket succulent.\n\n\nPROPAGATION BY CUTTINGS\nFROM EARLY SPRING TO LATE SUMMER\nCrassulas can be grown from leaf cuttings taken in spring and summer. Pull a leaf from the main stem, leave it to dry for a day, then place it on the surface of the growing compost. The leaf will form roots and eventually, a small rosette will appear at the base. Remove and pot up the new plant when well rooted.\n\n \nPLANTING\nFROM EARLY SPRING TO EARLY SUMMER\nCrassulas need a sharply drained soil, such as 2 parts John Innes potting compost number 2 and 1 part course sand or grit. They do best on a sunny window ledge and in winter, require a minimum temperature of 7C. Repot every second year in early spring.\n",
    "createdAt" : ISODate("2021-06-13T15:28:59.778-05:00"),
    "updatedAt" : ISODate("2021-08-21T16:01:32.991-05:00"),
    "__v" : 0,
    "needsCare" : "Y",
    "trouble" : "Y",
    "lastPotted" : ISODate("2021-08-07T19:00:00.000-05:00"),
    "lastWatered" : [ 
        ISODate("2021-08-09T07:52:31.889-05:00"), 
        ISODate("2021-08-15T09:14:17.866-05:00"), 
        ISODate("2021-08-21T16:01:32.653-05:00")
    ]
},
{
    "_id" : ObjectId("60c66f5809ebd45d100611fc"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "part sun"
    ],
    "links" : [ 
        "https://www.almanac.com/plant/aloe-vera"
    ],
    "name" : "Aloe vera",
    "botanicalName" : "Aloe vera",
    "location" : "indoor",
    "locationSec" : "living room front window stand",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "sandy, porous soil",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "11",
    "lastPotted" : ISODate("2021-03-18T19:00:00.000-05:00"),
    "imgURL" : "aloe.jpg",
    "notes" : "Angela gave to me during the winter in early 2021, possibly March 2021.\nSeriously, seriously do not overwater. When in doubt, don't water it. The leaves got really squishy, began to yellow and fall off. Water every 2 weeks, can take longer.\n\n8/14/21: when the leaves are not feeling taught, probably time to water. If the leaves feel very firm, does not need to be watered.",
    "createdAt" : ISODate("2021-06-13T15:49:28.959-05:00"),
    "updatedAt" : ISODate("2021-08-14T21:41:13.763-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-07-29T22:54:08.162-05:00"), 
        ISODate("2021-08-10T21:41:13.438-05:00")
    ]
},
{
    "_id" : ObjectId("60c673d709ebd45d100611fd"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun"
    ],
    "links" : [ 
        "https://sammisherbs.wordpress.com/2010/05/19/tarragon-2/"
    ],
    "name" : "French tarragon",
    "botanicalName" : "Artemisia dracunculus",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "tempLow" : "90",
    "tempHigh" : "-40",
    "hardiness" : "-40",
    "soilContent" : "loamy, sandy",
    "cycle" : "perennial",
    "hardinessZoneMin" : "4",
    "imgURL" : "tarragon-french.jpg",
    "notes" : "Doesn't like to be really saturated with water for long. Water about once a week. Prefers drier over wetter.\n\nA couple links:\nhttps://www.almanac.com/plant/tarragon\nhttps://sammisherbs.wordpress.com/2010/05/19/tarragon-2/ - difference between French and Mexican (reference to Russian)\nhttps://www.gardeningknowhow.com/edible/herbs/tarragon/growing-french-tarragon.htm",
    "createdAt" : ISODate("2021-06-13T16:08:39.620-05:00"),
    "updatedAt" : ISODate("2021-08-14T21:51:18.150-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-06-18T13:27:46.801-05:00"), 
        ISODate("2021-07-29T10:02:16.562-05:00"), 
        ISODate("2021-08-05T07:48:05.379-05:00"), 
        ISODate("2021-08-14T21:51:18.134-05:00")
    ],
    "lastPotted" : ISODate("2021-07-25T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("60c67890671fc05cb43e5185"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [],
    "name" : "Crassula (small)",
    "botanicalName" : "unknown",
    "location" : "indoor",
    "locationSec" : "dining room table",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "imgURL" : "crassula-2.jpg",
    "notes" : "Came from Green City Market on 6/12 with wood container. Small version. At this moment, don't know the exact name. Wood container was very moldy, probably watered in there without ever getting air.\n\n8/6/21: last week I noticed a couple leaves looking a bit shriveled. Make sure to water this sparingly. The bigger version I believe fell victim to being overwatered with not enough sunlight.\n\n8/19/21: touched the leaves and they felt very thin and soft (not mushy). Watered it. Will see if it perks up in a day or two.",
    "createdAt" : ISODate("2021-06-13T16:28:48.437-05:00"),
    "updatedAt" : ISODate("2021-08-19T18:05:14.492-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-07-30T07:10:00.579-05:00"), 
        ISODate("2021-08-19T18:04:25.855-05:00")
    ]
},
{
    "_id" : ObjectId("60c679ba671fc05cb43e5186"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [],
    "name" : "Pink stem plant",
    "location" : "indoor",
    "locationSec" : "greenhouse",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "humidity" : "high",
    "imgURL" : "tbd4.jpg",
    "notes" : "Took this out of the greenhouse on 6/12. Looked like it was rotting a bit.",
    "createdAt" : ISODate("2021-06-13T16:33:46.964-05:00"),
    "updatedAt" : ISODate("2021-06-13T16:33:46.964-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60c67c26671fc05cb43e5187"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [],
    "name" : "Creeping inch plant",
    "botanicalName" : "Callista repens",
    "location" : "indoor",
    "locationSec" : "living room front window",
    "locationPreferred" : "indoor",
    "lastPotted" : ISODate("2021-07-30T19:00:00.000-05:00"),
    "imgURL" : "tbd5.jpg",
    "notes" : "Found this on the ground at Gethsemane at the of May 2021. Stuck it in a small pot and put it in the front window to see if it will grow roots.\nNot sure if it is actually crassula springtime, but it has the closest look. Underside of leaves are purple.\n\n7/1/21: actually called a creeping inch plant. Seems to be doing OK in direct sunlight, but I need to make sure to keep it from drying out. One app says it should be in indirect light so I will try to put it by the lower light in the window.\n\n7/23/21: still seems to be doing ok. am considering repotting it, trying to not let it stay dry though it dries out quickly.\n\n8/1/21: repotted in 4 inch pot. Seems to be pretty happy as of 8/7/21. Previously repotted on 5/31/21.",
    "createdAt" : ISODate("2021-06-13T16:44:06.749-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:53:22.796-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-07-31T21:14:35.720-05:00"), 
        ISODate("2021-08-24T07:53:22.784-05:00")
    ]
},
{
    "_id" : ObjectId("60c67ed2671fc05cb43e5188"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.gardentags.com/plant-encyclopedia/crassula-spiralis-syn-crassula-estagnol/29346"
    ],
    "name" : "Crassula spiralis",
    "botanicalName" : "Crassula estagnol",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "imgURL" : "crassula-spiralis-2.jpg",
    "notes" : "Got from Little Prince Plants on Etsy on 6/10/21. Arrived with yellow leaves.\n\nCrassula ‘Estagnol’ is a miniature Crassula with an attractive spiral growing habit. It has bright green leaves and grows in short, clustering columns though is quite slow growing. When the plant is old enough, the stems are divided into 3-6 and growing tips can bloom with small white flowers. Probably Crassula pyramidalis is one of the parents of this hybrid. New:Crassula are succulent, herbaceous plants. Some varieties are suitable for rock gardens in mild regions as long as the soil is well drained. The thick leaves are often covered with hair or 'meal' and the flowers are generally small in size and borne on terminal panicles. Crassulas can easily be grown from leaf cuttings.",
    "createdAt" : ISODate("2021-06-13T16:55:30.093-05:00"),
    "updatedAt" : ISODate("2021-08-21T16:07:01.076-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-08-21T16:07:00.758-05:00")
    ]
},
{
    "_id" : ObjectId("60c68299e943145bd823338d"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://plantaddicts.com/elephant-bush-succulent"
    ],
    "name" : "Jade (tall)",
    "botanicalName" : "",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "tempHigh" : "30",
    "hardiness" : "30",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "11",
    "lastPotted" : ISODate("2020-10-09T19:00:00.000-05:00"),
    "imgURL" : "crassula-elephant-bush.jpg",
    "notes" : "Purchased as a baby from Trader Joe's a year or so ago. Was not labelled. Guessing elephant bush.\n\nhttps://www.succulentsandsunshine.com/types-of-succulents/portulacaria-afra-elephant-bush/\n\nTrue to its name, elephant bush is a favorite food of elephants in South Africa. You can grow it outdoors if you live in a warm climate that occasionally dips to no lower than 30 degrees Fahrenheit. If you live in a colder climate you can grow elephant bush as an easy-care house plant.\n\nThis drought-tolerant jade plant look-alike has unusual reddish-brown stems that contrast beautifully with the glossy, rounded, variegated, ¾-inch fleshy leaves. It is a slow grower, but as the stems mature they thicken so the plant takes on an old appearance even when young. Elephant bush has a somewhat sprawling/cascading habit, making it well suited to growing in a hanging basket. When grown in the ground it can slowly attain a height of several feet, and its evergreen nature makes it useful as a screen or hedge.\n\nElephant Bush Care\nHold the watering can! Like most succulents, elephant bush thrives on neglect. Just plant it in full sun in sandy soil so it dries quickly and the roots don’t rot. If you are growing it in a pot, be sure the container has a drainage hole at the bottom so the water drains out. If you have a saucer below the pot, it’s critical to empty the saucer after watering so the plant does not stand in water because they absolutely hate wet feet. Use a commercial cactus mix to pot up the plant, or make your own by combining half potting soil with half sand or vermiculite.\n\nElephant Bush Spacing\nIn the ground or in a pot, elephant bush grows slowly so it won’t overtake whatever space you give it. In the ground, it slowly reaches a few feet tall and wide but can be kept smaller by pruning the tips. If you want the plant to attain full size, leave a space of two feet around it, but beware that it is very slow growing; you might want to fill in with other small plants as it matures, then remove them as things become crowded. A grouping of elephant bush planted in the ground can be nestled as close as a foot apart so they appear as one massed plant. The size of container-grown elephant bush can be controlled by pinching the longest stems and keeping it contained to a small pot. If it becomes pot-bound, simply remove it from the pot and put it in a bigger pot, or vertically slice off part of the plant and roots; the slice can be potted up and enjoyed as an additional houseplant.",
    "createdAt" : ISODate("2021-06-13T17:11:37.789-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:47:21.139-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-08-07T15:37:57.571-05:00"), 
        ISODate("2021-08-24T07:47:21.125-05:00")
    ]
},
{
    "_id" : ObjectId("60c68673e943145bd823338e"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://succulentsnetwork.com/echeveria-blue-prince-care-guide-with-pictures/"
    ],
    "name" : "Echeveria 'Blue Prince'",
    "botanicalName" : "Echeveria 'Blue Prince'",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "tempHigh" : "30",
    "hardiness" : "30",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "11",
    "imgURL" : "echeveria-blue-prince.jpg",
    "notes" : "Received as an additional plant from Little Prince Plants\nhttps://littleprinceplants.com/\n\n7/23/21: still struggling a bit with this one. A number of the leaves have shriveled up, and I don't water it often. Just watered it today, will see how it does.",
    "createdAt" : ISODate("2021-06-13T17:28:03.477-05:00"),
    "updatedAt" : ISODate("2021-07-24T18:12:14.257-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-07-24T18:12:13.940-05:00")
    ]
},
{
    "_id" : ObjectId("60c687b8e943145bd823338f"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.succulentsandsunshine.com/types-of-succulents/kalanchoe-longiflora-coccinea-tugela-cliff-kalanchoe/"
    ],
    "name" : "Tugela Cliff-kalanchoe",
    "botanicalName" : "Kalanchoe longiflora coccinea",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "tempHigh" : "30",
    "hardiness" : "30",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "11",
    "lastPotted" : ISODate("2021-06-12T19:00:00.000-05:00"),
    "imgURL" : "kalanchoe-longiflora-coccinea.jpg",
    "notes" : "Relatively fast growing for a succulent. As of 6/13/21, one of the leaves is shriveling. I think it's because I haven't been watering it often enough.\n\nGeneral Care for Kalanchoe longiflora coccinea “Tugela Cliff-kalanchoe”\nKalanchoe longiflora coccinea “Tugela Cliff-kalanchoe” grows well in container gardens and rock gardens. This shrub succulent spreads as it grows, and when grown in hanging containers it can be used as “filler.”\n\nWatering\n“Tugela Cliff-kalanchoe” has typical watering needs for a succulent. It's best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.\n\nWhere to Plant\n“Tugela Cliff-kalanchoe” is not cold hardy, so if you live in a zone that gets colder than 30° F (-6.7° C), it's best to plant this succulent in a container that can be brought indoors. It does well in full to partial sun.\n\nIf planting indoors, place in a room that gets a lot of sunlight, such as near a southern-facing window (if you're in the Northern Hemisphere).\n\nHow to Propagate Kalanchoe longiflora coccinea “Tugela Cliff-kalanchoe”\nKalanchoe longiflora coccinea “Tugela Cliff-kalanchoe” can be propagated from stem cuttings.\n\nCuttings\nTo grow Kalanchoe longiflora coccinea from cuttings, use a sterile, sharp knife or pair of scissors. Remove a stem from the main plant, and allow it to callous for several days before placing on well-draining soil. Water whenever the soil has dried out completely.",
    "createdAt" : ISODate("2021-06-02T17:33:28.739-05:00"),
    "updatedAt" : ISODate("2021-08-16T09:14:30.706-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-08-15T09:14:30.387-05:00")
    ]
},
{
    "_id" : ObjectId("60c6894ae943145bd8233390"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.succulentsandsunshine.com/types-of-succulents/crassula-muscosa-watch-chain/"
    ],
    "name" : "Watch Chain",
    "botanicalName" : "Crassula lycopodioides",
    "location" : "indoor",
    "locationSec" : "aquarium shelf",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "tempHigh" : "20",
    "hardiness" : "20",
    "hardinessZoneMin" : "9",
    "imgURL" : "crassula-watch-chain.jpg",
    "notes" : "General Care for Crassula muscosa “Watch Chain”\nCrassula muscosa adds great “thriller” to succulent arrangements as it grows, and then “spiller” when it begins to trail, making it perfect for hanging baskets or rock gardens.\n\nWatering\n“Watch Chain” has typical watering needs for a succulent. It's best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.\n\nNote: If grown outdoors in full sun, this succulent may require more frequent watering during the summer.\n\nWhere to Plant\nSince Crassula muscosa is not cold hardy, it should be brought indoors when the temperature falls below 20° F (-6.7° C).\n\nPlant in an area of your garden that gets 6 hours of sunlight a day. If planting indoors, place in a room that gets a lot of sunlight, such as near a southern-facing window (if you're in the Northern Hemisphere).\n\nHow to Propagate Crassula muscosa “Watch Chain”\nCrassual muscosa “Watch Chain” is a prolific propagator. It is easily propagated from stem cuttings. If growing outdoors, it can be invasive, so it's best to plant in an area where it can spread and trail.\n\nCuttings\nTo grow “Watch Chain” from cuttings, use a sterile, sharp knife or pair of scissors. Remove a stem from the main plant, and allow it to callous for several days before placing on well-draining soil. Water whenever the soil has dried out completely.\n\nSeeds\nCrassula muscosa gets its name from the Latin word muscosus, meaning “mossy.” It is also synonymous with Crassula lycopodioides.\n\nName Origin\nCrassula muscosa gets its name from the Latin word muscosus, meaning “mossy.” It is also synonymous with Crassula lycopodioides.",
    "createdAt" : ISODate("2021-06-02T17:40:10.087-05:00"),
    "updatedAt" : ISODate("2021-08-21T16:01:16.596-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-06-17T21:51:08.500-05:00"), 
        ISODate("2021-08-15T09:14:42.365-05:00"), 
        ISODate("2021-08-21T16:01:16.579-05:00")
    ]
},
{
    "_id" : ObjectId("60c9ecb4e1be3e46189eae61"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://succulentsbox.com/products/crassula-picturata-tiger-jade?_pos=3&_sid=dc00f1453&_ss=r"
    ],
    "name" : "Tiger jade",
    "botanicalName" : "Crassula exilis subsp. picturata",
    "location" : "indoor",
    "locationSec" : "living room front window",
    "locationPreferred" : "outdoor",
    "plantType" : "succulent",
    "tempHigh" : "20",
    "hardiness" : "20",
    "soilContent" : "Well-Drained, Rich, Gritty",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "10",
    "lastPotted" : ISODate("2021-06-12T19:00:00.000-05:00"),
    "imgURL" : "crassula-tiger-jade.jpg",
    "notes" : "8/19/21: watered parent.\n8/15/21: watered small plantlings. \n\n8/14/21: repotted into a terracotta pot, and since some of the leaves came off, put them in another terracotta pot. Original pot still in full sun on the windowsill, the pot of plantlings is under the grow lights.\n\n7/23/21: noticed a couple of leaves have brown edges. leaves also felt a little thing. watered heavily. Will check it again in a day or two. Want to be careful with this one, as a had smaller versions that died right away because they stayed wet.\n\nYou can propagate Crassula Tiger Jade by division, offsets or leaf cuttings. The easiest way is to propagate from a single leaf: put the leaf in a succulent or cacti mix, then cover until it sprouts.\nBought small versions of this one from Gethsemane and both rotted from too much water. So be careful with the watering. Try once every 10 days.\n\nRepotted on 6/13/21.",
    "createdAt" : ISODate("2021-06-16T07:21:08.788-05:00"),
    "updatedAt" : ISODate("2021-08-19T17:46:15.021-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-07-08T19:00:00.000-05:00"), 
        ISODate("2021-07-24T18:21:58.956-05:00"), 
        ISODate("2021-08-19T17:46:14.793-05:00")
    ]
},
{
    "_id" : ObjectId("60c9f63b6bfe0a5ae0556a18"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [],
    "name" : "Aloe (hybrid)",
    "botanicalName" : "Aloe vera",
    "location" : "indoor",
    "locationSec" : "living room front window",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "lastPotted" : ISODate("2021-06-10T19:00:00.000-05:00"),
    "imgURL" : "aloe-hybrid.jpg",
    "notes" : "Received as a secondary plant from Premier Plants on Etsy. Not sure of the care - will assume like other aloe plant, which is to be watered infrequently.",
    "createdAt" : ISODate("2021-06-16T08:01:47.708-05:00"),
    "updatedAt" : ISODate("2021-06-16T08:04:08.090-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60c9fe006bfe0a5ae0556a19"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [],
    "name" : "Chain Plant",
    "botanicalName" : "Callisia navicularis",
    "location" : "indoor",
    "locationSec" : "living room front window",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "Well-drained soil, mulch, humidity, rich soil, moist soil, organic matter",
    "hardinessZoneMin" : "4",
    "hardinessZoneMax" : "10",
    "notes" : "As of 7/1/21, looks dark from direct sunlight.\n\n8/7/21: took out of the 2 inch pot and saw the roots wrapped around. repotted in terracotta pot.",
    "createdAt" : ISODate("2021-06-16T08:34:56.517-05:00"),
    "updatedAt" : ISODate("2021-08-21T16:01:01.437-05:00"),
    "__v" : 0,
    "imgURL" : "callisia-navicularis.jpg",
    "lastWatered" : [ 
        ISODate("2021-06-20T21:50:57.731-05:00"), 
        ISODate("2021-08-09T07:51:01.965-05:00"), 
        ISODate("2021-08-15T09:32:28.557-05:00"), 
        ISODate("2021-08-21T16:01:01.105-05:00")
    ],
    "lastPotted" : ISODate("2021-08-06T19:00:00.000-05:00"),
    "description" : "Callisia navicularis a native to Mexico and frequently is listed under its synonym Tradescantia navicularis. This succulent can differ quite a lot depending on it's is growing conditions. When grown in full sun the leaves are right next to each other and it can have a purplish color. When grow in more shade there is more space between the nodes, our plants have a more spaced out house plant typed look. The plants will change depending on where they are grown.\n\nPlanting season:\nSpring as annual in hardiness zone 4-10a, as perennial in spring to autumn 10b-11 and all year in hardiness zone 12+"
},
{
    "_id" : ObjectId("60ca0a576bfe0a5ae0556a1a"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardenia.net/plant/origanum-dictamnus"
    ],
    "name" : "Dittany of Crete",
    "botanicalName" : "Origanum dictamnus",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "soilContent" : "Well drained potting mix",
    "hardinessZoneMin" : "8",
    "hardinessZoneMax" : "11",
    "imgURL" : "dittany-of-crete.jpg",
    "notes" : "8/1/21: this is doing really well. Is flowering. Was repotted a few days ago. Watered it thoroughly, so am letting it dry out thoroughly. Will want to check on the growth rate. May keep it in that new 4-5 inch pot. ",
    "createdAt" : ISODate("2021-06-16T09:27:35.917-05:00"),
    "updatedAt" : ISODate("2021-08-01T09:55:28.209-05:00"),
    "__v" : 0,
    "description" : "Aromatic and strangely beautiful, Origanum dictamnus (Dittany of Crete) is a bushy sub-shrub forming a spreading mound of small, rounded, fuzzy silvery-white leaves. The leaves have a mild oregano flavor and may be used for seasoning soups, sauces, salads, roasts, vegetables and meats. In summer, it produces whorls of pendulous, pale green, hop-like bracts which mature to showy reddish-purple. Tiny, two-lipped, pink to purple flowers peek out of them. This plant has a long history as culinary and medicinal herb and is mentioned in Greek mythology. Good heat and drought tolerance. Intolerant of high humidity."
},
{
    "_id" : ObjectId("60ca0a6e6bfe0a5ae0556a1b"),
    "waterPref" : [],
    "sunlight" : [],
    "links" : [],
    "name" : "Azalea (White and Pink)",
    "botanicalName" : "Azalea",
    "location" : "indoor",
    "locationPreferred" : "outdoor",
    "createdAt" : ISODate("2021-04-16T09:27:58.158-05:00"),
    "updatedAt" : ISODate("2021-06-20T09:59:17.372-05:00"),
    "__v" : 0,
    "imgURL" : "azalea.jpeg"
},
{
    "_id" : ObjectId("60cf3c939702ea4f683f97a2"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/edible/herbs/lavender/goodwin-creek-grey-lavender.htm"
    ],
    "name" : "Goodwin Creek Gray Lavender",
    "botanicalName" : "Lavandula x ginginsii 'Goodwin Creek Gray'",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "tempHigh" : "5",
    "hardinessZoneMin" : "7",
    "hardinessZoneMax" : "9",
    "notes" : "A dense mound of finely toothed, silver-grey foliage and beautiful, long, slender, dark purple flower spikes. Very tolerant of heat, sun, and periodic drought. Ideal for sunny perennial borders or rock gardens, and raised beds or containers. In colder climates, overwinter potted plants indoors until spring, after danger of frost. Evergreen. According to Gethsemane, 24-36\" tall. Unlike most garden lavenders, Goodwin Creek grows well indoors with a sunny south facing window. Hybrid of French Lavender with shorter growth habit and a darker purple flower. Great choice for perfume and culinary uses.\n\nWhile it is difficult to grow lavender indoors, largely because it can so easily fall victim to humidity and fungus, this variety tends to fare better inside than most. When growing Goodwin Creek Grey lavender indoors, make sure to plant it in well-draining soil and to give it lots of light. At the very least, it should be placed in a bright window that receives six to eight hours of sunlight per day. Alternatively, it can be grown under artificial lights. Growing Goodwin Creek Grey lavender is very similar to growing other lavender varieties, with a few exceptions. As mentioned above, it is a bit more amenable to being grown in pots indoors. It is also a little more heat resistant than other lavenders. It is very drought tolerant and does not need to be watered regularly. It should be planted in well-draining, sandy soil in a spot that receives full sun. After flower stems have faded, cut them off at the base. The whole plant can be cut back after all flowers have faded to maintain a compact, dense shape.",
    "createdAt" : ISODate("2021-06-20T08:03:15.402-05:00"),
    "updatedAt" : ISODate("2021-08-14T21:51:04.668-05:00"),
    "__v" : 0,
    "imgURL" : "lavender-goodwin-creek.jpg",
    "lastPotted" : ISODate("2021-07-28T19:00:00.000-05:00"),
    "lastWatered" : [ 
        ISODate("2021-07-29T10:01:13.267-05:00"), 
        ISODate("2021-08-06T20:52:50.250-05:00"), 
        ISODate("2021-08-14T21:51:04.657-05:00")
    ]
},
{
    "_id" : ObjectId("60cf5b61acae684c8411459d"),
    "waterPref" : [ 
        "dry"
    ],
    "sunlight" : [ 
        "medium"
    ],
    "links" : [],
    "name" : "Known Survivor",
    "location" : "indoor",
    "locationSec" : "living room front windowsill",
    "locationPreferred" : "indoor",
    "soilContent" : "put in succulent soil with perlite and vermilucite",
    "lastPotted" : ISODate("2021-06-19T19:00:00.000-05:00"),
    "imgURL" : "tbd-known-survivor.jpg",
    "notes" : "Angela said she found this one outside on the ground and put it in a little cardboard container. This was likely back in April or May 2021. Seemed to be growing slowly under low light. Am moving it to the front windowsill on 6/20/21 and repotting in 2 inch container to see if it will grow more.",
    "createdAt" : ISODate("2021-05-02T10:14:41.776-05:00"),
    "updatedAt" : ISODate("2021-06-20T10:14:41.776-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60cf7f5f64b7c327f00f0da2"),
    "waterPref" : [],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://homeguides.sfgate.com/types-gooseberry-plants-34403.html"
    ],
    "name" : "Gooseberry Plant",
    "botanicalName" : "",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "hardinessZoneMin" : "3",
    "hardinessZoneMax" : "7",
    "imgURL" : "gooseberry-plant.jpg",
    "notes" : "Need protection from harsh afternoon sun. Currently sitting right by a wall, so in the late afternoon, the sun does not hit it directly. Considered a woody plant (shrub).\nThis link lists types\nhttps://gardenmaking.com/gooseberry-plants/",
    "createdAt" : ISODate("2017-07-20T12:48:15.656-05:00"),
    "updatedAt" : ISODate("2021-07-27T12:31:38.900-05:00"),
    "__v" : 0,
    "lastPotted" : ISODate("2019-01-19T19:00:00.000-05:00"),
    "lastWatered" : [ 
        ISODate("2021-06-18T19:00:00.000-05:00")
    ],
    "cycle" : "perennial",
    "tempHigh" : "",
    "hardiness" : "-40",
    "tempLow" : "-40"
},
{
    "_id" : ObjectId("60cf8350e5aa472eb400b5db"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/edible/herbs/garlic-chives/growing-garlic-chives-plants.htm"
    ],
    "name" : "Garlic chives",
    "botanicalName" : "Allium tuberosum",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "tempHigh" : "",
    "soilContent" : "well-draining soil",
    "cycle" : "perennial",
    "hardinessZoneMin" : "3",
    "lastPotted" : ISODate("2016-04-19T19:00:00.000-05:00"),
    "imgURL" : "garlic-chives.jpg",
    "notes" : "At some point, I would like to confirm these are garlic and not onion.\nThis particular pot has two garlic chive clumps within it. I've had it for many years, and it seems to come back first before any other perennials no matter what. Drought tolerant, but do enjoy moist soil. Other care of garlic chives instructs fertilizing them at the start of the growing season with a slow-release fertilizer. Propagate either from seed or division. Divide the plants in the spring every three years. Propagation from seed may result in an invasion of garlic chives, so you may want to either eat the flowers before they dry and drop seeds or remove and discard them.\n\nhttps://www.gardeningknowhow.com/edible/herbs/garlic-chives/growing-garlic-chives-plants.htm\n\nEating garlic chives\nhttps://www.thespruceeats.com/what-are-garlic-chives-695295",
    "createdAt" : ISODate("2016-04-20T13:05:04.966-05:00"),
    "updatedAt" : ISODate("2021-07-27T12:33:31.224-05:00"),
    "__v" : 0,
    "hardiness" : "-40",
    "tempLow" : "-40"
},
{
    "_id" : ObjectId("60cf93e23abc8f636c8002b9"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "medium"
    ],
    "links" : [ 
        "https://www.thesill.com/blogs/plants-101/how-to-care-for-monstera-monstera-deliciosa"
    ],
    "name" : "Swiss Cheese Monstera",
    "botanicalName" : "Monstera deliciosa",
    "location" : "indoor",
    "locationSec" : "living room floor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "tempHigh" : "30",
    "soilContent" : "well draining soil with a good amount of peat and perlite. ",
    "hardinessZoneMin" : "10",
    "hardinessZoneMax" : "12",
    "lastPotted" : ISODate("2021-06-19T19:00:00.000-05:00"),
    "imgURL" : "monstera.jpg",
    "notes" : "This is one I got from Angela. Normal room humidity will do, but prefers humid conditions if possible. Consider incorporating a fine-mist mister or humidifier to boost humidity level indoors. Will put water at the bottom under rocks. \n\n8/24/21: a couple days ago, the smallest bottom leaf yellowed. Can't tell if it's because of light or because of watering. Will increase watering.",
    "createdAt" : ISODate("2021-05-01T14:15:46.042-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:57:35.425-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-08-07T15:36:50.197-05:00"), 
        ISODate("2021-08-17T18:05:53.183-05:00"), 
        ISODate("2021-08-24T07:57:35.413-05:00")
    ],
    "description" : "SYMPTOM: Leaves turning brown and crispy at the edges\nCAUSE: Thirsty plant, underwatered or high salt build up\n\nSYMPTOM: Wilting plant, dry potting mix \nCAUSE: Underwatered or pot-bound\n\nSYMPTOM: Yellowing leaves or black stems, wet potting mix\nCAUSE: Overwatered"
},
{
    "_id" : ObjectId("60cfd40f612b086678c1cc51"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "http://www.manorfarmherbs.co.uk/herbinfo/orange_thyme"
    ],
    "name" : "Orange Thyme",
    "botanicalName" : "Thymus fragrantissimus",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "herb",
    "tempHigh" : "-25",
    "hardiness" : "-25",
    "soilContent" : "Dry sunny position in poor soil, mixed planting in containers",
    "hardinessZoneMin" : "5a",
    "hardinessZoneMax" : "10a",
    "imgURL" : "thyme-orange.jpg",
    "notes" : "8/19/21: as of last week, looked like a lot of the leaves started dying off. will try to water it even less, but make sure it gets lots of sun.\n\n8/4/21:  I read that these don't like to be watered particularly often, so I've only been watering everything around it since the repot.\n\nPicked this up from the Andersonville market for 2 bucks. \n",
    "createdAt" : ISODate("2021-06-16T18:49:35.188-05:00"),
    "updatedAt" : ISODate("2021-08-19T18:13:21.232-05:00"),
    "__v" : 0,
    "description" : "Too much water can kill the plant so keep in mind when this is outside. This lovely herb compliments our lemon thyme, with a citrus orange peel scent, and can be planted and used in much the same way.\n\nIn common with all the other thymes it likes lots of sunshine and a poor dry soil, these conditions give the best flavours and flowers, too much water can kill the plant. Of all the thymes, the pale pink flowers of orange thyme are the first to open in early summer and are soon covered in bees and early butterflies.\n\nIt is very versatile and can be planted in herb gardens and borders, rockeries and on the edge of paths. It works well planted with pale flowered dwarf lavenders such as the white Edelweiss or Rosea - the pink variety. It can also be planted with other thymes, both upright and creeping, to give a fragrant and colourful carpet throughout the year.\n\nThe whole plant is fragrant, both the fine leaves and the pink flowers are scented with orange and can be picked and dried as sprigs to add to pot pourri.\n\nAs well as perfuming the garden and the home, this is a great thyme to use in cooking. It can be used in the same way as other culinary thymes and is particularly good with fish, soups and stews, also in sweet dishes, herb teas and fruity chutney.\n\nIf you want to preserve your orange thyme then it is best to harvest before flowering for the best flavour and aroma. Cut small bunches early in the day and dry in a warm dark place. Keep the whole leaves in jars and only crush just before use.\n\nTrim back in fall to 1 inch above previous year’s growth.",
    "lastWatered" : [ 
        ISODate("2021-07-24T07:33:47.592-05:00"), 
        ISODate("2021-08-06T20:53:26.388-05:00")
    ],
    "lastPotted" : ISODate("2021-07-28T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("60cfd7763908145d8432e6d1"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "part sun"
    ],
    "links" : [],
    "name" : "Sweet Potato Plant",
    "location" : "outdoor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "soilContent" : "well-draining soil",
    "lastPotted" : ISODate("2021-04-19T19:00:00.000-05:00"),
    "imgURL" : "sweet-potato-handmade.jpg",
    "notes" : "I took this off a sweet potato that was growing a vine sometime last year (2020). ",
    "createdAt" : ISODate("2020-01-20T19:04:06.284-05:00"),
    "updatedAt" : ISODate("2021-06-20T19:04:06.284-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60cfd8463908145d8432e6d2"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [],
    "name" : "Moss-rose purslane",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "well-draining soil",
    "imgURL" : "crassula-jade-maybe.jpg",
    "notes" : "I don't actually know what this is. Picked up from the Logan Square Market on 6/13/21.\nHad it under one of the low-ish lights under the silver tin and it lost a lot of leaves. Outside in the direct sunlight, it seems to be growing back slowly.\n\n8/4/21: put it outside in the full sun a few weeks ago and it seems to be doing much better. Have been watering it when it's dry, but it may prefer some drought. It sits on the plant shelf so it gets sun from maybe 7 to 10:30 a.m.",
    "createdAt" : ISODate("2021-06-13T19:07:34.086-05:00"),
    "updatedAt" : ISODate("2021-08-04T07:27:50.090-05:00"),
    "__v" : 0,
    "botanicalName" : "Portulaca grandiflora",
    "description" : "Moss rose plants (Portulaca grandiflora) are popular flowering annuals sold at garden centers in the spring. And if you see leftover moss rose plants on clearance sale in the summer, you might notice the plants are usually just as lovely as they were in the spring, a testament to the plant's toughness. The medium green, cylindrical, succulent leaves of moss rose are another clue to the plant's hardiness, namely its tolerance of drought conditions.\n\nThese plants grow 3 to 9 inches tall and spread to create a dense mat, making moss rose a good option as a ground cover. The flowers come in several bright colors and often have ruffled petals, looking very similar to miniature roses. The blooms grow in clusters on reddish stems and typically don't open on cloudy days or at night. Moss rose is easy and quick to grow and is best planted in the spring after the danger of frost has passed.",
    "lastWatered" : [ 
        ISODate("2021-08-03T07:27:50.075-05:00")
    ]
},
{
    "_id" : ObjectId("60cff054aa5cc72224f1e61e"),
    "waterPref" : [ 
        "moderate"
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeners.com/how-to/growing-daylilies/8104.html"
    ],
    "name" : "Yellow Day Lillies",
    "botanicalName" : "Hemerocallis",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "soilContent" : "well draining soil",
    "cycle" : "perennial",
    "hardinessZoneMin" : "3",
    "hardinessZoneMax" : "10",
    "lastPotted" : ISODate("2021-05-04T19:00:00.000-05:00"),
    "imgURL" : "yellow-day-lillies.jpg",
    "notes" : "These were free on Catalpa a couple months ago. I put them in a big pot but as of 6/20, they are looking good but still getting established. I'm not expecting to see blooms this season.",
    "createdAt" : ISODate("2021-05-05T20:50:12.778-05:00"),
    "updatedAt" : ISODate("2021-06-20T21:18:58.089-05:00"),
    "__v" : 0,
    "lastWatered" : [ 
        ISODate("2021-06-17T20:56:00.011-05:00"), 
        ISODate("2021-06-13T21:18:37.131-05:00"), 
        ISODate("2021-06-19T21:18:58.072-05:00")
    ]
},
{
    "_id" : ObjectId("60d07e50f17a165444d43e4e"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-25T07:53:56.025-05:00"), 
        ISODate("2021-08-21T16:02:27.924-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://plantcaretoday.com/crassula-rupestris.html"
    ],
    "name" : "String of Buttons",
    "botanicalName" : "Crassula rupestris",
    "location" : "indoor",
    "locationSec" : "living room front window",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "well-draining soil mix to prevent root rot in these plants.  A commercial cactus mix or a coarse, sandy soil can be mixed together in the ratio of 2:1 for a good draining mix. Mixing in perlite with a cactus potting mix for a similar effect.",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11",
    "lastPotted" : ISODate("2021-06-18T19:00:00.000-05:00"),
    "imgURL" : "string-of-buttons.jpg",
    "createdAt" : ISODate("2021-06-21T06:56:00.330-05:00"),
    "updatedAt" : ISODate("2021-08-21T16:02:27.942-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60ed88a2b0f8715bb4752339"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-25T07:53:01.672-05:00"), 
        ISODate("2021-07-31T21:43:57.342-05:00"), 
        ISODate("2021-08-06T21:11:58.207-05:00"), 
        ISODate("2021-08-13T21:37:17.467-05:00"), 
        ISODate("2021-08-19T17:54:09.576-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [],
    "name" : "Senecio Kilimanjaro",
    "botanicalName" : "Senecio Kilimanjaro",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "hardinessZoneMin" : "8",
    "hardinessZoneMax" : "11",
    "notes" : "Picked up from Sunrise Topiary at the Edgewater Farmer's Market on 7/12.\n\n8/19/21: when the leaves are drooping a bit, especially at the bottom, and you squeeze and they don't feel very firm, water thoroughly until water comes out the bottom.",
    "createdAt" : ISODate("2021-07-13T07:35:46.702-05:00"),
    "updatedAt" : ISODate("2021-08-19T17:55:14.140-05:00"),
    "__v" : 0,
    "imgURL" : "senecio-kilimanjaro.jpg",
    "description" : "Senecio Kilimanjaro is a succulent plant with long, needly steel-blue foliage. It is a relatively fast-growing plant with a very upright growth habit. Pinch the plant to encourage several growing tips and to produce a bushier plant. It is an excellent upright feature in a succulent combination planter. \n\nThis unique succulent is an easy conversation starter, thanks to its spikey form. It tolerates some drought and shade. Mostly, it's prized as the perfect low-maintenance addition to a mixed patio pot that gets a lot of sunshine. The cool blue hues freshen up an indoor pot just as easily. It makes a cool, modern feature in a decorative pot on a sidetable. Tolerates some drought."
},
{
    "_id" : ObjectId("60ed8adeb0f8715bb475233a"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-29T10:00:13.788-05:00"), 
        ISODate("2021-08-03T07:21:22.990-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"
    ],
    "name" : "Eucalyptus",
    "botanicalName" : "Eucalyptus cinerea",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "houseplant",
    "hardinessZoneMin" : "8",
    "hardinessZoneMax" : "10",
    "imgURL" : "eucalyptus.jpg",
    "notes" : "Picked up from grower at the Green City Market on 7/10/21.\n\n8/4/21: a lot of the edges are brown. I repotted it almost a week ago, and let it begin to droop before I watered it again. I've noticed the leaves getting white stuff on it from time to time, and I've sprayed it with neem oil. It's possible the brown is from overwatering, or the neem oil, or from trimming the roots during the repot last week.\n\n\n",
    "createdAt" : ISODate("2021-07-13T07:45:18.148-05:00"),
    "updatedAt" : ISODate("2021-08-04T07:21:23.010-05:00"),
    "__v" : 0,
    "description" : "In USDA hardiness zones 8 to 10, eucalyptus can grow into trees of towering heights. For the home gardener, however, eucalyptus is more often grown as a potted shrub or plant. While the plant is highly adaptable to most soils, the main concern is to pay close attention to basic feeding, sunlight, and watering needs.\n\nEucalyptus is fairly free of any major pest or disease issues, though you may occasionally spot issues like eucalyptus long-horned borers, which can be treated by removing the infested area of the plant immediately (insecticides are not effective against borers).\n\nEucalyptus likes a lot of light, so settle your plant somewhere in your landscape that receives at least 8 to 10 hours of bright sunlight daily. Likewise, eucalyptus plants grown indoors should be kept near a window that gets plentiful sunlight.\n\nWater your eucalyptus plant with some regularity. While it can be considered partially drought-tolerant once established, it really doesn't like to be left dry for long periods and may even begin to drop leaves or branches.",
    "lastPotted" : ISODate("2021-07-28T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("60f4935107f0b45e2004186a"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-25T07:53:47.207-05:00"), 
        ISODate("2021-08-01T08:58:45.401-05:00"), 
        ISODate("2021-08-06T07:55:50.684-05:00"), 
        ISODate("2021-08-09T07:56:00.721-05:00"), 
        ISODate("2021-08-16T17:38:46.002-05:00"), 
        ISODate("2021-08-19T17:41:48.508-05:00")
    ],
    "sunlight" : [ 
        "medium"
    ],
    "links" : [ 
        "https://gardeningzeal.com/lipstick-plant-a-complete-lipstick-plant-care-guide-15-best-care-tips/"
    ],
    "name" : "Rasta plant",
    "botanicalName" : "Aeschynanthus Radicans",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "imgURL" : "rasta-plant.jpg",
    "createdAt" : ISODate("2021-07-18T15:47:13.594-05:00"),
    "updatedAt" : ISODate("2021-08-19T17:41:48.533-05:00"),
    "__v" : 0,
    "notes" : "8/1/21: The leaves have been yellowing. Can't tell yet if that's increasing or staying about the same. Noticed them when I moved the plant from directly in front of the window to under the grow light. When in front of the window, there were blooms, and when I moved under the grow light, the blooms dropped off in a week.\n\nAccording to this, the yellow may be because it is underwatered.\nhttps://www.ukhouseplants.com/plants/aeschynanthus-lipstick-plants\n\nAnd according to this it could need more water or sunlight.\nhttps://www.gardeningknowhow.com/houseplants/lipstick-plant/growing-lipstick-plants.htm\n\nI also see that there are some leaves on the plant that have brown tips, and some of the leaves are crispy. I can't tell if that's recent, or if that's a symptom of having been right in front of the window or what.\n\nToday I took all the debris off the top of the soil, and snipped the most obviously yellowing leaves. The leaves also felt a little limp in places. I was able to slide the plant out of the terracotta pot. The roots were not mushy, but they were very dry. Without really trying to pick apart the soil, I can't tell if the roots are entirely healthy. There were some that were a lighter brown color, other that were darker. For now, I'm going to leave that alone. Soaked the soil, and put it on the floor to get it out of the filtered light and under the grow light from a distance. Will check back in a few days.\n\n\n8/14/21: got a new smaller one from Gethsemane a few days ago. Potted in a terracotta pot and watered it today. Will put it directly under one of the full spectrum lights and see how it goes.\n8/17/21: Watered it again today. Saw some dry leaves. May need to water it every couple days.\n8/19/21: see some tips that are getting kind of light. will need to watch and see if they turn completely yellow. if so, may need to move to slightly lower light conditions. Note that the plant seemed happy to the bright filtered, sometimes direct light by the balcony door."
},
{
    "_id" : ObjectId("60f495a207f0b45e2004186b"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-24T07:53:18.414-05:00"), 
        ISODate("2021-07-30T22:46:44.509-05:00"), 
        ISODate("2021-08-06T07:56:50.093-05:00"), 
        ISODate("2021-08-15T17:55:42.416-05:00"), 
        ISODate("2021-08-19T17:56:31.582-05:00"), 
        ISODate("2021-08-24T08:00:30.554-05:00")
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [ 
        "https://piedmontmastergardeners.org/article/streptocarpella-the-houseplant-that-flowers-all-year/"
    ],
    "name" : "Streptocarpella",
    "botanicalName" : "Streptocarpella saxorum",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11",
    "imgURL" : "streptocarpella.jpg",
    "notes" : "8/19/21: moved it so it is under one of the grow lights, but somewhat indirect.\n\n8/15/21: a lot of the lower leaves are drying up. I'm not watering it enough. Will do some TLC on it, and water it more frequently.\n\n7/31/21: still trying to find the best place to put this one. Concerned it wasn't getting enough light in the dining room under the tall light/plant stand. Moved in front of the window, on the floor, and watered it yesterday.\n\nWater it regularly, and avoid getting water on the leaves because it causes browning. Regular watering.\n\nhttps://davesgarden.com/guides/pf/go/58138/#b\n\nPicked up from Sunrise Topiary at the Edgewater Farmer's market, sometime in June 2021.",
    "createdAt" : ISODate("2021-07-18T15:57:06.200-05:00"),
    "updatedAt" : ISODate("2021-08-24T08:00:30.578-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60f497b007f0b45e2004186c"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-29T09:59:53.150-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/houseplants/kalanchoe/growing-paddle-plants.htm"
    ],
    "name" : "Flapjack paddle plant",
    "botanicalName" : "Kalanchoe thyrsiflora",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "Well drained potting mix for succulents, create your own mix by combining peat moss, compost and coarse sand. ",
    "imgURL" : "flapjack-plant.jpg",
    "createdAt" : ISODate("2021-07-18T16:05:52.224-05:00"),
    "updatedAt" : ISODate("2021-08-01T09:59:53.168-05:00"),
    "__v" : 0,
    "notes" : "Picked up from Gethsemane June 2021. \n\n7/23/21 - last week I saw it had been wet for awhile. I put it under a fan to dry out. Yesterday I noticed on of the leaves shriveling. The soil is dry now, but I'm not going to water it again for a bit. I'm hoping that the shriveled leaf is an artifact of the roots having been wet for awhile."
},
{
    "_id" : ObjectId("60f4993207f0b45e2004186d"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-25T07:50:00.403-05:00"), 
        ISODate("2021-08-13T21:45:50.632-05:00"), 
        ISODate("2021-08-20T07:25:58.108-05:00")
    ],
    "sunlight" : [ 
        "indirect"
    ],
    "links" : [ 
        "https://www.thespruce.com/growing-devils-backbone-5082984"
    ],
    "name" : "Devil's Backbone",
    "botanicalName" : "Euphorbia tithymaloides",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "soilContent" : "Any rich potting mix will work fine for growing this plant, providing the drainage is good. Adding vermiculite, peat moss, and a bit of sand will help keep the soil evenly moist but not too wet.",
    "imgURL" : "devils-backbone.jpg",
    "notes" : "7-18-21: noticed the fluffy white of mealybug leftovers on the top leaves. Took it outside and drenched in insecticide. Will need to keep an eye on it. May also just be a type of mildew.\n\n7-23-21: Has a lot of yellow leaves. Tried to let the soil dry out since there was a fungus gnat issue closeby. May have lead to all the leaf drop, leaves turning yellow starting at the bottom. Will try to water when soil is a little dry, and will spray top of soil with bug treatment.\n\n8/1/21: leaf drop seems to have slowed (though there are a lot of leaves that dropped already anyway) and the plant is doing ok. Read that this plant likes to be on the dry side despite being a tropical plant. So will keep in mind that when it starts dropping a bunch of leaves that are yellow at once, probably is because it's overwatered. I'm also leaning toward the idea that on 7/18, when I noticed the white stuff, it was powdery mildew of some kind.",
    "createdAt" : ISODate("2021-07-18T16:12:18.964-05:00"),
    "updatedAt" : ISODate("2021-08-21T07:25:58.121-05:00"),
    "__v" : 0,
    "trouble" : "Y",
    "lastPotted" : ISODate("2021-07-16T19:00:00.000-05:00"),
    "description" : "Also referred to as a zigzag plant. \nThis plant does best with plenty of indirect sunlight. If you position it in a very sunny window, a lightweight curtain or slatted blinds turned to half-position works to give this plan the sun exposure it needs. Overly bright sunlight may scorch the tender foliage, so keep an eye on it and move it or create some shade if this happens.\n\n\nSoil\nAny rich potting mix will work fine for growing this plant, providing the drainage is good. Adding vermiculite, peat moss, and a bit of sand will help keep the soil evenly moist but not too wet. Using an unglazed clay pot with drainage holes in the bottom will help insure the soil drains effectively.\n\nWater\nDespite being a tropical plant, zigzag plant doesn't like wet soil. Misting it a bit if your house is dry can help it stay healthy, and mimics the plant's preferred natural setting.\n\n"
},
{
    "_id" : ObjectId("60f49fae07f0b45e2004186e"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-15T16:40:23.164-05:00"), 
        ISODate("2021-07-24T18:24:34.760-05:00"), 
        ISODate("2021-07-31T21:43:45.010-05:00"), 
        ISODate("2021-08-05T07:48:40.100-05:00"), 
        ISODate("2021-08-13T21:50:52.284-05:00"), 
        ISODate("2021-08-15T16:19:05.626-05:00"), 
        ISODate("2021-08-18T18:10:18.041-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/edible/fruits/figs/hardy-chicago-fig-trees.htm "
    ],
    "name" : "Chicago Hardy Fig",
    "botanicalName" : "Ficus carica",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "hardinessZoneMin" : "6",
    "hardinessZoneMax" : "10",
    "imgURL" : "chicago-hardy-fig.jpg",
    "notes" : "8/19/21: started growing figs about a week ago. still check it every day to see if it needs to be watered. The leaves naturally stick up, so when they start to bend over, it's clear the plant needs to be watered pretty thoroughly.\n\n8/1/21: seems to be doing well. I have to check the soil every couple days. When it looks mostly dry, I water it thoroughly. I also have to look out for powdery mildew. I think when water drips from the hanging plant, it sometime lands on the higher leaves and turns white. May also just be hard water drying, but I'll be careful in either case. Spraying with neem oil does the trick.\n\nUpdate 7/23/21: leaves shriveling and dropping at bottom. Will try to water more frequently, as the other leaves were drooping as well.\n\nPicked up from Gethsemane Garden Center on 7/11/21. \n\nWill die back in the fall. Needs 90 days of dormancy, bringing inside and putting it in a dark plant, or leaving it sheltered outside. Do not bring it in and sit it under grow lights during the dormancy period.  Just be sure to water regularly throughout the growing season and then reduce watering in the fall prior to dormancy. Can tell it is dry when the soil pulls away from the pot. \n\nPrefers full sun with some protection from the North Wind. This edible medium purple fig can take subfreezing temperatures, dying back in the Fall and re-sprouting in the Spring. Plant in warmest, most protected space. Prefers Loamy well drained soil with a PH 6.0 - 6.5. Fertilize in early summer. Plants reach an average height of 3 feet. An excellent candidate for pots. Hails from Sicily.\n\nThe medium sized fruit forms during summer and repines to a delicious sweetness from August until fall frost. Pruning is not usually needed as it will died back in our mid-west climate. However protection from wind during the winter is necessary.",
    "createdAt" : ISODate("2021-07-18T16:39:58.548-05:00"),
    "updatedAt" : ISODate("2021-08-19T18:11:38.808-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60fca3629015c63c80332816"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-25T09:59:16.207-05:00"), 
        ISODate("2021-08-06T07:04:19.424-05:00"), 
        ISODate("2021-08-10T21:38:54.143-05:00"), 
        ISODate("2021-08-21T07:23:41.968-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.thespruce.com/growing-string-of-heart-plants-5086828"
    ],
    "name" : "String of Hearts",
    "botanicalName" : "Ceropegia woodii",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "tempHigh" : "30",
    "soilContent" : "well-drained cacti potting mixes. Although they appreciate decent fertility, if the mix is overly rich, the plants can become straggly-looking.",
    "imgURL" : "string-of-hearts.jpg",
    "notes" : "7/23/21: some leaves at top turning yellow. I watched a video that said string of hearts can do with some neglect, so I haven't been watering it very much. but I may need to water it more frequently. it started showing growing new vines right away after I got it a week or two ago.\n\n8/1/21: a number of the leaves had been shriveled so I gave it a good soak. The leaves are no longer shriveled, but the leaves at the top are turning yellow. may be because I watered it more than once. Repotted in 6 inch terracotta pot today, so next time I water in 3-4 weeks, I can water it thoroughly, but it will hopefully dry out faster. Will keep an eye on the leaves for the next week to see if the yellowing slows. Was not a full repot - just added more succulent soil with pumice at the bottom, and moved the string of hearts with its existing soil on top of it.\n\n8/6/21: leaves have been slowly turning yellow at the very top. watered it again, as I saw a few shriveled. if it continues, may consider that it's getting too much overhead light.",
    "createdAt" : ISODate("2021-07-24T18:33:54.739-05:00"),
    "updatedAt" : ISODate("2021-08-21T07:23:42.029-05:00"),
    "__v" : 0,
    "description" : "The String of Hearts (Ceropegia woodii) is a trailing succulent-like plant native to South Africa. The delicate heart-shaped foliage and slender vines can reach up to 12' long in its natural environment, and has earned this plant many nicknames, including Rosary Vine and Sweetheart Vine.\nThe String of Hearts plant has a succulent-like nature, so they prefer periods of drought between waterings. When the soil is dry 2/3 of the way down in the pot, then the plant is ready for a drink. In the winter months it’s best to allow the soil to dry completely through the pot as these plants go into a dormancy, even indoors. They are sensitive to root rot and overwatering, so when in doubt let it drought.\n\nHow can I tell if I am underwatering my String of Hearts?\nString of Hearts plants store water in their leaves, so a good indicator to watch for is the leaves beginning to soften and look a little wilted and deflated.\n\nHow can I tell if I have overwatered my plant?\nOverwatering tends to result in yellowing of the leaves and eventually leaf loss. If you suspect you have overwatered your plant, aerate, hold off on watering until the soil has fully dried — potentially up to a month — then refer to the care guide to get back on to a proper watering routine.\n\nhttps://greeneryunlimited.co/pages/string-of-hearts-care",
    "lastPotted" : ISODate("2021-07-31T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("60fca656e1da01266c99b77a"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-04T06:59:28.426-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.thespruce.com/growing-tiger-aloe-5088227"
    ],
    "name" : "Tiger aloe (variegated)",
    "botanicalName" : "Gonialoe variegata",
    "status" : "",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "tempHigh" : "50",
    "soilContent" : "Well drained, sandy loam ",
    "hardinessZoneMin" : "9b",
    "hardinessZoneMax" : "11",
    "imgURL" : "tiger-aloe.jpg",
    "notes" : "7/23/21: Ordered from Etsy, expected by 8/1/21 or so.\n\n7/31/21: Received. Potted in a 4.5\" clay pot. Used succulent mix with added pumice.\n\n8/14/21: One of the leaves has a divet in it. Watered yesterday and today, will see if it fills in again. May have left it too long without water. There is another leaf with a divet that is not as severe.",
    "createdAt" : ISODate("2021-07-24T18:46:30.238-05:00"),
    "updatedAt" : ISODate("2021-08-14T21:45:34.123-05:00"),
    "__v" : 0,
    "description" : "The tiger aloe plant (Gonialoe variegata), also known by the colorful name partridge-breasted aloe, is native to South Africa and Namibia. Despite its limited native regions, it has become a popular houseplant in many parts of the world. It's an evergreen succulent, making it a very valuable specimen for growing indoors in cold regions.\n\nLight\nIn full sun, your tiger aloe may take on some reddish-brown coloring, adding to its vibrant beauty. But it is also happy in a partial sun setting. If the plant turns brownish-red quickly, give it some water as this can also be a sign of drought.\n\nSoil\nIn its native habitats, tiger aloe plants flourish in rocky outcroppings. So they're not fussy at all about soil, except for requiring excellent drainage. A sandy, semi-dry loam mixture is perfect. Placing pebbles in the base of the container is a good method for ensuring drainage.\n\nWater\nAs with other succulents, which store moisture inside their fleshy leaves, the tiger aloe will benefit from occasional watering only when the soil becomes dry to the touch. At that point, water deeply. It doesn't like to be wet or to have moist soil, so apart from watering as needed, no additional indoor moisture is required. If you have your tiger aloe indoors, keep it away from your humidifier, kitchen or bathroom, and don't put it near other plant arrangements that have trays of water for added humidity.\n\nAn unglazed clay container will help regulate the moisture content. This mimics the rainfall that provides the plant's main source of water in its native habitats.",
    "lastPotted" : ISODate("2021-07-28T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("60fcacefe1da01266c99b77b"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-26T07:30:47.665-05:00"), 
        ISODate("2021-07-31T22:55:12.682-05:00"), 
        ISODate("2021-08-17T08:27:32.238-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://plantcaretoday.com/peperomia-obtusifolia.html"
    ],
    "name" : "Peperomia obtusifolia (Lemon Lime)",
    "botanicalName" : "Peperomia obtusifolia",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "tempLow" : "90",
    "tempHigh" : "50",
    "soilContent" : "two parts peat moss with one part perlite",
    "imgURL" : "peperomia-obtusifolia.jpg",
    "notes" : "Picked up from Gethsemane on 7/23/21. I'm not entirely sure that it is a peperomia obtusifolia given that the tag said peperomia hb, but I will treat it that way for now. Hb may mean hanging basket.\n\n7/28/21: I have it on top of the plantshelf right in front of the window. It gets a little direct light, but mostly filtered. There is a low light right next to it to ensure the other side gets light as well.\n\nWatered 2021-07-26T12:30:47.665Z",
    "createdAt" : ISODate("2021-07-24T19:14:39.311-05:00"),
    "updatedAt" : ISODate("2021-08-17T08:27:32.254-05:00"),
    "__v" : 0,
    "description" : "Light Conditions and Temperature\nThis evergreen plant loves bright indirect light and can tolerate low light. If placed in direct sun for a long period, the leaves turn pale in color.\n\nThe plant does well in room temperatures ranging from 55° to 80° degrees Fahrenheit and likes high humidity. Cold drafts may cause leaves to fall off.\n\nAccording to the internet, it does not have an extensive root system, but Kiko at Gethsemane said that it does, and to make sure to water deeply. Right now the soil feels relatively dry (but not quite bone dry). Kiko said he would water it in the next day. And that it could sit near a window with 4 or so hours of sun as long as it isn't full blown scorching sun. When the leaves start to cup and curl in, it really needs to be watered. If the leaves turn yellow and start to shrivel, may be a sign it has been overwatered. Testing part two."
},
{
    "_id" : ObjectId("60fd786616a60247a824a27c"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-04T06:58:23.805-05:00"), 
        ISODate("2021-08-07T07:49:08.195-05:00"), 
        ISODate("2021-08-19T17:57:28.182-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [],
    "name" : "Aloe vera",
    "botanicalName" : "Aloe vera",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "Well draining cactus or succulent soil mix, may be amended with more perlite or sand.",
    "lastPotted" : ISODate("2021-07-23T19:00:00.000-05:00"),
    "imgURL" : "aloe-vera-2.jpg",
    "notes" : "8/21/21: moved out of the corner, on top of short case. will keep an eye on it.\n\n8/19/21: noticed the leaves were splaying out a bit, so watered thoroughly. last time I watered it, the soil got moldy on top. may move it out of the corner, may not be getting enough air circulation.\n\n7/24/21: picked up from Garden City Market, Matt's Urban Garden. ",
    "createdAt" : ISODate("2021-07-25T09:42:46.127-05:00"),
    "updatedAt" : ISODate("2021-08-21T07:53:44.434-05:00"),
    "__v" : 0,
    "description" : "Aloe vera is commonly grown as a houseplant and gained favor because the gel from its leaves makes a soothing skin salve (although some people are actually irritated by the gel).\n\nThere are over 300 species of Aloe vera, but the one most commonly grown as a houseplant is Aloe barbadensis miller. It has thick, succulent leaves that are plumped up with a watery gel. The leaves grow from the base of the plant, in a rosette, and have jagged edges with flexible spines. It's a fast-growing succulent, taking three to four years to reach a mature size.\n\nThe spiky flowers appear on tall stalks, in shades of yellow, red, or orange. Young plants don’t generally flower, and aloe grown as a houseplant can take years to produce a flower stalk.\nhttps://www.thespruce.com/grow-aloe-vera-1403153"
},
{
    "_id" : ObjectId("610613df7867c21f7c994699"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-04T06:58:53.818-05:00"), 
        ISODate("2021-08-09T20:26:44.381-05:00"), 
        ISODate("2021-08-17T18:01:59.643-05:00"), 
        ISODate("2021-08-24T07:48:28.031-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [],
    "name" : "Jade Tricolor",
    "botanicalName" : "Crassula ovata 'Tricolor'",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "lastPotted" : ISODate("2021-07-30T19:00:00.000-05:00"),
    "notes" : "7/31/21: Picked up from Mike's Urban Garden. Want to train it to spread out in a certain direction. It looks like it hasn't been watered enough, but it woody and otherwise looks sturdy. Light green leaves with stripes. Received with a big leave that has a light brown spot with black dots in it.",
    "description" : " 'Lemon & Lime', is a beautiful succulent shrub with attractive green leaves striped in creamy-white or pale yellow and flushed with pink in the bright sun. It usually grows over 1 foot (30 cm) tall. Leaves are fleshy and up to 2 inches (5 cm) long. Flowers are star-shaped, white with pink overtones, and appear in showy clusters at the ends of the branches from late winter to early spring.",
    "createdAt" : ISODate("2021-07-31T22:24:15.449-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:48:28.050-05:00"),
    "__v" : 0,
    "imgURL" : "jade-tricolor.jpg"
},
{
    "_id" : ObjectId("610617a04fba3303747574f6"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-04T06:59:05.230-05:00"), 
        ISODate("2021-08-15T11:35:10.673-05:00"), 
        ISODate("2021-08-24T08:02:46.366-05:00")
    ],
    "sunlight" : [ 
        "full sun"
    ],
    "links" : [ 
        "https://succulentplantcare.com/euphorbia-tirucalli-firesticks-care-propagation-toxicity/"
    ],
    "name" : "Sticks on Fire",
    "botanicalName" : "Euphorbia tirucalli",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "well-draining cactus or succulent mix with 30-50% perlite. can also mix with coarse sand.",
    "imgURL" : "euphorbia-tirucalli.jpg",
    "description" : "Euphorbia Tirucalli is native to Africa but is widely distributed in different parts of the world. It is known by common names such as Sticks on Fire or Firesticks, Pencil cactus, and Pencil tree. Euphorbia Tirucalli has pencil-thin stems that turn a fire-red color during the colder months.\n\nThe stems’ color can range from red, orange, yellow and green depending on the season and temperature. The plant can grow tall and tree-like, up to around 8-10 ft. (2.4-3 m.) tall. The sap of the plant is toxic and can cause severe irritations so care is needed when handling this plant.\n\nTry to provide at least 5-6 hours of sunlight per day indoors so the plant receives enough light. For areas with inadequate indoor lighting or poor lighting conditions, consider using a grow light.\n\nhttps://succulentplantcare.com/euphorbia-tirucalli-firesticks-care-propagation-toxicity/",
    "createdAt" : ISODate("2021-07-31T22:40:17.020-05:00"),
    "updatedAt" : ISODate("2021-08-24T08:02:46.377-05:00"),
    "__v" : 0,
    "notes" : "8/14/21: haven't watered it for 10 days, and it has new growth."
},
{
    "_id" : ObjectId("610758599d64155ad49a02a3"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-04T06:59:15.258-05:00"), 
        ISODate("2021-08-12T21:21:44.277-05:00"), 
        ISODate("2021-08-17T18:01:35.923-05:00"), 
        ISODate("2021-08-24T08:05:19.090-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.succulentsandsunshine.com/types-of-succulents/portulacaria-afra-elephant-bush/"
    ],
    "name" : "Elephant Bush",
    "botanicalName" : "Portulacaria afra",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "well-draining soil",
    "hardinessZoneMin" : "10a",
    "lastPotted" : ISODate("2021-07-31T19:00:00.000-05:00"),
    "imgURL" : "jade-elephant-bush.jpg",
    "description" : "Watering\n“Elephant Bush” has typical watering needs for a succulent. It's best to use the “soak and dry” method, and allow the soil to dry out completely between waterings. Portulacaria afra needs less frequent watering during its dormancy period.\n\nBecause the leaves on Portulacaria afra are so thin, it can handle more frequent waterings than other succulents.\n\nWhere to Plant\nPortulacaria afra is not cold hardy, so if you live in a zone that gets colder than 30° F (1.7° C), it's best to plant this succulent in a container that can be brought indoors. It does well in full to partial sun. Plant in an area of your garden that gets 6 hours of sunlight a day.\n\nIf planting indoors, place it in a sunny window. This succulent tends to stretch easily if not given enough sunlight, however the stretching isn't as noticeable as other succulents.",
    "createdAt" : ISODate("2021-08-01T21:28:41.802-05:00"),
    "updatedAt" : ISODate("2021-08-24T08:05:19.103-05:00"),
    "__v" : 0,
    "notes" : "Pick up from Andersonville Galleria on 8/1/21."
},
{
    "_id" : ObjectId("610a84414f936c427c83572e"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-29T16:42:13.719-05:00"), 
        ISODate("2021-08-06T07:57:09.529-05:00"), 
        ISODate("2021-08-12T21:22:15.610-05:00"), 
        ISODate("2021-08-19T18:03:22.166-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://succulentcity.com/peperomia-graveolens/"
    ],
    "name" : "Peperomia graveolens",
    "botanicalName" : "Peperomia graveolens",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "imgURL" : "peperomia-graveolens.jpg",
    "notes" : "Pick up from Gethsemane Garden center the day after they kicked us out due to the tornado warning. I also got a lithops the day before.\n\n8/19/21: touched the very top leaves, and they seemed thin. I'm not sure yet if they grow thin when they are new only, but since I saw some tiny new leaves that also looked droopy, watered the plant.",
    "description" : "Peperomia Graveolens is an ornamental succulent houseplant that is a beautiful addition to any in-home nursery such as the Peperomia Obtusifolia and the Peperomia Prostrata. They are hardy and attractive and although they look delicate, they are easy enough to care for even for a novice houseplant owner.\n\nThey originally hail from the dry regions of Ecuador but now live all over the tropical and subtropical South American regions. These plants are an excellent choice for filling a small spot on a shelf or desk as they are not large, and they don’t drop leaves or make a mess as some houseplants do. They are generally low maintenance so even if they are left on a desk at your office, they will most likely do well. They can be put in pots or used in terrariums and dish gardens with other succulents.\n\nThe nicknames of the Peperomia Graveolens are Ruby Glow and Radiator Plant. These plants do flower however they are prized for their ornamental foliage, not their flowers. The flowers are tiny and grow on long racemes. They are yellowish-white in color.",
    "createdAt" : ISODate("2021-06-27T07:12:49.219-05:00"),
    "updatedAt" : ISODate("2021-08-19T18:04:12.082-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("610a84ce4f936c427c83572f"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-07-28T07:17:48.641-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.gardeningknowhow.com/ornamental/cacti-succulents/lithop/growing-living-stone-plants.htm"
    ],
    "name" : "Lithops",
    "botanicalName" : "Lithops",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "imgURL" : "lithops.jpg",
    "notes" : "Picked up from Gethsemane Garden center the day they kicked us out for the tornado warning. Got the flapjack at the same time.\n\nLook at this link for the watering schedule, but the short version is water them very, very little.\nhttps://www.sublimesucculents.com/lithops-complete-care-guide/",
    "description" : "Lithops plants are often called “living stones” but they also look a bit like cloven hooves. These small, split succulents are native to the deserts of South Africa but are commonly sold in garden centers and nurseries. Lithops thrive in compacted, sandy soil with little water and blistering hot temperatures. While relatively easy to grow, a little information on lithops will help you learn how to grow living stone plants so that they thrive in your home.\n\nThere are numerous colorful names for plants in the Lithops genus. Pebble plants, mimicry plants, flowering stones, and of course, living stones are all descriptive monikers for a plant that has a unique form and growth habit. Lithops are small plants, rarely getting more than an inch (2.5 cm.) above the soil surface and usually with only two leaves. The thick, padded leaves resemble the cleft in an animal’s foot or just a pair of green- to grayish-brown stones clustered together. The plants have no true stem and much of the plant is underground. The resulting appearance has the double attribute of confusing grazing animals and conserving moisture. Lithops Succulent Adaptations Lithops grow in inhospitable areas with limited water and nutrients. Because the majority of the plant’s body is below ground, it has minimal foliar space to gather the sun’s energy. As a result, the plant has developed a unique way of enhancing solar collection by means of “windowpanes” on the surface of the leaf. These transparent areas are filled with calcium oxalate, which creates a reflective facet that increases light penetration.",
    "createdAt" : ISODate("2021-06-26T07:15:10.307-05:00"),
    "updatedAt" : ISODate("2021-08-04T07:17:48.669-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("610a896c4f936c427c835730"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-04T07:54:09.685-05:00"), 
        ISODate("2021-08-15T08:27:47.057-05:00")
    ],
    "sunlight" : [ 
        "low"
    ],
    "links" : [ 
        "https://www.ourhouseplants.com/plants/jewel-orchid"
    ],
    "name" : "Jewel orchid",
    "botanicalName" : "Ludisia discolor",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "imgURL" : "jewel-orchid.jpg",
    "notes" : "Picked up the day Gethsemane Garden Center sent everyone away because of the storm. Tried to put it under some other plant cover, under the brighter grow lights, and the new growth turned red. Have it on the shelf beside the grow lights, where low light filters over alongside the calathea.",
    "description" : "As terrestrial orchids, these plants grow in soil and if you choose to cultivate them they should be kept in a pot. Notably, there also exist a few variants of Ludisia. ‘Alba’, which is an albino, is pale, while ‘Nigrescens’ is a deep black. Though extremely beautiful, these plants are rarely grown outside Asia, and you’d probably need to either consult a specialty source or travel a long distance to find one. But if you are interested in growing Ludisia plants, note that their natural conditions are in tropical forests with extremely hot and humid conditions, so only attempt to grow them if you can mimic the amniotic warmth they need to succeed.\n\n\nThey flower annually, assuming they’ve been well-fed and kept, and the flowers last about a month or so before they die back. With their subtle, lovely colors, these plants make a great addition to any collection of tropical orchids, especially in a shade house.",
    "createdAt" : ISODate("2021-06-26T07:34:52.915-05:00"),
    "updatedAt" : ISODate("2021-08-15T08:27:47.399-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("610a8a0f4f936c427c835732"),
    "waterPref" : [],
    "lastWatered" : [ 
        ISODate("2021-08-15T08:27:30.902-05:00")
    ],
    "sunlight" : [],
    "links" : [],
    "name" : "Maranta",
    "botanicalName" : "Maranta",
    "createdAt" : ISODate("2021-08-04T07:37:35.217-05:00"),
    "updatedAt" : ISODate("2021-08-15T08:27:31.252-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("610d26829d13714958d5c348"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-05T11:57:39.225-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.thespruce.com/ghost-plant-succulent-care-and-growing-guide-4684220"
    ],
    "name" : "Ghost plant",
    "botanicalName" : "Graptopetalum paraguayense",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "Light potting mix or sandy soil",
    "hardinessZoneMin" : "7a",
    "hardinessZoneMax" : "11a",
    "lastPotted" : ISODate("2021-06-17T19:00:00.000-05:00"),
    "imgURL" : "ghost-plant.jpg",
    "notes" : "Picked up from Matt's urban garden a month or two ago (June or July). \n\n8/6/21: I've been watering it sparingly, but I wonder if I need to water it more often the bottom leaves have been slowly shriveling since I got it. ",
    "description" : "he ghost plant is that plant you see everywhere, but didn't know what it was called. With its pinkish-grey succulent leaves and trailing rosette form, ghost plants add a modern touch to container plantings and rock gardens. The ghost plant is a frequent subject of faux plant arrangements, but there's no reason to buy expensive fake plants when the live specimen is so easy to grow and propagate.\n\nLight\nGhost plants will be at their most handsome or full sun or bright dappled shade. Plants that don't receive enough light will be leggy, and may experience leaf drop. When growing as a houseplant, keep the ghost plant in a south or east-facing window.\n\nThe amount of light a ghost plant receives can affect its coloration, which can cause plants of the same species to look like different varieties. A shadier locale will result in the characteristic bluish-gray foliage, while a full day of sun causes shades of blush to appear on leaves.\n\nSoil\nLike the majority of succulents, the ghost plant needs good drainage to maintain a healthy root system. The more rainfall your area receives, the more drainage you must provide for ghost plants. If your garden has clay soil, use raised beds at least six inches tall and a planting mix with half grit, gravel, or sand, and half organic material like peat, coco coir, or commercial potting soil.\n\nWater\nIn the absence of natural rain, ghost plants only need occasional irrigation. Plants growing outdoors in full sun and summer temperatures will appreciate a weekly drink, while houseplants may only need watering every other week. Water indoor ghost plants at soil level to prevent water from stagnating in the rosettes.\n\nTemperature and Humidity\nGhost plants thrive in hot weather, but excess humidity is a problem in areas with poorly draining soil. Planting your ghost plants in containers or raised beds, as well as spacing them away from each other and away from other plants to increase air circulation will keep plants healthy.",
    "createdAt" : ISODate("2021-07-03T07:09:38.974-05:00"),
    "updatedAt" : ISODate("2021-08-06T11:57:39.584-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("610d2df09d13714958d5c349"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-10T07:26:37.490-05:00"), 
        ISODate("2021-08-23T07:50:29.190-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.succulentsandsunshine.com/types-of-succulents/ceropegia-woodii-variegata-string-of-hearts/"
    ],
    "name" : "String of Hearts Variegated",
    "botanicalName" : "Ceropegia woodii variegata",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "hardinessZoneMin" : "11a",
    "imgURL" : "string-of-hearts-variegated.jpg",
    "notes" : "Received from Etsy on 8/5/21. ",
    "description" : "“String of Hearts” is a trailing succulent with cream, pink, and green heart-shaped leaves. Its stem has a purple tone. Tiny tubers form on the base of the leaves, giving it the nickname “Rosary Vine.”",
    "createdAt" : ISODate("2021-08-06T07:41:20.603-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:50:29.511-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("610f2cabb516ed474c930f3d"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-10T07:45:05.400-05:00"), 
        ISODate("2021-08-24T08:00:58.066-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://plantcaretoday.com/opuntia-subulata.html"
    ],
    "name" : "Eve's Pin Cactus",
    "botanicalName" : "Austrocylindropuntia subulata",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "soilContent" : "well-draining soil",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9a",
    "hardinessZoneMax" : "11a",
    "lastPotted" : ISODate("2021-08-06T19:00:00.000-05:00"),
    "imgURL" : "eves-pin-cactus.jpg",
    "notes" : "Picked up from Smith's Farm at the farmer's market.",
    "description" : "Opuntia Subulata (op-UN-shee-a Sub-yoo-LAH-tuh) also known by the synonym Austrocylindropuntia subulata belongs to the Cactaceae family. It is among 300 or so species that fall into the genus Opuntia which is one of the largest genus’ in the family Cactaceae. The Opuntia genus is further divided into subcategories based on the appearance of the stems. Awl cactus belongs to the Austrocylindropuntia group\n\nIn the wild, Eve’s Pin can reach a height of 12’ feet and a width of 5’ feet. When kept as a houseplant or container plant, its size is naturally limited. This unusual and attractive cactus grows in a tree-like formation. These leaves are edible and are sold as vegetables in many South American locations and Mexican markets in the United States. \n\nAs with most cactus, it’s best to water thoroughly and then allow the soil to dry out completely before watering again. Water well throughout the growing season making sure the plant has plenty of good drainage so it is never standing in water. Water extremely sparingly during the late fall and winter months. In the wintertime, it’s best to keep Eve’s Needle dry. Furthermore, during the growing season, refrain from watering on very humid or cloudy days.",
    "createdAt" : ISODate("2021-08-07T20:00:27.815-05:00"),
    "updatedAt" : ISODate("2021-08-24T08:00:58.382-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("610f36a4b516ed474c930f3e"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-09T07:58:42.890-05:00"), 
        ISODate("2021-08-14T21:50:38.710-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://plantlust.com/plants/20233/mesembryanthemum-cordifolium-variegatum/"
    ],
    "name" : "Heartleaf iceplant",
    "botanicalName" : "Mesembryanthemum cordifolium",
    "location" : "outdoor",
    "locationPreferred" : "outdoor",
    "plantType" : "succulent",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "11a",
    "imgURL" : "heartleaf-iceplant.jpg",
    "notes" : "Picked up from Smiths Farm at the Green City's farmers market.",
    "description" : "A dainty little sun rose with creamy edged fleshy leaves and rose colored flowers all summer, it adds a different texture to drought tolerant mixed planters. Drought-tolerant. Can handle a lot of shade.",
    "createdAt" : ISODate("2021-08-07T20:43:00.685-05:00"),
    "updatedAt" : ISODate("2021-08-14T21:50:38.724-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("611878ffa4a79338e0ae103a"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-15T09:42:10.133-05:00"), 
        ISODate("2021-08-24T07:46:37.155-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://www.bybrittanygoldwyn.com/raven-zz-plant-care/"
    ],
    "name" : "ZZ Plant (Raven)",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "soilContent" : "perlite, orchid bark, succulent soil with a little bit of regular potting soil",
    "lastPotted" : ISODate("2021-08-13T19:00:00.000-05:00"),
    "imgURL" : "zz-plant-raven.jpg",
    "notes" : "Picked up from Home Depot on 8/14/21",
    "description" : "Black ZZ plant, same care.",
    "createdAt" : ISODate("2021-08-14T21:16:31.696-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:46:37.473-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("61187b9fa4a79338e0ae103b"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-12T21:31:36.430-05:00"), 
        ISODate("2021-08-23T07:50:09.490-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.thespruce.com/growing-hindu-rope-plants-5089215"
    ],
    "name" : "Indian Rope Hoya",
    "botanicalName" : "Hoya carnosa 'Compacta'",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "cycle" : "perennial",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "12",
    "imgURL" : "indian-rope-hoya.jpg",
    "notes" : "8/25/21: noticed a bunch of the bottom leaves were all yellow. watered it last night in the hopes that it was just too dry, as the soil was bone dry. \n\nGot from Etsy on 8/11/21.\n\nReally love to have bright indirect light. If the light is too low, the leaves will start yellowing and dropping. Their leaves will crinkle more and pucker if they are too dry and need to be watered. \n\nhttps://www.youtube.com/watch?v=RNnSGeMXYxE\nIn the video, she waters it once a month. \n",
    "description" : "Semi-succulent. Likes bright light.\n\nhttps://www.youtube.com/watch?v=RNnSGeMXYxE",
    "createdAt" : ISODate("2021-08-14T21:27:43.280-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:50:09.508-05:00"),
    "__v" : 0,
    "lastPotted" : ISODate("2021-08-14T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("6119772800d18023482fe43a"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-20T07:45:13.825-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://plantophiles.com/plant-care/hoya-krimson-queen/"
    ],
    "name" : "Hoya Krimson Queen",
    "botanicalName" : "Hoya carnosa cv. Krimson Queen",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "soilContent" : "peat moss, vermiculite, perlite, fibrous material",
    "imgURL" : "hoya-krimson-queen.jpg",
    "notes" : "Picked up from Gethsemane Garden center on 8/15/21.",
    "description" : "Hoya Krimson Queen or Hoya Tricolor (also know as Hoya Variegata) is a variegated variant of the Hoya carnosa. Its leaves are either pink or white to creamy white around the leaf edges. Cobia patented this Hoya variant in the 1950’s as a Hoya Tricolor. It was later sold as Hoya Krimson Queen and this is the name it goes by today.\n\nIf you haven’t caught the Hoya bug yet, the Hoya Krimson Queen is going to change that for good. Hoya Krimson Queen care needs bright filtered light or indirect light in an east-facing window. As a potting soil use a chunky mix using perlite and pumice as well as peat moss. Keep temperatures between 61°F (16°C ) and 95°F (35°C) and water 1-3 times a week once the soil becomes dry to the touch.  Keep humidity at 70-80%, for the best results. ",
    "createdAt" : ISODate("2021-08-15T15:20:56.447-05:00"),
    "updatedAt" : ISODate("2021-08-21T07:45:13.869-05:00"),
    "__v" : 0,
    "lastPotted" : ISODate("2021-08-14T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("611983b600d18023482fe43b"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-17T08:18:25.294-05:00")
    ],
    "sunlight" : [ 
        "bright"
    ],
    "links" : [ 
        "https://plantophiles.com/plant-care/hoya-pubicalyx/"
    ],
    "name" : "Hoya Pubicalyx",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "soilContent" : "same as Hoya Krimson Queen",
    "imgURL" : "hoya-pubicalyx.jpg",
    "notes" : "Picked up from Gethsemane Garden Center on 8/15/21, same time as the Krimson Queen.\n\n8/17/21: I hung it in the window on 8/15 in the evening. Today I picked off four very small yellow leaves. Watered it.",
    "description" : "This plant is a flowering climber that belongs to the Apocynaceae family. It is a succulent vine native to the Philippines with beautiful star-shaped fragrant flowers. The Hoya Pubicalyx has been cultivated for years; many gardeners have years old Pubicalyx plants still doing great.\n\nThe flowers have a sweet scent that is very noticeable at night. Hoya Pubicalyx produces a natural plant pigment “Anthocyanin” to protect young or soft leaves from intense light.\n\nThis pigment is also found in old or mature leaves, which protects them from cold and intense light. Semi-succulent.",
    "createdAt" : ISODate("2021-08-15T16:14:30.843-05:00"),
    "updatedAt" : ISODate("2021-08-17T08:19:20.699-05:00"),
    "__v" : 0,
    "lastPotted" : ISODate("2021-08-14T19:00:00.000-05:00")
},
{
    "_id" : ObjectId("6120fe886b72ea43b818cb88"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.thespruce.com/growing-hindu-rope-plants-5089215"
    ],
    "name" : "Indian Rope Hoya (Variegated)",
    "botanicalName" : "Hoya carnosa 'Compacta'",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "epiphyte",
    "soilContent" : "succulent potting soil with perlite and a little vermiculite",
    "hardinessZoneMin" : "9",
    "hardinessZoneMax" : "12",
    "lastPotted" : ISODate("2021-08-19T19:00:00.000-05:00"),
    "imgURL" : "indian-rope-hoya-variegated.jpg",
    "notes" : "Picked up from Gethsemane garden center on 8/20/21. Pulled some dried crinkled leaves from the bottom. There also appears to be a light-colored leaf at the very base of the longest rope. Not sure if it will stay or curl up. Potted in a terracotta pot, as the roots are not very extensive, and I want to make sure that with the new succulent potting soil with perlite and a little vermiculite it doesn't stay soggy.",
    "description" : "The Hindu rope plant (Hoya carnosa 'Compacta' or 'Krinkle Kurl') is a curly leaf version of the porcelain flower or wax plant (Hoya carnosa). This semi-succulent, perennial, vine-like species is known for its lush, waxy foliage and striking blooms. Native to India, they are most commonly kept as houseplants in North America and are regarded as being easy-to-care-for, slow-growing, long-lived, and great for novice plant lovers.",
    "createdAt" : ISODate("2021-08-21T08:24:24.539-05:00"),
    "updatedAt" : ISODate("2021-08-21T08:24:24.539-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("612101206b72ea43b818cb89"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-24T07:34:04.616-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://worldofsucculents.com/manfreda-maculosa-texas-tuberose/"
    ],
    "name" : "Spice lily",
    "botanicalName" : "Agave maculata",
    "location" : "indoor",
    "locationPreferred" : "outdoor",
    "plantType" : "succulent",
    "soilContent" : "well-drained, dry to average soil",
    "cycle" : "perennial",
    "hardinessZoneMin" : "7a",
    "hardinessZoneMax" : "9b",
    "lastPotted" : ISODate("2021-08-14T19:00:00.000-05:00"),
    "imgURL" : "spice-lily.jpg",
    "notes" : "Picked up from the Bloom shop when with Angela and Nicole on 8/13/21.\n\n8/24/21: some of the tips were brown and crinkling. Need to water more often.",
    "description" : "The Texas tuberose is acaulescent, meaning the stem is extremely short. The fleshy silver-green leaves are covered with purple spots and in low light situations may lay flat on the ground in a drought, the leaves may wither, leaving little or nothing visible above ground. \n\nAlso known as manfreda maculosa.\n\nIs a tender perennial or \"temperennial\" succulent plant that grows best in full sun. Plant in well-drained, dry to average soil in containers just slightly wider than the width of the rosette or plant directly in the ground. Has a large root system, so ideally in a container at least 12 inches deep. Slow grower. During the winter months, plants should be allowed to dry and stored in cold room at 48 degrees F. Plants should only be watered enough to keep the foliage from shriveling.",
    "createdAt" : ISODate("2021-08-21T08:35:28.089-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:56:30.186-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("612103cb6b72ea43b818cb8a"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-17T08:58:11.082-05:00"), 
        ISODate("2021-08-19T08:58:14.158-05:00"), 
        ISODate("2021-08-23T07:48:57.193-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [ 
        "https://www.homeandgardenia.com/how-to-care-for-cuphea-hyssopifolia-mexican-heather/"
    ],
    "name" : "Mexican Heather",
    "botanicalName" : "Cuphea hyssopifolia",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "houseplant",
    "hardinessZoneMin" : "9a",
    "hardinessZoneMax" : "11a",
    "imgURL" : "mexican-heather.jpg",
    "notes" : "Picked up from Sunrise Topiary at the Edgewater Farmer's market in early summer 2021. Absolutely have to stay on top of watering, every two or three days. A lot of leaves will drop off if left for even one extra day. It is also in a terracotta pot.",
    "description" : "The Mexican Heather plants have beautiful lavenders like flowers and dark green leaves. The plants can reach up to 3 feet in height and can cover 2.5 feet wide. The stem grows a large number of branches. These branches surround the stem and are covered with a large number of leaves and flowers during the bloom season.\n\nThe Mexican Heather plants grow very well in the Southern Parts of the United States, as well as other areas where the temperatures are hot. They do not like the cold and need protection if they are planted in the colder areas, you can keep them indoors to protect them from cold and frost. They are evergreen and retain their leaves all year long, but in cold areas, they sometimes shed a few leaves but still retain a large number of leaves and maintain their green appearance.\n\nThe Mexican Heather plants are easy to grow in their natural environments and where the temperatures are moderately hot and they can receive an abundance of sunlight. But in the cold region, they need a little extra care, you must keep them indoors during the winter in cold areas to protect them from the frost and extreme cold.\n\nThey grow very well in many different soils but they show faster growth in a nutrient-rich slightly sandy and well-draining soil. If the soil you have is not good or lacks the required nutrients, you can add fertilizers to compensate for this. In indoor environments, keep them in a bright place so they can receive enough light.\n\nThe Mexican Heather plants require a consistent water supply. They are small plants and also have small roots that cannot obtain water from the deep soil if they are grown in the ground, that is why consistent and frequent watering will help them grow properly. Another reason for consistent and frequent watering is that they are mostly grown in the hot and dry areas.\n\nKeep watering them once every second day, unless the winter arrives or the plant reaches a height of almost 1 foot. In winter, increase the amount of water per watering but decrease the frequency of watering to once every 5th or 6th day.",
    "createdAt" : ISODate("2021-07-10T08:46:51.319-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:48:57.221-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("612108216b72ea43b818cb8b"),
    "waterPref" : [ 
        "moderate"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-17T09:26:18.649-05:00"), 
        ISODate("2021-08-19T09:26:26.077-05:00"), 
        ISODate("2021-08-23T07:48:46.988-05:00")
    ],
    "sunlight" : [ 
        "full sun to part shade"
    ],
    "links" : [],
    "name" : "Lavender (Feathery)",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "herb",
    "imgURL" : "lavender-feathered.jpg",
    "notes" : "Picked up from Sunrise Topiary at the Edgewater Farmer's market on the same day I picked up the Mexican Heather. Has very light feathery leaves. Need to water just as often as the Mexican Heather, every two or three days or the leaves will dry out and die.",
    "description" : "",
    "createdAt" : ISODate("2021-07-10T09:05:21.936-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:48:47.005-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("6124e98c21cc2755e0dedd0e"),
    "waterPref" : [ 
        "dry"
    ],
    "lastWatered" : [ 
        ISODate("2021-08-17T07:46:09.270-05:00"), 
        ISODate("2021-08-24T07:46:19.933-05:00")
    ],
    "sunlight" : [],
    "links" : [],
    "name" : "Jade Tiger cuttings",
    "location" : "indoor",
    "locationPreferred" : "indoor",
    "plantType" : "succulent",
    "notes" : "This is being used to track watering and growth for the cuttings. Will find a way to wrap these into the jade tiger page.\n\n8/24/21: watered.\n\n8/15/21: watered small plantlings. \n\n8/14/21: repotted into a terracotta pot, and since some of the leaves came off, put them in another terracotta pot. Original pot still in full sun on the windowsill, the pot of plantlings is under the grow lights.",
    "description" : "",
    "createdAt" : ISODate("2021-08-24T07:43:56.975-05:00"),
    "updatedAt" : ISODate("2021-08-24T07:46:19.947-05:00"),
    "__v" : 0,
    "imgURL" : "crassula-tiger-jade.jpg",
    "lastPotted" : ISODate("2021-08-13T19:00:00.000-05:00")
}
  //  {"name":"", "botanicalName":"", "status":"", "location":"", "locationSec":"", "locationPreferred":"", "waterPref":"", "lastWatered":"", "nextWater":"", "waterRate":"", "sunlight":[], "plantType":"", "trouble":"", "needsCare":"", "humidity":"", "heightLow":"", "heightHigh":"", "tempLow":"", "tempHigh":"", "hardiness":"", "tolerance":"", "pH":"", "soilContent":"", "cycle":"", "hardinessZoneMin":"", "hardinessZoneMax": "", "lastPotted":"", "imgURL":"", "links":[], "propogating":"", "watching":"", "notes":"", "createdAt":"", "updatedAt":""
  //  },

  ];
  
  db.Plant.deleteMany({})
  .then(() => db.Plant.collection.insertMany(plantsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
