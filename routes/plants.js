const db = require("../models");
const router = require("express").Router();

// returns all plant entries in the db
router.get('/plants', (req, res) => {
    
    db.Plant.find()
      .then(plants => res.json(plants))

});

module.exports = router;