const express = require('express')
const app = express();
const CookieParser=require('cookie-parser')
const port = 8000
const path=require('path')
const expressLayouts= require('express-ejs-layouts');
const db= require('./config/mongoose')
// used for sesion cookies
const session =require('express-session');
const passport=require('passport')
const passportLocal=require('./config/passport-local-strategy')


app.use(express.urlencoded());
app.use(CookieParser());
app.use(express.static('./assets'))

app.use(expressLayouts)
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)



// let choose our view or template directory as public
app.set('view engine','ejs')
// create a new folder for view
app.set('views',path.join(__dirname,'views'))

// middleware takes session cokies and encriptsit
app.use(session({
    name:'codial',
    // todo change the secret before deployment in the producon
    secret:'blahSomething',
    // 
    saveUninitialized:false,
    resave:false,
    cookie:{
        // total in minutes=100
        maxAge:(1000*60*100)
    }
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session())
app.use(passport.setAuthenticatedUser)

app.use('/',require('./routes'))


app.listen(port, function(err){ 
    if(err){
        
        console.log(`some error occured like ${err}`)
    }
    console.log(`our  app running on http://localhost:${port}`)

})