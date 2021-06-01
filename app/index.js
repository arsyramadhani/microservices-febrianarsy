const express = require('express');
const app = express()
const cors = require('cors');
const morgan = require('morgan') 

require('dotenv').config();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use(morgan('combined'))
require('./config/db');
require('./config/redis'); 

app.use('/', require('./routes'))

module.exports = app