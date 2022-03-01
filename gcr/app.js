// require express module, module has functions, methods and variables
var express = require('express')
// call the express function and put it a variable
var app = express()

app.get('/', (req, res) => {
    res.send('Hello Google Container Registry User!')
})

app.listen(8080, () => { 
    console.log('Listening on port 8080')
})
