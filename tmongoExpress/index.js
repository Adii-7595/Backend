const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");

const Chat = require("./models/chat.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))

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
app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    console.log(chats)
    res.render("index.ejs", { chats });
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
});

