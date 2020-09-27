const db = require("../models");
const router = require("express").Router();

// returns all plant entries in  db
router.get('/plants', (req, res) => {
    
    db.Plant.findAll()
      .then(plants => res.json(plants))

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


module.exports = router;