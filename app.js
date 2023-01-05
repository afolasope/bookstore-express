const bodyParser = require('body-parser');
const express = require('express');
const CONFIG = require('./config/config');
const dbConnect = require('./db/mongodb');
const bookRouter = require('./routes/books.route');
const { BookValidationMW } = require('./validators/bookValidator');

dbConnect();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('hello bookstore');
// });

app.use('/api/v1/books', bookRouter);

// error handler middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  res.status(errorStatus).send(err.message);
  next();
});

app.listen(CONFIG.PORT, () => {
  console.log(`server is listening at ${CONFIG.PORT}`);
});
