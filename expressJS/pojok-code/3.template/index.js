import express from "express";
const app = express();
const PORT = 3000;

import router from "./routes/barang.js";

// mendefinisikan dimana letak file ejs nya
import path from "path";
import url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")



app.use(router);

app.listen(PORT, () => {
    console.log(`example app listening on http://localhost:${PORT}`);
})