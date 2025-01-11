const express = require('express');
const { registerUser, loginUser, getUsers, toggleUserAccess, deleteUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuser', getUsers);
router.put('/:id', toggleUserAccess);  
router.delete('/:id', deleteUser);   
router.put('/updateuser', updateUser);

module.exports = router;
