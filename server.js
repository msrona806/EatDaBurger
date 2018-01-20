//___________Required Packages_______________
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var path = require("path");

// express setup
var app = express();
var port = process.env.port || 8000;

//handlebars


app.listen(port, function() {
  console.log("listening on port ", port);
});