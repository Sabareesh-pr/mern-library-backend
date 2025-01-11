const express = require('express');
const { getBooks, addBook, updateBookAvailability, getBookById, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/get', getBooks);
router.post('/add', addBook);
router.put('/:id', updateBookAvailability);
router.get('/:id', getBookById); 
router.delete('/deletebook/:id', deleteBook); 

module.exports = router;
