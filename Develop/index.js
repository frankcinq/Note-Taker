const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// localhost:3000/notes
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (request, response) {
  response.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function (request, response) {
  response.sendFile(path.join(__dirname, "path/to/db-file"));
});

// Create - POST
// Read - GET
// Update - PUT
// Destroy - DELETE

app.listen(PORT, function () {
  console.log("App listening to port: " + PORT);
});
