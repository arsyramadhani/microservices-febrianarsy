let express = require('express');
let app = express()
let cors = require('cors');
let morgan = require('morgan')

require('dotenv').config();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use(morgan('combined'))
require('./config/db');

app.use('/', require('./routes'))

module.exports = app