import express  from "express";
const app = express();
const PORT = 3000;

/*

Routing
routing di express js adalah cara untuk menentukan bagimana aplikasi
merespon request client ke endpoint tertentu,
yang merupakan URl(atau path) dan method permintaan HTTP tertentu(GET, POST, PUT  dll).
setiap router dapat memiliki satu atau lebih fungsi handler, yang dieksekusi ketika router cocok


cara mendefinisikan route

app.METHOD(PATH, HANDLER)

app adalah sebuah instance dari express
METHOD adalah permintaan HTTP dalam huruf kecil
PATH adalah path di server
HANDLER adalah fungsi yang dieksekusi ketika route cocok
*/


// Route methods
// A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

// GET method route
app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/barangs", (req, res) => {
    res.send("ini metode get barang")
});


// POST method route
app.post("/barangs", (req, res) => {
    res.send("ini metode post barang")
});


// PUT method route
app.put("/barangs", (req, res) => {
    res.send("ini metode put barang")
});


// DELETE method route
app.delete("/barangs", (req, res) => {
    res.send("ini metode delete barang")
});

// There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods
app.all("/barangs", (req, res) => {
    res.send("ini method all barangs")
})



// Route paths


app.listen(PORT, () => {
    console.log('server berhasil berjalan')
})