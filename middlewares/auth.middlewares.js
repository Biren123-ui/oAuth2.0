
exports.authCheck=async(req,res,next)=>
{
    if(!req.user)
    {
        res.redirect("/auth/login")
    }
    else{
        next()
    }
}