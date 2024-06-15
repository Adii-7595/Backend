//templating
// ejs(embedded javascript templates)

// it is a simple templating language that lets you generate HTML markup with plain js 

const express = require("express")
const app = express();
const port = 3000

const path = require("path")
// using ejs
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"))
app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/hello",(req,res)=>{
    res.render("hello");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});


//Interpolation syntax: it refers to embedding expressions into marked up text

// <h3> <%= "aditya".toUpperCase() %></h3>
// <h3> <%= ["hii","hello","bhago","ruko"][2] %></h3>


//pasing data to ejs:
app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6+1)
   res.render("rolldice.ejs") 

});
