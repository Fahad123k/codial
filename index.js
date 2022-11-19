const express = require('express')
const app = express();
const CookieParser=require('cookie-parser')
const port = 8000
const path=require('path')
const expressLayouts= require('express-ejs-layouts');
const db= require('./config/mongoose')

app.use(express.urlencoded());
app.use(CookieParser());
app.use(express.static('./assets'))
app.use(expressLayouts)
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.use('/',require('./routes'))

// let choose our view or template directory as public
app.set('view engine','ejs')
// create a new folder for view
app.set('views',path.join(__dirname,'views'))


app.listen(port, function(err){ 
    if(err){
        
        console.log(`some error occured like ${err}`)
    }
    console.log(`our  app running on http://localhost:${port}`)

})