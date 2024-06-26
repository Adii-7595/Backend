const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override');


const Chat = require("./models/chat.js");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


main().then(() => { console.log("successful connection") })
    .catch(err => { console.log(err) });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1= new Chat({
//     from:'Adi',
//     to:'Sonal',
//     msg:'send me time table',
//     created_at: new Date()
// })
// chat1.save().then((res=>{
//     console.log(res)
// }))

app.get("/", (req, res) => {
    res.send("Home Page!")
})

//index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
   
    res.render("index.ejs", { chats });
});

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//create route
app.post("/chats",(req,res) =>{
    let {from, to, msg} = req.body
    let newChat = new Chat({
        from:from,
        to: to,
        msg: msg,
        created_at : new Date()
    })
    newChat.save().then((res)=>{
        console.log("Chat is saved!")
    })
    .catch((err) =>{
        console.log(err)
    });
    res.redirect("/chats");
});

//edit route

app.get("/chats/:id/edit", async(req,res) =>{
    let {id} = req.params
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
    
});

//update route
app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;

    let { msg : newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
  
    res.redirect("/chats");
});

//Destroy route
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    console.log(req.body);
    res.redirect("/chats")

})
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
});

