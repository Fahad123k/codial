const User =require('../models/user');

module.exports.home=function(req,res){
    // res.end("<h1> user home</h1>")
    return res.render('user_home',{
        title:"user home"
    })
}
module.exports.profile=function(req,res){
   
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('profile',{
                    title:"user profile",
                    user:user
                })
            }
            return res.redirect('/uses/sign-in')
            
        })

    }
    else{
        return res.redirect('/uses/sign-in')
    }


  
}


module.exports.signUp=function(req,res){
    // res.end("<h1> user home</h1>")
    return res.render('user_sign_up',{
        title:"codial | sign up"
    })
}
// the sign in page
module.exports.signIn=function(req,res){
    // res.end("<h1> user home</h1>")
    return res.render('user_sign_in',{
        title:"codial | sign in"
    })
}

// get the sign up data
module.exports.create=function(req,res){

    // if password do not confirm
    if(req.body.password!=req.body.Confirm_password){
        return res.redirect('back')
    }

    // find user exist or not  by email bcz it is unique in our schema
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in siginig up'); return;}
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating in user while siginig up'); return;}
                // if succesfull create new user the redirect to sign-in
                return res.redirect('/users/sign-in')
            })
        }
        else{
            return res.redirect('back')

        }
    });
    
}

// sign in  create the  session for the user
module.exports.createSession=function(req,res){
    // steps to authenticate
    // find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in siginig up'); return;}
        // handle user found
        if(user){

             // handle pasword which dont match
             if(user.password!=req.body.password){
                
                 return res.redirect('back')
             }

            //  handle session creation
             res.cookie('user_id',user.id);
             return res.redirect('/users/profile')

        }
        else{

            // handle user not found
            return res.redirect('back')
        }

    })


}

module.exports.SignOut=function(req,res){
    // sign out here

    // req.cookies.user_id=00
    res.cookie('user_id',000)
    console.log("cookiew will be deleted::"+req.cookies.user_id)

    return res.redirect('/users/sign-in')
}