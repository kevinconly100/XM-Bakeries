// models/productModel.js
// Handles product-related database operations
const db = require('../db');

// Add a new product to the database
exports.addProduct = (req, res) => {
  const { name, category, price, quantity } = req.body;
  db.query("INSERT INTO products (name, category, price, quantity) VALUES (?, ?, ?, ?)", [name, category, price, quantity], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Product added");
  });
};

// Search for products with optional filters
exports.searchProducts = (req, res) => {
  const { category, minPrice, maxPrice, minQty, maxQty } = req.query;
  let sql = "SELECT * FROM products WHERE 1=1";
  let params = [];
  if (category) { sql += " AND category = ?"; params.push(category); }
  if (minPrice) { sql += " AND price >= ?"; params.push(minPrice); }
  if (maxPrice) { sql += " AND price <= ?"; params.push(maxPrice); }
  if (minQty) { sql += " AND quantity >= ?"; params.push(minQty); }
  if (maxQty) { sql += " AND quantity <= ?"; params.push(maxQty); }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};