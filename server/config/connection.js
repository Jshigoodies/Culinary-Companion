const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/culinary-companion')


module.exports = mongoose.connection;
