const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
};

exports.addBook = async (req, res) => {
    const { title, author, publicationYear, genre, ISBN } = req.body;

    if (!title || !author || !publicationYear || !genre || !ISBN) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newBook = new Book({ title, author, publicationYear, genre, ISBN });
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Error adding book', error: error.message });
    }
};

exports.updateBookAvailability = async (req, res) => {
    const { id } = req.params;
    const { isAvailable, rentedBy } = req.body;

    if (typeof isAvailable !== 'boolean') {
        return res.status(400).json({ message: 'isAvailable must be a boolean value' });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, { isAvailable, rentedBy }, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book updated successfully', book: updatedBook });
    } catch (error) {
        res.status(500).json({ message: 'Error updating book', error: error.message });
    }
};

exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book', error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully', book: deletedBook });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
};
