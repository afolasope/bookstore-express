const mongoose = require('mongoose');
const CONFIG = require('../config/config');

function dbConnect() {
  mongoose.connect(CONFIG.MONGODB_URL);
//   mongoose.set('strictQuery', true);

  mongoose.connection.on('connected', () => {
    console.log('connection successful');
  });
  mongoose.connection.on('error', () => {
    console.log('error connecting');
  });
}

module.exports = dbConnect;
