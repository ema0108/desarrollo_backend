const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  const { title, author, genre, publicationDate, publisher } = req.body;
  try {
    const book = await Book.create({ title, author, genre, publicationDate, publisher, available: true });
    res.status(201).json({ message: 'Book created successfully', book });
  } catch (error) {
    res.status(400).json({ message: 'Error creating book', error });
  }
};
