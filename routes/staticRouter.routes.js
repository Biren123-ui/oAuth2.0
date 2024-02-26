const express = require("express");
const router = express.Router();
const { homePageRendering } = require("../controller/staticPageRendering");

router.get("/", homePageRendering);


module.exports=router