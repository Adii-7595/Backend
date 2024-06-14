## Library

A library is a collection of pre-written code that can be used to perform specific tasks.

*Example*: axios

## Framework

A framework is a set of pre-written code that provides a structure for developing software applications.

*Example*: Express

## Express

Express is a Node.js web application framework that helps us to make web applications. It is used for server-side programming.

### Uses:

1. Listen for incoming requests.
2. Parse the request according to Node.js.
3. Match responses for routes.
4. Send responses.

## Getting Started with Express

```javascript
const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


# PORTS

Ports are the logical endpoints of a network connection that are used to exchange information between a web server and a web client.

# Request to Server

### app.use

```javascript
app.use((req, res) => {
    console.log("New incoming request");
}); ```


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


# Response to Request

All requests are text-based, but Express converts them to request objects, a process known as parsing.

# Routing

Routing is the process of selecting a path for traffic in a network or between or across multiple networks.

### Example of Routing in Express

```javascript
app.get("/apple", (req, res) => {
    res.send({
        name: "apple",
        color: "red"
    });
});```