
//__________ROUTES____________
var routes = {

  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(request, response) {
      res.render("index", {burgers: response});
    });
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
  
  app.post("/devourBurger", function(req, res) {
    console.log("Devour button works");
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.body.burgerId], function(err, response) {
      res.redirect("/");
    });
  });
}