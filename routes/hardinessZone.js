
const db = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

router.get('/data', (req, res) => {
    
    db.HardinessZone.findAll()
        .then(hardinesszones => res.json(hardinesszones))
      
});

module.exports = router;