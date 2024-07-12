const router = require("express").Router();

const Post = require("../../models/User");

//routes

//http:/localhost:3001/api/users
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// module.exports = Post;
