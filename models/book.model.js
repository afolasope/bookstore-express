const { Schema, default: mongoose } = require('mongoose');

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: false,
    max: [2022, 'Year must be less than or equal to 2022'],
  },
  isbn: {
    type: String,
    required: true,
    unique: [true, 'isbn must be unique'],
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be greater than or equal to 0'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const BookModel = mongoose.model('Books', BookSchema);
module.exports = BookModel;
