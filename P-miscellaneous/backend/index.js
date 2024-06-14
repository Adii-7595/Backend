const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true})) //Middlewares
app.use(express.json()) //Middlewares

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    if (user) {
        res.send(`Standard GET, Welcome ${user}`);
    } else {
        res.send("Standard GET, Welcome guest");
    }
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    if (user) {
        res.send(`Standard POST, Welcome ${user}`);
    } else {
        res.send("Standard POST, Welcome guest");
    }
   
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
