const router = require("express").Router();
const Post = require("../../models/Post");
const { withAuth } = require("../../utils/auth");

//ROUTES

//http:/localhost:3001/api/users
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/posts
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
