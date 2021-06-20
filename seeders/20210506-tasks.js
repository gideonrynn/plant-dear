let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/plantdear", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


let taskSeed = [
  {
    "taskName":"Bring plants that are not cold hardy inside and move other plants to wall", "taskDetail":"Check plants that are outdoors. Any of them that are not doing well and are specifically on the railing should be moved away from the ledge. Thyme should be ok. Take wire tables and move to back, put lettuce and other greens on there. Leave this task open until they are put back outside.", "taskStatus":"open", "dateDue":"2021-04-19", "taskNotes":"brought in Gerbera, will put the others up against the wall but make sure to check that snow is not coming down that far back", "createdAt":"2021-04-19", "updatedAt":"2021-04-19"},
    {"taskName":"Check all plants for fungus gnats", "taskDetail":"Saw a fungus gnat recently. Check all the plants that were recently watered and see if something has got started in there", "taskStatus":"not started", "dateDue":"2021-04-19", "taskNotes":"", "createdAt":"2021-04-19", "updatedAt":"2021-04-19"},
    {"taskName":"Add azalea to plants to buy", "taskDetail":"Thinking about a sensory garden. This is a bush and it would be cool to have the super vibrant purple color in my container garden", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-04-19", "updatedAt":"2021-04-19"},
    {"taskName":"Repot red aglaonemas", "taskDetail":"Put it in one of the bigger pots. Picked up 3 of the taller ones from Gethsemane", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-04-19", "updatedAt":"2021-04-19"},
    {"taskName":"Trim corn plant", "taskDetail":"Watch for spots on it as well", "taskStatus":"not started", "dateDue":"2021-04-22", "taskNotes":"", "createdAt":"2021-04-19", "updatedAt":"2021-04-19"},
    {"taskName":"Figure out what to do with pilea", "taskDetail":"It is leaning and I am wondering if I can just chop off the leafy part and plant it and get a whole new plant out of it, and maybe trim down the remaining stalk so the baby plant can grow in place", "taskStatus":"not started", "dateDue":"2021-04-22", "taskNotes":"", "createdAt":"2021-04-19", "updatedAt":"2021-04-19"},
    {"taskName":"Add lemon balm plant and decide what to do with it outside tomorrow", "taskDetail":"The snow might weight down the leaves or it may become too much so decide what to do with that. https://harvesttotable.com/how_to_grow_lemon_balm/", "taskStatus":"not started", "dateDue":"2021-04-20", "taskNotes":"", "createdAt":"2021-04-19", "updatedAt":"2021-04-19"},
    {"taskName":"mix diatomaceous earth intosoil", "taskDetail":"calathea and maranta", "taskStatus":"not started", "dateDue":"2021-06-20", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"succulent soil mix for crassulas", "taskDetail":"Crassula David, once pumice received", "taskStatus":"not started", "dateDue":"2021-06-22", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"Search bigger inner pot for pepperomiodes", "taskDetail":"I want this one to grow huge and I need to fertilize it as well", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"pot small string of dolphins with larger one and pick better spot for it", "taskDetail":"pot small string of dolphins with larger one and pick better spot for it", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},
    {"taskName":"", "taskDetail":"", "taskStatus":"not started", "dateDue":"", "taskNotes":"", "createdAt":"2021-06-20", "updatedAt":"2021-06-20"},

  ];
  
  db.Task.deleteMany({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

