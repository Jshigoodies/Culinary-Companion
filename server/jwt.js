const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

// Generate a token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  return token;
};

// Verify a token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.userId;
    return userId;
  } catch (error) {
    throw new Error('Invalid token');
  }
};


module.exports = jwt;