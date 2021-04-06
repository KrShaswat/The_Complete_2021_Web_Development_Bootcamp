const express = require("express")
const request = require("request")
const https = require('https')


const app = express();


// To send the css and images 
app.use(express.static("Public"));

// Get the post request 
// Body - parser bit
app.use(express.urlencoded({extended: true}));


// to send the signUp.html when the host opens
app.get("/", function(req, res) {
    res.sendFile(__dirname+"/signUp.html");
})

// 
app.post("/", function(req, res){


    // req.body.htmlElementName
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;


    // data to send to mail chimp
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    }

    // convert it to JSON
    const JSON_data = JSON.stringify(data);


    // https url request
    const url = "https://us1.api.mailchimp.com/3.0/lists/f66329c481";

    const options = {
        method: "POST",
        auth: "kumar1:8f381b2d92488c205923563369aaaa3d-us9"
    }
    const request = https.request(url, options, function(response){
        if (response.statusCode === 200){
            res.sendFile(__dirname+"/success.html")
        }else {
            res.sendFile(__dirname+"/failure.html")
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(JSON_data);
    request.end();  
    // console.log(fName, lName, email);
})

app.post("/failure", function(req, res){
    res.redirect("/")
})

app.listen (process.env.PORT || 3000, function (){
    console.log("Server Up at port 3000");
})

// API key
// 8f381b2d92488c205923563369aaaa3d-us1

// list ID
// f66329c481