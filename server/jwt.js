const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

// Generate a token
const token = jwt.sign({ userId: 123 }, secret, { expiresIn: '1h' });

// Verify a token
try {
  const decoded = jwt.verify(token, secret);
  const userId = decoded.userId;
  console.log(`User ID: ${userId}`);
} catch (err) {
  console.error('Invalid token');
}
