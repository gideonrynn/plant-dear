const db = require("../models");
const router = require("express").Router();

// returns all plant entries in  db
router.get('/plants', (req, res) => {
    
    db.Plant.findAll()
      .then(plants => res.json(plants))

});

// use body received from browser to create new plant entry in db
router.post("/plants", ({body}, res) => {

  db.Plant.create(body)
    .then(newplant => {
      res.json(newplant);
    })
    .catch(err => {
      res.status(404).json(err);
    });

});


module.exports = router;