// routes/productRoutes.js
// Handles product-related API endpoints (add/search products)
const express = require('express');
const router = express.Router();
const { addProduct, searchProducts } = require('../models/productModel'); // Import product logic
const { authenticate } = require('../middleware/auth'); // Import authentication middleware



// Add a new product (requires authentication)
 router.post('/', authenticate, addProduct);
// Search for products (requires authentication)
router.get('/search', authenticate, searchProducts);


module.exports = router;
