const express = require('express');
const CONFIG = require('./config/config');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello bookstore');
});

app.listen(CONFIG.PORT, () => {
  console.log(`server is listening at ${CONFIG.PORT}`);
});
