const express = require("express");
const app = express();
// console.dir(app);

let port = 8000;

app.listen(port,()=>{
    console.log(`app is listening ${port}`);

});

// app.use((req,res) => {
//     console.log("new incoming requests");
//     // res.send("Aditya's Server!")
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });
//     let fruits = "<h1>Fruits</h1> <ul><li>apple</><li>orange</li></ul>"
//     res.send(fruits)

// });
app.get("/",(req,res) => {
    console.log("root path");
});
app.get("/apple",(req,res) => {
    console.log("apple path");
});
app.get("/orange",(req,res) => {
    console.log("orange path");
});
app.get("/litchi",(req,res) => {
    console.log("litchi path");
});

app.get("/strawberry",(req,res) => {
    console.log("strawberry path");
});

app.get("*",(req,res)=>{
    res.send("This path doesn't exist");

})




// app.post("/post",(req,res) => {
//     res.send("you sent a post request!")
// })
