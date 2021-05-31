const router = require('express').Router();
const User = require('../model/users');

router.get('/tes', (req, res) => {
    res.send("Allright")
})

router.get('/user', async (req, res) => {
    res.status(400).send({
        message: "Allright ok sdo dsof "
    })
})

// Crreate New User
router.post('/user', async (req, res) => {
    // res.send("Allright")
    const {username,
        account_number,
        email_address,
        identitynumber} = 
    req.body

    const user = new User({
    userName: username,
    accountNumber: account_number,
    emailAddress: email_address,
    identityumber: identitynumber,
    })
    try {
        const newUser = await user.save();
        res.status(201).send({
            message: "User Created",
            details: newUser
        })
    } catch (error) {
        // console.log(error)
        
    }
})



module.exports = router;