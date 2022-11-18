const express = require('express')
const app = express()
const port = 8000
const path=require('path')
const expressLayouts= require('express-ejs-layouts');


app.use(expressLayouts)
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