const router = require("express").Router();
const plantRoute = require("./plants");
const weatherRoute = require("./weather");
const hardinessRoute = require("./hardinessZone");

router.use("/api", plantRoute);
router.use("/api/weather", weatherRoute);
router.use("/api/hardiness", hardinessRoute);

module.exports = router;