const express = require('express');
const CONFIG = require('./config/config');
const dbConnect = require('./db/mongodb');

const app = express();
app.use(express.json());

dbConnect();

app.get('/', (req, res) => {
  res.send('hello bookstore');
});

app.listen(CONFIG.PORT, () => {
  console.log(`server is listening at ${CONFIG.PORT}`);
});
