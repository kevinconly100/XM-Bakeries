// models/reportModel.js
// Handles report-related database operations (sales, low stock)
const db = require('../db');

// Generate a sales report
exports.salesReport = (req, res) => {
  const sql = `
    SELECT o.id, u.name AS customer, p.name AS product, o.quantity, p.price, o.status, o.created_at 
    FROM orders o
    JOIN users u ON o.user_id = u.id
    JOIN products p ON o.product_id = p.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Generate a low stock report
exports.lowStock = (req, res) => {
  db.query("SELECT * FROM products WHERE quantity < 10", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};