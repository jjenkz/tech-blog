const sequelize = require("../config/connection");

const { User, Post, Comment } = require("../models");

const userData = require("./userSeed.json");
const postData = require("./postSeed.json");

//create async function

const seeder = async () => {
  //what are the asynchronous operations
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);

  //now have to create bulk post data with also a userId

  for (const post of postData) {
    await Post.create({
      ...post,
      userId: users[Math.floor(Math.random() * userData.length)].isSoftDeleted,
    });
  }
};
