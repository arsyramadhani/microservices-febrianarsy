const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.EXPRESS_MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true
})
.then(res => console.log("DB Connected"))
.catch(err => console.error("error with db"))

module.exports = connect