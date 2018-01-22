var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Log into mysql
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sidley",
    database: "burger_db"
  });
};

// Connect to database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports=connection;