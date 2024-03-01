import express from "express";
import url from "url";

const app = express();
const port = 3000;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.get("/", (req, res) => {
    // contoh menggunakan res.send
    //res.send("Hello World");

    //menggunakan res.sendFile memanggil halaman html
    res.sendFile("./page/index.html", {root: __dirname});
})


app.get("/about", (req, res) => {
    // res.send("about page");
    res.sendFile("./page/about.html", {root: __dirname});
})


app.get("/contact", (req, res) => {
    // res.send("contact page");
    res.sendFile("./page/contact.html", {root: __dirname});
})


// contoh menggunakan res.json
app.get("/json", (req, res) => {
    res.json({
        "nama": "maya",
        "umur": 32
    });
})


// menangkap req params id

app.get("/barang/:id", (req, res) => {
    // menampung id
    const id = req.params.id;
    // menampung name
    const name = req.query.kategori;

    res.send(" Ini halaman barang dengan id  " + id + "<br> dan kategori "+ name)
})


app.use("*", (req, res) => {
    res.status(404);
    // res.send("halaman tidak ditemukan");
    res.sendFile("./page/404.html", {root: __dirname});

})



app.listen(port, () => {
    console.log("terhubung dengan server")
})