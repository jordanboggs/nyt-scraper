const express  = require("express");
const bodyParser = require('body-parser');
const path     = require("path");
const PORT     = process.env.PORT || 3001;
const app      = express();
const logger   = require('morgan');
const mongoose = require('mongoose');
const routes   = require('./routes');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Log requests
app.use(logger("dev"));

// Body-parser for AJAX
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Configure mongo for Heroku or dev environment
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Tell mongoose to return Promises
mongoose.Promise = Promise;

// Tell mongoose to connect to MongoDB
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
