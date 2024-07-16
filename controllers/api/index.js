const router = require("express").Router();
// const apiRoutes = require("./apiRoutes");
const loginRoutes = require("./loginRoutes");

// router.use("/data", apiRoutes);

router.use("/login", loginRoutes);

module.exports = router;
