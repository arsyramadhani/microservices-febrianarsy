const router = require('express').Router();
const userController = require('../controller/UserController');
const {
    generateToken,
    authenticateToken
} = require('../service/jwt');


// Generate Token
router.get('/token', (req, res) => {
    const token = generateToken({
        account_number: req.body.account_number
    })
    res.json(token)
})

router.get('/', (req, res) => {res.send({message: "Success"})})

// Get user by account number or identity_number with query
router.get('/user', authenticateToken, userController.getUser)

// Post user to database
router.post('/user', authenticateToken, userController.createUser)

// Edit User
router.put('/user/:account_number', authenticateToken, userController.modifyUser)

// Delete User
router.delete('/user/:account_number', authenticateToken, userController.deleteUser)




module.exports = router;