const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");

//REGISTER a USER
router.post("/", async (req, res) => {
  try {
    const encryptedPassword = await bcrypt.hash(newUser.password, 10);

    const newUser = await User.create({
      username: req.body.username,
      password: encryptedPassword,
    });

    console.log(newUser);

    req.session.save(() => {
      req.session.loggedIn = true;
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN a USER
router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
      const userData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (!userData) {
        res.status(404).json({ message: "No user found" });
      }

      const authenticated = bcrypt.compare(password, userData.password);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
