const db = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

// returns all plant entries in  db
router.get('/plants', (req, res) => {
    
    db.Plant.findAll()
      .then(plants => res.json(plants))

});

router.get('/plantscurrent', (req, res) => {
    
  db.Plant.findAll({
        where: {
          status: {
            [Op.ne]: 'inactive'
          }
        },

      })
    .then(plantscurrent => res.json(plantscurrent))

});

// return specific plant by row id
router.get('/plantsbyid/:id', (req, res) => {
    
  console.log(req.params.id)
  let id = req.params.id
  db.Plant.findOne({
    where: {
      id: id
    }
  })
    .then(plantsbyid => res.json(plantsbyid))

});

// return specific plant by a spectific row status
router.get('/plantsinprogress', (req, res) => {
    
  db.Plant.findAll({
    where: {
      [Op.or]: [
        { status: 'in progress'},
        { trouble: 'Y' }
      ]
    }
  })
    .then(plantsinprogress => res.json(plantsinprogress))

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

//use id to update entry in db
router.put("/plants/:id", (req, res) => {
  // console.log(req.params.id)
  
  let id = req.params.id
  console.log(id)
  console.log(req.body)
  db.Plant.update(req.body,
    {where: {id: id}})
      .then(update => {
        res.json(update);
      })
})

router.delete("/plants/delete/:id", (req, res) => {
  let id = req.params.id
  console.log(id)
  console.log(req.body)
  db.Plant.destroy({
    where: {id: id}
  })
}

)


module.exports = router;