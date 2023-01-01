const express = require('express');
const CONFIG = require('./config/config');
const dbConnect = require('./db/mongodb');

const app = express();
app.use(express.json());

dbConnect();

app.get('/', (req, res) => {
  res.send('hello bookstore');
});

// error handler middleware
app.use((err, res, req, next) => {
  const errorStatus = err.status || 500;
  res.status(errorStatus).send('An error occured');
  next();
});


app.listen(CONFIG.PORT, () => {
  console.log(`server is listening at ${CONFIG.PORT}`);
});
