const express = require('express')
const app = express()
const port = 8000

// app.get('/', (req, res) => res.send('Hello World!'))
// use as express router
app.use('/',require('./routes'))

app.listen(port, function(err){ 
    if(err){
        
        console.log(`some error occured like ${err}`)
    }
    console.log(`our  app running on http://localhost:${port}`)

})