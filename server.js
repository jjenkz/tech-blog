const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const session = require("express-session");

require("dotenv").config;

const { User, Comment, Post } = require("./models");

const PORT = 3001;

const app = express();

const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitizalized: true,
};

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API Server is listening on ${PORT}`);
  });
});
