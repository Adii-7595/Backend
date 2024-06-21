const { faker } = require('@faker-js/faker');

const mysql = require("mysql2");

const express = require("express");
const app = express();
const port = 3000
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mern_app',
    password: '12345678'

});


//Home Page
app.get("/", (req, res) => {

    let q = `select count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw (err);
            let count = result[0]["count(*)"]
            res.render("home.ejs", { count });

        });

    } catch (err) {
        console.log(err);
        res.send("some error in database!")
    }
    // res.send("appp is working, u r at home page!")
});

//show user data Page
app.get("/user", (req, res) => {
    let q = `select id, username, email from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw (err);
            let details = result;
            res.render("user.ejs", { details });
        });

    } catch (err) {
        console.log(err);
    }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id = '${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw (err);
            let info = result[0];
            console.log(result[0]);
            res.render("edit.ejs", { info })
        });

    } catch (err) {
        res.send("Internal server Error");
    }
});

//update route
app.patch("/user/:id",(req,res)=>{
    let { id } = req.params;
    let {password:formPass, username: newUser} = req.body;
    let q = `select * from user where id = '${id}'`;

    try{
        connection.query(q,(err,result)=>{
            if (err) throw (err);
            let user = result[0];
            if(formPass != user.password){
                res.send("wrong password");
            }else{
                let q2 = `update user set username = '${newUser}' where id = '${id}'`;
                connection.query(q2,(err,result)=>{
                    if (err) throw (err);
                    res.redirect("/user");
                });
            }
            console.log(user);
           
        });

    }catch(err){
        res.send("Internal error! Server down")

    }
});

app.listen(port, () => {
    console.log(`server is listening to ${port}`)
})





// let getRandom = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.userName(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];

// }


// let q ="insert into user(id,username,email,password) values ?";
// let data = [];


// for (let i = 1; i<=100; i++) {
//     data.push(getRandom());

// }



// try {
//     connection.query(q,[data],(err, result) => {
//     if (err) throw err;
//     console.log(result)
//     });
// } catch (err) {
//     console.log(err);
// }
// connection.end()
