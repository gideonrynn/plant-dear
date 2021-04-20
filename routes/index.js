const router = require("express").Router();
const plantRoute = require("./plants");
const weatherRoute = require("./weather");
const hardinessRoute = require("./hardinessZone");
const tasksRoute = require("./tasks");

router.use("/api", plantRoute);
router.use("/api/weather", weatherRoute);
router.use("/api/hardiness", hardinessRoute);
router.use("/api/tasks", tasksRoute);

module.exports = router;