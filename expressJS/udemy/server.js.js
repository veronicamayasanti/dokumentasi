import express from "express";


const app = express();

app.get('/hello/world', (req, res) => {
    res.json({
        path: req.path,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure,
    })
})

    


// app.get('/', (req, res) => {
//     const firstName ="maya"
//     const lastName = "santi"
//     res.send(`hello ${req.query.firstName} ${req.query.lastName}`)
// });




app.listen(3000, function() {
    console.log('server sukses berjalan.........')
})