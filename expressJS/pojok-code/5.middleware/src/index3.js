import express from 'express';
const app = express();

app.get('/', (req,res,next) => {
    throw new Error("ada sebuah error.....")
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("ada sebuah error.....")
})

app.listen(3000, () => {
    console.log('server berjalan http://localhost:3000');
})