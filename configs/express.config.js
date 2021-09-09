const bodyParser = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const compress = require('compression')

const app = express()

// Parse body params
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Gzip compression
app.use(compress())

// Secure apps by setting various HTTP headers
app.use(helmet)

module.exports = app
