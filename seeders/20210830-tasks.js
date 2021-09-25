let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/plantdear", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


let taskSeed = [
  {
    "_id" : ObjectId("60984447c2d36c65f49e8a21"),
    "taskName" : "Bring plants that are not cold hardy inside and move other plants to wall",
    "taskDetail" : "Check plants that are outdoors. Any of them that are not doing well and are specifically on the railing should be moved away from the ledge. Thyme should be ok. Take wire tables and move to back, put lettuce and other greens on there. Leave this task open until they are put back outside.",
    "taskStatus" : "open",
    "dateDue" : "2021-04-19",
    "taskNotes" : "brought in Gerbera, will put the others up against the wall but make sure to check that snow is not coming down that far back",
    "createdAt" : "2021-04-19",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("60984447c2d36c65f49e8a22"),
    "taskName" : "Check all plants for fungus gnats",
    "taskDetail" : "Saw a fungus gnat recently. Check all the plants that were recently watered and see if something has got started in there",
    "taskStatus" : "not started",
    "dateDue" : "2021-04-19",
    "taskNotes" : "",
    "createdAt" : "2021-04-19",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("60984447c2d36c65f49e8a23"),
    "taskName" : "Add azalea to plants to buy",
    "taskDetail" : "Thinking about a sensory garden. This is a bush and it would be cool to have the super vibrant purple color in my container garden",
    "taskStatus" : "not started",
    "dateDue" : "",
    "taskNotes" : "",
    "createdAt" : "2021-04-19",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("60984447c2d36c65f49e8a24"),
    "taskName" : "Repot red aglaonemas",
    "taskDetail" : "Put it in one of the bigger pots. Picked up 3 of the taller ones from Gethsemane",
    "taskStatus" : "not started",
    "dateDue" : "",
    "taskNotes" : "",
    "createdAt" : "2021-04-19",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("60984447c2d36c65f49e8a25"),
    "taskName" : "Trim corn plant",
    "taskDetail" : "Watch for spots on it as well",
    "taskStatus" : "not started",
    "dateDue" : "2021-04-22",
    "taskNotes" : "",
    "createdAt" : "2021-04-19",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("60984447c2d36c65f49e8a26"),
    "taskName" : "Figure out what to do with pilea",
    "taskDetail" : "It is leaning and I am wondering if I can just chop off the leafy part and plant it and get a whole new plant out of it, and maybe trim down the remaining stalk so the baby plant can grow in place",
    "taskStatus" : "not started",
    "dateDue" : "2021-04-22",
    "taskNotes" : "",
    "createdAt" : "2021-04-19",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("60984447c2d36c65f49e8a27"),
    "taskName" : "Add lemon balm plant and decide what to do with it outside tomorrow",
    "taskDetail" : "The snow might weight down the leaves or it may become too much so decide what to do with that. https://harvesttotable.com/how_to_grow_lemon_balm/",
    "taskStatus" : "not started",
    "dateDue" : "2021-04-20",
    "taskNotes" : "",
    "createdAt" : "2021-04-19",
    "updatedAt" : "2021-04-19"
},
{
    "_id" : ObjectId("60cf4d61d05b5a49948a9594"),
    "taskName" : "Move azaleas outside",
    "taskDetail" : "Move azaleas outside",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-07-04T19:00:00.000-05:00"),
    "taskStatus" : "",
    "__v" : 0
},
{
    "_id" : ObjectId("60cf4db97dd9e65d78e83bf8"),
    "taskName" : "Put string of dolphins in another location",
    "taskDetail" : "String of dolphins is growing, but the leaves are not plump. Want to make sure it's getting the right light",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-07-04T19:00:00.000-05:00"),
    "taskStatus" : "",
    "__v" : 0
},
{
    "_id" : ObjectId("60cf4ee0aad8212850048b40"),
    "taskName" : "Research whether or not monstera needs bigger pot",
    "taskDetail" : "The roots are starting to come out of the bottom of the pot. Need to see if it likes a snug environment or needs more space to grow.",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-06-24T19:00:00.000-05:00"),
    "taskStatus" : "",
    "__v" : 0
},
{
    "_id" : ObjectId("60cf5069aad8212850048b41"),
    "taskName" : "Research how to promote growth for sensitive plant",
    "taskDetail" : "Didn't expect it to still be alive! But I would like to get a better idea of how to take care of it since there does seem to be a dormant period.",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-06-24T19:00:00.000-05:00"),
    "taskStatus" : "",
    "__v" : 0
},
{
    "_id" : ObjectId("60cf514bf7ff0c298cff8e11"),
    "taskName" : "Look up what to do with old leaves and old plants",
    "taskDetail" : "Look up what to do with old leaves and old plants",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-07-08T19:00:00.000-05:00"),
    "taskStatus" : "",
    "createdAt" : ISODate("2021-06-20T09:31:39.392-05:00"),
    "updatedAt" : ISODate("2021-06-20T09:31:39.392-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60cf520af7ff0c298cff8e12"),
    "taskName" : "Display perennials and make sure they are in a state to survive winter",
    "taskDetail" : "As I'm trying to build a perennial garden and maximize the number of plants I don't have to bring inside, I want to know what I can set up for success right now",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-06-29T19:00:00.000-05:00"),
    "taskStatus" : "",
    "createdAt" : ISODate("2021-06-20T09:34:50.684-05:00"),
    "updatedAt" : ISODate("2021-06-20T09:34:50.684-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60cf54cdacae684c8411459c"),
    "taskName" : "Figure out where to put all the dormant orchids",
    "taskDetail" : "Want to make sure I can take care of them until they will bloom again next year",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-07-29T19:00:00.000-05:00"),
    "taskStatus" : "",
    "createdAt" : ISODate("2021-06-20T09:46:37.561-05:00"),
    "updatedAt" : ISODate("2021-06-20T09:46:37.561-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60f4b87107f0b45e2004186f"),
    "taskName" : "Plant monstera in tall deep pot",
    "taskDetail" : "It is growing quickly. Keeping it in a short pot puts it at risk of tipping over.",
    "taskNotes" : "",
    "dateDue" : ISODate("2021-07-22T19:00:00.000-05:00"),
    "taskStatus" : "",
    "createdAt" : ISODate("2021-07-18T18:25:37.298-05:00"),
    "updatedAt" : ISODate("2021-07-18T18:25:37.298-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("60fd6ddd6d418d56c8a07585"),
    "taskName" : "Catalogue types and sizes of pots",
    "taskDetail" : "As plants grow, I need to be able to put them in pots that are only one or two sizes up, but it's hard to remember how many I have, and where",
    "taskNotes" : "",
    "dateDue" : null,
    "taskStatus" : "",
    "createdAt" : ISODate("2021-07-25T08:57:49.656-05:00"),
    "updatedAt" : ISODate("2021-07-25T08:57:49.656-05:00"),
    "__v" : 0
},
{
    "_id" : ObjectId("61004153c313cd433415c7b0"),
    "taskName" : "Health check Rue",
    "taskDetail" : "Rue leaves have been turning brown and crispy.",
    "taskNotes" : "According to this https://havegarden.com/why-rue-plant-dying/ it can be underwatering or the plant pot is too small. Will unearth Rue and look at the roots to see if they are healthy, or if it needs a bigger pot. I want it to survive the winter, so if it needs to be repotted, that should happen now.",
    "dateDue" : ISODate("2021-07-26T19:00:00.000-05:00"),
    "taskStatus" : "",
    "createdAt" : ISODate("2021-07-27T12:24:35.662-05:00"),
    "updatedAt" : ISODate("2021-07-27T12:24:35.662-05:00"),
    "__v" : 0
}
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

