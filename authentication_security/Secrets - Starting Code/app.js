//jshint esversi//
//require 
require('dotenv').config()
const express = require('express');
const ejs = require ('ejs');
const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption')
// const md5 = require('md5')
const bcrypt = require('bcrypt');
const saltRounds = 10


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
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// // encryption setup
secret = process.env.SECRET
// userSchema.plugin(encrypt, { secret:secret, encryptedFields:["password"] });

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
                    bcrypt.compare(password, foundUser.password, function(err, result) {
                        if (result==true){
                            res.render('secrets')
                        }else{
                            console.log(err);
                        }
                    });
                }
        }
    })
})

app.get("/register", function(req, res){
    res.render('register');
});

app.post("/register", function(req, res){

    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        const newUser = new User({
            email: req.body.username,
            password: hash
        });
        newUser.save(function(err){
            if(err){
                console.log(err);
            }else {
                res.render("secrets")
            }
        })
    
    })
    
    
})


app.listen(3000, function(){
    console.log("Server started at port 3000");
})