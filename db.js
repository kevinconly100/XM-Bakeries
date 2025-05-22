// db.js
// Load environment variables from .env file
require('dotenv').config();
const mysql = require('mysql2');

// Create a MySQL connection using credentials from environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Database host
  user: process.env.DB_USER, // Database user
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME // Database name
});

// Connect to the database and log status
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Export the connection for use in other modules
module.exports = connection;