// required imports 
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose")

// intiate  express
const app = express();

// mongoose connect
mongoose.connect("mongodb://localhost:27017/wikiDB", {
    useNewUrlParser:true,
    useUnifiedTopology: true
})

//set up ejs engine


app.use(express.urlencoded({extended: true}));


// use 
app.set("view engine", "ejs");
app.use(express.static("public"))

//set up a mongoose schema
const wikiSchema = {
    title: String,
    content: String
}

const Article = mongoose.model('Article', wikiSchema);

// route for /articles

app.route("/articles")

.get(function(req, res){
    Article.find({}, function(err, articlesFound){
        res.send(articlesFound);
    });

})

.post(function(req, res){
    // console.log(req.body.title);
    // console.log(req.body.content);
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })
    newArticle.save(function(err){
        if (!err){
            res.send("Successfully added a new article.")
        }else{
            res.send(err);
        }
    })
})

.delete( function(req, res){
    Article.deleteMany(function(err){
        if (!err){
            res.send("Successfully deleted all articles")
        }else{
            res.send(err);
        }
    })
});


// listen
app.listen(3000, function(){
    console.log("Server started at port 3000");
})