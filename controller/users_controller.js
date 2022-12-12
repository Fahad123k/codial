const User = require('../models/user');

const Post = require('../models/post');
module.exports.home = function (req, res) {
    // res.end("<h1> user home</h1>")

    // Post.find({},function(err,posts){
    //     return res.render('user_home', {
    //         title: "user home",
    //         posts:posts
    //     })
    // })

    // populate the user of each post
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('user_home', {
            title: "user home",
            posts:posts
        })
    })
 
}


module.exports.profile = function (req, res) {
    return res.render('profile', {
        title: "user profile"
    })
}


module.exports.signUp = function (req, res) {
    // res.end("<h1> user home</h1>")
    if(req.isAuthenticated()){
        res.redirect('/users/profile')
    }
    return res.render('user_sign_up', {
        title: "codial | sign up"
    })
}
// the sign in page
module.exports.signIn = function (req, res) {
    // res.end("<h1> user home</h1>")
    if(req.isAuthenticated()){
        res.redirect('/users/profile')
    }

    return res.render('user_sign_in', {
        title: "codial | sign in"
    })
}

// get the sign up data
module.exports.create = function (req, res) {

    // if password do not confirm
    if (req.body.password != req.body.Confirm_password) {
        return res.redirect('back')
    }

    // find user exist or not  by email bcz it is unique in our schema
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in siginig up'); return; }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating in user while siginig up'); return; }
                // if succesfull create new user the redirect to sign-in
                return res.redirect('/users/sign-in')
            })
        }
        else {
            return res.redirect('back')

        }
    });

}

// sign in  create the  session for the user
module.exports.createSession = function (req, res) {
    return res.redirect('/users')
}

// destroying session and logout
module.exports.destroySession=function(req,res,next){
    // req.logout();

    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
    return res.redirect('/users')
    
}