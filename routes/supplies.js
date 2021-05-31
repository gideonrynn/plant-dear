const db = require("../models");
const router = require("express").Router();

router.get('/all', (req, res) => {
    
    db.Supplies.find()
      .then(tasks => res.json(tasks))

});


// router.get('/onetask', (req, res) => {
    
//   db.Task.findOne({
//     where: {id: 5},
//     include: { model: db.Plant, as: 'Plant' }
//   })
//     .then(tasks => res.json(tasks))
//     .catch(err => {console.log(err)})

// });

router.post("/supplies", ({body}, res) => {

  db.Supplies.create(body)
    .then(newitem => {
      res.json(newtask);
    })
    .catch(err => {
      res.status(404).json(err);
    });

});


module.exports = router;