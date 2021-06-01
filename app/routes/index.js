const router = require('express').Router();
const User = require('../model/users');
const userController = require('../controller/UserController');

// Get user by account number or identity_number with query
router.get('/user', userController.getUser)

// Post user to database
router.post('/user', userController.createUser)

// Edit User
router.put('/user/:account_number', userController.modifyUser)

// Delete User
router.delete('/user/:account_number', userController.deleteUser)


module.exports = router;