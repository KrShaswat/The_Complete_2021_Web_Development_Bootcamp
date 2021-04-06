const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");

  // res.send("server is up and running")
});

app.post("/", function (req, res) {
  
  // breaking parts of the api

  const endPoint = "https://api.openweathermap.org/data/2.5/weather?appid=";
  const query = req.body.cityName;
  const apiKey = "564cbcae1a33c247a7f9103ed67e39c3";
  const unit = "metric";

  const url = endPoint + apiKey + "&q=" + query + "&units=" + unit;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      const temp = weatherData.main.temp;
      // console.log(temp);
      const weatherDescription = weatherData.weather[0].description;
      // console.log(weatherDescription);

      // challenge send a img from weather

      const waether_icon = weatherData.weather[0].icon;

      const icon_url =
        "http://openweathermap.org/img/wn/" + waether_icon + "@2x.png";
      // My answer to angela's challenge :(

      // const temp_res = "<h1>The temperature in Faridabad is "+ temp + " degrees Celcius.</h1>"
      // const description_reponse = "<h1>The weather is currently " + weatherDescription + "</h1>"
      // res.send(temp_res + description_reponse);

      // by angela
      res.write(
        "<h1>The temperature in "+ query +" is " + temp + " degrees Celcius.</h1>"
      );
      res.write("The weather is currently " + weatherDescription);
      res.write("<img src=" + icon_url + ">");
      res.send();
    });
  });
  // console.log("Post request receieved.");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
