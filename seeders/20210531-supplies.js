let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/plantdear", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


let suppliesSeed = [
  {"item":"pure worm castings", "quantity":"1", "dimensions":"", "weight":"4.5 lb", "description":"fertilizer", "order":"N", "cost":"10.99", "links":["https://www.amazon.com/dp/B000ZOEOEY/ref=cm_sw_em_r_mt_dp_GKZN3T3CRR3CBK6PF0DN?_encoding=UTF8&psc=1 "], "notes":"can add directly to soil, or dissolve in water and water plants with it. last bought at gethsemane garden center","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"epiphyte's delight", "quantity":"1", "dimensions":"", "weight":"8oz", "description":"airplant fertilizer", "order":"N", "cost":"6.99", "links":["https://www.rainforestflora.com/store/accessories/H10060/Epiphytes-Delight-Fertilizer/","https://www.easternleaf.com/Epiphytes-Delight-p/122530-01.htm"], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"mosquito bit", "quantity":"", "dimensions":"", "weight":"", "description":"", "order":"N", "cost":"", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"plant tray", "quantity":"", "dimensions":"", "weight":"", "description":"", "order":"N", "cost":"", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"pot", "quantity":"", "dimensions":"", "weight":"", "description":"", "order":"N", "cost":"", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"jiffy seed starting greenhouse kit", "quantity":"1", "dimensions":"", "weight":"", "description":"has 26 peat pellets", "order":"N", "cost":"15", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"safer brand houseplant sticky stakes", "quantity":"2", "dimensions":"", "weight":"", "description":"", "order":"N", "cost":"", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"inner plant pots", "quantity":"", "dimensions":"", "weight":"", "description":"", "order":"N", "cost":"", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"pot tall black", "quantity":"3", "dimensions":"6-9 inch", "weight":"", "description":"", "order":"N", "cost":"2.50", "links":["",""], "notes":"picked up from gethsemane in the greenhouse","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  { "item":"pot", "quantity":"", "dimensions":"6.5 x 4", "weight":"", "description":"", "order":"", "cost":"1.99", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},
  // { "item":"", "quantity":"", "dimensions":"", "weight":"", "description":"", "order":"", "cost":"", "links":["",""], "notes":"","createdAt":"2021-05-31", "updatedAt":"2021-05-31"},

  ];
  
  db.Supplies.deleteMany({})
  .then(() => db.Supplies.collection.insertMany(suppliesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

