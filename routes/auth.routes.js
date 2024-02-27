const express = require("express");
const passport=require("passport")
const router = express.Router();
const {authCheck}=require("../middlewares/auth.middlewares")

const {
  loggingWithGoogle,
} = require("../controller/authentication.controller");

const {
  loginPageRendering,
  logoutPageRendering,
  redirectFunctionality,
  failureRedirect,
  successRedirect,

} = require("../controller/staticPageRendering");


router.get("/login", loginPageRendering);

router.get("/logout", logoutPageRendering);

router.get("/google", loggingWithGoogle);

router.get("/google/redirect",redirectFunctionality );

router.get("/failure",failureRedirect)

router.get("/protected",authCheck,successRedirect)

module.exports = router;
