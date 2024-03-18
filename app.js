// app.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRouter = require("./apiRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost/hotel_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mount API router
app.use("/", apiRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
