const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// Basic routes
const defaultRoute = require('./routes/default.route')

app.use(defaultRoute)

app.listen(PORT)
