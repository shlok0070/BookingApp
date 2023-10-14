const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/add_user', userController.createUser);

module.exports = router;
