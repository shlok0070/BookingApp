const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Existing route for adding a user
router.post('/add_user', userController.createUser);

// Route for fetching all users
router.get('/get_users', userController.getUsers);

// Route for deleting a user by ID (no need for '/users' here)
router.delete('/delete_user/:id', userController.deleteUser);

module.exports = router;
