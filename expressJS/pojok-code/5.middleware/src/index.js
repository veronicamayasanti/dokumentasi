import express from 'express'

const app = express();

// middleware untuk mencetak log
app.use((req,res,next) => {
    console.log('hello ini middleware');
    next();
})

// middleware untuk menampilkan waktu permintaan
app.use((req,res,next) => {
    req.requestTime = new Date();
    next()
})

app.get('/', (req,res)=>{
    let responText  = "hello world <br>";
    responText += `waktu permintaan : ${req.requestTime}`;
    res.send(responText);
})

app.listen(3000, () => {
    console.log('server berjalan di http://localhost:3000');
})