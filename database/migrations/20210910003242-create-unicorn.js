'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('unicorn', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('unicorn')
  }
}
