const router = require("express").Router();
const plantRoute = require("./plants");
const weatherRoute = require("./weather");

router.use("/api", plantRoute);
router.use("/api/weather", weatherRoute);

module.exports = router;