const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv").config(); // Load variables from .env

// Access the variable
const dBURI = process.env.DB_URI;

console.log(dBURI); // Check that it works

mongoose
  .connect(dBURI)
  .then((result) => app.listen(5000))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define the model for the existing collection without a schema
const String = mongoose.model(
  "String",
  new mongoose.Schema({}, { strict: false }),
  "string"
);

app.get("/string", (req, res) => {
  const newString = new String({
    text: "This is a blog post",
  });
  newString
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/allblogs", (req, res) => {
  String.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/", (req, res) => {
  res.send("Server is up and running");
});
