import express from "express"
import cookieParser from "cookie-parser";

const app = express()
const port = 3000;

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("hello world")
} )

app.get('/set-cookies', (req, res) => {
    // res.setHeader("set-cookie", "name = mayasdev")
    res.cookie("name", "maya javascript developer", {
        // maxAge: 5000,
        // expires: new Date(Date.now() + 5000)
        
    })
    
    res.send("cookies are set")
})

app.get('/get-cookies', (req, res) => {
    res.send(req.cookies);
})

app.get('/delete-cookies', (req, res) => {
    res.clearCookie('age');
})


app.listen(port, () => {
    console.log(`server berjalan di http://localhost:${port}`);
});