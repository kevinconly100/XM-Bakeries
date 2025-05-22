// routes/reportRoutes.js
// Handles report-related API endpoints (sales report, low stock)
const express = require('express');
const router = express.Router();
const { salesReport, lowStock } = require('../models/reportModel'); // Import report logic
const { authenticate } = require('../middleware/auth'); // Import authentication middleware

// Get sales report (requires authentication)
router.get('/sales', authenticate, salesReport);
// Get low stock report (requires authentication)
router.get('/low-stock', authenticate, lowStock);

module.exports = router;