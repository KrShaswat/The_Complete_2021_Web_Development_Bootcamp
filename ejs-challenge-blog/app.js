//jshint esversion:6

// require
const express = require("express");
// const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

// let post_array = [];
// insitailazation
const app = express();

// // mongoose connect
mongoose.connect("mongodb://localhost/blogDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app use setting
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const blogPost = mongoose.model("post", postSchema);

// Varibles
const homeStartingContent =
    "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// challenge one
// "/" root route
app.get("/", function (req, res) {
    blogPost.find({}, function (err, posts) {
        if (err) {
            console.log(err);
        }
        res.render("home", {
            home_content: homeStartingContent,
            blogPosts: posts,
        });
    });
});

// about route

app.get("/about", function (req, res) {
    res.render("about", { about_content: aboutContent });
});

// contact route
app.get("/contact", function (req, res) {
    res.render("contact", { contact_content: contactContent });
});

// compose route
app.get("/compose", function (req, res) {
    res.render("compose");
});

// post/: route
app.get("/posts/:topic", function (req, res) {
    const requestedTitle = _.lowerCase(req.params.topic);

    post_array.forEach(function (element) {
        const storedTitle = _.lowerCase(element.title);

        if (storedTitle === requestedTitle) {
            res.render("post", {
                title: element.title,
                content: element.body,
            });
        }
    });

    // my working solution till challenge 19, mine is not readable
    // post_array.forEach(function(element){
    //   if (_.lowerCase(element.title) === _.lowerCase(req.params.topic)){
    //     res.render("post", {blog_post: element});
    //   }
    // })
});

// post requests

app.post("/compose", function (req, res) {
    const post = new blogPost({
        title: req.body.postTitle,
        content: req.body.postBody,
    });

    post.save();
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
