const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.EXPRESS_MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(res => console.log("Connected to database"))
.catch(err => console.error("error with database"))

module.exports = connect