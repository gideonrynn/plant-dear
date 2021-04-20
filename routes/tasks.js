const db = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

router.get('/all', (req, res) => {
    
    db.Task.findAll()
      .then(tasks => res.json(tasks))

});


module.exports = router;