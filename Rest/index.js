//Rest: Representational state transfer

// Rest is an architectural style that defines a set of constraints to be used for creating web servies 

// Restful APIs : follows rest constraints

// Crud operations: 
// GET- retrieves resource
// POST submit new data to the servers 
// PUT update existing data
// PATCH update existing data partially
// DELETE removes data

// GET:             /posts             to get data for all posts            (index or main)
// POST:            /posts             to add new post                      (Create)
// GET:             /posts/:id         to get one post using(id)            (view)
// PATCh or PUT:    /posts/:id         to update specific post              (partial update)
// DELETE:          /posts/:id         to delete specific post              (Destroy)


const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const { v4:uuidv4 } = require('uuid');
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id:uuidv4(),
    username: "Adityabhai",
    content: "Fucked up living"
    },
    {    
        id:uuidv4(),
        username:"raghubhai",
        content:"deharigodam"
    },
    {
        id:uuidv4(),
        username:"baila",
        content:"puppypet"
    },
];



app.get("/posts", (req, res) => {
    res.render("index.ejs",{ posts });
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs")
});

app.post("/posts",(req,res)=>{
    let { username , content } = req.body;
    let id = uuidv4()
    posts.push({username,content,id});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id ===p.id);
    res.render("show.ejs",{ post });
});

app.patch("/post/:id",(req,res)=>{

    let { id } = req.params;
    console.log(id);
    res.send("patch request working")
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});





