const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/comment", commentRoutes);
router.use("/login", loginRoutes);

module.exports = router;
