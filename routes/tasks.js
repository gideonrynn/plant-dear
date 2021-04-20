const db = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

router.get('/all', (req, res) => {
    
    db.Task.findAll()
      .then(tasks => res.json(tasks))

});


router.get('/onetask', (req, res) => {
    
  db.Task.findOne({
    where: {id: 5},
    include: { model: db.Plant, as: 'Plant' }
  })
    .then(tasks => res.json(tasks))
    .catch(err => {console.log(err)})

});

module.exports = router;