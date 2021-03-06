//https://git.heroku.com/glacial-eyrie-11951.git
//___________Required Packages_______________
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var path = require("path");
//_____________________________________________

// code needed to connect to database. Reads connection file to get login data for mysql.
var connection = require("./config/connection.js")

// express setup
var app = express();
var PORT = process.env.PORT || 8000;

// Parse data coming in, JSON. Makes info pretty
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//________HANDLEBARS__________
// allows handlebars to bring in files from public folder, main directory
app.use(express.static(path.join(__dirname, 'public')));
// used main.handlebars files as default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// tells node what template enging is being used
app.set("view engine", "handlebars");
//____________________________

//__________ROUTES____________
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers", function(request, response) {
    res.render("index", {burgers: response});
  })
  
});
// taking info in from form
app.post("/newBurger", function(req, res) {
  console.log("New Burger button works so far!!");
  // take info from form to add into database
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.newBurger], function(err, response) {
    if (err) throw err; 
    // sends user back to homepage after button is clicked
    res.redirect("/");
  });
});
//
app.post("/devourBurger", function(req, res) {
  console.log("Devour button works");
  connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.body.burgerId], function(err, response) {
    res.redirect("/");
  });
});
// Listener to connect to server
app.listen(PORT, function() {
  console.log("listening on port ", PORT);
});



