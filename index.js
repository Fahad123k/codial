const express = require('express')
const CookieParser = require('cookie-parser')
const app = express();
const port = 8000
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')
// used for sesion cookies
const session = require('express-session');
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy');

const MongoStore =require('connect-mongo');

const sassMiddleware=require('node-sass-middleware')


app.use(sassMiddleware({
    /* Options */
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
app.use(express.urlencoded());
app.use(CookieParser());
app.use(express.static('./assets'))

app.use(expressLayouts)
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)



// let choose our view or template directory as public
app.set('view engine', 'ejs')
// create a new folder for view
app.set('views', path.join(__dirname, 'views'))

// middleware takes session cokies and encriptsit
// mongo store is used to store the session cookie in the db



app.use(session({
    name: 'codeial',
    secret: 'blahsomething',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create(
        { 
            mongoUrl: 'mongodb://localhost/codeial_development',
        ttl: 14 * 24 * 60 * 60,
        autoRemove: 'native'
     },
     function(err){
        console.log(err ||'connect-mongodb setup ok');
    }
        )
}));

// older version
// app.use(session({
//     name: 'codeial',
//     // TODO change the secret before deployment in production mode
//     secret: 'blahsomething',
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: (1000 * 60 * 100)
//     },
//     store: new MongoStore(
//         {
//             mongooseConnection: db,
//             autoRemove: 'disabled'

//         },
        // function(err){
        //     console.log(err ||'connect-mongodb setup ok');
        // }
//     )
// }));

// initialize passport
app.use(passport.initialize());
app.use(passport.session())
app.use(passport.setAuthenticatedUser)

app.use('/', require('./routes'))


app.listen(port, function (err) {
    if (err) {

        console.log(`some error occured like ${err}`)
    }
    console.log(`our  app running on http://localhost:${port}`)

})