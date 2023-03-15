const mongoose = require('mongoose');
require('dotenv').config();

const db = {};

db.connect = async () => {
  try {
    await mongoose.connect(process.env.COSMOS_STR, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  }
};

db.disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from database');
  } catch (err) {
    console.error('Failed to disconnect from database:', err);
    process.exit(1);
  }
};

module.exports = db;
