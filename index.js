console.log("Hello World!");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Welcome to the Nodemon API!.");
});

mongoose.connect("mongodb+srv://admin_Gamindu:qAOd3twlBHMDfhXx@backenddb.u46kgj6.mongodb.net/?appName=BackendDB")
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.error("Connection failed:", err);
    });
    