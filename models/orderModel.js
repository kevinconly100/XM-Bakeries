// models/orderModel.js
// Handles order-related database operations
const db = require('../db');

// Place a new order in the database
exports.placeOrder = (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user.id;
  const sql = "INSERT INTO orders (user_id, product_id, quantity, status) VALUES (?, ?, ?, 'pending')";
  db.query(sql, [user_id, product_id, quantity], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Order placed");
  });
};

// Track all orders for the authenticated user
exports.trackOrders = (req, res) => {
  const user_id = req.user.id;
  db.query("SELECT * FROM orders WHERE user_id = ?", [user_id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
