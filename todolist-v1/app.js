// import express
const express = require("express");

// instance of epxress
const app = express();

// items array

let items = ["LoloDile seva", "Jatt de Jawani", "Jai Shri Ram"];
let workItems = [];

// set ejs
// should be declared after app (it uses app duh!)
app.set("view engine", "ejs");

// body parser
app.use(express.urlencoded({extended: true}))

// static for css
app.use(express.static("public"));

// to respond to get request
app.get("/", function (req, res) {
    var today = new Date();

    // varible to pass to ejs
    // var day = "";

    // Challenge to return day
    // Angela used switch statements
    //   var weekday = new Array(7);
    //   weekday[0] = "Sunday";
    //   weekday[1] = "Monday";
    //   weekday[2] = "Tuesday";
    //   weekday[3] = "Wednesday";
    //   weekday[4] = "Thursday";
    //   weekday[5] = "Friday";
    //   weekday[6] = "Saturday";

    // usingtoLocaleDateString
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)


    // getDay converts days into number
    // 0 = sunday .... 6 = saturday
    // if (today.getDay() === 6 || today.getDay() === 0) {
    //     day = "Weekend!";
    // } else {
    //     day = "Weekday!";
    // }

    res.render("list", {listTitle: day, newItems: items}); //challenge sol add (weekday[today.getDay()])
});

app.post("/", function(req, res){
    var item = req.body.todo;
    console.log(item);
    items.push(item);
    res.redirect("/");    
})


// work lists
app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work List",
        newItems: workItems
    })
})

app.post("/work", function(req, res){
    let item = req.body.todo
    workItems.push(item);
    res.redirect("/work")
})

//About function

app.get("/about", function(req, res){
    res.render("about");
})



// So that servers listens to request on port 3000
app.listen(3000, function (req, res) {
    console.log("Server up and running on Port 3000");
});
