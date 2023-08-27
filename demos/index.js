// Import required modules
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// Configure app to use bodyParser middleware for handling form data
app.use(bodyParser.urlencoded({extended: true}));

// Set EJS as the view engine for rendering pages
app.set("view engine", "ejs");

// Import the custom authentication module
const auth = require('./auth.js');

// Create two users for testing authentication
auth.createUser("John", "Secret123");
auth.createUser("Alice", "pass456");

// Test the authentication function
console.log(auth.authenticateUser("John", "Secret123"));
console.log(auth.authenticateUser("John", "Secret987"));

// Import and configure MySQL database connection
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'proddata'
});

// Establish connection with the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
  } else {
    console.log('Connected to database!');
  }
}); 

// Serve static files from 'home' and 'pics' directories
app.use(express.static("home"));
app.use(express.static("pics"));

// Route to handle login form submission
app.post("/login", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const authenticated = auth.authenticateUser(username, password);
  console.log(authenticated);

  // Check if authentication is successful
  if(authenticated) {
    console.log("Authentication was successful!");
    res.render("home");
  } else {
    console.log("Authentication was NOT successful!");
    res.render("failed");
  }
});

// Route for retrieving and displaying product data
app.get("/shop", function(req, res){
  const ID = req.query.rec;
  connection.query("SELECT * FROM productdata WHERE ID = ?", [ID], function(err, rows, fields) {
    if(err) {
      console.error("Error retrieving data from database:", err);
      res.status(500).send("Error retreiving data from database");
    } else if(rows.length === 0) {
      console.error("No rows found for ID $[ID]");
      res.status(404).send("No product found for ID $[ID]");
    } else {
      // Log retrieved data and render the product page with the data
      console.log("Data retrieved from the Database!");
      const prodName = rows[0].Product;
      const prodModel = rows[0].Model;
      const pic = rows[0].Image;
      res.render("test.ejs", {myMessage: prodName, model: prodModel, myImage: pic});
    }    
  })
});

// Route for posting product data to the server
app.post("/shop", function(req, res){
  const ID = req.query.rec;
  connection.query("SELECT * FROM productdata WHERE ID = ?", [ID], function(err, rows, fields) {
    if(err) {
      console.error("Error retrieving data from database:", err);
      res.status(500).send("Error retreiving data from database");
    } else if(rows.length === 0) {
      console.error("No rows found for ID $[ID]");
      res.status(404).send("No product found for ID $[ID]");
    } else {
      // Log retrieved data and render the product page with the data
      console.log("Data retrieved from the Database!");
      const prodName = rows[0].Product;
      const prodModel = rows[0].Model;
      res.render("test.ejs", {myMessage: prodName, model: prodModel});
}
})
});

// Start the server and listen on port 3000
app.listen(3000, () => {
console.log('Server started on port 3000');
});