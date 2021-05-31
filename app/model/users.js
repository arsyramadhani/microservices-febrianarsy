const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        min: 5,
        max: 50,
        unique: true
    },
    accountNumber: {
        type: Number,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    identityumber: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("User", UserSchema);