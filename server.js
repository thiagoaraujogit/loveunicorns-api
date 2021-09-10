require('dotenv').config()
const express = require('express')
const expressConfigs = require('./configs/express.config')

require('./database')

const app = express()
const PORT = process.env.PORT || 3000

// Load express configs
app.use(expressConfigs)

// Basic routes
const defaultRoute = require('./routes/default.route')

// User routes
const userRoute = require('./routes/user.route')

app.use(defaultRoute)
app.use(userRoute)

app.listen(PORT)
