//jshint esversi//
//require 
const express = require('express');
const ejs = require ('ejs');
const mongoose = require('mongoose');

//inintialize express
const app = express()

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));

// Mongoose setup 
// // connect
mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// // Setup the schema
const userSchema = {
    email: String,
    password: String
};

// //  Mongo model
const User = new mongoose.model("User", userSchema);


app.get("/", function(req, res){
    res.render('home');
});

app.get("/login", function(req, res){
    res.render('login');
});

app.post("/login", function(req, res){
    const username = req.body.username
    const password = req.body.password

    User.findOne({email: username}, function(err, foundUser){
        if(err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("secrets")
                }else {
                    
                }
            }
        }
    })
})

app.get("/register", function(req, res){
    res.render('register');
});

app.post("/register", function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err){
        if(err){
            console.log(err);
        }else {
            res.render("secrets")
        }
    })
})


app.listen(3000, function(){
    console.log("Server started at port 3000");
})