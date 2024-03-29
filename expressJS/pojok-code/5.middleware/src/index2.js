import express from 'express';

const app = express();
const router = express.Router();

router.use((req,res, next) => {
    console.log('Router middleware.........');
    next()
})

router.get('/', (req,res) => {
    res.send("Hello World....it's me mayadev")
})

app.use('/router', router);

app.listen(3000, () => {
    console.log('server berjalan http://localhost:3000');
});