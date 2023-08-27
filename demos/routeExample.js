const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//Connect to database:
const mysql = require('mysql');
//Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'proddata'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
  } else {
    console.log('Connected to database!');
  }
});

// Serve static files from the public directory
app.use(express.static('home'));

app.get("/shop", function(req, res) {
  const ID = req.query.rec;
  connection.query("SELECT * FROM productdata WHERE id = ?", [ID], function (err, rows, fields) {
    if (err) {
      console.error('Error retrieving data from database: ', err);
      res.status(500).send('Error retrieving data from database');
    } else if (rows.length === 0) {
      console.error(`No rows found for ID ${ID}`);
      res.status(404).send(`No product found for ID ${ID}`);
    } else {
      console.log('Data retrieved from database!');
      console.log(rows[0].Product);
      console.log(rows[0].Manufacturer);
      console.log(rows[0].Model);
      console.log(rows[0].Price);
      console.log(rows[0].Image);
      const prodName = rows[0].Product;
      const prodModel = rows[0].Model;
      res.render("test.ejs", {myMessage: prodName, model: prodModel});
    }
  });
});



app.post("/shop", function(req, res) {
  const ID = req.body.rec2;
  connection.query("SELECT * FROM productdata WHERE id = ?", [ID], function (err, rows, fields) {
    if (err) {
      console.error('Error retrieving data from database: ', err);
      res.status(500).send('Error retrieving data from database');
    } else if (rows.length === 0) {
      console.error(`No rows found for ID ${ID}`);
      res.status(404).send(`No product found for ID ${ID}`);
    } else {
      console.log('Data retrieved from database!');
      console.log(rows[0].Product);
      console.log(rows[0].Manufacturer);
      console.log(rows[0].Model);
      console.log(rows[0].Price);
      console.log(rows[0].Image);
      const prodName = rows[0].Product;
      const prodModel = rows[0].Model;
      res.render("test.ejs", {myMessage: prodName, model: prodModel});
    }
  });
});



// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});