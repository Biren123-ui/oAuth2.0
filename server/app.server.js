const express = require("express");
const path = require("path");
const staticRoutes = require("../routes/staticRouter.routes");
const authRoutes=require("../routes/auth.routes")
const app = express();

require("dotenv").config()

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", staticRoutes);
app.use("/auth",authRoutes)


module.exports = app;
