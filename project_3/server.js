const express = require('express');
const app = express();
const mongoose = require("mongoose");

// Connecting to MongoDB
// mongoose.connect("mongodb://localhost:3000");
const MONGODB_URI =
process.env.MONGODB_URI || "mongodb://localhost:3000";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(3000);

console.log("Server is running!");