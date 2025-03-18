const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ObjectId } = require("mongodb"); // Required for MongoDB ObjectId

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

const dBURI = process.env.DB_URI;
console.log(dBURI);

mongoose
  .connect(dBURI)
  .then(() => app.listen(5000, () => console.log("✅ Server running on port 5000")))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define the model for the existing "string" collection
const String = mongoose.model("String", new mongoose.Schema({}, { strict: false }), "string");

// 📌 **1️⃣ Fetch All Blogs**
app.get("/allblogs", (req, res) => {
  String.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: "Failed to fetch blogs", details: err }));
});

// 📌 **2️⃣ Add a New Booking**
app.post("/addbooking", (req, res) => {
  mongoose.connection.db.collection("booking").insertOne(req.body)
    .then((result) => res.json({ message: "✅ Booking added successfully", data: result }))
    .catch((err) => res.status(500).json({ error: "❌ Failed to add booking", details: err }));
});

// 📌 **3️⃣ Fetch All Bookings**
app.get("/allbookings", (req, res) => {
  mongoose.connection.db.collection("booking").find().toArray()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: "❌ Failed to fetch bookings", details: err }));
});

// 📌 **4️⃣ Remove a Booking by ID**
app.delete("/removebooking/:id", (req, res) => {
  const bookingId = req.params.id;

  mongoose.connection.db.collection("booking").deleteOne({ _id: new ObjectId(bookingId) })
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "❌ Booking not found" });
      }
      res.json({ message: "✅ Booking removed successfully" });
    })
    .catch((err) => res.status(500).json({ error: "❌ Failed to remove booking", details: err }));
});

// 📌 **5️⃣ Find a Booking by Name & Age**
app.get("/findbooking", (req, res) => {
  const { cust_name, age } = req.query;

  mongoose.connection.db.collection("booking").findOne({ cust_name, age: parseInt(age) })
    .then((result) => {
      if (!result) return res.status(404).json({ error: "❌ Booking not found" });
      res.json(result);
    })
    .catch((err) => res.status(500).json({ error: "❌ Failed to find booking", details: err }));
});

// 📌 **6️⃣ Find People with the Same Class**
app.get("/sameclass/:class", (req, res) => {
  const bookingClass = req.params.class;

  mongoose.connection.db.collection("booking").find({ class: bookingClass }).toArray()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: "❌ Failed to find matching bookings", details: err }));
});

// 📌 **7️⃣ Update a Booking by ID**
app.put("/updatebooking/:id", (req, res) => {
  const bookingId = req.params.id;
  const updatedData = req.body;

  mongoose.connection.db.collection("booking").updateOne(
    { _id: new ObjectId(bookingId) },
    { $set: updatedData }
  )
    .then((result) => {
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "❌ Booking not found" });
      }
      res.json({ message: "✅ Booking updated successfully" });
    })
    .catch((err) => res.status(500).json({ error: "❌ Failed to update booking", details: err }));
});

// 📌 **8️⃣ Default Route**
app.use("/", (req, res) => {
  res.send("✅ Server is up and running");
});
