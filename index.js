console.log("Hello World!");

require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to the Nodemon API!.");
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.error("Connection failed:", err);
    });
    