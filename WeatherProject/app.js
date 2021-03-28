const express = require("express");
const https = require("https")

const app = express();

app.get("/", function(req, res){
    
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=564cbcae1a33c247a7f9103ed67e39c3&q=Faridabad&units=metric"
    
    https.get(url, function(response){
        console.log(response.statusCode);


        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log(temp);
            const weatherDescription = weatherData.weather[0].description;
            console.log(weatherDescription);
        })
    })  

    res.send("server is up and running")
})








app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})