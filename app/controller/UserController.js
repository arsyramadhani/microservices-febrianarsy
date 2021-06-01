const User = require('../model/users');

const createUser = async (req, res) => {
    const {
        username,
        account_number,
        email_address,
        identitynumber
    } = req.body

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
    } catch (error) {}
}

const getUser = async (req, res) => {
    try {
        if (req.query.account_number) {
            const user = await User.find({
                accountNumber: req.query.account_number,
            })
            res.send(user)
        }

        if (req.query.identity_number) {
            const user = await User.find({
                identityumber: req.query.identity_number
            })
            res.send(user)
        }

    } catch (error) {}
}

const modifyUser = async (req, res) => {
    const {
        username,
        account_number,
        email_address,
        identitynumber
    } = req.body
    // Check Availability
    // Store From Req.Body
    // Save to database 
    try {
        const isExist = await User.findOne({
            accountNumber: req.params.account_number
        })
        !isExist && res.send({message:"data not found"})
        
        const user = {
            userName: username,
            accountNumber: account_number,
            emailAddress: email_address,
            identityumber: identitynumber,
        }
        const newuser = await User.findByIdAndUpdate(isExist.id, user, {
            new: true
        })
        res.send({message: "Success", data: newuser}) 

    } catch (error) {

    }
}

const deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({
            accountNumber: req.params.account_number
        })
        const user = await User.findOne({
            accountNumber: req.params.account_number
        })

        user ? res.send({
            message: "Data Berhasil Dihapus"
        }) : res.send({
            message: "Data tidak ditemukan"
        })

    } catch (error) {

    }
}

module.exports = {
    createUser,
    getUser,
    modifyUser,
    deleteUser
}