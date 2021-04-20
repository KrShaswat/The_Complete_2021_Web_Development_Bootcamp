// import express 
const express = require('express');

// import body-parser - apparently in 4.16+ express you dont need it

// initiate express unction and bind it to app

const app = express();

// initiate body-parser
app.use(express.urlencoded({
    extended: true
  }));


// --------------------------------------------------
// root respond with the html file
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

// post response

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2;

    res.send("Answer is "+result);
})


//---------------------------------------------------
// BMI Calculator

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height*height);

    res.send("Your BMI is "+bmi);
});
// -------------------------------------------------
// initaiate the server listen 
app.listen(3000, function(){
    console.log("Server started on port:3000, access localhost:3000");
});