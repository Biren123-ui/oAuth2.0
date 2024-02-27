const passport = require("passport");

const loggingWithGoogle = (req, res) => 
{
  passport.authenticate("google", 
  {
    scope: ["profile", "email"],
  })
  (req, res);
};

module.exports = {
  loggingWithGoogle,
};
