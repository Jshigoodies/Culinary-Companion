const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://jshigoodies:tyghbn99@clustertest.mzaz4qo.mongodb.net/culinary-companion')


module.exports = mongoose.connection;
