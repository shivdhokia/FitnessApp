const express = require('express');
const router = express.Router();
const { getUser, updateUser, deleteUser } = require('../controllers/userController');
const { getAllUsers, getUserById, createUser } = require('../controllers/userController');


// Route to get all users
router.get('/', getAllUsers);
// Route to get a user by ID
router.get('/:id', getUserById);
// Route to create a new user
router.post('/', createUser);
// Route to update a user by ID
router.put('/:id', updateUser);
// Route to delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;