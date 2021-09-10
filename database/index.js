const Sequelize = require('sequelize')
const dbConfig = require('../configs/database.config')

const User = require('../models/user.model')

const connection = new Sequelize(dbConfig)

User.init(connection)

module.exports = connection
