const express = require("express");
const sequelize = require("./config/connection");

const { User, Comment, Post } = require("./models");

const PORT = 3001;

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API Server is listening on ${PORT}`);
  });
});
