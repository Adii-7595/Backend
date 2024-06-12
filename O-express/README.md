# library :- 
a library is a collection of pre-written code that can be used to perform specific task
 ex - axios

# framework :- 
a framework is a set of pre-written code that provides
a structure for developing software application

ex-express

# express:- A node.js web application framework that help us to make web application
it is used for server side programming.

# uses:-
1. listen for incoming request
2. it parse the request according to nodeJS
3. it matches response for routes.
4. response

# getting started with express
const express = require("express");
const app = express()

let port = 3000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});

# PORTS-
ports are the logical endpoints of a network connection that is used to exchange information between web server and wev client.


# request to server

# app.use
app.use((req,res)=>{
    console.log("new incoming request");
});

# response to request

all requests are text based but express
converts it to request object and this is known as parsing

# Routing
it is a process of selecting a path for traffic in a network or between or across multiple networks

app.get("/appple",(req,res) => {
    res.send({
        name:"apple",
        color:"red"
    });

});

# Nodemon
To automatically restart server with code changes.

# Path Parameters
