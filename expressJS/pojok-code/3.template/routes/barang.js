import express from 'express';
const barangRouter = express.Router();

barangRouter
.route("/")
.all((req, res) => {
    res.send("ini method get semua barang")
})
.post((req, res) => {
    res.send("ini method post barang")
});

// barangRouter
// .route("/:id")
// .get((req, res) => {
//     res.send("ini method get barang dengan id = ", + req.params.id);
// })
// .put((req, res) => {
//     res.send("ini methode put barang dengan id = " , req.params.id)
// })
// .delete((req, res) => {
//     res.send("ini methode delete barang dengan id = ", + req.params.id)
// })

export default barangRouter;