const mongoose = require('mongoose');
const CONFIG = require('../config/config');

function dbConnect() {
  mongoose.connect(CONFIG.MONGODB_URL);

  mongoose.connect.on('connected', () => {
    console.log('connection successful');
  });
  mongoose.connect.on('error', () => {
    console.log('error connecting');
  });
}
