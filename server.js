// server.js
// Import required modules
const express = require('express');
require('dotenv').config(); // Load environment variables from .env
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Mount authentication routes (login/register)
app.use('/api/auth', require('./routes/authRoutes'));

// Mount product, order, and report routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));

// Start the server on the port defined in .env
app.listen(process.env.PORT, () => console.log("Server running"));

// Handle undefined routes with a 404 response
app.use((req, res) => {
  res.status(404).send("Route Not Found");
});