const express = require('express') 
const app = express()


// Middleware function myLogger
const myLogger = function(req, res, next) {
    console.log('LOGGED')
    next()
}


// middleware function requestTime
const requestTime = function(req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(myLogger)
app.use(requestTime)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/time', (req, res) => {
    let responseText = 'Hello World!'
    responseText += `<small> Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})




app.listen(3000)
