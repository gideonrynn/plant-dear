const db = require("../models");
const router = require("express").Router();

// returns all plant entries in  db
router.get('/plants', (req, res) => {
    
    db.Plant.find({
      // include: { model: db.Task, as: 'Task' }
    })
      .then(plants => res.json(plants))

});

router.get('/plantscurrent', (req, res) => {
    
  db.Plant.find({$or:[{ status: 'active'}, {status: '' }, {status: null }]})
    .then(plantscurrent => res.json(plantscurrent))

});

// return specific plant by row id
router.get('/plantsbyid/:id', (req, res) => {
    
  console.log(req.params.id)
  let id = req.params.id
  db.Plant.findById(id)
    .then(plantsbyid => res.json(plantsbyid))

});

// return specific plant by a specific row status
router.get('/plantsinprogress', (req, res) => {
    
  db.Plant.find({$or:[{ status: 'in progress'}, {trouble: 'Y' }]})
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
  console.log("id",id)
  console.log("req body", req.body)
  db.Plant.updateOne({_id: id}, req.body)
  .then(updated => {
    res.json(updated);
  })
  .catch(err => {
    res.status(404).json(err);
  });
})

//use id to update entry in db
router.post("/plants/watering", (req, res) => {
  // console.log(req.params.id)
  
  // let id = req.params.id
  // console.log("id",id)
  console.log(req.body);
  db.Plant.updateMany(
      {_id: 
        {
          $in: req.body.ids
        }
      }, 
        {
          $addToSet: { "lastWatered": req.body.lastWatered}
        }
    )
  .then(updated => {
    res.json(updated);
  })
  .catch(err => {
    res.status(404).json(err);
  });
})

// original
// router.put("/plants/watering/:id", (req, res) => {
//   console.log(req.params.id)
  
//   let id = req.params.id
//   console.log("id",id)
//   console.log("req body", req.body)
//   db.Plant.updateOne({_id: id}, {$addToSet: req.body})
//   .then(updated => {
//     res.json(updated);
//   })
//   .catch(err => {
//     res.status(404).json(err);
//   });
// })

router.delete("/plants/delete/:id", (req, res) => {
  let id = req.params.id
  console.log(id)
  console.log(req.body)
  db.Plant.deleteOne({_id: id})
  .then(deleted => {
    res.json(deleted);
  })
  .catch(err => {
    res.status(404).json(err);
  });
})


module.exports = router;