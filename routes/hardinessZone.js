
const db = require("../models");
const router = require("express").Router();

router.get('/data', (req, res) => {
    
    db.HardinessZone.find({})
        .then(hardinesszones => res.json(hardinesszones))
      
});

module.exports = router;