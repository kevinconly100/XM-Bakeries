// middleware/auth.js
// Middleware to authenticate requests using JWT
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET; // Secret key for JWT

// Middleware function to check for valid JWT token
exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization; // Get token from Authorization header
  if (!token) return res.status(403).send("Token required");

  try {
    const decoded = jwt.verify(token, secret); // Verify token
    req.user = decoded; // Attach decoded user info to request
    next(); // Continue to next middleware/route
  } catch (e) {
    res.status(401).send("Invalid token");
  }
};
