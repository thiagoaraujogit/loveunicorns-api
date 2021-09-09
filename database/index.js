const Sequelize = require('sequelize')
const dbConfig = require('../configs/database.config')

const connection = new Sequelize(dbConfig)

module.exports = connection
