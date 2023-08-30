// This is roughly same setup file that was created in the lecture material

// IMPORTS AND SETUP

// Import required modules
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// Configure app to use bodyParser middleware for handling form data
app.use(bodyParser.urlencoded({extended: true}));

// Import the custom authentication module
const auth = require('./auth.js');

// Initialise views engine
app.set("view engine", "ejs");

// Create required user
auth.createUser("user", "pass");

// Test the authentication function
console.log(auth.authUser("user", "pass"));

// CONNECTIONS AND ADMINISTRATION

// Connection to MySQL package and credentials
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'g00411381'
});

// Actual connection, with a test for errors
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
    } else {
        console.log('Test completed, connected to database!');
    }
});

// Serve static files from public directory
app.use(express.static("pages"));

// ROUTING

// Route for log-in
app.post("/login", function(req, res) {
    // store username and password as variables
    const username = req.body.username;
    const password = req.body.password;

    // pass variables into authentication function, returning a Boolean value (see auth.js file)
    const authed = auth.authUser(username, password);
    console.log(authed);

    if (authed) {
        console.log("Login successful!")
        res.render("home");
    } else{
        console.log(err)
        res.render("no-login");
    }
});

// Route to display all products
app.get("/store", function(req, res) {
    connection.query(
        "SELECT * FROM products",
        function(err, rows, fields) {
            if(err) {
                console.error("Error retrieving data: ", err);
                res.status(500).send("Error retrieving data: ", err);
            }
            else {
                console.log("Successfully returned all products");
                // Stores entire query results and pushes to render request
                const results = rows
                res.render("store.ejs", {
                    results: results});
            }
        }
    );
});

// Route to display product
app.get("/item", function(req, res) {
    // Send a SQL query to the database using the information passed by element ID rec
    const ID = req.query.rec;
    connection.query(
        "SELECT * FROM products WHERE ID = ?", 
        [ID], 
        function(err, rows, fields) {
            // Generic error handler
            if(err) {
                console.error("Error retrieving data: ", err);
                res.status(500).send("Error retrieving data: ", err);
            }
            // Error handler where ID does not exist
            else if(rows.length === 0) {
                console.error("Invalid ID: $[ID] does not exist")
                res.render("not-found.ejs", {
                    item: [ID]
                });
            }
            // Action for successful request
            else {
                console.log("Successful request");

                const releaseName = rows[0].Release;
                const artistName = rows[0].Artist;
                const formatCat = rows[0].Format;
                const priceVal = rows[0].Price;
                const desc = rows[0].Description;
                const img = rows[0].Image;
                res.render("item.ejs", {
                    release: releaseName, 
                    artist: artistName,
                    format: formatCat,
                    image: img,
                    price: priceVal,
                    description: desc});
            }
        }
    );
});

// Route to go back to logged-in home page
app.get("/home", function(req, res) {
    res.render("home.ejs");
});

// REQUEST DETECTION

// Listens to the 3000 port for requests
app.listen(3000, () => {
    console.log('Port 3000 listening, connected to database!');
});