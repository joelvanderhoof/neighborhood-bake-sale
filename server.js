// Server Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Create New Express App
const app = express();

// Sets PORT as variable to be used deployed or locally
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));

// Run Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve Static Files
app.use(express.static("public"));

// Mongoose Server
// mongoose.connect('mongodb://localhost/project3');

// Server Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});