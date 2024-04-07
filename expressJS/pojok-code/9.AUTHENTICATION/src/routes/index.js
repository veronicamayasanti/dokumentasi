import express from "express";
const routes = express.Router();
let Users = [];

routes.get("/", (req, res) => {
    res.send("Hello world")
});

routes.get("/signup", (req, res) => {
    const data = {
        title: "sign Up",
        layout: "layout/main-layout",
        message: "",
    };
    res.render("signup", data);
})


routes.post("/signup", (req, res) => {
    // jika data tidak diisi dengan lengkap
    if (!req.body.nama || !req.body.email || !req.body.password ){
        res.status(400);
        const data = {
            title: "sign Up",
            layout: "layout/main-layout",
            message: "Data Belum Lengkap!",
        };
        res.render("signup", data);
    } else{
        Users.filter((user) => {
            if(user.email === req.body.email){
                res.status(400);
                const data = {
                    title: "sign Up",
                    layout: "layout/main-layout",
                    message: "Email sudah terdaftar!",
                };
                res.render("signup", data);

            }
        });
        const newUser = {
            nama: req.body.nama,
            email: req.body.email,
            password : req.body.password
        }
        Users.push(newUser);
        req.session.use = newUser;
        res.redirect("/protected-page");
    }
});

function isLoggedIn(req, res, next) {
    if(req.session.user){
        next()
    } else {
        let err = new Error ("Anda belum login");
        next(err)
    }
}


routes.get("/protected-page", isLoggedIn, (req, res, next) =>{
    const data = {
        title: "protected-page",
        layout: "layout/main-layout",
        message: "welcome " + req.session.user.nama,
    };
    res.render("protected-page", data);
});





routes.get("/login", (req, res) => {
    const data = {
        title: "Login",
        layout: "layout/main-layout",
        message: ""
    };
    res.render("login", data);
})

routes.post("/login", (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400);
        const data = {
            title: "Login",
            layout: "layout/main-layout",
            message: "Invalid data",
        };
        res.render("login", data);
    } else {
        if (Users.length === 0) {
            res.redirect("/signup");
        } else {
            Users.filter((user) => {
                if (
                    user.email === req.body.email &&
                    user.password === req.body.password
                ) {
                    req.session.user = user;
                    res.redirect("/protected-page");
                } else {
                    res.status(400);
                    const data = {
                        title: "Login",
                        layout: "layout/main-layout",
                        message: "Invalid data",
                    };
                    res.render("login", data);
                }
            });
        }
    }
});




routes.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
})


routes.use("/protected-page", (err, req, res, next) => {
    let data = {
        title: "Halaman Login",
        layout: "layout/main-layout",
        message: err.message
    };
    res.render("login", data);
});

export default routes;