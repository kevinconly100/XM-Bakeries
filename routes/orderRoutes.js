// routes/orderRoutes.js
// Handles order-related API endpoints (place/track orders)
const express = require('express');
const router = express.Router();
const { placeOrder, trackOrders } = require('../models/orderModel'); // Import order logic
const { authenticate } = require('../middleware/auth'); // Import authentication middleware

// Place a new order (requires authentication)
router.post('/', authenticate, placeOrder);
// Track all orders (requires authentication)
router.get('/', authenticate, trackOrders);

module.exports = router;
