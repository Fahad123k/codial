module.exports.profile=function(req,res){
    res.end("<h1> user profile</h1>")
}

module.exports.home=function(req,res){
    // res.end("<h1> user home</h1>")
    return res.render('user_profile',{
        title:"user profile"
    })
}


module.exports.signUp=function(req,res){
    // res.end("<h1> user home</h1>")
    return res.render('user_sign_up',{
        title:"codial | sign up"
    })
}
module.exports.signIn=function(req,res){
    // res.end("<h1> user home</h1>")
    return res.render('user_sign_in',{
        title:"codial | sign in"
    })
}
