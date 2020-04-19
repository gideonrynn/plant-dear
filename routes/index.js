const router = require("express").Router();
const plantRoute = require("./plants");

router.use("/api", plantRoute);

module.exports = router;