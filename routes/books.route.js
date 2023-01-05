const express = require('express');
const bookRouter = express.Router();
const { getAllBooks, addBook } = require('../controllers/book.controller');
const { BookValidationMW } = require('../validators/bookValidator');

bookRouter.get('/', getAllBooks);
bookRouter.post('/', BookValidationMW, addBook)

module.exports= bookRouter