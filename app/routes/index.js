const router = require('express').Router(); 
const userController = require('../controller/UserController');
const User = require('../model/users'); 
const redis = require('../config/redis');

// Get user by account number or identity_number with query
router.get('/user', userController.getUser)

// Post user to database
router.post('/user', userController.createUser)

// Edit User
router.put('/user/:account_number', userController.modifyUser)

// Delete User
router.delete('/user/:account_number', userController.deleteUser)


module.exports = router;