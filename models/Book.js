const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    genre: { type: String, required: true },
    ISBN: { type: String, required: true, unique: true },
    isAvailable: { type: Boolean, default: true },
    rentedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', default: null },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;