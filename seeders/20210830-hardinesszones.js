let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/plantdear", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let hardinessZoneSeed = [
  {
    "_id" : ObjectId("60975a30cd5c3d33d8272706"),
    "zone" : "1a",
    "rangeLow" : "-60.0",
    "rangeHigh" : "-55.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272707"),
    "zone" : "1b",
    "rangeLow" : "-55.0",
    "rangeHigh" : "-50.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272708"),
    "zone" : "2a",
    "rangeLow" : "-50.0",
    "rangeHigh" : "-45.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272709"),
    "zone" : "2b",
    "rangeLow" : "-45.0",
    "rangeHigh" : "-40.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827270a"),
    "zone" : "3a",
    "rangeLow" : "-40.0",
    "rangeHigh" : "-35.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827270b"),
    "zone" : "3b",
    "rangeLow" : "-35.0",
    "rangeHigh" : "-30.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827270c"),
    "zone" : "4a",
    "rangeLow" : "-30.0",
    "rangeHigh" : "-25.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827270d"),
    "zone" : "4b",
    "rangeLow" : "-25.0",
    "rangeHigh" : "-20.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827270e"),
    "zone" : "5a",
    "rangeLow" : "-20.0",
    "rangeHigh" : "-15.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827270f"),
    "zone" : "5b",
    "rangeLow" : "-15.0",
    "rangeHigh" : "-10.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272710"),
    "zone" : "6a",
    "rangeLow" : "-10.0",
    "rangeHigh" : "-5.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272711"),
    "zone" : "6b",
    "rangeLow" : "-5.0",
    "rangeHigh" : "0.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272712"),
    "zone" : "7a",
    "rangeLow" : "0.0",
    "rangeHigh" : "5.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272713"),
    "zone" : "7b",
    "rangeLow" : "5.0",
    "rangeHigh" : "10.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272714"),
    "zone" : "8a",
    "rangeLow" : "10.0",
    "rangeHigh" : "15.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272715"),
    "zone" : "8b",
    "rangeLow" : "15.0",
    "rangeHigh" : "20.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272716"),
    "zone" : "9a",
    "rangeLow" : "20.0",
    "rangeHigh" : "25.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272717"),
    "zone" : "9b",
    "rangeLow" : "25.0",
    "rangeHigh" : "30.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272718"),
    "zone" : "10a",
    "rangeLow" : "30.0",
    "rangeHigh" : "35.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d8272719"),
    "zone" : "10b",
    "rangeLow" : "35.0",
    "rangeHigh" : "40.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827271a"),
    "zone" : "11a",
    "rangeLow" : "40.0",
    "rangeHigh" : "45.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827271b"),
    "zone" : "11b",
    "rangeLow" : "45.0",
    "rangeHigh" : "50.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827271c"),
    "zone" : "12a",
    "rangeLow" : "50.0",
    "rangeHigh" : "55.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827271d"),
    "zone" : "12b",
    "rangeLow" : "55.0",
    "rangeHigh" : "60.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827271e"),
    "zone" : "13a",
    "rangeLow" : "60.0",
    "rangeHigh" : "65.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
},
{
    "_id" : ObjectId("60975a30cd5c3d33d827271f"),
    "zone" : "13b",
    "rangeLow" : "65.0",
    "rangeHigh" : "70.0",
    "createdAt" : "2021-04-04",
    "updatedAt" : "2021-04-04"
}

];

db.HardinessZone.deleteMany({})
  .then(() => db.HardinessZone.collection.insertMany(hardinessZoneSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
