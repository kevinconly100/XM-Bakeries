// routes/authRoutes.js
// Handles authentication-related routes (login, register, etc.)

const express = require('express');
const router = express.Router();
const { register, login } = require('../models/userModel');

// Route to register a new user
router.post('/register', register);

// Route for user login
router.post('/login', login);

// Example route (replace with real auth logic later)
router.get('/', (req, res) => {
  res.send('Auth route working');
});

module.exports = router;
