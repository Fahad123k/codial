const express = require('express')
const app = express()
const port = 8000
const path=require('path')

app.set('view engine','ejs')
// app.get('/', (req, res) => res.send('Hello World!'))

// let choose our view or template directory as public
// create a new folder for view
app.set('views',path.join(__dirname,'views'))

app.use('/',require('./routes'))

app.listen(port, function(err){ 
    if(err){
        
        console.log(`some error occured like ${err}`)
    }
    console.log(`our  app running on http://localhost:${port}`)

})