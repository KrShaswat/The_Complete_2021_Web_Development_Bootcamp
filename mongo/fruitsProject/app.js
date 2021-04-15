// const MongoClient = require('mongodb').MongoClient;
// // for validatng data entries and our connection with the database
// const assert = require('assert');

// //connection to URL
// //27017 is a mongodb default
// const url = 'mongodb://localhost:27017';


// // Database Name
// const dbName = 'fruits';

// // Create a new MongoClient
// const client = new MongoClient(url);

// //Use connect method to connect to the server
// client.connect(function(err) {

//     // to check all connections work
//     assert.strictequal(null, err);

//     // if all conncetions work log following
//     console.log("Connected successfully to server");

//     //initiate the db
//     const db = client.db(dbName);

//     // 
//     client.close();
// })

// import mongoose with varible mongoose
const mongoose = require('mongoose');

//connect to 27017/fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true }, { useNewUrlParser: true });

// structure  of the mongo db database
const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  rating: {type: Number, max: 10, min: 0},
  review: String
})

// mongooose model made
const Fruit = mongoose.model("Fruit", fruitSchema);

// instance to add row
const fruit = new Fruit({
  rating:9,
  review:"Pretty solid as a fruit."
})

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "John",
  age: 37
})

person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 0,
  review: "This hairy stuff aint edible"
})

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "good Stuff"
})
const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "soft creamy delicious, best for shakes, Oh Yeaaasshhhh"
})
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log("Error");
//   } else {
//     console.log("Successfully saved all");
//   }
// })

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    fruits.forEach(function(element){
      console.log(element.name)
    });
    mongoose.connection.close();
  }
})