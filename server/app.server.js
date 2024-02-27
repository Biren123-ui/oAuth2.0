const express = require("express");
require("dotenv").config();
const path = require("path");
const staticRoutes = require("../routes/staticRouter.routes");
const authRoutes = require("../routes/auth.routes");
const Session=require("express-session")
const passport=require("passport")
const passport_setup = require("../config/passport-setup");
const app = express();

//setup view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(Session({ secret:process.env.COOKIE_KEY,resave:false,saveUninitialized: true, }));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//middleware for routes
app.use("/", staticRoutes);
app.use("/auth", authRoutes);

module.exports = app;
