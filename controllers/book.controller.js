const BookModel = require('../models/book.model');

exports.getAllBooks = async (req, res) => {
  const books = await BookModel.find();
  res.send(books);
};

exports.addBook = async (req, res) => {
  const book = req.body;
  const newBook = await BookModel.create(book);
  if (!newBook) {
    res.status(400).send('Failed to create book');
  }
  res.status(201).send(newBook);
};
