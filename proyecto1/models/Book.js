const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publicationDate: Date,
  publisher: String,
  available: Boolean,
  history: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      reservedDate: Date,
      returnDate: Date,
    },
  ],
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Book', bookSchema);
