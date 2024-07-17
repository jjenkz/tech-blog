const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");

require("dotenv").config;

const { User, Comment, Post } = require("./models");

const PORT = 3001;

const app = express();

const hbs = exphbs.create();

const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitizalized: true,
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session(sess));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API Server is listening on ${PORT}`);
  });
});
