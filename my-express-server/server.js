//jshint esversion:6

// import express module 
const express = require('express');

// this creates a function express and binds it to app
const app = express();

// this method will respond to the browser's get request
// req == request, res == response
app.get("/", function (req, res){
    res.send("<h1>Hello, World!</h1>");
    
});

app.get("/contact", function(req, res) {
    res.send("er.kumar.shaswat@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("Hi, I am Kumar Shaswat the Overlord.")
});

app.get("/hobbies", function(req, res) {
    res.send("I love, <ul><li> travelling</li> <li>motorcycles</li> <li>code</li> </ul")
});


// this method listens on a specific port to any http request sent on our server
app.listen(3000, function(){
    console.log("Server has started on port 3000");
});

// now we have build the barebones of express server
// can access server on browser with localhost:3000



