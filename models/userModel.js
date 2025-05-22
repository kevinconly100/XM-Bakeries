// models/userModel.js
// Handles user authentication and registration logic
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10); // Hash the password
  db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashed], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("User registered");
  });
};

// Login a user and return a JWT token
exports.login = (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err || results.length === 0) return res.status(401).send("User not found");

    const valid = await bcrypt.compare(password, results[0].password); // Compare password
    if (!valid) return res.status(401).send("Wrong password");

    const token = jwt.sign({ id: results[0].id, email: results[0].email }, process.env.JWT_SECRET); // Generate JWT
    res.json({ token });
  });
};
