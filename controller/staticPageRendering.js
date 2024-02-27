const passport=require("passport")

homePageRendering = (req, res) => {
  res.render("home",{user:req.user});
};

loginPageRendering=(req, res) => {
    res.render("login", { user: req.user });
  }

  logoutPageRendering=(req, res) => {
    req.logOut(() => {
        req.session.destroy();
        res.redirect('/');
      });
       
  }

  redirectFunctionality=(req,res)=>
  {
    console.log("hiiii");
    passport.authenticate("google", {
        successRedirect: "/auth/protected",
        failureRedirect: "/auth/failure",
      })(req, res)
  }

  failureRedirect=(req,res)=>
  {
    console.log("failure");
    res.send("something went wrong");
  }

  successRedirect=(req,res)=>
  {
    console.log("success");
    res.render('profile', { user: req.user });
  }

module.exports = {
  homePageRendering,
  loginPageRendering,
  logoutPageRendering,
  redirectFunctionality,
  failureRedirect,
  successRedirect
};
